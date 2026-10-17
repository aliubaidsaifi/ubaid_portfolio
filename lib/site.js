// One place for everything personal. Change these and the whole site updates.
export const site = {
  name: "Ubaid Saifi",
  shortName: "Ubaid",
  role: "Full-Stack, Shopify & Automation Developer",
  title: "Ubaid Saifi — Freelance Full-Stack, Shopify & Automation Developer",
  description:
    "Freelance developer building fast Next.js websites, custom Shopify stores and business automations for clients worldwide. 3+ years of production experience, every release tested with Playwright.",
  // TODO: replace with your real domain before deploying (used for SEO, sitemap and OG images)
  url: "https://ubaidsaifi.com",
  email: "aliubaidsaifi@gmail.com",
  // WhatsApp number in international format, digits only
  whatsapp: "919456615609",
  whatsappText: "Hi Ubaid, I found your portfolio and I'd like to discuss a project.",
  linkedin: "https://www.linkedin.com/in/ubaidsaifi",
  github: "https://github.com/aliubaidsaifi",
  // Optional: paste a Calendly / Cal.com link to turn "Book a call" into a booking page
  bookingUrl: "",
  location: "Delhi NCR, India",
  regions: ["UK", "USA", "Europe", "Australia", "New Zealand", "UAE"],
};

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappText)}`;
export const bookingLink = site.bookingUrl || "/#contact";
