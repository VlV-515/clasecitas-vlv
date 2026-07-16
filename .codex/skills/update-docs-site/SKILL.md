---
name: update-docs-site
description: Update README, docs, AI guidance, migration notes, or the static demo site.
---

# Update Docs And Site Skill

Use this skill when docs or examples change.

## Steps

1. Read `AGENTS.md`.
2. Read `.codex/rules/docs-site.md`.
3. Update the smallest relevant docs.
4. If `site/src/` changes, run `npm run site:build`.
5. Run `npm run lint`.
6. Run `npm run pack:dry` if package files or published docs changed.

## Docs Checklist

- README still gives quickest usage path.
- Reference docs include any new public class.
- Migration docs mention renamed or legacy class paths.
- AI guide tells agents which class names to prefer.
- Site examples render using only public package classes plus `site.css`.

