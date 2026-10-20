import { passes } from "@/content/pricing";
import { Reveal } from "@/components/ui/Reveal";

export function PriceCards({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const dark = tone === "dark";
  return (
    // 2×2 on phones keeps all four passes on one screen; four across on desktop.
    <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-sm lg:grid-cols-4">
      {passes.map((p, i) => (
        <Reveal as="li" key={p.name} delay={i * 0.08} className="flex">
          <div
            className={`relative flex w-full flex-col justify-between gap-6 p-4 sm:p-7 md:gap-10 md:p-8 ${
              p.featured
                ? "bg-terracotta text-cream"
                : dark
                  ? "bg-forest-deep/60 text-cream"
                  : "bg-cream text-forest ring-1 ring-inset ring-forest/10"
            }`}
          >
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:justify-between sm:gap-4">
              <h3 className="text-xl sm:text-2xl">{p.name}</h3>
              {p.featured && (
                <span className="chip-caps rounded-full bg-cream px-3 py-1 whitespace-nowrap text-terracotta-deep">Most popular</span>
              )}
            </div>
            <div>
              <p className="text-[1.6rem] leading-none tabular-nums sm:text-[2.6rem]">
                {p.price}
                <span className="mt-1.5 block text-xs tracking-[0.16em] opacity-85 sm:mt-0 sm:ml-2 sm:inline sm:align-top sm:text-sm">IDR</span>
              </p>
              <p className={`mt-3 flex flex-wrap gap-x-3 text-sm ${p.featured ? "text-cream" : dark ? "text-cream/85" : "text-sage"}`}>
                <span>{p.note}</span>
                {p.save && <span className={p.featured ? "" : dark ? "text-stone" : "text-terracotta-deep"}>· {p.save}</span>}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
