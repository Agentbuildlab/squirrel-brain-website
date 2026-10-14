// Submit every URL in the live sitemap to IndexNow.
//
// The key file is public/<key>.txt (already hosted at /<key>.txt). IndexNow
// checks that https://<host>/<key>.txt contains the key before accepting the
// ping, so run this after the production deploy is live:
//
//   npm run indexnow
//
// --dry-run prints the payload and does not call the API.

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const DEFAULT_SITEMAP = "https://squirrelbrainapp.com/sitemap.xml";

export function findIndexNowKey(publicDir) {
  const names = readdirSync(publicDir).filter((name) => /^[a-f0-9]{32}\.txt$/.test(name));
  if (names.length !== 1) {
    throw new Error(
      `Expected exactly one 32-character hex key file in ${publicDir}, found ${names.length}: ${names.join(", ")}`
    );
  }
  const key = names[0].slice(0, -4);
  const body = readFileSync(join(publicDir, names[0]), "utf8").trim();
  if (body !== key) {
    throw new Error(`Key file ${names[0]} must contain exactly the key`);
  }
  return key;
}

export function parseSitemapLocs(xml) {
  const locs = [];
  const re = /<loc>\s*([^<\s]+)\s*<\/loc>/g;
  let match;
  while ((match = re.exec(xml))) locs.push(match[1]);
  return locs;
}

export function buildIndexNowBody({ key, urls }) {
  if (!urls.length) throw new Error("Sitemap contained no <loc> URLs");
  let host;
  try {
    host = new URL(urls[0]).host;
  } catch {
    throw new Error(`Sitemap URL is not absolute: ${urls[0]}`);
  }
  for (const url of urls) {
    const parsed = new URL(url);
    if (parsed.host !== host) {
      throw new Error(`Sitemap mixes hosts (${host} and ${parsed.host})`);
    }
  }
  return {
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: urls,
  };
}

async function main() {
  const dryRun = process.argv.includes("--dry-run");
  const sitemapUrl = process.env.INDEXNOW_SITEMAP || DEFAULT_SITEMAP;
  const key = findIndexNowKey(join(process.cwd(), "public"));
  const response = await fetch(sitemapUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap ${sitemapUrl}: HTTP ${response.status}`);
  }
  const urls = parseSitemapLocs(await response.text());
  const body = buildIndexNowBody({ key, urls });
  if (dryRun) {
    console.log(JSON.stringify({ endpoint: INDEXNOW_ENDPOINT, ...body }, null, 2));
    return;
  }
  const ping = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  const text = await ping.text();
  console.log(
    `IndexNow ${ping.status} for ${body.urlList.length} URLs on ${body.host} (key ${key})`
  );
  if (text) console.log(text);
  if (ping.status !== 200 && ping.status !== 202) {
    process.exitCode = 1;
  }
}

const isMain =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;

if (isMain) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
