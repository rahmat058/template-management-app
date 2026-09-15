import { z } from "zod";
import {
  createTemplateSchema,
  mongoObjectIdSchema,
  updateTemplateSchema,
} from "../../validators/template.schema";

export const templateIdParamsSchema = z.object({
  id: mongoObjectIdSchema,
});

export const templateNameParamsSchema = z.object({
  name: z.string().trim().min(1).max(120),
});

export const createTemplateBodySchema = createTemplateSchema;
export const updateTemplateBodySchema = updateTemplateSchema;
