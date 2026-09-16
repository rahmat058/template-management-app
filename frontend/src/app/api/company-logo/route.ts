import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { NextResponse } from 'next/server'

const MAX_BYTES = 2 * 1024 * 1024
// The declared Content-Length covers the whole multipart body, not just the file, so it is only a
// coarse pre-buffer guard with slack. `upload.size` below is the exact check.
const MAX_BODY_BYTES = MAX_BYTES + 64 * 1024
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]
const COMPANY_LOGO_FILE_NAME = 'company-logo.png'
const COMPANY_LOGO_PUBLIC_PATH = `/images/${COMPANY_LOGO_FILE_NAME}`

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 })
}

export async function POST(request: Request) {
  const declaredLength = Number(request.headers.get('content-length') ?? 0)
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return badRequest('Image must be under 2MB.')
  }

  let formData: FormData
  try {
    formData = await request.formData()
  } catch {
    return badRequest('A multipart form with an image file is required.')
  }

  const upload = formData.get('file')

  if (!upload || typeof upload === 'string') {
    return badRequest('An image file is required.')
  }

  if (upload.size === 0) {
    return badRequest('An image file is required.')
  }

  if (upload.size > MAX_BYTES) {
    return badRequest('Image must be under 2MB.')
  }

  const bytes = Buffer.from(await upload.arrayBuffer())

  const isPng = bytes.length >= PNG_SIGNATURE.length && PNG_SIGNATURE.every((value, index) => bytes[index] === value)
  if (!isPng) {
    return badRequest('PNG image is required.')
  }

  const directory = path.join(process.cwd(), 'public', 'images')

  try {
    await mkdir(directory, { recursive: true })
    await writeFile(path.join(directory, COMPANY_LOGO_FILE_NAME), bytes)
  } catch {
    return NextResponse.json({ error: 'Could not store the image on this server.' }, { status: 503 })
  }

  return NextResponse.json({ ok: true, src: COMPANY_LOGO_PUBLIC_PATH })
}
