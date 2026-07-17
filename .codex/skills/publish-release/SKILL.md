---
name: publish-release
description: Safely publish the npm package by asking for the required version bump when missing, validating the repo, creating the release commit and tag, pushing GitHub, and then publishing to npm.
---

# Publish Release Skill

Use this skill when the owner asks Codex to publish a new npm release for `clasecitas-vlv`.

## Steps

1. Read `AGENTS.md`, `.codex/rules/testing-release.md`, and `.codex/agents/release-manager.md`.
2. If the bump type is not specified, ask one concise question for it.
3. Accept these version inputs:
   - `patch`
   - `minor`
   - `major`
   - `prepatch`
   - `preminor`
   - `premajor`
   - `prerelease`
   - an explicit semver like `1.2.3`
4. If the chosen version is a prerelease and no npm dist-tag was specified, ask whether to use `next` or another tag. Default to `next`.
5. Run:

```bash
npm run release:publish -- <bump>
```

For prereleases or custom tags:

```bash
npm run release:publish -- <bump> --tag next
```

6. Report the new version, release commit, git tag, push result, and npm publish result.
7. If public docs contain version-pinned CDN examples, update them to the new published version as part of the release change. Do not switch them to `@latest`.

## Notes

- The guarded publish command validates the repo before bumping the version.
- The command creates the release commit as `chore(release): vX.Y.Z`.
- The command pushes GitHub before it publishes to npm.
- Keep version-pinned CDN examples in `README.md` and `docs/AI.md` aligned with the current published version.
- If publish fails after the git push, do not create another version bump blindly. Inspect the existing commit/tag and continue from there.
- If the owner explicitly wants the stricter release gate, run `npm audit --audit-level=moderate` before the publish command.
