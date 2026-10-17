import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { services } from "@/lib/data";

const tints = ["bg-peach", "bg-mint", "bg-lilac"];
const tilt = ["md:hover:-rotate-1", "md:hover:rotate-1", "md:hover:-rotate-1"];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-24 sm:px-6 md:py-32">
      <SectionHead
        eyebrow="Services"
        title="What I can"
        accent="build for you"
        intro="Three things, done properly. Most clients start with a website or store and add automation once it's live."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.1}>
            <Link
              href={`/services/${s.slug}`}
              className={`group flex h-full flex-col gap-5 rounded-[28px] p-7 transition-transform duration-500 ease-out hover:-translate-y-2 md:p-8 ${tints[i]} ${tilt[i]}`}
            >
              <div className="flex items-start justify-between">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-surface text-fg shadow-sm">
                  <Icon name={s.icon} size={26} strokeWidth={1.6} />
                </span>
                <span className="flex size-11 items-center justify-center rounded-full bg-fg text-bg transition-transform duration-300 group-hover:rotate-[-45deg]">
                  <Icon name="arrow" size={18} />
                </span>
              </div>
              <h3 className="mt-4 text-[26px] font-semibold leading-tight tracking-[-0.03em]">{s.title}</h3>
              <p className="leading-relaxed text-fg/75">{s.summary}</p>
              <ul className="mt-auto flex flex-col gap-2.5 border-t border-fg/10 pt-5 text-[15px]">
                {s.deliverables.slice(0, 4).map((d) => (
                  <li key={d} className="flex gap-2.5">
                    <Icon name="check" size={18} className="mt-0.5 shrink-0" strokeWidth={2} />
                    {d}
                  </li>
                ))}
              </ul>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
