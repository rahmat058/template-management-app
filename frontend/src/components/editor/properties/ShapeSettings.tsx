'use client'

import { SHAPE_KINDS, type ShapeElement, type ShapeKind } from '@/types/element'
import { ColorInput } from '@/components/ui/ColorInput'
import { Input } from '@/components/ui/Input'
import { Select, type SelectOption } from '@/components/ui/Select'
import { PositionSizeFields } from '@/components/editor/properties/PositionSizeFields'
import { SectionTitle } from '@/components/editor/properties/SectionTitle'
import { toColorInput } from '@/components/editor/properties/color'
import { useEditorStore } from '@/store/editor.store'

const SHAPE_OPTIONS: SelectOption[] = [
  { value: 'rectangle', label: 'Rectangle' },
  { value: 'circle', label: 'Circle' },
  { value: 'line', label: 'Line' },
]

function toShapeKind(value: string): ShapeKind | null {
  for (const kind of SHAPE_KINDS) {
    if (kind === value) {
      return kind
    }
  }

  return null
}

export function ShapeSettings({ element }: { element: ShapeElement }) {
  const updateElement = useEditorStore((state) => state.updateElement)

  return (
    <>
      <section className="border-border rounded-xl border p-3">
        <SectionTitle title="Shape Settings" />
        <div className="mt-3 flex flex-col gap-3">
          <Select
            label="Shape"
            value={element.shape.kind}
            options={SHAPE_OPTIONS}
            onChange={(value) => {
              const kind = toShapeKind(value)
              if (!kind) {
                return
              }

              updateElement(element.id, (current) =>
                current.type === 'shape' ? { ...current, shape: { ...current.shape, kind } } : current,
              )
            }}
          />
          <div className="grid grid-cols-2 gap-3">
            <ColorInput
              label="Fill"
              value={toColorInput(element.shape.fill)}
              onChange={(event) =>
                updateElement(element.id, (current) =>
                  current.type === 'shape'
                    ? {
                        ...current,
                        shape: { ...current.shape, fill: event.target.value },
                      }
                    : current,
                )
              }
            />
            <ColorInput
              label="Border"
              value={toColorInput(element.shape.borderColor)}
              onChange={(event) =>
                updateElement(element.id, (current) =>
                  current.type === 'shape'
                    ? {
                        ...current,
                        shape: {
                          ...current.shape,
                          borderColor: event.target.value,
                        },
                      }
                    : current,
                )
              }
            />
            <Input
              label="Border width"
              type="number"
              min={0}
              value={element.shape.borderWidth}
              onChange={(event) =>
                updateElement(element.id, (current) =>
                  current.type === 'shape'
                    ? {
                        ...current,
                        shape: {
                          ...current.shape,
                          borderWidth: Number(event.target.value) || 0,
                        },
                      }
                    : current,
                )
              }
            />
            <Input
              label="Radius"
              type="number"
              min={0}
              value={element.shape.borderRadius}
              onChange={(event) =>
                updateElement(element.id, (current) =>
                  current.type === 'shape'
                    ? {
                        ...current,
                        shape: {
                          ...current.shape,
                          borderRadius: Number(event.target.value) || 0,
                        },
                      }
                    : current,
                )
              }
            />
          </div>
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
