'use client'

import { memo } from 'react'
import type { ShapeElement as ShapeElementModel } from '@/types/element'

interface ShapeElementProps {
  element: ShapeElementModel
}

export const ShapeElement = memo(function ShapeElement({ element }: ShapeElementProps) {
  const { shape } = element

  if (shape.kind === 'line') {
    return (
      <div className="flex h-full w-full items-center">
        <div
          className="w-full"
          style={{
            height: Math.max(1, shape.borderWidth || 2),
            background: shape.borderColor || shape.fill,
            borderRadius: shape.borderRadius,
          }}
        />
      </div>
    )
  }

  if (shape.kind === 'circle') {
    return (
      <div
        className="h-full w-full"
        style={{
          background: shape.fill,
          border: `${shape.borderWidth}px solid ${shape.borderColor}`,
          borderRadius: '999px',
        }}
      />
    )
  }

  return (
    <div
      className="h-full w-full"
      style={{
        background: shape.fill,
        border: `${shape.borderWidth}px solid ${shape.borderColor}`,
        borderRadius: shape.borderRadius,
      }}
    />
  )
})
