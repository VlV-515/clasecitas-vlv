# Style API Rules

## Naming

- Default API uses Tailwind-like names.
- Legacy aliases live only in `legacy.css` and `src/scss/legacy.scss`.
- Do not add legacy aliases to `dist/clasecitas.css`.

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

When renaming or replacing a public class:

1. Keep old behavior in `legacy.css` if practical.
2. Add migration docs.
3. Add or update tests.

