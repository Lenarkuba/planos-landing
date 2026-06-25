"use client";

export function VideoDemo({ youtubeId, label }: { youtubeId: string; label?: string }) {
  const embedUrl =
    `https://www.youtube.com/embed/${youtubeId}` +
    `?autoplay=1&mute=1&loop=1&playlist=${youtubeId}` +
    `&controls=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`;

  const watchUrl = `https://www.youtube.com/watch?v=${youtubeId}`;

  return (
    <div className="w-full">
      {label && (
        <div className="text-[0.7rem] text-[var(--text-dim)] px-4 py-2 uppercase tracking-wider border-b border-[var(--border)]">
          {label}
        </div>
      )}

      {/* video */}
      <div style={{ position: "relative", paddingBottom: "56.25%", background: "#000" }}>
        <iframe
          src={embedUrl}
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
            display: "block",
          }}
        />
      </div>

      {/* minimal custom bar */}
      <div
        className="flex items-center justify-end gap-3 px-3 py-2 border-t border-[var(--border)]"
        style={{ background: "var(--surface)" }}
      >
        {/* watch on YouTube */}
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Obejrzyj na YouTube"
          style={{ color: "var(--text-dim)", lineHeight: 0 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
          </svg>
        </a>

        {/* fullscreen — triggers native iframe fullscreen */}
        <button
          title="Pełny ekran"
          onClick={() => {
            const iframe = document.querySelector(`iframe[src*="${youtubeId}"]`) as HTMLIFrameElement | null;
            iframe?.requestFullscreen?.();
          }}
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-dim)", lineHeight: 0, padding: 0 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        </button>
      </div>
    </div>
  );
}
