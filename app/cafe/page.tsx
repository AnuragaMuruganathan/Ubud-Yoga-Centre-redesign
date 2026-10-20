import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { cafePhotos, menu, menuNote, menuTags, type MenuSection } from "@/content/cafe";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Café",
  description: "Smoothies, coffee and healthy plant-forward food with jungle views at Ubud Yoga Centre.",
};

export default function Cafe() {
  return (
    <>
      <PageHero
        variant="split"
        image="/images/uyc-card-cafe-natural.webp"
        alt="Smoothie bowl and coffee overlooking the jungle river"
        title="Café"
        lead="Smoothies, coffee and healthy food with jungle views — a calm spot before or after class."
      >
        <Button href="#menu">See the Menu</Button>
        <Button href={site.directions} variant="outline-light">
          Get Directions
        </Button>
      </PageHero>

      {/* Source photos are ~500px wide, so tiles stay small enough to remain sharp. */}
      <section aria-label="From the kitchen" className="bg-forest p-1">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-1 md:grid-cols-4">
          {cafePhotos.map((p) => (
            <div key={p.src} className="relative aspect-square overflow-hidden">
              <Image src={p.src} alt={p.alt} fill sizes="(min-width:1024px) 256px, (min-width:768px) 25vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="section-y container-x scroll-mt-20">
        <Reveal className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
          <h2 className="text-[clamp(2.4rem,5vw,4.5rem)]">Menu</h2>
          <p className="text-sm text-sage">{menuNote}</p>
        </Reveal>
        {/* Phones: one collapsible section at a time instead of four screens of cards. */}
        <div className="flex flex-col gap-2 md:hidden">
          {menu.map((sec, i) => (
            <details key={sec.title} name="menu" open={i === 0} className="group rounded-sm bg-mist">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-3 [&::-webkit-details-marker]:hidden">
                <span className="text-2xl">{sec.title}</span>
                <span className="flex items-center gap-4">
                  {sec.price && <span className="text-xl text-terracotta tabular-nums">{sec.price}</span>}
                  <span aria-hidden className="relative h-4 w-4 shrink-0">
                    <span className="absolute top-1/2 left-0 h-px w-4 bg-current" />
                    <span className="absolute top-0 left-1/2 h-4 w-px bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </span>
              </summary>
              <div className="px-5 pb-5">
                <MenuItems sec={sec} />
              </div>
            </details>
          ))}
        </div>
        <MenuColumns count={2} className="hidden md:grid md:grid-cols-2 xl:hidden" />
        <MenuColumns count={3} className="hidden xl:grid xl:grid-cols-3" />
      </section>

      <CtaBand title="Stay for lunch." text="Practise, then refuel with jungle views.">
        <Button href="/ubud-yoga-centre-class-schedule/" variant="light">
          View Schedule
        </Button>
        <Button href={site.directions} variant="outline-light">
          Get Directions
        </Button>
      </CtaBand>
    </>
  );
}

// Split the menu into balanced columns, then let a photo card fill the shortest one.
function MenuColumns({ count, className }: { count: number; className: string }) {
  const cols: MenuSection[][] = Array.from({ length: count }, () => []);
  const heights = Array(count).fill(0);
  for (const sec of menu) {
    const i = heights.indexOf(Math.min(...heights));
    cols[i].push(sec);
    heights[i] += 2.5 + sec.items.reduce((h, it) => h + (it.desc ? 1.6 : 1), 0);
  }
  const shortest = heights.indexOf(Math.min(...heights));
  return (
    <div className={`items-stretch gap-4 ${className}`}>
      {cols.map((col, c) => (
        <div key={c} className="flex flex-col gap-4">
          {col.map((sec) => (
            <Reveal key={sec.title} className="rounded-sm bg-mist p-6 md:p-7">
              <div className="mb-4 flex items-baseline justify-between gap-4 border-b border-forest/15 pb-3">
                <h3 className="text-2xl">{sec.title}</h3>
                {sec.price && <span className="text-xl text-terracotta tabular-nums">{sec.price}</span>}
              </div>
              <MenuItems sec={sec} />
            </Reveal>
          ))}
          {c === shortest && (
            <Reveal className="relative min-h-72 flex-1 overflow-hidden rounded-sm bg-forest text-cream">
              <Image src="/images/img_4704.webp" alt="The studio terrace wrapped in jungle" fill sizes="(min-width:1280px) 33vw, 50vw" className="object-cover" />
              <span className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/40 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 md:inset-x-7 md:bottom-7">
                <p className="text-3xl">Before or after class.</p>
                <p className="mt-2 max-w-xs text-cream/85">Pull up a seat above the jungle and refuel.</p>
                <a
                  href={site.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-caps mt-4 inline-flex min-h-11 items-center border-b border-cream/60 transition-colors hover:text-white"
                >
                  Get Directions
                </a>
              </div>
            </Reveal>
          )}
        </div>
      ))}
    </div>
  );
}

function MenuItems({ sec }: { sec: MenuSection }) {
  return (
    <ul className="flex flex-col gap-3">
      {sec.items.map((it) => {
        const tag = it.tag ? menuTags[it.tag] : undefined;
        return (
          <li key={it.name}>
            <p className="flex items-baseline gap-2">
              <span>{it.name}</span>
              {tag && (
                <abbr title={tag.title} className="chip-caps text-gold-deep no-underline">
                  {tag.label}
                </abbr>
              )}
              {it.price && (
                <>
                  <span aria-hidden className="mx-1 flex-1 border-b border-dotted border-forest/25" />
                  <span className="tabular-nums">{it.price}</span>
                </>
              )}
            </p>
            {it.desc && <p className="text-sm text-sage">{it.desc}</p>}
          </li>
        );
      })}
    </ul>
  );
}
