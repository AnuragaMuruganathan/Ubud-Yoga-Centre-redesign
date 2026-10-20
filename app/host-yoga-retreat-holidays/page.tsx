import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Host a Yoga Retreat",
  description: "Plan your yoga retreat in Ubud. Host up to 40 guests in our hot studio or 150 in our new shala — we handle the logistics.",
};

const services = [
  "Accommodation",
  "Opening ceremony",
  "Excursions",
  "Cooking, art & dance classes",
  "Spa & massage",
  "Workshops",
  "Lunches & dinners",
  "Custom group menus",
  "Restaurant itineraries",
];

export default function HostRetreat() {
  return (
    <>
      <PageHero
        variant="split"
        image="/images/day4-rafting-12-ob9z721opkafpfmdnt9pwynvjs2zm2p6uy9lb0red8.webp"
        alt="Retreat guests sharing fresh coconuts"
        title="Host your retreat"
        lead="Hot yoga, aerial and props above the forest and river. Leave the logistics to us."
      >
        <Button href={`mailto:${site.email}`}>Plan with Us</Button>
        <Button href={site.whatsapp} variant="outline-light">
          WhatsApp
        </Button>
      </PageHero>

      <section className="bg-forest text-cream">
        <dl className="container-x grid grid-cols-2 divide-x divide-cream/15">
          {[
            ["40", "guests in our hot yoga studio"],
            ["150", "guests in our new shala, 150 m away"],
          ].map(([v, k]) => (
            <div key={v} className="flex flex-col items-center gap-2 py-8 text-center md:py-12">
              <dd className="text-6xl md:text-8xl">{v}</dd>
              <dt className="max-w-[14rem] text-cream/70">{k}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="section-y container-x grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="text-[clamp(2.4rem,4.5vw,4rem)]">What we can do for you</h2>
          <p className="mt-5 text-lg text-sage">Rent the studio for your own classes or join our public ones — we’ll arrange the rest.</p>
          <ul className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-forest/10 sm:grid-cols-3">
            {services.map((s) => (
              <li key={s} className="flex items-center gap-3 bg-cream p-4">
                <span aria-hidden className="h-1.5 w-1.5 shrink-0 rotate-45 bg-terracotta" />
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="grid grid-cols-2 gap-2">
          <div className="relative col-span-2 aspect-[8/5.5] overflow-hidden rounded-sm">
            <Image src="/images/day4-rafting-12c-ob9z73xd38d0cnjncu2z1y6sqjtq1gwnj7kk9kom0s.webp" alt="Retreat guests walking through rice fields" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-sm">
            <Image src="/images/p15_photo_1.webp" alt="Aerial yoga in the studio" fill sizes="(min-width:1024px) 22vw, 50vw" className="object-cover" />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-sm">
            <Image src="/images/uyc-card-cafe-natural.webp" alt="Cafe bowl with a jungle view" fill sizes="(min-width:1024px) 22vw, 50vw" className="object-cover" />
          </div>
        </Reveal>
      </section>

      <CtaBand title="We can't wait to host you." text="Tell us the yoga holiday you have in mind — we'll curate it.">
        <Button href={`mailto:${site.email}`} variant="light">
          Email Us
        </Button>
        <Button href="/host-your-own-retreat/" variant="outline-light">
          Space Rental
        </Button>
      </CtaBand>
    </>
  );
}
