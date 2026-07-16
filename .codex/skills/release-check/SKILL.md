---
name: release-check
description: Validate the package before publishing or opening a release PR.
---

# Release Check Skill

Use this skill before npm publish, release PRs, or Pages deployment.

## Steps

1. Read `AGENTS.md`.
2. Read `.codex/rules/testing-release.md`.
3. Confirm `git status --short` is clean or explain expected generated changes.
4. Run:

```bash
npm run build
npm run lint
npm run test
npm run site:build
npm run pack:dry
npm audit --audit-level=moderate
```

5. Confirm package contents from `npm pack --dry-run`.
6. Confirm GitHub Pages workflow and npm publish workflow exist.

## Publish Notes

- npm package name must be available or already owned.
- GitHub repository must have Pages enabled for GitHub Actions.
- npm Trusted Publisher must point at the publish workflow.

