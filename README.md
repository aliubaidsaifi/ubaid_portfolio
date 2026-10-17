# Ubaid Saifi — Portfolio

Next.js 15 (App Router, JavaScript) + Tailwind CSS v4. Static, fast, SEO-ready, mobile-first.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Before you deploy

1. **`lib/site.js`** — set `url` to your real domain (used by sitemap, canonical URLs, OG image).
   Optional: paste a Calendly / Cal.com link in `bookingUrl` so "Book a free call" opens it.
2. **`.env.local`** — copy `.env.example` and add your Brevo keys so the contact form emails you.
   On Vercel: Project → Settings → Environment Variables.
3. **Project screenshots** — put images in `public/work/` and add `image: "/work/honey-bagh.jpg"`
   to that project in `lib/data.js`. Until then a colour cover is shown.

## Where things live

| What | File |
|---|---|
| Name, email, WhatsApp, links | `lib/site.js` |
| Services, projects, experience, FAQs | `lib/data.js` |
| Colours and fonts | `app/globals.css` (`@theme`) |
| Home page sections | `app/page.js` → `components/` |
| Service pages (SEO landing pages) | `app/services/[slug]/page.js` |
| Contact form email | `app/api/contact/route.js` |

## SEO included

- Title, description, keywords, canonical, Open Graph and Twitter tags on every page
- Auto-generated OG image (`app/opengraph-image.js`) and favicon (`app/icon.svg`)
- `sitemap.xml` and `robots.txt`
- JSON-LD: Person, ProfessionalService, WebSite, Service, BreadcrumbList, FAQPage
- One landing page per service for keywords like "freelance Shopify developer"
- Semantic HTML, skip link, keyboard-friendly menu, reduced-motion support

After going live: add the site to Google Search Console and submit `/sitemap.xml`.
