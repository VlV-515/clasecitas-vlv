# Docs And Site Rules

## Required Docs

Update docs when public API changes:

- `README.md`: quick start and high-level usage.
- `docs/reference.md`: class catalog.
- `docs/AI.md`: guidance for AI-generated markup.

## Demo Site

- Source lives in `site/src/`.
- Build output lives in `site/dist/`.
- Use the package CSS from `dist/`, copied by `npm run site:build`.
- Keep examples small, inspectable, and directly connected to public classes.

## Language

- Public docs are English by default.
- Keep examples framework-neutral.
- Avoid private project references.
- Document only supported Tailwind-like class names.
