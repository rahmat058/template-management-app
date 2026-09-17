// Render injects RENDER_EXTERNAL_URL for web services; everywhere else the listener is local.
export function resolvePublicUrl(port: number): string {
  return process.env.RENDER_EXTERNAL_URL ?? `http://localhost:${port}`
}
