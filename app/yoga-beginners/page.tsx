import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Beginner's Guide to Yoga",
  description: "Your first class at Ubud Yoga Centre — what to bring, how to prepare and what to expect.",
};

const steps = [
  { title: "Eat light, drink well", text: "Come hydrated. No full stomach — a light snack 1–2 hours before." },
  { title: "Arrive early", text: "20 minutes before class. There's no late admittance." },
  { title: "Check in", text: "Register at reception and tell us about injuries, pregnancy or medication." },
  { title: "Bring the basics", text: "Mat, towel and water only. Phones and valuables go in a locker." },
];

const etiquette = [
  "Observe silence in the yoga room",
  "Phones off — best left in your locker",
  "Rest whenever you need, but stay in the room",
  "Leave and return only between postures",
  "Sip water between postures",
  "Stay for savasana, then leave in silence",
  "Wipe your mat and space before you go",
  "Sleeveless tops and bike shorts work best",
];

const tips = [
  { q: "Breath control", a: "Breathe in and out through the nose — calm, smooth and continuous. Never hold your breath." },
  { q: "Alignment over depth", a: "Focus on correct alignment, not how far you go. It's your yoga, not anybody else's." },
  { q: "Stillness between postures", a: "Come to total stillness with a calm breath. Don't fidget or wipe sweat." },
  { q: "Overwhelmed by the heat?", a: "Pause, stand still and slow your breath through the nose. If you sit down, rise slowly. We've all spent time on the floor." },
  { q: "Pay attention to what you eat", a: "Favour a plant-based diet with complex carbs. Avoid heavy protein, fat, sugar and dairy before class." },
  { q: "After your first class", a: "Feeling energised, tired or a little sore is normal. The best thing you can do is come back." },
];

export default function Beginners() {
  return (
    <>
      <PageHero
        image="/images/uyc-first-visit-essentials.webp"
        alt="Yoga mat, towel and water bottle — first visit essentials"
        title="Beginner's Guide"
        lead="No one should feel intimidated. Unless specified, every class is open to all levels."
      >
        <Button href="/ubud-yoga-centre-class-schedule/">View Schedule</Button>
        <Button href="/yoga-classes-pricing/" variant="outline-light">
          Classes & Pricing
        </Button>
      </PageHero>

      <section className="section-y container-x">
        <Reveal>
          <h2 className="mb-8 text-[clamp(2.4rem,5vw,4.5rem)] md:mb-10">Before you come</h2>
        </Reveal>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.08} className="flex flex-col gap-8 rounded-sm bg-mist p-6 md:p-8">
              <span className="text-6xl leading-none text-terracotta">{i + 1}</span>
              <div>
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-2 text-sage">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="section-y bg-forest text-cream">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <h2 className="text-[clamp(2.4rem,4.5vw,4rem)]">In the studio</h2>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-cream/15">
              <div className="bg-forest-deep p-6">
                <p className="text-6xl text-gold">3</p>
                <p className="mt-2 text-cream/75">classes in your first week to adapt to the heat</p>
              </div>
              <div className="bg-forest-deep p-6">
                <p className="text-6xl text-gold">3–4</p>
                <p className="mt-2 text-cream/75">times a week for the best results</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <ul className="grid gap-px overflow-hidden rounded-sm bg-cream/10 sm:grid-cols-2">
              {etiquette.map((e) => (
                <li key={e} className="flex items-center gap-4 bg-forest p-5 text-lg">
                  <span aria-hidden className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                  {e}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-y container-x grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-4">
          <h2 className="text-[clamp(2.4rem,4.5vw,4rem)]">Tips for your practice</h2>
          <p className="mt-5 text-lg text-sage">One posture at a time. Work to discomfort, never pain.</p>
        </Reveal>
        <Reveal delay={0.1} className="min-w-0 lg:col-span-8">
          <Accordion items={tips} name="tips" />
        </Reveal>
      </section>

      <CtaBand title="Ready to start?" text="Walk in, check in, and we'll take care of the rest.">
        <Button href="/ubud-yoga-centre-class-schedule/" variant="light">
          Schedule
        </Button>
        <Button href={site.directions} variant="outline-light">
          Get Directions
        </Button>
      </CtaBand>
    </>
  );
}
