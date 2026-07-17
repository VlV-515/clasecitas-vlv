# Project Brief

## Who

`clasecitas-vlv` is a personal public project by VLV.

## What

A small utility-first CSS package for web projects. It provides:

- Tailwind-like utility class names.
- Bootstrap 5-style grid classes.
- CSS output for normal projects.
- SCSS source for Sass users.
- Static docs/demo for GitHub Pages.

## Where It Comes From

The idea comes from real frontend work where a compact utility layer solved most layout and spacing needs. The public project is a clean rewrite with generic names, generic tokens, and no private product references.

## Why It Exists

Many projects need a lightweight middle ground:

- smaller than Tailwind
- simpler than Bootstrap
- no build-time class scanner
- predictable spacing scale
- easy grid
- readable class names

## Current Direction

- Keep API small and stable.
- Follow Tailwind-like names when possible so users can reuse familiar docs.
- Follow Bootstrap 5 grid breakpoints and column naming.
- Keep generated CSS checked in for simple npm consumption.
- Keep release automation ready, but do not publish until GitHub/npm setup exists.

## Public Boundary

Published package should include:

- `dist/`
- `src/scss/`
- `docs/`
- `README.md`
- `LICENSE`

Published package should not include:

- `.codex/`
- `AGENTS.md`
- repo-only agent instructions
- local generated tool folders

## Important Decisions

- Package name: `clasecitas-vlv`.
- License: MIT.
- Version start: `0.1.0`.
- Node scripts, no Sass compiler dependency yet.
- Responsive prefixes: `sm`, `md`, `lg`, `xl`, `2xl`.
- Grid values use Bootstrap 5 breakpoints.
- Default grid gutter is `4px`, giving `2px` per column side.
- No alias bundle exists. Only Tailwind-like naming is supported.

## Risks To Watch

- Expanding utilities too much and becoming another large framework.
- Breaking naming compatibility without docs and tests.
- Editing generated output without generator changes.
- Shipping repo-only agent docs in npm package.
- Adding private references accidentally.
