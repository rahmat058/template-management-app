'use client'

import { cn } from '@/lib/cn'
import { forwardRef, type InputHTMLAttributes } from 'react'

interface ColorInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value'> {
  label?: string
  value: string
}

export const ColorInput = forwardRef<HTMLInputElement, ColorInputProps>(function ColorInput(
  { label, value, className, disabled, ...props },
  ref,
) {
  return (
    <label className="flex flex-col gap-1.5">
      {label ? <span className="text-muted text-[12px] font-medium">{label}</span> : null}
      <span
        className={cn(
          'border-border focus-within:border-primary flex h-9 items-center gap-2 rounded-lg border px-2 transition-colors',
          disabled
            ? 'bg-surface-muted cursor-not-allowed'
            : 'hover:border-border-strong hover:bg-surface-muted cursor-pointer',
        )}>
        <input
          ref={ref}
          type="color"
          value={value}
          disabled={disabled}
          className={cn(
            'h-5 w-5 shrink-0 rounded-sm border-0 bg-transparent p-0 transition-transform duration-150',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-110 focus-visible:scale-110',
            className,
          )}
          {...props}
        />
        <span className={cn('truncate text-[12px]', disabled ? 'text-muted' : 'text-foreground')}>{value}</span>
      </span>
    </label>
  )
})
