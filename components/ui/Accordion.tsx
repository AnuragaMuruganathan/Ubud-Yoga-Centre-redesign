export function Accordion({
  items,
  tone = "light",
  name,
}: {
  items: { q: string; a: string }[];
  tone?: "light" | "dark";
  name?: string;
}) {
  const line = tone === "dark" ? "border-cream/15" : "border-forest/15";
  return (
    <div className={`border-b ${line}`}>
      {items.map((it) => (
        <details key={it.q} name={name} className={`group border-t ${line}`}>
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg md:text-xl [&::-webkit-details-marker]:hidden">
            {it.q}
            <span aria-hidden className="relative h-4 w-4 shrink-0">
              <span className="absolute top-1/2 left-0 h-px w-4 bg-current" />
              <span className="absolute top-0 left-1/2 h-4 w-px bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
            </span>
          </summary>
          <p className={`max-w-2xl pb-5 ${tone === "dark" ? "text-cream/75" : "text-sage"}`}>{it.a}</p>
        </details>
      ))}
    </div>
  );
}
