# Frontend Architecture — Template Management App

## 1. Purpose and Scope

This document describes the **frontend as it is actually implemented** in `frontend/`. It is the
counterpart to the forward-looking specification docs in this folder:

| Document                                   | Describes                                                     |
| ------------------------------------------ | ------------------------------------------------------------- |
| `PRD.md`                                   | Product requirements and user journeys                        |
| `design.md`                                | Intended design system and layout                             |
| `database-schema.md`                       | MongoDB collections and Mongoose schemas                      |
| **`frontend-architecture.md`** (this file) | The shipped Next.js frontend: structure, state, and data flow |

Where the implementation diverges from the specs, see §15.

---

## 2. Agent Configuration

The repository uses two agent-instruction files. This document deliberately **points at them**
rather than duplicating their content, because their content is generated, not authored.

| File                    | Status   | Content                                                                                                                                         |
| ----------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `AGENTS.md` (repo root) | Mixed    | The auto-generated `<!-- BEGIN:nextjs-agent-rules -->` block, plus an authored **Project Documentation** section linking to this `docs/` folder |
| `frontend/CLAUDE.md`    | Authored | A single line, `@AGENTS.md` — delegates to the file above                                                                                       |

`AGENTS.md` warns that this Next.js version differs from model training data and that the
authoritative guide ships inside the package at:

```text
frontend/node_modules/next/dist/docs/
```

The root `AGENTS.md` also carries a hand-written **Project Documentation** section that links back
to this file and its siblings. It sits _outside_ the managed markers, so it survives regeneration.

### How the managed block behaves

`AGENTS.md` was moved from `frontend/` to the repo root, so it is worth knowing exactly what
`next dev` does to it:

- The generator (`node_modules/next/dist/server/lib/generate-agent-files.js`) targets the **Next.js
  project directory** — `frontend/` — not the git root.
- It only ever rewrites the text **between** the `nextjs-agent-rules` markers. Content before or
  after the block is preserved verbatim, which is what makes the docs section above safe.
- `hasCurrentAgentRules()` short-circuits and writes nothing when the block is already current, so a
  clean project produces no churn.
- Because `frontend/AGENTS.md` no longer exists while `frontend/CLAUDE.md` does, the next `next dev`
  run will **upsert the block into `frontend/CLAUDE.md`** rather than recreating
  `frontend/AGENTS.md`.
- Generation can be turned off entirely with `agentRules: false` in `next.config.ts`.

> **Dangling reference:** `frontend/CLAUDE.md` contains the single line `@AGENTS.md`, an import
> resolved relative to its own directory. Since `AGENTS.md` now lives at the repo root, that import
> no longer resolves — it should point at `../AGENTS.md`, or at `../docs/frontend-architecture.md`,
> for the delegation to work.

---

## 3. Stack

| Concern       | Choice                                                       | Version      |
| ------------- | ------------------------------------------------------------ | ------------ |
| Framework     | Next.js (App Router, Turbopack)                              | `16.3.5`     |
| UI            | React / React DOM                                            | `19.2.8`     |
| Language      | TypeScript (`strict`, `noImplicitAny`)                       | `^5`         |
| Styling       | Tailwind CSS v4 via `@tailwindcss/postcss`                   | `^4`         |
| Client state  | Zustand                                                      | `^5.0.15`    |
| Server state  | TanStack Query                                               | `^5.102.8`   |
| Drag & drop   | `@dnd-kit/core`, `/sortable`, `/utilities`                   | `^6.3.1`     |
| PDF           | `@react-pdf/renderer`                                        | `^4.9.0`     |
| Icons         | `lucide-react`                                               | `^1.46.0`    |
| Dates         | `date-fns`                                                   | `^4.4.0`     |
| Class utils   | `clsx` + `tailwind-merge`                                    | —            |
| Lint / format | ESLint flat config + Prettier (tailwind + css-order plugins) | `^9`, `^3.9` |

Notable configuration:

- **`next.config.ts`** — `distDir: ".next"`; `outputFileTracingRoot` and `turbopack.root` are pinned
  to the package directory (the parent git root would otherwise create a nested `frontend/frontend`
  build folder); `serverExternalPackages: ["@react-pdf/renderer"]`.
