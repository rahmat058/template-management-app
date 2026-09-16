import { Router } from 'express'
import { validateRequest } from '../../middleware/validate-request'
import * as templateController from './template.controller'
import {
  createTemplateBodySchema,
  templateIdParamsSchema,
  templateNameParamsSchema,
  updateTemplateBodySchema,
} from './template.validator'

export const templateRouter = Router()

// List every template as a summary, newest first.
templateRouter.get('/', templateController.listTemplates)

// Load a template by name (frontend autoload); must stay above `/:id` or `by-name` is read as an id.
templateRouter.get(
  '/by-name/:name',
  validateRequest({ params: templateNameParamsSchema }),
  templateController.getTemplateByName,
)

// Create a template and return it with a 201.
templateRouter.post('/', validateRequest({ body: createTemplateBodySchema }), templateController.createTemplate)

// Load one template by id.
templateRouter.get('/:id', validateRequest({ params: templateIdParamsSchema }), templateController.getTemplate)

// Partially update a template and return the updated document.
templateRouter.patch(
  '/:id',
  validateRequest({
    params: templateIdParamsSchema,
    body: updateTemplateBodySchema,
  }),
  templateController.updateTemplate,
)

// Delete a template and respond 204 with no body.
templateRouter.delete('/:id', validateRequest({ params: templateIdParamsSchema }), templateController.deleteTemplate)
