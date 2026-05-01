import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story · SweetGlam" },
      { name: "description", content: "SweetGlam is a Habesha-rooted atelier handcrafting jewelry, perfume and bags in Addis Ababa." },
      { property: "og:title", content: "Our Story · SweetGlam" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our story</p>
          <h1 className="font-serif text-5xl sm:text-6xl leading-tight">Made with love, in gold and silk.</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            SweetGlam creates jewelry, perfumes, and bags inspired by tradition and designed for everyday elegance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div className="rounded-3xl overflow-hidden shadow-petal">
          <img src={hero} alt="SweetGlam atelier" loading="lazy" width={1600} height={1200} className="w-full object-cover aspect-[4/5]" />
        </div>
        <div>
          <h2 className="font-serif text-4xl">Hand, heart, heritage.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Each piece passes through the hands of women artisans in Ethiopia — goldsmiths, perfumers, weavers. We trace traditional Habesha motifs into modern silhouettes so the stories travel with you.
          </p>
          <dl className="mt-8 grid grid-cols-3 gap-6 text-sm">
            <div><dt className="font-serif text-3xl text-primary">42</dt><dd className="text-muted-foreground mt-1">Artisans</dd></div>
            <div><dt className="font-serif text-3xl text-primary">12</dt><dd className="text-muted-foreground mt-1">Years</dd></div>
            <div><dt className="font-serif text-3xl text-primary">∞</dt><dd className="text-muted-foreground mt-1">Care</dd></div>
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 grid md:grid-cols-3 gap-6">
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
      </section>
    </div>
  );
}
