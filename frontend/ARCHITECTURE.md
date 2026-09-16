# frontend — Architecture

Next.js **16 App Router** client for the template editor. One route renders a three-panel editor; documents live in Zustand, server state lives in TanStack Query, and PDF export happens in the browser. Talks to the Express API in **[../backend](../backend/ARCHITECTURE.md)** over `NEXT_PUBLIC_API_URL`.

Local setup and scripts: **[README.md](./README.md)**. Repo overview: **[../README.md](../README.md)**.

---

## High-level map

```
  Browser
     │
     ▼
  app/layout.tsx ──► Inter font, <Providers> (React Query, created once)
     │
     ▼
  app/page.tsx ──► <EditorShell />            ← the only page
     │
     ├── useHasMounted()          SSR-safe mount flag, gates drag handlers
     └── useHydrateTemplate1()    GET /templates/by-name/template1
                                      │
                                      ▼
                              editorStore.hydrateFromTemplate()

  edit mode                          preview mode
  ┌─────────────┬──────────┬─────────────┐        ┌─────────────────────┐
  │  Toolbox    │  Canvas  │ Properties  │        │  Canvas             │
  │  + Pages    │  (zoom)  │ + Templates │        │  interactive={false}│
  └─────────────┴──────────┴─────────────┘        └─────────────────────┘
```

| Layer        | Path                                 | Role                                         |
| ------------ | ------------------------------------ | -------------------------------------------- |
| Routing      | `src/app`                            | Layout, providers, global CSS, one API route |
| Shell        | `src/components/editor`              | Header, tabs, toolbox, canvas, properties    |
| Elements     | `src/components/elements`            | Renderers for text, table, image, shape      |
| Primitives   | `src/components/ui`                  | Button, Input, Select, Modal, Tooltip        |
| State        | `src/store`                          | Zustand editor, UI, and history selector     |
| Server state | `src/hooks` + `src/lib/api.ts`       | Queries, mutations, API client               |
| Geometry     | `src/lib/*`                          | DnD sensors, resize math, document utils     |
| Export       | `src/lib/pdf` + `src/components/pdf` | Browser-side PDF rendering                   |

---

## Project structure

```
frontend/
├── next.config.ts           # distDir, pinned tracing/turbopack root
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Inter, metadata, <Providers>
│   │   ├── page.tsx         # renders <EditorShell />
│   │   ├── providers.tsx    # QueryClientProvider
│   │   ├── globals.css      # Tailwind v4 @theme tokens
│   │   └── api/company-logo/route.ts   # POST, writes public/images/company-logo.png
│   ├── components/
│   │   ├── editor/          # shell, header, tabs, toolbox, canvas, panels
│   │   │   └── properties/  # per-element settings panels
│   │   ├── elements/        # text / table / image / shape renderers
│   │   │   └── table/       # sortable rows, cell editor, toolbar, layout math
│   │   ├── pdf/             # TemplatePdfDocument
│   │   └── ui/              # shared primitives
│   ├── hooks/               # queries, save mutation, shortcuts, mount guard
│   ├── lib/                 # api, history, dnd, resize, tokens, pdf
│   ├── store/               # editor.store, ui.store, history.store
│   └── types/               # document, element, template, api
└── public/images/           # company-logo.png (written by the API route), footer-logo.png
```

`npm run build` runs `next build` (Turbopack). `npm run typecheck` is `tsc --noEmit`.

---

## Runtime surfaces

| File                            | Kind          | Notes                                                                                       |
| ------------------------------- | ------------- | ------------------------------------------------------------------------------------------- |
| `app/layout.tsx`                | Server        | Loads Inter as `--font-inter`; `suppressHydrationWarning` on `html`/`body`                  |
| `app/page.tsx`                  | Server        | Returns `<EditorShell />`; no other pages exist                                             |
| `app/providers.tsx`             | Client        | One `QueryClient` per mount via `useState(() => createQueryClient())`                       |
| `app/api/company-logo/route.ts` | Route handler | `POST` only; rejects missing/empty, > 2 MB, or non-PNG (checks the `89 50 4E 47` signature) |

