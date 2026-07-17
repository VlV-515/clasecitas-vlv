---
name: update-utilities
description: Update or add CSS utility classes, spacing scales, colors, typography, borders, or effects.
---

# Update Utilities Skill

Use this skill when changing generated CSS classes.

## Steps

1. Read `AGENTS.md`.
2. Read `.codex/rules/style-api.md` and `.codex/rules/grid-responsive.md` when relevant.
3. Edit generator source under `scripts/`, not generated files first.
4. Edit `scripts/style-data.mjs` for shared tokens.
5. Run `npm run build`.
6. Update tests in `scripts/test.mjs`.
7. Update docs and site examples if public API changes.
8. Run full validation from `AGENTS.md`.

## Output Requirements

- Generated output in `dist/` and `src/scss/generated/` must match generators.
- CSS must not include alias classes or Bootstrap-like utility names.
- Public class changes must be documented.
