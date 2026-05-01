import { Link, useNavigate, useLocation } from "@tanstack/react-router";
import { ShoppingBag, Heart, Search } from "lucide-react";

const nav = [
  { hash: "home", label: "Home" },
  { hash: "collections", label: "Our Collection" },
  { hash: "story", label: "Our Story" },
  { hash: "testimonials", label: "Testimonials" },
  { hash: "contact", label: "Contact Us" },
];

export function SiteHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate({ to: "/", hash });
      return;
    }
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${hash}`);
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-6">
        <a href="#home" onClick={(e) => handleNav(e, "home")} className="flex items-center gap-2">
          <span className="font-serif text-2xl tracking-wide text-primary">SweetGlam</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Habesha Atelier</span>
        </a>

        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm">
          {nav.map((n) => (
            <a
              key={n.label}
              href={`#${n.hash}`}
              onClick={(e) => handleNav(e, n.hash)}
              className="text-foreground/80 hover:text-primary transition-colors story-link"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-foreground/80">
          <button aria-label="Search" className="p-2 hover:text-primary transition-colors"><Search className="size-4" /></button>
          <button aria-label="Wishlist" className="p-2 hover:text-primary transition-colors"><Heart className="size-4" /></button>
          <Link to="/shop" aria-label="Bag" className="p-2 hover:text-primary transition-colors relative">
            <ShoppingBag className="size-4" />
            <span className="absolute -top-0.5 -right-0.5 size-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center">2</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
