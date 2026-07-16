import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

// Pin the app root so a stray package-lock.json in the home directory
// cannot make Turbopack resolve modules from the wrong workspace.
const root = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root,
  },
  outputFileTracingRoot: root,
};

export default nextConfig;
