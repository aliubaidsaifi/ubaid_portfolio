"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import Icon from "@/components/Icon";
import { site, bookingLink } from "@/lib/site";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 rounded-full border px-3 pl-4 transition-all duration-300 sm:pl-5 ${
          scrolled || open
            ? "border-line bg-surface/90 shadow-[0_10px_40px_-18px_rgba(20,20,20,0.25)] backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} — home`} onClick={() => setOpen(false)}>
          <motion.span
            whileHover={{ rotate: -12, scale: 1.08 }}
            className="flex size-9 items-center justify-center rounded-xl bg-fg font-serif text-2xl italic text-bg"
          >
            u
          </motion.span>
          <span className="text-[16px] font-semibold tracking-tight">{site.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-[15px] text-muted transition-colors hover:bg-fg/5 hover:text-fg"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={bookingLink}
            className="hidden min-h-11 items-center gap-2 rounded-full bg-fg px-5 text-[15px] font-medium text-bg transition-colors hover:bg-accent sm:inline-flex"
          >
            Book a free call
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full bg-fg text-bg md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-6xl rounded-[28px] border border-line bg-surface p-4 shadow-xl md:hidden"
          >
            <ul className="flex flex-col">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-4 text-3xl font-semibold tracking-tight hover:bg-bg"
                  >
                    {l.label}
                    <Icon name="arrowUpRight" size={22} className="text-faint" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <Link
              href={bookingLink}
              onClick={() => setOpen(false)}
              className="mt-3 flex min-h-13 items-center justify-center rounded-full bg-accent px-6 text-base font-semibold text-fg"
            >
              Book a free call
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
