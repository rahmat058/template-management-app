'use client'

import { useEffect, type ReactNode } from 'react'
import { Button } from '@/components/ui/Button'

interface ModalProps {
  open: boolean
  title: string
  children: ReactNode
  confirmLabel?: string
  cancelLabel?: string
  danger?: boolean
  confirmLoading?: boolean
  onConfirm?: () => void
  onClose: () => void
}

export function Modal({
  open,
  title,
  children,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  danger = false,
  confirmLoading = false,
  onConfirm,
  onClose,
}: ModalProps) {
  useEffect(() => {
    if (!open) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="border-border bg-surface w-full max-w-md rounded-xl border p-5 shadow-xl">
        <h2 id="modal-title" className="text-foreground text-[16px] font-semibold">
          {title}
        </h2>
        <div className="text-muted mt-3 text-[13px]">{children}</div>
        <div className="mt-5 flex justify-end gap-2">
          <Button onClick={onClose}>{cancelLabel}</Button>
          {onConfirm ? (
            <Button variant={danger ? 'danger' : 'primary'} isLoading={confirmLoading} onClick={onConfirm}>
              {confirmLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  )
}
