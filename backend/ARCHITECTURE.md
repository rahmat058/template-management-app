# backend — Architecture

Express **4** + TypeScript REST API that persists templates in **MongoDB Atlas** through Mongoose. Requests move through a fixed middleware chain into feature modules, where each route is handled by a controller, delegated to a service, and mapped to a response DTO. Every request body is validated with **Zod** before it reaches the database.

Local setup and troubleshooting: **[README.md](./README.md)**. Repo overview: **[../README.md](../README.md)**.

---

## High-level map

```
  frontend (NEXT_PUBLIC_API_URL)
       │  JSON · /api/*
       ▼
  ┌─────────────────────────────────────────────────────────────┐
  │  Express app                                                │
  │  helmet → cors → requestId → compression → rateLimit        │
  │         → json(2mb) → urlencoded → morgan                   │
  │         → /api router → 404 → errorHandler                  │
  └─────────────────────────────────────────────────────────────┘
       │
       ▼
  routes/index.ts
       ├── /api/health    → health module
       └── /api/templates → routes → controller → service → mapper
                                                     │
                                                     ▼
                                              models/template.model.ts
                                                     │
                                                     ▼
                                        MongoDB Atlas · `templates`
```

| Layer       | Path                                                      | Role                                                |
| ----------- | --------------------------------------------------------- | --------------------------------------------------- |
| Entry       | `src/server.ts`                                           | Connect with retry, listen, HTTP timeouts, shutdown |
| App         | `src/app.ts`                                              | Middleware and router wiring                        |
| Routes      | `src/routes`, `src/modules/*/*.routes.ts`                 | Path → handler, plus per-route validation           |
| Controllers | `src/modules/*/*.controller.ts`                           | Read request, call the service, shape the response  |
| Services    | `src/modules/*/*.service.ts`                              | Persistence rules; throws operational errors        |
| Mappers     | `src/modules/*/*.mapper.ts`                               | Plain record → API DTO                              |
| Models      | `src/models`                                              | Embedded Mongoose schema                            |
| Validation  | `src/validators`                                          | Zod schemas for body, params, and query             |
| Scripts     | `src/scripts`                                             | Explicit index sync (`npm run indexes`)             |
| Failures    | `src/lib/app-error.ts`, `src/middleware/error-handler.ts` | Error taxonomy and one JSON error shape             |

---

## Project structure

```
backend/
├── nodemon.json             # watch src, run tsx src/server.ts
├── src/
│   ├── server.ts            # bootstrap: DB retry → listen → SIGINT/SIGTERM
│   ├── app.ts               # createApp(): middleware + routes
│   ├── config/
│   │   ├── env.ts           # dotenv + Zod validation of process.env
│   │   └── db.ts            # mongoose.connect, DNS + driver options
│   ├── lib/
│   │   ├── app-error.ts     # AppError + NotFound / Validation / Conflict
│   │   ├── async-handler.ts # forwards async rejections to next()
│   │   ├── db-retry.ts      # connectDatabase with linear backoff
│   │   ├── http.ts          # sendSuccess / sendError / sendNoContent
│   │   └── wait.ts          # setTimeout as a promise
│   ├── middleware/
│   │   ├── validate-request.ts   # Zod parse into req.body/params/query
│   │   ├── not-found.ts          # unmatched route → 404
│   │   ├── request-id.ts         # assigns X-Request-Id, exposes it to logs
│   │   └── error-handler.ts      # single error → JSON mapper
│   ├── models/template.model.ts  # Template + embedded pages/elements
│   ├── modules/
│   │   ├── health/               # routes + controller
│   │   └── templates/            # routes, controller, service, mapper, validator
│   ├── scripts/                  # duplicate pre-check + explicit index sync
│   ├── seed/                     # default-templates.ts + clear-and-seed runner
│   ├── routes/index.ts           # /api router
│   ├── types/                    # document, element, template, api
│   └── validators/template.schema.ts
└── dist/                    # tsc output (npm run build)
```

`npm run dev` runs nodemon + tsx; `npm run build` emits CommonJS to `dist/`; `npm run start` runs `node dist/server.js`. `npm run seed` connects, **clears the `templates` collection**, and inserts `src/seed/default-templates.ts` — the default `template1` document the frontend autoload expects. Seeding writes only to MongoDB and does not start the API, which must be running for the editor to fetch the template.

