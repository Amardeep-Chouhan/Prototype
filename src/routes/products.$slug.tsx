import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, Heart, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { ProductCard } from "@/components/site/ProductCard";
import { PRODUCTS, formatINR } from "@/data/products";
import { priceFor, useCart } from "@/lib/cart";
import { getStockLimit } from "@/lib/inventory";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    return {
      meta: [
        { title: `${product?.name ?? "Product"} | Naik Foods` },
        { name: "description", content: product?.description ?? "" },
        { property: "og:title", content: `${product?.name ?? "Product"} | Naik Foods` },
        { property: "og:description", content: product?.description ?? "" },
      ],
    };
  },
  component: ProductPage,
});

// Placeholder reviews stand in for a verified-purchase review system.
const REVIEWS = [
  {
    name: "Sneha K.",
    rating: 5,
    verified: true,
    text: "Ordered for Diwali and finished it in three days. Tastes like the batch my aunt makes in Nagpur.",
  },
  {
    name: "Mandar P.",
    rating: 4,
    verified: true,
    text: "Good crunch and the packing held up in transit. Wish the 200g pack was a little cheaper.",
  },
  {
    name: "Aarti D.",
    rating: 5,
    verified: false,
    text: "Not too oily, which is rare. Will reorder with the pickles next time.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`size-4 ${n <= Math.round(rating) ? "fill-accent text-accent" : "text-border"}`}
        />
      ))}
    </span>
  );
}

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add, wishlist, toggleWishlist } = useCart();
  const [weight, setWeight] = useState(product.weights[0] ?? "");
  const [tab, setTab] = useState<"description" | "nutrition" | "reviews">("description");
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const id = setTimeout(() => setAdded(false), 2500);
    return () => clearTimeout(id);
  }, [added]);

  const saved = wishlist.includes(product.slug);
  const price = priceFor(product.slug, weight);
  const stock = getStockLimit(product.slug);
  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  ).slice(0, 3);

  return (
    <div className="mx-auto max-w-[80rem] px-6 py-8">
      <nav className="text-sm text-muted-foreground">
        <Link to="/store" className="hover:text-foreground">
          Store
        </Link>
        <span className="px-2">/</span>
        <Link to="/store" search={{ category: product.category }} className="hover:text-foreground">
          {product.category}
        </Link>
      </nav>

      <div className="mt-5 grid gap-10 md:grid-cols-[22rem_1fr]">
        {/* Image slot kept at real size so the layout matches the live page —
            this prototype ships no photos, so the frame stays empty on purpose. */}
        <div>
          <div className="flex aspect-square w-full items-center justify-center rounded-2xl border border-dashed bg-secondary text-center">
            <span className="px-6 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {product.name}
              <span className="mt-2 block text-[11px] font-medium normal-case tracking-normal">
                Product image
              </span>
            </span>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                aria-hidden
                className="aspect-square rounded-xl border border-dashed bg-secondary"
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-display text-3xl">{product.name}</h1>
          <p className="mt-1 text-muted-foreground">{product.tagline}</p>

          <div className="mt-3 flex items-center gap-2 text-sm">
            <Stars rating={product.rating} />
            <button
              type="button"
              onClick={() => setTab("reviews")}
              className="text-muted-foreground underline"
            >
              {product.reviewCount} reviews
            </button>
          </div>

          <p className="mt-5 font-display text-3xl">{formatINR(price)}</p>

          {/* The live site labels this "Select Default option / Default option value".
              Here it says what it actually controls, as pack-size buttons. */}
          <fieldset className="mt-6">
            <legend className="text-sm font-medium">Select weight</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.weights.map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setWeight(w)}
                  aria-pressed={weight === w}
                  className={`rounded-md border px-4 py-2 text-sm ${
                    weight === w ? "border-primary bg-primary text-primary-foreground" : "bg-card"
                  }`}
                >
                  {w}
                  <span className="ml-2 opacity-70">{formatINR(priceFor(product.slug, w))}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-4 rounded-xl bg-secondary/60 p-3 text-sm">
            <span className="font-semibold text-primary">
              {stock <= 4 ? `Hurry! Only ${stock} left in stock` : "In stock"}
            </span>
            <span className="ml-2 text-muted-foreground">Maximum {stock} per order.</span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => {
                const result = add(product.slug, weight);
                if (!result.ok) {
                  toast.error(result.message ?? "Unable to add this product.");
                  return;
                }
                setAdded(true);
                toast.success(`${product.name} added to cart`, { description: weight });
              }}
              className={`flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-colors ${
                added ? "bg-brand-dark text-white" : "bg-primary text-primary-foreground"
              }`}
            >
              {added ? (
                <>
                  <Check className="size-4" /> Added to cart
                </>
              ) : (
                "Add to cart"
              )}
            </button>
            {added && (
              <Link to="/cart" className="text-sm font-semibold text-primary underline">
                View cart
              </Link>
            )}
            <button
              type="button"
              onClick={() => toggleWishlist(product.slug)}
              className="flex items-center gap-2 rounded-md border px-4 py-3 text-sm"
            >
              <Heart className="size-4" fill={saved ? "currentColor" : "none"} />
              {saved ? "Saved" : "Save for later"}
            </button>
          </div>

          <ul className="mt-6 grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
            {product.highlights.map((h) => (
              <li key={h}>• {h}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <div className="flex gap-2 border-b pb-3 text-sm">
            {(["description", "nutrition", "reviews"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`rounded-md px-3 py-1.5 capitalize ${
                  tab === t ? "bg-secondary font-medium" : "text-muted-foreground"
                }`}
              >
                {t === "nutrition" ? "Nutrition & ingredients" : t}
              </button>
            ))}
          </div>

          {tab === "description" && (
            <div className="mt-4 space-y-4 text-sm leading-relaxed">
              <p>{product.description}</p>
              <p className="text-muted-foreground">
                Prepared in small batches in our own Pune kitchen and hygienically packed for
                freshness.
              </p>
            </div>
          )}

          {/* Missing entirely on the live site — close to a legal requirement in India. */}
          {tab === "nutrition" && (
            <div className="mt-4 text-sm">
              <table className="w-full border-collapse">
                <tbody>
                  {product.nutrition.map((row) => (
                    <tr key={row.label} className="border-b last:border-b-0">
                      <th scope="row" className="py-2 text-left font-normal text-muted-foreground">
                        {row.label}
                      </th>
                      <td className="py-2 text-right font-medium">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4">
                <span className="font-medium">Ingredients: </span>
                {product.ingredients}
              </p>
              <p className="mt-2">
                <span className="font-medium">Shelf life: </span>
                {product.shelfLife}
              </p>
              <p className="mt-2 text-muted-foreground">
                Allergen note: may contain traces of peanut, sesame and milk.
              </p>
            </div>
          )}

          {tab === "reviews" && (
            <div className="mt-4 space-y-4 text-sm">
              {REVIEWS.map((r) => (
                <div key={r.name} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-center gap-2">
                    <Stars rating={r.rating} />
                    <span className="font-medium">{r.name}</span>
                    {r.verified && (
                      <span className="rounded-full bg-secondary px-2 py-0.5 text-[11px]">
                        Verified purchase
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-muted-foreground">{r.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-5 font-display text-2xl">More from {product.category}</h2>
          <div className="scroll-row -mx-4 px-4 md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0">
            {related.map((p) => (
              <div key={p.slug} className="scroll-row-item w-64 md:w-auto">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
