import hero from "@/assets/hero.jpg";
import logo from "@/assets/logo.png";

export const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <img src={hero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" width={1920} height={1080} />
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="absolute inset-0 bg-gradient-radial" />
    <div className="relative container text-center max-w-4xl animate-float-up">
      <img src={logo} alt="The Uncharted Forge" className="h-28 w-28 mx-auto mb-8 rounded-full animate-flicker shadow-arcane" width={112} height={112} />
      <p className="text-ember font-medium tracking-[0.3em] text-xs uppercase mb-6">A TTRPG Workshop for Worlds</p>
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
        The Uncharted <span className="text-gradient-ember">Forge</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
        Where imagination is crafted into adventure. Original campaigns, vetted Game Masters, short fiction, and gear for storytellers who live and breathe the game.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#products" className="px-8 py-4 rounded-md bg-gradient-ember text-ember-foreground font-medium shadow-ember hover:scale-105 transition-smooth">
          Explore the Forge
        </a>
        <a href="#about" className="px-8 py-4 rounded-md border border-border bg-card/50 backdrop-blur hover:bg-card hover:border-ember/50 transition-smooth">
          Our Story
        </a>
      </div>
    </div>
  </section>
);
