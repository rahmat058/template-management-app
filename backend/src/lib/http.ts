import type { Response } from "express";
import httpStatus from "http-status";

export function sendSuccess<T>(
  res: Response,
  data: T,
  statusCode: number = httpStatus.OK,
): void {
  res.status(statusCode).json({ data });
}

export function sendNoContent(res: Response): void {
  res.status(httpStatus.NO_CONTENT).send();
}
