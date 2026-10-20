import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Find Us",
  description: "Jalan Raya Singakerta No.108, Nyuh Kuning, Ubud, Bali 80571. Get directions to Ubud Yoga Centre.",
};

export default function Location() {
  return (
    <>
      <PageHero
        variant="split"
        image="/images/ubud2.webp"
        alt="The Ubud Yoga Centre building among the palms"
        title="Find Us"
        lead={
          <>
            {site.address[0]}
            <br />
            {site.address[1]}
          </>
        }
      >
        <Button href={site.directions}>Get Directions</Button>
        <Button href={site.whatsapp} variant="outline-light">
          WhatsApp
        </Button>
      </PageHero>

      <section className="grid grid-cols-1 lg:grid-cols-12">
        <div className="relative min-h-[50svh] lg:col-span-8 lg:min-h-[60svh]">
          <iframe
            src={site.mapEmbed}
            title="Map to Ubud Yoga Centre"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0 grayscale-[35%]"
          />
        </div>
        <div className="flex flex-col justify-between gap-10 bg-sand p-[var(--gutter)] py-12 lg:col-span-4 lg:p-12">
          <Reveal>
            <h2 className="text-[clamp(2.2rem,3.6vw,3.2rem)]">Get in touch</h2>
            <dl className="mt-8 flex flex-col gap-6">
              <div>
                <dt className="label-caps text-gold-deep">WhatsApp</dt>
                <dd className="mt-1 text-xl">
                  <a href={site.whatsapp} className="hover:text-terracotta">{site.phone}</a>
                </dd>
              </div>
              <div>
                <dt className="label-caps text-gold-deep">Email</dt>
                <dd className="mt-1 break-all text-lg">
                  <a href={`mailto:${site.email}`} className="hover:text-terracotta">{site.email}</a>
                </dd>
              </div>
              <div>
                <dt className="label-caps text-gold-deep">Landmark</dt>
                <dd className="mt-1 text-lg">By the Nyuh Kuning bridge (Jembatan Nyuh Kuning)</dd>
              </div>
            </dl>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            <Button href={site.directions}>Directions</Button>
            <Button href={site.instagram} variant="outline-dark">
              Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Real photos of what you'll see on arrival — no printed artwork with unreadable text. */}
      <section className="grid grid-cols-1 gap-1 bg-forest p-1 md:grid-cols-2">
        {[
          ["xini5798-oafwckb4hw6s0972vdn1si7m3ulp56x0ms857n87m0.webp", "The Ubud Yoga Centre sign set in raw concrete", "Look out for our sign"],
          ["img_4704.webp", "The studio terrace wrapped in jungle", "Studios above the jungle"],
        ].map(([f, alt, caption]) => (
          <figure key={f} className="relative aspect-[8/5] overflow-hidden">
            <Image src={`/images/${f}`} alt={alt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/80 to-transparent px-5 pt-10 pb-4 text-lg text-cream">
              {caption}
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  );
}
