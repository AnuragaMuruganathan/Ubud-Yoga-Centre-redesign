import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Space Rental",
  description: "Rent our yoga rooms, cafe and commercial kitchen in Ubud for workshops, private classes and trainings.",
};

const equipment = ["Heaters", "Air conditioning", "Barre", "Ceiling fans", "Open or closed windows", "Audio", "Paiste gongs"];
const idealFor = ["Hot Yoga", "Kundalini Yoga", "Barre Training", "Gong Training", "Sound Healing", "Cooking classes"];

export default function SpaceRental() {
  return (
    <>
      <PageHero
        variant="split"
        image="/images/img_4704.webp"
        alt="The studio terrace wrapped in jungle"
        title="Rent our space"
        lead="Host workshops, private classes or trainings — with personal support for every group."
      >
        <Button href={`mailto:${site.email}`}>Email Us</Button>
        <Button href={site.whatsapp} variant="outline-light">
          WhatsApp
        </Button>
      </PageHero>

      <section className="section-y container-x grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Reveal className="rounded-sm bg-forest p-7 text-cream md:p-9">
          <h2 className="text-3xl">Yoga rooms</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {equipment.map((e) => (
              <li key={e} className="rounded-full border border-cream/25 px-4 py-2 text-sm">
                {e}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.08} className="rounded-sm bg-sand p-7 md:p-9">
          <h2 className="text-3xl">Ideal for</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {idealFor.map((e) => (
              <li key={e} className="rounded-full bg-cream px-4 py-2 text-sm">
                {e}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.16} className="flex flex-col justify-between gap-6 rounded-sm bg-terracotta p-7 text-cream md:p-9">
          <p className="text-7xl leading-none">80</p>
          <div>
            <h2 className="text-3xl">Cafe seats</h2>
            <p className="mt-2 text-cream/85">Plus a modern commercial kitchen that caters for many more.</p>
          </div>
        </Reveal>
      </section>

      <section className="grid grid-cols-2 gap-1 bg-forest p-1 md:grid-cols-4">
        {[
          ["img_0802-oas2qrwyqcug3knjubr7ux43gy3bcj79th6nuesars.webp", "A full class in the studio"],
          ["img_1886-oas2rbnkpvlgvduvn2adta4ry1e0u6dmw6vux7z154.webp", "Hanging chair above the studio"],
          ["p10_photo_1.webp", "The barre studio"],
          ["nidra-class-card.webp", "Singing bowls for sound healing"],
        ].map(([f, alt]) => (
          <div key={f} className="relative aspect-square overflow-hidden">
            <Image src={`/images/${f}`} alt={alt} fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover" />
          </div>
        ))}
      </section>

      <CtaBand title="Let's plan it together." text={`Write to ${site.email}`}>
        <Button href={`mailto:${site.email}`} variant="light">
          Email Us
        </Button>
        <Button href="/host-yoga-retreat-holidays/" variant="outline-light">
          Host a Retreat
        </Button>
      </CtaBand>
    </>
  );
}
