import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const siteSrc = path.join(rootDir, "site", "src");
const siteDist = path.join(rootDir, "site", "dist");
const assetsDist = path.join(siteDist, "assets");

await rm(siteDist, { recursive: true, force: true });
await mkdir(assetsDist, { recursive: true });
await cp(siteSrc, siteDist, { recursive: true });
await cp(path.join(rootDir, "dist", "clasecitas.css"), path.join(assetsDist, "clasecitas.css"));
