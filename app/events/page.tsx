import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TitleBand } from "@/components/ui/TitleBand";
import { Button, Arrow } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { events } from "@/content/events";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Events & Training",
  description: "Workshops and teacher trainings at Ubud Yoga Centre, including Hot Pilates Teacher Training with Gabi Walters.",
};

export default function Events() {
  return (
    <>
      <TitleBand title="Events & Training" lead="Workshops and teacher trainings at Ubud Yoga Centre.">
        <Button href={site.whatsapp} variant="outline-light">
          Enquire
        </Button>
      </TitleBand>

      <section className="section-y container-x grid gap-4 lg:grid-cols-2">
        {events.map((e, i) => (
          <Reveal key={e.slug} delay={i * 0.1}>
            <Link href={`/event/${e.slug}/`} className="group grid h-full grid-cols-1 overflow-hidden rounded-sm bg-mist sm:grid-cols-[0.8fr_1fr]">
              <div className="relative aspect-[1122/1402] overflow-hidden bg-cream">
                <Image
                  src={e.image}
                  alt={e.title}
                  fill
                  sizes="(min-width:1024px) 22vw, (min-width:640px) 40vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-6 p-6 md:p-8">
                <p className="label-caps text-terracotta-deep">{e.dates}</p>
                <h2 className="text-3xl leading-tight transition-colors group-hover:text-terracotta">{e.title}</h2>
                <p className="text-sage">{e.summary}</p>
                <span className="label-caps mt-auto inline-flex items-center gap-2 self-start border-b border-current pb-1 text-terracotta-deep">
                  View details <Arrow className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      <CtaBand title="Host your own event." text="Studios, cafe and kitchen — available for workshops and trainings.">
        <Button href="/host-your-own-retreat/" variant="light">
          Space Rental
        </Button>
        <Button href="/host-yoga-retreat-holidays/" variant="outline-light">
          Host a Retreat
        </Button>
      </CtaBand>
    </>
  );
}
