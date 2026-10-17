import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import { faqs } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Process />
      <About />
      <Faq items={faqs} />
      <Contact />
    </>
  );
}
