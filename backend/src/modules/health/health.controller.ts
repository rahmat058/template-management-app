import type { Request, Response } from "express";
import type { HealthStatus } from "../../types/api";
import { isDatabaseConnected } from "../../config/db";
import { asyncHandler } from "../../lib/async-handler";
import { sendSuccess } from "../../lib/http";

export const getHealth = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    const databaseConnected = isDatabaseConnected();

    const payload: HealthStatus = {
      status: databaseConnected ? "ok" : "degraded",
      service: "template-management-api",
      timestamp: new Date().toISOString(),
      database: databaseConnected ? "connected" : "disconnected",
    };

    sendSuccess(res, payload, databaseConnected ? 200 : 503);
  },
);
