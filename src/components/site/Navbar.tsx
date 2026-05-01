import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#merch", label: "Merch" },
  { href: "#blog", label: "Blog" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <nav className="container flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="The Uncharted Forge logo" className="h-11 w-11 rounded-full animate-flicker" width={44} height={44} />
          <span className="font-display text-lg tracking-wider hidden sm:block">
            The Uncharted <span className="text-gradient-ember">Forge</span>
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#merch" className="hidden md:inline-flex items-center px-5 py-2.5 rounded-md bg-gradient-ember text-ember-foreground font-medium text-sm shadow-ember hover:scale-105 transition-smooth">
          Visit Store
        </a>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95">
          <ul className="container py-4 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">{l.label}</a></li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
