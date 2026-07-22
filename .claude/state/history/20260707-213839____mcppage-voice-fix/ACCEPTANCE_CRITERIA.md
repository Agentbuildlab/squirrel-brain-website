# ACCEPTANCE_CRITERIA — mcppage-voice-fix
1. public/audio/scuttle-mcppage.mp3 re-rendered with "Claude Code, Cursor, your own scripts…" (no ChatGPT claim), same voice/pipeline (OpenAI tts-1, nova, mp3 24kHz mono).
2. lib/demoVoices.ts mcppage transcript matches the new audio exactly; UNUSED warning comment removed.
3. app/mcp/page.tsx CallDemoSection back to theme="mcppage" (restores 19-unique-voices invariant).
4. Verified: rendered audio transcribes to the intended words; tsc 0; prod build 0; audio decodes with 0 errors.
5. Committed on v2-rebuild (mp3 + demoVoices.ts + mcp/page.tsx only; no unrelated files).
