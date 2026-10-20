import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { HealthSafety } from "@/components/classes/HealthSafety";

export const metadata: Metadata = {
  title: "Our Story",
  description: "From a Bikram-inspired studio in Jakarta in 2004 to Ubud Yoga Centre — Bali's hottest yoga studio.",
};

const facilities = [
  "Infrared & air-forced heaters",
  "Air conditioning",
  "Barre",
  "Ceiling fans",
  "Aerial yoga hammocks",
  "Paiste gongs",
  "Showers & lockers",
  "Mat & towel hire",
];

const img = (f: string) => `/images/${f}`;

export default function OurStory() {
  return (
    <>
      <PageHero
        variant="split"
        image={img("ubudyogacentre-studio-carousel.webp")}
        alt="Ubud Yoga Centre from above, wrapped in jungle"
        title="Bali's hottest yoga studio."
        lead="A home for every path of yoga, above the jungle in Nyuh Kuning."
      />

      <section className="bg-forest text-cream">
        <dl className="container-x grid grid-cols-3 divide-x divide-cream/15">
          {[
            ["2004", "Founded in Jakarta"],
            ["3", "Studios"],
            ["12", "Class styles"],
          ].map(([v, k]) => (
            // dt must come first; flex-col-reverse keeps the big number on top visually.
            <div key={k} className="flex flex-col-reverse items-center gap-1 py-6 text-center md:py-8">
              <dt className="text-sm text-cream/75">{k}</dt>
              <dd className="text-3xl md:text-5xl">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section-y container-x grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative aspect-[8/5] overflow-hidden rounded-sm">
          <Image src={img("xini5798-oafwckb4hw6s0972vdn1si7m3ulp56x0ms857n87m0.webp")} alt="Ubud Yoga Centre sign set in raw concrete" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-[clamp(2.4rem,4.5vw,4rem)]">Our story</h2>
          <p className="mt-5 text-xl leading-relaxed text-forest/85">
            We began in Kemang, Jakarta in 2004 — founded by yoga devotee Mony Suriany as a Bikram-inspired studio.
          </p>
          <p className="mt-4 text-lg text-sage">
            Today we’re a community of three studios and qualified teachers, sharing the joy of yoga through many paths.
          </p>
        </Reveal>
      </section>

      <section className="section-y bg-sand">
        <div className="container-x grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:order-2 relative aspect-[8/5] overflow-hidden rounded-sm">
            <Image src={img("vbat8814-oas2q1lhezuf2hps40dnx3r6u5p1d0asdux2envbm0.webp")} alt="Ubud Yoga Centre teachers together in the studio" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="lg:order-1">
            <h2 className="text-[clamp(2.4rem,4.5vw,4rem)]">Philosophy</h2>
            <p className="mt-5 text-xl leading-relaxed text-forest/85">
              Yoga for every level — taught clearly and inspiringly by teachers from a broad range of disciplines.
            </p>
            <p className="mt-4 text-lg text-sage">We want everyone to leave feeling light, confident and inspired.</p>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-forest text-cream">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="self-start lg:sticky lg:top-28 lg:col-span-5">
            <h2 className="text-[clamp(2.4rem,4.5vw,4rem)]">Our facilities</h2>
            <p className="mt-5 text-lg text-cream/80">
              Three modern, naturally lit yoga rooms in a two-tiered centre designed by Bali architect Popo Danes.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
              {facilities.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span aria-hidden className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/gallery/" variant="light">
                View Gallery
              </Button>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-2 lg:col-span-7">
            {[
              ["img_0802-oas2qrwyqcug3knjubr7ux43gy3bcj79th6nuesars.webp", "A full class in the studio", "col-span-2 aspect-[8/5]"],
              ["img_1886-oas2rbnkpvlgvduvn2adta4ry1e0u6dmw6vux7z154.webp", "Hanging chair overlooking the building", "aspect-square"],
              ["img_6229-oasbr365w3oytuyifl0xsl13043jbmrwzyhj9llaxs.webp", "Handstand by the jungle windows", "aspect-square"],
            ].map(([f, alt, cls], i) => (
              <Reveal key={f} delay={i * 0.08} className={`relative overflow-hidden rounded-sm ${cls}`}>
                <Image src={img(f)} alt={alt} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HealthSafety />
      <CtaBand title="Join the community." text="Membership lets you practise any style that suits you.">
        <Button href="/yoga-classes-pricing/" variant="light">
          Classes & Pricing
        </Button>
        <Button href="/ubud-yoga-centre-class-schedule/" variant="outline-light">
          View Schedule
        </Button>
      </CtaBand>
    </>
  );
}
