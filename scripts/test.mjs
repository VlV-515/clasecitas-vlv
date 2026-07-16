import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const css = await readFile(path.join(rootDir, "dist", "clasecitas.css"), "utf8");
const legacy = await readFile(path.join(rootDir, "dist", "legacy.css"), "utf8");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function includes(fileContent, expected, label = expected) {
  assert(fileContent.includes(expected), `Missing ${label}`);
}

includes(css, ".m-20 {\n  margin: 5rem;\n}", "m-20 = 5rem");
includes(css, ".gap-20 {\n  gap: 5rem;\n}", "gap-20 = 5rem");
includes(css, ".p-20 {\n  padding: 5rem;\n}", "p-20 = 5rem");
includes(css, ".md\\:flex {", "md:flex responsive selector");
includes(css, ".lg\\:gap-8 {", "lg:gap-8 responsive selector");
includes(css, ".\\32 xl\\:flex {", "2xl:flex escaped selector");
includes(css, "@media (min-width: 576px)", "sm breakpoint");
includes(css, "@media (min-width: 768px)", "md breakpoint");
includes(css, "@media (min-width: 992px)", "lg breakpoint");
includes(css, "@media (min-width: 1200px)", "xl breakpoint");
includes(css, "@media (min-width: 1400px)", "2xl breakpoint");
includes(css, ".col-md-6 {", "col-md-6");
includes(css, ".col-2xl-12 {", "col-2xl-12");
includes(css, ".row > * {", "row child selector");
includes(css, "padding-right: calc(var(--cc-gutter-x) * 0.5);", "row child right padding");
includes(css, "padding-left: calc(var(--cc-gutter-x) * 0.5);", "row child left padding");
includes(css, "--cc-gutter-x: 4px;", "default 4px gutter");

for (const forbidden of ["flex-gap-", "grid-gap-", "text-size-", "display-none", "col-xs-", `${"KE"}${"20"}`]) {
  assert(!css.includes(forbidden), `Default bundle must not include ${forbidden}`);
}

for (const forbidden of [
  new RegExp(`${"ko"}${"re"}`, "i"),
  new RegExp(`\\b${"er"}${"p"}\\b`, "i")
]) {
  assert(!forbidden.test(css), `Default bundle contains ${forbidden}`);
}

includes(legacy, ".flex-gap-20 {", "legacy flex-gap-20");
includes(legacy, ".text-size-8 {", "legacy text-size-8");
includes(legacy, ".display-none {", "legacy display-none");
