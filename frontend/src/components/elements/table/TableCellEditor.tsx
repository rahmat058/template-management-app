'use client'

import { cn } from '@/lib/cn'

interface TableCellEditorProps {
  value: string
  interactive: boolean
  isItemDetail?: boolean
  isIndexCell?: boolean
  isNumeric?: boolean
  onFocus?: () => void
  onChange: (value: string) => void
}

export function TableCellEditor({
  value,
  interactive,
  isItemDetail = false,
  isIndexCell = false,
  isNumeric = false,
  onFocus,
  onChange,
}: TableCellEditorProps) {
  if (!interactive) {
    return (
      <div
        className={cn(
          'text-foreground flex min-h-[34px] items-center text-[12px]',
          isItemDetail && Boolean(value) && 'w-fit rounded-full bg-[#F1F6FF] px-3 font-medium text-slate-700',
          isIndexCell && 'text-muted justify-center font-semibold',
          isNumeric && 'justify-end text-slate-600',
        )}>
        {value}
      </div>
    )
  }

  return (
    <input
      data-no-dnd="true"
      value={value}
      aria-label="Table cell"
      onFocus={onFocus}
      onClick={(event) => event.stopPropagation()}
      onChange={(event) => onChange(event.target.value)}
      className={cn(
        'text-foreground min-h-[34px] w-full bg-transparent text-[12px] outline-none',
        isItemDetail && 'rounded-full bg-[#F1F6FF] px-3 font-medium text-slate-700',
        isIndexCell && 'text-muted text-center font-semibold',
        isNumeric && 'text-right text-slate-600',
      )}
    />
  )
}
