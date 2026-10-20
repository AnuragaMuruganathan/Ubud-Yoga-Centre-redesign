"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useRef, useState, type ReactNode } from "react";
import { useFocusTrap } from "@/components/ui/useFocusTrap";

export function VideoLightbox({
  videoId,
  poster,
  label,
  className = "",
  sizes = "(min-width:1024px) 60vw, 100vw",
  children,
}: {
  videoId: string;
  poster: string;
  label: string;
  className?: string;
  sizes?: string;
  children?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);
  useFocusTrap(dialog, open, close);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Play video: ${label}`}
        className={`group relative block w-full cursor-pointer overflow-hidden text-left ${className}`}
      >
        <Image
          src={poster}
          alt=""
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-forest-deep/75 via-transparent to-transparent" />
        <span className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-[70%] sm:h-20 sm:w-20 sm:-translate-y-1/2 items-center justify-center rounded-full border border-cream/70 text-cream backdrop-blur-sm transition-[transform,background-color,border-color] duration-500 group-hover:scale-110 group-hover:bg-terracotta group-hover:border-terracotta md:h-24 md:w-24">
          <svg width="20" height="22" viewBox="0 0 20 22" fill="currentColor" aria-hidden className="ml-1">
            <path d="M0 0l20 11L0 22z" />
          </svg>
        </span>
        <span className="absolute right-6 bottom-5 left-6 text-cream">{children ?? <span className="text-xl md:text-2xl">{label}</span>}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={dialog}
            role="dialog"
            aria-modal="true"
            aria-label={label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center overscroll-contain bg-forest-deep/95 p-4"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              autoFocus
              aria-label="Close video"
              className="absolute top-4 right-4 flex h-12 w-12 cursor-pointer items-center justify-center text-cream"
              onClick={() => setOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
                <path d="M2 2l16 16M18 2L2 18" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-video w-full max-w-6xl overflow-hidden bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                title={label}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                className="h-full w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
