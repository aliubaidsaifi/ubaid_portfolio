// Decorative cover art for each project. Replace with a real screenshot by
// adding `image: "/work/name.jpg"` to the project in lib/data.js.
import Image from "next/image";

export default function ProjectCover({ project }) {
  const { cover, image, title } = project;
  const frame = "relative aspect-[16/11] overflow-hidden rounded-[20px]";

  if (image) {
    return (
      <div className={frame}>
        <Image
          src={image}
          alt={`${title} — project screenshot`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={frame} style={{ background: cover.bg }}>
      <div className="absolute inset-0 flex items-end p-7 transition-transform duration-700 ease-out group-hover:scale-[1.04] md:p-8">
        {cover.scene === "sea" && (
          <>
            <div className="absolute inset-x-0 bottom-0 h-[44%]" style={{ background: cover.accent }} />
            <div className="absolute inset-x-0 bottom-[44%] h-2.5 bg-[#D8C7A6]" />
            <div className="absolute right-[12%] top-[14%] size-[22%] rounded-full bg-[#E8834A]" />
          </>
        )}
        {cover.scene === "comb" && (
          <div className="absolute right-[9%] top-[12%] grid grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="block size-9 rounded-xl md:size-11"
                style={{ background: i % 2 === 0 ? cover.accent : "#E39E14" }}
              />
            ))}
          </div>
        )}
        {cover.scene === "towers" && (
          <>
            <div className="absolute bottom-0 right-[8%] h-[66%] w-[13%] bg-[#3A3833]" />
            <div className="absolute bottom-0 right-[23%] h-[50%] w-[13%] bg-[#4A4740]" />
            <div className="absolute bottom-0 right-[38%] h-[34%] w-[13%]" style={{ background: cover.accent }} />
            <div className="absolute right-[8%] top-[14%] h-[3px] w-[43%]" style={{ background: cover.accent }} />
          </>
        )}
        {cover.scene === "bars" && (
          <div className="absolute right-[8%] top-[11%] flex w-[52%] flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm">
            <span className="font-mono text-[11px] tracking-wider" style={{ color: cover.accent }}>
              LIFE SCORE
            </span>
            {[72, 48, 86].map((w) => (
              <span key={w} className="block h-2 rounded bg-[#E8E6F5]">
                <span className="block h-2 rounded" style={{ width: `${w}%`, background: cover.accent }} />
              </span>
            ))}
          </div>
        )}
        {!cover.scene && (
          <div className="absolute -right-10 -top-10 size-[55%] rounded-full opacity-30 blur-2xl" style={{ background: cover.accent }} />
        )}
        <span
          className={`relative leading-none ${
            cover.mono
              ? "font-mono text-4xl md:text-5xl"
              : cover.italic
                ? "font-serif text-5xl italic md:text-6xl"
                : "text-4xl font-semibold tracking-[-0.04em] md:text-5xl"
          }`}
          style={{ color: cover.fg }}
        >
          {cover.mark}
        </span>
      </div>
    </div>
  );
}
