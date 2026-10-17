import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import ProjectCover from "@/components/ProjectCover";
import Icon from "@/components/Icon";
import { projects } from "@/lib/data";

export function ProjectCard({ project: p }) {
  const Card = p.url ? "a" : "article";
  const linkProps = p.url
    ? { href: p.url, target: "_blank", rel: "noopener noreferrer", "aria-label": `${p.title} — view live site` }
    : {};
  return (
    <Card {...linkProps} className="group flex h-full flex-col rounded-[28px] border border-line bg-surface p-3 transition-shadow duration-500 hover:shadow-[0_24px_60px_-30px_rgba(20,20,20,0.35)]">
      <ProjectCover project={p} />
      <div className="flex flex-1 flex-col gap-3 px-3 pb-3 pt-5">
        <div>
          <p className="text-[13px] font-medium text-faint">
            {p.type} · {p.client}
          </p>
          <h3 className="mt-1 flex items-center justify-between gap-3 text-[22px] font-semibold tracking-[-0.03em]">
            {p.title}
            {p.url && (
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-bg text-fg transition-colors duration-300 group-hover:bg-fg group-hover:text-bg">
                <Icon name="arrowUpRight" size={16} />
              </span>
            )}
          </h3>
        </div>
        <p className="leading-relaxed text-muted">{p.summary}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-2">
          {p.stack.map((t) => (
            <li key={t} className="rounded-full bg-bg px-3 py-1 text-[13px] font-medium text-muted">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:px-6 md:py-32">
      <SectionHead
        eyebrow="Selected work"
        title="Recent"
        accent="projects"
        intro="Web apps for product teams, websites for growing businesses and Shopify stores for D2C brands."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.12}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
