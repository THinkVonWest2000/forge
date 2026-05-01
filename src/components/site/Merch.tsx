import merch from "@/assets/merch.jpg";
import { ExternalLink } from "lucide-react";

export const Merch = () => (
  <section id="merch" className="py-28 relative">
    <div className="container max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
      <div className="relative rounded-2xl overflow-hidden shadow-arcane order-2 lg:order-1">
        <img src={merch} alt="Uncharted Forge apparel and gear" loading="lazy" width={1024} height={768} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>
      <div className="order-1 lg:order-2">
        <p className="text-ember font-medium tracking-[0.3em] text-xs uppercase mb-4">Merch Store</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Carry the Adventure</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Thoughtfully designed apparel and gear — t-shirts, jackets, mugs, bottles, and stickers — for players who live and breathe the game. Available now on Redbubble.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          {["T-Shirts", "Jackets", "Mugs", "Bottles", "Stickers"].map((t) => (
            <span key={t} className="px-4 py-2 rounded-full bg-secondary text-sm border border-border">{t}</span>
          ))}
        </div>
        <a href="https://www.redbubble.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-gradient-ember text-ember-foreground font-medium shadow-ember hover:scale-105 transition-smooth">
          Shop on Redbubble <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);
