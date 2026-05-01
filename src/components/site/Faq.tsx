import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What kind of content does The Uncharted Forge create?", a: "We create and curate original campaigns, schematics, one-shots, and short fiction — all crafted to be both inspiring and practical at the table." },
  { q: "How do online DnD sessions work?", a: "We host professionally run online sessions tailored to your group, and we maintain a growing database of vetted Game Masters you can book directly." },
  { q: "Are your campaigns suitable for new players?", a: "Absolutely. Our materials are designed to lower the prep burden for GMs and welcome players from their first session to their hundredth campaign." },
  { q: "Where can I buy your merchandise?", a: "Our full merch line — t-shirts, jackets, mugs, bottles, and stickers — is available on Redbubble. Click the Visit Store button to head over." },
  { q: "Can I submit my own short story?", a: "Yes. We feature work from talented writers and professionally edit each piece. Reach out via our social channels to pitch a story." },
];

export const Faq = () => (
  <section id="faq" className="py-28">
    <div className="container max-w-3xl">
      <div className="text-center mb-14">
        <p className="text-ember font-medium tracking-[0.3em] text-xs uppercase mb-4">FAQ</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">Questions from the Tavern</h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl px-6 bg-card/60 backdrop-blur">
            <AccordionTrigger className="text-left font-display text-lg hover:no-underline hover:text-ember">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
