# Backend — Template Management API

Express + TypeScript REST API with MongoDB (Mongoose) and nodemon for local development.

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
copy .env.example .env
```

4. Fill in `.env`:

```env
NODE_ENV=development
PORT=4000
CORS_ORIGIN=http://localhost:3000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.joojncv.mongodb.net/template_management?retryWrites=true&w=majority
```

Use the Atlas connection string, and keep the database name `template_management` in the URI. Do not commit `.env`.

5. Start the API with nodemon:

```bash
npm run dev
```

The server listens on [http://localhost:4000](http://localhost:4000). Nodemon restarts it when files under `src/` change.

Run the frontend in a **separate terminal** (`cd frontend` then `npm run dev`).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the API with nodemon + tsx |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm run start` | Run the compiled server (`node dist/server.js`) |
| `npm run typecheck` | Type-check without emitting files |

## API endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/health` | Service and MongoDB status |
| `GET` | `/api/templates` | List saved templates |
| `POST` | `/api/templates` | Create a template |
| `GET` | `/api/templates/:id` | Get one template |
| `PATCH` | `/api/templates/:id` | Update a template |
| `DELETE` | `/api/templates/:id` | Delete a template |

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

## Project structure

```text
src/
├── app.ts                 Express app (CORS, helmet, rate limit, JSON)
├── server.ts              Database connect + HTTP listen
├── config/                Env validation and MongoDB connection
├── middleware/            Validation, 404, and error handler
├── models/                Mongoose Template schema
├── modules/
│   ├── health/            Health route
│   └── templates/         CRUD controller, service, mapper, routes
├── types/                 Document, element, template, and API types
├── validators/            Zod request schemas
└── routes/                API router
```

## Troubleshooting

- `querySrv ECONNREFUSED`: Atlas SRV DNS failed. Confirm internet access and Atlas Network Access (allow your IP). The API already prefers public DNS (`8.8.8.8`) for SRV lookups.
- `MONGODB_URI is required`: `.env` is missing or not in the `backend` folder.
- CORS errors in the browser: `CORS_ORIGIN` must match the frontend origin, usually `http://localhost:3000`.
- Port 4000 in use: change `PORT` in `.env`.
