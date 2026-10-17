import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import Timeline from "@/components/Timeline";
import { experience, reasons } from "@/lib/data";

const reasonStyle = [
  { icon: "shield", tint: "bg-mint" },
  { icon: "bolt", tint: "bg-sun" },
  { icon: "tag", tint: "bg-peach" },
  { icon: "globe", tint: "bg-sky" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-6 md:py-32">
      <SectionHead
        eyebrow="Why work with me"
        title="A developer who"
        accent="tests his own work"
        intro="I've spent my career on both sides of a release — building features, then trying hard to break them."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={(i % 2) * 0.1}>
            <div className="flex h-full flex-col gap-4 rounded-[28px] border border-line bg-surface p-7 transition-transform duration-500 hover:-translate-y-1">
              <span className={`flex size-12 items-center justify-center rounded-2xl ${reasonStyle[i].tint}`}>
                <Icon name={reasonStyle[i].icon} size={22} />
              </span>
              <h3 className="text-xl font-semibold tracking-[-0.02em]">{r.title}</h3>
              <p className="leading-relaxed text-muted">{r.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-24 grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <h3 className="text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
            Where I&apos;ve <span className="font-serif font-normal italic text-accent">worked</span>
          </h3>
          <p className="mt-4 max-w-sm leading-relaxed text-muted">
            Full-stack and QA roles on real products, plus freelance builds for clients in India, the UK and beyond.
          </p>
          <p className="mt-6 text-sm text-faint">
            MCA, Computer Science — AKTU
            <br />
            B.Sc. Computer Science — CCSU
          </p>
        </Reveal>
        <Timeline items={experience} />
      </div>
    </section>
  );
}
