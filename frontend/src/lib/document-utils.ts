import { createId } from "@/lib/default-document";
import type { Page } from "@/types/document";
import type {
  DocumentElement,
  ImageElement,
  ShapeElement,
  TableElement,
  TextElement,
} from "@/types/element";

export function createTextElement(
  overrides?: Partial<Omit<TextElement, "type" | "text">> & {
    text?: Partial<TextElement["text"]>;
  },
): TextElement {
  const { text, ...rest } = overrides ?? {};

  return {
    id: createId("text"),
    type: "text",
    x: 80,
    y: 80,
    width: 280,
    height: 40,
    zIndex: 2,
    locked: false,
    visible: true,
    ...rest,
    text: {
      content: "New text",
      fontFamily: "Inter",
      fontSize: 16,
      fontWeight: 400,
      color: "#111827",
      align: "left",
      ...text,
    },
  };
}

export function createTableElement(
  overrides?: Partial<Omit<TableElement, "type" | "table">>,
): TableElement {
  return {
    id: createId("table"),
    type: "table",
    x: 56,
    y: 180,
    width: 682,
    height: 220,
    zIndex: 2,
    locked: false,
    visible: true,
    table: {
      columns: 5,
      borderWidth: 0,
      borderColor: "#D7E6F8",
      cellPadding: 10,
      rowSpacing: 6,
      rows: [
        {
          id: createId("row"),
          cells: [
            { id: createId("cell"), value: "#" },
            { id: createId("cell"), value: "Item Detail" },
            { id: createId("cell"), value: "Qty" },
            { id: createId("cell"), value: "Unit Price" },
            { id: createId("cell"), value: "Amount" },
          ],
        },
        {
          id: createId("row"),
          cells: [
            { id: createId("cell"), value: "1" },
            { id: createId("cell"), value: "Item" },
            { id: createId("cell"), value: "1" },
            { id: createId("cell"), value: "$0.00" },
            { id: createId("cell"), value: "$0.00" },
          ],
        },
      ],
    },
    ...overrides,
  };
}

export function createImageElement(
  overrides?: Partial<Omit<ImageElement, "type" | "image">> & {
    image?: Partial<ImageElement["image"]>;
  },
): ImageElement {
  const { image, ...rest } = overrides ?? {};

  return {
    id: createId("image"),
    type: "image",
    x: 80,
    y: 80,
    width: 220,
    height: 120,
    zIndex: 2,
    locked: false,
    visible: true,
    ...rest,
    image: {
      src: "",
      alt: "Image",
      objectFit: "contain",
      ...image,
    },
  };
}

export function createShapeElement(
  overrides?: Partial<Omit<ShapeElement, "type" | "shape">> & {
    shape?: Partial<ShapeElement["shape"]>;
  },
): ShapeElement {
  const { shape, ...rest } = overrides ?? {};

  return {
    id: createId("shape"),
    type: "shape",
    x: 80,
    y: 80,
    width: 180,
    height: 80,
    zIndex: 1,
    locked: false,
    visible: true,
    ...rest,
    shape: {
      kind: "rectangle",
      fill: "#EFF6FF",
      borderColor: "#2563EB",
      borderWidth: 1,
      borderRadius: 8,
      ...shape,
    },
  };
}

export function nextElementOffset(page: Page): { x: number; y: number } {
  const count = page.elements.length;
  return {
    x: 72 + (count % 4) * 16,
    y: 72 + (count % 4) * 16,
  };
}

export function addTableRow(element: TableElement): TableElement {
  const isIndexed = element.table.rows[0]?.cells[0]?.value.trim() === "#";
  const nextNumber = isIndexed
    ? String(Math.max(element.table.rows.length, 1))
    : "";

  const cells = Array.from({ length: element.table.columns }, (_, index) => ({
    id: createId("cell"),
    value: isIndexed && index === 0 ? nextNumber : "",
  }));

  return {
    ...element,
    height: element.height + 44,
    table: {
      ...element.table,
      rows: [...element.table.rows, { id: createId("row"), cells }],
    },
  };
}

export function deleteTableRow(element: TableElement): TableElement {
  if (element.table.rows.length <= 1) {
    return element;
  }

  return {
    ...element,
    height: Math.max(80, element.height - 44),
    table: {
      ...element.table,
      rows: element.table.rows.slice(0, -1),
    },
  };
}

export function addTableColumn(element: TableElement): TableElement {
  const nextIndex = element.table.columns + 1;

  return {
    ...element,
    table: {
      ...element.table,
      columns: nextIndex,
      rows: element.table.rows.map((row, rowIndex) => ({
        ...row,
        cells: [
          ...row.cells,
          {
            id: createId("cell"),
            value: rowIndex === 0 ? `Column ${nextIndex}` : "",
          },
        ],
      })),
    },
  };
}

export function deleteTableColumn(element: TableElement): TableElement {
  if (element.table.columns <= 1) {
    return element;
  }

  return {
    ...element,
    table: {
      ...element.table,
      columns: element.table.columns - 1,
      rows: element.table.rows.map((row) => ({
        ...row,
        cells: row.cells.slice(0, -1),
      })),
    },
  };
}

export function updateTableCell(
  element: TableElement,
  rowId: string,
  cellId: string,
  value: string,
): TableElement {
  return {
    ...element,
    table: {
      ...element.table,
      rows: element.table.rows.map((row) =>
        row.id !== rowId
          ? row
          : {
              ...row,
              cells: row.cells.map((cell) =>
                cell.id === cellId ? { ...cell, value } : cell,
              ),
            },
      ),
    },
  };
}

export function hasTableHeader(element: TableElement): boolean {
  return element.table.rows[0]?.cells[0]?.value.trim() === "#";
}

export function reorderTableRows(
  element: TableElement,
  activeId: string,
  overId: string,
): TableElement {
  const header = hasTableHeader(element);
  const movable = header ? element.table.rows.slice(1) : element.table.rows;
  const fromIndex = movable.findIndex((row) => row.id === activeId);
  const toIndex = movable.findIndex((row) => row.id === overId);

  if (fromIndex < 0 || toIndex < 0 || fromIndex === toIndex) {
    return element;
  }

  const next = [...movable];
  const [moved] = next.splice(fromIndex, 1);
  if (!moved) {
    return element;
  }
  next.splice(toIndex, 0, moved);

  const numbered = header
    ? next.map((row, index) => ({
        ...row,
        cells: row.cells.map((cell, cellIndex) =>
          cellIndex === 0 ? { ...cell, value: String(index + 1) } : cell,
        ),
      }))
    : next;

  return {
    ...element,
    table: {
      ...element.table,
      rows:
        header && element.table.rows[0]
          ? [element.table.rows[0], ...numbered]
          : numbered,
    },
  };
}

export function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const tag = target.tagName;
  return (
    tag === "INPUT" ||
    tag === "TEXTAREA" ||
    tag === "SELECT" ||
    target.isContentEditable
  );
}

export function findPage(pages: Page[], pageId: string): Page | undefined {
  return pages.find((page) => page.id === pageId);
}

export function findElement(
  pages: Page[],
  pageId: string,
  elementId: string,
): DocumentElement | undefined {
  return findPage(pages, pageId)?.elements.find(
    (element) => element.id === elementId,
  );
}
