import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/product/$id"
      params={{ id: product.id }}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-2xl bg-card aspect-[4/5] shadow-soft">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={900}
          height={1100}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
            {product.tag}
          </span>
        )}
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
       <span className="text-sm text-muted-foreground">ETB {product.price}</span>
      </div>
    </Link>
  );
}
