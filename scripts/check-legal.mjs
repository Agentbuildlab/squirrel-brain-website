// Build guard for the public legal pages. Runs before `next build`.
//
// The OpenAI Zero Data Retention wording is a public promise. It must be
// reverted or corrected THE SAME DAY if: the agreement is withdrawn or ZDR is
// switched off, an AI provider is added or removed, or what the app sends to a
// provider changes. Keep it identical to the app's built-in policy
// (squirrel-brain: assets/legal.json), same date and version.
import { readFileSync } from "node:fs";

const FILES = ["privacy-policy-final.md", "terms-of-use-final.md"];

// Sentences that must stay exactly as approved (Adam, 2026-10-07).
const REQUIRED = {
  "privacy-policy-final.md": [
    "Acorn Labs LLC has a Zero Data Retention agreement with OpenAI. OpenAI does not store the content described above in its logs and does not use it to train its models.",
    "Audio replies may be held for up to one hour to keep a conversation going, and OpenAI may retain content where the law requires or to investigate severe misuse of its services.",
    "Squirrel Brain does not send your photos or images to OpenAI.",
    "This agreement covers OpenAI only; the other AI providers described below handle content under their own terms.",
  ],
  "terms-of-use-final.md": [
    "For OpenAI, Acorn Labs also has a Zero Data Retention agreement: OpenAI does not store your voice or call content in its logs.",
    "OpenAI may retain content where the law requires or to investigate severe misuse of its services. This agreement covers OpenAI only.",
  ],
};

// Old or over-strong wording that must not come back.
const BANNED = [
  "abuse-monitoring",
  "limited window",
  "up to 30 days",
  "does not promise Zero Data Retention",
  "never stored anywhere",
  "instantly deleted",
  "nothing is sent to OpenAI",
  "xAI's Grok vision",
];

const errors = [];
for (const file of FILES) {
  const source = readFileSync(`legal/${file}`, "utf8");
  const served = readFileSync(`public/legal/${file}`, "utf8");
  if (source !== served) errors.push(`${file}: legal/ and public/legal/ copies differ`);
  for (const sentence of REQUIRED[file]) {
    if (!source.includes(sentence)) errors.push(`${file}: missing approved sentence: "${sentence.slice(0, 70)}..."`);
  }
  const lower = source.toLowerCase();
  for (const phrase of BANNED) {
    if (lower.includes(phrase.toLowerCase())) errors.push(`${file}: banned phrase present: "${phrase}"`);
  }
}

if (errors.length) {
  console.error("Legal wording check failed:\n- " + errors.join("\n- "));
  process.exit(1);
}
console.log("Legal wording check passed.");
