"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import type { YogaClass } from "@/content/classes";

const filters = ["All", "Hot", "Regular"] as const;
type Filter = (typeof filters)[number];

/** Reads ?type=hot|regular so a filtered view can be shared and survives Back. */
function filterFromUrl(): Filter {
  const t = new URLSearchParams(window.location.search).get("type");
  return t === "hot" ? "Hot" : t === "regular" ? "Regular" : "All";
}

export function ClassGrid({ items }: { items: YogaClass[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const shown = items.filter((c) => filter === "All" || (filter === "Hot" ? c.hot : !c.hot));

  useEffect(() => {
    setFilter(filterFromUrl());
    const onPop = () => setFilter(filterFromUrl());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const choose = (f: Filter) => {
    setFilter(f);
    const url = new URL(window.location.href);
    if (f === "All") url.searchParams.delete("type");
    else url.searchParams.set("type", f.toLowerCase());
    window.history.replaceState(null, "", url);
  };

  return (
    <>
      <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
        <h2 className="text-[clamp(2.4rem,5vw,4.5rem)]">Our Classes</h2>
        <div role="group" aria-label="Filter classes" className="flex gap-1 self-start rounded-full bg-sand p-1 md:self-auto">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => choose(f)}
              className={`relative min-h-11 cursor-pointer rounded-full px-6 text-[0.8125rem] uppercase tracking-[0.16em] transition-colors ${
                filter === f ? "text-cream" : "text-forest hover:text-terracotta"
              }`}
            >
              {filter === f && (
                <motion.span layoutId="class-filter" className="absolute inset-0 rounded-full bg-forest" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Two compact columns on phones (≈3 screens instead of 7), three on desktop. */}
      <motion.ul layout className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((c) => (
            <motion.li
              key={c.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/${c.slug}/`} className="group flex h-full flex-col overflow-hidden rounded-sm bg-mist">
                <div className="relative aspect-square overflow-hidden sm:aspect-[4/3]">
                  <Image
                    src={c.card}
                    alt={c.name}
                    fill
                    sizes="(min-width:1024px) 33vw, 50vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <span
                    className={`chip-caps absolute top-3 left-3 rounded-full px-2.5 py-1 sm:top-4 sm:left-4 sm:px-3 ${
                      c.hot ? "bg-terracotta text-cream" : "bg-cream text-forest"
                    }`}
                  >
                    {c.hot ? "Hot" : "Regular"}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4 sm:gap-3 sm:p-6">
                  <h3 className="text-lg leading-tight transition-colors group-hover:text-terracotta sm:text-2xl">{c.name}</h3>
                  <p className="hidden text-sage sm:block">{c.summary}</p>
                  <p className="mt-auto flex flex-wrap gap-x-4 gap-y-1 border-t border-forest/10 pt-3 text-sm text-forest/80 sm:pt-4">
                    <span>{c.duration}</span>
                    <span className="hidden sm:inline">{c.level}</span>
                  </p>
                </div>
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </>
  );
}
