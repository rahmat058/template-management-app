# Frontend — Template Management App

Visual document editor built with Next.js App Router, TypeScript, Tailwind CSS, Zustand, and TanStack Query.

## Prerequisites

- Node.js 20 or later
- Backend API running on `http://localhost:4000` (see `../backend/README.md`)

## Setup

1. Open a terminal in this folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create environment variables. Copy the example file if `.env.local` is missing:

```bash
copy .env.example .env.local
```

Required value:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000).

Keep the backend running in a **separate terminal**. The editor loads locally without it, but Save, Open, and the Saved Templates panel need the API.

## Scripts

| Command         | Description                                       |
| --------------- | ------------------------------------------------- |
| `npm run dev`   | Start the Next.js development server on port 3000 |
| `npm run build` | Create a production build                         |
| `npm run start` | Serve the production build                        |
| `npm run lint`  | Run ESLint                                        |

## Project structure

```text
src/
├── app/                 App Router entry (layout, page, providers)
├── components/
│   ├── editor/          Header, tabs, toolbox, canvas, properties, templates
│   ├── elements/        Text, table, image, and shape renderers
│   └── ui/              Button, Input, Select, Tooltip, Modal
├── hooks/               Template queries, save mutation, keyboard shortcuts
├── lib/                 API client, default document, query client, tokens
├── store/               Zustand editor, history, and UI stores
└── types/               Document, element, template, and API types
```

## Local editing vs API

- Editor state lives in Zustand until you click **Save**.
- **Save** (`Ctrl+S`) creates or updates a template through `POST/PATCH /api/templates`.
- Saved templates appear in the bottom panel and can be opened into a new tab.
- Undo/redo and PDF export are not wired yet.

## Troubleshooting

- Saved Templates shows an error: start the backend with `npm run dev` in `../backend`.
- Blank API calls: confirm `NEXT_PUBLIC_API_URL` in `.env.local`, then restart `npm run dev`.
- Port 3000 already in use: stop the other process or run `npx next dev -p 3001` and update `CORS_ORIGIN` on the backend.
