# Codex Guide

This folder gives Codex-compatible agents a repeatable way to maintain the package.

## Layout

- `rules/`: durable project rules.
- `skills/`: task workflows that explain what to inspect, edit, and validate.
- `agents/`: role prompts for larger or delegated work.

## How To Use

1. Read root `AGENTS.md`.
2. Read the matching rule files for the task.
3. If a task matches a skill, read the skill before editing.
4. Make scoped changes.
5. Run the validation commands listed in `AGENTS.md`.

## Documentation Contract

When changing public class behavior, update all relevant places:

- `README.md`
- `docs/reference.md`
- `docs/migration.md` if aliases or migration paths change
- `docs/AI.md`
- `site/src/index.html` if examples should show the feature
- Tests in `scripts/test.mjs`

