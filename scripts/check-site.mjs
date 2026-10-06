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
  if (["", "projects"].includes(route)) {
    for (const project of ["EdgeOS", "EdgeTerm", "EdgeIoT"]) assert.match(html, new RegExp(project), filename);
    assert.match(html, /https:\/\/github\.com\/EdgeOS-Project\/kernel/, filename);
    assert.match(html, /https:\/\/github\.com\/EdwardLab\/EdgeTerm/, filename);
  }
}
assert.match(await readFile(resolve("static", "projects.html"), "utf8"), /id="edgeiot"/);
assert.match(await readFile(resolve("static", "projects.html"), "utf8"), /id="initd"/);
const home = await readFile(resolve("static", "index.html"), "utf8");
assert.match(home, /We build products and/);
assert.match(home, /class="focus-grid"/);
assert.ok(home.indexOf('id="digitalplat-one"') < home.indexOf('id="open-source"'));
assert.equal((await readFile(resolve("static", "CNAME"), "utf8")).trim(), "edgealphix.com");
assert.equal(await readFile(resolve("static", ".source-build-id"), "utf8"), await readFile(resolve(".next", "BUILD_ID"), "utf8"));
await stat(resolve("static", ".nojekyll"));
await stat(resolve("static", "sitemap.xml"));
await stat(resolve("static", "robots.txt"));
console.log("Static site checks passed.");
