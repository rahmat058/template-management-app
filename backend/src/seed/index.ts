import { connectDatabase, disconnectDatabase } from '../config/db'
import { defaultTemplates } from './default-templates'
import { TemplateModel } from '../models/template.model'

async function seed(): Promise<void> {
  await connectDatabase()
  console.log('🔌 Connected to MongoDB')

  const cleared = await TemplateModel.deleteMany({})
  console.log(`🧹 Cleared ${cleared.deletedCount} existing template(s)`)

  const inserted = await TemplateModel.insertMany(defaultTemplates)
  console.log(
    `📦 Inserted ${inserted.length} default template(s): ${inserted.map((template) => template.name).join(', ')}`,
  )

  console.log('🌱 Seeding complete')
}

seed()
  .catch((error: unknown) => {
    const message = error instanceof Error ? error.message : 'Unknown seed error'
    console.error('Seeding failed:', message)
    process.exitCode = 1
  })
  .finally(async () => {
    await disconnectDatabase()
  })
