import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { FREE_DELIVERY_THRESHOLD, PRODUCTS, formatINR } from "@/data/products";
import { priceFor, useCart } from "@/lib/cart";
import { applyPromo } from "@/lib/promo.functions";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart | Naik Foods" },
      {
        name: "description",
        content:
          "Review your Naik Foods order and see how close you are to free delivery on orders above ₹999.",
      },
      { property: "og:title", content: "Your Cart | Naik Foods" },
      { property: "og:description", content: "Review your Naik Foods order before checkout." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const {
    lines,
    setQty,
    remove,
    subtotal,
    deliveryFee: fee,
    discount,
    total,
    appliedPromo,
    setAppliedPromo,
  } = useCart();
  const checkPromo = useServerFn(applyPromo);
  const [code, setCode] = useState("");
  const [promoError, setPromoError] = useState("");
  const [promoBusy, setPromoBusy] = useState(false);
  const promo = appliedPromo;

  // The code is validated on the server, so the discount can't be faked here.
  const submitPromo = async (e: React.FormEvent) => {
    e.preventDefault();
    setPromoBusy(true);
    setPromoError("");
    try {
      const res = await checkPromo({ data: { code, subtotal } });
      if (res.ok) {
        setAppliedPromo({ code: res.code, discount: res.discount, note: res.note });
        setCode("");
      } else {
        setAppliedPromo(null);
        setPromoError(res.error);
      }
    } catch {
      setPromoError("Couldn't check that code. Try again.");
    } finally {
      setPromoBusy(false);
    }
  };

  const remaining = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_DELIVERY_THRESHOLD) * 100);

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-[80rem] px-6 py-20 text-center">
        <h1 className="font-display text-3xl">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">Nothing added yet.</p>
        <Link
          to="/store"
          className="mt-6 inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
        >
          Browse the store
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="font-display text-3xl">Your cart</h1>

      {/* Free-delivery progress: the live cart gives no hint of the ₹999 threshold. */}
      <div className="mt-6 rounded-lg border bg-card p-5">
        <p className="text-sm">
          {remaining > 0 ? (
            <>
              Add <span className="font-medium">{formatINR(remaining)}</span> more for free
              delivery.
            </>
          ) : (
            <span className="font-medium">You've unlocked free delivery.</span>
          )}
        </p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <ul className="mt-6 divide-y rounded-lg border bg-card">
        {lines.map((line) => {
          const product = PRODUCTS.find((p) => p.slug === line.slug);
          if (!product) return null;
          const linePrice = priceFor(line.slug, line.weight);

          return (
            <li
              key={`${line.slug}-${line.weight}`}
              className="flex flex-wrap items-center gap-4 p-4"
            >
              <div className="min-w-40 flex-1">
                <Link
                  to="/products/$slug"
                  params={{ slug: product.slug }}
                  className="font-medium hover:underline"
                >
                  {product.name}
                </Link>
                <p className="text-sm text-muted-foreground">{line.weight}</p>
              </div>

              <div className="flex items-center rounded-md border">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty(line.slug, line.weight, line.qty - 1)}
                  className="px-3 py-1.5"
                >
                  −
                </button>
                <span className="w-8 text-center text-sm">{line.qty}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => {
                    const result = setQty(line.slug, line.weight, line.qty + 1);
                    if (!result.ok && result.message) setPromoError(result.message);
                  }}
                  className="px-3 py-1.5"
                >
                  +
                </button>
              </div>

              <p className="w-20 text-right font-medium">{formatINR(linePrice * line.qty)}</p>
              <button
                type="button"
                onClick={() => remove(line.slug, line.weight)}
                className="text-sm text-muted-foreground underline"
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 rounded-lg border bg-card p-5 text-sm">
        {/* Promo code, checked on the server before the total changes. */}
        <form onSubmit={submitPromo} className="flex flex-wrap gap-2 border-b pb-5">
          <label htmlFor="promo" className="sr-only">
            Promo code
          </label>
          <input
            id="promo"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Promo code (try NAIK10)"
            className="min-w-40 flex-1 rounded-md border bg-background px-3 py-2 uppercase outline-none focus:border-primary"
          />
          <button
            type="submit"
            disabled={promoBusy || code.trim().length === 0}
            className="rounded-md border border-primary px-5 py-2 font-semibold text-primary disabled:opacity-50"
          >
            {promoBusy ? "Checking…" : "Apply"}
          </button>
        </form>
        {promoError && <p className="mt-3 text-destructive">{promoError}</p>}
        {promo && (
          <p className="mt-3 flex items-center justify-between text-primary">
            <span>
              <span className="font-semibold">{promo.code}</span> applied — {promo.note}
            </span>
            <button type="button" onClick={() => setAppliedPromo(null)} className="underline">
              Remove
            </button>
          </p>
        )}

        <div className="mt-5 flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>{formatINR(subtotal)}</span>
        </div>
        {discount > 0 && (
          <div className="mt-2 flex justify-between text-primary">
            <span>Discount ({promo?.code})</span>
            <span>−{formatINR(discount)}</span>
          </div>
        )}
        <div className="mt-2 flex justify-between">
          <span className="text-muted-foreground">Delivery</span>
          <span>{fee === 0 ? "Free" : formatINR(fee)}</span>
        </div>
        <div className="mt-3 flex justify-between border-t pt-3 font-display text-lg">
          <span>Total</span>
          <span>{formatINR(subtotal - discount + fee)}</span>
        </div>
        <Link
          to="/checkout"
          className="mt-5 block w-full rounded-md bg-primary px-5 py-3 text-center font-medium text-primary-foreground"
        >
          Proceed to checkout · {formatINR(total)}
        </Link>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Secure demo checkout with field validation and order history.
        </p>
      </div>
    </div>
  );
}
