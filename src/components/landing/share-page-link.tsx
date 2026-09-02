"use client";

import { useState } from "react";

function isMobileDevice() {
  if (typeof navigator === "undefined") return false;
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export function SharePageLink() {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    const url = window.location.href;
    const title = document.title;

    if (isMobileDevice() && typeof navigator.share === "function") {
      try {
        await navigator.share({ title, url });
        return;
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
    } catch {
      window.prompt("Skopiuj link:", url);
      return;
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-brand px-8 text-base font-semibold text-brand-foreground shadow-brand transition-all hover:bg-brand-ink hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      {copied ? "Skopiowano" : "Skopiuj link"}
    </button>
  );
}
