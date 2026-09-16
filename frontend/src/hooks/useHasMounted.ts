'use client'

import { useSyncExternalStore } from 'react'

function subscribe(): () => void {
  return () => undefined
}

export function useHasMounted(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )
}
