# PRD — Template Management App

## 1. Product Overview

**Product:** Template Management App  
**Purpose:** A visual, drag-and-drop document/template editor that lets users create, modify, preview, save, reopen, and export document templates as PDFs.

The initial product is a Proof of Concept based on the supplied technical assessment. The editor should open with a default template on first use. After the user saves the document as `template1`, that saved version becomes the automatically loaded template on subsequent application opens.

## 2. Goals

### Primary Goals

1. Provide a visual document editing experience.
2. Allow users to add and manipulate document elements through drag-and-drop.
3. Support multi-page documents.
4. Provide editable text and table properties.
5. Support dynamic table rows and columns.
6. Allow row reordering with `@dnd-kit`.
7. Persist templates through an Express.js + MongoDB API.
8. Automatically restore the saved template on subsequent visits.
9. Provide undo/redo.
10. Export the active canvas state as a PDF.
11. Keep editing interactions responsive and avoid unnecessary full-canvas renders.

### Non-Goals for the Initial PoC

- Full collaborative editing.
- Real-time multi-user presence.
- Complex rich-text editing comparable to Google Docs.
- Version branching/merging.
- Enterprise permissions.
- Advanced image editing.
- Cloud asset processing pipelines.

## 3. Target User

A user who needs to visually create reusable business documents such as quotations, invoices, proposals, reports, or similar structured documents without manually writing HTML/CSS.

## 4. Core User Journey

### First Visit

1. User opens the application.
2. Application checks for an existing saved template.
3. If none exists, the default template is displayed.
4. User can edit the document using the toolbox, canvas, and properties panel.

### Editing

1. User selects an element.
2. Properties for the selected element appear in the right sidebar.
3. User changes text, typography, alignment, table settings, etc.
4. Changes are reflected immediately on the canvas.
5. User can undo/redo changes.
6. User can add pages.
7. User can reorder table rows using drag-and-drop.

### Saving

1. User clicks **Save** or **Save Current as Template**.
2. The current document state is serialized.
3. The application sends the template to the Express API.
4. The server validates and stores the template in MongoDB.
5. The saved template appears in the Saved Templates Manager.
6. For the assessment flow, the first saved template uses the name `template1`.

### Returning User

1. User opens the application.
2. Application requests the user's saved templates/current template.
3. `template1` is automatically loaded when available.
4. The canvas is hydrated from the saved document state.

### PDF Export

1. User clicks **Download PDF**.
2. The active document state is captured.
3. A PDF is generated from the active canvas/document model.
4. The generated file is downloaded.

## 5. Functional Requirements

## 5.1 Application Shell

The application must contain:

- Top navigation/header.
- Open-template tab bar.
- Left component toolbox.
- Central document canvas.
- Right properties panel.
- Bottom saved-template manager.

### Header

Controls:

- Project/template name input.
- Undo.
- Redo.
- Preview.
- Save.
- Download PDF.

## 5.2 Template Tabs

Users can:

- Switch between open templates.
- See the active template.
- Create a new template using the `+` button.
- Preserve unsaved state independently for each open tab.
- Open an existing saved template into a tab.

A tab represents an editing session and should not require a separate database record.

## 5.3 Component Toolbox

The left sidebar must provide:

- Text Block.
- Simple Table.
- Image.
- Shape.

Quick actions:

- Add Simple Table.
- Add New Text Line.

Each inserted element receives a unique ID and default position/style configuration.

## 5.4 Multi-Page Documents

Users can:

- View page thumbnails.
- Switch between pages.
- Add a new page.
- Edit the active page.
- Preserve elements independently per page.

Each page has:

- Unique page ID.
- Page order.
- Page dimensions.
- Background.
- Ordered element list.

## 5.5 Visual Canvas

The central canvas displays the active page.

The default example document should support content such as:

- Logo/company information.
- Issuer information.
- Client information.
- Quotation/invoice table.
- Text content.
- Shapes/images.

Elements should be selectable and visually indicate the selected state.

## 5.6 Drag and Drop

Drag-and-drop must support:

- Moving canvas elements.
- Reordering table rows.
- Future extensibility for element ordering.

Table row reordering must use `@dnd-kit`.

The drag operation should update only the relevant state rather than causing an unnecessary full-canvas rerender.

## 5.7 Text Editing

Text elements must support:

