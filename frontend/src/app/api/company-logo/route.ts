import path from 'node:path'
import { NextResponse } from 'next/server'
import { mkdir, writeFile } from 'node:fs/promises'

const MAX_BYTES = 2 * 1024 * 1024
// The declared Content-Length covers the whole multipart body, not just the file, so it is only a
// coarse pre-buffer guard with slack. `upload.size` below is the exact check.
const MAX_BODY_BYTES = MAX_BYTES + 64 * 1024
const COMPANY_LOGO_BASE_NAME = 'company-logo'
const COMPANY_LOGO_PUBLIC_DIRECTORY = 'images'
const UNSUPPORTED_FORMAT_MESSAGE = 'Unsupported image format. Use PNG, JPEG or WebP.'

const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]
const JPEG_SIGNATURE = [0xff, 0xd8, 0xff]
const RIFF_SIGNATURE = [0x52, 0x49, 0x46, 0x46]
const WEBP_SIGNATURE = [0x57, 0x45, 0x42, 0x50]

function hasSignature(bytes: Buffer, signature: number[], offset: number): boolean {
  if (bytes.length < offset + signature.length) {
    return false
  }

  return signature.every((value, index) => bytes[offset + index] === value)
}

// Magic-byte detection, so the stored extension always matches the real content and the file is
// served with a correct Content-Type. SVG is deliberately absent: it is script-capable and the
// upload is served back from the app's own origin.
const IMAGE_FORMATS = [
  {
    extension: 'png',
    matches: (bytes: Buffer) => hasSignature(bytes, PNG_SIGNATURE, 0),
  },
  {
    extension: 'jpg',
    matches: (bytes: Buffer) => hasSignature(bytes, JPEG_SIGNATURE, 0),
  },
  {
    extension: 'webp',
    matches: (bytes: Buffer) => hasSignature(bytes, RIFF_SIGNATURE, 0) && hasSignature(bytes, WEBP_SIGNATURE, 8),
  },
]

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
  const format = IMAGE_FORMATS.find((candidate) => candidate.matches(bytes))

  if (!format) {
    return badRequest(UNSUPPORTED_FORMAT_MESSAGE)
  }

  const fileName = `${COMPANY_LOGO_BASE_NAME}.${format.extension}`
  const directory = path.join(process.cwd(), 'public', COMPANY_LOGO_PUBLIC_DIRECTORY)

  try {
    await mkdir(directory, { recursive: true })
    await writeFile(path.join(directory, fileName), bytes)
  } catch {
    return NextResponse.json({ error: 'Could not store the image on this server.' }, { status: 503 })
  }

  return NextResponse.json({ ok: true, src: `/${COMPANY_LOGO_PUBLIC_DIRECTORY}/${fileName}` })
}
