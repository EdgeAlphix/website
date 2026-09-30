import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const output = resolve("out");
const target = resolve("static");
await readFile(resolve(output, "index.html"));
await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(output, target, { recursive: true, filter: (source) => source !== resolve(output, "static") });
await writeFile(resolve(target, ".source-build-id"), await readFile(resolve(".next", "BUILD_ID")));
await writeFile(resolve(target, "CNAME"), "edgealphix.com\n");
await writeFile(resolve(target, ".nojekyll"), "");
console.log(`Static export ready: ${target}`);
