import Icon, { WhatsAppGlyph } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site, whatsappLink } from "@/lib/site";

export default function Contact({ defaultService }) {
  const direct = [
    { href: whatsappLink, label: "WhatsApp", sub: "Fastest reply", glyph: true, external: true },
    { href: `mailto:${site.email}`, label: "Email", sub: site.email, icon: "mail" },
    { href: site.linkedin, label: "LinkedIn", sub: "Connect with me", icon: "linkedin", external: true },
  ];

  return (
    <section id="contact" className="px-3 py-16 sm:px-5 md:py-24">
      <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-fg text-bg">
        <div className="grid gap-12 p-6 sm:p-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14 lg:p-14">
          <div className="flex flex-col">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-bg/15 px-3.5 py-1.5 text-[13px] font-medium text-bg/70">
              <span className="size-1.5 rounded-full bg-accent" />
              Let&apos;s talk
            </p>
            <h2 className="mt-6 text-[clamp(2.3rem,4.4vw,3.7rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
              Got a project in mind?{" "}
              <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">Let&apos;s build it.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-bg/70">
              Tell me what you need. I&apos;ll come back within a day with ideas, a timeline and a fixed quote — free,
              no obligation.
            </p>

            <ul className="mt-10 flex flex-col gap-3 lg:mt-auto lg:pt-10">
              {direct.map((d) => (
                <li key={d.label}>
                  <a
                    href={d.href}
                    {...(d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex min-h-16 items-center gap-4 rounded-2xl bg-bg/[0.06] px-4 py-3 transition-colors hover:bg-bg/[0.12]"
                  >
                    <span className="flex size-10 items-center justify-center rounded-full bg-accent text-fg">
                      {d.glyph ? <WhatsAppGlyph size={20} /> : <Icon name={d.icon} size={19} />}
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="font-medium">{d.label}</span>
                      <span className="truncate text-sm text-bg/60">{d.sub}</span>
                    </span>
                    <Icon
                      name="arrowUpRight"
                      size={18}
                      className="ml-auto shrink-0 text-bg/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm defaultService={defaultService} />
        </div>
      </Reveal>
    </section>
  );
}
