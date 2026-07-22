#!/usr/bin/env python3
"""Generate the homepage two-way call demo VO via OpenAI TTS.

Scuttle (the girl) = "nova" — the SAME voice the app + the rest of the website
use (the hero scuttle-demo.mp3). The user (a guy) = "onyx", a distinct clear
male so you can tell the two speakers apart.
Reads the API key from /tmp/openai_key (never hardcoded / committed).
Output: public/audio/twoway/<id>.mp3  (mapped 1:1 to the beats in
components/TwoWayCallDemo.tsx — keep the text identical so captions match).
"""
import urllib.request, urllib.error, json, os, sys

KEY = open("/tmp/openai_key").read().strip()
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "audio", "twoway")
os.makedirs(OUT, exist_ok=True)
MODEL = "tts-1-hd"
NOVA = "nova"   # Scuttle — the app's own voice (matches the hero clip)
ONYX = "onyx"   # the user answering — distinct clear male

LINES = [
    ("s_open",    NOVA, "Morning, Alex — it's Scuttle. You asked me to call before your 9:30 with the Hendersons. Heads up: you promised them the revised quote first."),
    ("u_move",    ONYX, "Push the Hendersons to eleven."),
    ("s_move",    NOVA, "Done — moved to 11:00. I'll ring you at 10:30 so you walk in ready."),
    ("u_else",    ONYX, "What else have I got today?"),
    ("s_else",    NOVA, "Three things: the quote to the Hendersons, pick up the prescription, and Mia's recital at 6."),
    ("u_remind",  ONYX, "Remind me to send that quote first."),
    ("s_remind",  NOVA, "Got it — I'll remind you to send the quote at 9:00 sharp."),
    ("s_pix",     NOVA, "Oh — that parking receipt you snapped in the garage yesterday? It's filed under Expenses, GPS-stamped with where and when, so it's right there whenever you need it. Anything else before I let you go?"),
    ("u_done",    ONYX, "No, that's everything — thanks, Scuttle."),
    ("s_done",    NOVA, "You got it. Talk soon — I'll call the moment the next thing actually matters."),
    ("u_expense", ONYX, "Actually, remind me to expense it Friday."),
    ("s_expense", NOVA, "Done — I'll ring you Friday to file it. Talk soon!"),
]


def gen(fid, voice, text):
    body = json.dumps({"model": MODEL, "voice": voice, "input": text, "response_format": "mp3"}).encode()
    req = urllib.request.Request(
        "https://api.openai.com/v1/audio/speech",
        data=body,
        headers={"Authorization": "Bearer " + KEY, "Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=90) as r:
            data = r.read()
        open(os.path.join(OUT, fid + ".mp3"), "wb").write(data)
        print(f"OK  {fid:9s} {voice:5s} {len(data):>7d}b")
        return True
    except urllib.error.HTTPError as e:
        print(f"ERR {fid:9s} HTTP {e.code}: {e.read().decode()[:160]}")
        return False


ok = sum(gen(*l) for l in LINES)
print(f"\n{ok}/{len(LINES)} generated -> {os.path.relpath(OUT)}")
sys.exit(0 if ok == len(LINES) else 1)
