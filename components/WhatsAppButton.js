import { WhatsAppGlyph } from "@/components/Icon";
import { whatsappLink } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-[#0B2E17] shadow-[0_12px_30px_-10px_rgba(20,20,20,0.45)] transition-transform hover:scale-110 hover:-rotate-6 sm:bottom-7 sm:right-7"
    >
      <WhatsAppGlyph size={28} />
    </a>
  );
}
