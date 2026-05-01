import { ArrowRight } from "lucide-react";

const posts = [
  { tag: "Short Story", date: "Apr 2026", title: "The Lantern of Hollow Vale", excerpt: "A wandering cleric stumbles upon a village whose dead refuse to stay buried..." },
  { tag: "GM Guide", date: "Apr 2026", title: "Designing One-Shots That Land", excerpt: "Five principles for writing tight, memorable adventures your players will quote for years." },
  { tag: "Worldbuilding", date: "Mar 2026", title: "Maps That Tell Stories", excerpt: "How to draw cartography that hints at history before a single word is spoken." },
];

export const Blog = () => (
  <section id="blog" className="py-28 bg-gradient-forge">
    <div className="container max-w-6xl">
      <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
        <div>
          <p className="text-ember font-medium tracking-[0.3em] text-xs uppercase mb-4">From the Forge</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Tales & Tactics</h2>
        </div>
        <a href="#" className="inline-flex items-center gap-2 text-muted-foreground hover:text-ember transition-smooth">
          All posts <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.title} className="group p-7 rounded-xl bg-card border border-border hover:border-ember/40 hover:-translate-y-1 transition-smooth">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest mb-4">
              <span className="text-ember">{p.tag}</span>
              <span className="text-muted-foreground">{p.date}</span>
            </div>
            <h3 className="font-display text-xl mb-3 group-hover:text-ember transition-smooth">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.excerpt}</p>
            <a href="#" className="text-sm font-medium inline-flex items-center gap-2">Read more <ArrowRight className="h-3.5 w-3.5" /></a>
          </article>
        ))}
      </div>
    </div>
  </section>
);
