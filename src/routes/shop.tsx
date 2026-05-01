import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop · SweetGlam" },
      { name: "description", content: "Browse the full Habesha collection — jewelry, perfume, and bags." },
    ],
  }),
  component: ShopAll,
});

function ShopAll() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <header className="text-center mb-14">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">The boutique</p>
        <h1 className="font-serif text-5xl sm:text-6xl">All collections</h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Every piece is hand-finished and gently numbered. Take your time.
        </p>
      </header>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
