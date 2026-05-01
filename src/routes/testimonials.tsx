import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star, Sparkles } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — SweetGlam" },
      { name: "description", content: "Love letters from the women who wear SweetGlam — Habesha jewelry, perfume and bags." },
      { property: "og:title", content: "Testimonials — SweetGlam" },
      { property: "og:description", content: "Real stories from women who wear SweetGlam." },
    ],
  }),
  component: TestimonialsPage,
});

const testimonials = [
  {
    name: "Selam T.",
    role: "Bride, Addis Ababa",
    quote:
      "I wore the filigree set on my wedding day. My grandmother cried — she said it looked like the gold she remembered as a girl. Beyond beautiful.",
  },
  {
    name: "Hanna M.",
    role: "Architect, Dubai",
    quote:
      "The frankincense perfume is now my signature. Soft, warm, unmistakable. Every woman asks me what I'm wearing.",
  },
  {
    name: "Liya G.",
    role: "Stylist, London",
    quote:
      "The tibeb clutch is a love letter. Hand-finished, weighty, and the embroidery is unreal. SweetGlam has my whole heart.",
  },
  {
    name: "Mariamawit A.",
    role: "Doctor, Toronto",
    quote:
      "It feels like wearing home. The packaging alone made me tear up — wrapped in cream silk like a gift from my mother.",
  },
  {
    name: "Bethel K.",
    role: "Founder, Nairobi",
    quote:
      "I've never had jewelry receive so many compliments. The craftsmanship is on another level. Already on my third order.",
  },
  {
    name: "Sara D.",
    role: "Photographer, Paris",
    quote:
      "Every piece tells a story and feels deeply personal. SweetGlam isn't just a brand — it's a feeling.",
  },
];

function TestimonialsPage() {
  return (
    <div className="bg-gradient-soft">
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-10 text-center">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
          <Sparkles className="size-3.5" /> Love letters
        </span>
        <h1 className="mt-5 font-serif text-5xl sm:text-6xl text-foreground">
          Whispered <em className="text-primary not-italic">testimonials</em>
        </h1>
        <p className="mt-5 text-base text-muted-foreground max-w-xl mx-auto">
          The kindest words from the women who wear SweetGlam — across continents, across stories.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-3xl bg-card p-7 shadow-soft border border-border/60 flex flex-col"
            >
              <Quote className="size-7 text-primary/40" />
              <blockquote className="mt-4 font-serif text-lg leading-relaxed text-foreground flex-1">
                "{t.quote}"
              </blockquote>
              <div className="mt-6 flex items-center justify-between">
                <figcaption>
                  <p className="font-serif text-base text-primary">{t.name}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-0.5">
                    {t.role}
                  </p>
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
      </section>
    </div>
  );
}
