# Frontend Design System — Template Management App

## 1. Design Direction

The interface should feel like a professional visual document editor rather than a generic admin dashboard.

Design characteristics:

- Desktop-first.
- Clean, compact workspace.
- Neutral document canvas.
- Clear separation between editor chrome and document content.
- Subtle borders and shadows.
- Strong visual hierarchy.
- Fast, low-distraction interactions.
- Dense enough for professional editing without feeling crowded.

The supplied assessment describes a three-panel editor with a top navigation/header and bottom saved-template manager. The frontend should preserve that information architecture.

## 2. Technology

- React.
- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- TanStack Query.
- Zustand.
- `@dnd-kit`.
- @react-pdf/renderer
- date-fns
- clsx
- tailwind-merge
- zod
- Lucide React or an equivalent lightweight icon library.

Use strict TypeScript:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true
  }
}
```

No `any` types.

## 3. Application Layout

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Header: Template name | Undo | Redo | Preview | Save | Download PDF │
├──────────────────────────────────────────────────────────────────────┤
│ Template Tabs: [New-Template] [Template-1] [+]                       │
├───────────────┬─────────────────────────────────┬────────────────────┤
│               │                                 │                    │
│   TOOLBOX     │          DOCUMENT CANVAS       │    PROPERTIES      │
│               │                                 │                    │
│ Text          │       ┌─────────────────┐      │ Text Settings      │
│ Table         │       │                 │      │ Font               │
│ Image         │       │   Document      │      │ Size               │
│ Shape         │       │     Page        │      │ Weight             │
│               │       │                 │      │ Color              │
│ + Table       │       │                 │      │ Alignment          │
│ + Text Line   │       └─────────────────┘      │                    │
│               │                                 │ Table Settings     │
│ Pages         │                                 │ Width              │
│ [thumb]       │                                 │ Borders            │
│ [thumb]       │                                 │ Padding            │
│ + Add Page    │                                 │ Row Spacing        │
│               │                                 │                    │
├───────────────┴─────────────────────────────────┴────────────────────┤
│ Saved Templates                                                       │
│ [Template Card] [Template Card] [Template Card]                      │
└──────────────────────────────────────────────────────────────────────┘
```

## 4. Responsive Strategy

The primary editing experience is desktop-oriented.

### Desktop

- Left toolbox: ~240px.
- Center canvas: flexible.
- Right properties: ~300px.
- Bottom template manager: fixed/resizable region.
- Header: 56–64px.
- Tab bar: 40–48px.

### Tablet

- Toolbox can collapse.
- Properties panel can become a drawer.
- Bottom templates can become horizontally scrollable.

### Mobile

The full editor is not the primary target for the PoC.

A mobile layout should prioritize:

- Preview.
- Template browsing.
- Basic document inspection.

Advanced drag-and-drop editing can be disabled or presented through a simplified interface.

## 5. Color System

Use a neutral professional palette.

### Base

```text
Background       #F6F7F9
Surface          #FFFFFF
Surface Muted    #F9FAFB
Border           #E5E7EB
Border Strong    #D1D5DB
Text Primary     #111827
Text Secondary   #6B7280
Text Muted       #9CA3AF
```

### Interaction

```text
Primary          #2563EB
Primary Hover    #1D4ED8
Success          #16A34A
Warning          #D97706
Danger           #DC2626
```

### Canvas

```text
Workspace        #F3F4F6
Page             #FFFFFF
Selection        #2563EB
Drop Indicator   #2563EB
```

The document itself should remain visually independent from the application chrome.

## 6. Typography

Recommended UI font:

**Inter**

Scale:

```text
Page Title        18–20px / 600
Section Title     13–14px / 600
Body              13–14px / 400
Label             12px / 500
Caption           11–12px / 400
Button            13px / 500
```

Document typography is controlled independently by the selected element's properties.

## 7. Header Design

Header should be compact and persistent.

### Left

- App/product mark.
- Template name input.
- Undo.
- Redo.
- Unsaved indicator.

### Center

- Optional document status.

### Right

- Preview.
- Save.
- Download PDF.

Buttons should have:

- Icon.
- Tooltip.
- Keyboard shortcut where applicable.
- Disabled state when action is unavailable.

Example:

```text
[Logo] [Template name________] [↶] [↷]     [Preview] [Save] [Download PDF]
```

## 8. Tab Bar

Tabs represent open editing sessions.

Active tab:

- Strong text.
- Visible background.
- Clear bottom/top indicator.
- Close control when applicable.

Inactive tab:

- Muted text.
- Transparent or subtle background.

New tab:

```text
[ + ]
```

If a tab contains unsaved changes:

```text
Template 1 •
```

## 9. Left Toolbox

Organize controls into clear sections.

### Components

```text
Components
────────────────
[ Text       ]
[ Table      ]
[ Image      ]
[ Shape      ]
```

