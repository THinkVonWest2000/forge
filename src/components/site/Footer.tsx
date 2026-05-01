import { Instagram, Twitter, Youtube, Twitch, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const socials = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Twitter, href: "#", label: "X / Twitter" },
  { Icon: Youtube, href: "#", label: "YouTube" },
  { Icon: Twitch, href: "#", label: "Twitch" },
  { Icon: Facebook, href: "#", label: "Facebook" },
];

export const Footer = () => (
  <footer className="border-t border-border bg-card/40">
    <div className="container max-w-6xl py-16 grid md:grid-cols-3 gap-10">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="" className="h-10 w-10 rounded-full" width={40} height={40} />
          <span className="font-display text-lg">The Uncharted <span className="text-gradient-ember">Forge</span></span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
          A workshop for worlds, a meeting place for storytellers, and a launchpad for unforgettable journeys.
        </p>
      </div>
      <div>
        <h4 className="font-display text-sm uppercase tracking-widest mb-4 text-ember">Explore</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="#about" className="hover:text-foreground transition-smooth">About</a></li>
          <li><a href="#products" className="hover:text-foreground transition-smooth">Products</a></li>
          <li><a href="#merch" className="hover:text-foreground transition-smooth">Merch</a></li>
          <li><a href="#blog" className="hover:text-foreground transition-smooth">Blog</a></li>
          <li><a href="#faq" className="hover:text-foreground transition-smooth">FAQ</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display text-sm uppercase tracking-widest mb-4 text-ember">Follow the Forge</h4>
        <div className="flex flex-wrap gap-3">
          {socials.map(({ Icon, href, label }) => (
            <a key={label} href={href} aria-label={label} className="h-11 w-11 rounded-full border border-border bg-card flex items-center justify-center hover:border-ember hover:text-ember hover:scale-110 transition-smooth">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container py-6 text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} The Uncharted Forge. Forged for storytellers.
      </div>
    </div>
  </footer>
);
