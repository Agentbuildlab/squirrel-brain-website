# Squirrel Brain Website v2 — Master Spec

> The build brief for the complete site rebuild. Grounded in the 2026-06-11 code-level
> feature census + website audit. Owner: Claude (website session). Adam signs off on
> copy + structure before build.

---

## 0. Decisions

| Decision | Status |
|---|---|
| Structure: universal hero + clickable "doors" (no long scroll) | ✅ Adam directed |
| MCP = one small door, zero hero space | ✅ Adam directed |
| Stack: Next.js + Tailwind + Framer Motion on existing Vercel | ✅ Recommended, unchallenged |
| Design: V3 layout skeleton + V1 warm-cream/orange palette (matches app v2) | ✅ From audit |
| Primary CTA: **TestFlight beta link** ("Get the beta") — swaps to App Store button at launch | ✅ Adam chose B (2026-06-11). Needs: Adam creates the public TestFlight link in App Store Connect; site reads it from one config constant. Small "get launch updates" email field in footer as backup. |
| Demo videos: AI-produced — simulator recordings + Remotion compositions (device frame, kinetic captions, zooms) + Pip (nova) TTS narration | ✅ Adam: "find a way to AI the demos" — first sample clip goes to him for approval before batch production |
| Pricing shown: two plans — Standard $9.99/mo (10h recording) + Plus $14.99/mo (20h recording); updated 2026-06-15 | ✅ everything unlimited on both except meeting-recording hours; 7-day free trial, monthly billing, cancel anytime |

## 1. Sitemap

```
/                  Homepage — hero wow + proof strip + doors
/work              Door: "I work in the field" (field pros / sales / delivery)
/family            Door: "I run the family" (busy parents)
/demos             Door: "Watch it work" (the demo reel — all clips)
/mcp               Door (small): "For developers & AI agents" (existing docs, refreshed)
/pricing           Two plans: Standard $9.99/mo (10h) · Plus $14.99/mo (20h)
/legal/*           Privacy + Terms (reskin to warm-cream)
```

Kill: app-mockups.html, designs.html, v1/v2/v3 prototypes (archive to /graveyard branch).
Keep + reskin: signup.html + dashboard.html (API keys — link only from /mcp).

## 2. Homepage structure

1. **HERO** — "Say it. Snap it. It's handled." Sub: "Squirrel Brain turns voice notes
   and photos into alarms, reminders, and calendar events — then makes sure you follow
   through." Right column: iPhone frame, looping the **soccer-schedule demo** (photo of
   crumpled schedule → "Found 6 games — add them all?" → calendar fills + alarms set).
   CTA: waitlist email field (pending decision).
2. **PROOF STRIP** — three 8-second silent loops, side by side:
   - 🎤 "Dentist Thursday at 2" → alarm appears (voice → calendar in 8s)
   - 🧾 Receipt snap → "Return closes June 24 — remind you?"
   - 🚗 Parking snap → days later → "Find my car" → exact pin
3. **THE DOORS** — 4 big tiles (2×2): Work / Family / Watch it work / Developers & agents
   (last one visually quieter). Each = image + one line + arrow.
