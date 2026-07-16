import { selector } from "./css-utils.mjs";
import { breakpoints, maxScale, spacingValue } from "./style-data.mjs";

const containerMaxWidths = {
  sm: "540px",
  md: "720px",
  lg: "960px",
  xl: "1140px",
  "2xl": "1320px"
};

function rule(rawSelector, declarations) {
  const body = Object.entries(declarations)
    .map(([property, value]) => `  ${property}: ${value};`)
    .join("\n");

  return `${rawSelector} {\n${body}\n}`;
}

function media(minWidth, css) {
  return `@media (min-width: ${minWidth}) {\n${css
    .split("\n")
    .map((line) => (line ? `  ${line}` : line))
    .join("\n")}\n}`;
}

function columnWidth(span) {
  return `${Number(((span / 12) * 100).toFixed(6))}%`;
}

function baseGrid() {
  const rules = [
    rule(`${selector("container")}, ${selector("container-fluid")}`, {
      width: "100%",
      "padding-right": "calc(var(--cc-gutter-x) * 0.5)",
      "padding-left": "calc(var(--cc-gutter-x) * 0.5)",
      "margin-right": "auto",
      "margin-left": "auto"
    }),
    rule(selector("row"), {
      display: "flex",
      "flex-wrap": "wrap",
      "margin-top": "calc(-1 * var(--cc-gutter-y))",
      "margin-right": "calc(-0.5 * var(--cc-gutter-x))",
      "margin-left": "calc(-0.5 * var(--cc-gutter-x))"
    }),
    rule(`${selector("row")} > *`, {
      "flex-shrink": "0",
      width: "100%",
      "max-width": "100%",
      "padding-right": "calc(var(--cc-gutter-x) * 0.5)",
      "padding-left": "calc(var(--cc-gutter-x) * 0.5)",
      "margin-top": "var(--cc-gutter-y)"
    })
  ];

  return rules.join("\n\n");
}

function containerQueries() {
  const chunks = [];

  for (const [breakpoint, width] of Object.entries(containerMaxWidths)) {
    const minWidth = breakpoints[breakpoint];
    chunks.push(media(minWidth, rule(selector("container"), { "max-width": width })));
  }

  return chunks.join("\n\n");
}

function columnRules(infix = "") {
  const rules = [
    rule(selector(`col${infix}`), {
      flex: "1 0 0%"
    }),
    rule(selector(`col${infix}-auto`), {
      flex: "0 0 auto",
      width: "auto"
    })
  ];

  for (let span = 1; span <= 12; span += 1) {
    rules.push(
      rule(selector(`col${infix}-${span}`), {
        flex: "0 0 auto",
        width: columnWidth(span)
      })
    );
  }

  for (let span = 0; span <= 11; span += 1) {
    rules.push(
      rule(selector(`offset${infix}-${span}`), {
        "margin-left": span === 0 ? "0" : columnWidth(span)
      })
    );
  }

  for (let count = 1; count <= 6; count += 1) {
    rules.push(
      rule(`${selector(`row-cols${infix}-${count}`)} > *`, {
        flex: "0 0 auto",
        width: `${Number((100 / count).toFixed(6))}%`
      })
    );
  }

  return rules.join("\n\n");
}

function responsiveColumns() {
  const chunks = [columnRules()];

  for (const [breakpoint, minWidth] of Object.entries(breakpoints)) {
    chunks.push(media(minWidth, columnRules(`-${breakpoint}`)));
  }

  const xxlAlias = media(breakpoints["2xl"], columnRules("-xxl"));
  chunks.push(xxlAlias);

  return chunks.join("\n\n");
}

function gutterUtilities() {
  const rules = [];

  for (let index = 0; index <= maxScale; index += 1) {
    const value = spacingValue(index);
    rules.push(rule(selector(`g-${index}`), { "--cc-gutter-x": value, "--cc-gutter-y": value }));
    rules.push(rule(selector(`gx-${index}`), { "--cc-gutter-x": value }));
    rules.push(rule(selector(`gy-${index}`), { "--cc-gutter-y": value }));
  }

  return rules.join("\n\n");
}

export function generateGrid() {
  return ["/* Bootstrap 5-style grid */", baseGrid(), containerQueries(), responsiveColumns(), gutterUtilities()].join("\n\n");
}
