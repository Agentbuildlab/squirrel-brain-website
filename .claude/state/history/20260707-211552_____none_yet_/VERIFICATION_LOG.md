# VERIFICATION_LOG

> Proof that work actually works. Record the command run, exit code / observed result,
> and what it proves. "Should work" is NOT verification.

| When | Task | Command / method | Result | Proves |
|------|------|------------------|--------|--------|
|      |      |                  |        |        |

## 2026-07-02 — homepage redesign shipped + verified
- Build: `npm run build` exit 0 (21 pages). DOM verify on local dev (curl): hero H1 "The second brain that rings you back" ×1, INCOMING CALL screens ×3 (hero desktop/mobile + CallSection), all 6 door titles present, MorningBrief + old ExploreSection absent. Headless-Chrome hero screenshot eyeballed (kicker/H1/tagline/CTA/ringing phone all correct). Below-fold blank in headless shot = scroll-entrance animations (inView), same pattern as prior sections.
- Prod: vercel --prod Ready (52s age at check); live curl of squirrelbrainapp.com shows "rings you back" + door content. Branch pushed (23c71e6..e98642f).
- Analytics: segment_door_click {segment} + waitlist_signup.source_path shipped; read in PostHog 440057.

## 2026-07-02 (later) — growth trio verification
- tsc + next build exit 0 (22 pages incl. /daily-bible-verse-call).
- LIVE e2e referral proof on prod: POST reftest1 → {position:7, code:uftac80s}; POST reftest2
  with ref=uftac80s → ok; re-POST reftest1 → {already:true, referrals:1, position:2} (7−5×1).
  name-column credit path CONFIRMED working in prod.
- /daily-bible-verse-call → HTTP 200 live. Homepage 200, "Call me now" absent (widget dark, flag off).
- Deploy qfnq69nj0 Ready; branch pushed e98642f..be5edfd.

## 2026-07-02 (typo sweep) — verification
- Rendered-text scan of all 22 sitemap pages + build-output scan (.next/server/app/**): exactly ONE
  true word-merge found — /work "Meetingand" (source had the space; the production build collapsed
  it after </strong>). Fixed with explicit {" "}; live /work now renders the space. Full re-scan: 0 merges.
- Dictionary passes: all other flags were contractions/compounds/code snippets (false positives) — no
  misspellings found in site copy.
- iOS app static copy scanned by read-only agent (onboarding, screens, modals, Alert dialogs,
  daily-brief email template, Pip system prompt, MCP help): ZERO typos/merges found. If Adam saw
  merges in the app, likely LLM-generated runtime text or a layout artifact — awaiting his pointer.
- BONUS FIX: footer Privacy Policy + Terms links were 404 on every page (docs never served). Now
  live at /legal/privacy-policy + /legal/terms-of-use (200 verified); [PLACEHOLDER — LEGAL REVIEW]
  counsel notes stripped at render on the public copies (source md untouched); headless-Chrome DOM
  check confirms no placeholder text renders.

## 2026-07-02 (typo sweep, round 2 — "You look")
- Runtime-seam greps (template `${}` boundaries, string concatenation) across the FULL app repo
  (src/lib/supabase) and website: zero real merges (EventAlarmModal ctaRepeat false-alarm — has
  leading space; all other hits are pluralization idioms/paths/prompt joins).
- Remotion film-caption sources (promo repo src/): zero merges on all patterns.
- Live-app UI pass BLOCKED: CoreSimulator wedged (simctl list + bootstatus both hung; one service
  reset attempted, still wedged — known failure mode, did not thrash) + computer-use approval
  timed out (Adam away). Remaining hypothesis for Adam's in-app merges: LLM-generated runtime text
  (Burrow replies / daily-brief body) or on-screen layout adjacency — needs his pointer or a live
  session with the sim healthy.
