# backend — Architecture

Express **4** + TypeScript REST API that persists templates in **MongoDB Atlas** through Mongoose. Requests move through a fixed middleware chain into feature modules, where each route is handled by a controller, delegated to a service, and mapped to a response DTO. Every request body is validated with **Zod** before it reaches the database.

Local setup and troubleshooting: **[README.md](./README.md)**. Repo overview: **[../README.md](../README.md)**.

---

## High-level map

```
  frontend (NEXT_PUBLIC_API_URL)
       │  JSON · /api/*
       ▼
  ┌─────────────────────────────────────────────────────────┐
  │  Express app                                            │
  │  helmet → cors → json(2mb) → urlencoded → rateLimit     │
  │         → morgan → /api router → 404 → errorHandler     │
  └─────────────────────────────────────────────────────────┘
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

| Layer       | Path                                                      | Role                                               |
| ----------- | --------------------------------------------------------- | -------------------------------------------------- |
| Entry       | `src/server.ts`                                           | Connect with retry, listen, graceful shutdown      |
| App         | `src/app.ts`                                              | Middleware and router wiring                       |
| Routes      | `src/routes`, `src/modules/*/*.routes.ts`                 | Path → handler, plus per-route validation          |
| Controllers | `src/modules/*/*.controller.ts`                           | Read request, call the service, shape the response |
| Services    | `src/modules/*/*.service.ts`                              | Persistence rules; throws operational errors       |
| Mappers     | `src/modules/*/*.mapper.ts`                               | Mongoose document → API DTO                        |
| Models      | `src/models`                                              | Embedded Mongoose schema                           |
| Validation  | `src/validators`                                          | Zod schemas for body, params, and query            |
| Failures    | `src/lib/app-error.ts`, `src/middleware/error-handler.ts` | Error taxonomy and one JSON error shape            |

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
│   │   └── http.ts          # sendSuccess / sendNoContent
│   ├── middleware/
│   │   ├── validate-request.ts   # Zod parse into req.body/params/query
│   │   ├── not-found.ts          # unmatched route → 404
│   │   └── error-handler.ts      # single error → JSON mapper
│   ├── models/template.model.ts  # Template + embedded pages/elements
│   ├── modules/
│   │   ├── health/               # routes + controller
│   │   └── templates/            # routes, controller, service, mapper, validator
│   ├── routes/index.ts           # /api router
│   ├── types/                    # document, element, template, api
│   └── validators/template.schema.ts
└── dist/                    # tsc output (npm run build)
```

`npm run dev` runs nodemon + tsx; `npm run build` emits CommonJS to `dist/`; `npm run start` runs `node dist/server.js`.

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

Responses are always one of two envelopes:

```json
{ "data": … }
{ "error": { "message": "…", "code": "…", "details": … } }
```

---

## Request lifecycle

```
request
   │
   ├─ helmet            security headers
   ├─ cors              origin CORS_ORIGIN, methods GET/POST/PATCH/DELETE/OPTIONS
   ├─ express.json      limit 2mb
   ├─ express.urlencoded
   ├─ rateLimit         120 requests / 60s, in-process
   ├─ morgan            'dev' locally, 'combined' in production (skipped in test)
   │
   ├─ /api router
   │     ├─ validateRequest({ params, body })   Zod parse → 400 on failure
   │     ├─ controller        asyncHandler wraps every handler
   │     ├─ service           throws AppError subclasses
   │     └─ mapper            document → DTO
   │
   ├─ notFoundHandler   404 ROUTE_NOT_FOUND
   └─ errorHandler      single JSON error mapper
```

`asyncHandler` exists because Express 4 does not catch rejected promises; every async controller is wrapped so failures reach `errorHandler` instead of hanging the request.

---

## Error handling

`errorHandler` maps each failure class to a status and a stable `code`, so the client never parses prose:

| Raised                           | Status           | `code`                                          |
| -------------------------------- | ---------------- | ----------------------------------------------- |
| `AppError` (and subclasses)      | its `statusCode` | its `code`                                      |
| `ZodError`                       | `400`            | `VALIDATION_ERROR` (with `issues`)              |
| `mongoose.Error.CastError`       | `400`            | `INVALID_ID`                                    |
| `mongoose.Error.ValidationError` | `400`            | `DB_VALIDATION_ERROR`                           |
| Mongo duplicate key (`11000`)    | `409`            | `DUPLICATE_KEY`                                 |
| anything else                    | `500`            | `INTERNAL_ERROR` (message hidden in production) |

