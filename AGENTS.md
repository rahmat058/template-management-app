<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project Documentation

Before working in this repository, read the docs in [`docs/`](./docs):

| Document                                                           | Covers                                                                                                      |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| [`docs/frontend-architecture.md`](./docs/frontend-architecture.md) | The shipped Next.js frontend — structure, state stores, data flow, API contract, PDF export, and known gaps |
| [`docs/PRD.md`](./docs/PRD.md)                                     | Product requirements and user journeys                                                                      |
| [`docs/design.md`](./docs/design.md)                               | Design system, layout, and component conventions                                                            |
| [`docs/database-schema.md`](./docs/database-schema.md)             | MongoDB collections and Mongoose schemas                                                                    |

Working on the frontend specifically? Read `docs/frontend-architecture.md` first — it is the
reference for how the app is actually built, and it calls out where the specs above have drifted
from the implementation.

### Notes

- Everything above `## Project Documentation` is a managed block. `next dev` rewrites it in place
  and preserves everything below it, so keep your edits outside the markers.
- `frontend/CLAUDE.md` is the Next.js project's agent file. Note that its `@AGENTS.md` import
  resolves relative to `frontend/`, where no `AGENTS.md` exists — change it to `../AGENTS.md` for
  the delegation to work.
- `next dev` targets the `frontend/` project directory, not this repo root, and rewrites only the
  text between the markers above.
