import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  distDir: ".next",
  // Keep tracing/dev output inside this package. The parent git root would
  // otherwise make Next create a nested frontend/frontend folder.
  outputFileTracingRoot: projectRoot,
  serverExternalPackages: ["@react-pdf/renderer"],
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
