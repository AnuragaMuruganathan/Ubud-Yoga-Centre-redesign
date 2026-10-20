import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import { TodayClasses } from "@/components/home/TodayClasses";
import { ClassRail } from "@/components/home/ClassRail";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { Button, TextLink, Arrow } from "@/components/ui/Button";
import { PriceCards } from "@/components/ui/PriceCards";
import { VideoLightbox } from "@/components/ui/VideoLightbox";
import { Parallax } from "@/components/ui/Parallax";
import { passTerms } from "@/content/pricing";
import { reviews, site } from "@/content/site";

const dayCards = [
  {
    n: "01",
    title: "Yoga Classes",
    text: "Daily hot yoga and non-heated classes. Walk-ins welcome.",
    img: "/images/uyc-card-classes.webp",
    href: "/yoga-classes-pricing/",
    cta: "Classes & Pricing",
  },
  {
    n: "02",
    title: "Café & Lounge",
    text: "Healthy food, coffee and a place to relax after class.",
    img: "/images/uyc-card-cafe-natural.webp",
    href: "/cafe/",
    cta: "Explore the Café",
  },
  {
    n: "03",
    title: "Lifestyle Shop",
    text: "Yoga clothing, jewellery, self-care products and snacks.",
    img: "/images/uyc-card-shop.webp",
    href: "/our-location/",
    cta: "Visit the Shop",
  },
];

