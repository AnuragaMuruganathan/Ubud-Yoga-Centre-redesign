import type { Metadata } from "next";
import { TitleBand } from "@/components/ui/TitleBand";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { ScheduleBoard } from "@/components/classes/ScheduleBoard";
import { HealthSafety } from "@/components/classes/HealthSafety";

export const metadata: Metadata = {
  title: "Hot & Regular Yoga Schedule",
  description: "Daily yoga in Ubud from 7:30 am weekdays and 8:00 am weekends. Walk-in only — no booking needed.",
};

export default function Schedule() {
  return (
    <>
      {/* Compact header so the timetable is on the first screen. */}
      <TitleBand title="Weekly Schedule" lead="Walk in — no booking needed. Arrive 20 minutes before class to check in.">
        <dl className="flex gap-6 text-cream">
          <div>
            <dt className="label-caps text-cream/70">Mon – Fri</dt>
            <dd className="mt-1 text-xl">from 7:30 am</dd>
          </div>
          <div className="border-l border-cream/20 pl-6">
            <dt className="label-caps text-cream/70">Sat – Sun</dt>
            <dd className="mt-1 text-xl">from 8:00 am</dd>
          </div>
        </dl>
      </TitleBand>

      <section className="container-x pt-6 pb-[var(--section-y)] md:pt-8">
        <h2 className="sr-only">This week at the centre</h2>
        <ScheduleBoard />
      </section>

      <HealthSafety />

      <CtaBand title="New to yoga?" text="Everything you need for your first class.">
        <Button href="/yoga-beginners/" variant="light">
          First Visit Guide
        </Button>
        <Button href="/yoga-classes-pricing/" variant="outline-light">
          Pricing
        </Button>
      </CtaBand>
    </>
  );
}
