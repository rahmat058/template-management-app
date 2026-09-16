'use client'

import { ColorInput } from '@/components/ui/ColorInput'
import { Input } from '@/components/ui/Input'
import { SectionTitle } from '@/components/editor/properties/SectionTitle'
import { toColorInput } from '@/components/editor/properties/color'
import { useEditorStore } from '@/store/editor.store'

export function PageSettings() {
  const page = useEditorStore((state) => state.getActivePage())
  const updatePage = useEditorStore((state) => state.updatePage)

  if (!page) {
    return (
      <p className="border-border bg-surface-muted text-muted rounded-[10px] border border-dashed px-4 py-6 text-center text-[13px] leading-6">
        No page selected.
      </p>
    )
  }

  return (
    <section className="border-border rounded-xl border p-3">
      <SectionTitle title="Page Settings" />
      <p className="text-muted mt-1 text-[11px] leading-4">
        Select an element to edit its properties, or change the page background here.
      </p>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <Input label="Width" type="number" value={page.width} readOnly />
        <Input label="Height" type="number" value={page.height} readOnly />
        <div className="col-span-2">
          <ColorInput
            label="Background"
            value={toColorInput(page.background)}
            onChange={(event) =>
              updatePage((current) => ({
                ...current,
                background: event.target.value,
              }))
            }
          />
        </div>
      </div>
    </section>
  )
}
