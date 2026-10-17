const items = [
  "Custom Shopify themes",
  "Next.js websites",
  "MERN web apps",
  "WhatsApp automation",
  "AI agents",
  "Technical SEO",
  "Playwright testing",
  "Landing pages",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="-rotate-1 bg-fg py-5 text-bg" aria-label="What I do">
      <div className="overflow-hidden">
        <ul className="marquee flex w-max items-center gap-10 whitespace-nowrap text-2xl font-semibold tracking-tight md:text-3xl">
          {row.map((t, i) => (
            <li key={`${t}-${i}`} aria-hidden={i >= items.length ? "true" : undefined} className="flex items-center gap-10">
              {t}
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" className="text-accent">
                <path fill="currentColor" d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
