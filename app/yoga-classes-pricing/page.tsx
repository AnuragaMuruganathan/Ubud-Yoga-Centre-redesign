import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { PriceCards } from "@/components/ui/PriceCards";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { ClassGrid } from "@/components/classes/ClassGrid";
import { HealthSafety } from "@/components/classes/HealthSafety";
import { classes } from "@/content/classes";
import { firstVisitFaqs, passTerms, policy } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Yoga Classes & Pricing",
  description: "One price for every class, hot or regular. Drop-in IDR 165K, passes from 690K. Walk-in, no booking.",
};

export default function ClassesPricing() {
  return (
    <>
      <PageHero
        image="/images/homepage-video-poster-class.webp"
        alt="A heated class in the glass-walled studio"
        title="Classes & Pricing"
        lead="The same price for every class — hot or regular. Walk-in, no booking."
      >
        <Button href="/ubud-yoga-centre-class-schedule/">Class Schedule</Button>
        <Button href="/yoga-beginners/" variant="outline-light">
          Beginner’s Guide
        </Button>
      </PageHero>

      <section className="section-y bg-forest text-cream">
        <div className="container-x">
          <Reveal className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <h2 className="text-[clamp(2.4rem,5vw,4.5rem)]">Passes & Pricing</h2>
            <ul className="flex flex-wrap gap-2 text-sm">
              {["Mat included", "Towel rental IDR 10K", "Cash or card at reception"].map((t) => (
                <li key={t} className="rounded-full border border-cream/25 px-4 py-2 text-cream/85">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <PriceCards />
          <p className="mt-4 text-sm text-cream/80">
            {passTerms}{" "}
            <a href="#policy" className="inline-block py-2 underline underline-offset-4 hover:text-cream">
              Studio policy
            </a>
          </p>
        </div>
      </section>

      <section className="section-y container-x">
        <ClassGrid items={classes} />
      </section>

      <section id="policy" className="section-y scroll-mt-20 bg-sand">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="mb-6 text-[clamp(2.2rem,4vw,3.6rem)]">Your first visit</h2>
            <Accordion items={firstVisitFaqs} name="faq" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-6 text-[clamp(2.2rem,4vw,3.6rem)]">Studio policy</h2>
            <Accordion items={policy} name="policy" />
          </Reveal>
        </div>
      </section>

      <HealthSafety />
      <CtaBand />
    </>
  );
}
