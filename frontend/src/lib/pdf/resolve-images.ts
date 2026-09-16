import type { EditorDocument } from '@/store/editor.store'

async function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result))
    reader.onerror = () => reject(new Error('Could not read image data.'))
    reader.readAsDataURL(blob)
  })
}

function toAbsoluteUrl(src: string): string {
  if (src.startsWith('data:') || src.startsWith('http://') || src.startsWith('https://')) {
    return src
  }

  return new URL(src, window.location.origin).toString()
}

export async function collectPdfImages(document: EditorDocument): Promise<Record<string, string>> {
  const sources = new Set<string>()

  for (const page of document.pages) {
    for (const element of page.elements) {
      if (element.type === 'image' && element.image.src) {
        sources.add(element.image.src)
      }
    }
  }

  const entries = await Promise.all(
    [...sources].map(async (src) => {
      if (src.startsWith('data:')) {
        return [src, src] as const
      }

      try {
        const response = await fetch(toAbsoluteUrl(src))
        if (!response.ok) {
          return [src, ''] as const
        }

        const dataUrl = await blobToDataUrl(await response.blob())
        return [src, dataUrl] as const
      } catch {
        return [src, ''] as const
      }
    }),
  )

  return Object.fromEntries(entries.filter(([, dataUrl]) => Boolean(dataUrl)))
}
