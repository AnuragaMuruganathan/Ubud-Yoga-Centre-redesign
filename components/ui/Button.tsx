import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "light" | "dark" | "outline-light" | "outline-dark";

const styles: Record<Variant, string> = {
  primary: "bg-terracotta text-cream hover:bg-terracotta-deep",
  light: "bg-cream text-forest hover:bg-stone",
  dark: "bg-forest text-cream hover:bg-forest-deep",
  "outline-light": "border border-cream/60 text-cream hover:bg-cream hover:text-forest",
  "outline-dark": "border border-forest/40 text-forest hover:bg-forest hover:text-cream",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const external = /^(https?:|mailto:|tel:)/.test(href);
  const cls = `group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-7 text-[0.8rem] uppercase tracking-[0.18em] transition-colors duration-300 cursor-pointer ${styles[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );
  return external ? (
    <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  const external = /^https?:/.test(href);
  // The ::after extends the tap area to 44px tall without moving the underline away from the text.
  const cls = `group relative inline-flex items-center gap-2 border-b border-current pb-1 text-[0.8125rem] uppercase tracking-[0.16em] cursor-pointer after:absolute after:inset-x-0 after:-inset-y-2.5 after:content-[''] ${className}`;
  const inner = (
    <>
      {children}
      <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden className={className}>
      <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
