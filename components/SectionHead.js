import Reveal from "@/components/Reveal";

export default function SectionHead({ eyebrow, title, accent, intro, as: Tag = "h2", center = false }) {
  return (
    <Reveal className={`mb-12 md:mb-16 ${center ? "mx-auto max-w-3xl text-center" : "flex flex-col gap-6 md:flex-row md:items-end md:justify-between"}`}>
      <div className={center ? "" : "max-w-3xl"}>
        <p className={`mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] font-medium text-muted`}>
          <span className="size-1.5 rounded-full bg-accent" />
          {eyebrow}
        </p>
        <Tag className="text-[clamp(2.2rem,4.6vw,3.8rem)] font-semibold leading-[1.04] tracking-[-0.04em]">
          {title} {accent && <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">{accent}</span>}
        </Tag>
      </div>
      {intro && (
        <p className={`text-[17px] leading-relaxed text-muted ${center ? "mx-auto mt-5 max-w-xl" : "max-w-sm"}`}>{intro}</p>
      )}
    </Reveal>
  );
}
