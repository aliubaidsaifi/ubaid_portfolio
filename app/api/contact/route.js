import { NextResponse } from "next/server";

const escape = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name = "", email = "", service = "", budget = "", message = "", company_website = "" } = body;

  // Bots fill the hidden honeypot field; pretend success so they move on.
  if (company_website) return NextResponse.json({ ok: true });

  if (name.trim().length < 2 || !isEmail(email) || message.trim().length < 10) {
    return NextResponse.json({ error: "Please add your name, a valid email and a few words about the project." }, { status: 400 });
  }
  if (name.length > 120 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "That message is a little too long." }, { status: 400 });
  }

  const { BREVO_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } = process.env;
  if (!BREVO_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    console.error("Contact form: Brevo environment variables are missing.");
    return NextResponse.json({ error: "The form isn't connected yet." }, { status: 503 });
  }

  const html = `
    <h2>New portfolio enquiry</h2>
    <p><strong>Name:</strong> ${escape(name)}</p>
    <p><strong>Email:</strong> ${escape(email)}</p>
    <p><strong>Service:</strong> ${escape(service) || "—"}</p>
    <p><strong>Budget:</strong> ${escape(budget) || "—"}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-line">${escape(message)}</p>`;

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "api-key": BREVO_API_KEY, "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      sender: { name: "Portfolio Leads", email: CONTACT_FROM_EMAIL },
      to: [{ email: CONTACT_TO_EMAIL }],
      replyTo: { email, name },
      subject: `New lead: ${service || "Enquiry"} — ${name}`.slice(0, 150),
      htmlContent: html,
    }),
  });

  if (!res.ok) {
    console.error("Contact form: Brevo error", res.status, await res.text());
    return NextResponse.json({ error: "Couldn't send right now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
