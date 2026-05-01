import { Flame, Compass, Scroll, Users } from "lucide-react";

const pillars = [
  { icon: Scroll, title: "Crafted Content", text: "Original campaigns and detailed schematics forged with care, lifting the prep burden from every Game Master." },
  { icon: Users, title: "Vetted Game Masters", text: "A growing database of professional GMs ready to bring your story to life — tailored to your group." },
  { icon: Flame, title: "Community Tales", text: "Short stories from talented writers, professionally edited to capture the magic of fantasy storytelling." },
  { icon: Compass, title: "Gear for the Journey", text: "Thoughtfully designed apparel and gear, made for players who carry adventure into the real world." },
];

export const About = () => (
  <section id="about" className="py-28 relative">
    <div className="container max-w-6xl">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <p className="text-ember font-medium tracking-[0.3em] text-xs uppercase mb-4">About</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">A Workshop for Worlds</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Built for storytellers, Game Masters, and players alike, The Uncharted Forge is a dedicated TTRPG platform designed to fuel every corner of your tabletop experience — from your first session to your hundredth campaign.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((p) => (
          <div key={p.title} className="group p-7 rounded-xl bg-card/60 border border-border hover:border-ember/40 transition-smooth backdrop-blur">
            <div className="h-12 w-12 rounded-lg bg-gradient-ember flex items-center justify-center mb-5 shadow-ember group-hover:scale-110 transition-smooth">
              <p.icon className="h-6 w-6 text-ember-foreground" />
            </div>
            <h3 className="font-display text-xl mb-3">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
