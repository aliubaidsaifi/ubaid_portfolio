import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { steps } from "@/lib/data";

const tints = ["bg-peach", "bg-sun", "bg-mint", "bg-lilac"];

export default function Process() {
  return (
    <section id="process" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHead eyebrow="Process" title="Simple steps," accent="no surprises" center />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.1} className="flex flex-col gap-4 rounded-[28px] border border-line bg-bg p-7">
              <span className={`flex size-12 items-center justify-center rounded-full text-lg font-semibold ${tints[i]}`}>
                {i + 1}
              </span>
              <h3 className="text-xl font-semibold tracking-[-0.02em]">{s.title}</h3>
              <p className="leading-relaxed text-muted">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
