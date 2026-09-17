<div align="center">
 <h1>Backend — Template Management API</h1>
 <p>Express + TypeScript REST API with MongoDB (Mongoose) and nodemon for local development.</p>
</div>

## Overview

A layered Express 4 API that stores each template as a single MongoDB document, with pages and elements embedded so a save is one atomic write. Requests pass through a fixed middleware chain into feature modules — routes, controller, service, and mapper — and every request body is validated with Zod before it reaches the database.

The editor in **[../frontend](../frontend/README.md)** is the only client. All routes are public: there is no authentication.

Deep dive: **[ARCHITECTURE.md](./ARCHITECTURE.md)** · Repo overview: **[../README.md](../README.md)**

Live: **[api-template-management.onrender.com](https://api-template-management.onrender.com)** (Render) — health at **[/api/health](https://api-template-management.onrender.com/api/health)**.

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
TRUST_PROXY=0
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/template_management?retryWrites=true&w=majority
```

`NODE_ENV` and `MONGODB_URI` are the only required values; the rest have defaults. Use your Atlas connection string and keep the database name `template_management` in the URI. The API validates these at startup with Zod and exits immediately if one is missing or malformed — including `NODE_ENV`, which has no default, so a deploy that forgets it fails at boot instead of silently running in development mode, where the `500` handler returns raw internal error messages. `TRUST_PROXY` is the number of proxies in front of the API: leave it `0` locally, and set it to `1` when deployed behind a single load balancer or ingress so rate limiting and logs see the real client IP. Do not commit `.env`.

5. Start the API with nodemon:

```bash
npm run dev
```

The server listens on [http://localhost:4000](http://localhost:4000). Nodemon restarts it when files under `src/` change.

Run the frontend in a **separate terminal** (`cd frontend` then `npm run dev`).

## Scripts

| Command                 | Description                                     |
| ----------------------- | ----------------------------------------------- |
| `npm run dev`           | Start the API with nodemon + tsx                |
| `npm run build`         | Compile TypeScript to `dist/`                   |
| `npm run start`         | Run the compiled server (`node dist/server.js`) |
| `npm run seed`          | Clear `templates` and insert the default set    |
| `npm run indexes`       | Duplicate pre-check, then sync the DB indexes   |
| `npm test`              | Run the Jest suite, one test file at a time     |
| `npm run test:watch`    | Jest in watch mode                              |
| `npm run test:coverage` | Jest with a V8 coverage report                  |
| `npm run typecheck`     | Type-check without emitting files               |
| `npm run lint`          | Run ESLint                                      |
| `npm run lint:fix`      | ESLint with `--fix`                             |
| `npm run format`        | Prettier write                                  |
| `npm run format:check`  | Prettier check                                  |

## Seeding

```bash
npm run seed
```

The seeder connects with `MONGODB_URI`, **deletes every document in `templates`**, then inserts the default set from `src/seed/default-templates.ts` — currently a single `template1` document that mirrors the editor's default document, so the frontend autoload finds it.

Because it wipes the collection, it refuses to run when `NODE_ENV=production` unless `SEED_ALLOW_PRODUCTION=1` is explicitly set, and it logs the database it is about to target before deleting anything. Never point `npm run seed` at production.

Seeding only writes to MongoDB; it does **not** start the API. The editor loads `template1` over HTTP, so the API must also be running (`npm run dev`) or the frontend will report "Could not load the saved template".

## Indexes

```bash
npm run indexes
```

`name` is **uniquely** indexed, so two templates cannot share a name — a duplicate save returns `409` with code `DUPLICATE_KEY`. Outside production Mongoose builds the indexes automatically at startup; in production `autoIndex` is off and this script applies them explicitly, so a failed index build can never block the API from booting.

Run it after any schema index change. It prints the target database, checks for names that already collide and **aborts with the offending names listed** rather than dropping anything (a unique index cannot be built over duplicates), reports what `diffIndexes()` would create and drop, then applies `syncIndexes()`. Resolve reported duplicates and re-run.

## Testing

```bash
npm test                # single run, suites execute one after another
npm run test:watch      # watch mode
npm run test:coverage   # writes coverage/ (V8)
```

Tests live in `test/`, mirroring the `src/` layout — `test/lib`, `test/middleware`, `test/modules`, `test/scripts`, `test/seed`, `test/validators`. A test for `src/foo/bar.ts` belongs at `test/foo/bar.test.ts`, importing it as `../../src/foo/bar`. They run on Jest with `ts-jest` and `--runInBand`, so the suites run sequentially rather than in parallel workers.

They are pure unit tests — no MongoDB connection is needed, so they run offline. `tsconfig.json` includes both `src` and `test` so `npm run typecheck` also checks the tests, while `tsconfig.build.json` compiles `src` only and keeps the tests out of `dist/`.

## API endpoints

All routes are mounted under `/api`. Responses are `{ "success": true, "data": … }` on success and `{ "success": false, "error": { "message", "code", "details"? } }` on failure, with the status code only on the status line.

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
├── app.ts                 Express app (helmet, request id, logging, CORS, compression, rate limit, JSON)
├── server.ts              Database connect + HTTP listen, timeouts, graceful shutdown
├── config/                Env validation and MongoDB connection
├── lib/                   AppError, async handler, response helpers, request logger
├── middleware/            Request id, validation, 404, and error handler
├── models/                Mongoose Template schema
├── scripts/               Duplicate pre-check + explicit index sync
├── seed/                  Default template data + clear-and-seed runner
├── modules/
│   ├── health/            Health route
│   └── templates/         CRUD controller, service, mapper, routes
├── types/                 Document, element, template, and API types
├── validators/            Zod request schemas
└── routes/                API router
```

## How it works

- `server.ts` retries the initial MongoDB connection up to 8 times before giving up. On `SIGINT`/`SIGTERM` it stops accepting connections, lets in-flight requests finish, closes the Mongo pool, and exits; unhandled rejections are logged without exiting, and an uncaught exception drains and exits.
- `app.ts` applies helmet, a request id, request logging, CORS, compression, a 120 requests/minute rate limit, and the 2 MB JSON parsers before the `/api` router. Logging sits above CORS and the limiter so preflights (`204`) and rate-limited requests (`429`) are logged too.
- Every response carries an `X-Request-Id` header — the inbound one when it is a safe token, otherwise a generated UUID — and a `500` logs the same id, so a reported error can be traced back to its request.
- Each route declares its own Zod validation, so an invalid body or id is rejected with `400` before any handler runs.
- Controllers stay thin: they call the service and hand the result to a mapper that converts `_id` to `id` and dates to ISO strings. Reads use `.lean()` and the list endpoint aggregates `pageCount` in MongoDB, so pages and elements are never fetched just to be counted.
- One error handler turns every failure — validation, bad id, oversized or malformed body, duplicate key, or unexpected — into the same JSON shape with a stable `code`.

## Troubleshooting

- `querySrv ECONNREFUSED`: Atlas SRV DNS failed. Confirm internet access and Atlas Network Access (allow your IP). The API already prefers public DNS (`8.8.8.8`) for SRV lookups.
- `MONGODB_URI is required`: `.env` is missing or not in the `backend` folder.
- Server exits immediately on start: another required value in `.env` is missing or malformed; the startup error names the offending key.
- CORS errors in the browser: `CORS_ORIGIN` must match the frontend origin, usually `http://localhost:3000`.
- Port 4000 in use: change `PORT` in `.env`.
