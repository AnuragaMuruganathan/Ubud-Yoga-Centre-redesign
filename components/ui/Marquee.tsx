"use client";

import { useState } from "react";
import { GateMark } from "@/components/ui/GateMark";

/** Endless strip of class names. Pauses on hover, or with the button (touch and keyboard users). */
export function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const [paused, setPaused] = useState(false);
  const row = (hidden?: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t} className="flex items-center whitespace-nowrap">
          <span className="px-6 md:px-10">{t}</span>
          <GateMark className="h-5 w-5 text-gold md:h-6 md:w-6" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`group relative flex overflow-hidden ${className}`}>
      <div className={`flex animate-marquee group-hover:[animation-play-state:paused] ${paused ? "[animation-play-state:paused]" : ""}`}>
        {row()}
        {row(true)}
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label={paused ? "Play scrolling class names" : "Pause scrolling class names"}
        className="absolute top-1/2 right-2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-sand/90 text-forest ring-1 ring-forest/15 md:right-4"
      >
        <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" aria-hidden>
          {paused ? <path d="M1 0l11 7-11 7z" /> : <path d="M1 0h3.5v14H1zM7.5 0H11v14H7.5z" />}
        </svg>
      </button>
    </div>
  );
}
