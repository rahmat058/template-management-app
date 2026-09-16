import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export function PanelAction({
  icon,
  label,
  onClick,
  danger = false,
}: {
  icon: ReactNode
  label: string
  onClick: () => void
  danger?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex h-9 w-full items-center justify-center gap-2 rounded-[8px] border px-3 text-[12px] font-medium whitespace-nowrap',
        danger
          ? 'border-border text-muted hover:border-danger hover:text-danger'
          : 'border-primary/20 bg-primary/5 text-primary hover:bg-primary/10',
      )}>
      {icon}
      {label}
    </button>
  )
}
