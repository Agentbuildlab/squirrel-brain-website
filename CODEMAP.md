# Squirrel Brain Website — Code Map

_Where everything lives. Branch `v2-rebuild`._

## Stack
- **Next.js 16.2.9** (App Router, Turbopack) · **Tailwind** · **Framer Motion** · **Lenis** (smooth scroll)
- Deploy: Vercel. `vercel.json` = `{"framework":"nextjs"}`. Preview auto on push; prod = `npx vercel --prod`.
- SSO/preview protection was disabled via Vercel API (`ssoProtection:null`) so previews are public.

## Design tokens
`components/v2/PhoneKit.tsx` exports `T` (mirrored from the app's `src/styles/theme.ts`):
- bg `#f8f4ee` · card `#fff` · text/ink `#1f1a14` · orange `#FF7A1A` · peach `#F4A64D`
- green `#3fae6e` · darkBg `#1a1208` · plus `T.border`, `T.textSub`, pastel tile colors.

## Reusable components (`components/v2/PhoneKit.tsx`)
- **`PhoneShot({ src, alt, width })`** — wraps a REAL screenshot in a dark phone bezel (no code
  status bar). `objectFit: cover`, `objectPosition: top center`. **Use this for real app screens.**
- **`PhoneShell`** — a code-built phone screen (used where we render UI, not a screenshot).
- **`PulseRing`** — pulsing concentric rings (used in CallSection avatar).

## Page composition
- `app/page.tsx` — home; imports the 9 sections in order (see HANDOFF.md).
- `app/demos/page.tsx`, `app/work/page.tsx`, `app/family/page.tsx`, `app/pricing/page.tsx`.
- `app/layout.tsx` — fonts (Inter + display), LenisProvider wrapper.

## Sections (`components/`)
| File | What it is | Key assets |
|---|---|---|
| `HeroSection.tsx` | Hero: MascotBob (drop-shadow, no box) + big PhoneShot | `screens/home-v4.webp`, `squirrel_logo.png` |
| `CapturesSection.tsx` | 3 stacked `CaptureRow`s (Voice/Parking/Receipt). `ROWS` config array at top. | `home-v4`, `pix-v3`, `before_parking_v2`, `notes-v2`, `before_wine_v2` |
| `CallSection.tsx` | Dark band, code-built `CallScreen` (CallKit style), ringing phone shake | `squirrel_logo.png` |
| `MascotSection.tsx` | Mascot tilt/wave + `SpeechBubble`s + floating `Acorn` SVG | `squirrel_logo.png` |
| `OutlookSection.tsx` | Outlook import before→after | `outlook_event.png` |
| `LinkStashSection.tsx` | "saved by you, found by asking" | `screens/links-v2.webp` |
| `ProofSection.tsx` | Soccer block + `MedsBlock`/`MedsBottleGrid`/`MED_BOTTLES` (6 bottles) | `before_soccer_schedule.png`, `med1..med6_bottle.png`, `screens/pix-v3.webp` |
| `AgentBand.tsx` | "connect any AI agent" band | — |
| `FinalCta.tsx` | Mascot points at button, pulsing glow, feature strip | `squirrel_logo.png` |
| `Nav.tsx` `Footer.tsx` `FadeIn.tsx` `CtaButton.tsx` `LenisProvider.tsx` | chrome/util | — |

`lib/config.ts` — `TESTFLIGHT_URL` (build 87 link) and other shared config.

## Assets (`public/assets/`)
**Real app screenshots** (`public/assets/screens/`): `home-v4.webp`, `calendar-v2.webp`,
`notes-v2.webp`, `links-v2.webp`, **`pix-v3.webp`** (current pro-photo Pix boards). Older
`home-v3/pix-v2/*.webp` are stale (kept; cache-bust history) — reference the **-vN newest**.

**AI photos (Gemini via app proxy):** `before_toolbox.png` (modern drill+bag+level),
`before_parking_spot.png`/`before_parking_v2.webp`, `before_wine_bottle.png`/`before_wine_v2.webp`,
`before_receipt.png`, `before_package.png`, `before_invoice.png`, `before_whiteboard.png`.

**Hand-rendered (PIL — legible small text):** `before_soccer_schedule.png`,
`med1_bottle.png`..`med6_bottle.png`, `outlook_event.png`.

**Brand:** `squirrel_logo.png` (squirrel only, transparent — styled with `filter: drop-shadow(...)`,
never a box-shadow/rounded tile).

**Agent-friendly (force-added to git):** `public/robots.txt`, `public/llms.txt`,
`public/mcp/index.html` (human-readable MCP docs, 29 tools, correct anon key).

## Tooling scripts (`/tmp/` — may not survive reboot; logic documented here)
- `sbgen.py` — `gen(prompt, outfile, tries=2)`; POSTs to the app `ai-gemini` edge function,
  model `gemini-2.5-flash-image`, body `{model, contents:[{parts:[{text}]}],
  generationConfig:{responseModalities:["IMAGE","TEXT"]}}`. Decodes inline image data.
- `sb_seed.py` / `sb_pix.py` / `sb_pix2.py` / `sb_meds.py` — MCP seed scripts (create_item /
  create pix items, set boards in the local AsyncStorage blob).
- `sb_simuser_key.txt` — the `sb_` MCP key for the sim user (David / agent name Scuttle).
- `old_site_copy.txt` — scraped old-site text, used for the copy cross-check.

## App data model gotchas (for screenshot-matching)
- `board` (Pix category) and `countdownEnabled` are **LOCAL-ONLY** fields, NOT synced. Stored in
  AsyncStorage key `squirrel-brain:items:v1`; big values spill to blob files in
  `RCTAsyncLocalStorage_V1/`. Set `board` directly in the blob; `mergeMcpItems` preserves it.
- Board wall renders in registry order — a board with no items gets pushed off; move a stray item
  to `'other'` to surface the board you want (that's how Meds was surfaced).

## Verify a deploy quickly
```bash
# all key assets resolve?
for a in screens/pix-v3.webp screens/home-v4.webp screens/notes-v2.webp \
         before_parking_v2.webp before_wine_v2.webp before_toolbox.png \
         before_soccer_schedule.png med1_bottle.png squirrel_logo.png; do
  curl -s -o /dev/null -w "%{http_code}  /assets/$a\n" "$PREVIEW_URL/assets/$a"; done
```
Then Chrome MCP: navigate to the preview, run a JS pass collecting `img.naturalWidth` to confirm
0 broken (lazy below-fold imgs report nw:0 until scrolled — confirm via the curl 200s above).
