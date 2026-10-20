"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { classes } from "@/content/classes";
import { TextLink } from "@/components/ui/Button";

/** Native swipe/scroll row of every class with prev/next controls. No scroll hijacking. */
export function ClassRail() {
  const track = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("a");
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 320) + 16) * 2, behavior: "smooth" });
  };

  const arrow = (dir: 1 | -1, disabled: boolean) => (
    <button
      type="button"
      onClick={() => step(dir)}
      disabled={disabled}
      aria-label={dir === 1 ? "Next classes" : "Previous classes"}
      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-cream/40 transition-colors hover:bg-cream hover:text-forest disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-cream"
    >
      <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden className={dir === -1 ? "rotate-180" : ""}>
        <path d="M0 7h18M12 1l6 6-6 6" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </button>
  );

  return (
    <section aria-labelledby="class-rail-title" className="section-y overflow-hidden bg-forest text-cream">
      <div className="container-x mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <h2 id="class-rail-title" className="text-[clamp(2.4rem,5vw,4.5rem)]">
          Hot or regular. <span className="text-stone">Find your practice.</span>
        </h2>
        <div className="flex items-center gap-5">
          <TextLink href="/yoga-classes-pricing/" className="shrink-0 whitespace-nowrap text-cream">
            All classes
          </TextLink>
          <div className="hidden gap-2 md:flex">
            {arrow(-1, edge.start)}
            {arrow(1, edge.end)}
          </div>
        </div>
      </div>
      <div
        ref={track}
        className="flex snap-x snap-mandatory scroll-px-[var(--gutter)] gap-4 overflow-x-auto px-[var(--gutter)] pb-2 [scrollbar-width:none] lg:scroll-px-[max(var(--gutter),calc((100vw-88rem)/2+var(--gutter)))] lg:px-[max(var(--gutter),calc((100vw-88rem)/2+var(--gutter)))]"
      >
        {classes.map((c) => (
          <Link
            key={c.slug}
            href={`/${c.slug}/`}
            className="group relative aspect-[4/3] w-[78vw] shrink-0 snap-start overflow-hidden rounded-sm sm:w-[46vw] lg:w-[24rem]"
          >
            <Image
              src={c.card}
              alt={c.name}
              fill
              sizes="(min-width:1024px) 24rem, (min-width:640px) 46vw, 78vw"
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/15 to-transparent" />
            {c.hot && <span className="chip-caps absolute top-4 left-4 rounded-full bg-terracotta px-2.5 py-1">Hot</span>}
            <span className="absolute inset-x-5 bottom-4">
              <span className="block text-2xl leading-tight">{c.name}</span>
              <span className="mt-1.5 flex flex-wrap gap-x-3 text-sm text-cream/85">
                <span className="whitespace-nowrap">{c.duration}</span>
                <span className="whitespace-nowrap">{c.heat}</span>
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
