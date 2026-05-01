import { createFileRoute, notFound } from "@tanstack/react-router";
import { products, categoryLabels, type Category } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

const valid: Category[] = ["jewelry", "perfume", "bags"];

export const Route = createFileRoute("/shop/$category")({
  loader: ({ params }) => {
    if (!valid.includes(params.category as Category)) throw notFound();
    return { category: params.category as Category };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData ? categoryLabels[loaderData.category] : "Shop"} · SweetGlam` },
      { name: "description", content: `Hand-finished Habesha ${loaderData?.category ?? ""} crafted with love.` },
    ],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-serif text-5xl text-primary">Not here</h1>
      <p className="mt-3 text-muted-foreground">That collection doesn't exist yet.</p>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-serif text-3xl">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const items = products.filter((p) => p.category === category);

  const blurbs: Record<Category, string> = {
    jewelry: "Gold filigree, garnets, and motifs drawn from rock-hewn churches.",
    perfume: "Botanicals from the highlands — rose, frankincense, sandalwood.",
    bags: "Soft leather married to handwoven tibeb. Made to be passed down.",
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <header className="text-center mb-14">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Collection</p>
        <h1 className="font-serif text-5xl sm:text-6xl">{categoryLabels[category]}</h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{blurbs[category]}</p>
      </header>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {items.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
