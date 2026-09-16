import { connectDatabase, databaseName, disconnectDatabase } from '../config/db'
import { env } from '../config/env'
import { defaultTemplates } from './default-templates'
import { TemplateModel } from '../models/template.model'

const PRODUCTION_OVERRIDE = 'SEED_ALLOW_PRODUCTION'

async function seed(): Promise<void> {
  // Guarded before connecting, so a production URI in `.env` is never even opened — this runner
  // deletes every document in `templates`, and a mistyped NODE_ENV must not be able to reach it.
  if (env.NODE_ENV === 'production' && process.env[PRODUCTION_OVERRIDE] !== '1') {
    throw new Error(
      `Refusing to seed with NODE_ENV=production: this deletes every document in "templates". ` +
        `Set ${PRODUCTION_OVERRIDE}=1 to override.`,
    )
  }

  await connectDatabase()
  console.log(`🔌 Connected to MongoDB (database: ${databaseName()})`)

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
