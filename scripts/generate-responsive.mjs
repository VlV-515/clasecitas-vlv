import { rule } from "./css-utils.mjs";
import { breakpoints, fontWeights, maxScale, radius, spacingValue, textSizes } from "./style-data.mjs";

function media(minWidth, css) {
  return `@media (min-width: ${minWidth}) {\n${css
    .split("\n")
    .map((line) => (line ? `  ${line}` : line))
    .join("\n")}\n}`;
}

function responsiveDefinitions() {
  const definitions = [
    ["block", { display: "block" }],
    ["inline-block", { display: "inline-block" }],
    ["inline", { display: "inline" }],
    ["flex", { display: "flex" }],
    ["inline-flex", { display: "inline-flex" }],
    ["grid", { display: "grid" }],
    ["inline-grid", { display: "inline-grid" }],
    ["hidden", { display: "none" }],
    ["flex-row", { "flex-direction": "row" }],
    ["flex-row-reverse", { "flex-direction": "row-reverse" }],
    ["flex-col", { "flex-direction": "column" }],
    ["flex-col-reverse", { "flex-direction": "column-reverse" }],
    ["flex-wrap", { "flex-wrap": "wrap" }],
    ["flex-nowrap", { "flex-wrap": "nowrap" }],
    ["justify-start", { "justify-content": "flex-start" }],
    ["justify-end", { "justify-content": "flex-end" }],
    ["justify-center", { "justify-content": "center" }],
    ["justify-between", { "justify-content": "space-between" }],
    ["justify-around", { "justify-content": "space-around" }],
    ["justify-evenly", { "justify-content": "space-evenly" }],
    ["items-start", { "align-items": "flex-start" }],
    ["items-end", { "align-items": "flex-end" }],
    ["items-center", { "align-items": "center" }],
    ["items-baseline", { "align-items": "baseline" }],
    ["items-stretch", { "align-items": "stretch" }],
    ["text-left", { "text-align": "left" }],
    ["text-center", { "text-align": "center" }],
    ["text-right", { "text-align": "right" }],
    ["w-auto", { width: "auto" }],
    ["w-full", { width: "100%" }],
    ["w-screen", { width: "100vw" }],
    ["w-1/2", { width: "50%" }],
    ["w-1/3", { width: "33.333333%" }],
    ["w-2/3", { width: "66.666667%" }],
    ["w-1/4", { width: "25%" }],
    ["w-3/4", { width: "75%" }],
    ["h-auto", { height: "auto" }],
    ["h-full", { height: "100%" }],
    ["h-screen", { height: "100vh" }]
  ];

  const spacingMaps = {
    m: ["margin"],
    mx: ["margin-left", "margin-right"],
    my: ["margin-top", "margin-bottom"],
    mt: ["margin-top"],
    mr: ["margin-right"],
    mb: ["margin-bottom"],
    ml: ["margin-left"],
    p: ["padding"],
    px: ["padding-left", "padding-right"],
    py: ["padding-top", "padding-bottom"],
    pt: ["padding-top"],
    pr: ["padding-right"],
    pb: ["padding-bottom"],
    pl: ["padding-left"]
  };

  for (const [prefix, properties] of Object.entries(spacingMaps)) {
    for (let index = 0; index <= maxScale; index += 1) {
      definitions.push([
        `${prefix}-${index}`,
        Object.fromEntries(properties.map((property) => [property, spacingValue(index)]))
      ]);
    }
  }

  for (const prefix of ["m", "mx", "my", "mt", "mr", "mb", "ml"]) {
    const properties = spacingMaps[prefix];
    definitions.push([
      `${prefix}-auto`,
      Object.fromEntries(properties.map((property) => [property, "auto"]))
    ]);
  }

  for (let index = 0; index <= maxScale; index += 1) {
    const value = spacingValue(index);
    definitions.push([`gap-${index}`, { gap: value }]);
    definitions.push([`gap-x-${index}`, { "column-gap": value }]);
    definitions.push([`gap-y-${index}`, { "row-gap": value }]);
  }

  for (const columns of [1, 2, 3, 4, 5, 6, 12]) {
    definitions.push([`grid-cols-${columns}`, { "grid-template-columns": `repeat(${columns}, minmax(0, 1fr))` }]);
  }

  for (const [name, [fontSize, lineHeight]] of Object.entries(textSizes)) {
    definitions.push([`text-${name}`, { "font-size": fontSize, "line-height": lineHeight }]);
  }

  for (const [name, weight] of Object.entries(fontWeights)) {
    definitions.push([`font-${name}`, { "font-weight": String(weight) }]);
  }

  for (const [name, value] of Object.entries(radius)) {
    definitions.push([`rounded-${name}`, { "border-radius": value }]);
  }

  return definitions;
}

export function generateResponsive() {
  const definitions = responsiveDefinitions();
  const chunks = ["/* Responsive variants */"];

  for (const [breakpoint, minWidth] of Object.entries(breakpoints)) {
    const rules = definitions.map(([className, declarations]) => rule(`${breakpoint}:${className}`, declarations)).join("\n\n");
    chunks.push(media(minWidth, rules));
  }

  return chunks.join("\n\n");
}
