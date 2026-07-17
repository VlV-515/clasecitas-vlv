---
name: update-docs
description: Update README, docs, AI guidance, or package documentation.
---

# Update Docs Skill

Use this skill when docs or examples change.

## Steps

1. Read `AGENTS.md`.
2. Read `.codex/rules/docs.md`.
3. Update the smallest relevant docs.
4. Run `npm run lint`.
5. Run `npm run pack:dry` if package files or published docs changed.

## Docs Checklist

- README still gives quickest usage path.
- Reference docs include any new public class.
- AI guide tells agents which class names to prefer.
