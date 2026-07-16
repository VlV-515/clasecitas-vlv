import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ignoredDirs = new Set([".git", ".husky/_", "node_modules", "site/dist"]);
const forbiddenProjectTerms = [
  new RegExp(`\\b${"KE"}${"20"}\\b`, "i"),
  new RegExp(`\\b${"ko"}${"re"}\\b`, "i"),
  new RegExp(`\\b${"er"}${"p"}\\b`, "i")
];

async function walk(dir) {
  const entries = await readdir(dir);
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const relativePath = path.relative(rootDir, fullPath);

    if ([...ignoredDirs].some((ignored) => relativePath === ignored || relativePath.startsWith(`${ignored}${path.sep}`))) {
      continue;
    }

    const info = await stat(fullPath);
    if (info.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const files = await walk(rootDir);

for (const file of files) {
  const relativePath = path.relative(rootDir, file);
  if (
    relativePath.endsWith(".png") ||
    relativePath.endsWith(".jpg") ||
    relativePath.endsWith(".jpeg") ||
    relativePath.endsWith(".DS_Store")
  ) {
    continue;
  }

  const content = await readFile(file, "utf8");

  assert(!content.includes("\t"), `${relativePath} contains tabs`);
  for (const pattern of forbiddenProjectTerms) {
    assert(!pattern.test(content), `${relativePath} contains a forbidden project-specific term`);
  }
}

const packageJson = JSON.parse(await readFile(path.join(rootDir, "package.json"), "utf8"));
assert(packageJson.name === "clasecitas-vlv", "package name must stay clasecitas-vlv");
assert(packageJson.license === "MIT", "license must stay MIT");
