"use client";

/**
 * Meeting Mode section — lives on the Work page.
 *
 * Record the whole meeting (it counts up in short chunks), then your squirrel
 * transcribes it and pulls out the action items — turn any into a reminder.
 * Left: copy + a "Meeting review · action items found" box. Right: the real
 * recording screen (counting up).
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { T, ScrollBoxRow, PhoneShot } from "@/components/v2/PhoneKit";

const ROWS: React.ComponentProps<typeof ScrollBoxRow>[] = [
  {
    accentColor: T.orange,
    title: "📊 Send the Q3 deck to the team",
    source: "From Meeting Mode · by Scuttle",
    pills: [{ label: "Pulled from your meeting", color: T.orange, bg: T.pastelPeach }],
  },
  {
    accentColor: T.orange,
    title: "📋 Follow up with Sarah re: contract",
    date: "Jun 18",
    time: "by Wed",
    dayNum: 18,
    source: "From Meeting Mode · by Scuttle",
    pills: [{ label: "⏰ Reminder set", color: T.blue, bg: T.blueLight }],
  },
  {
    accentColor: T.orange,
    title: "📅 Budget review moved to Friday 2pm",
    source: "From Meeting Mode · by Scuttle",
    pills: [{ label: "Pulled from your meeting", color: T.orange, bg: T.pastelPeach }],
  },
];

export default function MeetingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-16 lg:py-20 border-y border-border"
      style={{ background: "#faf6f0" }}
      aria-labelledby="meeting-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Copy + extracted items */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: T.orange }}>
            Meeting Mode
          </p>
          <h2
            id="meeting-heading"
            className="font-display font-bold text-ink mb-4 text-balance"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", lineHeight: 1.15 }}
          >
            Record the whole meeting. Keep what matters.
          </h2>
          <p className="text-base text-muted leading-relaxed mb-4">
            Under Notes, tap <strong className="text-ink">Meeting</strong>{" "}
            and just let it run. Your
            squirrel records the whole conversation in short chunks — so nothing rides on one long
            file — then transcribes it and pulls out what&rsquo;s important: the action items, the
            follow-ups, the deadlines, as best as the AI can. Turn any of them into a reminder with
            one tap.
          </p>
          <p className="text-base text-muted leading-relaxed mb-6">
            <strong className="text-ink">Interviewing someone?</strong> Have everyone introduce
            themselves at the start, then go back later and hear exactly what each person said —
            word for word. A lifesaver after a long day of <strong className="text-ink">panel
            interviews</strong>, when every candidate starts to blur together.
          </p>

          <div className="rounded-3xl p-5" style={{ background: "#fff", border: `1px solid ${T.border}` }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: T.textSub,
                letterSpacing: 0.6,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Meeting review · action items found
            </div>
            {ROWS.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.1 }}
              >
                <ScrollBoxRow {...row} />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.55 }}
              style={{
                background: "#1a1208",
                borderRadius: 12,
                padding: "8px 10px",
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
                marginTop: 4,
              }}
            >
              <span style={{ fontSize: 16, lineHeight: 1 }} aria-hidden="true">🐿️</span>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#e8a84a", marginBottom: 2 }}>
                  Your squirrel
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,245,232,0.9)", lineHeight: 1.5 }}>
                  Pulled 3 action items from your meeting. Want a reminder on any?
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Recording phone */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        >
          <PhoneShot
            src="/assets/screens/meeting-record-v2.webp"
            alt="Meeting Mode recording — counting up in short chunks, with Stop & Review"
            width={300}
          />
        </motion.div>
      </div>
    </section>
  );
}
