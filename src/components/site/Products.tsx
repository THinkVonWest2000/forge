import campaigns from "@/assets/campaigns.jpg";
import sessions from "@/assets/sessions.jpg";
import { ArrowRight } from "lucide-react";

const products = [
  { img: campaigns, tag: "Campaigns & Schematics", title: "Forged Adventures", desc: "From quick one-shots to sprawling epics — original campaigns built to inspire at the table.", cta: "Browse Campaigns" },
  { img: sessions, tag: "Online Sessions", title: "Run by Pros", desc: "Professionally hosted DnD sessions tailored to your group, plus a database of vetted Game Masters.", cta: "Find a Table" },
];

export const Products = () => (
  <section id="products" className="py-28 bg-gradient-forge relative">
    <div className="container max-w-6xl">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-ember font-medium tracking-[0.3em] text-xs uppercase mb-4">Products</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">Tools for Every Table</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {products.map((p) => (
          <article key={p.title} className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-ember/40 shadow-deep transition-smooth">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700" />
            </div>
            <div className="p-8">
              <p className="text-xs uppercase tracking-widest text-ember mb-3">{p.tag}</p>
              <h3 className="font-display text-2xl mb-3">{p.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{p.desc}</p>
              <a href="#" className="inline-flex items-center gap-2 text-foreground font-medium hover:text-ember transition-smooth">
                {p.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
