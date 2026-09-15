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
    height: 180,
    zIndex: 2,
    locked: false,
    visible: true,
    table: {
      columns: 4,
      borderWidth: 1,
      borderColor: "#D1D5DB",
      cellPadding: 8,
      rowSpacing: 0,
      rows: [
        {
          id: createId("row"),
          cells: [
            { id: createId("cell"), value: "Column 1" },
            { id: createId("cell"), value: "Column 2" },
            { id: createId("cell"), value: "Column 3" },
            { id: createId("cell"), value: "Column 4" },
          ],
        },
        {
          id: createId("row"),
          cells: [
            { id: createId("cell"), value: "" },
            { id: createId("cell"), value: "" },
            { id: createId("cell"), value: "" },
            { id: createId("cell"), value: "" },
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
  const cells = Array.from({ length: element.table.columns }, () => ({
    id: createId("cell"),
    value: "",
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
