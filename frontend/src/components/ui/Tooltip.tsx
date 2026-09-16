'use client'

import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface TooltipProps {
  label: string
  shortcut?: string
  children: ReactNode
  className?: string
}

export function Tooltip({ label, shortcut, children, className }: TooltipProps) {
  return (
    <span className={cn('group relative inline-flex', className)}>
      {children}
      <span className="bg-foreground pointer-events-none absolute top-full left-1/2 z-50 mt-2 -translate-x-1/2 rounded-[6px] px-2 py-1 text-[11px] whitespace-nowrap text-white opacity-0 shadow-sm transition-opacity group-focus-within:opacity-100 group-hover:opacity-100">
        {label}
        {shortcut ? <span className="ml-1.5 text-white/70">{shortcut}</span> : null}
      </span>
    </span>
  )
}
