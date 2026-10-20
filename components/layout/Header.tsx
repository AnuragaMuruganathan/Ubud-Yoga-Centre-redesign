"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useFocusTrap } from "@/components/ui/useFocusTrap";
import { nav, site } from "@/content/site";
import { classes } from "@/content/classes";
import { GateMark } from "@/components/ui/GateMark";

export function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      setHidden(y > 240 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMega(false);
    setMobile(false);
  }, [pathname]);

  const closeMobile = useCallback(() => setMobile(false), []);
  const light = !solid && !mega;
  const onSchedule = pathname === "/ubud-yoga-centre-class-schedule/";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,box-shadow] duration-500 ease-out ${
          hidden && !mega && !mobile ? "-translate-y-full" : "translate-y-0"
        } ${light ? "bg-gradient-to-b from-forest-deep/70 via-forest-deep/25 to-transparent" : "bg-cream/95 shadow-[0_1px_0_rgba(25,59,48,0.08)] backdrop-blur-md"}`}
        onMouseLeave={() => setMega(false)}
      >
        <div className="container-x flex h-[4.5rem] items-center justify-between md:h-20">
          <Link href="/" aria-label={`${site.name} — home`} className="relative z-10 shrink-0">
            <Image
              src={light ? "/images/light-logo.png" : "/images/dark-logo.png"}
              alt={site.name}
              width={345}
              height={100}
              priority
              className={`h-14 w-auto md:h-16 ${light ? "brightness-0 invert" : ""}`}
            />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href || item.children?.some((c) => c.href === pathname);
              return (
                <div key={item.label} onMouseEnter={() => setMega(!!item.children)}>
                  <Link
                    href={item.href}
                    aria-expanded={item.children ? mega : undefined}
                    onFocus={() => setMega(!!item.children)}
                    className={`relative px-4 py-3 text-[0.9rem] uppercase tracking-[0.2em] [-webkit-text-stroke:0.4px_currentColor] transition-colors ${
                      light ? "text-cream hover:text-white" : "text-forest hover:text-terracotta"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className={`absolute inset-x-4 bottom-1.5 h-px ${light ? "bg-cream" : "bg-terracotta"}`} />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {!onSchedule && (
              <Link
                href="/ubud-yoga-centre-class-schedule/"
                className="hidden min-h-11 items-center rounded-full bg-terracotta px-6 text-[0.8125rem] uppercase tracking-[0.16em] text-cream transition-colors hover:bg-terracotta-deep md:inline-flex"
              >
                Today’s Classes
              </Link>
            )}
            <button
              type="button"
              onClick={() => setMobile(true)}
              aria-label="Open menu"
              className={`flex h-11 w-11 cursor-pointer items-center justify-center lg:hidden ${light ? "text-cream" : "text-forest"}`}
            >
              <svg width="26" height="14" viewBox="0 0 26 14" aria-hidden>
                <path d="M0 1h26M8 13h18" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mega && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full hidden border-t border-forest/10 bg-cream lg:block"
            >
              <div className="container-x grid grid-cols-12 gap-10 py-10">
                <div className="col-span-3 flex flex-col gap-4">
                  {nav[0].children!.map((c) => (
                    <Link key={c.href} href={c.href} className="text-3xl text-forest transition-colors hover:text-terracotta">
                      {c.label}
                    </Link>
                  ))}
                </div>
                {[true, false].map((hot) => (
                  <div key={String(hot)} className="col-span-3">
                    <p className="label-caps mb-4 text-gold-deep">{hot ? "Hot" : "Regular"}</p>
                    <ul className="flex flex-col gap-2">
                      {classes
                        .filter((c) => c.hot === hot)
                        .map((c) => (
                          <li key={c.slug}>
                            <Link href={`/${c.slug}/`} className="text-xl text-forest/80 transition-colors hover:text-terracotta">
                              {c.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
                <Link href="/ubud-yoga-centre-class-schedule/" className="group relative col-span-3 overflow-hidden rounded-sm">
                  <Image
                    src="/images/uyc-card-classes.webp"
                    alt=""
                    fill
                    sizes="25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
                  <span className="absolute bottom-5 left-5 text-3xl text-cream">Today’s schedule →</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {mobile && <MobileMenu onClose={closeMobile} pathname={pathname} />}
      </AnimatePresence>
    </>
  );
}

function MobileMenu({ onClose, pathname }: { onClose: () => void; pathname: string }) {
  const links = nav.flatMap((n) => (n.children ? n.children : [n]));
  const ref = useRef<HTMLDivElement>(null);
  useFocusTrap(ref, true, onClose);
  return (
    <motion.div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[60] flex flex-col overscroll-contain bg-forest text-cream"
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between">
        <GateMark className="h-9 w-9 text-terracotta" />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          autoFocus
          className="flex h-11 w-11 cursor-pointer items-center justify-center"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
            <path d="M2 2l16 16M18 2L2 18" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>
      </div>
      <nav aria-label="Mobile" className="container-x flex flex-1 flex-col justify-center gap-1 overflow-y-auto">
        {links.map((l, i) => (
          <motion.div
            key={l.href + l.label}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={l.href}
              onClick={onClose}
              aria-current={pathname === l.href ? "page" : undefined}
              className="flex items-center gap-3 py-1.5 text-[2.1rem] leading-tight aria-[current=page]:text-stone"
            >
              {pathname === l.href && <span aria-hidden className="h-2 w-2 rotate-45 bg-terracotta" />}
              {l.label}
            </Link>
          </motion.div>
        ))}
      </nav>
      <div className="container-x flex flex-wrap gap-x-6 gap-y-2 border-t border-cream/15 py-6 text-sm text-cream/70">
        <a href={site.whatsapp}>WhatsApp</a>
        <a href={site.instagram}>Instagram</a>
        <a href={site.directions}>Directions</a>
      </div>
    </motion.div>
  );
}
