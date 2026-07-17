import { block, rule } from "./css-utils.mjs";
import { colors, defaultBorderColor, fontWeights, maxScale, radius, shadows, spacingValue, textSizes } from "./style-data.mjs";

function spacingUtilities() {
  const rules = [];
  const marginMap = {
    m: ["margin"],
    mx: ["margin-left", "margin-right"],
    my: ["margin-top", "margin-bottom"],
    mt: ["margin-top"],
    mr: ["margin-right"],
    mb: ["margin-bottom"],
    ml: ["margin-left"]
  };
  const paddingMap = {
    p: ["padding"],
    px: ["padding-left", "padding-right"],
    py: ["padding-top", "padding-bottom"],
    pt: ["padding-top"],
    pr: ["padding-right"],
    pb: ["padding-bottom"],
    pl: ["padding-left"]
  };

  for (const [prefix, properties] of Object.entries(marginMap)) {
    rules.push(rule(`${prefix}-auto`, Object.fromEntries(properties.map((property) => [property, "auto"]))));
    for (let index = 0; index <= maxScale; index += 1) {
      rules.push(rule(`${prefix}-${index}`, Object.fromEntries(properties.map((property) => [property, spacingValue(index)]))));
    }
  }

  for (const [prefix, properties] of Object.entries(paddingMap)) {
    for (let index = 0; index <= maxScale; index += 1) {
      rules.push(rule(`${prefix}-${index}`, Object.fromEntries(properties.map((property) => [property, spacingValue(index)]))));
    }
  }

  return block("Spacing", rules);
}

function gapUtilities() {
  const rules = [];

  for (let index = 0; index <= maxScale; index += 1) {
    const value = spacingValue(index);
    rules.push(rule(`gap-${index}`, { gap: value }));
    rules.push(rule(`gap-x-${index}`, { "column-gap": value }));
    rules.push(rule(`gap-y-${index}`, { "row-gap": value }));
  }

  return block("Gap", rules);
}

