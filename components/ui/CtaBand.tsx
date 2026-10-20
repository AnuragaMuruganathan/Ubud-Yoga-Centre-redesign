import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { GateMark } from "@/components/ui/GateMark";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBand({
  title = "See you on the mat.",
  text = "Group classes are walk-in — no advance booking needed.",
  children,
}: {
  title?: ReactNode;
  text?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section data-fab-avoid className="relative overflow-hidden bg-terracotta text-cream">
      <GateMark className="pointer-events-none absolute -top-10 -right-10 h-80 w-80 text-cream/[0.07] md:h-[30rem] md:w-[30rem]" />
      <Reveal className="container-x relative flex flex-col gap-6 py-10 md:py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-[clamp(2.4rem,5.5vw,5rem)]">{title}</h2>
          {text && <p className="mt-3 max-w-lg text-lg text-cream/85">{text}</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          {children ?? (
            <>
              <Button href="/ubud-yoga-centre-class-schedule/" variant="light">
                View Schedule
              </Button>
              <Button href="/yoga-beginners/" variant="outline-light">
                First Visit Guide
              </Button>
            </>
          )}
        </div>
      </Reveal>
    </section>
  );
}
