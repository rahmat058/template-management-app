# Taste

## Debugging & Fixes
- Wants the root cause explained ("why does this happen") as part of a fix, not just a symptom-level patch or a workaround — expects investigation before/alongside the change. Confidence: 0.55
- Prefers unnecessary/stray artifacts (generated folders, dup build output) actually removed from the repo, including the workaround ignore entries they spawned, rather than left in place. Confidence: 0.45

## Documentation
- Prefers project documentation written as markdown files in a `docs/` folder (repo-root, alongside specs like PRD.md), not scattered elsewhere. Confidence: 0.6
- Prefers the agent to thoroughly analyze the actual project (structure, stack, config, real code) before writing documentation, rather than assuming from spec/design docs. Confidence: 0.5
- Prefers cross-linking over duplication between docs and agent-config files: docs link to files like AGENTS.md instead of inlining registered/generated content, and the root AGENTS.md points back to the `docs/` markdown files so agents discover them. Confidence: 0.6
