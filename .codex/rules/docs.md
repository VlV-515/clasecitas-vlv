# Docs Rules

## Required Docs

Update docs when public API changes:

- `README.md`: quick start and high-level usage.
- `docs/reference.md`: class catalog.
- `docs/AI.md`: guidance for AI-generated markup.

## Language

- Public docs are English by default.
- Keep examples framework-neutral.
- Avoid private project references.
- Document only supported Tailwind-like class names.
- If docs include CDN examples, use explicit version-pinned package URLs.
- When the package version changes, update every pinned CDN URL in public docs to the newest published version.
- Never document CDN examples with `@latest`.
- If docs mention `clasecitas-vlv-types`, keep its documented version aligned with `clasecitas-vlv`.
