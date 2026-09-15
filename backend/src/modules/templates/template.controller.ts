import type { Request, Response } from "express";
import httpStatus from "http-status";
import type {
  CreateTemplateInput,
  UpdateTemplateInput,
} from "../../types/template";
import { asyncHandler } from "../../lib/async-handler";
import { sendNoContent, sendSuccess } from "../../lib/http";
import * as templateService from "./template.service";

export const listTemplates = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    const templates = await templateService.listTemplates();
    sendSuccess(res, templates);
  },
);

export const getTemplate = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const template = await templateService.getTemplateById(req.params.id);
    sendSuccess(res, template);
  },
);

export const createTemplate = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const template = await templateService.createTemplate(
      req.body as CreateTemplateInput,
    );
    sendSuccess(res, template, httpStatus.CREATED);
  },
);

export const updateTemplate = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const template = await templateService.updateTemplate(
      req.params.id,
      req.body as UpdateTemplateInput,
    );
    sendSuccess(res, template);
  },
);

export const deleteTemplate = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    await templateService.deleteTemplate(req.params.id);
    sendNoContent(res);
  },
);
