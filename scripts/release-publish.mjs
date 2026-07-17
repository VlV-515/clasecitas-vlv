import { readFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const allowedBumps = new Set(["patch", "minor", "major", "prepatch", "preminor", "premajor", "prerelease"]);
const semverPattern = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/;

function usage() {
  console.error("Usage: npm run release:publish -- <patch|minor|major|prepatch|preminor|premajor|prerelease|x.y.z> [--tag <dist-tag>]");
  process.exit(1);
}

function resolveCommand(command) {
  return process.platform === "win32" ? `${command}.cmd` : command;
}

function isReleaseSpec(value) {
  return allowedBumps.has(value) || semverPattern.test(value);
}

function isPrereleaseVersion(version) {
  return version.includes("-");
}

function parseArgs(argv) {
  const parsed = {
    releaseSpec: "",
    distTag: ""
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--tag") {
      parsed.distTag = argv[index + 1] ?? "";
      index += 1;
      continue;
    }

    if (arg.startsWith("--tag=")) {
      parsed.distTag = arg.slice("--tag=".length);
      continue;
    }

    if (arg.startsWith("--")) {
      throw new Error(`Unknown option: ${arg}`);
    }

    if (!parsed.releaseSpec) {
      parsed.releaseSpec = arg;
      continue;
    }

    throw new Error(`Unexpected argument: ${arg}`);
  }

  if (!parsed.releaseSpec || !isReleaseSpec(parsed.releaseSpec)) {
    usage();
  }

  if (parsed.distTag && !/^[a-z0-9][a-z0-9._-]*$/i.test(parsed.distTag)) {
    throw new Error(`Invalid dist-tag: ${parsed.distTag}`);
  }

  return parsed;
}

function run(command, args, { capture = false } = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(resolveCommand(command), args, {
      cwd: rootDir,
      stdio: capture ? ["inherit", "pipe", "pipe"] : "inherit",
      shell: false
    });

    let stdout = "";
    let stderr = "";

    if (capture) {
      child.stdout.on("data", (chunk) => {
        stdout += chunk.toString();
      });

      child.stderr.on("data", (chunk) => {
        stderr += chunk.toString();
      });
    }

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve({ stdout, stderr });
        return;
      }

      const failure = new Error(`${command} ${args.join(" ")} failed with exit code ${code ?? "unknown"}`);
      failure.stdout = stdout;
      failure.stderr = stderr;
      reject(failure);
    });
  });
}

async function getStdout(command, args) {
  const result = await run(command, args, { capture: true });
  return result.stdout.trim();
}

async function readPackageJson() {
  return JSON.parse(await readFile(path.join(rootDir, "package.json"), "utf8"));
}

async function assertCleanWorktree() {
  const status = await getStdout("git", ["status", "--short"]);
  if (status) {
    throw new Error("git worktree must be clean before publishing");
  }
}

async function assertMainBranch() {
  const branch = await getStdout("git", ["branch", "--show-current"]);
  if (branch !== "main") {
    throw new Error(`publish must run from main; current branch is ${branch || "(detached)"}`);
  }
}

async function assertUpstreamSync() {
  let upstream = "";

  try {
    upstream = await getStdout("git", ["rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{upstream}"]);
  } catch {
    throw new Error("main must track a remote branch before publishing");
  }

  const counts = await getStdout("git", ["rev-list", "--left-right", "--count", `${upstream}...HEAD`]);
  const [behindRaw = "0", aheadRaw = "0"] = counts.split(/\s+/);
  const behind = Number(behindRaw);
  const ahead = Number(aheadRaw);

  if (behind > 0 || ahead > 0) {
    throw new Error(`branch is not synchronized with ${upstream} (behind ${behind}, ahead ${ahead})`);
  }
}

async function assertTagDoesNotExist(tagName) {
  const existing = await getStdout("git", ["tag", "--list", tagName]);
  if (existing) {
    throw new Error(`git tag ${tagName} already exists`);
  }
}

async function stageReleaseFiles() {
  await run("git", ["add", "package.json", "dist", "src/scss/generated"]);
}

async function main() {
  const { releaseSpec, distTag } = parseArgs(process.argv.slice(2));

  await assertCleanWorktree();
  await assertMainBranch();
  await assertUpstreamSync();

  console.log("Running release validation...");
  await run("npm", ["run", "build"]);
  await run("npm", ["run", "lint"]);
  await run("npm", ["run", "test"]);
  await run("npm", ["run", "pack:dry"]);

  console.log(`Bumping version with spec "${releaseSpec}"...`);
  await run("npm", ["version", releaseSpec, "--no-git-tag-version"]);

  const nextPackageJson = await readPackageJson();
  const nextVersion = nextPackageJson.version;
  const releaseTag = `v${nextVersion}`;
  const publishTag = distTag || (isPrereleaseVersion(nextVersion) ? "next" : "latest");

  await assertTagDoesNotExist(releaseTag);

  console.log(`Rebuilding artifacts for ${nextVersion}...`);
  await run("npm", ["run", "build"]);
  await run("npm", ["run", "pack:dry"]);

  await stageReleaseFiles();

  console.log(`Creating release commit chore(release): ${releaseTag}...`);
  await run("git", ["commit", "-m", `chore(release): ${releaseTag}`]);
  await run("git", ["tag", releaseTag]);

  console.log("Pushing release commit and tag to GitHub...");
  await run("git", ["push", "origin", "HEAD", "--follow-tags"]);

  console.log(`Publishing ${nextPackageJson.name}@${nextVersion} to npm with dist-tag ${publishTag}...`);
  const publishArgs = ["publish"];
  if (publishTag !== "latest") {
    publishArgs.push("--tag", publishTag);
  }
  await run("npm", publishArgs);

  console.log(`Release complete: ${nextPackageJson.name}@${nextVersion}`);
  console.log(`Git tag: ${releaseTag}`);
  console.log(`npm dist-tag: ${publishTag}`);
}

main().catch((error) => {
  console.error(`release-publish: ${error.message}`);
  process.exit(1);
});
