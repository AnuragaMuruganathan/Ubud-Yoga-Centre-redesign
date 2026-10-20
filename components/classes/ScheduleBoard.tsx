"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { schedule } from "@/content/schedule";
import { classes } from "@/content/classes";

const hot = new Set(classes.filter((c) => c.hot).map((c) => c.slug));
const filters = ["All", "Hot", "Regular"] as const;
type Filter = (typeof filters)[number];

function baliDayIndex() {
  const wd = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "Asia/Makassar" }).format(new Date());
  return Math.max(0, ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(wd));
}

function SessionLink({ time, name, slug, compact, dim }: { time: string; name: string; slug: string; compact?: boolean; dim: boolean }) {
  const isHot = hot.has(slug);
  return (
    <Link
      href={`/${slug}/`}
      className={`group block rounded-sm border-l-2 transition-[background-color,opacity] ${
        isHot ? "border-terracotta bg-terracotta/[0.07] hover:bg-terracotta/15" : "border-sage/50 bg-mist hover:bg-moss"
      } ${dim ? "opacity-30" : ""} ${compact ? "px-3 py-2.5" : "flex items-center justify-between gap-4 px-4 py-4"}`}
    >
      <span className={`block tabular-nums text-sage ${compact ? "text-[0.8125rem]" : "text-sm"}`}>{time}</span>
      <span className={`block leading-snug group-hover:text-terracotta ${compact ? "mt-1 text-[0.95rem]" : "flex-1 text-lg"}`}>
        {name}
        {isHot && compact && <span className="sr-only"> (hot)</span>}
      </span>
      {!compact && isHot && <span className="chip-caps text-terracotta">Hot</span>}
    </Link>
  );
}

export function ScheduleBoard() {
  const [today, setToday] = useState<number | null>(null);
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState<Filter>("All");
  useEffect(() => {
    const i = baliDayIndex();
    setToday(i);
    setActive(i);
  }, []);
  const dimmed = (slug: string) => filter !== "All" && (filter === "Hot") !== hot.has(slug);

  return (
    <>
      {/* Filter doubles as the colour legend. */}
      <div role="group" aria-label="Show classes" className="mb-5 flex flex-wrap items-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full px-5 text-sm uppercase tracking-[0.14em] transition-colors ${
              filter === f ? "bg-forest text-cream" : "bg-sand text-forest hover:bg-stone"
            }`}
          >
            {f !== "All" && (
              <span aria-hidden className={`h-2.5 w-2.5 rounded-full ${f === "Hot" ? "bg-terracotta" : "bg-sage"}`} />
            )}
            {f}
          </button>
        ))}
      </div>

      {/* Desktop: whole week at a glance */}
      <div className="hidden grid-cols-7 gap-2 lg:grid">
        {schedule.map((d, i) => (
          <div key={d.day} className={`flex flex-col gap-2 rounded-sm p-2 ${today === i ? "bg-sand ring-1 ring-gold/50" : ""}`}>
            <p className="flex items-baseline justify-between px-1 pt-1 pb-2">
              <span className="text-xl">{d.short}</span>
              {today === i && <span className="chip-caps text-terracotta-deep">Today</span>}
            </p>
            {d.sessions.map((s) => (
              <SessionLink key={s.time + s.name} {...s} compact dim={dimmed(s.slug)} />
            ))}
          </div>
        ))}
      </div>

      {/* Mobile & tablet: day tabs */}
      <div className="lg:hidden">
        <div role="tablist" aria-label="Day" className="-mx-[var(--gutter)] mb-4 flex gap-2 overflow-x-auto px-[var(--gutter)] pb-1 [scrollbar-width:none]">
          {schedule.map((d, i) => (
            <button
              key={d.day}
              role="tab"
              type="button"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`min-h-11 shrink-0 cursor-pointer rounded-full px-5 text-sm uppercase tracking-[0.16em] transition-colors ${
                active === i ? "bg-forest text-cream" : "bg-sand text-forest"
              }`}
            >
              {d.short}
              {today === i && <span className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-terracotta align-middle" />}
            </button>
          ))}
        </div>
        <div role="tabpanel" className="flex flex-col gap-2">
          {schedule[active].sessions.map((s) => (
            <SessionLink key={s.time + s.name} {...s} dim={dimmed(s.slug)} />
          ))}
        </div>
      </div>
    </>
  );
}
