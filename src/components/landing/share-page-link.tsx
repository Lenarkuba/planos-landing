"use client";

import { useState } from "react";
import { buttonVariants } from "./ui";

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
      className={buttonVariants({ size: "lg" })}
    >
      {copied ? "Skopiowano" : "Skopiuj link"}
    </button>
  );
}
