// The split temple gate (candi bentar) from the Ubud Yoga Centre logo.
const tiers = [
  { x: 41, y: 8, w: 6, h: 12, r: 3 },
  { x: 37.5, y: 17, w: 9.5, h: 13, r: 5 },
  { x: 34.5, y: 28, w: 12.5, h: 14, r: 6.5 },
  { x: 31.5, y: 40, w: 15.5, h: 15, r: 7.5 },
  { x: 28, y: 53, w: 19, h: 17, r: 8.5 },
  { x: 24, y: 67, w: 23, h: 17, r: 4 },
];

export function GateMark({ className, title }: { className?: string; title?: string }) {
  const half = (
    <>
      {tiers.map((t, i) => (
        <rect key={i} x={t.x} y={t.y} width={t.w} height={t.h} rx={t.r} />
      ))}
      <rect x={42} y={8} width={5} height={78} />
      <rect x={4} y={82} width={43} height={4} />
    </>
  );
  return (
    <svg
      viewBox="0 0 100 92"
      className={className}
      fill="currentColor"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <g>{half}</g>
      <g transform="translate(100 0) scale(-1 1)">{half}</g>
    </svg>
  );
}
