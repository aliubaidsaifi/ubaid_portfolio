"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Icon from "@/components/Icon";
import { services } from "@/lib/data";
import { site, whatsappLink } from "@/lib/site";

const budgets = ["Under $500", "$500 – $1.5k", "$1.5k – $5k", "$5k+", "Not sure"];

const field =
  "w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-base text-fg placeholder:text-faint transition-colors focus:border-fg focus:bg-surface focus:outline-none";

export default function ContactForm({ defaultService = "" }) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");
  const [service, setService] = useState(defaultService);
  const [budget, setBudget] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = { ...Object.fromEntries(new FormData(form)), service, budget };
    if (!service) {
      setStatus("error");
      setError("Please pick what you need.");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  }

  return (
    <div className="rounded-[28px] bg-surface p-6 text-fg sm:p-8">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            role="status"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-[420px] flex-col items-center justify-center gap-4 text-center"
          >
            <motion.span
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}
              className="flex size-16 items-center justify-center rounded-full bg-mint"
            >
              <Icon name="check" size={30} strokeWidth={2.2} />
            </motion.span>
            <h3 className="text-3xl font-semibold tracking-[-0.03em]">Message received!</h3>
            <p className="max-w-sm leading-relaxed text-muted">
              I&apos;ll reply within one working day. Need it sooner?{" "}
              <a href={whatsappLink} className="font-medium text-fg underline underline-offset-4">
                WhatsApp me
              </a>
              .
            </p>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-6">
            <div aria-hidden="true" className="hidden">
              <label htmlFor="company_website">Leave this empty</label>
              <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <fieldset>
              <legend className="mb-3 text-sm font-semibold">What do you need?</legend>
              <div className="flex flex-wrap gap-2">
                {[...services.map((s) => s.nav), "Something else"].map((s) => {
                  const active = service === s;
                  return (
                    <button
                      type="button"
                      key={s}
                      aria-pressed={active}
                      onClick={() => setService(s)}
                      className={`min-h-11 rounded-full border px-4 text-[15px] font-medium transition-colors ${
                        active ? "border-fg bg-fg text-bg" : "border-line bg-bg hover:border-fg/40"
                      }`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold">
                  Your name
                </label>
                <input id="name" name="name" required autoComplete="name" placeholder="Jane Smith" className={field} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold">
                  Email
                </label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={field} />
              </div>
            </div>

            <fieldset>
              <legend className="mb-3 text-sm font-semibold">
                Budget <span className="font-normal text-faint">(USD, optional)</span>
              </legend>
              <div className="flex flex-wrap gap-2">
                {budgets.map((b) => {
                  const active = budget === b;
                  return (
                    <button
                      type="button"
                      key={b}
                      aria-pressed={active}
                      onClick={() => setBudget(active ? "" : b)}
                      className={`min-h-11 rounded-full border px-4 text-[15px] font-medium transition-colors ${
                        active ? "border-accent bg-accent text-fg" : "border-line bg-bg hover:border-fg/40"
                      }`}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold">
                Tell me about your project
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                minLength={10}
                placeholder="What are you building, who is it for, and when do you need it?"
                className={`${field} resize-y`}
              />
            </div>

            {status === "error" && (
              <p role="alert" className="rounded-2xl bg-peach px-4 py-3 text-sm">
                {error} You can also email{" "}
                <a href={`mailto:${site.email}`} className="font-medium underline underline-offset-4">
                  {site.email}
                </a>{" "}
                or{" "}
                <a href={whatsappLink} className="font-medium underline underline-offset-4">
                  WhatsApp me
                </a>
                .
              </p>
            )}

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-accent px-8 text-base font-semibold text-fg disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
              <Icon name="arrow" size={18} className="transition-transform group-hover:translate-x-1" />
            </motion.button>
            <p className="-mt-2 text-center text-sm text-faint">Reply within one working day. No spam, ever.</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