---

## Runtime surfaces

All routes mount under `/api`.

| Method   | Path                           | Validation    | Description                                        |
| -------- | ------------------------------ | ------------- | -------------------------------------------------- |
| `GET`    | `/api/health`                  | —             | `200` when Mongo is connected, `503` when degraded |
| `GET`    | `/api/templates`               | —             | Summaries, newest first, capped at 100             |
| `POST`   | `/api/templates`               | body          | Create → `201`                                     |
| `GET`    | `/api/templates/by-name/:name` | params        | Load by name (the frontend autoload path)          |
| `GET`    | `/api/templates/:id`           | params        | Full template                                      |
| `PATCH`  | `/api/templates/:id`           | params + body | Partial update                                     |
| `DELETE` | `/api/templates/:id`           | params        | Delete → `204`, empty body                         |

Routes are declared so that **`/by-name/:name` precedes `/:id`** — otherwise `/:id` would match the literal `by-name` first and the lookup would fail with an id-cast error.

Responses are always one of two envelopes, both produced by `lib/http.ts`:

```json
{ "success": true, "data": … }
{ "success": false, "error": { "message": "…", "code": "…", "details": … } }
```

The HTTP status code stays on the status line and is never echoed in the body, so the two cannot drift apart. `204` responses carry no body at all.

---

## Request lifecycle

```
request
   │
   ├─ helmet            security headers
   ├─ cors              origin CORS_ORIGIN, methods GET/POST/PATCH/DELETE/OPTIONS, exposes X-Request-Id
   ├─ requestId         reuses a safe inbound X-Request-Id, else randomUUID; echoes it back
   ├─ compression       gzip/brotli — template JSON is highly repetitive
   ├─ rateLimit         120 requests / 60s, in-process, health checks skipped
   ├─ express.json      limit 2mb
   ├─ express.urlencoded
   ├─ morgan            same line format everywhere, request id appended in brackets
   │
   ├─ /api router
   │     ├─ validateRequest({ params, body })   Zod parse → 400 on failure
   │     ├─ controller        asyncHandler wraps every handler
   │     ├─ service           throws AppError subclasses
   │     └─ mapper            record → DTO
   │
   ├─ notFoundHandler   404 ROUTE_NOT_FOUND
   └─ errorHandler      single JSON error mapper
```

The rate limiter runs **before** the body parsers so a request is counted before the server spends
work parsing up to 2 MB for it, and `/api/health` is skipped so load-balancer probes never consume
the shared quota. `requestId` runs early so every later layer — including `morgan` and the error
handler — can log the same id. `app.set('trust proxy', TRUST_PROXY)` is what makes `req.ip` (and
therefore the limiter and the logs) see the real client behind a proxy.

`asyncHandler` exists because Express 4 does not catch rejected promises; every async controller is wrapped so failures reach `errorHandler` instead of hanging the request.

---

## Error handling

`errorHandler` maps each failure class to a status and a stable `code`, so the client never parses prose:

| Raised                           | Status           | `code`                                               |
| -------------------------------- | ---------------- | ---------------------------------------------------- |
| `AppError` (and subclasses)      | its `statusCode` | its `code`                                           |
| `ZodError`                       | `400`            | `VALIDATION_ERROR` (with `issues`)                   |
| `mongoose.Error.CastError`       | `400`            | `INVALID_ID`                                         |
| `mongoose.Error.ValidationError` | `400`            | `DB_VALIDATION_ERROR` (details hidden in production) |
| Body over 2 MB                   | `413`            | `PAYLOAD_TOO_LARGE`                                  |
| Malformed JSON body              | `400`            | `MALFORMED_JSON`                                     |
| Mongo duplicate key (`11000`)    | `409`            | `DUPLICATE_KEY`                                      |
| anything else                    | `500`            | `INTERNAL_ERROR` (message hidden in production)      |

The two body-parser rows matter because `express.json()` rejects the request **before** any route
runs. Without them an oversized or malformed body would fall through to the generic branch, and the
client would get a `500` that it cannot tell apart from a server fault.

`lib/app-error.ts` provides the operational set: `NotFoundError` (404), `ValidationError` (400), `ConflictError` (409). Unexpected errors are logged to the console with the request method, path and id, and production responses deliberately omit the message. `DB_VALIDATION_ERROR` details are also suppressed in production, because Mongoose echoes the rejected values.

