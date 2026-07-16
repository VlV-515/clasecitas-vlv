# Grid And Responsive Rules

## Grid

- Grid API follows Bootstrap 5 style.
- Extra-small columns are unprefixed: `col-12`, not `col-xs-12`.
- Supported column spans are `1..12`.
- Keep `col-xxl-*` as compatibility alias for users expecting Bootstrap naming.
- Default gutter is `--cc-gutter-x: 4px`, which gives `2px` per column side.

## Breakpoints

Use Bootstrap 5 breakpoint values:

- `sm`: `576px`
- `md`: `768px`
- `lg`: `992px`
- `xl`: `1200px`
- `2xl`: `1400px`

## Responsive Utilities

- Responsive utilities are mobile-first.
- Base class applies to all sizes.
- Prefixed class applies at breakpoint and above.
- Selectors must be CSS-escaped, for example `.md\:flex`.

## Examples

```html
<div class="flex flex-col gap-4 md:flex-row lg:gap-8"></div>
```

```html
<div class="row g-2">
  <div class="col-12 col-md-6"></div>
  <div class="col-12 col-md-6"></div>
</div>
```

