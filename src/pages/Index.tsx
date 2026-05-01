import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Merch } from "@/components/site/Merch";
import { Blog } from "@/components/site/Blog";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Products />
      <Merch />
      <Blog />
      <Faq />
    </main>
    <Footer />
  </div>
);

export default Index;
