import type { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import mongoose from "mongoose";
import { ZodError } from "zod";
import { isProduction } from "../config/env";
import { AppError } from "../lib/app-error";

export function errorHandler(
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      error: {
        message: error.message,
        code: error.code,
        details: error.details,
      },
    });
    return;
  }

  if (error instanceof ZodError) {
    res.status(httpStatus.BAD_REQUEST).json({
      error: {
        message: "Request validation failed",
        code: "VALIDATION_ERROR",
        details: error.issues,
      },
    });
    return;
  }

  if (error instanceof mongoose.Error.CastError) {
    res.status(httpStatus.BAD_REQUEST).json({
      error: {
        message: "Invalid identifier",
        code: "INVALID_ID",
        details: { path: error.path },
      },
    });
    return;
  }

  if (error instanceof mongoose.Error.ValidationError) {
    res.status(httpStatus.BAD_REQUEST).json({
      error: {
        message: "Database validation failed",
        code: "DB_VALIDATION_ERROR",
        details: error.errors,
      },
    });
    return;
  }

  const mongoError = error as { code?: number };
  if (mongoError.code === 11000) {
    res.status(httpStatus.CONFLICT).json({
      error: {
        message: "A template with this name already exists",
        code: "DUPLICATE_KEY",
      },
    });
    return;
  }

  const message =
    error instanceof Error ? error.message : "Unexpected server error";

  console.error(error);

  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    error: {
      message: isProduction ? "Internal server error" : message,
      code: "INTERNAL_ERROR",
    },
  });
}
