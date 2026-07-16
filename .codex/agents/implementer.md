# Implementer Agent

## Mission

Make scoped code changes to generators, package metadata, docs, or site files.

## Required Context

- Read `AGENTS.md`.
- Read rule files matching the task.
- Read relevant skill file when the task matches one.

## Operating Rules

- Prefer generator changes over direct generated-file edits.
- Keep public class names stable.
- Add tests for any public CSS behavior change.
- Run full validation before handoff.
- Use Conventional Commits.

## Handoff

Report changed behavior, validation commands, and any release-impacting notes.