Documents are switched by **tabs**, not routes, so a template has no shareable URL. Preview mode is `editorStore.mode`, not a route.

---

## Editor state

Three stores, all client-side.

| Store              | Holds                                             | Notes                                                              |
| ------------------ | ------------------------------------------------- | ------------------------------------------------------------------ |
| `editor.store.ts`  | `tabs[]`, `activeTabId`, `mode`                   | The document itself; seeded with one untitled tab (`tab-untitled`) |
| `ui.store.ts`      | `saveStatus`, `saveMessage`, `zoom`, `activeTool` | Ephemeral view state; zoom defaults to **0.72**                    |
| `history.store.ts` | —                                                 | Not a store: a hook deriving `{ canUndo, canRedo, undo, redo }`    |

An `EditorTab` carries `id`, `name`, `templateId`, `document` (`pages` + `version`), `activePageId`, `selectedElementId`, `isDirty`, and its own `history`. Any mutation that touches pages flows through `updateActivePage`, which always marks the tab dirty.

| Group        | Actions                                                                                                               |
| ------------ | --------------------------------------------------------------------------------------------------------------------- |
| Read         | `getActiveTab`, `getActivePage`, `getSelectedElement`                                                                 |
| Tabs         | `setActiveTab`, `setTabName`, `createTab`, `closeTab`, `openTemplate`, `hydrateFromTemplate`, `markSaved`             |
| Mode / pages | `setMode`, `setActivePage`, `addPage`, `removePage`                                                                   |
| Elements     | `selectElement`, `addElement`, `moveElement`, `resizeElement`, `updateElement`, `updatePage`, `removeSelectedElement` |
| History      | `undo`, `redo`                                                                                                        |

**Undo/redo** (`lib/editor-history.ts`) is per tab and in memory:

```
withHistory(tab, key, updater)
   ├─ same key within 500 ms  →  merge (no new snapshot)
   └─ otherwise               →  push structuredClone(pages + selection + isDirty)
                                 truncate to MAX_HISTORY (50) · clear redo stack
```

Keys are namespaced `${tab.id}:${historyKey}` (`move:<id>`, `resize:<id>`, `page`, `add-page`, …), and `uniqueHistoryKey` forces a fresh entry for discrete edits such as adding a table row.

---

## Canvas interactions

```
CanvasPage (DndContext · EditorPointerSensor · distance 6)
   │
   ├─ ElementRenderer ─── useDraggable('element:<id>')
   │      │                   transform scaled by zoom (scaleDragTransform)
   │      ├─ MoveHandle        text + table drag from a dedicated grip
   │      └─ ResizeHandles     8 directions → applyResize(...) → resizeElement
   │
   └─ onDragEnd → moveElement(id, delta / zoom)   clamped to page bounds
```

- **`EditorPointerSensor`** refuses to start a drag from `input`, `textarea`, `select`, `a`, `[contenteditable]`, or `[data-no-dnd]`, which is what keeps table cells and text areas editable while the element stays draggable.
- **`applyResize`** is pure: it moves the edges a handle controls, enforces a 24 px minimum, clamps inside the page, and rounds.
- **Every delta is divided by zoom**, because the canvas is scaled with a CSS transform while the model stores unscaled 794 × 1123 px A4 coordinates.
- **Indexed-table convention**: a table whose first header cell is `"#"` is treated as a quotation table — column widths, alignment, the item-detail pill, and the PDF renderer all key off it, and reordering rows renumbers column 0.

---

## Data fetching

`lib/api.ts` wraps `fetch` with one `request<T>()`: prefixes the base URL, unwraps the `{ data }` envelope, returns `undefined` for `204`, and throws `ApiClientError { message, status, code, details }` parsed from `{ error }`.

```ts
templateKeys = {
  all: ['templates'],
  byName: (name) => ['templates', 'by-name', name],
  detail: (id) => ['templates', id],
}
```