function layoutUtilities() {
  return block("Layout", [
    rule("block", { display: "block" }),
    rule("inline-block", { display: "inline-block" }),
    rule("inline", { display: "inline" }),
    rule("flex", { display: "flex" }),
    rule("inline-flex", { display: "inline-flex" }),
    rule("grid", { display: "grid" }),
    rule("inline-grid", { display: "inline-grid" }),
    rule("hidden", { display: "none" }),
    rule("flex-row", { "flex-direction": "row" }),
    rule("flex-row-reverse", { "flex-direction": "row-reverse" }),
    rule("flex-col", { "flex-direction": "column" }),
    rule("flex-col-reverse", { "flex-direction": "column-reverse" }),
    rule("flex-wrap", { "flex-wrap": "wrap" }),
    rule("flex-nowrap", { "flex-wrap": "nowrap" }),
    rule("flex-wrap-reverse", { "flex-wrap": "wrap-reverse" }),
    rule("flex-1", { flex: "1 1 0%" }),
    rule("flex-auto", { flex: "1 1 auto" }),
    rule("flex-initial", { flex: "0 1 auto" }),
    rule("flex-none", { flex: "none" }),
    rule("grow", { "flex-grow": "1" }),
    rule("grow-0", { "flex-grow": "0" }),
    rule("shrink", { "flex-shrink": "1" }),
    rule("shrink-0", { "flex-shrink": "0" }),
    rule("justify-normal", { "justify-content": "normal" }),
    rule("justify-start", { "justify-content": "flex-start" }),
    rule("justify-end", { "justify-content": "flex-end" }),
    rule("justify-center", { "justify-content": "center" }),
    rule("justify-between", { "justify-content": "space-between" }),
    rule("justify-around", { "justify-content": "space-around" }),
    rule("justify-evenly", { "justify-content": "space-evenly" }),
    rule("items-start", { "align-items": "flex-start" }),
    rule("items-end", { "align-items": "flex-end" }),
    rule("items-center", { "align-items": "center" }),
    rule("items-baseline", { "align-items": "baseline" }),
    rule("items-stretch", { "align-items": "stretch" }),
    rule("content-center", { "align-content": "center" }),
    rule("content-between", { "align-content": "space-between" }),
    rule("place-items-center", { "place-items": "center" }),
    rule("place-items-start", { "place-items": "start" }),
    rule("place-items-end", { "place-items": "end" }),
    rule("place-content-center", { "place-content": "center" }),
    rule("place-content-between", { "place-content": "space-between" }),
    rule("grid-cols-1", { "grid-template-columns": "repeat(1, minmax(0, 1fr))" }),
    rule("grid-cols-2", { "grid-template-columns": "repeat(2, minmax(0, 1fr))" }),
    rule("grid-cols-3", { "grid-template-columns": "repeat(3, minmax(0, 1fr))" }),
    rule("grid-cols-4", { "grid-template-columns": "repeat(4, minmax(0, 1fr))" }),
    rule("grid-cols-5", { "grid-template-columns": "repeat(5, minmax(0, 1fr))" }),
    rule("grid-cols-6", { "grid-template-columns": "repeat(6, minmax(0, 1fr))" }),
    rule("grid-cols-12", { "grid-template-columns": "repeat(12, minmax(0, 1fr))" }),
    rule("grid-auto-fill-xs", { "grid-template-columns": "repeat(auto-fill, minmax(160px, 1fr))" }),
    rule("grid-auto-fill-sm", { "grid-template-columns": "repeat(auto-fill, minmax(220px, 1fr))" }),
    rule("grid-auto-fill-md", { "grid-template-columns": "repeat(auto-fill, minmax(280px, 1fr))" }),
    rule("grid-auto-fill-lg", { "grid-template-columns": "repeat(auto-fill, minmax(320px, 1fr))" }),
    rule("grid-auto-fill-xl", { "grid-template-columns": "repeat(auto-fill, minmax(400px, 1fr))" }),
    rule("grid-auto-fit-xs", { "grid-template-columns": "repeat(auto-fit, minmax(160px, 1fr))" }),
    rule("grid-auto-fit-sm", { "grid-template-columns": "repeat(auto-fit, minmax(220px, 1fr))" }),
    rule("grid-auto-fit-md", { "grid-template-columns": "repeat(auto-fit, minmax(280px, 1fr))" }),
    rule("grid-auto-fit-lg", { "grid-template-columns": "repeat(auto-fit, minmax(320px, 1fr))" }),
    rule("grid-auto-fit-xl", { "grid-template-columns": "repeat(auto-fit, minmax(400px, 1fr))" }),
    rule("col-span-1", { "grid-column": "span 1 / span 1" }),
    rule("col-span-2", { "grid-column": "span 2 / span 2" }),
    rule("col-span-3", { "grid-column": "span 3 / span 3" }),
    rule("col-span-4", { "grid-column": "span 4 / span 4" }),
    rule("col-span-6", { "grid-column": "span 6 / span 6" }),
    rule("col-span-full", { "grid-column": "1 / -1" })
  ]);
}

function typographyUtilities() {
  const rules = [
    rule("text-left", { "text-align": "left" }),
    rule("text-center", { "text-align": "center" }),
    rule("text-right", { "text-align": "right" }),
    rule("text-justify", { "text-align": "justify" }),
    rule("truncate", { overflow: "hidden", "text-overflow": "ellipsis", "white-space": "nowrap" }),
    rule("whitespace-normal", { "white-space": "normal" }),
    rule("whitespace-nowrap", { "white-space": "nowrap" }),
    rule("text-balance", { "text-wrap": "balance" }),
    rule("uppercase", { "text-transform": "uppercase" }),
    rule("lowercase", { "text-transform": "lowercase" }),
    rule("capitalize", { "text-transform": "capitalize" })
  ];

  for (const [name, [fontSize, lineHeight]] of Object.entries(textSizes)) {
    rules.push(rule(`text-${name}`, { "font-size": fontSize, "line-height": lineHeight }));
  }

  for (const [name, weight] of Object.entries(fontWeights)) {
    rules.push(rule(`font-${name}`, { "font-weight": String(weight) }));
  }

  return block("Typography", rules);
}

function colorUtilities() {
  const rules = [];

  for (const color of Object.keys(colors)) {
    rules.push(rule(`text-${color}`, { color: `var(--cc-color-${color})` }));
    rules.push(rule(`bg-${color}`, { "background-color": `var(--cc-color-${color})` }));
    rules.push(rule(`border-${color}`, { "border-color": `var(--cc-color-${color})` }));
    rules.push(rule(`divider-${color}`, { "background-color": `var(--cc-color-${color})` }));
  }

  return block("Color", rules);
}

