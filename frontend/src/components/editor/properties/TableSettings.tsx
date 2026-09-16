'use client'

import { Columns3, Plus, Rows3, Trash2 } from 'lucide-react'
import type { TableElement } from '@/types/element'
import { Input } from '@/components/ui/Input'
import { PanelAction } from '@/components/editor/properties/PanelAction'
import { PositionSizeFields } from '@/components/editor/properties/PositionSizeFields'
import { SectionTitle } from '@/components/editor/properties/SectionTitle'
import { toColorInput } from '@/components/editor/properties/color'
import { uniqueHistoryKey } from '@/lib/editor-history'
import { addTableColumn, addTableRow, deleteTableColumn, deleteTableRow } from '@/lib/document-utils'
import { useEditorStore } from '@/store/editor.store'

export function TableSettings({ element }: { element: TableElement }) {
  const updateElement = useEditorStore((state) => state.updateElement)

  return (
    <>
      <section className="border-border rounded-[12px] border p-3">
        <SectionTitle title="Table Settings" />
        <div className="mt-3 grid grid-cols-2 gap-3">
          <Input
            label="Border width"
            type="number"
            min={0}
            value={element.table.borderWidth}
            onChange={(event) => {
              const value = Number.parseInt(event.target.value, 10)
              updateElement(element.id, (current) =>
                current.type === 'table'
                  ? {
                      ...current,
                      table: {
                        ...current.table,
                        borderWidth: Number.isNaN(value) ? 0 : value,
                      },
                    }
                  : current,
              )
            }}
          />
          <Input
            label="Border color"
            type="color"
            value={toColorInput(element.table.borderColor)}
            onChange={(event) =>
              updateElement(element.id, (current) =>
                current.type === 'table'
                  ? {
                      ...current,
                      table: {
                        ...current.table,
                        borderColor: event.target.value,
                      },
                    }
                  : current,
              )
            }
          />
          <Input
            label="Padding"
            type="number"
            min={0}
            value={element.table.cellPadding}
            onChange={(event) =>
              updateElement(element.id, (current) =>
                current.type === 'table'
                  ? {
                      ...current,
                      table: {
                        ...current.table,
                        cellPadding: Number(event.target.value) || 0,
                      },
                    }
                  : current,
              )
            }
          />
          <Input
            label="Row Spacing"
            type="number"
            min={0}
            value={element.table.rowSpacing}
            onChange={(event) =>
              updateElement(element.id, (current) =>
                current.type === 'table'
                  ? {
                      ...current,
                      table: {
                        ...current.table,
                        rowSpacing: Number(event.target.value) || 0,
                      },
                    }
                  : current,
              )
            }
          />
        </div>
      </section>

      <section className="border-border rounded-[12px] border p-3">
        <SectionTitle icon={<Columns3 className="h-3.5 w-3.5" />} title="Column Management" />
        <div className="mt-3 grid grid-cols-2 gap-2">
          <PanelAction
            icon={<Plus className="h-3.5 w-3.5" />}
            label="Add Column"
            onClick={() =>
              updateElement(
                element.id,
                (current) => (current.type === 'table' ? addTableColumn(current) : current),
                uniqueHistoryKey('add-column', element.id),
              )
            }
          />
          <PanelAction
            icon={<Trash2 className="h-3.5 w-3.5" />}
            label="Delete Column"
            danger
            onClick={() =>
              updateElement(
                element.id,
                (current) => (current.type === 'table' ? deleteTableColumn(current) : current),
                uniqueHistoryKey('delete-column', element.id),
              )
            }
          />
        </div>
      </section>

      <section className="border-border rounded-[12px] border p-3">
        <SectionTitle icon={<Rows3 className="h-3.5 w-3.5" />} title="Row Management" />
        <p className="text-muted mt-1 text-[11px]">Drag a row handle on the canvas to reorder rows.</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <PanelAction
            icon={<Plus className="h-3.5 w-3.5" />}
            label="Add Row"
            onClick={() =>
              updateElement(
                element.id,
                (current) => (current.type === 'table' ? addTableRow(current) : current),
                uniqueHistoryKey('add-row', element.id),
              )
            }
          />
          <PanelAction
            icon={<Trash2 className="h-3.5 w-3.5" />}
            label="Delete Row"
            danger
            onClick={() =>
              updateElement(
                element.id,
                (current) => (current.type === 'table' ? deleteTableRow(current) : current),
                uniqueHistoryKey('delete-row', element.id),
              )
            }
          />
        </div>
      </section>

      <section className="border-border rounded-[12px] border p-3">
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