| Hook                   | Behaviour                                                       |
| ---------------------- | --------------------------------------------------------------- |
| `useTemplates`         | List query                                                      |
| `useTemplate(id)`      | Detail query, `enabled: Boolean(id)`                            |
| `useHydrateTemplate1`  | Autoloads `template1` once; exposes `{ isReady, error, retry }` |
| `useSaveTemplate`      | PATCH when the tab has a `templateId`, else POST                |
| `useExportPdf`         | `{ exportPdf, isExporting, error }`                             |
| `useEditorSelection`   | Selected element of the active tab/page                         |
| `useKeyboardShortcuts` | Window-level key bindings                                       |
| `useHasMounted`        | `useSyncExternalStore` mount flag                               |

Defaults are `staleTime: 30_000`, `retry: 1`, no refetch on window focus, no mutation retry. Because `detail` and `all` share the `['templates']` prefix, invalidating `all` refreshes both list and detail.

---

## PDF export

```
useExportPdf → downloadDocumentPdf(document, name)      ← dynamic import
                 ├─ collectPdfImages(document)            → src map as data URLs
                 ├─ <TemplatePdfDocument document images />
                 └─ pdf(...).toBlob() → <a download> click
```

`@react-pdf/renderer` is imported lazily, so it stays out of the initial bundle. Pages sort by `order`; elements filter on `visible !== false` and sort by `zIndex`. Images that fail to resolve drop out and simply render nothing. The filename is sanitized, defaulting to `template`.

Fonts are the built-in PDF standard faces only — `Georgia`/`Times New Roman` → Times, everything else (including `Inter`) → Helvetica — so exports do not match on-screen typography.

---

## Cross-cutting concerns

| Topic            | Implementation                                                                                                                                                    |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Styling**      | Tailwind CSS 4; semantic tokens in the `@theme` block of `globals.css`, mirrored in `lib/tokens.ts`                                                               |
| **Hydration**    | `useHasMounted` (server snapshot `false`) gates DnD so SSR never attaches drag handlers                                                                           |
| **Keyboard**     | `Cmd/Ctrl+S` save · `Z` undo · `Shift+Z` / `Y` redo · `Esc` exit preview or clear selection · `Delete`/`Backspace` remove element (skipped while editing a field) |
| **Company logo** | `image-logo` element id, `/images/company-logo.png`; non-PNG uploads are converted via canvas before posting                                                      |
| **Icons**        | `lucide-react`                                                                                                                                                    |
| **Dates**        | `date-fns` formatting in the saved-templates panel                                                                                                                |
| **Class names**  | `cn()` = `clsx` + `tailwind-merge`                                                                                                                                |

---

## Design patterns

| Pattern            | Where                                       | Purpose                                             |
| ------------------ | ------------------------------------------- | --------------------------------------------------- |
| Store-per-concern  | `store/*.store.ts`                          | Document state, UI state, and history kept separate |
| History wrapper    | `lib/editor-history.ts`                     | One place decides what is undoable                  |
| Pure geometry      | `lib/element-resize.ts`, `dnd-transform.ts` | Testable math, no React                             |
| Factory + defaults | `lib/document-utils.ts`                     | Element creation and table mutation                 |
| Query-key factory  | `lib/query-keys.ts`                         | Invalidation from one umbrella key                  |
| Memoized renderers | `components/elements/*`                     | Avoid re-rendering unaffected elements              |
| Lazy heavy deps    | `lib/pdf/export-document-pdf.ts`            | Keep the PDF engine off the critical path           |

---

## Remaining limits

- **No deep links.** Tabs replace routes, so a template cannot be linked to or restored from a URL.
- **History is in memory only** — 50 snapshots per tab, lost on reload, and never merged across tabs.
- **Snapshots use `structuredClone` of all pages**, so undo/redo cost grows with document size.
- **PDF font fidelity**: standard faces only, nothing embedded, so `Inter` exports as Helvetica.
- **Images are plain `<img>`** in the canvas with the `next/image` rule disabled locally — no optimization or layout shift protection.
- **Text is a `<textarea>` overlay**, not rich text (an explicit non-goal in the PRD).
- **No tests**; verification is `lint`, `typecheck`, and a production build.
