import JsonLd from "@/components/JsonLd";
import SectionHead from "@/components/SectionHead";
import FaqList from "@/components/FaqList";

export default function Faq({ items, title = "Questions,", accent = "answered" }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 py-24 sm:px-6 md:py-32">
      <JsonLd data={schema} />
      <SectionHead eyebrow="FAQ" title={title} accent={accent} center />
      <FaqList items={items} />
    </section>
  );
}