- **Path alias** — `@/*` → `./src/*`.
- **`tsconfig.json`** — `target: ES2017`, `moduleResolution: "bundler"`, `noEmit: true`.
- **`eslint.config.mjs`** — flat config composing `js.configs.recommended`, `eslint-config-next`
  core-web-vitals + TypeScript, plus `react-hooks/rules-of-hooks` (error) and
  `react-hooks/exhaustive-deps` (warn).

### Scripts

| Command                                   | Description                                 |
| ----------------------------------------- | ------------------------------------------- |
| `npm run dev`                             | Next.js dev server (Turbopack) on port 3000 |
| `npm run build` / `npm run start`         | Production build / serve                    |
| `npm run lint` / `npm run lint:fix`       | ESLint over `.`                             |
| `npm run format` / `npm run format:check` | Prettier write / check                      |
| `npm run typecheck`                       | `tsc --noEmit`                              |

There is **no test runner configured** in this package.

---

## 4. Source Layout

```text
frontend/
├── public/images/                Brand assets
│   ├── company-logo.png          Company logo, rewritten by the API route
│   └── footer-logo.png           Footer logo used by the default document
└── src/
    ├── app/                      App Router entry
    │   ├── layout.tsx            Root layout, Inter font, <Providers>
    │   ├── page.tsx              Renders <EditorShell />
    │   ├── providers.tsx         React Query provider
    │   ├── globals.css           Tailwind v4 @theme design tokens
    │   └── api/company-logo/     POST route handler
    ├── components/
    │   ├── editor/               Shell, header, tabs, toolbox, canvas, properties
    │   │   └── properties/       Per-element settings panels
    │   ├── elements/             Text / Table / Image / Shape renderers
    │   │   └── table/            Sortable rows, cell editor, toolbar, layout math
    │   ├── pdf/                  TemplatePdfDocument
    │   └── ui/                   Button, Input, Select, Modal, Tooltip
    ├── hooks/                    Query/mutation hooks, shortcuts, mount guard
    ├── lib/                      API client, document utils, history, DnD math, tokens
    │   └── pdf/                  Export orchestration, font map, image resolution
    ├── store/                    Zustand editor / ui stores, history selector
    └── types/                    Document, element, template, API types
```

---

## 5. Boot Sequence

```text
layout.tsx (server)
  └─ Providers            React Query client, created once per mount
       └─ page.tsx        <EditorShell />
            └─ EditorShell (client)
                 1. useHasMounted()          SSR-safe mount flag, gates DnD
                 2. useHydrateTemplate1()    GET /templates/by-name/template1
                 3. editorStore.hydrateFromTemplate(template)
```

1. **`Providers`** wraps the app in a single `QueryClientProvider`. There is no theme provider,
   no auth provider, and no Zustand provider — the stores are module-level singletons.
2. **`EditorShell`** renders a skeleton (`EditorShellFallback`) until both the mount flag is `true`
   and the hydration query has settled.
3. **`useHydrateTemplate1`** fetches the template named `template1` (`AUTOLOAD_TEMPLATE_NAME`) with
   `retry: false`, then calls `hydrateFromTemplate` **once** from a `useLayoutEffect` guarded by a ref.
4. Hydration is a **no-op when the active tab is dirty or already bound to a template id**, so an
   autoload can never clobber in-progress work. Otherwise it replaces the pristine untitled tab,
   which keeps the deterministic id `tab-untitled`.
5. If hydration fails, `HydrationErrorBanner` renders a danger banner with a "Try again" action
   (`retry` refetches).

`useHasMounted()` uses `useSyncExternalStore` (server snapshot `false`, client snapshot `true`) so
drag handlers are never attached during SSR — this is what prevents hydration mismatches.

---

## 6. Domain Model (`src/types/`)

### Pages and units — `document.ts`

```ts
export const A4_PORTRAIT = { width: 794, height: 1123 } as const
export const DOCUMENT_VERSION = 1

interface Page {
  id: string
  order: number // 0-based page ordering
  width: number // 794
  height: number // 1123
  background: string // "#ffffff"
  elements: DocumentElement[]
}
```

