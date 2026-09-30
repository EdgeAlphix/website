import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

const routes = ["", "about", "infrastructure", "services", "projects", "privacy-policy", "terms-and-conditions"];
for (const route of routes) {
  const filename = route ? `${route}.html` : "index.html";
  const html = await readFile(resolve("static", filename), "utf8");
  assert.match(html, /EdgeAlphix/i, filename);
  assert.match(html, /<main\b/, filename);
  if (["", "about", "projects"].includes(route)) {
    assert.match(html, /https:\/\/digitalplat\.one\//, filename);
  }
}
assert.equal((await readFile(resolve("static", "CNAME"), "utf8")).trim(), "edgealphix.com");
assert.equal(await readFile(resolve("static", ".source-build-id"), "utf8"), await readFile(resolve(".next", "BUILD_ID"), "utf8"));
await stat(resolve("static", ".nojekyll"));
await stat(resolve("static", "sitemap.xml"));
await stat(resolve("static", "robots.txt"));
console.log("Static site checks passed.");
