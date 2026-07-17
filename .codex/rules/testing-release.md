# Testing And Release Rules

## Validation

Run before finishing changes:

```bash
npm run build
npm run lint
npm run test
npm run site:build
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
- Release flow uses release-please.
- npm publish uses GitHub Actions and Trusted Publishing.
- Publish only from releases after validation passes.
