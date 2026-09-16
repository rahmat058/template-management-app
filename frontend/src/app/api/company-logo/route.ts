import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { NextResponse } from 'next/server'

const MAX_BYTES = 2 * 1024 * 1024
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47]
const COMPANY_LOGO_FILE_NAME = 'company-logo.png'
const COMPANY_LOGO_PUBLIC_PATH = `/images/${COMPANY_LOGO_FILE_NAME}`

export async function POST(request: Request) {
  const formData = await request.formData()
  const upload = formData.get('file')

  if (!upload || typeof upload === 'string') {
    return NextResponse.json({ error: 'An image file is required.' }, { status: 400 })
  }

  const bytes = Buffer.from(await upload.arrayBuffer())

  if (bytes.length === 0) {
    return NextResponse.json({ error: 'An image file is required.' }, { status: 400 })
  }

  if (bytes.length > MAX_BYTES) {
    return NextResponse.json({ error: 'Image must be under 2MB.' }, { status: 400 })
  }

  const isPng = PNG_SIGNATURE.every((value, index) => bytes[index] === value)
  if (!isPng) {
    return NextResponse.json({ error: 'PNG image is required.' }, { status: 400 })
  }

  const directory = path.join(process.cwd(), 'public', 'images')
  await mkdir(directory, { recursive: true })
  await writeFile(path.join(directory, COMPANY_LOGO_FILE_NAME), bytes)

  return NextResponse.json({ ok: true, src: COMPANY_LOGO_PUBLIC_PATH })
}
