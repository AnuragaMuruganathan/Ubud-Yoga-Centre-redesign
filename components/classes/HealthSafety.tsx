import { Reveal } from "@/components/ui/Reveal";

const safety = [
  { title: "Bring your own", text: "Your own mat and towel whenever possible." },
  { title: "Clean as you go", text: "Wipe mats and props after use and let them dry." },
  { title: "Towel on top", text: "Using a studio mat? A towel over it is compulsory." },
  { title: "Why a towel?", text: "It absorbs sweat, protects the mat and stops you sliding." },
];

/** Light band so it sits calmly before the terracotta CTA rather than stacking dark blocks. */
export function HealthSafety() {
  return (
    <section className="bg-mist py-10 md:py-12">
      <div className="container-x">
        <Reveal>
          <h2 className="mb-5 text-[clamp(2rem,3.4vw,3rem)]">Health &amp; safety</h2>
        </Reveal>
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-forest/10 lg:grid-cols-4">
          {safety.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.07} className="bg-mist py-4 pr-4 sm:pl-0 lg:pr-8 [&:nth-child(2n)]:pl-4 lg:[&:not(:first-child)]:pl-8">
              <h3 className="text-xl md:text-2xl">{s.title}</h3>
              <p className="mt-1 text-sage">{s.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