### Quick Add

```text
Quick Add
────────────────
[ + Add Simple Table ]
[ + Add New Text Line ]
```

### Pages

```text
Pages
────────────────
[ Page 1 thumbnail ]
[ Page 2 thumbnail ]

[ + Add Page ]
```

Tool buttons should use consistent height, icon placement, hover states, and focus states.

## 10. Canvas

The canvas is the visual center of the product.

### Workspace

Use a soft gray editor background.

### Page

Use:

- White surface.
- Subtle shadow.
- Fixed document ratio.
- Clear page boundaries.

Example:

```text
          workspace
  ┌─────────────────────────┐
  │                         │
  │       document          │
  │         page            │
  │                         │
  └─────────────────────────┘
```

### Zoom

A future-friendly canvas should support zoom controls:

```text
[-] 100% [+]
```

Zoom is not mandatory for the first PoC but should be considered in the component architecture.

## 11. Element Selection

Selected elements should show:

- Blue outline.
- Small resize handles if resizing is implemented.
- Element toolbar when useful.
- Clear hover state.

Example:

```text
┌─────────────────────────────┐
│ Selected Text               │
└─────────────────────────────┘
  ▲ selection outline
```

Avoid excessive handles and visual noise.

## 12. Drag-and-Drop UX

Use `@dnd-kit`.

### Table Row

Each row can expose a drag handle:

```text
⋮⋮ | Product | Qty | Price | Total
```

During dragging:

- Row receives elevated visual treatment.
- Original location gets a drop placeholder.
- Other rows animate subtly.
- The pointer should clearly communicate dragging.

### Canvas Elements

When moving an element:

- Show selection outline.
- Use a lightweight transform.
- Avoid expensive layout recalculation during pointer movement.

## 13. Properties Panel

The right panel is context-sensitive.

### Empty State

```text
Select an element
to edit its properties.
```

### Text Settings

```text
Text Settings
────────────────
Font Family
[ Inter             ]

Font Size
[ 16 ]

Font Weight
[ 400 ]

Text Color
[ color picker ]

Alignment
[ Left ][ Center ][ Right ]
```

### Table Settings

```text
Table Settings
────────────────
Width
[ 100% ]

Border
[ 1px ]

Padding
[ 8px ]

Row Spacing
[ 4px ]

Columns
[ - ] 4 [ + ]

Rows
[ - ] 5 [ + ]
```

## 14. Saved Templates Manager

The bottom panel should feel like a lightweight template library.

Card:

```text
┌───────────────────────────┐
│ Template 1          [...] │
│ Modified Sep 15, 2026     │
│                           │
│             [ Open ]      │
└───────────────────────────┘
```

Cards should show:

- Name.
- Modified time.
- Created time when space allows.
- Open action.
- Overflow menu.

The panel should support horizontal scrolling if many templates exist.

## 15. Preview Mode

Preview should remove editor noise.

```text
┌────────────────────────────────────────────────────────────────┐
│                         Preview                                │
│                                                                │
│                 ┌─────────────────────┐                        │
│                 │                     │                        │
│                 │      Document       │                        │
│                 │                     │                        │
│                 └─────────────────────┘                        │
│                                                                │
│                         [ Back to Edit ]                       │
└────────────────────────────────────────────────────────────────┘
```

Preview should use the same document renderer as the editor wherever possible to prevent differences between editing and output.

## 16. Component Architecture

Suggested structure:

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── editor/
│   │   ├── EditorShell.tsx
│   │   ├── EditorHeader.tsx
│   │   ├── TemplateTabs.tsx
│   │   ├── Toolbox.tsx
│   │   ├── Canvas.tsx
│   │   ├── CanvasPage.tsx
│   │   ├── ElementRenderer.tsx
│   │   ├── PropertiesPanel.tsx
│   │   ├── PreviewMode.tsx
│   │   └── SavedTemplates.tsx
│   │
│   ├── elements/
│   │   ├── TextElement.tsx
│   │   ├── TableElement.tsx
│   │   ├── ImageElement.tsx
│   │   └── ShapeElement.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Select.tsx
│       ├── Tooltip.tsx
│       └── Modal.tsx
│
├── store/
│   ├── editor.store.ts
│   ├── history.store.ts
│   └── ui.store.ts
│
├── hooks/
│   ├── useTemplate.ts
│   ├── useTemplates.ts
│   ├── useSaveTemplate.ts
│   └── useEditorSelection.ts
│
├── lib/
│   ├── api.ts
│   ├── query-client.ts
│   └── document-utils.ts
│
└── types/
    ├── document.ts
    ├── template.ts
    └── element.ts
```

## 17. State Architecture

### Zustand

Suggested editor state:

```ts
interface EditorState {
  activeTabId: string | null
  activePageId: string | null
  selectedElementId: string | null
  mode: 'edit' | 'preview'
  isDirty: boolean

