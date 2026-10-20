import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Button, TextLink } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { classes, getClass } from "@/content/classes";
import { sessionsFor } from "@/content/schedule";
import { site } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return classes.map((c) => ({ classSlug: c.slug }));
}

type Props = { params: Promise<{ classSlug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getClass((await params).classSlug);
  return c ? { title: `${c.name} in Ubud`, description: c.summary, openGraph: { images: [c.hero] } } : {};
}

export default async function ClassPage({ params }: Props) {
  const c = getClass((await params).classSlug);
  if (!c) notFound();
  const times = sessionsFor(c.slug);
  const related = c.related.map(getClass).filter((r) => r !== undefined);
  const stats = [
    ["Duration", c.duration],
    ["Heat", c.heat],
    ["Level", c.level],
    ["Ages", c.ages],
  ];

  return (
    <>
      <PageHero
        variant="split"
        image={c.hero}
        alt={`${c.name} at Ubud Yoga Centre`}
        title={c.name}
        lead={c.summary}
        aside={
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-cream/15">
            {stats.map(([k, v]) => (
              <div key={k} className="bg-forest p-4">
                <dt className="label-caps text-cream/75">{k}</dt>
                <dd className="mt-1 leading-snug">{v}</dd>
              </div>
            ))}
          </dl>
        }
      >
        <Button href="/ubud-yoga-centre-class-schedule/">Schedule</Button>
        <Button href={site.directions} variant="outline-light">
          Get Directions
        </Button>
      </PageHero>

      {/* About + when it runs */}
      <section className="section-y container-x grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="min-w-0 lg:col-span-7">
          <h2 className="text-[clamp(2.2rem,4vw,3.6rem)]">About this class</h2>
          <div className="mt-6 flex flex-col gap-4 text-xl leading-relaxed text-forest/85">
            {c.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-10 grid gap-6 border-t border-forest/15 pt-8 sm:grid-cols-2">
            <div>
              <h3 className="text-2xl">What to bring</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {c.bring.map((x) => (
                  <li key={x} className="flex items-center gap-3">
                    <span aria-hidden className="h-1.5 w-1.5 shrink-0 rotate-45 bg-terracotta" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl">{c.notes ? "Health notes" : "First visit"}</h3>
              <ul className="mt-4 flex flex-col gap-2.5 text-sage">
                {(c.notes ?? ["Arrive 20 minutes early to check in.", "Walk-in — no booking needed.", "Pay by cash or card at the studio."]).map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
        {/* On phones the schedule and price come first — that's what visitors look for. */}
        <Reveal delay={0.1} className="order-first flex min-w-0 flex-col gap-4 lg:order-none lg:col-span-5">
          <div className="rounded-sm bg-sand p-6 md:p-8">
            <p className="text-2xl">When it runs</p>
            <ul className="mt-4 divide-y divide-forest/10">
              {times.map((d) => (
                <li key={d.day} className="flex justify-between gap-4 py-2.5">
                  <span>{d.day}</span>
                  <span className="text-right tabular-nums text-sage">{d.times.join(" · ")}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between gap-4 rounded-sm bg-forest p-6 text-cream md:p-8">
            <div>
              <p className="text-3xl tabular-nums">165,000 IDR</p>
              <p className="mt-1 text-sm text-cream/70">Drop-in · passes from 690K</p>
            </div>
            <TextLink href="/yoga-classes-pricing/" className="shrink-0 text-cream">
              Passes
            </TextLink>
          </div>
        </Reveal>
      </section>

      {/* What to expect */}
      <section className="section-y bg-forest text-cream">
        <div className="container-x">
          <Reveal>
            <h2 className="mb-8 text-[clamp(2.2rem,4vw,3.6rem)] md:mb-10">What to expect</h2>
          </Reveal>
          <ol className={`grid gap-px overflow-hidden rounded-sm bg-cream/10 sm:grid-cols-2 ${c.expect.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
            {c.expect.map((e, i) => (
              <Reveal as="li" key={e.title} delay={i * 0.07} className="flex flex-col gap-6 bg-forest p-6 md:p-8">
                <span className="text-5xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-2xl">{e.title}</h3>
                  <p className="mt-2 text-cream/75">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y container-x grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-4">
          <h2 className="text-[clamp(2.2rem,4vw,3.6rem)]">Common questions</h2>
        </Reveal>
        <Reveal delay={0.1} className="min-w-0 lg:col-span-8">
          <Accordion items={c.faqs} name="class-faq" />
        </Reveal>
      </section>

      {/* Related */}
      <section className="section-y bg-sand">
        <div className="container-x">
          <Reveal className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-[clamp(2.2rem,4vw,3.6rem)]">Other classes</h2>
            <TextLink href="/yoga-classes-pricing/" className="shrink-0 text-forest">
              All classes
            </TextLink>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.08}>
                <Link href={`/${r.slug}/`} className="group relative block aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={r.card}
                    alt={r.name}
                    fill
                    sizes="(min-width:768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 to-transparent" />
                  <span className="absolute inset-x-5 bottom-5 text-cream">
                    <span className="block text-2xl">{r.name}</span>
                    <span className="mt-1 block text-sm text-cream/75">{r.duration} · {r.hot ? "Hot" : "Regular"}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