**Units are unscaled page pixels.** A page is A4 portrait at 794×1123 CSS px (96 DPI). Element
`x`/`y`/`width`/`height` use the same units; **zoom is a render-time concern only** and never leaks
into the model.

`DOCUMENT_VERSION` (schema version) is distinct from `Template.version` (document revision, carried
through save).

### Elements — `element.ts`

A discriminated union on `type`:

```ts
interface BaseElement {
  id: string
  x: number
  y: number
  width: number
  height: number
  zIndex: number
  locked: boolean
  visible: boolean
}

type DocumentElement = TextElement | TableElement | ImageElement | ShapeElement
```

| Type    | Payload                                                                | Notes                                                      |
| ------- | ---------------------------------------------------------------------- | ---------------------------------------------------------- |
| `text`  | `{ content, fontFamily, fontSize, fontWeight, color, align }`          | `fontFamily` is typed `string`, not the `FontFamily` union |
| `table` | `{ columns, rows, borderWidth, borderColor, cellPadding, rowSpacing }` | `TableRow { id, cells }`, `TableCell { id, value }`        |
| `image` | `{ src, alt?, objectFit }`                                             | `objectFit: contain \| cover \| fill`                      |
| `shape` | `{ kind, fill, borderColor, borderWidth, borderRadius }`               | `kind: rectangle \| circle \| line`                        |

Supporting const tuples: `ELEMENT_TYPES`, `TEXT_ALIGNS`, `IMAGE_OBJECT_FITS`, `SHAPE_KINDS`,
`FONT_FAMILIES` (`Inter`, `Arial`, `Helvetica`, `Georgia`, `Times New Roman`).

### Persistence — `template.ts`

`Template { id, name, pages, version, status, createdAt, updatedAt }` embeds the full document.
`TemplateSummary` is the list projection and carries `pageCount` instead of `pages`.
`TemplateStatus = draft | active | archived`.

### Transport — `api.ts`

`ApiSuccess<T> = { data: T }`, `ApiErrorResponse = { error: { message, code, details? } }`,
`HealthStatus { status, service, timestamp, database }`.

---

## 7. State Management (`src/store/`)

### `editor.store.ts` — the core store

```ts
interface EditorTab {
  id: string
  name: string
  templateId: string | null
  document: { pages: Page[]; version: number }
  activePageId: string
  selectedElementId: string | null
  isDirty: boolean
  history: TabHistory
}
```

State is `{ tabs, activeTabId, mode: "edit" | "preview" }`, seeded with one untitled tab named
`New-Template` and the deterministic id `tab-untitled`.

| Group        | Actions                                                                                                               |
| ------------ | --------------------------------------------------------------------------------------------------------------------- |
| Read         | `getActiveTab`, `getActivePage`, `getSelectedElement`                                                                 |
| Tabs         | `setActiveTab`, `setTabName`, `createTab`, `closeTab`, `openTemplate`, `hydrateFromTemplate`, `markSaved`             |
| Mode / pages | `setMode`, `setActivePage`, `addPage`, `removePage`                                                                   |
| Elements     | `selectElement`, `addElement`, `moveElement`, `resizeElement`, `updateElement`, `updatePage`, `removeSelectedElement` |
| History      | `undo`, `redo`                                                                                                        |

Behavioural details worth knowing:

- `closeTab` recreates an untitled tab when the last tab is closed.
- `openTemplate` focuses an existing tab with the same `templateId`, otherwise reuses a lone
  pristine untitled tab, otherwise creates a new tab.
- `markSaved` clears `isDirty` and binds `templateId` + `name`.
- `moveElement` clamps to `[0, page.width - element.width]` and rounds.
- Any mutation touching pages goes through `updateActivePage`, which always sets `isDirty: true`.

### `history.store.ts`

Despite the name, this is **not a Zustand store** — it is a selector hook, `useHistoryStore()`,
deriving `{ canUndo, canRedo, undo, redo }` from the active tab's history arrays.

### `ui.store.ts`

Ephemeral view state: `saveStatus` (`idle | saving | saved | error`), `saveMessage`, `zoom`
(default **0.72**), `activeTool` (`select | text | table | image | shape`).

---

## 8. Undo / Redo (`src/lib/editor-history.ts`)

History is **per tab, in memory only**, never persisted.

