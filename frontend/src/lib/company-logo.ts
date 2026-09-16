export const COMPANY_LOGO_ID = 'image-logo'
export const LEGACY_LOGO_ID = 'shape-logo'
export const COMPANY_LOGO_PATH = '/images/icon.png'

export function isCompanyLogo(elementId: string): boolean {
  return elementId === COMPANY_LOGO_ID || elementId === LEGACY_LOGO_ID
}

export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result))
    reader.onerror = () => reject(new Error('Could not read the image.'))
    reader.readAsDataURL(file)
  })
}

export async function fileToPngFile(file: File): Promise<File> {
  if (file.type === 'image/png') {
    return new File([file], 'icon.png', { type: 'image/png' })
  }

  const bitmap = await createImageBitmap(file)
  const canvas = document.createElement('canvas')
  canvas.width = bitmap.width
  canvas.height = bitmap.height
  const context = canvas.getContext('2d')

  if (!context) {
    throw new Error('Could not prepare the image.')
  }

  context.drawImage(bitmap, 0, 0)
  bitmap.close()

  const blob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((result) => {
      if (result) {
        resolve(result)
        return
      }

      reject(new Error('Could not convert the image to PNG.'))
    }, 'image/png')
  })

  return new File([blob], 'icon.png', { type: 'image/png' })
}

export async function replaceCompanyLogoFile(file: File): Promise<void> {
  const png = await fileToPngFile(file)
  const body = new FormData()
  body.append('file', png, 'icon.png')

  const response = await fetch('/api/company-logo', {
    method: 'POST',
    body,
  })

  if (!response.ok) {
    const payload = (await response.json().catch(() => null)) as { error?: string } | null
    throw new Error(payload?.error ?? 'Could not replace the company logo.')
  }
}
