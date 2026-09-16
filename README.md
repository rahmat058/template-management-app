<div align="center">
 <h1>Template Management App</h1>
 <p>A visual, drag-and-drop document template editor — build A4 documents from text, table, image, and shape elements, save them as reusable templates, and export them as PDF.</p>
</div>

## Overview

A two-package monorepo. The **frontend** is a Next.js 16 App Router editor that renders pages on an interactive canvas with drag, resize, and inline editing. The **backend** is an Express 4 + MongoDB API that persists each template as a single document.

Templates are edited in the browser and saved on demand. PDF export happens entirely client-side, so no server rendering is involved.

Frontend: **[frontend/README.md](./frontend/README.md)** · Backend: **[backend/README.md](./backend/README.md)** · Architecture: **[frontend/ARCHITECTURE.md](./frontend/ARCHITECTURE.md)** · **[backend/ARCHITECTURE.md](./backend/ARCHITECTURE.md)**

Specs: **[docs/PRD.md](./docs/PRD.md)** · Design system: **[docs/design.md](./docs/design.md)** · Data model: **[docs/database-schema.md](./docs/database-schema.md)**

## Features

| Area           | Description                                                                   |
| -------------- | ----------------------------------------------------------------------------- |
| Canvas         | A4 page (794 × 1123 px) with zoom 0.5–1.5, drag to move, eight resize handles |
| Elements       | Text, table, image, and shape primitives with per-type property panels        |
| Inline editing | Text areas and table cells edit in place without breaking element dragging    |
| Tables         | Add/remove rows and columns, drag to reorder rows with automatic renumbering  |
| Tabs           | Multiple documents open at once, each with its own dirty state and history    |
| Undo / redo    | Per-tab history, 50 steps deep, with rapid edits coalesced into one step      |
| Preview        | Read-only full-screen rendering before exporting                              |
| PDF export     | Client-side render to a downloaded `.pdf` — no server round trip              |
| Templates      | Save, list, reopen, and delete templates through the API                      |
| Autoload       | A template named `template1` is restored automatically on the next visit      |
| Keyboard       | `Ctrl/Cmd+S` save, `Ctrl/Cmd+Z` undo, `Shift+Z`/`Y` redo, `Esc`, `Delete`     |
| Company logo   | Upload a PNG logo that is stored and reused across documents                  |

## Tech Stack

<div>
<img src="https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
<img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white">
<img src="https://img.shields.io/badge/Zustand-2D3748?style=for-the-badge">
<img src="https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/Express_4-000000?style=for-the-badge&logo=express&logoColor=white">
<img src="https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white">
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white">
<img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white">
<img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white">
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
</div>

**Frontend:** `@dnd-kit/core`, `@dnd-kit/sortable`, `@react-pdf/renderer`, `@tanstack/react-query`, `zustand`, `lucide-react`, `date-fns`, `clsx`, `tailwind-merge`

**Backend:** `express`, `mongoose`, `zod`, `helmet`, `cors`, `express-rate-limit`, `morgan`, `http-status`, `dotenv`

**Tooling:** `husky`, `commitlint`, `commitizen`, `lint-staged`, `nodemon`, `tsx`

## Repository Structure

```
template-management-app/
├── AGENTS.md                  # Agent instructions
├── README.md                  # This file
├── commitlint.config.ts       # Conventional commits with emoji types
├── package.json               # Commit tooling; scripts delegate to packages
├── .husky/                    # commit-msg · pre-commit · pre-push
├── scripts/                   # Commitizen adapter and emoji prefixer
├── .lintstagedrc.json         # Root docs/config formatting
├── docs/
│   ├── PRD.md                 # Product requirements
│   ├── design.md              # Design system
│   ├── database-schema.md     # MongoDB collections
│   └── frontend-architecture.md
├── backend/
│   ├── README.md
│   ├── ARCHITECTURE.md
│   ├── nodemon.json
│   └── src/
│       ├── server.ts          # DB connect, listen, graceful shutdown
│       ├── app.ts             # Middleware and routes
│       ├── config/            # Env validation, Mongo connection
│       ├── lib/               # Errors, async wrapper, responses
│       ├── middleware/        # Validation, 404, error handler
│       ├── models/            # Mongoose Template schema
│       ├── modules/           # health/ and templates/
│       ├── routes/            # /api router
│       ├── types/             # Shared domain types
│       └── validators/        # Zod request schemas
└── frontend/
    ├── README.md
    ├── ARCHITECTURE.md
    ├── next.config.ts
    ├── public/images/         # Company logo
    └── src/
        ├── app/               # Routes, layout, providers, logo API route
        ├── components/        # editor/, elements/, pdf/, ui/
        ├── hooks/             # Queries, save mutation, shortcuts
        ├── lib/               # API client, history, DnD math, pdf
        ├── store/             # Zustand editor, UI, history
        └── types/             # Document, element, template, api
```

