import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

/**
 * Renders a Markdown file from /content at build/request time on the server,
 * so the HTML is crawlable without JavaScript. Source files are first-party
 * (committed in this repo), never user input.
 */
export function renderContentMarkdown(relativePath: string): string {
  const file = path.join(process.cwd(), "content", relativePath);
  const source = fs.readFileSync(file, "utf8");
  return marked.parse(source, { async: false, gfm: true }) as string;
}
