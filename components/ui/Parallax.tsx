"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/** Slow drift + gentle zoom-out of a background image as its section scrolls away. */
export function Parallax({
  children,
  className,
  strength = 12,
  hero = false,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  hero?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: hero ? ["start start", "end start"] : ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], hero ? ["0%", `${strength}%`] : [`${-strength / 2}%`, `${strength / 2}%`]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <div ref={ref} className={className}>
      <motion.div className="absolute inset-0 will-change-transform" style={reduce ? undefined : { y, scale }}>
        {children}
      </motion.div>
    </div>
  );
}
