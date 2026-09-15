# Database Schema — Template Management App

## 1. Database

**Database:** MongoDB  
**ODM:** Mongoose

The document editor is naturally modeled as a document-oriented system. A saved template contains pages, and pages contain ordered visual elements. For the PoC, pages and elements should be embedded inside the `templates` collection to make loading and saving an entire template atomic and efficient.

## 2. Collections

Initial collections:

1. `templates`

Optional future collections:

2. `users`
3. `assets`
4. `template_versions`

The initial PoC does not require authentication, so `users` is intentionally optional.

---

# 3. Templates Collection

## Collection

`templates`

## Purpose

Stores the complete persisted state of a reusable visual document template.

## Suggested Mongoose Schema

```ts
import { Schema, model, Types } from "mongoose";

const elementSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["text", "table", "image", "shape"],
      required: true,
    },
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    zIndex: {
      type: Number,
      default: 0,
    },
    locked: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: true,
    },

    // Type-specific configuration
    text: {
      type: Schema.Types.Mixed,
      default: undefined,
    },
    table: {
      type: Schema.Types.Mixed,
      default: undefined,
    },
    image: {
      type: Schema.Types.Mixed,
      default: undefined,
    },
    shape: {
      type: Schema.Types.Mixed,
      default: undefined,
    },
  },
  { _id: false }
);

const pageSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    background: {
      type: String,
      default: "#ffffff",
    },
    elements: {
      type: [elementSchema],
      default: [],
    },
  },
  { _id: false }
);

const templateSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },

    pages: {
      type: [pageSchema],
      default: [],
    },

    version: {
      type: Number,
      default: 1,
    },

    status: {
      type: String,
      enum: ["draft", "active", "archived"],
      default: "active",
    },

    // Optional until authentication is implemented
    ownerId: {
      type: Types.ObjectId,
      ref: "User",
      required: false,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

templateSchema.index({ name: 1 });
templateSchema.index({ updatedAt: -1 });

export const Template = model("Template", templateSchema);
```

> Note: `Schema.Types.Mixed` is shown above to keep the PoC schema compact. In the production implementation, the type-specific configurations should preferably use explicit Mongoose sub-schemas/discriminators so backend validation remains as strong as the TypeScript types.

# 4. Recommended TypeScript Domain Model

The frontend and backend should share a canonical document model.

```ts
type ElementType = "text" | "table" | "image" | "shape";

interface BaseElement {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  locked: boolean;
  visible: boolean;
}

interface TextElement extends BaseElement {
  type: "text";
  text: {
    content: string;
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
    color: string;
    align: "left" | "center" | "right";
  };
}

interface TableCell {
  id: string;
  value: string;
}

interface TableRow {
  id: string;
  cells: TableCell[];
}

interface TableElement extends BaseElement {
  type: "table";
  table: {
    columns: number;
    rows: TableRow[];
    borderWidth: number;
    borderColor: string;
    cellPadding: number;
    rowSpacing: number;
  };
}

interface ImageElement extends BaseElement {
  type: "image";
  image: {
    src: string;
    alt?: string;
    objectFit: "contain" | "cover" | "fill";
  };
}

interface ShapeElement extends BaseElement {
  type: "shape";
  shape: {
    kind: "rectangle" | "circle" | "line";
    fill: string;
    borderColor: string;
    borderWidth: number;
    borderRadius: number;
  };
}

type DocumentElement =
  | TextElement
  | TableElement
  | ImageElement
  | ShapeElement;

interface Page {
  id: string;
  order: number;
  width: number;
  height: number;
  background: string;
  elements: DocumentElement[];
}

interface Template {
  id: string;
  name: string;
  pages: Page[];
  version: number;
  status: "draft" | "active" | "archived";
  createdAt: string;
  updatedAt: string;
}
```

## 5. Example MongoDB Document

