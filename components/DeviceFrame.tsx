import React from "react";

interface DeviceFrameProps {
  /** Path to a video file — plays looping + muted + autoplay */
  videoSrc?: string;
  /** Placeholder label shown when no video is available yet */
  placeholderLabel?: string;
  /** Optional image to show as a still frame */
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

/**
 * CSS iPhone frame component.
 * Renders a warm-shadow device frame around either a video loop or a
 * clearly-labelled placeholder slot ("DEMO: schedule photo → alarms").
 * Real demo clips slot in by passing videoSrc.
 */
export default function DeviceFrame({
  videoSrc,
  placeholderLabel,
  imageSrc,
  imageAlt,
  className = "",
}: DeviceFrameProps) {
  return (
    <div
      className={`relative mx-auto ${className}`}
      style={{ width: 220, maxWidth: "100%" }}
      role="img"
      aria-label={imageAlt ?? placeholderLabel ?? "App demo"}
    >
      {/* Outer phone shell */}
      <div
        className="relative rounded-[2.6rem] overflow-hidden"
        style={{
          background: "#1a1208",
          padding: "12px 8px",
          boxShadow:
            "0 32px 64px rgba(255,122,26,0.18), 0 8px 24px rgba(26,18,8,0.22), inset 0 0 0 1.5px rgba(255,255,255,0.08)",
        }}
      >
        {/* Notch/dynamic island */}
        <div
          className="absolute top-3.5 left-1/2 -translate-x-1/2 z-10"
          style={{
            width: 84,
            height: 24,
            background: "#1a1208",
            borderRadius: 999,
          }}
          aria-hidden="true"
        />

        {/* Screen area */}
        <div
          className="relative rounded-[2rem] overflow-hidden bg-white"
          style={{ aspectRatio: "9 / 19.5", minHeight: 360 }}
        >
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc}
              alt={imageAlt ?? "App screenshot"}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            /* Placeholder slot */
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-accent-light gap-3 p-4">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M10 3v7m0 0l-3-3m3 3l3-3M4 14h12"
                    stroke="#FF7A1A"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-center text-xs font-mono text-accent leading-snug px-2">
                {placeholderLabel ?? "DEMO CLIP\ncoming soon"}
              </p>
            </div>
          )}
        </div>

        {/* Home indicator */}
        <div
          className="mx-auto mt-2"
          style={{
            width: 80,
            height: 4,
            borderRadius: 2,
            background: "rgba(255,255,255,0.2)",
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
