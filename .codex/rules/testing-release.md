# Testing And Release Rules

## Validation

Run before finishing changes:

```bash
npm run build
npm run lint
npm run test
npm run pack:dry
```

## Tests

Tests in `scripts/test.mjs` must verify public behavior:

- generated spacing scale
- generated responsive selectors
- breakpoint values
- grid gutter behavior
- no alias files, exports, or selectors exist

## Lint

`scripts/lint.mjs` protects project portability and formatting. If it fails, fix the source unless the file is generated tooling output that should be excluded.

## Release

- Use Conventional Commits.
- No GitHub Actions workflows are configured yet.
- Do not add release automation until the owner asks for it.
- No GitHub Pages setup exists in this repo.
- Publish only after validation passes and npm setup is explicitly requested.
- The repo-default guarded publish path is `npm run release:publish -- <bump>`.
