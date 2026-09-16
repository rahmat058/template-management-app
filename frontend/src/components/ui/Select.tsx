'use client'

import { forwardRef, type SelectHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, label, children, ...props },
  ref,
) {
  return (
    <label className="flex flex-col gap-1.5">
      {label ? <span className="text-muted text-[12px] font-medium">{label}</span> : null}
      <select
        ref={ref}
        className={cn(
          'border-border bg-surface text-foreground focus:border-primary focus:ring-primary/20 h-9 w-full rounded-[8px] border px-3 text-[13px] transition-colors outline-none focus:ring-2',
          className,
        )}
        {...props}>
        {children}
      </select>
    </label>
  )
})
