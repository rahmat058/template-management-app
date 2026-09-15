import { Router } from "express";
import { healthRouter } from "../modules/health/health.routes";
import { templateRouter } from "../modules/templates/template.routes";

export const apiRouter = Router();

apiRouter.use("/health", healthRouter);
apiRouter.use("/templates", templateRouter);
