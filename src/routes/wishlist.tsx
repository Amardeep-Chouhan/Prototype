import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, ShoppingBag } from "lucide-react";
import { ProductCard } from "@/components/site/ProductCard";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [{ title: "Wishlist | Naik Foods" }] }),
  component: WishlistPage,
});
function WishlistPage() {
  const { wishlist } = useCart();
  const products = wishlist.map((slug) => PRODUCTS.find((p) => p.slug === slug)).filter(Boolean);
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div>
        <p className="text-sm font-semibold text-primary">Saved for later</p>
        <h1 className="mt-1 font-display text-4xl">Your wishlist</h1>
        <p className="mt-2 text-muted-foreground">
          Keep favourites here and come back whenever you're ready.
        </p>
      </div>
      {products.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed p-12 text-center">
          <Heart className="mx-auto size-12 text-muted-foreground" />
          <h2 className="mt-4 font-display text-2xl">Your wishlist is empty</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Tap the heart on any product to save it here.
          </p>
          <Link
            to="/store"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            <ShoppingBag className="size-4" /> Explore products
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => p && <ProductCard key={p.slug} product={p} />)}
        </div>
      )}
    </div>
  );
}
