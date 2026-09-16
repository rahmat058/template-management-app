import type { ApiErrorResponse, ApiSuccess, HealthStatus } from '@/types/api'
import type { CreateTemplateInput, Template, TemplateSummary, UpdateTemplateInput } from '@/types/template'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api'

export class ApiClientError extends Error {
  readonly status: number
  readonly code: string
  readonly details?: unknown

  constructor(message: string, status: number, code = 'REQUEST_FAILED', details?: unknown) {
    super(message)
    this.name = 'ApiClientError'
    this.status = status
    this.code = code
    this.details = details
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function isApiErrorResponse(value: unknown): value is ApiErrorResponse {
  if (!isRecord(value) || value.success !== false || !isRecord(value.error)) {
    return false
  }

  return typeof value.error.message === 'string'
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
  })

  if (response.status === 204) {
    return undefined as T
  }

  const payload: unknown = await response.json().catch(() => null)

  if (!response.ok) {
    if (isApiErrorResponse(payload)) {
      throw new ApiClientError(payload.error.message, response.status, payload.error.code, payload.error.details)
    }

    throw new ApiClientError('Request failed', response.status)
  }

  if (!isRecord(payload) || payload.success !== true) {
    throw new ApiClientError('Malformed response', response.status)
  }

  return (payload as unknown as ApiSuccess<T>).data
}

export const api = {
  getHealth: () => request<HealthStatus>('/health'),
  listTemplates: () => request<TemplateSummary[]>('/templates'),
  getTemplate: (id: string) => request<Template>(`/templates/${id}`),
  getTemplateByName: async (name: string): Promise<Template | null> => {
    try {
      return await request<Template>(`/templates/by-name/${encodeURIComponent(name)}`)
    } catch (error) {
      if (error instanceof ApiClientError && error.status === 404) {
        return null
      }

      throw error
    }
  },
  createTemplate: (input: CreateTemplateInput) =>
    request<Template>('/templates', {
      method: 'POST',
      body: JSON.stringify(input),
    }),
  updateTemplate: (id: string, input: UpdateTemplateInput) =>
    request<Template>(`/templates/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(input),
    }),
  deleteTemplate: (id: string) =>
    request<void>(`/templates/${id}`, {
      method: 'DELETE',
    }),
}
