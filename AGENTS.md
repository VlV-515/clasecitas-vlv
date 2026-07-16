# AGENTS.md

Guidance for coding agents working on `clasecitas-vlv`.

## Project

`clasecitas-vlv` is a public utility-first CSS package. It ships plain CSS, minified CSS, and SCSS source. It uses Tailwind-like utility names and a Bootstrap 5-style grid, but it must not depend on either framework.

## Commands

```bash
npm install
npm run build
npm run lint
npm run test
npm run site:build
npm run pack:dry
```

Run the full validation set before closing changes:

```bash
npm run build
npm run lint
npm run test
npm run site:build
npm run pack:dry
```

## Source Map

- `scripts/style-data.mjs`: shared tokens for scales, breakpoints, colors, text, radius, shadows.
- `scripts/generate-*.mjs`: CSS generators.
- `src/scss/_tokens.scss`: public CSS variables.
- `src/scss/_base.scss`: base CSS.
- `src/scss/generated/`: generated SCSS partials. Do not edit directly.
- `dist/`: generated publishable CSS. Regenerate with `npm run build`.
- `site/src/`: demo source for Pages.
- `site/dist/`: generated demo output. Regenerate with `npm run site:build`.

## Rules Index

- `.codex/rules/project.md`
- `.codex/rules/style-api.md`
- `.codex/rules/grid-responsive.md`
- `.codex/rules/docs-site.md`
- `.codex/rules/testing-release.md`

## Skills

Use the local skills as task playbooks:

- `.codex/skills/update-utilities/SKILL.md`
- `.codex/skills/update-docs-site/SKILL.md`
- `.codex/skills/release-check/SKILL.md`

## Agent Roles

Role prompts live in `.codex/agents/`:

- `implementer.md`
- `reviewer.md`
- `docs-maintainer.md`
- `release-manager.md`

## Commit Rules

Use Conventional Commits:

- `feat: add utility`
- `fix: correct selector output`
- `docs: update usage guide`
- `ci: update workflow`
- `chore: update lockfile`

Do not add co-author trailers unless the user explicitly asks.

## Hard Constraints

- Keep the project public and personal.
- Do not add business-specific or company-specific references.
- Do not add Tailwind CSS or Bootstrap as runtime dependencies.
- Do not edit generated files without also updating the generator.
- Keep CSS class naming stable unless docs and tests are updated in the same change.
- Keep all validation scripts passing.

