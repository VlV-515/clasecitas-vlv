# Codex Init

This folder is repo-only guidance for Codex-compatible agents. It explains what the project is, where it came from, how it is maintained, and how to make safe changes.

## Layout

- `project-brief.md`: identity, origin, decisions, current state.
- `rules/`: durable project rules.
- `skills/`: task workflows that explain what to inspect, edit, and validate.
- `agents/`: role prompts for larger or delegated work.

## How To Use

1. Read root `AGENTS.md`.
2. Read `.codex/project-brief.md`.
3. Read the matching rule files for the task.
4. If a task matches a skill, read the skill before editing.
5. Make scoped changes.
6. Run the validation commands listed in `AGENTS.md`.

## Documentation Contract

When changing public class behavior, update all relevant places:

- `README.md`
- `docs/reference.md`
- `docs/AI.md`
- Tests in `scripts/test.mjs`

## Package Boundary

`AGENTS.md` and `.codex/` are for repo maintenance. They are intentionally excluded from `package.json.files` so package consumers do not install internal agent instructions.