- `MAX_HISTORY = 50` snapshots per tab.
- `HISTORY_MERGE_MS = 500` — edits sharing a merge key within 500 ms collapse into one entry, so a
  continuous drag is a single undo step.
- A snapshot is a `structuredClone` of the pages **plus** `activePageId`, `selectedElementId`, and
  `isDirty`.
- `withHistory(tab, key, updater)` is the core wrapper: it pushes a snapshot, truncates to 50,
  clears the redo stack, then applies the updater.
- Merge keys are namespaced per tab as `${tab.id}:${historyKey}`. Mutation call sites use keys such
  as `add:<id>`, `move:<id>`, `resize:<id>`, `element:<id>`, `page`, `remove:<id>`, `add-page`,
  and `remove-page:<id>`.
- `uniqueHistoryKey(prefix, id)` (`${prefix}:${id}:${Date.now()}`) forces a fresh entry for
  discrete structural edits such as adding a table row or column.

Merge state (`mergeKey` / `mergeAt`) is module-level, i.e. shared across tabs; `resetHistoryMerge()`
is called by undo/redo.

---

## 9. Editor UI Composition (`src/components/editor/`)

```text
EditorShell (h-screen flex column)
├── EditorHeader      60px  Project Name · status · Undo/Redo · Preview · Save · Download PDF
├── TemplateTabs      44px  tab strip with dirty "•" markers and "+" to add a tab
└── flex-1 row
    ├── Toolbox            240px dark rail: components + PageThumbnails
    ├── Canvas             flexible: zoom 0.5–1.5 (step 0.1), scaled page(s)
    └── PropertiesPanel    320px: selected-element settings or PageSettings + SavedTemplates
```

| Component           | Role                                                                                          |
| ------------------- | --------------------------------------------------------------------------------------------- |
| `EditorShell`       | Layout, hydration gate, preview switch, error banner                                          |
| `EditorHeader`      | Branding, project-name input, save status, undo/redo, mode toggle, save, PDF                  |
| `TemplateTabs`      | Per-tab navigation, dirty indicators, close, create                                           |
| `Toolbox`           | Adds Text / Table / Image / Shape via factories + `nextElementOffset`, hosts `PageThumbnails` |
| `Canvas`            | Zoom control and page list; delegates to `CanvasPage`                                         |
| `CanvasPage`        | One page surface; owns the `DndContext` (`EditorPointerSensor`, `distance: 6`)                |
| `ElementRenderer`   | Memoized dispatcher: positions wrapper, applies drag transform, renders resize handles        |
| `MoveHandle`        | Grip for text/table drag (those two do **not** drag from the wrapper)                         |
| `ResizeHandles`     | 8 directional handles driving `applyResize`                                                   |
| `PageThumbnails`    | Mini page previews (scaled to 72 px height) with select/delete/add                            |
| `PreviewMode`       | Read-only full-screen canvas (`interactive={false}`) + PDF + back to edit                     |
| `PropertiesPanel`   | Type-dispatched settings, element actions, saved-template list                                |
| `SavedTemplates`    | Template list with Open (fetch → `openTemplate`) and confirm-modal Delete                     |
| `DownloadPdfButton` | Trigger for `useExportPdf`                                                                    |

`Canvas` accepts `{ interactive = true, pageIds? }`, which is what lets `PreviewMode` reuse the exact
same rendering path with interactions disabled.

---

## 10. Element Rendering and Drag & Drop

### Drag & drop

- **`EditorPointerSensor`** (`lib/dnd-sensors.ts`) subclasses `PointerSensor` and refuses to start a
  drag when the pointer target is inside `input`, `textarea`, `select`, `a`,
  `[contenteditable="true"]`, or `[data-no-dnd="true"]`. This is why text areas and table cells stay
  editable while the element itself remains draggable from its handle.
- **`scaleDragTransform`** (`lib/dnd-transform.ts`) divides the dnd-kit transform by zoom so screen
  deltas map back to unscaled page coordinates. The same division is applied manually in
  `CanvasPage.onDragEnd`, `ResizeHandles`, and `SortableTableRow`.
- Text and tables drag from a dedicated handle (`MoveHandle`, `TableToolbar`); images and shapes drag
  from the wrapper and receive `role="button"` / `tabIndex` for keyboard selection.

