import Image from "next/image";
import Link from "next/link";
import { exploreLinks, nav, site } from "@/content/site";
import { GateMark } from "@/components/ui/GateMark";

// 40px-tall rows on phones (comfortable tap targets), compact list on desktop.
const linkCls = "inline-flex min-h-10 items-center transition-colors hover:text-white md:min-h-8";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-deep text-cream">
      <GateMark className="pointer-events-none absolute -right-16 -bottom-10 h-[26rem] w-[26rem] text-cream/[0.035]" />
      <div className="container-x relative grid grid-cols-2 gap-x-6 gap-y-8 py-8 md:grid-cols-12 md:py-9">
        <div className="col-span-2 md:col-span-5">
          <Image src="/images/light-logo.png" alt={site.name} width={345} height={100} className="h-14 w-auto brightness-0 invert md:h-16" />
          <a
            href={site.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-xl leading-snug text-cream transition-colors hover:text-stone md:text-2xl"
          >
            {site.address[0]}
            <br />
            {site.address[1]}
          </a>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-terracotta px-6 text-[0.75rem] uppercase tracking-[0.2em] transition-colors hover:bg-terracotta-deep"
            >
              WhatsApp {site.phone}
            </a>
          </div>
        </div>

        <FooterCol title="Visit" links={nav.flatMap((n) => (n.children ? n.children : [n]))} className="md:col-span-2" />
        <FooterCol title="Explore" links={exploreLinks} className="md:col-span-2" />


        <div className="col-span-2 md:col-span-3">
          <p className="label-caps mb-2 text-stone">Contact</p>
          <ul className="flex flex-col leading-snug text-cream/85">
            <li>
              <a href={`mailto:${site.email}`} className={`${linkCls} break-all`}>
                {site.email}
              </a>
            </li>
            <li className="flex flex-wrap gap-x-5 md:flex-col">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className={linkCls}>
                Instagram
              </a>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className={linkCls}>
                Facebook
              </a>
              <a href={site.reviews} target="_blank" rel="noopener noreferrer" className={linkCls}>
                Google Reviews
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-x relative flex flex-col gap-1 border-t border-cream/10 py-3 text-sm text-cream/75 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>
          Part of the{" "}
          <a href="http://www.yoga42indonesia.com/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center underline-offset-4 hover:underline md:min-h-0">
            Yoga42 Indonesia
          </a>{" "}
          family
        </p>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  className = "",
}: {
  title: string;
  links: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="label-caps mb-2 text-stone">{title}</p>
      <ul className="flex flex-col leading-snug text-cream/85">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link href={l.href} className={linkCls}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