4. **HOW IT WORKS** — 3 steps: Capture in one breath → AI extracts everything →
   It hounds you (alarms, emails, Pip's voice).
5. **MEET PIP** — short section: the squirrel that texts back (Burrow chat screenshot),
   morning brief email mockup (FIX: greet user's real name, not "Hazel").
6. **PRICING TEASER** → /pricing.
7. **CTA repeat** + footer (legal, MCP, contact).

## 3. Door pages

### /work — "For the field"
Persona: sales reps, delivery, service techs, contractors. Voice: Adam's world, direct.
Sections: voice capture between stops · Left On-Site + GPS-stamped photo proof ·
parking pin · Meeting Mode for windshield-time debriefs · 4 PM nudge email ·
follow-ups that ring your phone in Pip's voice.
Demos: #1 voice→calendar, #10 whiteboard→checklist, #3 find-my-car, #7 meeting mode.

### /family — "For the family load"
Persona: busy parents. Sections: schedule photo → whole season of alarms (THE demo) ·
Pix boards (Receipts/Recipes/Meds/School) · return-window reminders · morning brief ·
voice recall ("find the permission slip"). 
**Guardrail: NO email-in claims. Photo only.**
Demos: #5 voice recall, #2 receipt→return, schedule photo demo.

### /demos — "Watch it work"
All clips in a grid, each 15–30s, Pip-narrated (pending) + captioned. Doubles as the
YouTube/TikTok content library.

### /mcp — "For developers & AI agents"
Refresh existing docs page: correct tool count (24), full tool table from census,
remove dead "Codex" reference, add maker-attribution/trust story + agent quickstart.
Plus: submit server to MCP registries (one-time, ~2h task).

## 4. Copy guardrails — MUST NOT claim
1. ❌ Email-in / "forward your email" — stubbed, no backend.
2. ❌ Share from Safari/Photos (no native share extension in binary).
3. ❌ "Connects to Google/Outlook" → ✅ "reads every calendar already on your iPhone."
4. ❌ Home-screen widget.
5. ⚠️ Pip call: say "rings your phone and speaks in Pip's voice" — not a literal
   phone-call UI (CallKit UI pending binary).
6. ❌ Family sharing / multi-user.
7. ❌ "Hundreds of users" or any unverified count.
8. ✅ Pricing honesty: Standard $9.99/mo (10h recording) · Plus $14.99/mo (20h recording); everything else unlimited on both; 7-day free trial, monthly, cancel anytime.

## 5. Demo asset shot list (production checklist)

Simulator-recordable (I produce solo — stage pretty seed data first):
- [ ] HERO: schedule photo → events+alarms (the money shot)
- [ ] Voice → calendar in 8s (#1)
- [ ] Receipt → return-window prompt (#2)
- [ ] Parking → find-my-car (#3)
- [ ] Burrow chat + suggestion chips (#4)
- [ ] Voice recall: "find the receipt from Whole Foods" (#5)
- [ ] Meeting Mode record→extract (#7)
- [ ] YouTube link → Link Stash + reminder (#9)
- [ ] Whiteboard → checklist (#10)
- [ ] Pix boards wall pan + board long-press → camera

Needs Adam's real iPhone (~10 min, exact shot list when ready):
- [ ] pip_call ringing + Pip speaking (lock screen)
- [ ] Anything with real camera in hand (optional b-roll)

Stills: fresh v2 screenshots of Home, Pix wall, Burrow, Calendar, Settings →
replace ALL dated assets. Convert everything to WebP, kill the 4–5MB PNGs.

## 6. Tech
Next.js (App Router) + Tailwind + Framer Motion. Deploy: existing Vercel project.
Device frame component for demo loops (muted autoplay, captions burned in).
Performance budget: Lighthouse ≥95, LCP < 2s. No emoji-as-icons. Real app pixels only.

## 7. Build phases
1. Spec sign-off (Adam) ← HERE
2. Copy deck per page (Adam reviews voice/claims)
3. Next.js scaffold + design tokens (delegate: sonnet)
4. Demo asset production (sim recordings + reskinned stills)
5. Page builds (delegate: sonnet, CEO reviews each)
6. Polish + Lighthouse + Vercel preview → Adam approves → production

## 8. STATUS @ 2026-06-11 ~8:30 PM (session save)
- Phases 1-3 + homepage wow-pass DONE on v2-rebuild. Next 16.2.9. vercel.json framework=nextjs.
- PUBLIC preview: https://squirrel-brain-website-6f2gx5llf-squirrelbrain.vercel.app (protection off).
- TestFlight CTA LIVE: https://testflight.apple.com/join/R7WRjGEC (build 87). Apple app ID 6766505549.
- AWAITING: Adam's "flip production" → vercel --prod → squirrelbrainapp.com.
- DEFERRED (budget, resume after Mon 1PM reset): demo clips (sim+Remotion+Pip TTS, sample first),
  /mcp docs refresh (25 tools; FIX stale anon key in docs!), legal reskin, door-pages wow-pass,
  PostHog, OG image. "Actual call" copy depends on app session shipping CallKit port.
