# clasecitas-vlv

Small utility-first CSS toolkit with Tailwind-like naming and a Bootstrap 5-style grid.

It ships plain CSS for any Node project and SCSS source for teams that prefer Sass imports. It does not depend on Tailwind CSS or Bootstrap.

## Install

```bash
npm install clasecitas-vlv
```

## CSS Usage

```js
import "clasecitas-vlv/css";
```

Or with a stylesheet bundler:

```css
@import "clasecitas-vlv/css";
```

## SCSS Usage

```scss
@use "clasecitas-vlv/scss";
```

## Examples

```html
<section class="card flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
  <div>
    <h2 class="m-0 text-2xl font-bold text-dark">Dashboard</h2>
    <p class="m-0 text-sm text-muted">Responsive utility classes, no framework dependency.</p>
  </div>
  <button class="rounded-lg bg-primary px-4 py-2 font-semibold text-surface">
    Continue
  </button>
</section>
```

```html
<div class="container">
  <div class="row g-2">
    <aside class="col-12 col-md-4">Filters</aside>
    <main class="col-12 col-md-8">Content</main>
  </div>
</div>
```

## Scales

- Spacing and gutters: `0..20`.
- Base unit: `0.25rem`.
- `m-20`, `p-20`, `gap-20`, and `g-20` equal `5rem`.
- Grid gutter default: `--cc-gutter-x: 4px`, so each column gets `2px` per side.

## Responsive Prefixes

Classes are mobile-first. Unprefixed utilities apply to all screen sizes; prefixed utilities apply at the breakpoint and above.

| Prefix | Min width |
| --- | ---: |
| `sm:` | `576px` |
| `md:` | `768px` |
| `lg:` | `992px` |
| `xl:` | `1200px` |
| `2xl:` | `1400px` |

## More Docs

- [Class reference](docs/reference.md)
- [AI usage guide](docs/AI.md)