### Resize

`applyResize(start, handle, dx, dy, pageW, pageH, minSize = 24)` in `lib/element-resize.ts` is a pure
function that:

1. Determines which edges the handle moves (left/right/top/bottom).
2. Shifts `x`/`y` for left/top edges and grows/shrinks `width`/`height`.
3. Enforces `MIN_ELEMENT_SIZE = 24`, re-pinning `x`/`y` for left/top moves.
4. Clamps the result inside the page bounds.
5. Returns rounded `{ x, y, width, height }`.

`resizeCursor(handle)` maps handles to the correct CSS cursor.

### Rendering

| Component      | Highlights                                                                                                                                                                                                       |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TextElement`  | Renders a `<textarea class="canvas-text-input">` when interactive, otherwise plain text; typography inherited from the model; selects all on focus                                                               |
| `ImageElement` | Dashed placeholder when `src` is empty; logo variant gets rounded corners; uses a raw `<img>` (the `next/image` rule is disabled locally)                                                                        |
| `ShapeElement` | Three paths — `line` (centered bar), `circle` (`borderRadius: 999`), `rectangle`                                                                                                                                 |
| `TableElement` | `<table>` with `border-separate` + `borderSpacing` from `rowSpacing`; header row detected when the first cell trims to `"#"`; interactive rows are sortable via a nested `DndContext`; a footer "Add Row" button |

Table subcomponents: `table-layout.ts` (pure column-width and `isIndexedTable` math),
`TableCellEditor` (input vs styled div), `TableToolbar` (the "QUOTATION ITEMS" bar, also the table's
drag handle), and `SortableTableRow` / `StaticTableRow`.

**The "indexed table" convention** is the key cross-cutting rule: a table whose first header cell is
`"#"` is treated as an indexed quotation table everywhere — canvas layout widths and alignment, the
item-detail pill styling, and the PDF renderer. Reordering rows rewrites column 0 into fresh 1-based
values.

---

## 11. Properties Panels (`src/components/editor/properties/`)

| Panel                                     | Coverage                                                                      |
| ----------------------------------------- | ----------------------------------------------------------------------------- |
| `TextSettings`                            | Font family, size (8–96), weight (400/500/600/700), color, alignment, content |
| `TableSettings`                           | Border width/color, padding, row spacing, add/delete column, add/delete row   |
| `ImageSettings`                           | File replace (converted to PNG), image URL, alt text, alignment, object fit   |
| `ShapeSettings`                           | Kind, fill, border color, border width, radius                                |
| `PageSettings`                            | Read-only dimensions, background color                                        |
| `PositionSizeFields`                      | 2×2 numeric grid for x / y / width / height                                   |
| `ElementActions`                          | Danger "Delete" action                                                        |
| `ImageAlignControls`                      | Left/center/right, computed against `PAGE_MARGIN = 56`                        |
| `SectionTitle`, `PanelAction`, `color.ts` | Shared chrome and a `toColorInput` hex guard                                  |

All panels commit through `updateElement(id, updater, historyKey?)`.

---

## 12. Persistence and API Contract

### Client — `src/lib/api.ts`

Base URL: `process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api"`.

A single internal `request<T>()` helper prefixes the base URL, sets `Content-Type: application/json`,
returns `undefined` for `204`, unwraps the `{ data }` envelope on success, and throws
`ApiClientError { message, status, code, details }` parsed from the backend
`{ error: { message, code, details } }` shape.

| `api` method                | HTTP   | Path                                      |
| --------------------------- | ------ | ----------------------------------------- |
| `getHealth()`               | GET    | `/health`                                 |
| `listTemplates()`           | GET    | `/templates`                              |
| `getTemplate(id)`           | GET    | `/templates/:id`                          |
| `getTemplateByName(name)`   | GET    | `/templates/by-name/:name` (404 → `null`) |
| `createTemplate(input)`     | POST   | `/templates`                              |
| `updateTemplate(id, input)` | PATCH  | `/templates/:id`                          |
| `deleteTemplate(id)`        | DELETE | `/templates/:id`                          |

### Server caching — `src/lib/query-client.ts`, `query-keys.ts`

