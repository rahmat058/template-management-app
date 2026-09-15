import { z } from "zod";

export const TEXT_ALIGNS = ["left", "center", "right"] as const;
export const IMAGE_OBJECT_FITS = ["contain", "cover", "fill"] as const;
export const SHAPE_KINDS = ["rectangle", "circle", "line"] as const;
export const TEMPLATE_STATUSES = ["draft", "active", "archived"] as const;

const textAlignSchema = z.enum(TEXT_ALIGNS);
const imageObjectFitSchema = z.enum(IMAGE_OBJECT_FITS);
const shapeKindSchema = z.enum(SHAPE_KINDS);
const templateStatusSchema = z.enum(TEMPLATE_STATUSES);

const baseElementFields = {
  id: z.string().min(1).max(64),
  x: z.number().finite(),
  y: z.number().finite(),
  width: z.number().finite().positive().max(5000),
  height: z.number().finite().positive().max(5000),
  zIndex: z.number().int().min(0).max(10_000),
  locked: z.boolean(),
  visible: z.boolean(),
};

const textElementSchema = z.object({
  ...baseElementFields,
  type: z.literal("text"),
  text: z.object({
    content: z.string().max(20_000),
    fontFamily: z.string().min(1).max(80),
    fontSize: z.number().finite().positive().max(200),
    fontWeight: z.number().int().min(100).max(900),
    color: z.string().min(1).max(32),
    align: textAlignSchema,
  }),
});

const tableCellSchema = z.object({
  id: z.string().min(1).max(64),
  value: z.string().max(5_000),
});

const tableRowSchema = z.object({
  id: z.string().min(1).max(64),
  cells: z.array(tableCellSchema).min(1).max(20),
});

const tableElementSchema = z.object({
  ...baseElementFields,
  type: z.literal("table"),
  table: z
    .object({
      columns: z.number().int().min(1).max(20),
      rows: z.array(tableRowSchema).min(1).max(100),
      borderWidth: z.number().finite().min(0).max(20),
      borderColor: z.string().min(1).max(32),
      cellPadding: z.number().finite().min(0).max(64),
      rowSpacing: z.number().finite().min(0).max(64),
    })
    .superRefine((table, ctx) => {
      table.rows.forEach((row, rowIndex) => {
        if (row.cells.length !== table.columns) {
          ctx.addIssue({
            code: "custom",
            message: `Row ${rowIndex} must contain exactly ${table.columns} cells`,
            path: ["rows", rowIndex, "cells"],
          });
        }
      });
    }),
});

const imageElementSchema = z.object({
  ...baseElementFields,
  type: z.literal("image"),
  image: z.object({
    src: z.string().max(4_096),
    alt: z.string().max(200).optional(),
    objectFit: imageObjectFitSchema,
  }),
});

const shapeElementSchema = z.object({
  ...baseElementFields,
  type: z.literal("shape"),
  shape: z.object({
    kind: shapeKindSchema,
    fill: z.string().min(1).max(32),
    borderColor: z.string().min(1).max(32),
    borderWidth: z.number().finite().min(0).max(20),
    borderRadius: z.number().finite().min(0).max(999),
  }),
});

const documentElementSchema = z.discriminatedUnion("type", [
  textElementSchema,
  tableElementSchema,
  imageElementSchema,
  shapeElementSchema,
]);

const pageSchema = z.object({
  id: z.string().min(1).max(64),
  order: z.number().int().min(0),
  width: z.number().finite().positive().max(10_000),
  height: z.number().finite().positive().max(10_000),
  background: z.string().min(1).max(32),
  elements: z.array(documentElementSchema).max(500),
});

const templateNameSchema = z.string().trim().min(1).max(120);

export const createTemplateSchema = z.object({
  name: templateNameSchema,
  pages: z.array(pageSchema).min(1).max(50),
  version: z.number().int().positive().optional().default(1),
  status: templateStatusSchema.optional().default("active"),
});

export const updateTemplateSchema = z
  .object({
    name: templateNameSchema.optional(),
    pages: z.array(pageSchema).min(1).max(50).optional(),
    version: z.number().int().positive().optional(),
    status: templateStatusSchema.optional(),
  })
  .refine((value) => Object.values(value).some((item) => item !== undefined), {
    message: "At least one field is required",
  });

export const mongoObjectIdSchema = z
  .string()
  .regex(/^[a-fA-F0-9]{24}$/, "Invalid template id");
