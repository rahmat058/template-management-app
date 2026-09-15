import { z } from "zod";
import {
  createTemplateSchema,
  mongoObjectIdSchema,
  updateTemplateSchema,
} from "../../validators/template.schema";

export const templateIdParamsSchema = z.object({
  id: mongoObjectIdSchema,
});

export const createTemplateBodySchema = createTemplateSchema;
export const updateTemplateBodySchema = updateTemplateSchema;
