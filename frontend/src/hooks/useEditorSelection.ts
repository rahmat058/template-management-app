import { useEditorStore } from '@/store/editor.store'

export function useEditorSelection() {
  return useEditorStore((state) => state.getSelectedElement())
}
