import { readFileSync } from "node:fs";
import path from "node:path";
import { marked } from "marked";

// Reads a markdown file from the repo's /legal folder at build time and returns
// real HTML. Pages that call this are statically rendered, so curl and
// crawlers that do not run JavaScript see the full text.
export function renderLegalMarkdown(file: string): string {
  const md = readFileSync(path.join(process.cwd(), "legal", file), "utf8");
  return marked.parse(md, { gfm: true, async: false }) as string;
}
