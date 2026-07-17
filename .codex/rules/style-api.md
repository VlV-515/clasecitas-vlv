# Style API Rules

## Naming

- Public API uses Tailwind-like names only.
- Do not add Bootstrap-like aliases such as `justify-content-between`.
- Do not add alias bundles, alias exports, or alias-only files.

## Spacing

- Scale is `0..20`.
- Base unit is `0.25rem`.
- `20` equals `5rem`.
- Supported groups: margin, padding, gap, gutters.

## Typography

- Use `text-xs` through `text-9xl`.
- Use `font-normal`, `font-medium`, `font-semibold`, `font-bold`, and related Tailwind-like weights.
- Keep text utilities small and predictable.

## Colors

- Use CSS variables with `--cc-color-*`.
- Utilities follow `text-*`, `bg-*`, `border-*`.
- Add semantic colors only when they fit common UI use.

## Compatibility

When renaming or replacing a public class, update docs and tests in the same change. Do not keep alias classes for old names.
