"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { schedule } from "@/content/schedule";
import { classes } from "@/content/classes";

const hot = new Set(classes.filter((c) => c.hot).map((c) => c.slug));

/** Day index (Mon = 0) in Bali time, so the list matches the studio's day. */
function baliDayIndex() {
  const wd = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "Asia/Makassar" }).format(new Date());
  return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(wd);
}

export function TodayClasses() {
  const [idx, setIdx] = useState<number | null>(null);
  useEffect(() => setIdx(baliDayIndex()), []);
  const day = schedule[idx ?? 0];

  return (
    <div className="border-t border-forest/15">
      <div className="flex items-baseline justify-between py-4">
        <p className="text-xl">{idx === null ? "This week" : `Today · ${day.day}`}</p>
        <Link
          href="/ubud-yoga-centre-class-schedule/"
          className="label-caps -my-3 inline-flex min-h-11 items-center text-terracotta-deep hover:underline"
        >
          Full schedule
        </Link>
      </div>
      <ul className={`transition-opacity duration-500 ${idx === null ? "opacity-0" : "opacity-100"}`}>
        {day.sessions.map((s, i) => (
          // Phones show the first five so the section fits one screen; the rest are a tap away.
          <li key={s.time + s.name} className={`border-t border-forest/10 ${i >= 5 ? "max-sm:hidden" : ""}`}>
            <Link
              href={`/${s.slug}/`}
              className="group grid grid-cols-[6.75rem_1fr_auto] items-center gap-3 py-2.5 transition-colors hover:text-terracotta sm:grid-cols-[7.5rem_1fr_auto]"
            >
              <span className="text-sm tabular-nums text-sage">{s.time}</span>
              <span>{s.name}</span>
              {hot.has(s.slug) && (
                <span className="chip-caps rounded-full bg-terracotta/10 px-2.5 py-1 text-terracotta-deep">
                  Hot
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
      {day.sessions.length > 5 && (
        <Link
          href="/ubud-yoga-centre-class-schedule/"
          className="flex min-h-11 items-center border-t border-forest/10 text-sage hover:text-terracotta sm:hidden"
        >
          + {day.sessions.length - 5} more today
        </Link>
      )}
    </div>
  );
}