function borderUtilities() {
  const rules = [
    rule("border", { "border-width": "1px", "border-style": "solid", "border-color": defaultBorderColor }),
    rule("border-0", { "border-width": "0" }),
    rule("border-t", { "border-top-width": "1px", "border-top-style": "solid", "border-top-color": defaultBorderColor }),
    rule("border-r", { "border-right-width": "1px", "border-right-style": "solid", "border-right-color": defaultBorderColor }),
    rule("border-b", { "border-bottom-width": "1px", "border-bottom-style": "solid", "border-bottom-color": defaultBorderColor }),
    rule("border-l", { "border-left-width": "1px", "border-left-style": "solid", "border-left-color": defaultBorderColor }),
    rule("border-solid", { "border-style": "solid" }),
    rule("border-dashed", { "border-style": "dashed" }),
    rule("border-dotted", { "border-style": "dotted" })
  ];

  for (const [name, value] of Object.entries(radius)) {
    rules.push(rule(`rounded-${name}`, { "border-radius": value }));
  }

  return block("Border", rules);
}

function sizingUtilities() {
  return block("Sizing", [
    rule("w-auto", { width: "auto" }),
    rule("w-full", { width: "100%" }),
    rule("w-screen", { width: "100vw" }),
    rule("w-1/2", { width: "50%" }),
    rule("w-1/3", { width: "33.333333%" }),
    rule("w-2/3", { width: "66.666667%" }),
    rule("w-1/4", { width: "25%" }),
    rule("w-3/4", { width: "75%" }),
    rule("h-auto", { height: "auto" }),
    rule("h-full", { height: "100%" }),
    rule("h-screen", { height: "100vh" }),
    rule("min-w-0", { "min-width": "0" }),
    rule("min-w-full", { "min-width": "100%" }),
    rule("max-w-full", { "max-width": "100%" }),
    rule("max-w-screen", { "max-width": "100vw" })
  ]);
}

function effectUtilities() {
  const rules = [
    rule("shadow-none", { "box-shadow": "none" }),
    rule("opacity-0", { opacity: "0" }),
    rule("opacity-50", { opacity: "0.5" }),
    rule("opacity-75", { opacity: "0.75" }),
    rule("opacity-100", { opacity: "1" })
  ];

  for (const [name, value] of Object.entries(shadows)) {
    rules.push(rule(`shadow-${name}`, { "box-shadow": value }));
  }

  return block("Effects", rules);
}

function interactivityUtilities() {
  return block("Interactivity", [
    rule("cursor-auto", { cursor: "auto" }),
    rule("cursor-default", { cursor: "default" }),
    rule("cursor-pointer", { cursor: "pointer" }),
    rule("cursor-not-allowed", { cursor: "not-allowed" }),
    rule("select-none", { "user-select": "none" }),
    rule("select-text", { "user-select": "text" }),
    rule("pointer-events-none", { "pointer-events": "none" }),
    rule("pointer-events-auto", { "pointer-events": "auto" }),
    rule("overflow-auto", { overflow: "auto" }),
    rule("overflow-hidden", { overflow: "hidden" }),
    rule("overflow-visible", { overflow: "visible" }),
    rule("overflow-scroll", { overflow: "scroll" })
  ]);
}

function componentUtilities() {
  return block("Small components", [
    rule("card", {
      "background-color": "var(--cc-color-white)",
      border: `1px solid ${defaultBorderColor}`,
      "border-radius": "0.5rem",
      padding: "1rem"
    }),
    rule("badge", {
      display: "inline-flex",
      "align-items": "center",
      "border-radius": "9999px",
      padding: "0.125rem 0.5rem",
      "font-size": "0.75rem",
      "line-height": "1rem",
      "font-weight": "600"
    }),
    rule("divider", {
      height: "1px",
      width: "100%",
      "background-color": defaultBorderColor
    })
  ]);
}

export function generateUtilities() {
  return [
    layoutUtilities(),
    spacingUtilities(),
    gapUtilities(),
    typographyUtilities(),
    colorUtilities(),
    borderUtilities(),
    sizingUtilities(),
    effectUtilities(),
    interactivityUtilities(),
    componentUtilities()
  ].join("\n\n");
}
