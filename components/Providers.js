"use client";

import { MotionConfig, motion, useScroll, useSpring } from "motion/react";

export default function Providers({ children }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-accent"
      />
      {children}
    </MotionConfig>
  );
}
