import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const css = await readFile(path.join(rootDir, "dist", "clasecitas.css"), "utf8");

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
includes(css, "--cc-color-blue: #3b82f6;", "blue token");
includes(css, ".text-red {\n  color: var(--cc-color-red);\n}", "text-red");
includes(css, ".bg-blue {\n  background-color: var(--cc-color-blue);\n}", "bg-blue");
includes(css, ".border-emerald {\n  border-color: var(--cc-color-emerald);\n}", "border-emerald");
includes(css, ".divider-amber {\n  background-color: var(--cc-color-amber);\n}", "divider-amber");

const removedAliasName = ["leg", "acy"].join("");
const forbiddenAliases = [
  ["flex", "gap"].join("-") + "-",
  ["grid", "gap"].join("-") + "-",
  ["text", "size"].join("-") + "-",
  ["display", "none"].join("-"),
  ["col", "xs"].join("-") + "-",
  ["justify", "content"].join("-") + "-",
  ["align", "items"].join("-") + "-",
  `${"KE"}${"20"}`
];

for (const forbidden of forbiddenAliases) {
  assert(!css.includes(forbidden), `Default bundle must not include ${forbidden}`);
}

for (const forbidden of [
  "--cc-color-primary:",
  "--cc-color-secondary:",
  "--cc-color-success:",
  "--cc-color-warning:",
  "--cc-color-danger:",
  "--cc-color-info:",
  "--cc-color-light:",
  "--cc-color-dark:",
  "--cc-color-muted:",
  "--cc-color-surface:",
  "--cc-color-border:",
  ".text-primary {",
  ".bg-primary {",
  ".border-primary {"
]) {
  assert(!css.includes(forbidden), `Default bundle must not include ${forbidden}`);
}

for (const forbidden of [
  new RegExp(`${"ko"}${"re"}`, "i"),
  new RegExp(`\\b${"er"}${"p"}\\b`, "i")
]) {
  assert(!forbidden.test(css), `Default bundle contains ${forbidden}`);
}

for (const removedFile of [
  `dist/${removedAliasName}.css`,
  `dist/${removedAliasName}.min.css`,
  `src/scss/${removedAliasName}.scss`,
  `src/scss/generated/_${removedAliasName}.scss`,
  `scripts/generate-${removedAliasName}.mjs`
]) {
  try {
    await access(path.join(rootDir, removedFile));
    throw new Error(`${removedFile} must not exist`);
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }
}
