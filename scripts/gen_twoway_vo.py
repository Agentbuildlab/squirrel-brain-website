#!/usr/bin/env python3
"""Generate the homepage two-way call demo VO via ElevenLabs.

Scuttle (the girl) = Sarah, the same voice the app/marketing uses.
The user (a boy)   = Daniel, a distinct male voice.
Reads the API key from /tmp/el_key (never hardcoded / committed).
Output: public/audio/twoway/<id>.mp3  (mapped 1:1 to the beats in
components/TwoWayCallDemo.tsx — keep the text identical so captions match).
"""
import urllib.request, urllib.error, json, os, sys

KEY = open("/tmp/el_key").read().strip()
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "audio", "twoway")
os.makedirs(OUT, exist_ok=True)
MODEL = "eleven_multilingual_v2"
SARAH = "EXAVITQu4vr4xnSDxMaL"   # Scuttle — the voice that calls back (girl)
DANIEL = "onwK4e9ZLuTAKqWW03F9"  # the user answering (boy)

# Warm, natural call delivery for both speakers.
SETTINGS = {"stability": 0.5, "similarity_boost": 0.82, "style": 0.28, "use_speaker_boost": True}

LINES = [
    ("s_open",   SARAH,  "Morning, Alex — it's Scuttle. You asked me to call before your 9:30 with the Hendersons. Heads up: you promised them the revised quote first."),
    ("u_move",   DANIEL, "Push the Hendersons to eleven."),
    ("s_move",   SARAH,  "Done — moved to 11:00. I'll ring you at 10:30 so you walk in ready."),
    ("u_else",   DANIEL, "What else have I got today?"),
    ("s_else",   SARAH,  "Three things: the quote to the Hendersons, pick up the prescription, and Mia's recital at 6."),
    ("u_remind", DANIEL, "Remind me to send that quote first."),
    ("s_remind", SARAH,  "Got it — I'll remind you to send the quote at 9:00 sharp."),
    ("s_pix",    SARAH,  "Oh — that parking receipt you snapped in the garage yesterday? Filed under Expenses, GPS-stamped with where and when. Want me to text you the photo?"),
    ("u_yes",    DANIEL, "Yeah, text it over."),
    ("s_yes",    SARAH,  "Sent. Talk soon, Alex — I'll call the moment the next thing actually matters."),
    ("u_no",     DANIEL, "Nah, I'm good. Thanks, Scuttle."),
    ("s_no",     SARAH,  "You got it. Talk soon — I'll call the moment the next thing actually matters."),
]


def gen(fid, voice, text):
    body = json.dumps({"text": text, "model_id": MODEL, "voice_settings": SETTINGS}).encode()
    req = urllib.request.Request(
        f"https://api.elevenlabs.io/v1/text-to-speech/{voice}",
        data=body,
        headers={"xi-api-key": KEY, "Content-Type": "application/json", "Accept": "audio/mpeg"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=90) as r:
            data = r.read()
        open(os.path.join(OUT, fid + ".mp3"), "wb").write(data)
        print(f"OK  {fid:9s} {len(data):>7d}b")
        return True
    except urllib.error.HTTPError as e:
        print(f"ERR {fid:9s} HTTP {e.code}: {e.read().decode()[:160]}")
        return False


ok = sum(gen(*l) for l in LINES)
print(f"\n{ok}/{len(LINES)} generated -> {os.path.relpath(OUT)}")
sys.exit(0 if ok == len(LINES) else 1)
