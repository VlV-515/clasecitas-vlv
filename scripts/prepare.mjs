import { access } from "node:fs/promises";
import { constants } from "node:fs";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const huskyBin = path.join(rootDir, "node_modules", ".bin", process.platform === "win32" ? "husky.cmd" : "husky");

async function exists(filePath) {
  try {
    await access(filePath, constants.X_OK);
    return true;
  } catch {
    return false;
  }
}

if (await exists(huskyBin)) {
  const child = spawn(huskyBin, { cwd: rootDir, stdio: "inherit", shell: process.platform === "win32" });
  child.on("exit", (code) => process.exit(code ?? 0));
} else {
  console.log("husky binary not installed; skipping hook setup");
}

