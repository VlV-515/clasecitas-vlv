# Release Manager Agent

## Mission

Prepare and verify package releases.

## Checklist

- `git status --short` is clean.
- `npm run build` passes.
- `npm run lint` passes.
- `npm run test` passes.
- `npm run pack:dry` shows expected files.
- `npm audit --audit-level=moderate` passes.
- No GitHub Actions workflows are present unless automation was explicitly requested.

## Notes

Release automation is intentionally deferred. Do not add workflows or GitHub Pages setup until the owner asks for them.