Defaults: `staleTime: 30_000`, `retry: 1`, `refetchOnWindowFocus: false`, mutations `retry: 0`.

```ts
templateKeys = {
  all: ['templates'],
  byName: (name) => ['templates', 'by-name', name],
  detail: (id) => ['templates', id],
}
```

`["templates"]` acts as the umbrella key, so invalidating `templateKeys.all` refreshes both the list
and any detail views.

### Hooks

| Hook                   | Behaviour                                                      |
| ---------------------- | -------------------------------------------------------------- |
| `useTemplates`         | List query                                                     |
| `useTemplate(id)`      | Detail query, `enabled: Boolean(id)`                           |
| `useHydrateTemplate1`  | Autoload `template1` once, exposes `{ isReady, error, retry }` |
| `useSaveTemplate`      | Mutation: PATCH when the tab has a `templateId`, else POST     |
| `useExportPdf`         | `{ exportPdf, isExporting, error }`                            |
| `useEditorSelection`   | The selected element from the active tab/page                  |
| `useKeyboardShortcuts` | Window-level key bindings                                      |
| `useHasMounted`        | SSR-safe mount flag                                            |

`useSaveTemplate` drives the whole save lifecycle: `onMutate` → UI status `saving`; `onSuccess` →
`markSaved(id, name)`, status `saved`, invalidate `templateKeys.all`; `onError` → status `error` with
the message. A private `resolveSaveName` falls back to `template1` when a brand-new untitled tab is
saved for the first time — which is exactly what makes the autoload story work on the next visit.

### Company logo upload — `src/app/api/company-logo/route.ts`

A Next.js route handler exposing **`POST`** only. It reads the `file` field from `formData` and
rejects missing/empty input, payloads over **2 MB**, and anything that is not a PNG (checked against
the `89 50 4E 47` signature). Valid uploads are written to `public/images/company-logo.png` and the
route returns `{ ok: true, src: "/images/company-logo.png" }`. The client side lives in
`lib/company-logo.ts`, which converts arbitrary images to PNG (`createImageBitmap` + canvas) before
posting.

---

## 13. PDF Export

```text
useExportPdf
  └─ downloadDocumentPdf(document, name)          lib/pdf/export-document-pdf.ts
       ├─ collectPdfImages(document)              lib/pdf/resolve-images.ts
       ├─ <TemplatePdfDocument document images /> components/pdf/TemplatePdfDocument.tsx
       └─ pdf(...).toBlob() → <a download> click
```

- All three heavy modules are **dynamically imported**, keeping `@react-pdf/renderer` out of the
  initial bundle.
- `collectPdfImages` gathers every image `src`, passes through `data:` URIs, fetches the rest
  relative to `window.location.origin`, and converts them to data URLs. Failures resolve to `""` and
  are dropped, so a broken image simply renders nothing.
- The output filename is sanitized by an internal `safeFileName` (strips `<>:"/\|?*`, defaults to
  `template`).
- Pages are sorted by `order`; elements are filtered by `visible !== false` and sorted by `zIndex`.

**Fonts are the important limitation.** `lib/pdf/pdf-fonts.ts` maps onto the built-in PDF standard
fonts only — no font registration or embedding:

| Model family                                          | PDF font                                      |
| ----------------------------------------------------- | --------------------------------------------- |
| `Georgia`, `Times New Roman`                          | `Times-Roman` / `Times-Bold` (weight ≥ 600)   |
| everything else (incl. `Inter`, `Arial`, `Helvetica`) | `Helvetica` / `Helvetica-Bold` (weight ≥ 600) |

Since the canvas uses Inter, **exported text will not match the on-screen typeface**.

---

## 14. Styling, Tokens, and Shortcuts

### Design tokens

`src/app/globals.css` declares a Tailwind v4 `@theme inline` block that exposes semantic CSS custom
properties as utilities (`--color-background`, `--color-primary`, `--color-toolbox`, …).
`src/lib/tokens.ts` mirrors the same values as a frozen TS object for anything that needs them in
JS (radii, rail widths, header/tab heights).

