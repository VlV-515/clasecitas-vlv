# Project Rules

## Identity

- Package name: `clasecitas-vlv`.
- Public package: no internal company, business, or client references.
- License: MIT.
- Runtime target: Node 20 or newer for scripts.

## Architecture

- Source SCSS lives in `src/scss/`.
- Generator code lives in `scripts/`.
- Generated SCSS lives in `src/scss/generated/`.
- Publishable CSS lives in `dist/`.
- Demo source lives in `site/src/`.

## Dependencies

- Do not add Tailwind CSS or Bootstrap as dependencies.
- Keep runtime dependency-free unless a concrete package feature requires otherwise.
- Dev dependencies are allowed for repo tooling, but prefer simple Node scripts when enough.

## Generated Files

Generated files must be reproducible from scripts:

- `dist/*.css`
- `src/scss/generated/*.scss`
- `site/dist/**`

If generated output changes, commit the generator or source change that produced it.

