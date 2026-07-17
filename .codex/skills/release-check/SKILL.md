---
name: release-check
description: Validate the package before publishing or preparing release automation.
---

# Release Check Skill

Use this skill before npm publish or before adding release automation.

## Steps

1. Read `AGENTS.md`.
2. Read `.codex/rules/testing-release.md`.
3. Confirm `git status --short` is clean or explain expected generated changes.
4. Run:

```bash
npm run build
npm run lint
npm run test
npm run pack:dry
npm audit --audit-level=moderate
```

5. Confirm package contents from `npm pack --dry-run`.
6. Confirm no GitHub Actions workflows are present unless the owner explicitly requested automation.

## Publish Notes

- npm package name must be available or already owned.
- npm automation is a future setup step.
- Do not add GitHub Actions workflows until requested.
