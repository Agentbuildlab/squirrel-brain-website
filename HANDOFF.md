# Squirrel Brain Website — Session Handoff

_Last updated: 2026-06-17 · production is LIVE at squirrelbrainapp.com_

## 2026-06-17 — Films / QA / social session (all DONE + live)
Canonical detail in `~/Projects/squirrel-brain-promo/memory.md` §7b–7f. Highlights:
- **Photoreal Runway mockup library (24 stills)** replaced the rejected fake composites →
  `public/review/runway/*` + contact sheet; gallery is `public/review.html` (films + mockups +
  a 1-clip "motion test"). Old `/review/clip_*`,`/review/still_*`,`/preview/realapp_*` deleted.
- **`/demos` = 13 vertical films**, all re-rendered + live (13/13 200). Added **"The Call Before
  You Blow the Call"** (For-Work). Tagline **"Speak it. Snap it. Stash it."** now on EVERY demo end
  card (consistent). Ring SFX −10 dB globally. Caption-overlap bug fixed (was only in The Call).
- **CALLBACK CLAIM corrected site-wide** (Adam: it does NOT break through silent): `app/mcp/page.tsx`,
  `app/pricing/page.tsx`, `app/demos/page.tsx`, `components/CallSection.tsx`, `components/FaqSection.tsx`,
  `components/StructuredData.tsx` (×2) → all now "rings if your ringer's on, buzzes on silent." Live
  audit = 0 overclaims across all 6 pages. (The ALARM "rings through silent" IS accurate — left alone.)
- **Social export:** all 13 films + a posting guide on Adam's Desktop → `Squirrel Brain Videos/`
  (For Work 5 / For Family 6 / For Your AI 2). 24 mockups on Desktop → `SB Mockups/`.
- **2 OPEN DECISIONS for Adam (flagged, not done):** (1) unify the PAGE slogans (`app/layout.tsx`
  title "Say it. Snap it. It's handled.", `HeroSection.tsx` "Snap it, say it, stash it",
  `app/family/page.tsx` "Snap it. Pin it. Find it.") to the tagline, or leave as-is; (2) build a
  motion-clip set (i2v garbles small-phone UI → use Remotion Ken Burns on stills for wide shots).

## TL;DR for the next session
The cinematic v2 rebuild is **built, deployed (preview), and verified**. Latest preview:
**https://squirrel-brain-website-ku61olhex-squirrelbrain.vercel.app** (HTTP 200, 0 broken).
Production is **NOT** flipped — wait for Adam to say **"flip production"**, then run:

