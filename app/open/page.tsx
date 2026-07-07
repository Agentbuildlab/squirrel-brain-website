'use client';

// /open — email-CTA bounce page: try to open the Squirrel Brain APP via its
// registered URL scheme; show a manual button + site fallback if nothing happens
// (scheme redirects need a user gesture in some in-app browsers, e.g. Gmail's).
// Universal Links (AASA + associatedDomains) replace this on the next app binary.
import { useEffect, useState } from 'react';

const APP_SCHEME = 'squirrelbrain://';

export default function OpenApp() {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    window.location.href = APP_SCHEME;
    const t = setTimeout(() => setShowFallback(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        padding: 24,
        textAlign: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <div style={{ fontSize: 48 }}>🐿️</div>
      <h1 style={{ fontSize: 22, margin: 0 }}>
        Opening <span style={{ color: '#8B5A2B' }}>Squirrel</span>{' '}
        <span style={{ color: '#E8871E' }}>Brain</span>…
      </h1>
      {showFallback && (
        <>
          <a
            href={APP_SCHEME}
            style={{
              background: '#E8871E',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: 12,
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: 17,
            }}
          >
            Tap to open the app
          </a>
          <p style={{ color: '#666', fontSize: 14, maxWidth: 320 }}>
            Nothing happening? The app may not be installed on this device —{' '}
            <a href="https://squirrelbrainapp.com" style={{ color: '#8B5A2B' }}>
              visit squirrelbrainapp.com
            </a>
            .
          </p>
        </>
      )}
    </main>
  );
}
