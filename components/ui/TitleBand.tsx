import type { ReactNode } from "react";
import { GateMark } from "@/components/ui/GateMark";

/** Compact dark page header for pages that lead with their content (gallery, events). */
export function TitleBand({ title, lead, children }: { title: ReactNode; lead?: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <GateMark className="pointer-events-none absolute -right-8 -bottom-16 h-80 w-80 text-cream/[0.05]" />
      <div className="container-x relative flex flex-col gap-6 pt-28 pb-8 md:flex-row md:items-end md:justify-between md:pt-32 md:pb-10">
        <div>
          <h1 className="text-[clamp(2.6rem,6vw,5rem)]">{title}</h1>
          {lead && <p className="mt-4 max-w-xl text-lg text-cream/80">{lead}</p>}
        </div>
        {children && <div className="flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
