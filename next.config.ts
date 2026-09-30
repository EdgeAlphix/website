import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const hash = createHash("sha256");
function addSources(directory: string) {
  for (const entry of readdirSync(directory, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) addSources(path);
    else if (entry.isFile()) {
      hash.update(path);
      hash.update(readFileSync(path));
    }
  }
}
for (const directory of ["app", "components", "content", "lib", "public"]) addSources(directory);
for (const file of ["next.config.ts", "package.json", "package-lock.json", "postcss.config.mjs", "tsconfig.json"]) {
  hash.update(file);
  hash.update(readFileSync(file));
}
const buildId = hash.digest("hex").slice(0, 20);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  generateBuildId: async () => buildId,
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
