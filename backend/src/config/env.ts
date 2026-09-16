import { z } from 'zod'
import dotenv from 'dotenv'

dotenv.config()

const envSchema = z.object({
  // Required rather than defaulted: a deployment that forgets it would otherwise boot in
  // development mode, which returns raw internal error messages to clients.
  NODE_ENV: z.enum(['development', 'test', 'production']),
  PORT: z.coerce.number().int().positive().default(4000),
  CORS_ORIGIN: z.string().min(1).default('http://localhost:3000'),
  // Number of proxies to trust in front of the API. 0 disables it; use 1 behind a single
  // load balancer/ingress so rate limiting and logs see the real client IP.
  TRUST_PROXY: z.coerce.number().int().min(0).default(0),
  MONGODB_URI: z.string().min(1, 'MONGODB_URI is required'),
})

const parsed = envSchema.safeParse(process.env)

if (!parsed.success) {
  const issues = parsed.error.issues.map((issue) => `${issue.path.join('.')}: ${issue.message}`).join('; ')
  throw new Error(`Invalid environment configuration: ${issues}`)
}

export const env = parsed.data
export const isProduction = env.NODE_ENV === 'production'
