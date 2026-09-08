import { Link } from "@tanstack/react-router";
import { Check, Heart, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import type { Product } from "@/data/products";
import { formatINR } from "@/data/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add, wishlist, toggleWishlist } = useCart();
  const saved = wishlist.includes(product.slug);
  const [added, setAdded] = useState(false);

  // Reset the "Added" state so the button doesn't stay stuck.
  useEffect(() => {
    if (!added) return;
    const id = setTimeout(() => setAdded(false), 1800);
    return () => clearTimeout(id);
  }, [added]);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card">
      {/* The live card leads with a photo. This prototype is text-only, so the
          same slot holds the product name to keep the card proportions honest. */}
      <div className="relative flex h-40 items-center justify-center bg-secondary px-6 text-center">
        <span className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {product.name}
        </span>
        {product.tags.includes("Healthy") && (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
            Healthy
          </span>
        )}
        <button
          type="button"
          aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
          aria-pressed={saved}
          onClick={() => toggleWishlist(product.slug)}
          className="absolute right-3 top-3 rounded-full bg-card p-2 text-muted-foreground shadow-sm transition-colors hover:text-primary"
        >
          <Heart className="size-4" fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="font-semibold leading-snug hover:text-primary"
        >
          {product.name}
        </Link>
        <p className="mt-1 text-[13px] text-muted-foreground">{product.tagline}</p>

        <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="size-3.5 fill-accent text-accent" />
          <span className="font-semibold text-foreground">{product.rating.toFixed(1)}</span>
          <span>({product.reviewCount})</span>
        </div>

        <div className="mt-3 flex items-end justify-between">
          <p className="text-lg font-extrabold">{formatINR(product.price)}</p>
          <p className="text-sm text-muted-foreground">{product.weights[0]}</p>
        </div>

        <button
          type="button"
          onClick={() => {
            const weight = product.weights[0] ?? "";
            const result = add(product.slug, weight);
            if (!result.ok) {
              toast.error(result.message ?? "Unable to add this product.");
              return;
            }
            setAdded(true);
            toast.success(`${product.name} added to cart`, { description: weight });
          }}
          className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-colors ${
            added
              ? "bg-brand-dark text-white"
              : "bg-primary text-primary-foreground hover:opacity-90"
          }`}
        >
          {added ? (
            <>
              <Check className="size-4" /> Added
            </>
          ) : (
            "Add to Cart"
          )}
        </button>
      </div>
    </article>
  );
}