### Big pass (2026-06-13) — all done & live
- **Pix MOAT section** (`PixMoatSection.tsx`, home, dark band): auto-ingestion / review-from-bed lead, SVG-icon capability cards (files, 3-births-a-box, rearrange, snap-a-thing→IDs+where-to-buy, GPS, daily re-shuffle). Hero = real board wall `pix-wall-v2.webp`.
- **Real photos in the PHONE** (re-seeded app boards, no drills): parking row → `parking-board.webp` (P3 + Find my car), receipt row → `receipts-board.webp`, fresh board covers (ladder/hard-hat, cafe receipt, packages, invoice, biz card, plant, ticket, sneakers — `pb_*.webp`).
- **Real photoreal Rx bottles** (`rx_item_1-6.webp`, `rx_snap.webp`), real `car_parked.webp` + `receipt_real.webp` befores.
- **Meeting Mode** 2 shots: `meeting-record.webp` (Work), `meeting-extract.webp` (Demos).
- **Burrow** `burrow.webp` (family voice-recall + demos). **Recipes** section + `recipes-board.webp`.
- **Auto-box rule** ("snap 3 of a kind → a board is born") in Captures callout + Recipes + family.
- **Fun soccer schedule** `soccer_schedule_fun.webp` (Acorn FC, squirrel-pun teams).
- Outlook bigger print; demos cleaned (dropped 8s claim, removed 4 redundant cards); dedup pass on deep pages.
- App seeding via blob edits; HWM/photo-review trigger is gated (couldn't headlessly fire the literal review popup).

```bash
cd ~/Projects/squirrel-brain-website && npx vercel --prod
```

## What this site is
Marketing site for Squirrel Brain (squirrelbrainapp.com). Next.js 16 (Turbopack) +
Tailwind + Framer Motion + Lenis smooth scroll. **V2 app design system only** — warm
cream (#f8f4ee) + orange (#FF7A1A), real app screenshots in dark phone bezels, the
squirrel mascot animating throughout. No legacy/flat-Tailwind cards.

## Home page section order (`app/page.tsx`)
1. **HeroSection** — mascot bobs in, big phone (`home-v4.webp` w/ Daily Countdown), headline
   "Your brain has too many tabs open. Let's close some of them."
2. **CapturesSection** — 3 clear stacked rows (Voice / Photo-parking / Document-receipt). No scroll-scrub.
3. **CallSection** — dark band, CallKit "it actually calls you" screen, pumped-up copy (real call breaks through silent/DND).
4. **MascotSection** — squirrel tilt/wave personality beat, speech bubbles.
5. **OutlookSection** — "tired of missing Outlook reminders?" before→after import.
6. **LinkStashSection** — saved by you, found by asking.
7. **RecipesSection** — "Snap the recipe. Find it at the stove." Real in-app Recipes board screenshot + handwritten recipe-card "before" + floating dish polaroids (behind the phone).
8. **ProofSection** — real-life proof; soccer-season block + expanded Meds block (6 Rx bottles).
9. **AgentBand** — "connect any AI agent to your brain."
10. **FinalCta** — squirrel points at button, pulsing glow.

Other pages: `/demos`, `/work`, `/family`, `/pricing` (all use real screenshots + `pix-v3.webp`).

## State of the image work (Adam's "make everything professional" pass)
**DONE:**
- Pix boards show professional AI photos (receipt, invoice, package, modern toolbox) →
  `screens/pix-v3.webp`. The website "before" photos line up with the app's Pix board thumbnails.
- Modern job-site toolbox replaced the "horrible" rusty one (`before_toolbox.png`).
- Parking + wine "before" photos are pro AI shots (`before_parking_v2.webp`, `before_wine_v2.webp`).
- Meds block: 6 hand-drawn generic Rx bottles (`med1_bottle.png`..`med6_bottle.png`),
  captions are generic (Generix / Calmitol / Snoozaprol / Allerfree / Pressurez / Vitamax).
- Soccer "before" is a legible hand-drawn generic schedule (`before_soccer_schedule.png`).
- Logo is just the squirrel with a **shape-following drop-shadow** (no white box).
- **Recipes:** 7 AI food photos (`recipe_card/pasta/cookies/salad/curry/pancakes/tacos.png`). Seeded a
  REAL Recipes board in the app (recipes IS a first-class board — `lib/pixBoards.ts`), captured the
  feed → `screens/recipes-board.webp`. Injected the 7 as the user's OWN pix (no `fromMcp` → survives
  sync reconcile; see `store.ts:393`) directly in the AsyncStorage blob. Board wall = `getAllBoards()`
  in a SCROLLABLE grid (NOT count-ranked) — Recipes is below the fold; tap its tile → "Open Recipes".

### Verification gotcha (this session)
- Local `preview_*` harness served a stale static dir (not Next) and `Google Chrome` isn't a
  computer-use-visible app, so a **website pixel screenshot wasn't obtainable** — verified the deploy
  via Chrome-MCP DOM checks (image `naturalWidth`, geometry, 0 broken) instead. The app-side capture
  `/tmp/cap_recipes_feed2.png` is the real Recipes board (also the section's centerpiece).

**DECISIONS (don't undo without reason):**
- Documents (Rx labels, soccer schedule) stay **hand-rendered (PIL)**, not AI — AI garbles
  small text. Objects/scenes use AI photos. Adam wants "not flat," but label legibility wins here.
- Always **cache-bust by renaming** assets across deploys (Vercel image-opt cache serves stale
  variants): home-v3→v4, pix-v2→v3, before_*_v2.webp.

## How the image pipeline works (to make MORE photos)
- **Generate objects/scenes:** `/tmp/sbgen.py` → `gen(prompt, outfile)`. Routes through the app's
  **`ai-gemini` edge function** (transparent proxy that injects the server-side `GOOGLE_API_KEY`;
  never exposes it). Model `gemini-2.5-flash-image` (Nano Banana).
- **Seed app data via MCP** (so app screenshots match): `/tmp/sb_*.py`. MCP key for the sim user
  in `/tmp/sb_simuser_key.txt`. Auth headers: `Authorization: Bearer <ANON>`, `X-API-Key: <sb_ key>`,
  `X-Agent-Name: Scuttle`.
- **Capture real app screens:** `xcrun simctl io booted screenshot out.png`, drive taps via
  computer-use MCP (Simulator granted "full"). The `board` field on Pix items is LOCAL-ONLY —
  set it directly in the AsyncStorage blob; `mergeMcpItems` preserves it across sync.
- **NOTE:** `/tmp/*` files may not survive a reboot. The reusable logic is documented in CODEMAP.md;
  regenerate from there if missing.

## Pending / open
- **Left-on-site board still has the old "horrible" toolbox item** assigned `leftonsite` (only the
  modern one shows as cover). Low priority cleanup.
- Task #3: "Build free rigged-character (Rive) concept preview for Adam" — not started.
- If Adam wants the full "all night" photo pass continued: most directly-shown images are done;
  what remains is judgment calls on documents (keep hand-rendered).

## Hard constraints (do not violate)
- App repo `/Volumes/ClawDrive/Adam/squirrel-brain` is **READ-ONLY / another session's** — never
  discard its uncommitted work.
- Access-control, sign-ins, payments, **production flips** = **Adam-only**. Wait for explicit
  "flip production."
- Never expose secret keys. Only the public ANON key goes in scripts; the Gemini key stays
  server-side in the ai-gemini proxy.
- Work only in `squirrel-brain-website` on branch `v2-rebuild`.

## 2026-07-02 — Homepage conversion redesign (LIVE on prod)
Research-backed rebuild (competitor + conversion research in session; Fable 5):
- **Hero = the callback, shown ringing**: H1 "The second brain that rings you back.",
  CallScreen extracted to `components/v2/CallScreen.tsx` (+ `RingingPhone` shake wrapper),
  ringing phone above the fold on desktop AND mobile. Canonical tagline in subhead. One primary CTA.
- **SegmentDoors** (`components/SegmentDoors.tsx`) replaced ExploreSection on home: 6 doors
  (secondbrain/parents/faith/field/sales/ai) → existing landing pages; every click fires PostHog
  `segment_door_click {segment}`. `waitlist_signup` now carries `source_path`. This is the
  "one design, many segments — let data pick the customer" experiment (Adam's wife's question).
- Homepage 11→9 sections: MorningBriefSection removed from home (component kept), call deep-dive stays.
- **Claim check (IMPORTANT)**: "rings through Silent" copy VERIFIED-KEPT — the call alarm is Apple
  AlarmKit (OS-level, Clock-app behavior; Adam device-verified 07-01). The app's own in-app
  "Silence all reminders" toggle mutes calls by design (R33/R34, 06-30) — that's honest behavior,
  not an overclaim. Do NOT revert to the old 06-17 "rings if ringer's on" guidance (that described
  the pre-AlarmKit CallKit/VoIP path).
- Read segment results in PostHog (project 440057): `segment_door_click` grouped by `segment`;
  `waitlist_signup` grouped by `source_path`; funnel door→signup per segment.

## 2026-07-02 (later) — Growth trio SHIPPED (Adam: "do all of it")
1. **Referral waitlist LIVE + e2e-proven on prod**: signup → {position, referralCode, referralUrl,
   referrals}; success UI = "you're #N — every friend moves you up 5 spots" + copy/share.
   Zero-DDL design (lib/referral.ts): code = salted email hash; referred_by rides the `name`
   column as "ref:<code>" (column confirmed to exist — credit verified live: reftest1 went
   #7→#2 after reftest2 joined with the code). Test rows agent.build.lab+reftest1/2@gmail.com
   left in waitlist + Resend audience (welcome emails fired — they're Adam's own aliases).
2. **Call-me-demo widget shipped DARK** (CALL_ME_DEMO_ENABLED=false in lib/config.ts):
   components/CallMeDemo.tsx + /api/call-me-demo (503 until CALL_DEMO_ENDPOINT+CALL_DEMO_KEY env).
   App-side ticket = docs/CALL_ME_DEMO_SPEC.md (Twilio PSTN — the in-app call stack can't dial
   arbitrary numbers). A spawn-task chip targets the app repo.
3. **/daily-bible-verse-call** landing page live (registry+route+footer+llms.txt+pep-talk cross-link).
PostHog additions: referral_landing, referral_share_click, call_demo_*, waitlist_signup.position/referred.

## 2026-07-07 (app-session Claude, cross-repo note)
Added app/open/page.tsx — email-CTA bounce page (tries squirrelbrain:// scheme, fallback button + site link). Daily-brief/nudge email CTAs now point at /open. Replace with Universal Links (AASA + associatedDomains) when the next app BINARY ships.
