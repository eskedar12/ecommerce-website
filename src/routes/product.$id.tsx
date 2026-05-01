import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { products, categoryLabels } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Heart, ShoppingBag, Truck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name ?? "Product"} · SweetGlam` },
      { name: "description", content: loaderData?.product.description ?? "SweetGlam product" },
      { property: "og:image", content: loaderData?.product.image ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-serif text-5xl text-primary">Piece not found</h1>
      <Link to="/shop" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground">Back to shop</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-serif text-3xl">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16 grid lg:grid-cols-2 gap-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-soft shadow-petal">
          <img src={product.image} alt={product.name} width={900} height={1100} className="w-full h-full object-cover aspect-[4/5]" />
          {product.tag && (
            <span className="absolute top-5 left-5 bg-primary/95 text-primary-foreground text-[11px] uppercase tracking-widest px-3 py-1 rounded-full">
              {product.tag}
            </span>
          )}
        </div>

        <div>
          <Link to="/shop/$category" params={{ category: product.category }} className="text-xs uppercase tracking-[0.3em] text-primary hover:underline">
            {categoryLabels[product.category]}
          </Link>
          <h1 className="mt-3 font-serif text-5xl text-foreground">{product.name}</h1>
         <p className="mt-4 text-2xl text-primary font-serif">ETB {product.price}</p>

          <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>

          <div className="mt-8 flex gap-3">
            <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm text-primary-foreground hover:opacity-90 transition shadow-soft">
              <ShoppingBag className="size-4" /> Add to bag
            </button>
            <button aria-label="Wishlist" className="rounded-full border border-primary/30 px-4 text-primary hover:bg-primary/5 transition">
              <Heart className="size-4" />
            </button>
          </div>

          <ul className="mt-10 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3"><Sparkles className="size-4 text-primary" /> Hand-finished by Addis artisans</li>
            <li className="flex items-center gap-3"><Truck className="size-4 text-primary" /> Complimentary shipping over ETB150</li>
            <li className="flex items-center gap-3"><Heart className="size-4 text-primary" /> Wrapped in silk for gifting</li>
          </ul>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-serif text-3xl mb-8">You may also adore</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">S
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
