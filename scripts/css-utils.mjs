export function cssEscape(value) {
  const string = String(value);
  let result = "";

  for (let index = 0; index < string.length; index += 1) {
    const codeUnit = string.charCodeAt(index);

    if (codeUnit === 0) {
      result += "\uFFFD";
      continue;
    }

    const isControl = (codeUnit >= 1 && codeUnit <= 31) || codeUnit === 127;
    const isLeadingDigit = index === 0 && codeUnit >= 48 && codeUnit <= 57;
    const isSecondDigitAfterDash =
      index === 1 &&
      codeUnit >= 48 &&
      codeUnit <= 57 &&
      string.charCodeAt(0) === 45;

    if (isControl || isLeadingDigit || isSecondDigitAfterDash) {
      result += `\\${codeUnit.toString(16)} `;
      continue;
    }

    if (index === 0 && codeUnit === 45 && string.length === 1) {
      result += "\\-";
      continue;
    }

    const isSafe =
      codeUnit >= 128 ||
      codeUnit === 45 ||
      codeUnit === 95 ||
      (codeUnit >= 48 && codeUnit <= 57) ||
      (codeUnit >= 65 && codeUnit <= 90) ||
      (codeUnit >= 97 && codeUnit <= 122);

    result += isSafe ? string.charAt(index) : `\\${string.charAt(index)}`;
  }

  return result;
}

export function selector(className) {
  return `.${cssEscape(className)}`;
}

export function rule(className, declarations) {
  const body = Object.entries(declarations)
    .map(([property, value]) => `  ${property}: ${value};`)
    .join("\n");

  return `${selector(className)} {\n${body}\n}`;
}

export function block(title, rules) {
  return [`/* ${title} */`, ...rules].join("\n\n");
}

export function minify(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,>])\s*/g, "$1")
    .replace(/;}/g, "}")
    .trim();
}

