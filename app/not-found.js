import Link from "next/link";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center px-5 py-24 sm:px-6">
      <p className="text-sm font-medium text-faint">404</p>
      <h1 className="mt-4 text-6xl font-semibold tracking-[-0.045em] md:text-7xl">
        This page <span className="font-serif font-normal italic text-accent">doesn&apos;t exist.</span>
      </h1>
      <Link href="/" className="mt-10 inline-flex min-h-14 items-center rounded-full bg-fg px-7 font-semibold text-bg">
        Back to home
      </Link>
    </section>
  );
}
