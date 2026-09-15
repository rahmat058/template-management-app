export const ELEMENT_TYPES = ["text", "table", "image", "shape"] as const;
export const TEXT_ALIGNS = ["left", "center", "right"] as const;
export const IMAGE_OBJECT_FITS = ["contain", "cover", "fill"] as const;
export const SHAPE_KINDS = ["rectangle", "circle", "line"] as const;
export const FONT_FAMILIES = [
  "Inter",
  "Arial",
  "Helvetica",
  "Georgia",
  "Times New Roman",
] as const;

export type ElementType = (typeof ELEMENT_TYPES)[number];
export type TextAlign = (typeof TEXT_ALIGNS)[number];
export type ImageObjectFit = (typeof IMAGE_OBJECT_FITS)[number];
export type ShapeKind = (typeof SHAPE_KINDS)[number];
export type FontFamily = (typeof FONT_FAMILIES)[number];

export interface BaseElement {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  locked: boolean;
  visible: boolean;
}

export interface TextElement extends BaseElement {
  type: "text";
  text: {
    content: string;
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
    color: string;
    align: TextAlign;
  };
}

export interface TableCell {
  id: string;
  value: string;
}

export interface TableRow {
  id: string;
  cells: TableCell[];
}

export interface TableElement extends BaseElement {
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

export interface ImageElement extends BaseElement {
  type: "image";
  image: {
    src: string;
    alt?: string;
    objectFit: ImageObjectFit;
  };
}

export interface ShapeElement extends BaseElement {
  type: "shape";
  shape: {
    kind: ShapeKind;
    fill: string;
    borderColor: string;
    borderWidth: number;
    borderRadius: number;
  };
}

export type DocumentElement =
  | TextElement
  | TableElement
  | ImageElement
  | ShapeElement;
