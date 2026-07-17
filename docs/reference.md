# Class Reference

## Layout

- Display: `block`, `inline-block`, `inline`, `flex`, `inline-flex`, `grid`, `inline-grid`, `hidden`.
- Flex direction: `flex-row`, `flex-row-reverse`, `flex-col`, `flex-col-reverse`.
- Flex wrap: `flex-wrap`, `flex-nowrap`, `flex-wrap-reverse`.
- Flex sizing: `flex-1`, `flex-auto`, `flex-initial`, `flex-none`, `grow`, `grow-0`, `shrink`, `shrink-0`.
- Main axis: `justify-start`, `justify-end`, `justify-center`, `justify-between`, `justify-around`, `justify-evenly`.
- Cross axis: `items-start`, `items-end`, `items-center`, `items-baseline`, `items-stretch`.

## Spacing

All spacing utilities use a `0.25rem` step and support `0..20`.

- Margin: `m-*`, `mx-*`, `my-*`, `mt-*`, `mr-*`, `mb-*`, `ml-*`, plus `*-auto` for margin utilities.
- Padding: `p-*`, `px-*`, `py-*`, `pt-*`, `pr-*`, `pb-*`, `pl-*`.
- Gap: `gap-*`, `gap-x-*`, `gap-y-*`.

## Bootstrap 5-Style Grid

- Containers: `container`, `container-fluid`.
- Rows: `row`.
- Columns: `col`, `col-auto`, `col-1..12`.
- Responsive columns: `col-sm-*`, `col-md-*`, `col-lg-*`, `col-xl-*`, `col-2xl-*`.
- Bootstrap compatibility alias: `col-xxl-*`.
- Offsets: `offset-*`, `offset-sm-*`, `offset-md-*`, `offset-lg-*`, `offset-xl-*`, `offset-2xl-*`.
- Row columns: `row-cols-1..6` and responsive variants.
- Gutters: `g-*`, `gx-*`, `gy-*` from `0..20`.

## Typography

- Alignment: `text-left`, `text-center`, `text-right`, `text-justify`.
- Size: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`, `text-7xl`, `text-8xl`, `text-9xl`.
- Weight: `font-thin`, `font-extralight`, `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`, `font-black`.
- Helpers: `truncate`, `whitespace-normal`, `whitespace-nowrap`, `text-balance`, `uppercase`, `lowercase`, `capitalize`.

## Color

Explicit color families power text, background, border, and divider utilities:

- Utility groups: `text-*`, `bg-*`, `border-*`, `divider-*`.
- Color names: `white`, `black`, `slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`.
- Named colors use the Tailwind `500` tone for that family, exposed without the `-500` suffix.

Customize with CSS variables:

```css
:root {
  --cc-color-blue: #3b82f6;
  --cc-color-red: #ef4444;
}
```

## Borders, Sizing, Effects

- Borders: `border`, `border-0`, `border-t`, `border-r`, `border-b`, `border-l`, `border-solid`, `border-dashed`, `border-dotted`.
- Divider helpers: `divider`, plus `divider-*` color variants such as `divider-slate` or `divider-red`.
- Radius: `rounded-none`, `rounded-xs`, `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full`.
- Width: `w-auto`, `w-full`, `w-screen`, `w-1/2`, `w-1/3`, `w-2/3`, `w-1/4`, `w-3/4`.
- Height: `h-auto`, `h-full`, `h-screen`.
- Effects: `shadow-none`, `shadow-sm`, `shadow-md`, `shadow-lg`, `opacity-0`, `opacity-50`, `opacity-75`, `opacity-100`.
- Interaction: `cursor-auto`, `cursor-default`, `cursor-pointer`, `cursor-not-allowed`, `select-none`, `select-text`, `pointer-events-none`, `pointer-events-auto`.

## Responsive Variants

Use `sm:`, `md:`, `lg:`, `xl:`, and `2xl:` before responsive-enabled utilities:

```html
<div class="flex flex-col gap-4 md:flex-row lg:gap-8"></div>
```