  tabs: EditorTab[]

  selectElement: (id: string | null) => void
  setActivePage: (id: string) => void
  addElement: (element: DocumentElement) => void
  updateElement: (id: string, update: Partial<DocumentElement>) => void
}
```

Avoid broad subscriptions such as subscribing every component to the entire store.

Prefer selectors:

```ts
const selectedElement = useEditorStore((state) => state.getSelectedElement())
```

## 18. TanStack Query

Recommended query keys:

```ts
;['templates'][('templates', templateId)]
```

Mutations:

```text
createTemplate
updateTemplate
deleteTemplate
```

After save:

```text
Mutation
   |
   +--> update cache
   |
   +--> invalidate ["templates"]
```

## 19. Interaction States

Every interactive control should have:

- Default.
- Hover.
- Active.
- Focus.
- Disabled.
- Loading where applicable.

For async save:

```text
Saving...
Saved
Save failed
```

Avoid blocking the entire editor during API calls.

## 20. Empty / Loading / Error States

### Template Loading

Show skeleton cards rather than a blank area.

### No Saved Templates

```text
No saved templates yet.

Save your current document to create
your first reusable template.
```

### API Error

```text
We couldn't load your templates.

[ Try Again ]
```

## 21. Accessibility

Target WCAG 2.1 AA practices.

Requirements:

- Keyboard-accessible controls.
- Visible focus states.
- Semantic buttons instead of clickable `div`s.
- Labels for form controls.
- Tooltips for icon-only actions.
- Adequate contrast.
- Screen-reader labels for canvas controls.
- Do not rely only on color to indicate selection/errors.
- Announce important save/error state changes where appropriate.

Drag-and-drop should have keyboard alternatives where the library supports them.

## 22. Keyboard Shortcuts

Recommended:

```text
Ctrl/Cmd + S    Save
Ctrl/Cmd + Z    Undo
Ctrl/Cmd + Shift + Z   Redo
Delete          Delete selected element
Escape          Clear selection
```

Shortcuts should not interfere with normal text input.

## 23. Performance Rules

The visual editor is an interaction-heavy application.

Follow these rules:

1. Memoize stable element renderers.
2. Use Zustand selectors.
3. Keep transient drag state local where possible.
4. Do not update unrelated elements during a drag.
5. Do not fetch the entire template list after every property change.
6. Save only on explicit Save for the PoC.
7. Use immutable state updates.
8. Keep document serialization outside high-frequency pointer events.
9. Use stable React keys based on persistent element IDs.
10. Avoid unnecessary Context providers around the entire canvas.

## 24. Visual Consistency

All controls should share:

- 6–8px border radius.
- Compact spacing.
- Consistent icon sizes.
- Consistent border treatment.
- Consistent typography.

Recommended spacing scale:

```text
4px
8px
12px
16px
20px
24px
32px
```

Avoid mixing arbitrary spacing values throughout the application.

## 25. Frontend UX Principles

### Principle 1 — Canvas First

The document should always remain the visual focus.

### Principle 2 — Contextual Controls

Show properties relevant to the selected element rather than overwhelming the user with all options.

### Principle 3 — Immediate Feedback

Every action should produce an immediate visual response.

### Principle 4 — Safe Persistence

Saving should be explicit and reliable.

### Principle 5 — Predictable Editing

Undo/redo should make experimentation safe.

### Principle 6 — Minimal Chrome

Panels should support the editing task rather than compete with the document.

## 26. Recommended Design Tokens

```ts
export const tokens = {
  radius: {
    sm: '6px',
    md: '8px',
    lg: '12px',
  },

  sidebar: {
    toolbox: '240px',
    properties: '300px',
  },

  header: {
    height: '60px',
  },

  colors: {
    workspace: '#F3F4F6',
    surface: '#FFFFFF',
    border: '#E5E7EB',
    text: '#111827',
    muted: '#6B7280',
    primary: '#2563EB',
    danger: '#DC2626',
  },
}
```

## 27. Final Frontend Goal

The finished UI should feel like a focused document-design workspace:

```text
┌──────────────────────────────────────────────────────────────┐
│                    Application Header                         │
├──────────────────────────────────────────────────────────────┤
│ Tabs                                                        │
├──────────────┬───────────────────────────────┬───────────────┤
│              │                               │               │
│  Components  │                               │  Properties   │
│              │        Document Canvas        │               │
│  Pages       │                               │  Contextual   │
│              │                               │  Settings     │
│              │                               │               │
├──────────────┴───────────────────────────────┴───────────────┤
│                   Saved Templates                            │
└──────────────────────────────────────────────────────────────┘
```

The design should prioritize clarity, responsiveness, predictable editing behavior, and a professional SaaS/editor feel while leaving the document itself as the primary visual object.
