<div align="center">
 <h1>Backend — Template Management API</h1>
 <p>Express + TypeScript REST API with MongoDB (Mongoose) and nodemon for local development.</p>
</div>

## Overview

A layered Express 4 API that stores each template as a single MongoDB document, with pages and elements embedded so a save is one atomic write. Requests pass through a fixed middleware chain into feature modules — routes, controller, service, and mapper — and every request body is validated with Zod before it reaches the database.

The editor in **[../frontend](../frontend/README.md)** is the only client. All routes are public: there is no authentication.

Deep dive: **[ARCHITECTURE.md](./ARCHITECTURE.md)** · Repo overview: **[../README.md](../README.md)**

## Tech Stack

<div>
<img src="https://img.shields.io/badge/Express_4-000000?style=for-the-badge&logo=express&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white">
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white">
<img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white">
<img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white">
<img src="https://img.shields.io/badge/Helmet-2B2B2B?style=for-the-badge">
<img src="https://img.shields.io/badge/nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white">
</div>

**Key dependencies:** `express`, `mongoose`, `zod`, `helmet`, `cors`, `express-rate-limit`, `morgan`, `http-status`, `dotenv`

## Prerequisites

- Node.js 20 or later
- A MongoDB Atlas cluster (or local MongoDB)
- Your current IP allowed in Atlas **Network Access**

## Setup

1. Open a terminal in this folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create environment variables. Copy the example file if `.env` is missing:

```bash
copy .env.example .env    # macOS/Linux: cp .env.example .env
```

4. Fill in `.env`:

```env
NODE_ENV=development
PORT=4000
CORS_ORIGIN=http://localhost:3000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/template_management?retryWrites=true&w=majority
```

Use your Atlas connection string and keep the database name `template_management` in the URI. The API validates these values at startup with Zod and exits immediately if one is missing or malformed. Do not commit `.env`.

5. Start the API with nodemon:

```bash
npm run dev
```

The server listens on [http://localhost:4000](http://localhost:4000). Nodemon restarts it when files under `src/` change.

Run the frontend in a **separate terminal** (`cd frontend` then `npm run dev`).

## Scripts

| Command                | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `npm run dev`          | Start the API with nodemon + tsx                |
| `npm run build`        | Compile TypeScript to `dist/`                   |
| `npm run start`        | Run the compiled server (`node dist/server.js`) |
| `npm run seed`         | Clear `templates` and insert the default set    |
| `npm run typecheck`    | Type-check without emitting files               |
| `npm run lint`         | Run ESLint                                      |
| `npm run lint:fix`     | ESLint with `--fix`                             |
| `npm run format`       | Prettier write                                  |
| `npm run format:check` | Prettier check                                  |

## Seeding

```bash
npm run seed
```

The seeder connects with `MONGODB_URI`, **deletes every document in `templates`**, then inserts the default set from `src/seed/default-templates.ts` — currently a single `template1` document that mirrors the editor's default document, so the frontend autoload finds it.

Seeding only writes to MongoDB; it does **not** start the API. The editor loads `template1` over HTTP, so the API must also be running (`npm run dev`) or the frontend will report "Could not load the saved template".

## API endpoints

All routes are mounted under `/api`. Responses are `{ "data": … }` on success and `{ "error": { "message", "code", "details"? } }` on failure.

| Method   | Path                           | Description                           |
| -------- | ------------------------------ | ------------------------------------- |
| `GET`    | `/api/health`                  | Service and MongoDB status            |
| `GET`    | `/api/templates`               | List summaries, newest first, max 100 |
| `POST`   | `/api/templates`               | Create a template                     |
| `GET`    | `/api/templates/by-name/:name` | Look up a template by name            |
| `GET`    | `/api/templates/:id`           | Get one template                      |
| `PATCH`  | `/api/templates/:id`           | Update a template                     |
| `DELETE` | `/api/templates/:id`           | Delete a template (`204`, empty body) |

Health check example:

```bash
curl http://localhost:4000/api/health
```

Expected response when MongoDB is connected:

```json
{
  "data": {
    "status": "ok",
    "service": "template-management-api",
    "timestamp": "2026-09-15T16:00:00.000Z",
    "database": "connected"
  }
}
```

The health route returns `503` with `"status": "degraded"` when the database is unreachable, so it reflects real readiness rather than just process liveness.

## Project structure

```text
src/
├── app.ts                 Express app (CORS, helmet, rate limit, JSON)
├── server.ts              Database connect + HTTP listen
├── config/                Env validation and MongoDB connection
├── lib/                   AppError, async handler, response helpers
├── middleware/            Validation, 404, and error handler
├── models/                Mongoose Template schema
├── seed/                  Default template data + clear-and-seed runner
├── modules/
│   ├── health/            Health route
│   └── templates/         CRUD controller, service, mapper, routes
├── types/                 Document, element, template, and API types
├── validators/            Zod request schemas
└── routes/                API router
```

## How it works

- `server.ts` retries the initial MongoDB connection up to 8 times before giving up, then closes the HTTP server on `SIGINT`/`SIGTERM`.
- `app.ts` applies helmet, CORS, a 2 MB JSON limit, a 120 requests/minute rate limit, and request logging before the `/api` router.
- Each route declares its own Zod validation, so an invalid body or id is rejected with `400` before any handler runs.
- Controllers stay thin: they call the service and hand the result to a mapper that converts `_id` to `id` and dates to ISO strings.
- One error handler turns every failure — validation, bad id, duplicate key, or unexpected — into the same JSON shape with a stable `code`.

## Troubleshooting

- `querySrv ECONNREFUSED`: Atlas SRV DNS failed. Confirm internet access and Atlas Network Access (allow your IP). The API already prefers public DNS (`8.8.8.8`) for SRV lookups.
- `MONGODB_URI is required`: `.env` is missing or not in the `backend` folder.
- Server exits immediately on start: another required value in `.env` is missing or malformed; the startup error names the offending key.
- CORS errors in the browser: `CORS_ORIGIN` must match the frontend origin, usually `http://localhost:3000`.
- Port 4000 in use: change `PORT` in `.env`.
