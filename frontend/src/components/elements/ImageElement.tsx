'use client'

import { memo } from 'react'
import type { ImageElement as ImageElementModel } from '@/types/element'
import { isCompanyLogo } from '@/lib/company-logo'
import { cn } from '@/lib/cn'

interface ImageElementProps {
  element: ImageElementModel
}

export const ImageElement = memo(function ImageElement({ element }: ImageElementProps) {
  if (!element.image.src) {
    return (
      <div className="border-border-strong bg-surface-muted text-muted flex h-full w-full items-center justify-center rounded-[8px] border border-dashed text-[12px]">
        {element.image.alt || 'Image placeholder'}
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      key={element.image.src}
      src={element.image.src}
      alt={element.image.alt ?? ''}
      className={cn('h-full w-full', isCompanyLogo(element.id) && 'rounded-[12px]')}
      style={{ objectFit: element.image.objectFit }}
    />
  )
})
