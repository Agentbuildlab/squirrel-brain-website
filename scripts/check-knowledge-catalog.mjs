// Fails the build if the knowledge catalog drifts from its contract:
// answer-first Q&A of 40 to 60 words, unique stable ids, every feature group present, expertise and why-choose sections.
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const lib = readFileSync(new URL("../lib/knowledge-catalog.ts", import.meta.url), "utf8");
const page = readFileSync(new URL("../app/knowledge/page.tsx", import.meta.url), "utf8");
const answers = [...lib.matchAll(/id: "([^"]+)",\n\s+question: "[^"]+",\n\s+answer: "([^"]+)"/g)];
assert.ok(answers.length >= 14, `knowledge hub needs a Q&A for every feature, got ${answers.length}`);
assert.equal(new Set(answers.map((m) => m[1])).size, answers.length, "Q&A ids must be unique and stable");
for (const [, id, answer] of answers) {
  const words = answer.trim().split(/\s+/).length;
  assert.ok(words >= 40 && words <= 60, `answer ${id} must be 40 to 60 words, got ${words}`);
}
for (const needle of ["Expertise and credentials", "Why choose Squirrel Brain", "Last updated", "catalogGraph()"]) {
  assert.ok(page.includes(needle), `page missing ${needle}`);
}
assert.ok(!existsSync(new URL("../app/for-ai", import.meta.url)), "app/for-ai must be a redirect, not a page");
assert.ok(!existsSync(new URL("../app/knowledge-catalog", import.meta.url)), "app/knowledge-catalog must be a redirect, not a page");
assert.ok(!/aggregateRating|"Review"/.test(lib), "no invented ratings or reviews");
console.log(`Knowledge hub check PASS: ${answers.length} answers, 40-60 words each.`);
