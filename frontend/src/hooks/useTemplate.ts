import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/api'
import { templateKeys } from '@/lib/query-keys'

export function useTemplate(templateId: string | null) {
  return useQuery({
    queryKey: templateKeys.detail(templateId ?? 'unknown'),
    queryFn: () => {
      if (!templateId) {
        throw new Error('Template id is required')
      }

      return api.getTemplate(templateId)
    },
    enabled: Boolean(templateId),
  })
}
