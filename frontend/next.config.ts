import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { NextConfig } from 'next'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  distDir: '.next',
  // Pin Next's workspace/tracing root to this package, which lives one level
  // below the git root. This does NOT prevent the stray `frontend/frontend`
  // folder: that one is emitted from stale Turbopack state inside a pre-existing
  // `.next` directory. Delete `.next` if it ever shows up again.
  outputFileTracingRoot: projectRoot,
  serverExternalPackages: ['@react-pdf/renderer'],
  turbopack: {
    root: projectRoot,
  },
}

export default nextConfig
