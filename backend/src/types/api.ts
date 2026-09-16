export interface ApiErrorBody {
  message: string
  code: string
  details?: unknown
}

export interface ApiSuccess<T> {
  success: true
  data: T
}

export interface ApiErrorResponse {
  success: false
  error: ApiErrorBody
}

export interface HealthStatus {
  status: 'ok' | 'degraded'
  service: string
  timestamp: string
  database: 'connected' | 'disconnected'
}
