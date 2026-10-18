import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { buildIndexNowBody, findIndexNowKey, parseSitemapLocs } from "./indexnow.mjs";

const KEY = "be7badb69f448d0ca56b87bc4358b2d9";

test("reads the 32-character hex key file", () => {
  const dir = mkdtempSync(join(tmpdir(), "indexnow-"));
  writeFileSync(join(dir, `${KEY}.txt`), `${KEY}\n`);
  writeFileSync(join(dir, "llms.txt"), "not a key");
  assert.equal(findIndexNowKey(dir), KEY);
});

test("payload includes every sitemap URL", () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset>
  <url><loc>https://squirrelbrainapp.com/</loc></url>
  <url><loc>https://squirrelbrainapp.com/for-ai</loc></url>
  <url><loc>https://squirrelbrainapp.com/llms.txt</loc></url>
</urlset>`;
  const urls = parseSitemapLocs(xml);
  assert.deepEqual(urls, [
    "https://squirrelbrainapp.com/",
    "https://squirrelbrainapp.com/for-ai",
    "https://squirrelbrainapp.com/llms.txt",
  ]);
  const body = buildIndexNowBody({ key: KEY, urls });
  assert.equal(body.host, "squirrelbrainapp.com");
  assert.equal(body.key, KEY);
  assert.equal(body.keyLocation, `https://squirrelbrainapp.com/${KEY}.txt`);
  assert.deepEqual(body.urlList, urls);
});
