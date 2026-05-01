import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · SweetGlam" },
      { name: "description", content: "Say hello to the SweetGlam atelier — we'd love to hear from you." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20 grid lg:grid-cols-2 gap-14">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Say hello</p>
        <h1 className="font-serif text-5xl sm:text-6xl">We'd love to hear from you.</h1>
        <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
          Custom orders, gifting questions, or just a hello — write to us and we'll reply within two days.
        </p>

        <ul className="mt-10 space-y-5 text-sm">
          <li className="flex items-start gap-3"><Mail className="size-5 text-primary mt-0.5" /><div><p className="font-medium">hello@aselefech.com</p><p className="text-muted-foreground">For everything lovely</p></div></li>
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
  );
}
