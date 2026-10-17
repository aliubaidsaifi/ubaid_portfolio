"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

// Wraps a button/link so it gently follows the cursor on hover.
export default function Magnetic({ children, strength = 0.28, className = "" }) {
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 15, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 15, mass: 0.4 });

  function onMove(e) {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={reset} style={{ x, y }} className={`inline-flex ${className}`}>
      {children}
    </motion.div>
  );
}