- Content editing.
- Font family.
- Font size.
- Font weight.
- Text color.
- Text alignment.

Recommended initial font options:

- Inter.
- Arial.
- Helvetica.
- Georgia.
- Times New Roman.

## 5.8 Table Editing

Tables must support:

- Add row.
- Delete row.
- Add column.
- Delete column.
- Row reordering.
- Width adjustment.
- Border settings.
- Cell padding.
- Row spacing.
- Editable cell content.

The table model should be data-driven rather than storing only rendered HTML.

## 5.9 Image Elements

Image elements should support:

- Image URL/source.
- Width.
- Height.
- Position.
- Basic alignment.

For the PoC, image URLs/base64 or uploaded asset references may be supported. The persistence layer should avoid storing unnecessarily large binary files directly inside MongoDB documents.

## 5.10 Shape Elements

Initial shapes:

- Rectangle.
- Line.
- Circle/ellipse.

Properties should include:

- Width.
- Height.
- Position.
- Border.
- Background/fill.
- Border radius where applicable.

## 5.11 Selection and Properties Panel

When an element is selected:

1. The element receives a selection outline.
2. Its type-specific properties appear in the right sidebar.
3. Changes update the active document state immediately.

When no element is selected, the properties panel should show page/document-level settings or an empty state.

## 5.12 Undo/Redo

The editor must maintain an undo/redo history for meaningful document mutations, including:

- Adding/removing elements.
- Moving elements.
- Updating properties.
- Adding/removing rows.
- Reordering rows.
- Adding/removing columns.
- Adding/removing pages.

The history should be stored in client state and should not create a server request for every intermediate interaction.

## 5.13 Save and Persistence

### API Responsibilities

The Express.js backend must provide endpoints for:

- Creating templates.
- Listing templates.
- Fetching one template.
- Updating a template.
- Deleting a template.
- Export-related document retrieval if server-side PDF generation is used.

### Persistence Rules

- MongoDB is the source of truth for saved templates.
- The frontend may cache server data using TanStack Query.
- Zustand owns transient editor state.
- Saving explicitly persists the current document state.
- Autosave is optional and should not be required for the initial PoC.

## 5.14 Saved Templates Manager

The bottom panel must display saved template cards containing:

- Template name.
- Created timestamp.
- Last modified timestamp.
- Open button.
- Options menu.

Actions may include:

- Open.
- Rename.
- Duplicate.
- Delete.

For the assessment's required flow, the first saved template is named `template1`.

## 5.15 Preview

Preview mode should:

- Hide editing controls where practical.
- Render the document as a clean document.
- Preserve page dimensions and element positions.
- Allow the user to return to edit mode.

## 5.16 PDF Export

The PDF must reflect the active document state, including:

- Pages.
- Text.
- Tables.
- Images.
- Shapes.
- Typography where supported.
- Element positions.

The implementation may use a client-side or server-side PDF renderer. The document JSON should remain the canonical source rather than scraping arbitrary DOM state.

## 6. Technical Architecture

### Frontend

- React.
- Next.js App Router.
- TypeScript with strict mode.
- Tailwind CSS.
- TanStack Query for server-state fetching/caching/mutations.
- Zustand for editor/UI state.
- `@dnd-kit` for drag-and-drop.
- React component composition for canvas elements.

### Backend

- Express.js.
- TypeScript.
- Mongoose.
- MongoDB.
- REST API.
- Request validation.
- Centralized error handling.

### Suggested Architecture

```text
Browser
  |
  | Next.js / React
  |
  +-- Zustand --------------------> Editor state
  |
  +-- TanStack Query -------------> Server state/cache
  |
  +-- @dnd-kit -------------------> Drag/drop
  |
  +-- Canvas Renderer ------------> Document JSON
  |
  v
Express.js REST API
  |
  +-- Controllers
  +-- Services
  +-- Validators
  +-- Mongoose Models
  |
  v
MongoDB
```

## 7. State Management Strategy

### Zustand

Use Zustand for:

- Active tab.
- Active page.
- Selected element.
- Local document editing state.
- Undo/redo history.
- Drag state.
- UI panels.
- Preview/edit mode.
- Unsaved/dirty state.

### TanStack Query

Use TanStack Query for:

- Template list.
- Template detail.
- Create template mutation.
- Update template mutation.
- Delete template mutation.
- Server cache invalidation.

