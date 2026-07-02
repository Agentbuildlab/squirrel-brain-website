# BUILD TICKET — "Scuttle calls you right now" live demo (app-side)

_Spec by the website session, 2026-07-02. Website side is SHIPPED (dark). This ticket is the
app-session build. Priority: Adam called it the #1 growth play; field-proven pattern (Retell,
CallFluent, Bland all lead with it)._

## The one honest caveat first
SB's in-app call system (call-alert-dispatch → APNs/VoIP → CallKit/AlarmKit) rings **SB app
devices**, NOT arbitrary phone numbers. A website visitor has no app installed — so this demo
requires real PSTN telephony (Twilio Programmable Voice or similar). That's NEW infrastructure:
an account Adam must create, a rented number (~$1/mo), and ~$0.014/min per call. A 30-second demo
call costs about a cent. Budget at 50 calls/day cap ≈ $0.50/day worst case.

## What the website already ships (dark)
- `components/CallMeDemo.tsx` — dark-band section: phone input, unchecked-by-default consent
  checkbox ("one automated demo call… number isn't stored for marketing"), Call-me-now button,
  PostHog events (`call_demo_requested/placed/failed`).
- `app/api/call-me-demo/route.ts` — validates E.164 US + consent, forwards to
  `CALL_DEMO_ENDPOINT` with header `X-Call-Demo-Key: CALL_DEMO_KEY`, passes `X-Client-Ip`.
  Returns 503 (friendly copy) until env is set.
- **To go live:** set `CALL_DEMO_ENDPOINT` + `CALL_DEMO_KEY` in Vercel env AND flip
  `CALL_ME_DEMO_ENABLED = true` in `lib/config.ts`, redeploy.

## App-side contract (new Supabase edge function, suggested name `call-demo`)
**Request** (from the Vercel proxy only):
```
POST $CALL_DEMO_ENDPOINT
X-Call-Demo-Key: <shared secret — mint one, store in Supabase secrets + Vercel env>
X-Client-Ip: <visitor ip>
{ "phone": "+1XXXXXXXXXX", "consent": true, "source": "website-demo" }
```
**Responses:** `200 {ok:true}` call queued/placed · `429` rate-limited · `400` invalid ·
`401` bad key · `5xx` provider failure.

## Required behavior
1. **Auth:** reject unless `X-Call-Demo-Key` matches (constant-time compare). This endpoint is
   otherwise PUBLIC-reachable — the key is the only gate, keep it strong.
2. **Rate limits (hard, enforced in a new `call_demo_log` table):**
   - 1 call per phone number per 24h (store `phone_hash = sha256(phone)`, never the raw number).
   - 3 calls per IP per 24h.
   - Global cap 50/day (config const) — fail closed with 429.
   - Log row: `{ phone_hash, ip, consent_at, created_at, call_sid }`. RLS: service_role only.
3. **The call (Twilio Programmable Voice):**
   - Buy one local US number. `POST /Calls` with `twiml` inline — no webhook server needed:
     `<Response><Pause length="1"/><Say voice="Polly.Joanna">…script…</Say></Response>`
     (or pre-render the script ONCE through ElevenLabs Sarah — the in-app Scuttle voice — host
     the mp3 on the website `public/audio/`, and use `<Play>` for brand-perfect voice. RECOMMENDED.)
   - Script (~25s, warm not salesy — matches the "caring check-in" angle from research):
     > "Hey — it's Scuttle, from Squirrel Brain! You asked me to call, so… this is the call.
     > This is exactly what it feels like when your second brain rings you back — about the form
     > that's due, the meds, the meeting, whatever you told me to hold onto. When the app's out,
     > I can call you like this any time you need me. That's it — no pitch, no robots reading
     > your calendar. Talk soon. 🐿️" *(rewrite freely; keep under 30s)*
4. **TCPA compliance (why the design is shaped like this):** the call is user-initiated,
   one-time, to the user's own number, with express unchecked-box consent captured at request
   time — that satisfies the FCC's one-to-one consent rule. Do NOT reuse the number for anything
   else, do NOT text it, do NOT store it raw. Log `consent_at` with the hash as the record.
5. **No SMS follow-up** (separate consent regime — out of scope v1).

## Estimate
Half a day: Twilio account + number (Adam, ~15 min), edge fn + migration + tests, one live
device test. Deploy with `--use-api`, smoke with a real call to Adam's phone.

## Definition of done
- Live call lands on a real phone within ~10s of the website button.
- Second attempt same number within 24h → clean 429 path shown on the site.
- `call_demo_log` shows hash-only rows. Guardian pass. Then: flip the website flag.
