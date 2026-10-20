"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useFocusTrap } from "@/components/ui/useFocusTrap";

export type Photo = { src: string; alt: string; w: number; h: number };

export function Gallery({
  photos,
  columns = "columns-2 md:columns-3 lg:columns-4",
  sizes = "(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw",
}: {
  photos: Photo[];
  columns?: string;
  /** Must match the rendered column width, or the browser downloads a too-small file. */
  sizes?: string;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length],
  );
  useFocusTrap(dialog, index !== null, close);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  return (
    <>
      <div className={`${columns} gap-2 [&>*]:mb-2`}>
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Open photo: ${p.alt}`}
            className="group relative block w-full cursor-zoom-in overflow-hidden break-inside-avoid"
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={p.w}
              height={p.h}
              sizes={sizes}
              className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            ref={dialog}
            role="dialog"
            aria-modal="true"
            aria-label={photos[index].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center overscroll-contain bg-forest-deep/95 p-4 md:p-12"
            onClick={close}
          >
            <motion.div
              key={photos[index].src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={photos[index].src} alt={photos[index].alt} fill sizes="100vw" className="object-contain" />
            </motion.div>
            {[
              { d: -1, label: "Previous photo", cls: "left-2 md:left-6", path: "M13 3L5 11l8 8" },
              { d: 1, label: "Next photo", cls: "right-2 md:right-6", path: "M7 3l8 8-8 8" },
            ].map((b) => (
              <button
                key={b.d}
                type="button"
                aria-label={b.label}
                onClick={(e) => {
                  e.stopPropagation();
                  step(b.d);
                }}
                className={`absolute top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-forest ${b.cls}`}
              >
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" aria-hidden>
                  <path d={b.path} stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </button>
            ))}
            <button
              type="button"
              autoFocus
              aria-label="Close"
              onClick={close}
              className="absolute top-4 right-4 flex h-12 w-12 cursor-pointer items-center justify-center text-cream"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
                <path d="M2 2l16 16M18 2L2 18" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-cream/70 tabular-nums">
              {index + 1} / {photos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
