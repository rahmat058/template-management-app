<div align="center">
 <h1>Frontend — Template Management App</h1>
 <p>Visual document editor built with Next.js App Router, TypeScript, Tailwind CSS, Zustand, and TanStack Query.</p>
</div>

## Overview

The editor is a single Next.js route that renders a three-panel workspace: a toolbox and page thumbnails on the left, the A4 canvas in the middle, and element properties plus saved templates on the right. Documents live in Zustand, server state lives in TanStack Query, and PDF export runs entirely in the browser.

The app talks to the Express API in **[../backend](../backend/README.md)** over `NEXT_PUBLIC_API_URL`. Local edits work without it — only Save, Open, and the Saved Templates panel need the API.

Deep dive: **[ARCHITECTURE.md](./ARCHITECTURE.md)** · Repo overview: **[../README.md](../README.md)**

Live: **[template-management-app-gamma.vercel.app](https://template-management-app-gamma.vercel.app/)** (Vercel), calling the Render API at `https://api-template-management.onrender.com/api`.

## Features

| Area                  | Description                                                                      |
| --------------------- | -------------------------------------------------------------------------------- |
| Three-panel workspace | Toolbox + page thumbnails · canvas · properties and templates                    |
| Canvas                | A4 page (794 × 1123 px), zoom 0.5–1.5, drag to move, eight resize handles        |
| Elements              | Text, table, image, and shape, each with a dedicated settings panel              |
| Inline editing        | Text areas and table cells edit in place without triggering a drag               |
| Tables                | Add/remove rows and columns; drag rows to reorder with automatic renumbering     |
| Tabs                  | Multiple documents open at once, each with its own dirty marker and undo history |
| Undo / redo           | 50 steps per tab, with rapid edits within 500 ms coalesced into a single step    |
| Preview               | Read-only full-screen rendering before exporting                                 |
| PDF export            | `@react-pdf/renderer`, loaded lazily, downloads the active document              |
| Templates             | List, open, save, and delete templates; autoloads `template1` on the next visit  |
| Company logo          | Upload a PNG that is converted, stored, and reused across documents              |

## Tech Stack

<div>
<img src="https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
<img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white">
<img src="https://img.shields.io/badge/Zustand-2D3748?style=for-the-badge">
<img src="https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/dnd--kit-2B2B2B?style=for-the-badge">
<img src="https://img.shields.io/badge/react--pdf-E0393E?style=for-the-badge">
</div>

**Key dependencies:** `@dnd-kit/core`, `@dnd-kit/sortable`, `@dnd-kit/utilities`, `@react-pdf/renderer`, `@tanstack/react-query`, `zustand`, `lucide-react`, `date-fns`, `clsx`, `tailwind-merge`

## Prerequisites

- Node.js 20 or later
- The backend API running on `http://localhost:4000` (see **[../backend/README.md](../backend/README.md)**)

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create environment variables. Copy the example file if `.env.local` is missing:

```bash
copy .env.example .env.local    # macOS/Linux: cp .env.example .env.local
```

Required value:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000).

Keep the backend running in a **separate terminal**. The editor loads locally without it, but Save, Open, and the Saved Templates panel need the API.

## Scripts

| Command                | Description                                       |
| ---------------------- | ------------------------------------------------- |
| `npm run dev`          | Start the Next.js development server on port 3000 |
| `npm run build`        | Create a production build                         |
| `npm run start`        | Serve the production build                        |
| `npm run lint`         | Run ESLint                                        |
| `npm run lint:fix`     | ESLint with `--fix`                               |
| `npm run format`       | Prettier write                                    |
| `npm run format:check` | Prettier check                                    |
| `npm run typecheck`    | Type-check with `tsc --noEmit`                    |

## Project structure

```text
src/
├── app/                 App Router entry (layout, page, providers)
│   └── api/company-logo/  POST handler that stores the uploaded logo
├── components/
│   ├── editor/          Header, tabs, toolbox, canvas, properties, templates
│   │   └── properties/  Per-element settings panels
│   ├── elements/        Text, table, image, and shape renderers
│   │   └── table/       Sortable rows, cell editor, toolbar, layout math
│   ├── pdf/             TemplatePdfDocument
│   └── ui/              Button, Input, Select, Tooltip, Modal
├── hooks/               Template queries, save mutation, keyboard shortcuts
├── lib/                 API client, default document, query client, tokens
│   └── pdf/             Export orchestration, font map, image resolution
├── store/               Zustand editor, history, and UI stores
└── types/               Document, element, template, and API types
```

## How it works

- Editor state lives in Zustand until you save; each tab keeps its own document, selection, and undo history.
- **Save** (`Ctrl/Cmd+S`) creates or updates a template through `PATCH /api/templates/:id`, or `POST /api/templates` for a new one.
- On first save an untitled tab is named `template1`, which is the template the app autoloads on the next visit.
- Autoload never overwrites work: it only replaces a pristine, untitled tab.
- Saved templates appear in the bottom panel and open into their own tab.
- **Preview** renders the same canvas with interactions disabled; **Download PDF** exports the active document client side.

Keyboard shortcuts: `Ctrl/Cmd+S` save · `Ctrl/Cmd+Z` undo · `Ctrl/Cmd+Shift+Z` / `Ctrl/Cmd+Y` redo · `Esc` exit preview or clear selection · `Delete` / `Backspace` remove the selected element.

## Troubleshooting

- Saved Templates shows an error: start the backend with `npm run dev` in `../backend`.
- Blank API calls: confirm `NEXT_PUBLIC_API_URL` in `.env.local`, then restart `npm run dev`.
- CORS errors in the console: `CORS_ORIGIN` in `../backend/.env` must equal this app's origin, usually `http://localhost:3000`.
- Port 3000 already in use: stop the other process or run `npx next dev -p 3001` and update `CORS_ORIGIN` on the backend.
