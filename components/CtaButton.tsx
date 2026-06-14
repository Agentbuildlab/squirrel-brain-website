import { WAITLIST_HREF } from "@/lib/config";

interface CtaButtonProps {
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function CtaButton({
  label = "Join the launch list",
  className = "",
  size = "md",
}: CtaButtonProps) {
  const sizeClasses = {
    sm: "text-sm px-5 py-2.5 gap-1.5",
    md: "text-base px-7 py-3.5 gap-2",
    lg: "text-lg px-9 py-4 gap-2",
  };

  return (
    <a
      href={WAITLIST_HREF}
      className={`inline-flex items-center justify-center font-bold rounded-full bg-accent text-white hover:opacity-90 active:scale-[0.98] transition-all ${sizeClasses[size]} ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path
          d="M9 2a3.4 3.4 0 00-3.4 3.4c0 3.9-1.5 4.9-1.5 4.9h9.8s-1.5-1-1.5-4.9A3.4 3.4 0 009 2zM7.7 13.4a1.3 1.3 0 002.6 0"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {label}
    </a>
  );
}
