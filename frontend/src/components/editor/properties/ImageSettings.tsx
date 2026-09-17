'use client'

import { useState, type ChangeEvent } from 'react'
import { IMAGE_OBJECT_FITS, type DocumentElement, type ImageObjectFit } from '@/types/element'
import { Input } from '@/components/ui/Input'
import { Select, type SelectOption } from '@/components/ui/Select'
import { ImageAlignControls } from '@/components/editor/properties/ImageAlignControls'
import { PositionSizeFields } from '@/components/editor/properties/PositionSizeFields'
import { SectionTitle } from '@/components/editor/properties/SectionTitle'
import { COMPANY_LOGO_ID, fileToDataUrl, isCompanyLogo, replaceCompanyLogoFile } from '@/lib/company-logo'
import { useEditorStore } from '@/store/editor.store'

const FIT_OPTIONS: SelectOption[] = IMAGE_OBJECT_FITS.map((fit) => ({ value: fit, label: fit }))

export function ImageSettings({ element }: { element: DocumentElement }) {
  const updateElement = useEditorStore((state) => state.updateElement)
  const [isReplacing, setIsReplacing] = useState(false)
  const [replaceError, setReplaceError] = useState<string | null>(null)
  const logo = isCompanyLogo(element.id)
  const imageSrc = element.type === 'image' ? element.image.src : ''
  const imageAlt = element.type === 'image' ? (element.image.alt ?? '') : 'Company logo'
  const objectFit = element.type === 'image' ? element.image.objectFit : 'cover'

  const applySrc = (src: string) => {
    updateElement(element.id, (current) => {
      if (current.type === 'image') {
        return {
          ...current,
          id: logo ? COMPANY_LOGO_ID : current.id,
          image: { ...current.image, src },
        }
      }

      return {
        id: logo ? COMPANY_LOGO_ID : current.id,
        type: 'image',
        x: current.x,
        y: current.y,
        width: current.width,
        height: current.height,
        zIndex: current.zIndex,
        locked: current.locked,
        visible: current.visible,
        image: {
          src,
          alt: 'Company logo',
          objectFit: 'cover',
        },
      }
    })
  }

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    event.target.value = ''

    if (!file) {
      return
    }

    setReplaceError(null)
    setIsReplacing(true)

    try {
      applySrc(await fileToDataUrl(file))

      if (logo) {
        await replaceCompanyLogoFile(file)
      }
    } catch (error) {
      setReplaceError(error instanceof Error ? error.message : 'Could not replace the image.')
    } finally {
      setIsReplacing(false)
    }
  }

  return (
    <>
      <section className="border-border rounded-xl border p-3">
        <SectionTitle title={logo ? 'Company Logo' : 'Image Settings'} />
        <div className="mt-3 flex flex-col gap-3">
          <label className="flex flex-col gap-1.5">
            <span className="text-muted text-[12px] font-medium">{logo ? 'Replace logo' : 'Replace image'}</span>
            <input
              type="file"
              accept="image/*"
              disabled={isReplacing}
              onClick={(event) => event.stopPropagation()}
              onChange={(event) => void handleFileChange(event)}
              className="text-muted file:border-primary/20 file:bg-primary/5 file:text-primary block w-full cursor-pointer text-[12px] file:mr-3 file:h-8 file:cursor-pointer file:rounded-lg file:border file:px-3 file:text-[12px] file:font-medium disabled:cursor-not-allowed"
            />
          </label>
          {isReplacing ? <p className="text-muted text-[12px]">Replacing image…</p> : null}
          {replaceError ? <p className="text-danger text-[12px]">{replaceError}</p> : null}
          <Input
            label="Image URL"
            value={imageSrc.startsWith('data:') ? 'Uploaded image' : imageSrc}
            readOnly={imageSrc.startsWith('data:')}
            onChange={(event) => {
              if (!imageSrc.startsWith('data:')) {
                applySrc(event.target.value)
              }
            }}
          />
          <Input
            label="Alt text"
            value={imageAlt}
            onChange={(event) =>
              updateElement(element.id, (current) =>
                current.type === 'image'
                  ? {
                      ...current,
                      image: { ...current.image, alt: event.target.value },
                    }
                  : current,
              )
            }
          />
          <ImageAlignControls elementId={element.id} />
          <Select
            label="Fit"
            value={objectFit}
            options={FIT_OPTIONS}
            onChange={(value) =>
              updateElement(element.id, (current) =>
                current.type === 'image'
                  ? {
                      ...current,
                      image: {
                        ...current.image,
                        objectFit: value as ImageObjectFit,
                      },
                    }
                  : current,
              )
            }
          />
        </div>
      </section>
      <section className="border-border rounded-xl border p-3">
        <SectionTitle title="Position & Size" />
        <div className="mt-3">
          <PositionSizeFields
            elementId={element.id}
            x={element.x}
            y={element.y}
            width={element.width}
            height={element.height}
          />
        </div>
      </section>
    </>
  )
}
