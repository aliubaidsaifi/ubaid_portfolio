"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Icon from "@/components/Icon";

export default function FaqList({ items }) {
  const [open, setOpen] = useState(0);
  const base = useId();

  return (
    <div className="flex flex-col gap-3">
      {items.map((f, i) => {
        const isOpen = open === i;
        const panelId = `${base}-panel-${i}`;
        const btnId = `${base}-btn-${i}`;
        return (
          <div
            key={f.q}
            className={`rounded-[24px] border transition-colors duration-300 ${isOpen ? "border-fg/15 bg-surface" : "border-line bg-surface/60"}`}
          >
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex min-h-16 w-full items-center justify-between gap-6 px-6 py-5 text-left text-lg font-semibold tracking-[-0.01em] md:text-xl"
              >
                {f.q}
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0, backgroundColor: isOpen ? "#FF5A1F" : "#F6F4EF" }}
                  transition={{ duration: 0.3 }}
                  className="flex size-10 shrink-0 items-center justify-center rounded-full"
                >
                  <Icon name="plus" size={18} strokeWidth={2} />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl px-6 pb-6 leading-relaxed text-muted">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
