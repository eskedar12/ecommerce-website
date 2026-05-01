import { createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import hero from "@/assets/hero.jpg";
import jewelryImg from "@/assets/jewelry.jpg";
import perfumeImg from "@/assets/perfume.jpg";
import bagsImg from "@/assets/bags.jpg";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight, Sparkles, Quote, Star, Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SweetGlam — Habesha Jewelry, Perfume & Bags" },
      { name: "description", content: "Hand-finished Habesha jewelry, slow-crafted perfumes and softly tailored bags. Pieces made with love." },
      { property: "og:title", content: "SweetGlam — Habesha Atelier" },
      { property: "og:description", content: "A boutique celebrating Habesha heritage." },
    ],
  }),
  component: Home,
});

const testimonials = [
  { name: "Selam T.", role: "Bride, Addis Ababa", quote: "I wore the filigree set on my wedding day. My grandmother cried — she said it looked just like the gold she used to wear." },
  { name: "Hanna M.", role: "Architect, Dubai", quote: "The frankincense perfume is my go-to now. It's soft, warm, and just feels like me." },
  { name: "Liya G.", role: "Stylist, London", quote: "The tibeb clutch is so beautiful. The handwork is incredible — I honestly love everything from SweetGlam." },
  { name: "Mariamawit A.", role: "Doctor, Toronto", quote: "It feels like a piece of home. The packaging was so pretty too, like opening a gift from my mom." },
  { name: "Bethel K.", role: "Founder, Nairobi", quote: "I've never gotten so many compliments on jewelry. This is my third order already." },
  { name: "Sara D.", role: "Photographer, Paris", quote: "Every piece has a story. SweetGlam is more than just a brand — it really feels special." },
];

