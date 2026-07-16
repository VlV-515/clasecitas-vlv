import { block, rule } from "./css-utils.mjs";
import { maxScale, spacingValue } from "./style-data.mjs";

function legacyFlex() {
  const rules = [
    rule("flex-column", { display: "flex", "flex-direction": "column" }),
    rule("flex-reverse", { display: "flex", "flex-direction": "row-reverse" }),
    rule("justify-content-center", { "justify-content": "center" }),
    rule("justify-content-between", { "justify-content": "space-between" }),
    rule("justify-content-around", { "justify-content": "space-around" }),
    rule("justify-content-end", { "justify-content": "flex-end" }),
    rule("justify-content-start", { "justify-content": "flex-start" }),
    rule("align-items-center", { "align-items": "center" }),
    rule("align-items-start", { "align-items": "flex-start" }),
    rule("align-items-end", { "align-items": "flex-end" }),
    rule("flex-grow-1", { "flex-grow": "1" }),
    rule("flex-gap-auto", { gap: "auto" })
  ];

  for (let index = 0; index <= maxScale; index += 1) {
    rules.push(rule(`flex-gap-${index}`, { gap: spacingValue(index) }));
    rules.push(rule(`grid-gap-${index}`, { gap: spacingValue(index) }));
  }

  return block("Legacy flex and gap aliases", rules);
}

function legacyText() {
  const rules = [
    rule("text-no-wrap", { "white-space": "nowrap" }),
    rule("texto-truncado", { overflow: "hidden", "white-space": "nowrap", "text-overflow": "ellipsis" }),
    rule("text-title", { "font-size": "1.25rem", "font-weight": "500", "line-height": "2rem" }),
    rule("text-subtitle", { "font-size": "1rem", "font-weight": "400", "line-height": "1.375rem" }),
    rule("text-bold-xs", { "font-weight": "400" }),
    rule("text-bold-md", { "font-weight": "500" }),
    rule("text-bold", { "font-weight": "700" })
  ];

  for (let index = 1; index <= 8; index += 1) {
    rules.push(rule(`text-size-${index}`, { "font-size": spacingValue(index) }));
  }

  return block("Legacy text aliases", rules);
}

function legacyColorAndUtility() {
  return block("Legacy color and utility aliases", [
    rule("color-white", { color: "#ffffff" }),
    rule("color-black", { color: "#000000" }),
    rule("color-red", { color: "#ff0000" }),
    rule("color-text-secondary", { color: "var(--cc-color-muted)" }),
    rule("color-gray-light", { "background-color": "#f7f7f7" }),
    rule("bg-white", { "background-color": "#ffffff" }),
    rule("bg-gray-light", { "background-color": "#f7f7f7" }),
    rule("bg-black", { "background-color": "#000000" }),
    rule("bg-red", { "background-color": "#ff0000" }),
    rule("bg-background-secondary", { "background-color": "#eeeeee" }),
    rule("border-none", { border: "none" }),
    rule("rounded-1", { "border-radius": "0.25rem" }),
    rule("rounded-2", { "border-radius": "0.5rem" }),
    rule("rounded-3", { "border-radius": "0.75rem" }),
    rule("rounded-4", { "border-radius": "1rem" }),
    rule("display-none", { display: "none" }),
    rule("full-width", { width: "100%" }),
    rule("separador-horizontal", { height: "1px", width: "100%", "background-color": "rgb(180 180 180 / 0.3)" })
  ]);
}

export function generateLegacy() {
  return [legacyFlex(), legacyText(), legacyColorAndUtility()].join("\n\n");
}
