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

templateRouter.get('/', templateController.listTemplates)

templateRouter.get(
  '/by-name/:name',
  validateRequest({ params: templateNameParamsSchema }),
  templateController.getTemplateByName,
)

templateRouter.post('/', validateRequest({ body: createTemplateBodySchema }), templateController.createTemplate)

templateRouter.get('/:id', validateRequest({ params: templateIdParamsSchema }), templateController.getTemplate)

templateRouter.patch(
  '/:id',
  validateRequest({
    params: templateIdParamsSchema,
    body: updateTemplateBodySchema,
  }),
  templateController.updateTemplate,
)

templateRouter.delete('/:id', validateRequest({ params: templateIdParamsSchema }), templateController.deleteTemplate)
