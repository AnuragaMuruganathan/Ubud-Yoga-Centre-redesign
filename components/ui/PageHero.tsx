import Image from "next/image";
import type { ReactNode } from "react";
import { Parallax } from "@/components/ui/Parallax";
import { GateMark } from "@/components/ui/GateMark";

type Props = {
  title: ReactNode;
  lead?: ReactNode;
  image: string;
  alt?: string;
  children?: ReactNode;
  /** "full" for high-resolution photos, "split" keeps lower-resolution photos crisp */
  variant?: "full" | "split";
  aside?: ReactNode;
};

export function PageHero({ title, lead, image, alt = "", children, variant = "full", aside }: Props) {
  if (variant === "split") {
    // The header sits on a solid band above the photo (pt-[4.5rem]/pt-20), so nav links never
    // land on a bright image. On phones the photo comes first as a short band.
    return (
      <section className="grid bg-forest pt-[4.5rem] text-cream md:pt-20 lg:min-h-[64svh] lg:grid-cols-2">
        <div className="relative order-2 flex flex-col justify-center overflow-hidden px-[var(--gutter)] py-10 lg:order-1 lg:py-14 lg:pl-[max(var(--gutter),calc((100vw-88rem)/2+var(--gutter)))]">
          <GateMark className="pointer-events-none absolute -right-12 -bottom-14 hidden h-72 w-72 text-cream/[0.04] lg:block" />
          <h1 className="relative text-[clamp(2.6rem,6vw,5.4rem)]">{title}</h1>
          {lead && <p className="relative mt-4 max-w-lg text-lg text-cream/80">{lead}</p>}
          {children && <div className="relative mt-7 flex flex-wrap gap-3">{children}</div>}
          {aside && <div className="relative mt-8">{aside}</div>}
        </div>
        <div className="relative order-1 aspect-[16/10] overflow-hidden lg:order-2 lg:aspect-auto">
          <Parallax hero className="absolute inset-0">
            <Image src={image} alt={alt} fill priority sizes="(min-width:1024px) 55vw, 110vw" className="object-cover" />
          </Parallax>
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-[70svh] items-end overflow-hidden bg-forest text-cream">
      <Parallax hero className="absolute inset-0">
        <Image src={image} alt={alt} fill priority sizes="110vw" className="object-cover" />
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/40 to-forest-deep/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/60 via-forest-deep/10 to-transparent" />
      <div className="container-x relative pt-32 pb-12 md:pb-16">
        <h1 className="max-w-4xl text-[clamp(2.6rem,7vw,6rem)]">{title}</h1>
        {lead && <p className="mt-5 max-w-xl text-lg text-cream/85">{lead}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        {aside && <div className="mt-10">{aside}</div>}
      </div>
    </section>
  );
}
