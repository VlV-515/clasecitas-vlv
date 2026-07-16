# Agent Guidance

This project includes a repo-native instruction system for Codex-compatible agents.

## Files

- `AGENTS.md`: main entrypoint with commands, source map, rules index, and commit policy.
- `.codex/rules/`: durable project rules.
- `.codex/skills/`: repeatable workflows for utility changes, docs/site updates, and release checks.
- `.codex/agents/`: role prompts for implementation, review, docs, and release work.

## Recommended Agent Flow

1. Read `AGENTS.md`.
2. Read task-matching rule files.
3. Read task-matching skill file.
4. Make scoped changes.
5. Regenerate output when needed.
6. Run validation commands.
7. Commit with Conventional Commits.

## Why These Files Exist

They make repeated AI work safer:

- generated files are not edited by hand
- class naming stays stable
- docs stay synced with CSS behavior
- release checks are repeatable
- public package constraints stay visible

