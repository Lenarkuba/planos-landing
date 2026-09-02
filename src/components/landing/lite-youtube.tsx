"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Click-to-load YouTube facade: renders a thumbnail until the user clicks,
 * so no third-party JS loads on initial page load (Core Web Vitals friendly).
 */
export function LiteYouTube({ videoId, title }: { videoId: string; title: string }) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        className="h-full w-full border-0"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Odtwórz wideo: ${title}`}
      className="group relative block h-full w-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        fill
        sizes="(min-width: 768px) 560px, 100vw"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <span className="absolute inset-0 bg-slate-900/30 transition-colors group-hover:bg-slate-900/20" />
      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl transition-transform group-hover:scale-105">
        <svg
          aria-hidden="true"
          className="ml-1 h-6 w-6 text-brand-ink"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8 5.14v13.72L19 12 8 5.14z" />
        </svg>
      </span>
    </button>
  );
}
