# Migration Guide

The default bundle uses Tailwind-like names. Legacy aliases live in `clasecitas-vlv/legacy` and should be temporary.

| Old class | New class |
| --- | --- |
| `flex-column` | `flex flex-col` |
| `flex-reverse` | `flex flex-row-reverse` |
| `justify-content-start` | `justify-start` |
| `justify-content-end` | `justify-end` |
| `justify-content-center` | `justify-center` |
| `justify-content-between` | `justify-between` |
| `justify-content-around` | `justify-around` |
| `align-items-start` | `items-start` |
| `align-items-end` | `items-end` |
| `align-items-center` | `items-center` |
| `flex-gap-4` | `gap-4` |
| `grid-gap-4` | `gap-4` |
| `text-size-4` | `text-base` |
| `text-size-5` | `text-xl` |
| `text-size-6` | `text-2xl` |
| `text-bold-xs` | `font-normal` |
| `text-bold-md` | `font-medium` |
| `text-bold` | `font-bold` |
| `text-no-wrap` | `whitespace-nowrap` |
| `texto-truncado` | `truncate` |
| `display-none` | `hidden` |
| `border-none` | `border-0` |
| `rounded-1` | `rounded-sm` |
| `rounded-2` | `rounded-lg` |
| `full-width` | `w-full` |

## Grid Changes

Extra-small columns follow Bootstrap 5 naming:

```html
<!-- Before -->
<div class="col-xs-12 col-md-6"></div>

<!-- Now -->
<div class="col-12 col-md-6"></div>
```

## Recommended Migration Order

1. Import both default and legacy bundles.
2. Replace old layout and spacing aliases first.
3. Replace typography and color aliases.
4. Remove `clasecitas-vlv/legacy`.

