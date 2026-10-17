"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";

// Experience list with a line that draws itself as you scroll.
export default function Timeline({ items }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <ol ref={ref} className="relative ml-2 border-l border-line pl-8 sm:pl-10">
      <motion.span
        aria-hidden="true"
        style={{ scaleY }}
        className="absolute -left-px top-0 h-full w-[2px] origin-top bg-accent"
      />
      {items.map((e, i) => (
        <motion.li
          key={e.company}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative pb-12 last:pb-0"
        >
          <span
            aria-hidden="true"
            className="absolute -left-[41px] top-1.5 size-4 rounded-full border-[3px] border-bg bg-accent ring-1 ring-accent sm:-left-[49px]"
          />
          <p className="text-[13px] font-medium text-faint">
            {e.period}
            {e.place && ` · ${e.place}`}
          </p>
          <h4 className="mt-1.5 text-xl font-semibold tracking-[-0.02em]">
            {e.role} <span className="font-normal text-muted">at {e.company}</span>
          </h4>
          <ul className="mt-3 flex flex-col gap-2">
            {e.points.map((pt) => (
              <li key={pt} className="leading-relaxed text-muted">
                {pt}
              </li>
            ))}
          </ul>
        </motion.li>
      ))}
    </ol>
  );
}
