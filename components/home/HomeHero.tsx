"use client";

import { getImageProps } from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Parallax } from "@/components/ui/Parallax";
import { site } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

// Art direction: landscape photo from tablet up, portrait photo of the building on phones,
// so the small screen never shows a blurry quarter of a wide image.
const heroAlt = "Ubud Yoga Centre's studios above the Nyuh Kuning jungle";
const shared = { alt: heroAlt, fill: true, priority: true, sizes: "110vw" } as const;
const { srcSet: wideSrcSet } = getImageProps({ ...shared, src: "/images/hero-desktop.webp" }).props;
const { props: tallImg } = getImageProps({ ...shared, src: "/images/ubud2.webp" });

export function HomeHero() {
  const rise = (delay: number) => ({ initial: { y: "105%" }, animate: { y: 0 }, transition: { duration: 1.2, delay, ease } });
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease },
  });

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-forest-deep text-cream">
      <Parallax hero strength={14} className="absolute inset-0">
        <picture>
          <source media="(min-width: 768px)" srcSet={wideSrcSet} />
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img {...tallImg} className="object-cover object-center md:object-[65%_center]" />
        </picture>
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/25 to-forest-deep/50" />
      <div className="absolute inset-0 hidden bg-gradient-to-l from-forest-deep/55 via-transparent to-transparent lg:block" />

      <div className="container-x relative grid gap-8 pt-36 pb-10 md:pb-14 lg:grid-cols-12 lg:items-end">
        <h1 className="lg:col-span-8">
          {/* Mask leaves room for descenders (the “g”) while the line rises into view. */}
          <span className="-mb-[0.12em] block overflow-hidden pb-[0.2em] text-[clamp(4rem,13vw,11.5rem)] leading-[0.9]">
            <motion.span {...rise(0.15)} className="block">
              Hot Yoga
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.2em] text-[clamp(1.9rem,4.6vw,4rem)] leading-none text-stone">
            <motion.span {...rise(0.3)} className="block">
              &amp; Other Classes
            </motion.span>
          </span>
        </h1>
        <motion.div {...fade(0.7)} className="flex flex-col gap-6 lg:col-span-4 lg:items-end lg:text-right">
          <p className="text-lg text-cream/85">
            {site.area}
            <br />
            Walk-ins welcome.
          </p>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button href="/yoga-classes-pricing/">Classes & Pricing</Button>
            <Button href={site.directions} variant="outline-light">
              Get Directions
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div {...fade(1)} className="relative border-t border-cream/15 bg-forest-deep/30 backdrop-blur-[2px]">
        <dl className="container-x grid grid-cols-3 divide-x divide-cream/15 text-center">
          {[
            ["Daily from", "7:30 am"],
            ["Drop-in", "IDR 165K"],
            ["Class styles", "12"],
          ].map(([k, v]) => (
            <div key={k} className="flex flex-col items-center gap-1 py-4 md:flex-row md:justify-center md:gap-3 md:py-5">
              <dt className="label-caps text-cream/65">{k}</dt>
              <dd className="text-lg md:text-xl">{v}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}
