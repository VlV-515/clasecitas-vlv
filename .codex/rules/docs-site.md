# Docs And Site Rules

## Required Docs

Update docs when public API changes:

- `README.md`: quick start and high-level usage.
- `docs/reference.md`: class catalog.
- `docs/migration.md`: old-to-new names and compatibility notes.
- `docs/AI.md`: guidance for AI-generated markup.
- `docs/agent-guidance.md`: maintainer guidance for agent workflows.

## Demo Site

- Source lives in `site/src/`.
- Build output lives in `site/dist/`.
- Use the package CSS from `dist/`, copied by `npm run site:build`.
- Keep examples small, inspectable, and directly connected to public classes.

## Language

- Public docs are English by default.
- Keep examples framework-neutral.
- Avoid private project references.

