'use client'

import { cn } from '@/lib/cn'
import { ChevronDown } from 'lucide-react'
import { forwardRef, type SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, label, children, ...props },
  ref,
) {
  return (
    <label className="group flex flex-col gap-1.5">
      {label ? <span className="text-muted text-[12px] font-medium">{label}</span> : null}
      <span className="relative block">
        <select
          ref={ref}
          className={cn(
            'peer border-border bg-surface text-foreground hover:border-border-strong focus:border-primary focus:ring-primary/20 disabled:bg-surface-muted disabled:text-muted h-9 w-full cursor-pointer appearance-none rounded-lg border pr-8 pl-3 text-[13px] transition-colors outline-none focus:ring-2 disabled:cursor-not-allowed',
            className,
          )}
          {...props}>
          {children}
        </select>
        <ChevronDown className="text-muted group-hover:text-foreground group-focus-within:text-primary pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 transition-transform duration-200 peer-open:rotate-180" />
      </span>
    </label>
  )
})
