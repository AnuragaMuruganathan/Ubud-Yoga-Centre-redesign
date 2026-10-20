import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button, TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { GateMark } from "@/components/ui/GateMark";
import { events, getEvent } from "@/content/events";
import { site } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const e = getEvent((await params).slug);
  return e ? { title: e.title, description: `${e.summary} ${e.dates}.`, openGraph: { images: [e.image] } } : {};
}

export default async function EventPage({ params }: Props) {
  const e = getEvent((await params).slug);
  if (!e) notFound();
  const sibling = getEvent(e.sibling);

  return (
    <>
      <section className="relative overflow-hidden bg-forest text-cream">
        <GateMark className="pointer-events-none absolute -bottom-16 -left-10 h-96 w-96 text-cream/[0.04]" />
        <div className="container-x relative grid grid-cols-1 gap-10 pt-28 pb-12 md:pt-32 lg:grid-cols-12 lg:items-end lg:gap-14 lg:pb-16">
          <div className="lg:col-span-7">
            <p className="text-xl text-stone">{e.dates}</p>
            <h1 className="mt-4 text-[clamp(2.4rem,5vw,4.6rem)]">{e.title}</h1>
            <p className="mt-5 max-w-xl text-lg text-cream/80">{e.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={e.whatsapp}>Enquire on WhatsApp</Button>
              <Button href={`mailto:${site.email}`} variant="outline-light">
                Email Us
              </Button>
            </div>
          </div>
          {/* Height-capped so the hero fits a laptop screen. */}
          <div className="relative mx-auto aspect-[1122/1402] w-full max-w-xs overflow-hidden rounded-sm lg:col-span-5 lg:w-auto lg:max-w-none lg:h-[min(62svh,36rem)] lg:justify-self-end">
            <Image src={e.image} alt={`${e.title} poster`} fill priority sizes="(min-width:1024px) 40vw, 90vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section-y container-x grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-7">
          <h2 className="text-[clamp(2.2rem,4vw,3.6rem)]">What you’ll learn</h2>
          <ol className="mt-8 grid gap-px overflow-hidden rounded-sm bg-forest/10 sm:grid-cols-2">
            {e.learn.map((l, i) => (
              <li key={l} className="flex gap-4 bg-cream p-5">
                <span className="text-2xl text-terracotta">{i + 1}</span>
                <span className="text-lg">{l}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl text-lg text-sage">{e.about}</p>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-4 lg:col-span-5">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-forest/10">
            {[
              ["Dates", e.dates],
              ["Teacher", "Gabi Walters"],
              ["Venue", "Ubud Yoga Centre"],
              ["Fees", "On enquiry"],
            ].map(([k, v]) => (
              <div key={k} className="bg-sand p-5">
                <dt className="label-caps text-gold-deep">{k}</dt>
                <dd className="mt-1 text-lg">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="text-sage">Jl. Raya Singakerta No. 108, Nyuh Kuning, Ubud, Gianyar, Bali 80571</p>
          {sibling && (
            <TextLink href={`/event/${sibling.slug}/`} className="self-start text-forest">
              {sibling.short} · {sibling.dates}
            </TextLink>
          )}
        </Reveal>
      </section>
    </>
  );
}