// Clean studio photos only — no social graphics with text baked in.
const ugc = [
  ["img_6229-oasbr365w3oytuyifl0xsl13043jbmrwzyhj9llaxs.webp", "Handstand by the jungle windows"],
  ["czwh4106-oasbp3qfgoz6bhua0q5aj321utvn2mwbe4wmskj82o.webp", "Standing balance by the window"],
  ["img_0802-oas2qrwyqcug3knjubr7ux43gy3bcj79th6nuesars.webp", "A full heated class"],
  ["img_2387-oasbs10cq4zaftlcxzniachodzgr0qi94lz0jk74ps.webp", "Backbend practice"],
  ["xini5798-oafwckb4hw6s0972vdn1si7m3ulp56x0ms857n87m0.webp", "The Ubud Yoga Centre sign in raw concrete"],
];

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* Daily practice */}
      <section className="container-x grid grid-cols-1 gap-10 pt-[var(--section-y)] pb-[calc(var(--section-y)/2)] lg:grid-cols-12 lg:gap-14">
        <Reveal className="flex min-w-0 flex-col gap-8 lg:col-span-5">
          <div>
            <h2 className="text-[clamp(2.6rem,5vw,4.6rem)]">Your Daily Practice</h2>
            <p className="mt-5 max-w-md text-lg text-sage">
              Bikram, Hot Pilates, Hot TRX and Hot Power Vinyasa alongside non-heated Hatha, Ashtanga &amp; more.
            </p>
          </div>
          <TodayClasses />
        </Reveal>
        <Reveal delay={0.15} className="min-w-0 lg:col-span-7">
          <VideoLightbox
            videoId={site.insideVideo}
            poster="/images/homepage-video-poster-class.webp"
            label="Inside Ubud Yoga Centre"
            className="aspect-[4/3] h-full min-h-[22rem] rounded-sm lg:aspect-auto"
          >
            <span className="flex items-end justify-between gap-4">
              <span className="text-2xl md:text-3xl">Inside Ubud Yoga Centre</span>
              <span className="label-caps hidden text-cream/80 sm:block">Watch the film</span>
            </span>
          </VideoLightbox>
        </Reveal>
      </section>

      <Marquee
        className="border-y border-forest/10 bg-sand py-5 text-[clamp(1.4rem,2.6vw,2.2rem)] text-forest"
        items={["Bikram", "Hot Pilates", "Hot TRX", "Hot Barre", "Hot Power Vinyasa", "Hatha", "Ashtanga", "Yin", "Kundalini", "Aerial", "Yoga Nidra"]}
      />

      {/* Make it your kind of day */}
      <section className="section-y container-x">
        <Reveal>
          <h2 className="mb-8 text-[clamp(2.4rem,5vw,4.5rem)] md:mb-10">Make it your kind of day.</h2>
        </Reveal>
        {/* Swipe row on phones (one screen instead of two), three columns from tablet up. */}
        <div className="-mx-[var(--gutter)] flex snap-x snap-mandatory scroll-px-[var(--gutter)] gap-3 overflow-x-auto px-[var(--gutter)] [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0">
          {dayCards.map((c, i) => {
            const inner = (
              <>
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  sizes="(min-width:768px) 33vw, 80vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/10 to-forest-deep/30" />
                <span className="absolute top-5 left-6 text-sm tracking-[0.2em] text-cream [text-shadow:0_1px_10px_rgba(16,40,31,0.8)]">{c.n}</span>
                <span className="absolute inset-x-6 bottom-6 text-cream">
                  <span className="block text-3xl">{c.title}</span>
                  <span className="mt-2 block max-w-xs text-cream/85">{c.text}</span>
                  <span className="label-caps mt-5 inline-flex items-center gap-2 border-b border-cream/60 pb-1">
                    {c.cta} <Arrow className="transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </>
            );
            return (
              <Reveal key={c.n} delay={i * 0.1} className="w-[80vw] shrink-0 snap-start md:w-auto">
                <Link href={c.href} className="group relative block aspect-[4/5] overflow-hidden rounded-sm">
                  {inner}
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <ClassRail />

      {/* Pricing */}
      <section className="section-y bg-sand">
        <div className="container-x">
          <Reveal className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-[clamp(2.4rem,5vw,4.5rem)]">One price. Every class.</h2>
              <p className="mt-3 text-lg text-sage">Hot or regular — walk in, no booking.</p>
            </div>
            <TextLink href="/yoga-classes-pricing/" className="self-start text-forest md:self-auto">
              Pricing & policy
            </TextLink>
          </Reveal>
          <PriceCards tone="light" />
          <p className="mt-4 text-sm text-sage">{passTerms}</p>
        </div>
      </section>

      {/* Reviews + student stories */}
      <section className="container-x pt-[calc(var(--section-y)/2)] pb-[var(--section-y)]">
        <Reveal className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
          <h2 className="text-[clamp(2.4rem,5vw,4.5rem)]">What our students say.</h2>
          <TextLink href={site.reviews} className="self-start text-forest md:self-auto">
            View reviews on Google
          </TextLink>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <Reveal className="min-w-0 lg:col-span-7">
            <VideoLightbox
              videoId={site.studentStoriesVideo}
              poster="/images/vbat8814-oas2q1lhezuf2hps40dnx3r6u5p1d0asdux2envbm0.webp"
              label="Meet the people behind the practice"
              sizes="(min-width:1024px) 55vw, 100vw"
              className="aspect-video rounded-sm"
            >
              <span className="block text-xl md:text-3xl">Meet the people behind the practice.</span>
            </VideoLightbox>
          </Reveal>
          <div className="flex min-w-0 flex-col gap-4 lg:col-span-5">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.08} className="flex-1">
                <figure className="flex h-full flex-col justify-between gap-4 rounded-sm bg-mist p-5 md:p-6">
                  <blockquote className="text-lg leading-snug">“{r.quote}”</blockquote>
                  <figcaption className="flex items-center justify-between text-sm text-sage">
                    <span>{r.name} · Google review</span>
                    <span aria-label="5 out of 5 stars" className="tracking-[0.2em] text-gold-deep">
                      ★★★★★
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the mat */}
      <section data-fab-avoid className="bg-forest p-2 text-cream md:p-3">
        <div className="grid auto-rows-[44vw] grid-cols-2 gap-2 md:gap-3 lg:h-[92svh] lg:auto-rows-auto lg:grid-cols-4 lg:grid-rows-2">
          <Reveal className="col-span-2 row-span-2 flex flex-col justify-center gap-8 bg-forest-deep p-7 md:p-10 lg:col-span-2 lg:row-span-1">
            <h2 className="text-[clamp(2.4rem,4.4vw,4.4rem)]">
              A space to practise
              <br />
              <span className="text-stone">and unwind.</span>
            </h2>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <p className="max-w-sm text-cream/75">
                Designed by Bali architect Popo Danes — two tiers of practice, rest and community above the jungle.
              </p>
              <TextLink href="/our-story/" className="shrink-0 self-start text-cream md:self-auto">
                Discover our space
              </TextLink>
            </div>
          </Reveal>
          <BentoImage src="/images/ubud2.webp" alt="The two-tiered Ubud Yoga Centre building" className="row-span-2 lg:col-start-3 lg:row-span-2" />
          <BentoImage src="/images/img_4704.webp" alt="The studio terrace wrapped in jungle" />
          <Link
            href="/host-your-own-retreat/"
            className="group flex flex-col justify-between gap-4 bg-terracotta p-5 transition-colors hover:bg-terracotta-deep md:p-7"
          >
            <span className="text-5xl leading-none md:text-6xl">80</span>
            <span>
              <span className="block text-xl leading-tight md:text-2xl">Café seats &amp; three studios to rent</span>
              <span className="label-caps mt-3 inline-flex items-center gap-2 border-b border-cream/60 pb-1">
                Space rental <Arrow className="transition-transform group-hover:translate-x-1" />
              </span>
            </span>
          </Link>
          <BentoImage src="/images/img_1886-oas2rbnkpvlgvduvn2adta4ry1e0u6dmw6vux7z154.webp" alt="Hanging chair overlooking the studio" className="lg:col-start-2 lg:row-start-2" />
          <BentoImage src="/images/ugc-8.webp" alt="Barre class in the glass-walled studio" />
        </div>
      </section>

      {/* Instagram */}
      <section className="pt-[calc(var(--section-y)/2)]">
        <Reveal className="container-x mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-[clamp(2.4rem,5vw,4.5rem)]">Come and hang out.</h2>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-terracotta transition-colors hover:text-terracotta-deep md:text-3xl"
          >
            {site.instagramHandle} ↗
          </a>
        </Reveal>
        <div className="flex snap-x snap-mandatory gap-1 overflow-x-auto [scrollbar-width:none] md:grid md:grid-cols-5">
          {ugc.map(([f, alt]) => (
            <a
              key={f}
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${alt} — more on Instagram`}
              className="group relative aspect-[4/5] w-[62vw] shrink-0 snap-start overflow-hidden md:w-auto"
            >
              <Image
                src={`/images/${f}`}
                alt=""
                fill
                sizes="(min-width:768px) 20vw, 62vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-forest/0 transition-colors duration-500 group-hover:bg-forest/30" />
            </a>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section data-fab-avoid className="relative flex min-h-[60svh] items-center py-[var(--section-y)] overflow-hidden bg-forest-deep text-cream">
        <Parallax className="absolute inset-0">
          <Image src="/images/ubudyogacentre-studio-carousel.webp" alt="" fill sizes="110vw" className="object-cover" />
        </Parallax>
        <div className="absolute inset-0 bg-forest-deep/70" />
        <Reveal className="container-x relative flex w-full min-w-0 flex-col items-center text-center">
          <h2 className="max-w-full text-balance text-[clamp(2.4rem,6vw,5.5rem)]">Your next class starts here.</h2>
          <p className="mt-5 max-w-md text-lg text-cream/85">Group classes are walk-in — no advance booking needed.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="/ubud-yoga-centre-class-schedule/">View Schedule</Button>
            <Button href="/yoga-beginners/" variant="outline-light">
              First Visit Guide
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function BentoImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width:1024px) 25vw, 50vw"
        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
      />
    </div>
  );
}