## Getting Started

### Prerequisites

- Node.js 20 or later
- A MongoDB instance — the [MongoDB Atlas](https://www.mongodb.com/atlas) free tier works, with your IP allowed under **Network Access**
- Two terminals, because the API and the editor run as separate processes

### 1. Install dependencies

The repository root holds the commit tooling only, so install all three:

```bash
npm install                  # root: husky, commitlint, commitizen, lint-staged
cd frontend && npm install   # Next.js app
cd ../backend && npm install # Express API
```

### 2. Configure the backend

Copy the example file and fill in your connection string:

```bash
cd backend
copy .env.example .env        # macOS/Linux: cp .env.example .env
```

```env
NODE_ENV=development
PORT=4000
CORS_ORIGIN=http://localhost:3000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/template_management?retryWrites=true&w=majority
```

`CORS_ORIGIN` must match the frontend origin, or the browser will block API calls.

### 3. Configure the frontend

```bash
cd frontend
copy .env.example .env.local  # macOS/Linux: cp .env.example .env.local
```

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

### 4. Run both processes

```bash
# terminal 1 — API on :4000
cd backend && npm run dev

# terminal 2 — editor on :3000
cd frontend && npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The editor renders without the API, but **Save**, **Open**, and the Saved Templates panel need it. Check the API with `curl http://localhost:4000/api/health` — it returns `200` when MongoDB is connected and `503` when it is not.

## Scripts

Root — everything delegates to the packages:

| Command                | Description                                   |
| ---------------------- | --------------------------------------------- |
| `npm run lint`         | ESLint across both packages                   |
| `npm run lint:fix`     | ESLint with `--fix` across both packages      |
| `npm run format`       | Prettier write across both packages           |
| `npm run format:check` | Prettier check across both packages           |
| `npm run commit`       | Commitizen prompt (emoji + conventional type) |
| `npm run commitlint`   | Validate a commit message                     |

Per package:

| Package  | Command                           | Description                   |
| -------- | --------------------------------- | ----------------------------- |
| frontend | `npm run dev` / `build` / `start` | Next.js on :3000              |
| frontend | `npm run typecheck`               | `tsc --noEmit`                |
| backend  | `npm run dev`                     | nodemon + tsx on :4000        |
| backend  | `npm run build` / `start`         | Compile to `dist/` and run it |
| backend  | `npm run typecheck`               | `tsc --noEmit`                |

## Commit Conventions

Commits follow [Conventional Commits](https://www.conventionalcommits.org/) with an emoji prefix per type.

```bash
npm run commit    # guided prompt: type, scope, subject, body, issues
```

Husky wires three hooks:

- **`commit-msg`** — prefixes the type emoji, then validates with Commitlint
- **`pre-commit`** — runs lint-staged, which fixes and formats staged files per package
- **`pre-push`** — runs `lint` and `format:check` for both packages

## Documentation

| Document                                               | Covers                                           |
| ------------------------------------------------------ | ------------------------------------------------ |
| [frontend/ARCHITECTURE.md](./frontend/ARCHITECTURE.md) | Editor state, canvas geometry, PDF pipeline      |
| [backend/ARCHITECTURE.md](./backend/ARCHITECTURE.md)   | Layers, middleware chain, schema, error taxonomy |
| [docs/PRD.md](./docs/PRD.md)                           | Product requirements                             |
| [docs/design.md](./docs/design.md)                     | Design system and layout                         |
| [docs/database-schema.md](./docs/database-schema.md)   | Collections and indexes                          |

## Troubleshooting

| Symptom                            | Fix                                                                                       |
| ---------------------------------- | ----------------------------------------------------------------------------------------- |
| Saved Templates shows an error     | Start the API: `cd backend && npm run dev`                                                |
| API calls fail with network errors | Check `NEXT_PUBLIC_API_URL` in `frontend/.env.local`, then restart `npm run dev`          |
| CORS errors in the browser console | `CORS_ORIGIN` in `backend/.env` must equal the frontend origin, usually `:3000`           |
| `querySrv ECONNREFUSED` on startup | Atlas SRV lookup failed — confirm internet access and allow your IP in Atlas              |
| `MONGODB_URI is required`          | `backend/.env` is missing or was created outside the `backend` folder                     |
| Port 3000 or 4000 already in use   | Stop the other process, or change `PORT` and update `CORS_ORIGIN` / `NEXT_PUBLIC_API_URL` |
