import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";
import { canggu, cangguPasses, cangguSchedule, cangguTerms } from "@/content/canggu";

export const metadata: Metadata = {
  title: "Canggu Yoga Centre",
  description: "Welcome to Canggu Yoga Centre — our sister studio in Pererenan, Canggu. Hot Pilates and Bikram Yoga daily.",
};

const views = ["1.webp", "2.webp", "4.webp", "5.webp"];

export default function Canggu() {
  return (
    <>
      <PageHero
        variant="split"
        image="/images/3.webp"
        alt="Canggu Yoga Centre building surrounded by greenery"
        title="Canggu Yoga Centre"
        lead="Our sister studio in Pererenan — part of the same Yoga42 Indonesia family."
      >
        <Button href="#schedule">Schedule & Prices</Button>
        <Button href={canggu.whatsapp} variant="outline-light">
          WhatsApp Canggu
        </Button>
      </PageHero>

      <section className="grid grid-cols-2 gap-1 bg-forest p-1 md:grid-cols-4">
        {views.map((f) => (
          <div key={f} className="relative aspect-video overflow-hidden">
            <Image src={`/images/${f}`} alt="Canggu Yoga Centre" fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover" />
          </div>
        ))}
      </section>

      <section id="schedule" className="section-y container-x grid scroll-mt-24 grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="min-w-0 lg:col-span-7">
          <h2 className="text-[clamp(2.2rem,4vw,3.6rem)]">Weekly schedule</h2>
          <p className="mt-2 text-sm text-sage">{canggu.scheduleNote}</p>
          <ul className="mt-6 divide-y divide-forest/10 border-y border-forest/10">
            {cangguSchedule.map((d) => (
              <li key={d.day} className="grid grid-cols-[6.5rem_1fr] gap-4 py-3 sm:grid-cols-[9rem_1fr]">
                <span className="text-lg">{d.day}</span>
                <ul className="flex flex-col gap-1.5">
                  {d.sessions.map((s) => (
                    <li key={s.time} className="flex flex-col sm:flex-row sm:gap-4">
                      <span className="w-32 shrink-0 tabular-nums text-sage">{s.time}</span>
                      <span>{s.name}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="flex min-w-0 flex-col gap-4 lg:col-span-5">
          <div className="rounded-sm bg-forest p-6 text-cream md:p-8">
            <h2 className="text-3xl">Prices</h2>
            <ul className="mt-4 divide-y divide-cream/15">
              {cangguPasses.map((p) => (
                <li key={p.name} className="flex items-baseline justify-between gap-4 py-3">
                  <span>
                    <span className="block text-lg">{p.name}</span>
                    <span className="block text-sm text-cream/75">{p.note}</span>
                  </span>
                  <span className="shrink-0 text-xl tabular-nums">
                    {p.price} <span className="text-sm text-cream/80">IDR</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex flex-col gap-1.5 text-sm text-sage">
            {cangguTerms.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <address className="not-italic text-sage">
            {canggu.address}
            <br />
            <a href={canggu.whatsapp} className="text-forest underline underline-offset-4 hover:text-terracotta">
              {canggu.phone}
            </a>{" "}
            ·{" "}
            <a href={`mailto:${canggu.email}`} className="text-forest underline underline-offset-4 hover:text-terracotta">
              {canggu.email}
            </a>
          </address>
        </Reveal>
      </section>

      <CtaBand title="Practising in Ubud?" text="Visit us in Nyuh Kuning — walk-ins welcome.">
        <Button href="/ubud-yoga-centre-class-schedule/" variant="light">
          Ubud Schedule
        </Button>
        <Button href="/our-location/" variant="outline-light">
          Find Us
        </Button>
      </CtaBand>
    </>
  );
}
