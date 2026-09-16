import { connectDatabase, databaseName, disconnectDatabase } from '../config/db'
import { TemplateModel } from '../models/template.model'
import { assertNoDuplicateNames, type DuplicateNameGroup } from './duplicate-names'

function findDuplicateNames(): Promise<DuplicateNameGroup[]> {
  return TemplateModel.aggregate<DuplicateNameGroup>([
    { $group: { _id: '$name', count: { $sum: 1 } } },
    { $match: { count: { $gt: 1 } } },
    { $sort: { _id: 1 } },
  ]).exec()
}

async function ensureIndexes(): Promise<void> {
  await connectDatabase()
  console.log(`🔌 Connected to MongoDB (database: ${databaseName()})`)

  // Checked before anything is touched: a unique index cannot be built over existing duplicates, and
  // Mongo's own failure does not name them, so the offending documents are reported instead of
  // leaving a half-applied sync with no way to tell what blocked it.
  assertNoDuplicateNames(await findDuplicateNames())

  const { toCreate, toDrop } = await TemplateModel.diffIndexes()
  const createList = toCreate.map((keys) => JSON.stringify(keys)).join(', ')
  console.log(`➕ Would create: ${createList.length > 0 ? createList : 'none'}`)
  console.log(`➖ Would drop:   ${toDrop.length > 0 ? toDrop.join(', ') : 'none'}`)

  await TemplateModel.syncIndexes()

  const indexes = await TemplateModel.listIndexes()
  console.log(`📇 Indexes now: ${indexes.map((index) => index.name).join(', ')}`)
  console.log('✅ Indexes are in sync with the schema')
}

ensureIndexes()
  .catch((error: unknown) => {
    const message = error instanceof Error ? error.message : 'Unknown index error'
    console.error('❌ Index sync failed:', message)
    process.exitCode = 1
  })
  .finally(async () => {
    await disconnectDatabase()
  })