```json
{
  "_id": "66f000000000000000000001",
  "name": "template1",
  "version": 1,
  "status": "active",
  "pages": [
    {
      "id": "page-1",
      "order": 0,
      "width": 794,
      "height": 1123,
      "background": "#ffffff",
      "elements": [
        {
          "id": "text-company",
          "type": "text",
          "x": 60,
          "y": 50,
          "width": 300,
          "height": 40,
          "zIndex": 1,
          "locked": false,
          "visible": true,
          "text": {
            "content": "Company Name",
            "fontFamily": "Inter",
            "fontSize": 24,
            "fontWeight": 700,
            "color": "#111827",
            "align": "left"
          }
        }
      ]
    }
  ],
  "createdAt": "2026-09-15T10:00:00.000Z",
  "updatedAt": "2026-09-15T10:15:00.000Z"
}
```

# 6. Data Relationships

```text
User (future)
  |
  | 1:N
  v
Template
  |
  | embedded 1:N
  v
Page
  |
  | embedded 1:N
  v
DocumentElement
  |
  +--> Text configuration
  +--> Table configuration
  +--> Image configuration
  +--> Shape configuration
```

Embedding pages/elements is recommended for the PoC because the editor normally loads and saves a complete template.

# 7. Indexing Strategy

### Required

```js
db.templates.createIndex({ name: 1 });
db.templates.createIndex({ updatedAt: -1 });
```

### With Authentication

If templates become user-owned:

```js
db.templates.createIndex({ ownerId: 1, updatedAt: -1 });
db.templates.createIndex({ ownerId: 1, name: 1 });
```

If template names must be unique per user:

```js
db.templates.createIndex(
  { ownerId: 1, name: 1 },
  { unique: true }
);
```

# 8. Versioning

The `version` field represents the persisted document schema/content version.

Example:

```json
{
  "version": 1
}
```

If the document structure changes later, a migration layer can convert older documents before hydration.

Example:

```text
Stored v1
   |
   v
Migration
   |
   v
Current document model
```

For the initial PoC, full historical version records are unnecessary.

# 9. Optional Template Versions Collection

If undo history or historical versions must survive across sessions, introduce:

`template_versions`

```ts
{
  _id: ObjectId,
  templateId: ObjectId,
  version: Number,
  snapshot: TemplateDocument,
  createdAt: Date
}
```

Do not use this for the initial client-side undo/redo implementation. Zustand history is sufficient for the PoC.

# 10. Optional Assets Collection

If the application later supports uploaded images/files:

```ts
{
  _id: ObjectId,
  templateId: ObjectId,
  name: String,
  url: String,
  mimeType: String,
  size: Number,
  createdAt: Date
}
```

Binary files should generally live in object storage rather than MongoDB documents.

# 11. API-to-Database Mapping

| API | Database Operation |
|---|---|
| `GET /api/templates` | `Template.find()` |
| `POST /api/templates` | `Template.create()` |
| `GET /api/templates/:id` | `Template.findById()` |
| `PATCH /api/templates/:id` | `Template.findByIdAndUpdate()` |
| `DELETE /api/templates/:id` | `Template.findByIdAndDelete()` |

## 12. Save Strategy

The frontend should send the canonical document JSON:

```json
{
  "name": "template1",
  "pages": [],
  "version": 1
}
```

The backend should:

1. Validate the request.
2. Validate page and element structures.
3. Normalize allowed values.
4. Save with Mongoose.
5. Return the persisted template.
6. Let TanStack Query update/invalidate its cache.

## 13. Security Considerations

- Validate every API payload.
- Never trust element dimensions, URLs, names, or HTML from the client.
- Sanitize user-provided rich content if HTML is ever supported.
- Restrict image sources if remote images become supported.
- Add authentication/authorization before exposing user-specific templates.
- Add request size limits because document JSON can become large.
- Add rate limiting to public APIs.

## 14. Recommended PoC Decision

Use **one `templates` collection with embedded pages and elements**.

This keeps the system simple:

```text
Template
 ├── Page 1
 │    ├── Text
 │    ├── Image
 │    └── Table
 ├── Page 2
 │    └── Text
 └── Page 3
      └── Shape
```

This is preferable to creating separate `pages` and `elements` collections for the initial editor because a template is the natural persistence boundary.
