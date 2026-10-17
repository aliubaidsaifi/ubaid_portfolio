import Link from "next/link";
import Icon from "@/components/Icon";
import { services } from "@/lib/data";
import { site, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-10 pt-8 sm:px-6">
      <div className="grid gap-12 border-t border-line pt-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-fg font-serif text-2xl italic text-bg">u</span>
            <span className="text-[16px] font-semibold">{site.name}</span>
          </Link>
          <p className="mt-5 max-w-xs leading-relaxed text-muted">
            Freelance developer for websites, Shopify stores and automations. Based in {site.location}, working with
            clients worldwide.
          </p>
        </div>

        <nav aria-label="Services">
          <h2 className="text-sm font-semibold">Services</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-muted transition-colors hover:text-fg">
                  {s.nav}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold">Contact</h2>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <a href={`mailto:${site.email}`} className="text-muted transition-colors hover:text-fg">
                {site.email}
              </a>
            </li>
            <li>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-fg">
                WhatsApp
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-2">
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex size-11 items-center justify-center rounded-full border border-line bg-surface hover:border-fg">
              <Icon name="linkedin" size={19} />
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex size-11 items-center justify-center rounded-full border border-line bg-surface hover:border-fg">
              <Icon name="github" size={19} />
            </a>
          </div>
        </div>
      </div>

      <p aria-hidden="true" className="mt-16 select-none text-center text-[clamp(3.5rem,15vw,12rem)] font-semibold leading-none tracking-[-0.06em] text-fg/[0.06]">
        ubaid saifi
      </p>
      <p className="mt-6 text-center text-sm text-faint">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