### Important Rule

Do not duplicate the same server state in both TanStack Query and Zustand unless there is a clear reason.

The editor may hydrate a Zustand editing session from a TanStack Query response, then perform local mutations until the user saves.

## 8. Suggested REST API

### Templates

`GET /api/templates`

List saved templates.

`POST /api/templates`

Create a template.

`GET /api/templates/:id`

Get a template.

`PATCH /api/templates/:id`

Update a template.

`DELETE /api/templates/:id`

Delete a template.

### Health

`GET /api/health`

Returns API/service health.

## 9. Data Contract

A template should conceptually look like:

```ts
interface Template {
  id: string;
  name: string;
  pages: Page[];
  version: number;
  createdAt: string;
  updatedAt: string;
}

interface Page {
  id: string;
  order: number;
  width: number;
  height: number;
  background: string;
  elements: DocumentElement[];
}
```

Elements should use discriminated unions:

```ts
type DocumentElement =
  | TextElement
  | TableElement
  | ImageElement
  | ShapeElement;
```

This avoids unsafe `any` types and gives each component a type-safe property model.

## 10. Performance Requirements

The editor should feel instantaneous for normal PoC-sized documents.

Requirements:

- Avoid rerendering every canvas element when one property changes.
- Memoize stable canvas elements where useful.
- Subscribe Zustand components to narrow state slices.
- Keep drag state localized.
- Use stable IDs and keys.
- Avoid serializing the entire document on every keystroke.
- Debounce expensive persistence operations if autosave is introduced.
- Virtualization is not required for the initial PoC.

## 11. Validation & Error Handling

Frontend:

- Validate required template name.
- Validate element properties.
- Prevent invalid table dimensions.
- Show loading, empty, and error states.
- Warn before destructive deletion where appropriate.

Backend:

- Validate request payloads.
- Validate MongoDB ObjectIds.
- Reject malformed document structures.
- Return consistent API error responses.
- Never trust frontend-generated data blindly.

## 12. Acceptance Criteria

### Initial Load

- [ ] Application opens with the default template when no saved template exists.
- [ ] Saved `template1` is loaded automatically after it exists.

### Editor

- [ ] Text can be inserted.
- [ ] Tables can be inserted.
- [ ] Images can be inserted.
- [ ] Shapes can be inserted.
- [ ] Elements can be selected.
- [ ] Text properties can be changed.
- [ ] Table properties can be changed.

### Tables

- [ ] Rows can be added.
- [ ] Rows can be deleted.
- [ ] Columns can be added.
- [ ] Columns can be deleted.
- [ ] Rows can be reordered with `@dnd-kit`.

### Pages

- [ ] Page thumbnails are visible.
- [ ] Users can switch pages.
- [ ] Users can add pages.

### Templates

- [ ] User can save the active document.
- [ ] Saved templates appear in the bottom manager.
- [ ] User can open a saved template.
- [ ] Saved timestamps are displayed.
- [ ] `template1` persists across application restarts.

### History

- [ ] Undo works.
- [ ] Redo works.

### Output

- [ ] Preview renders the active document.
- [ ] PDF export reflects the active document state.

### Quality

- [ ] TypeScript strict mode is enabled.
- [ ] No `any` types are used.
- [ ] UI is responsive at practical desktop editor sizes.
- [ ] Editing interactions do not trigger unnecessary full-canvas rerenders.

## 13. Development Phases

### Phase 1 — Foundation

- Next.js App Router setup.
- Express API.
- MongoDB/Mongoose.
- Shared TypeScript document types.
- Base application shell.

### Phase 2 — Editor

- Canvas.
- Element selection.
- Text.
- Table.
- Image.
- Shape.
- Properties panel.

### Phase 3 — Interactions

- Drag/drop.
- Table row reordering.
- Dynamic rows/columns.
- Multi-page support.
- Undo/redo.

### Phase 4 — Persistence

- Template CRUD API.
- TanStack Query integration.
- Zustand hydration.
- Saved templates manager.
- Automatic `template1` loading.

### Phase 5 — Output

- Preview mode.
- PDF export.
- Error/loading states.
- Performance optimization.

## 14. Definition of Done

The PoC is complete when a user can open the application, edit a default document, add/reorder content, modify properties, save it as `template1`, close/reopen the application, see `template1` automatically restored, and export the active document as a PDF.
