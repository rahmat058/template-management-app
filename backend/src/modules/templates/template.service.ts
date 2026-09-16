import type { CreateTemplateInput, Template, TemplateSummary, UpdateTemplateInput } from '../../types/template'
import { NotFoundError } from '../../lib/app-error'
import { TemplateModel } from '../../models/template.model'
import { toTemplate, toTemplateSummary, type TemplateRecord, type TemplateSummaryRecord } from './template.mapper'

const LIST_LIMIT = 100

// Bounds how long one query can occupy a connection in the 10-socket pool. The driver's
// serverSelectionTimeoutMS only covers picking a server, not running the query — without this a
// slow scan would hold a socket with nothing to break the wait.
const QUERY_TIMEOUT_MS = 5_000

export async function listTemplates(): Promise<TemplateSummary[]> {
  // Aggregated so `pageCount` is computed in Atlas. Reading the documents and calling `.length`
  // would transfer every page and element of up to 100 templates — the schema allows 50 pages x
  // 500 elements each — purely to produce seven small scalars per row.
  const summaries = await TemplateModel.aggregate<TemplateSummaryRecord>([
    { $sort: { updatedAt: -1 } },
    { $limit: LIST_LIMIT },
    {
      $project: {
        name: 1,
        version: 1,
        status: 1,
        createdAt: 1,
        updatedAt: 1,
        pageCount: { $size: '$pages' },
      },
    },
  ])
    .option({ maxTimeMS: QUERY_TIMEOUT_MS })
    .exec()

  return summaries.map(toTemplateSummary)
}

export async function getTemplateById(id: string): Promise<Template> {
  const document = await TemplateModel.findById(id).lean<TemplateRecord>().maxTimeMS(QUERY_TIMEOUT_MS).exec()

  if (!document) {
    throw new NotFoundError('Template not found')
  }

  return toTemplate(document)
}

export async function getTemplateByName(name: string): Promise<Template> {
  const document = await TemplateModel.findOne({ name }).lean<TemplateRecord>().maxTimeMS(QUERY_TIMEOUT_MS).exec()

  if (!document) {
    throw new NotFoundError('Template not found')
  }

  return toTemplate(document)
}

export async function createTemplate(input: CreateTemplateInput): Promise<Template> {
  const document = await TemplateModel.create({
    name: input.name,
    pages: input.pages,
    version: input.version ?? 1,
    status: input.status ?? 'active',
  })

  return toTemplate(document)
}

export async function updateTemplate(id: string, input: UpdateTemplateInput): Promise<Template> {
  const updates: UpdateTemplateInput = {}
  if (input.name !== undefined) updates.name = input.name
  if (input.pages !== undefined) updates.pages = input.pages
  if (input.version !== undefined) updates.version = input.version
  if (input.status !== undefined) updates.status = input.status

  const document = await TemplateModel.findByIdAndUpdate(
    id,
    { $set: updates },
    {
      new: true,
      runValidators: true,
      lean: true,
    },
  )
    .maxTimeMS(QUERY_TIMEOUT_MS)
    .exec()

  if (!document) {
    throw new NotFoundError('Template not found')
  }

  return toTemplate(document as TemplateRecord)
}

export async function deleteTemplate(id: string): Promise<void> {
  // Only existence matters here, so the whole document (pages and elements) is never read.
  const document = await TemplateModel.findByIdAndDelete(id).select('_id').lean().maxTimeMS(QUERY_TIMEOUT_MS).exec()

  if (!document) {
    throw new NotFoundError('Template not found')
  }
}
