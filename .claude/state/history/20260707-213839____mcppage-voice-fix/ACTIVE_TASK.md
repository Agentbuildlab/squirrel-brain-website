# ACTIVE_TASK

- **Task ID:** mcppage-voice-fix
- **Task name:** Re-render scuttle-mcppage.mp3 with corrected line + re-wire /mcp to mcppage theme
- **Source of request:** Adam-approved spawned task (task_8900ad03, flagged 2026-07-07 in session c5e50328)
- **Why it matters:** Current mcppage MP3 says "Claude, ChatGPT, your own scripts" — inaccurate (consumer ChatGPT can't connect the MCP portal). Entry is dead weight + /mcp now duplicates the `agents` voice, breaking the "19 unique phones" rule (commit d26f3de).
- **Status:** complete (commit 7a95c43)
- **Files likely involved:** public/audio/scuttle-mcppage.mp3 · lib/demoVoices.ts · app/mcp/page.tsx
- **Files changed so far:** lib/demoVoices.ts (removed 3 stale UNUSED comment lines; transcript "Claude, ChatGPT, your own scripts" → "Claude Code, Cursor, your own scripts") · app/mcp/page.tsx (CallDemoSection theme="agents" → "mcppage")
- **Acceptance criteria:** see ACCEPTANCE_CRITERIA.md
- **Verification plan:** whisper transcription of rendered mp3 vs intended words · tsc 0 · prod build 0 · /mcp resolves mcppage voice · audio decodes clean
- **Known risks:** voice/character drift vs sibling files (mitigate: same tts-1/nova/mp3 params as app pipeline); fable-guard blocks direct edits (mitigate: headless Opus claude -p per reference_fable_session_edit_path)
- **Current blocker:** User scoped this turn to two edits only, no commit/deploy. Remaining before task can complete: (1) transcription-verify the already-re-rendered scuttle-mcppage.mp3 against new words; (2) prod `next build` exit 0; (3) commit. All held pending Adam's go-ahead.
- **Next exact action:** await Adam's instruction to commit → then whisper-transcribe mcppage mp3 vs new words → `next build` → commit. Note: stale comment at app/mcp/page.tsx:375 still says "mcppage one names ChatGPT" — update/remove in the authorized commit turn.
- **tsc gate:** `npx tsc --noEmit` exit 0 (this turn).
