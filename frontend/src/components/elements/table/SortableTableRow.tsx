'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical } from 'lucide-react'
import type { TableCell, TableRow } from '@/types/element'
import { TableCellEditor } from '@/components/elements/table/TableCellEditor'
import { scaleDragTransform } from '@/lib/dnd-transform'
import { useHasMounted } from '@/hooks/useHasMounted'
import { useUiStore } from '@/store/ui.store'

interface TableRowViewProps {
  row: TableRow
  interactive: boolean
  isIndexed: boolean
  cellPadding: number
  onFocus?: () => void
  onCellChange: (cellId: string, value: string) => void
}

export function SortableTableRow({
  row,
  interactive,
  isIndexed,
  cellPadding,
  onFocus,
  onCellChange,
}: TableRowViewProps) {
  const zoom = useUiStore((state) => state.zoom)
  const mounted = useHasMounted()
  const { listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: row.id,
    disabled: !interactive,
  })

  return (
    <tr
      ref={setNodeRef}
      style={{
        transform: CSS.Translate.toString(scaleDragTransform(transform, zoom)),
        transition,
        opacity: isDragging ? 0.65 : 1,
      }}>
      {interactive ? (
        <td className="w-6 pr-1 align-middle text-[#94A3B8]">
          <span
            role="button"
            tabIndex={0}
            aria-label="Reorder row"
            suppressHydrationWarning
            className="flex cursor-grab items-center active:cursor-grabbing"
            {...(mounted ? listeners : undefined)}
            onClick={(event) => event.stopPropagation()}>
            <GripVertical className="h-3.5 w-3.5" />
          </span>
        </td>
      ) : null}
      {row.cells.map((cell, index) => (
        <TableBodyCell
          key={cell.id}
          cell={cell}
          index={index}
          interactive={interactive}
          isIndexed={isIndexed}
          cellPadding={cellPadding}
          onFocus={onFocus}
          onChange={(value) => onCellChange(cell.id, value)}
        />
      ))}
    </tr>
  )
}

export function StaticTableRow({
  row,
  isIndexed,
  cellPadding,
}: Omit<TableRowViewProps, 'interactive' | 'onCellChange' | 'onFocus'>) {
  return (
    <tr>
      {row.cells.map((cell, index) => (
        <TableBodyCell
          key={cell.id}
          cell={cell}
          index={index}
          interactive={false}
          isIndexed={isIndexed}
          cellPadding={cellPadding}
          onChange={() => undefined}
        />
      ))}
    </tr>
  )
}

function TableBodyCell({
  cell,
  index,
  interactive,
  isIndexed,
  cellPadding,
  onFocus,
  onChange,
}: {
  cell: TableCell
  index: number
  interactive: boolean
  isIndexed: boolean
  cellPadding: number
  onFocus?: () => void
  onChange: (value: string) => void
}) {
  const isItemDetail = isIndexed && index === 1
  const isIndexCell = isIndexed && index === 0
  const isNumeric = isIndexed && index > 1

  return (
    <td
      className="align-middle"
      style={{
        padding: isItemDetail ? '0 4px' : `2px ${Math.max(4, cellPadding / 2)}px`,
      }}>
      <TableCellEditor
        value={cell.value}
        interactive={interactive}
        isItemDetail={isItemDetail}
        isIndexCell={isIndexCell}
        isNumeric={isNumeric}
        onFocus={onFocus}
        onChange={onChange}
      />
    </td>
  )
}