`DUPLICATE_KEY` is only reachable because `name` is uniquely indexed — creating or renaming a template onto an existing name now returns `409` instead of silently creating a second document.

---

## Data model

One document per template, with pages and elements embedded — so a save is a single atomic write and there is nothing to join.

```
templates
├── name        String, required, trim, max 120
├── pages[]     embedded · _id disabled
│   ├── id, order, width, height, background
│   └── elements[]   discriminated by `type`, `_id` disabled
│       ├── text   { content, fontFamily, fontSize, fontWeight, color, align }
│       ├── table  { columns, rows[].cells[], borderWidth, borderColor, cellPadding, rowSpacing }
│       ├── image  { src, alt?, objectFit }
│       └── shape  { kind, fill, borderColor, borderWidth, borderRadius }
├── version     Number, default 1
├── status      draft | active | archived, default active
└── createdAt / updatedAt           timestamps: true

indexes: { name: 1 } unique · { updatedAt: -1 }
```

Subdocuments all set `{ _id: false }` because elements already carry their own string `id` from the editor.

### Indexes

`{ updatedAt: -1 }` backs the list sort; `{ name: 1 }` is **unique**, which makes `by-name` resolve to
at most one document and turns duplicate-name saves into `409 DUPLICATE_KEY`.

`autoIndex` is `true` outside production, so dev and test build them automatically, and `false` in
production (`config/db.ts`). Production builds them explicitly:

```bash
npm run indexes
```

That runner connects, prints the target database, and then:

1. runs a duplicate pre-check (`$group` by name → `$match` count > 1) and **aborts with the offending
   names listed** if any exist — a unique index cannot be built over duplicates, and Mongo's own
   error does not say which documents collide;
2. reports what `diffIndexes()` would create and drop;
3. applies `syncIndexes()` and prints the resulting index list.

This is deliberately not done at boot: a failed index build must never block the API from starting.

Reads use `.lean()` — `getTemplateById`, `getTemplateByName`, `updateTemplate` and the `deleteTemplate`
existence check all return plain objects rather than hydrated documents, so no subdocument is built
per page, element, row, and cell. The list endpoint is an aggregation that projects
`pageCount: { $size: '$pages' }`, so Atlas computes the count and the pages themselves never leave the
database. Every query carries `.maxTimeMS(5_000)`, which bounds how long one query can hold a socket
in the pool — the driver's `serverSelectionTimeoutMS` only covers picking a server, not running the
query.

---

## Configuration

`config/env.ts` validates `process.env` with Zod at startup and **throws** on the first invalid configuration, so a misconfigured process fails immediately rather than at request time.

| Variable      | Default                 | Notes                                                       |
| ------------- | ----------------------- | ----------------------------------------------------------- |
| `NODE_ENV`    | —                       | **Required**; `development` · `test` · `production`         |
| `PORT`        | `4000`                  | Coerced to a positive integer                               |
| `CORS_ORIGIN` | `http://localhost:3000` | Must match the frontend origin                              |
| `TRUST_PROXY` | `0`                     | Non-negative integer; number of proxies in front of the API |
| `MONGODB_URI` | —                       | Required; Atlas connection string                           |

`NODE_ENV` has no default on purpose. When it defaulted to `development`, a deployment that set only
`MONGODB_URI` and `PORT` would boot in development mode — where the `500` handler returns raw
internal error messages. A missing value now fails fast at boot instead. `backend/.env` and
`.env.example` already set it, and Jest sets `NODE_ENV=test` automatically.

`TRUST_PROXY` is what makes `req.ip` meaningful behind a load balancer. Left at `0`, the driver sees
the proxy's address, so every client shares one rate-limit bucket and the logs are untraceable. Set it
to `1` behind a single ALB/nginx/ingress.

`config/db.ts` pins the public resolvers (`8.8.8.8`, `1.1.1.1`) and `ipv4first` before connecting, a workaround for `querySrv ECONNREFUSED` on Atlas SRV lookups. Connections use a 10 s server-selection and connect timeout, a 45 s socket timeout, pool size 10 with a warm floor of 5 and a 60 s idle timeout, and `family: 4`.

`lib/db-retry.ts` retries the initial connection up to **8 times** with a linear backoff (`2 s × attempt`) before `server.ts` starts listening.

