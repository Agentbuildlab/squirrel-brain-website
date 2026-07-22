# SESSION_LOG

> Append-only checkpoints. One line per meaningful step or heartbeat.
> Format: [time?] active-task | last step | next step | blocker | queue count | new user input?

- (session start) — state initialized
## 2026-07-07 — de-AI + accuracy pass (Fable conductor / headless Opus landing)
- Task: strip ChatGPT-connect overclaims site-wide; concentrate AI on /mcp; homepage FAQ product-first; mobile launch review.
- Edits landed via headless claude -p (Opus) from spec: scratchpad/website-deai-spec.md (13 files, 140+/64-).
- Gates: tsc clean; next build green; rendered-HTML grep: 0 connect-ChatGPT claims; mobile preview pass (home, /mcp, /work, can-chatgpt page) clean.
- /mcp CallDemoSection switched to 'agents' voice (mcppage MP3 names ChatGPT — re-render queued, entry comment-flagged).
- Pending at this log line: code-guardian verdict → commit (excluding docs/SITE_SPEC.md) → push → vercel --prod → live verify.
- 2026-07-07 21:15:52 — task ____none_yet_ archived to history/20260707-211552_____none_yet_; active slot reset.
task=mcppage-voice-fix status=in-progress 2026-07-07 21:30:14 — registered
2026-07-07 21:36:17 — mp3 rendered+verified (whisper round-trip, live /mcp playback), TS edits landed via headless Opus, tsc 0, build 0; guardian review in flight
2026-07-07 21:38:39 — committed 7a95c43 (3 files only); guardian PASS; task complete
- 2026-07-07 21:38:39 — task ___mcppage-voice-fix archived to history/20260707-213839____mcppage-voice-fix; active slot reset.
2026-07-07 21:48:55 — Adam: deploy to Vercel prod. Pushed v2-rebuild (7a95c43 + 0385ba8 from spawned docs task) → npx vercel --prod: Ready; verified prod mp3 200/122925 bytes + /mcp corrected transcript live.
## 2026-07-22 — Organic-growth pass (Adam: free channels only, agent lane priority)
- MCP registry: com.squirrelbrainapp/squirrel-brain ALREADY active in official registry (since 06-30). NOT on PulseMCP/Glama/mcp.so; PulseMCP fix = email hello@pulsemcp.com (draft handed to Adam; >1wk since registry publish).
- SEO shipped (952ed52, deployed): ai-agent-reminder-app retitled for exact query "AI reminder agent" + definitional FAQ; NEW /talking-reminder-app page (GSC-shown queries "talking/verbal reminder" had zero coverage); footer/related/llms.txt cross-links; IndexNow ping 200 (all URLs, existing key).
- GSC ground truth: sitemap healthy (22 disc.), but only 5 pages INDEXED / 17 not — the real search bottleneck. Requested indexing: /talking-reminder-app (new) + /ai-agent-reminder-app (recrawl). Follow-up: batch-request remaining 17 (quota ~10/day).
- Search perf 3mo: 76 impressions / 1 click / pos 24.4, impressions rising since 07-14; queries: ai reminder agent (6), talking/verbal reminder, squirrel brain.
