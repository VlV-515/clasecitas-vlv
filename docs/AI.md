# AI Usage Guide

Use this guide when generating markup with `clasecitas-vlv`.

## Rules

- Prefer Tailwind-like utility names from the default bundle.
- Use only the Tailwind-like class names shipped by the default bundle.
- Do not add Tailwind CSS or Bootstrap as dependencies just to use these classes.
- Use mobile-first responsive classes: base class first, then `sm:`, `md:`, `lg:`, `xl:`, `2xl:`.
- Use Bootstrap 5-style grid classes only for row/column layout.

## Preferred Patterns

```html
<section class="card p-4">
  <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
    <h2 class="m-0 text-xl font-semibold text-slate">Title</h2>
    <button class="rounded-lg bg-blue px-4 py-2 font-semibold text-white">Action</button>
  </div>
</section>
```

```html
<div class="container">
  <div class="row g-2">
    <div class="col-12 col-md-4"></div>
    <div class="col-12 col-md-8"></div>
  </div>
</div>
```

## Avoid

- `col-xs-*`; use `col-*` for extra-small.
- Inline spacing values when a `0..20` utility exists.
