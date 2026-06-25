"use client";

import { useEffect, useState } from "react";

interface Slide {
  src: string;
  alt: string;
}

export function ScreenshotSlideshow({ slides, intervalMs = 3500 }: { slides: Slide[]; intervalMs?: number }) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFading(false);
      }, 300);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [slides.length, intervalMs]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* image area — fills all available height */}
      <div style={{ flex: 1, overflow: "hidden", position: "relative", minHeight: 0 }}>
        <img
          src={slides[current].src}
          alt={slides[current].alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top left",
            display: "block",
            transition: "opacity 0.3s ease",
            opacity: fading ? 0 : 1,
          }}
        />
      </div>
      {/* dot navigation */}
      <div
        className="flex justify-center gap-1.5 items-center py-2 border-t border-[var(--border)]"
        style={{ background: "var(--surface)", flexShrink: 0 }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-1.5 h-1.5 rounded-full transition-colors"
            style={{
              background: i === current ? "var(--accent)" : "var(--border-light)",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function ScreenshotStatic({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ height: "100%", overflow: "hidden" }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top left",
          display: "block",
        }}
      />
    </div>
  );
}