`server.ts` also pins the HTTP timeouts instead of inheriting Node's defaults: `keepAliveTimeout`
61 s, `headersTimeout` 65 s (kept above keep-alive so an idle socket is reclaimed first), and
`requestTimeout` 30 s. On `SIGINT`/`SIGTERM` — or on an uncaught exception — it drains in-flight
requests (`server.close()` plus `closeIdleConnections()`, so one idle keep-alive socket cannot hold
shutdown open), closes the Mongo pool, and exits; an unref'd 10 s timer forces the exit if anything
wedges. `unhandledRejection` is logged and does **not** exit, since the request that caused it has
already failed.

---

## Cross-cutting concerns

| Topic                | Implementation                                                                                                 |
| -------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Security headers** | `helmet`, with `x-powered-by` disabled                                                                         |
| **CORS**             | Single configured origin; explicit method and header allowlists; 24 h preflight cache                          |
| **Body size**        | `express.json({ limit: '2mb' })`, mapped to `413` rather than `500`                                            |
| **Rate limiting**    | `express-rate-limit`, 120 requests/minute, before the body parsers, health checks skipped                      |
| **Compression**      | `compression` on every response — template JSON compresses 80–90%                                              |
| **Logging**          | `morgan`, request id appended to every line (`remote-addr` prefixed in production); errors via `console.error` |
| **Correlation**      | `X-Request-Id` accepted when safe, generated otherwise, echoed and logged                                      |
| **Validation**       | Zod at the boundary, reusing the same bounds the editor enforces                                               |
| **Health**           | `/api/health` reports Mongo `readyState`, not just process liveness                                            |
| **Shutdown**         | Signals and `uncaughtException` drain, close Mongo, then exit                                                  |

Zod constraints mirror the editor's limits — for example `table.rows[].cells.length` must equal `table.columns`, and each page accepts at most 500 elements.

---

## Design patterns

| Pattern                | Where                        | Purpose                                                              |
| ---------------------- | ---------------------------- | -------------------------------------------------------------------- |
| Feature modules        | `src/modules/*`              | Each feature owns its routes, controller, service, mapper, validator |
| Layered separation     | controller → service → model | Transport concerns never reach the data layer                        |
| DTO mapping            | `template.mapper.ts`         | `_id` → `id`, `Date` → ISO string, summary projection                |
| Error taxonomy         | `lib/app-error.ts`           | Failures carry status, code, and details                             |
| Single response helper | `lib/http.ts`                | One success/error/`204` envelope across every handler                |
| Async wrapper          | `lib/async-handler.ts`       | Applies catch-all forwarding uniformly                               |
| Schema-first config    | `config/env.ts`              | Invalid environment fails fast at boot                               |

---

## Remaining limits

- **The unique index is applied manually.** The schema declares it, but production builds indexes only
  via `npm run indexes` — which **aborts** if duplicates already exist. A deployment therefore has to
  resolve pre-existing duplicates before the constraint takes effect, and until then the database can
  still hold them.
- **No authentication or ownership.** Every endpoint is public and anyone can list, read, modify, or delete any template. The API must sit behind an authenticated gateway or a private network.
- **No pagination.** `GET /api/templates` hard-caps at 100 documents with no cursor or total count.
- **The rate limiter is in-process**, so limits are per-instance and reset on restart.
- **`npm run seed` deletes the whole collection.** It refuses to run under `NODE_ENV=production` unless
  `SEED_ALLOW_PRODUCTION=1` is set, but that is a guard against mistakes, not a safety net — there is no
  backup and no dry-run.
- **Logging is stdout only** — request ids correlate a request, but there is no structured logging, metrics, or log shipping (no pino/prom-client).
- **The health check does not ping MongoDB.** It reads `readyState`, so frequent probes cost no Atlas round-trips, but a network partition can be reported as healthy briefly.
- **`MONGODB_URI` is required at boot**, so the API cannot start without a reachable cluster even for endpoints that would not touch it.
- **The DNS override is global** (`setServers` / `setDefaultResultOrder`), affecting lookups made anywhere in the process, not just Mongo.
- **No committed lockfile or deployment scaffolding** — no Dockerfile, no CI pipeline, and no Node `engines` pin, so installs are not reproducible from the repository alone.
