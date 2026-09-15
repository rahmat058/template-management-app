import type {
  CreateTemplateInput,
  Template,
  TemplateSummary,
  UpdateTemplateInput,
} from "../../types/template";
import { NotFoundError } from "../../lib/app-error";
import { TemplateModel } from "../../models/template.model";
import { toTemplate, toTemplateSummary } from "./template.mapper";

export async function listTemplates(): Promise<TemplateSummary[]> {
  const documents = await TemplateModel.find()
    .sort({ updatedAt: -1 })
    .limit(100)
    .exec();

  return documents.map(toTemplateSummary);
}

export async function getTemplateById(id: string): Promise<Template> {
  const document = await TemplateModel.findById(id).exec();

  if (!document) {
    throw new NotFoundError("Template not found");
  }

  return toTemplate(document);
}

export async function getTemplateByName(name: string): Promise<Template> {
  const document = await TemplateModel.findOne({ name })
    .sort({ updatedAt: -1 })
    .exec();

  if (!document) {
    throw new NotFoundError("Template not found");
  }

  return toTemplate(document);
}

export async function createTemplate(
  input: CreateTemplateInput,
): Promise<Template> {
  const document = await TemplateModel.create({
    name: input.name,
    pages: input.pages,
    version: input.version ?? 1,
    status: input.status ?? "active",
  });

  return toTemplate(document);
}

export async function updateTemplate(
  id: string,
  input: UpdateTemplateInput,
): Promise<Template> {
  const updates: UpdateTemplateInput = {};
  if (input.name !== undefined) updates.name = input.name;
  if (input.pages !== undefined) updates.pages = input.pages;
  if (input.version !== undefined) updates.version = input.version;
  if (input.status !== undefined) updates.status = input.status;

  const document = await TemplateModel.findByIdAndUpdate(
    id,
    { $set: updates },
    {
      new: true,
      runValidators: true,
    },
  ).exec();

  if (!document) {
    throw new NotFoundError("Template not found");
  }

  return toTemplate(document);
}

export async function deleteTemplate(id: string): Promise<void> {
  const document = await TemplateModel.findByIdAndDelete(id).exec();

  if (!document) {
    throw new NotFoundError("Template not found");
  }
}
