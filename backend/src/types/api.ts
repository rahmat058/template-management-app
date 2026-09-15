export interface ApiErrorBody {
  message: string;
  code: string;
  details?: unknown;
}

export interface ApiSuccess<T> {
  data: T;
}

export interface HealthStatus {
  status: "ok" | "degraded";
  service: string;
  timestamp: string;
  database: "connected" | "disconnected";
}