function Home() {
  const featured = products.slice(0, 4);
  const location = useLocation();
  const [sent, setSent] = useState(false);

  const cats = [
    { category: "jewelry" as const, label: "Jewelry", image: jewelryImg, blurb: "Filigree gold, hand-finished" },
    { category: "perfume" as const, label: "Perfume", image: perfumeImg, blurb: "Rose, frankincense, amber" },
    { category: "bags" as const, label: "Bags", image: bagsImg, blurb: "Soft leather, woven tibeb" },
  ];

  // Smooth-scroll to hash when arriving via header link from another route.
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }
  }, [location.hash]);

  return (
    <div>
      {/* HERO / HOME */}
      <section id="home" className="relative overflow-hidden bg-gradient-soft scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
              <Sparkles className="size-3.5" /> The Habesha Collection
            </span>
            <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-foreground">
              Heirloom pieces, <em className="text-primary not-italic">softly</em> reimagined.
            </h1>
            <p className="mt-6 text-base text-muted-foreground max-w-md leading-relaxed">
              A love letter to Habesha craftsmanship — gold filigree, frankincense, and silk-soft leather, gathered for the modern woman.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#collections" onClick={(e) => { e.preventDefault(); document.getElementById("collections")?.scrollIntoView({ behavior: "smooth" }); }} className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:opacity-90 transition shadow-soft">
                Shop the collection
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#story" onClick={(e) => { e.preventDefault(); document.getElementById("story")?.scrollIntoView({ behavior: "smooth" }); }} className="inline-flex items-center rounded-full border border-primary/30 px-6 py-3 text-sm text-primary hover:bg-primary/5 transition">
                Our story
              </a>
            </div>
            <div className="mt-10 flex items-center gap-8 text-xs text-muted-foreground">
              <div><span className="font-serif text-2xl text-primary block">100+</span> happy women</div>
              <div className="h-8 w-px bg-border" />
              <div><span className="font-serif text-2xl text-primary block">100%</span> hand-finished</div>
              <div className="h-8 w-px bg-border" />
              <div><span className="font-serif text-2xl text-primary block">∞</span> made with love</div>
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="absolute -inset-6 bg-gradient-rose opacity-20 blur-3xl rounded-full" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-petal">
              <img src={hero} alt="Habesha woman in cream silk wearing gold filigree jewelry" width={1600} height={1200} className="w-full h-[560px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl px-5 py-4 shadow-soft hidden sm:block animate-float">
              <p className="font-serif text-2xl text-primary">SweetGlam</p>
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">handwoven heritage</p>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="mx-auto max-w-7xl px-6 py-20 scroll-mt-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Curated for you</p>
            <h2 className="font-serif text-4xl sm:text-5xl">Explore the collections</h2>
          </div>
          <Link to="/shop" className="text-sm text-primary hover:underline underline-offset-4">View everything →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cats.map((c) => (
            <Link key={c.category} to="/shop/$category" params={{ category: c.category }} className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-soft">
              <img src={c.image} alt={c.label} loading="lazy" width={1024} height={1280} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                <h3 className="font-serif text-3xl">{c.label}</h3>
                <p className="text-sm opacity-90 mt-1">{c.blurb}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition">
                  Shop now <ArrowRight className="size-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED BY CATEGORY */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Featured products</p>
          <h2 className="font-serif text-4xl sm:text-5xl">A little peek at each collection</h2>
        </div>
        <div className="space-y-16">
          {(["jewelry", "perfume", "bags"] as const).map((cat) => {
            const items = products.filter((p) => p.category === cat).slice(0, 3);
            const labels = { jewelry: "Jewelry", perfume: "Perfume", bags: "Bags" };
            const blurbs = {
              jewelry: "Filigree gold pieces, hand-finished in Addis.",
              perfume: "Slow-crafted scents of rose, frankincense and amber.",
              bags: "Soft leather companions trimmed in handwoven tibeb.",
            };
            return (
              <div key={cat}>
                <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
                  <div>
                    <h3 className="font-serif text-3xl sm:text-4xl text-foreground">{labels[cat]}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{blurbs[cat]}</p>
                  </div>
                  <Link to="/shop/$category" params={{ category: cat }} className="group inline-flex items-center gap-1 text-sm text-primary hover:underline underline-offset-4">
                    Shop all {labels[cat].toLowerCase()}
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                  {items.map((p) => <ProductCard key={p.id} product={p} />)}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="bg-gradient-soft mt-20">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Loved this season</p>
            <h2 className="font-serif text-4xl sm:text-5xl">Bestsellers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featured.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section id="story" className="scroll-mt-20">
        <div className="mx-auto max-w-4xl px-6 pt-24 pb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our story</p>
          <h2 className="font-serif text-5xl sm:text-6xl leading-tight">A love letter, in gold and silk.</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            SweetGlam began on a low table in Addis Ababa, with a grandmother's filigree bangle and a small bottle of rose attar. We believe the most beautiful things are made slowly — by hand, with story.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-6 py-16 grid lg:grid-cols-2 gap-14 items-center">
          <div className="rounded-3xl overflow-hidden shadow-petal">
            <img src={hero} alt="SweetGlam atelier" loading="lazy" width={1600} height={1200} className="w-full object-cover aspect-[4/5]" />
          </div>
          <div>
            <h3 className="font-serif text-4xl">Hand, heart, heritage.</h3>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Each piece passes through the hands of women artisans in Ethiopia — goldsmiths, perfumers, weavers. We trace traditional Habesha motifs into modern silhouettes so the stories travel with you.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-6 text-sm">
              <div><dt className="font-serif text-3xl text-primary">42</dt><dd className="text-muted-foreground mt-1">Artisans</dd></div>
              <div><dt className="font-serif text-3xl text-primary">12</dt><dd className="text-muted-foreground mt-1">Years</dd></div>
              <div><dt className="font-serif text-3xl text-primary">∞</dt><dd className="text-muted-foreground mt-1">Care</dd></div>
            </dl>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-20 grid md:grid-cols-3 gap-6">
          {[
            { t: "Slow-made", d: "Small batches, hand-finished. Nothing rushed." },
            { t: "Fairly paid", d: "Direct partnerships with Ethiopian artisans." },
            { t: "Wrapped in love", d: "Every order arrives in silk-lined packaging." },
          ].map((v) => (
            <div key={v.t} className="rounded-3xl bg-card p-8 shadow-soft border border-border/50">
              <h3 className="font-serif text-2xl text-primary">{v.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-gradient-soft scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-10 text-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
            <Sparkles className="size-3.5" /> Love letters
          </span>
          <h2 className="mt-5 font-serif text-5xl sm:text-6xl text-foreground">
            Whispered <em className="text-primary not-italic">testimonials</em>
          </h2>
          <p className="mt-5 text-base text-muted-foreground max-w-xl mx-auto">
            The kindest words from the women who wear SweetGlam — across continents, across stories.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="relative rounded-3xl bg-card p-7 shadow-soft border border-border/60 flex flex-col">
                <Quote className="size-7 text-primary/40" />
                <blockquote className="mt-4 font-serif text-lg leading-relaxed text-foreground flex-1">
                  "{t.quote}"
                </blockquote>
                <div className="mt-6 flex items-center justify-between">
                  <figcaption>
                    <p className="font-serif text-base text-primary">{t.name}</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mt-0.5">{t.role}</p>
                  </figcaption>
                  <div className="flex gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 py-20 grid lg:grid-cols-2 gap-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Say hello</p>
            <h2 className="font-serif text-5xl sm:text-6xl">We'd love to hear from you.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
              Custom orders, gifting questions, or just a hello — write to us and we'll reply within two days.
            </p>

            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex items-start gap-3"><Mail className="size-5 text-primary mt-0.5" /><div><p className="font-medium">hello@sweetglam.co</p><p className="text-muted-foreground">For everything lovely</p></div></li>
              <li className="flex items-start gap-3"><Phone className="size-5 text-primary mt-0.5" /><div><p className="font-medium">+251 11 555 0142</p><p className="text-muted-foreground">Mon–Fri, 9–6 EAT</p></div></li>
              <li className="flex items-start gap-3"><MapPin className="size-5 text-primary mt-0.5" /><div><p className="font-medium">Bole, Addis Ababa</p><p className="text-muted-foreground">By appointment</p></div></li>
            </ul>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl bg-card p-8 shadow-soft border border-border/50 space-y-5"
          >
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
              <input required className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
              <input required type="email" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea required rows={5} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            </div>
            <button className="w-full rounded-full bg-primary px-6 py-3.5 text-sm text-primary-foreground hover:opacity-90 transition shadow-soft">
              {sent ? "Thank you ♡ we'll write back soon" : "Send love"}
            </button>
          </form>
        </div>

        <div className="mx-auto max-w-5xl px-6 pb-24 text-center">
          <Sparkles className="size-5 text-primary mx-auto" />
          <p className="mt-6 font-serif text-3xl sm:text-4xl leading-snug text-foreground">
            "Every piece is shaped by the hands of artisans in Addis — a quiet collaboration between tradition and the woman who wears it."
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">— SweetGlam, founder</p>
        </div>
      </section>
    </div>
  );
}
