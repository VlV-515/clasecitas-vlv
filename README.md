# clasecitas-vlv

Small utility-first CSS toolkit with Tailwind-like naming and a Bootstrap 5-style grid.

It ships plain CSS for any Node project and SCSS source for teams that prefer Sass imports. It does not depend on Tailwind CSS or Bootstrap.

## Install

```bash
npm install clasecitas-vlv
```

If you also want TypeScript helpers and class-name types, install the matching `clasecitas-vlv-types` version:

```bash
npm install clasecitas-vlv
npm install -D clasecitas-vlv-types
```

`clasecitas-vlv` and `clasecitas-vlv-types` use the same version number on purpose, so the correct companion types package always matches the package version you install.

## CDN Usage

Use a version-pinned CDN URL in production so your styles stay predictable across deployments.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/clasecitas-vlv@1.0.3/dist/clasecitas.min.css"
>
```

You can also use UNPKG:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/clasecitas-vlv@1.0.3/dist/clasecitas.min.css"
>
```

If you prefer CSS imports:

```css
@import url("https://cdn.jsdelivr.net/npm/clasecitas-vlv@1.0.3/dist/clasecitas.min.css");
```

Avoid unpinned CDN URLs in app code and docs examples. When a new package version is released, update these versioned links to the latest published version instead of using `@latest`.

If your project also uses `clasecitas-vlv-types`, keep both package versions aligned.

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
    <h2 class="m-0 text-2xl font-bold text-slate">Dashboard</h2>
    <p class="m-0 text-sm text-gray">Responsive utility classes, no framework dependency.</p>
  </div>
  <button class="rounded-lg bg-blue px-4 py-2 font-semibold text-white">
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

- [Homepage, guide, cheatsheet, and catalog](https://vlv-515.github.io/clasecitas-vlv-page/)
- [Class reference](docs/reference.md)
- [AI usage guide](docs/AI.md)