| Token                               | Value                             |
| ----------------------------------- | --------------------------------- |
| `background` / `surface` / `border` | `#f6f7f9` / `#ffffff` / `#e5e7eb` |
| `foreground` / `muted`              | `#111827` / `#6b7280`             |
| `primary` / `primary-hover`         | `#2563eb` / `#1d4ed8`             |
| `success` / `warning` / `danger`    | `#16a34a` / `#d97706` / `#dc2626` |
| `workspace` / `toolbox`             | `#eef2f6` / `#0f172a`             |

Fixed chrome dimensions: toolbox 240 px, properties 320 px, header 60 px, tabs 44 px, saved-template
panel 280 px.

### Keyboard shortcuts

`useKeyboardShortcuts` binds a single window `keydown` listener. `isMeta = metaKey || ctrlKey`.

| Shortcut               | Action                                                                |
| ---------------------- | --------------------------------------------------------------------- |
| `Cmd/Ctrl + S`         | Save template                                                         |
| `Cmd/Ctrl + Z`         | Undo                                                                  |
| `Cmd/Ctrl + Shift + Z` | Redo                                                                  |
| `Cmd/Ctrl + Y`         | Redo                                                                  |
| `Escape`               | Exit preview, else clear selection                                    |
| `Delete` / `Backspace` | Delete selected element — skipped when focus is in an editable target |

---

## 15. Implementation Notes and Drift from the Specs

Things to know that the spec documents do not reflect:

1. **`frontend/README.md` is stale.** It states "Undo/redo and PDF export are not wired yet" — both
   are fully implemented. Its structure listing also predates `lib/pdf/`, `components/pdf/`, and
   `components/elements/table/`.
2. **`zod` is listed in `design.md`'s stack but is not a declared dependency.** It is present in
   `node_modules` only transitively; no source file imports it.
3. **Agent-file wiring is inconsistent.** The managed block was moved to the repo root, but the
   generator targets `frontend/`, so the next `next dev` will upsert it into `frontend/CLAUDE.md` —
   whose `@AGENTS.md` import is now dangling. See §2 for the full behaviour.
4. **Stray nested `frontend/frontend/` directory.** Not source — a Turbopack dev artifact. It only
   appears when a **pre-existing `.next` directory** is present: stale Turbopack state inside it
   makes `next dev` emit a duplicate subset of client chunks into `frontend/frontend/.next/dev/`
   (`static/chunks`, `static/media` only). With a clean `.next` it never appears, and deleting
   `.next` stops it permanently. `eslint.config.mjs` ignores `frontend/**` and `tsconfig.json`
   excludes `frontend` to hide the artifact.
5. **`backend/` is a real Express + Mongoose service** (TypeScript, entry `src/server.ts`, dev via
   `nodemon` + `tsx`). It is not part of this package and must be run separately; the frontend
   reaches it through `NEXT_PUBLIC_API_URL`.
6. **No tests.** No runner, no test files, and CI-style checks are limited to
   `lint` + `typecheck` + `build`.
7. **`TextElement.text.fontFamily` is typed `string`**, not the `FontFamily` union, so invalid
   families are not caught at compile time (and silently fall back to Helvetica on export).
8. **PDF fidelity gap** — standard-font-only mapping, no embedding, and image fetch failures degrade
   silently to blank space.
9. **No authentication, routing, or persistence beyond templates.** `src/app/page.tsx` renders the
   editor directly; there are no other pages or layouts.
10. **Single-user assumptions** — the logo route writes to a shared `public/images/company-logo.png`,
    so concurrent uploads overwrite each other.

---

## 16. Environment Variables

| Variable              | Default                     | Used by          |
| --------------------- | --------------------------- | ---------------- |
| `NEXT_PUBLIC_API_URL` | `http://localhost:4000/api` | `src/lib/api.ts` |

It is the only environment variable read anywhere in `src/`. Both `.env.example` and `.env.local`
ship the value above. Because it is a `NEXT_PUBLIC_` variable it is inlined at build time — changing
it requires restarting the dev server.

---

## 17. Related Documents

- Product requirements → [`PRD.md`](./PRD.md)
- Design system → [`design.md`](./design.md)
- Data model → [`database-schema.md`](./database-schema.md)
- Agent instructions → [`../AGENTS.md`](../AGENTS.md), [`../frontend/CLAUDE.md`](../frontend/CLAUDE.md)