`lib/app-error.ts` provides the operational set: `NotFoundError` (404), `ValidationError` (400), `ConflictError` (409). Unexpected errors are logged to the console, and production responses deliberately omit the message.

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

indexes: { name: 1 } · { updatedAt: -1 }
```

Subdocuments all set `{ _id: false }` because elements already carry their own string `id` from the editor.

---

## Configuration

`config/env.ts` validates `process.env` with Zod at startup and **throws** on the first invalid configuration, so a misconfigured process fails immediately rather than at request time.

| Variable      | Default                 | Notes                                 |
| ------------- | ----------------------- | ------------------------------------- |
| `NODE_ENV`    | `development`           | `development` · `test` · `production` |
| `PORT`        | `4000`                  | Coerced to a positive integer         |
| `CORS_ORIGIN` | `http://localhost:3000` | Must match the frontend origin        |
| `MONGODB_URI` | —                       | Required; Atlas connection string     |

`config/db.ts` pins the public resolvers (`8.8.8.8`, `1.1.1.1`) and `ipv4first` before connecting, a workaround for `querySrv ECONNREFUSED` on Atlas SRV lookups. Connections use a 10 s server-selection timeout, pool size 10, and `family: 4`.

`server.ts` retries the initial connection up to **8 times** with a linear backoff (`2 s × attempt`), then closes the HTTP server on `SIGINT`/`SIGTERM` before exiting.

---

## Cross-cutting concerns

| Topic                | Implementation                                                      |
| -------------------- | ------------------------------------------------------------------- |
| **Security headers** | `helmet`, with `x-powered-by` disabled                              |
| **CORS**             | Single configured origin; explicit method and header allowlists     |
| **Body size**        | `express.json({ limit: '2mb' })`                                    |
| **Rate limiting**    | `express-rate-limit`, 120 requests/minute, standard headers         |
| **Logging**          | `morgan` per environment; unexpected errors via `console.error`     |
| **Validation**       | Zod at the boundary, reusing the same bounds the editor enforces    |
| **Health**           | `/api/health` reports Mongo `readyState`, not just process liveness |
| **Shutdown**         | Signal handlers close the server rather than exiting abruptly       |

Zod constraints mirror the editor's limits — for example `table.rows[].cells.length` must equal `table.columns`, and each page accepts at most 500 elements.

---

## Design patterns

| Pattern                | Where                        | Purpose                                                              |
| ---------------------- | ---------------------------- | -------------------------------------------------------------------- |
| Feature modules        | `src/modules/*`              | Each feature owns its routes, controller, service, mapper, validator |
| Layered separation     | controller → service → model | Transport concerns never reach the data layer                        |
| DTO mapping            | `template.mapper.ts`         | `_id` → `id`, `Date` → ISO string, summary projection                |
| Error taxonomy         | `lib/app-error.ts`           | Failures carry status, code, and details                             |
| Single response helper | `lib/http.ts`                | One success/`204` shape across every handler                         |
| Async wrapper          | `lib/async-handler.ts`       | Applies catch-all forwarding uniformly                               |
| Schema-first config    | `config/env.ts`              | Invalid environment fails fast at boot                               |

---

## Remaining limits

- **`name` is indexed but not unique**, yet the error handler already maps Mongo's `11000` to `DUPLICATE_KEY`. Duplicate names are therefore possible today, and `by-name` silently resolves to the most recently updated match — sharing a name is how the frontend's autoload can be shadowed.
- **No authentication or ownership.** Every endpoint is public and anyone can list, read, modify, or delete any template.
- **No pagination.** `GET /api/templates` hard-caps at 100 documents with no cursor or total count.
- **The rate limiter is in-process**, so limits are per-instance and reset on restart.
- **No automated tests.** No runner is configured; `pre-push` runs lint and format checks only.
- **Logging is stdout only** — no structured logging, request ids, or log shipping.
- **`MONGODB_URI` is required at boot**, so the API cannot start without a reachable cluster even for endpoints that would not touch it.
- **The DNS override is global** (`setServers` / `setDefaultResultOrder`), affecting lookups made anywhere in the process, not just Mongo.
