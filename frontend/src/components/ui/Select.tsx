'use client'

import { cn } from '@/lib/cn'
import { createPortal } from 'react-dom'
import { Check, ChevronDown } from 'lucide-react'
import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'

export interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  value: string
  options: SelectOption[]
  onChange: (value: string) => void
  label?: string
  disabled?: boolean
}

interface MenuBox {
  left: number
  width: number
  top?: number
  bottom?: number
  maxHeight: number
}

const MAX_LIST_HEIGHT = 240
const MENU_GAP = 4
const VIEWPORT_EDGE = 12

export function Select({ value, options, onChange, label, disabled = false }: SelectProps) {
  const listboxId = useId()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [menuBox, setMenuBox] = useState<MenuBox | null>(null)

  const selectedIndex = options.findIndex((option) => option.value === value)
  const selected = selectedIndex >= 0 ? options[selectedIndex] : undefined
  const displayLabel = selected?.label ?? value

  const placeMenu = () => {
    const node = triggerRef.current
    if (!node) {
      return
    }

    const rect = node.getBoundingClientRect()
    const spaceBelow = window.innerHeight - rect.bottom - MENU_GAP - VIEWPORT_EDGE
    const spaceAbove = rect.top - MENU_GAP - VIEWPORT_EDGE
    const openUp = spaceBelow < MAX_LIST_HEIGHT && spaceAbove > spaceBelow

    setMenuBox({
      left: rect.left,
      width: rect.width,
      top: openUp ? undefined : rect.bottom + MENU_GAP,
      bottom: openUp ? window.innerHeight - rect.top + MENU_GAP : undefined,
      maxHeight: Math.min(MAX_LIST_HEIGHT, Math.max(96, openUp ? spaceAbove : spaceBelow)),
    })
  }

  const openMenu = () => {
    if (disabled) {
      return
    }

    setActiveIndex(selectedIndex < 0 ? 0 : selectedIndex)
    placeMenu()
    setOpen(true)
  }

  const commit = (index: number) => {
    const option = options[index]
    if (option && option.value !== value) {
      onChange(option.value)
    }

    setOpen(false)
    triggerRef.current?.focus()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) {
      return
    }

    if (!open) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        openMenu()
      }

      return
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      const step = event.key === 'ArrowDown' ? 1 : -1
      setActiveIndex((current) => Math.min(options.length - 1, Math.max(0, current + step)))
      return
    }

    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault()
      setActiveIndex(event.key === 'Home' ? 0 : options.length - 1)
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      commit(activeIndex)
      return
    }

    if (event.key === 'Escape') {
      event.preventDefault()
      setOpen(false)
      triggerRef.current?.focus()
      return
    }

    if (event.key === 'Tab') {
      setOpen(false)
    }
  }

  useEffect(() => {
    if (!open) {
      return
    }

    const reposition = () => placeMenu()
    window.addEventListener('scroll', reposition, true)
    window.addEventListener('resize', reposition)

    return () => {
      window.removeEventListener('scroll', reposition, true)
      window.removeEventListener('resize', reposition)
    }
  }, [open])

  useEffect(() => {
    if (!open) {
      return
    }

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node
      if (triggerRef.current?.contains(target) || listRef.current?.contains(target)) {
        return
      }

      setOpen(false)
    }

    window.addEventListener('pointerdown', onPointerDown)
    return () => window.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  useEffect(() => {
    if (!open) {
      return
    }

    const node = listRef.current?.children[activeIndex]
    if (node instanceof HTMLElement) {
      node.scrollIntoView({ block: 'nearest' })
    }
  }, [open, activeIndex])

  return (
    <div className="flex flex-col gap-1.5">
      {label ? <span className="text-muted text-[12px] font-medium">{label}</span> : null}
      <button
        ref={triggerRef}
        type="button"
        role="combobox"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listboxId : undefined}
        aria-activedescendant={open ? `${listboxId}-${activeIndex}` : undefined}
        disabled={disabled}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={handleKeyDown}
        className={cn(
          'border-border bg-surface flex h-9 w-full items-center justify-between gap-2 rounded-lg border px-3 text-left text-[13px] transition-colors outline-none',
          disabled
            ? 'bg-surface-muted text-muted cursor-not-allowed'
            : 'hover:border-border-strong focus-visible:border-primary focus-visible:ring-primary/20 cursor-pointer focus-visible:ring-2',
        )}>
        <span className="truncate">{displayLabel || '—'}</span>
        <ChevronDown
          className={cn(
            'h-3.5 w-3.5 shrink-0 transition-transform duration-200',
            open ? 'text-primary rotate-180' : 'text-muted',
          )}
        />
      </button>
      {open && menuBox
        ? createPortal(
            <ul
              ref={listRef}
              id={listboxId}
              role="listbox"
              aria-label={label}
              className="select-pop border-border bg-surface fixed z-50 overflow-y-auto rounded-[10px] border p-1 shadow-xl"
              style={{
                left: menuBox.left,
                width: menuBox.width,
                top: menuBox.top,
                bottom: menuBox.bottom,
                maxHeight: menuBox.maxHeight,
              }}>
              {options.map((option, index) => {
                const isSelected = option.value === value
                const isActive = index === activeIndex

                return (
                  <li
                    key={option.value}
                    id={`${listboxId}-${index}`}
                    role="option"
                    aria-selected={isSelected}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => commit(index)}
                    className={cn(
                      'flex cursor-pointer items-center justify-between gap-2 rounded-md px-2.5 py-1.5 text-[13px] transition-colors',
                      isActive ? 'bg-primary/10 text-primary' : 'text-foreground',
                    )}>
                    <span className="truncate">{option.label}</span>
                    {isSelected ? <Check className="h-3.5 w-3.5 shrink-0" /> : null}
                  </li>
                )
              })}
            </ul>,
            document.body,
          )
        : null}
    </div>
  )
}
