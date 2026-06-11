import { TESTFLIGHT_URL } from "@/lib/config";

interface CtaButtonProps {
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function CtaButton({
  label = "Get the beta",
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
      href={TESTFLIGHT_URL}
      className={`inline-flex items-center justify-center font-bold rounded-full bg-accent text-white hover:opacity-90 active:scale-[0.98] transition-all ${sizeClasses[size]} ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path
          d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9S4.86 16.5 9 16.5 16.5 13.14 16.5 9 13.14 1.5 9 1.5zm-1.25 9.4V7.1a.5.5 0 01.76-.43l3 1.9a.5.5 0 010 .86l-3 1.9a.5.5 0 01-.76-.43z"
          fill="currentColor"
        />
      </svg>
      {label}
    </a>
  );
}
