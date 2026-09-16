'use client'

import { memo } from 'react'
import { closestCenter, DndContext, type DragEndEvent, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Plus } from 'lucide-react'
import type { TableElement as TableElementModel } from '@/types/element'
import { TableCellEditor } from '@/components/elements/table/TableCellEditor'
import { SortableTableRow, StaticTableRow } from '@/components/elements/table/SortableTableRow'
import { TableToolbar } from '@/components/elements/table/TableToolbar'
import { columnWidth, isIndexedTable } from '@/components/elements/table/table-layout'
import { cn } from '@/lib/cn'
import { EditorPointerSensor } from '@/lib/dnd-sensors'
import type { DragHandleProps } from '@/lib/drag-handle'
import {
  addTableColumn,
  addTableRow,
  deleteTableColumn,
  hasTableHeader,
  reorderTableRows,
  updateTableCell,
} from '@/lib/document-utils'
import { uniqueHistoryKey } from '@/lib/editor-history'
import { useEditorStore } from '@/store/editor.store'

interface TableElementProps {
  element: TableElementModel
  interactive: boolean
  selected: boolean
  dragHandleProps?: DragHandleProps
}

export const TableElement = memo(function TableElement({
  element,
  interactive,
  selected,
  dragHandleProps,
}: TableElementProps) {
  const { table } = element
  const headerRow = table.rows[0]
  const dataRows = hasTableHeader(element) ? table.rows.slice(1) : table.rows
  const isIndexed = isIndexedTable(headerRow?.cells[0]?.value)
  const sensors = useSensors(useSensor(EditorPointerSensor, { activationConstraint: { distance: 4 } }))

  const mutate = (updater: (current: TableElementModel) => TableElementModel, historyKey?: string) => {
    useEditorStore.getState().selectElement(element.id)
    useEditorStore
      .getState()
      .updateElement(element.id, (current) => (current.type === 'table' ? updater(current) : current), historyKey)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) {
      return
    }

    mutate(
      (current) => reorderTableRows(current, String(active.id), String(over.id)),
      uniqueHistoryKey('reorder-row', element.id),
    )
  }

  const selectTable = () => {
    useEditorStore.getState().selectElement(element.id)
  }

  const tableNode = (
    <table
      className="w-full table-fixed border-separate text-left"
      style={{ borderSpacing: `0 ${table.rowSpacing}px` }}>
      <colgroup>
        {interactive ? <col className="w-6" /> : null}
        {Array.from({ length: table.columns }, (_, index) => (
          <col key={index} style={{ width: columnWidth(index, table.columns, isIndexed) }} />
        ))}
      </colgroup>
      {headerRow && hasTableHeader(element) ? (
        <thead>
          <tr>
            {interactive ? <th className="w-6 p-0" /> : null}
            {headerRow.cells.map((cell, index) => (
              <th
                key={cell.id}
                className={cn(
                  'text-muted pb-1 text-[11px] font-semibold',
                  isIndexed && index === 0 && 'text-center',
                  isIndexed && index > 1 && 'text-right',
                )}
                style={{ padding: `0 ${Math.max(4, table.cellPadding / 2)}px` }}>
                <TableCellEditor
                  value={cell.value}
                  interactive={interactive}
                  isIndexCell={isIndexed && index === 0}
                  isNumeric={isIndexed && index > 1}
                  onFocus={selectTable}
                  onChange={(value) => mutate((current) => updateTableCell(current, headerRow.id, cell.id, value))}
                />
              </th>
            ))}
          </tr>
        </thead>
      ) : null}
      <tbody>
        {dataRows.map((row) =>
          interactive ? (
            <SortableTableRow
              key={row.id}
              row={row}
              interactive
              isIndexed={isIndexed}
              cellPadding={table.cellPadding}
              onFocus={selectTable}
              onCellChange={(cellId, value) => mutate((current) => updateTableCell(current, row.id, cellId, value))}
            />
          ) : (
            <StaticTableRow key={row.id} row={row} isIndexed={isIndexed} cellPadding={table.cellPadding} />
          ),
        )}
      </tbody>
    </table>
  )

  return (
    <div
      className={cn(
        'flex h-full w-full flex-col overflow-hidden rounded-[16px] border bg-white p-3',
        selected && interactive ? 'border-primary/30' : 'border-[#D7E6F8]',
      )}
      style={
        table.borderWidth > 0
          ? {
              borderWidth: table.borderWidth,
              borderColor: table.borderColor,
            }
          : undefined
      }>
      <TableToolbar
        interactive={interactive}
        dragHandleProps={interactive ? dragHandleProps : undefined}
        onAddColumn={() => mutate(addTableColumn, uniqueHistoryKey('add-column', element.id))}
        onDeleteColumn={() => mutate(deleteTableColumn, uniqueHistoryKey('delete-column', element.id))}
      />

      <div className="min-h-0 flex-1 overflow-auto">
        {interactive ? (
          <DndContext sensors={sensors} collisionDetection={closestCenter} autoScroll={false} onDragEnd={handleDragEnd}>
            <SortableContext items={dataRows.map((row) => row.id)} strategy={verticalListSortingStrategy}>
              {tableNode}
            </SortableContext>
          </DndContext>
        ) : (
          tableNode
        )}
      </div>

      {interactive ? (
        <button
          type="button"
          data-no-dnd="true"
          className="text-primary hover:bg-primary/5 mt-2 inline-flex h-8 items-center justify-center gap-1 self-start rounded-full px-2 text-[12px] font-semibold"
          onClick={(event) => {
            event.stopPropagation()
            mutate(addTableRow, uniqueHistoryKey('add-row', element.id))
          }}>
          <Plus className="h-3.5 w-3.5" />
          Add Row
        </button>
      ) : null}
    </div>
  )
})
