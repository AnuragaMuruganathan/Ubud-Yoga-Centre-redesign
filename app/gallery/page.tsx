import type { Metadata } from "next";
import { TitleBand } from "@/components/ui/TitleBand";
import { Gallery, type Photo } from "@/components/ui/Gallery";
import { CtaBand } from "@/components/ui/CtaBand";
import sizes from "@/content/image-sizes.json";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Inside Ubud Yoga Centre — the studios, classes, cafe and jungle views of Nyuh Kuning.",
};

const shots: [string, string][] = [
  ["hero-desktop.webp", "The glass studio above the jungle at sunset"],
  ["p2_3.webp", "Bikram class in the hot room"],
  ["ubud2.webp", "The two-tiered centre among the palms"],
  ["uyc-card-classes.webp", "Smiles during a heated class"],
  ["p15_photo_1.webp", "Aerial yoga"],
  ["img_3701-oasc3o8n534dphw4qrp13qp2qpdz3mmezgf6kzt11w.webp", "The cafe & lounge"],
  ["p13_photo_1.webp", "Kundalini meditation"],
  ["homepage-video-poster-class.webp", "Hot Pilates class"],
  ["img_6229-oasbr365w3oytuyifl0xsl13043jbmrwzyhj9llaxs.webp", "Handstand by the jungle windows"],
  ["uyc-card-cafe-natural.webp", "Bowl and coffee over the river valley"],
  ["p10_photo_1.webp", "Hot Barre"],
  ["ubudyogacentre-studio-carousel.webp", "The centre from above"],
  ["nidra-class-card.webp", "Yoga Nidra with singing bowls"],
  ["ugc-8.webp", "Barre in the glass studio"],
  ["vbat8814-oas2q1lhezuf2hps40dnx3r6u5p1d0asdux2envbm0.webp", "Our teachers"],
  ["p12_photo_1.webp", "Vinyasa flow"],
  ["uyc-card-shop.webp", "The lifestyle shop"],
  ["img_1886-oas2rbnkpvlgvduvn2adta4ry1e0u6dmw6vux7z154.webp", "Hanging chair with a view"],
  ["p9_photo_1.webp", "Hatha yoga"],
  ["img_0802-oas2qrwyqcug3knjubr7ux43gy3bcj79th6nuesars.webp", "A full class"],
  ["p6_photo_1.webp", "Intro to Ashtanga"],
  ["img_4704.webp", "Studio terrace in the jungle"],
  ["czwh4106-oasbp3qfgoz6bhua0q5aj321utvn2mwbe4wmskj82o.webp", "Standing balance by the window"],
  ["trx-page-1-top.webp", "Hot TRX"],
  ["image_2026-09-12_17-22-25.webp", "Fresh juices"],
  ["p8_photo_1.webp", "Yin yoga"],
  ["xini5798-oafwckb4hw6s0972vdn1si7m3ulp56x0ms857n87m0.webp", "Ubud Yoga Centre sign"],
  ["img_2387-oasbs10cq4zaftlcxzniachodzgr0qi94lz0jk74ps.webp", "Backbend practice"],
  ["p11_photo_1.webp", "Hot Power Vinyasa"],
  ["image_2026-09-12_17-16-57.webp", "Smoothie bowl"],
];

const photos: Photo[] = shots.map(([f, alt]) => {
  const [w, h] = (sizes as Record<string, number[]>)[f];
  return { src: `/images/${f}`, alt, w, h };
});

export default function GalleryPage() {
  return (
    <>
      <TitleBand title="Gallery" lead="Life at the centre — studios, classes, cafe and jungle.">
        <Button href={site.instagram} variant="outline-light">
          {site.instagramHandle}
        </Button>
      </TitleBand>
      <section className="p-2">
        <Gallery photos={photos} />
      </section>
      <CtaBand />
    </>
  );
}
