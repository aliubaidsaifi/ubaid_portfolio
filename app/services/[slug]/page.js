import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { ProjectCard } from "@/components/Work";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import { services, projects } from "@/lib/data";
import { site } from "@/lib/site";

const projectTypes = {
  "web-development": ["Web App", "Website", "SaaS"],
  "shopify-development": ["Shopify"],
  automation: [],
};
const tints = { "web-development": "bg-peach", "shopify-development": "bg-mint", automation: "bg-lilac" };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  const path = `/services/${s.slug}`;
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: path },
    openGraph: { url: path, title: `${s.metaTitle} | ${site.name}`, description: s.metaDescription },
    twitter: { title: `${s.metaTitle} | ${site.name}`, description: s.metaDescription },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  const related = projects.filter((p) => projectTypes[s.slug]?.includes(p.type)).slice(0, 2);
  const others = services.filter((x) => x.slug !== s.slug);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: s.title,
        description: s.metaDescription,
        serviceType: s.nav,
        url: `${site.url}/services/${s.slug}`,
        areaServed: "Worldwide",
        provider: { "@id": `${site.url}/#person` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: s.nav, item: `${site.url}/services/${s.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-6 md:pt-14">
        <nav aria-label="Breadcrumb" className="text-sm text-faint">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-fg">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/#services" className="hover:text-fg">
                Services
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-medium text-fg">
              {s.nav}
            </li>
          </ol>
        </nav>

        <Reveal className={`mt-8 rounded-[36px] p-7 sm:p-10 md:p-14 ${tints[s.slug]}`}>
          <span className="flex size-16 items-center justify-center rounded-2xl bg-surface shadow-sm">
            <Icon name={s.icon} size={30} strokeWidth={1.6} />
          </span>
          <h1 className="mt-8 max-w-4xl text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
            {s.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed">{s.tagline}</p>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-fg/70">{s.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#contact"
              className="group inline-flex min-h-14 items-center gap-3 rounded-full bg-fg pl-7 pr-2 text-base font-semibold text-bg"
            >
              Get a free quote
              <span className="flex size-10 items-center justify-center rounded-full bg-accent text-fg transition-transform duration-300 group-hover:rotate-[-45deg]">
                <Icon name="arrow" size={18} />
              </span>
            </Link>
            <Link href="/#work" className="inline-flex min-h-14 items-center rounded-full bg-surface px-7 text-base font-medium">
              See my work
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-6 md:grid-cols-[1.4fr_1fr] md:py-24">
        <Reveal>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.04em]">
            What you <span className="font-serif font-normal italic text-accent">get</span>
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {s.deliverables.map((d) => (
              <li key={d} className="flex gap-3 rounded-2xl border border-line bg-surface p-5 leading-relaxed">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-fg text-bg">
                  <Icon name="check" size={14} strokeWidth={2.4} />
                </span>
                {d}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.04em]">
            Tools I <span className="font-serif font-normal italic text-accent">use</span>
          </h2>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {s.stack.map((t) => (
              <li key={t} className="rounded-full border border-line bg-surface px-4 py-2 font-medium">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
          <Reveal>
            <h2 className="mb-10 text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.04em]">
              Related <span className="font-serif font-normal italic text-accent">work</span>
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {related.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <Process />
      <Faq items={s.faqs} title="Common" accent="questions" />
      <Contact defaultService={s.nav} />

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-6">
        <h2 className="text-sm font-semibold">Other services</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/services/${o.slug}`}
              className={`group flex items-center justify-between gap-4 rounded-[24px] p-6 transition-transform duration-300 hover:-translate-y-1 ${tints[o.slug]}`}
            >
              <span className="text-lg font-semibold tracking-[-0.02em]">{o.title}</span>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-fg text-bg transition-transform group-hover:rotate-[-45deg]">
                <Icon name="arrow" size={17} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
