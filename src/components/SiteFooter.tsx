import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-3xl text-primary">SweetGlam</p>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
           A boutique celebrating heritage through hand-finished jewelry, slow-crafted perfumes, and softly tailored bags.
          </p>
          <form className="mt-6 flex gap-2 max-w-sm">
            <input
              type="email"
              required
              placeholder="Your email for love letters"
              className="flex-1 rounded-full border border-input bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90 transition">Join</button>
          </form>
        </div>
        <div>
          <p className="font-serif text-lg mb-4">Shop</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/shop/$category" params={{ category: "jewelry" }} className="hover:text-primary">Jewelry</Link></li>
            <li><Link to="/shop/$category" params={{ category: "perfume" }} className="hover:text-primary">Perfume</Link></li>
            <li><Link to="/shop/$category" params={{ category: "bags" }} className="hover:text-primary">Bags</Link></li>
            <li><Link to="/shop" className="hover:text-primary">All collections</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-serif text-lg mb-4">Atelier</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">Our story</Link></li>
            <li><Link to="/testimonials" className="hover:text-primary">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><a className="hover:text-primary" href="#">Shipping & care</a></li>
          </ul>
          <div className="flex gap-3 mt-5 text-primary">
            <a href="https://www.instagram.com/eskedar__?igsh=MXV3ZzJubjhhM3lkMQ==" aria-label="Instagram" className="p-2 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition"><Instagram className="size-4" /></a>
            <a href="https://www.instagram.com/eskedar__?igsh=MXV3ZzJubjhhM3lkMQ==" aria-label="Facebook" className="p-2 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition"><Facebook className="size-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SweetGlam Atelier · Made with love in Addis & beyond
      </div>
    </footer>
  );
}
