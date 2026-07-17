# AGENTS.md

Repository initialization guide for coding agents working on `clasecitas-vlv`.

## Identity

`clasecitas-vlv` is a personal public npm package by VLV. It is a small utility-first CSS toolkit for Node/web projects. It gives practical layout, spacing, typography, color, and grid helpers without requiring Tailwind CSS or Bootstrap.

## Origin

The project comes from a recurring frontend need: most UI layout work can be solved with small utility classes instead of one-off CSS. The first inspiration was a private utility stylesheet used in daily business-app work, plus the useful row/column grid ergonomics from Bootstrap. This repo is a clean public rewrite, not an extraction of private product code.

## Product Intent

- Be easy to learn for developers who already know Tailwind-like class names.
- Keep a Bootstrap 5-style grid for `container`, `row`, and `col-*` layouts.
- Ship CSS for everyone and SCSS source for teams that prefer Sass.
- Stay dependency-light and framework-neutral.
- Keep docs and examples clear enough for people and AI agents.

## Non Goals

- Do not become a full Tailwind replacement.
- Do not become a Bootstrap clone.
- Do not ship JavaScript UI components.
- Do not include business-specific or private project references.
- Do not depend on Tailwind CSS or Bootstrap at runtime.

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

## Init Context For Agents

Read these files before modifying the repo:

1. `AGENTS.md`
2. `.codex/project-brief.md`
3. `.codex/README.md`
4. Matching files under `.codex/rules/`
5. Matching skill under `.codex/skills/`

Public consumer docs live in `README.md` and `docs/`. Repo-maintenance docs live in `AGENTS.md` and `.codex/`; those are intentionally not included in the npm package.

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

## What Complete Means

A change is complete only when source, generated output, tests, docs, and package contents agree. If a class changes, update generator source, generated files, tests, reference docs, and examples in one commit.
