'use client'

import { AlignCenter, AlignLeft, AlignRight, Type } from 'lucide-react'
import { FONT_FAMILIES, TEXT_ALIGNS, type TextElement } from '@/types/element'
import { ColorInput } from '@/components/ui/ColorInput'
import { Input } from '@/components/ui/Input'
import { Select, type SelectOption } from '@/components/ui/Select'
import { PositionSizeFields } from '@/components/editor/properties/PositionSizeFields'
import { SectionTitle } from '@/components/editor/properties/SectionTitle'
import { toColorInput } from '@/components/editor/properties/color'
import { cn } from '@/lib/cn'
import { useEditorStore } from '@/store/editor.store'

const FONT_FAMILY_OPTIONS: SelectOption[] = FONT_FAMILIES.map((font) => ({ value: font, label: font }))

const FONT_WEIGHT_OPTIONS: SelectOption[] = [
  { value: '400', label: 'Regular' },
  { value: '500', label: 'Medium' },
  { value: '600', label: 'Semibold' },
  { value: '700', label: 'Bold' },
  { value: '800', label: 'Extra Bold' },
]

export function TextSettings({ element }: { element: TextElement }) {
  const updateElement = useEditorStore((state) => state.updateElement)

  return (
    <>
      <section className="border-border rounded-xl border p-3">
        <SectionTitle icon={<Type className="h-3.5 w-3.5" />} title="Text Settings" />
        <div className="mt-3 grid grid-cols-2 gap-3">
          <Select
            label="Font Family"
            value={element.text.fontFamily}
            options={FONT_FAMILY_OPTIONS}
            onChange={(fontFamily) =>
              updateElement(element.id, (current) =>
                current.type === 'text'
                  ? {
                      ...current,
                      text: { ...current.text, fontFamily },
                    }
                  : current,
              )
            }
          />
          <Input
            label="Font Size"
            type="number"
            min={8}
            max={96}
            value={element.text.fontSize}
            onChange={(event) =>
              updateElement(element.id, (current) =>
                current.type === 'text'
                  ? {
                      ...current,
                      text: {
                        ...current.text,
                        fontSize: Number(event.target.value) || 12,
                      },
                    }
                  : current,
              )
            }
          />
          <Select
            label="Font Weight"
            value={String(element.text.fontWeight)}
            options={FONT_WEIGHT_OPTIONS}
            onChange={(fontWeight) =>
              updateElement(element.id, (current) =>
                current.type === 'text'
                  ? {
                      ...current,
                      text: {
                        ...current.text,
                        fontWeight: Number(fontWeight),
                      },
                    }
                  : current,
              )
            }
          />
          <ColorInput
            label="Text Color"
            value={toColorInput(element.text.color)}
            onChange={(event) =>
              updateElement(element.id, (current) =>
                current.type === 'text'
                  ? {
                      ...current,
                      text: { ...current.text, color: event.target.value },
                    }
                  : current,
              )
            }
          />
        </div>
        <div className="mt-3">
          <p className="text-muted mb-1.5 text-[12px] font-medium">Alignment</p>
          <div className="border-border flex overflow-hidden rounded-lg border">
            {TEXT_ALIGNS.map((align) => (
              <button
                key={align}
                type="button"
                aria-label={`Align ${align}`}
                onClick={() =>
                  updateElement(element.id, (current) =>
                    current.type === 'text' ? { ...current, text: { ...current.text, align } } : current,
                  )
                }
                className={cn(
                  'text-muted hover:bg-surface-muted flex h-8 flex-1 items-center justify-center',
                  element.text.align === align && 'bg-primary/10 text-primary',
                )}>
                {align === 'left' ? <AlignLeft className="h-4 w-4" /> : null}
                {align === 'center' ? <AlignCenter className="h-4 w-4" /> : null}
                {align === 'right' ? <AlignRight className="h-4 w-4" /> : null}
              </button>
            ))}
          </div>
        </div>
        <label className="mt-3 flex flex-col gap-1.5">
          <span className="text-muted text-[12px] font-medium">Content</span>
          <textarea
            value={element.text.content}
            onChange={(event) =>
              updateElement(element.id, (current) =>
                current.type === 'text'
                  ? {
                      ...current,
                      text: { ...current.text, content: event.target.value },
                    }
                  : current,
              )
            }
            className="border-border bg-surface focus:border-primary focus:ring-primary/20 min-h-18 rounded-lg border px-3 py-2 text-[13px] outline-none focus:ring-2"
          />
        </label>
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
