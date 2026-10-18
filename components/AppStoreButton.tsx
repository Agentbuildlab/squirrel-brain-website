import { APP_STORE_LISTING_LIVE, APP_STORE_URL, WAITLIST_HREF } from "@/lib/config";

interface AppStoreButtonProps {
  className?: string;
  size?: "md" | "lg";
}

/**
 * Download button once the App Store listing is public. Until then the listing
 * 404s, so this renders the launch-list signup instead of a dead download link.
 * The App Store URL stays in JSON-LD either way.
 */
export default function AppStoreButton({ className = "", size = "md" }: AppStoreButtonProps) {
  const sizeClasses = {
    md: "text-base lg:text-lg px-7 lg:px-8 py-3.5 lg:py-4 gap-2",
    lg: "text-lg lg:text-xl px-8 lg:px-10 py-4 lg:py-5 gap-2.5",
  };
  const classes = `inline-flex items-center justify-center font-bold rounded-full text-white hover:opacity-90 active:scale-[0.98] transition-all ${sizeClasses[size]} ${className}`;

  if (!APP_STORE_LISTING_LIVE) {
    return (
      <a href={WAITLIST_HREF} className={classes} style={{ background: "#FF7A1A" }}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path
            d="M9 2a3.4 3.4 0 00-3.4 3.4c0 3.9-1.5 4.9-1.5 4.9h9.8s-1.5-1-1.5-4.9A3.4 3.4 0 009 2zM7.7 13.4a1.3 1.3 0 002.6 0"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Join the launch list
      </a>
    );
  }

  return (
    <a href={APP_STORE_URL} className={classes} style={{ background: "#1a1208" }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      Download on the App Store
    </a>
  );
}
