import { resolvePublicUrl } from '../../src/lib/public-url'

describe('resolvePublicUrl', () => {
  afterEach(() => {
    delete process.env.RENDER_EXTERNAL_URL
  })

  it('reports the deployed origin when RENDER_EXTERNAL_URL is set', () => {
    process.env.RENDER_EXTERNAL_URL = 'https://api-template-management.onrender.com'

    expect(resolvePublicUrl(4000)).toBe('https://api-template-management.onrender.com')
  })

  it('falls back to localhost when RENDER_EXTERNAL_URL is absent', () => {
    expect(resolvePublicUrl(4000)).toBe('http://localhost:4000')
  })
})
