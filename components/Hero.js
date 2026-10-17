"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import Icon from "@/components/Icon";
import Magnetic from "@/components/Magnetic";
import { site, bookingLink } from "@/lib/site";

const words = [
  { text: "websites", bg: "var(--color-peach)" },
  { text: "Shopify stores", bg: "var(--color-mint)" },
  { text: "web apps", bg: "var(--color-sky)" },
  { text: "automations", bg: "var(--color-lilac)" },
];

const stickers = [
  { label: "Next.js", cls: "bg-fg text-bg", pos: "left-[6%] top-[10%]", rot: -8 },
  { label: "Shopify", cls: "bg-mint text-fg", pos: "right-[8%] top-[8%]", rot: 7 },
  { label: "React", cls: "bg-sky text-fg", pos: "left-[34%] top-[30%]", rot: 4 },
  { label: "n8n", cls: "bg-lilac text-fg", pos: "right-[14%] top-[40%]", rot: -6 },
  { label: "Node.js", cls: "bg-sun text-fg", pos: "left-[8%] top-[52%]", rot: 9 },
  { label: "Playwright", cls: "bg-peach text-fg", pos: "left-[26%] top-[72%]", rot: -4 },
  { label: "MongoDB", cls: "bg-surface text-fg border border-line", pos: "right-[6%] top-[58%]", rot: 5 },
];

const ease = [0.22, 1, 0.36, 1];

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, []);
  const w = words[i];

  return (
    <motion.span
      layout
      transition={{ layout: { duration: 0.45, ease } }}
      style={{ backgroundColor: w.bg }}
      className="relative inline-flex overflow-hidden rounded-[0.22em] px-[0.18em] align-baseline transition-colors duration-500"
    >
      {/* keeps the line readable for screen readers and search engines */}
      <span className="sr-only">websites, Shopify stores, web apps and automations</span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={w.text}
          aria-hidden="true"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease }}
          className="inline-block whitespace-nowrap"
        >
          {w.text}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}

function StickerBoard() {
  const boardRef = useRef(null);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, rotate: 1.5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.9, delay: 0.35, ease }}
      className="relative"
    >
      <div
        ref={boardRef}
        className="dots relative h-[340px] overflow-hidden rounded-[32px] border border-line bg-surface sm:h-[420px]"
      >
        {stickers.map((s, i) => (
          <motion.div
            key={s.label}
            drag
            dragConstraints={boardRef}
            dragElastic={0.18}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 18 }}
            initial={{ opacity: 0, scale: 0.4, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: s.rot }}
            transition={{ delay: 0.6 + i * 0.08, type: "spring", stiffness: 260, damping: 16 }}
            whileHover={{ scale: 1.08 }}
            whileDrag={{ scale: 1.14, rotate: 0, zIndex: 10 }}
            className={`absolute ${s.pos} cursor-grab touch-none select-none rounded-2xl px-4 py-2.5 text-base font-semibold sm:px-5 sm:py-3 shadow-[0_8px_24px_-12px_rgba(20,20,20,0.35)] active:cursor-grabbing sm:text-xl ${s.cls}`}
          >
            {s.label}
          </motion.div>
        ))}
        <span className="pointer-events-none absolute right-5 top-4 font-mono text-xs text-faint">
          psst… drag the stickers
        </span>
      </div>

      {/* profile card overlapping the board */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1, ease }}
        className="absolute -bottom-6 -left-3 flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 shadow-[0_16px_40px_-20px_rgba(20,20,20,0.35)] sm:-left-6"
      >
        <span className="flex size-11 items-center justify-center rounded-full bg-accent font-serif text-2xl italic text-fg">u</span>
        <span className="flex flex-col leading-tight">
          <span className="text-[15px] font-semibold">{site.name}</span>
          <span className="text-[13px] text-muted">Full-stack · {site.location}</span>
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 pt-12 sm:px-6 md:pt-16 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:pb-32">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2 text-[13px] font-medium text-muted"
          >
            <span className="relative flex size-2">
              <span className="ping absolute inline-flex size-full rounded-full bg-[#22c55e]" />
              <span className="relative inline-flex size-2 rounded-full bg-[#16a34a]" />
            </span>
            Available for new projects — worldwide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-7 text-[clamp(2.6rem,6.4vw,5.4rem)] font-semibold leading-[1.02] tracking-[-0.045em]"
          >
            I build
            <br />
            <RotatingWord />
            <br /> that{" "}
            <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">actually sell.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
          >
            Hi, I&apos;m {site.shortName} — a full-stack developer helping brands worldwide with fast Next.js websites,
            custom Shopify stores and automations that save hours every week. I test everything I ship, so it works on
            launch day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <Link
                href={bookingLink}
                className="group inline-flex min-h-14 items-center gap-3 rounded-full bg-fg pl-7 pr-2 text-base font-semibold text-bg"
              >
                Get a free quote
                <span className="flex size-10 items-center justify-center rounded-full bg-accent text-fg transition-transform duration-300 group-hover:rotate-[-45deg]">
                  <Icon name="arrow" size={18} />
                </span>
              </Link>
            </Magnetic>
            <Link
              href="/#work"
              className="inline-flex min-h-14 items-center rounded-full border border-fg/15 bg-surface px-7 text-base font-medium transition-colors hover:border-fg"
            >
              See my work
            </Link>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } } }}
            className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-[15px] text-muted"
          >
            {["3+ years in production", "Playwright-tested releases", "Fixed-price quotes"].map((t) => (
              <motion.li
                key={t}
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                className="flex items-center gap-2"
              >
                <span className="flex size-5 items-center justify-center rounded-full bg-fg text-bg">
                  <Icon name="check" size={13} strokeWidth={2.4} />
                </span>
                {t}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <StickerBoard />
      </div>
    </section>
  );
}
