import httpStatus from 'http-status'
import type { Request, Response } from 'express'

import * as templateService from './template.service'
import { asyncHandler } from '../../lib/async-handler'
import { sendNoContent, sendSuccess } from '../../lib/http'
import type { CreateTemplateInput, UpdateTemplateInput } from '../../types/template'

// List every template as a summary, newest first.
export const listTemplates = asyncHandler(async (_req: Request, res: Response): Promise<void> => {
  const templates = await templateService.listTemplates()
  sendSuccess(res, templates)
})

// Load one template by id.
export const getTemplate = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const template = await templateService.getTemplateById(req.params.id)
  sendSuccess(res, template)
})

// Load a template by name — the path the frontend autoload uses.
export const getTemplateByName = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const template = await templateService.getTemplateByName(req.params.name)
  sendSuccess(res, template)
})

// Create a template and return it with a 201.
export const createTemplate = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const template = await templateService.createTemplate(req.body as CreateTemplateInput)
  sendSuccess(res, template, httpStatus.CREATED)
})

// Partially update a template and return the updated document.
export const updateTemplate = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const template = await templateService.updateTemplate(req.params.id, req.body as UpdateTemplateInput)
  sendSuccess(res, template)
})

// Delete a template and respond 204 with no body.
export const deleteTemplate = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  await templateService.deleteTemplate(req.params.id)
  sendNoContent(res)
})
