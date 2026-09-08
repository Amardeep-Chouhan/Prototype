import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { PRODUCTS, FREE_DELIVERY_THRESHOLD } from "@/data/products";
import { getStockLimit } from "@/lib/inventory";

export type CartLine = { slug: string; weight: string; qty: number };
export type AppliedPromo = { code: string; discount: number; note: string };

type CartValue = {
  lines: CartLine[];
  add: (slug: string, weight: string) => { ok: boolean; message?: string };
  setQty: (slug: string, weight: string, qty: number) => { ok: boolean; message?: string };
  remove: (slug: string, weight: string) => void;
  subtotal: number;
  count: number;
  deliveryFee: number;
  discount: number;
  total: number;
  wishlist: string[];
  toggleWishlist: (slug: string) => void;
  appliedPromo: AppliedPromo | null;
  setAppliedPromo: (promo: AppliedPromo | null) => void;
};

const CartContext = createContext<CartValue | null>(null);
const STORAGE_KEY = "naik-prototype-cart";
const WISH_KEY = "naik-prototype-wishlist";
const PROMO_KEY = "naik-prototype-promo";

export function priceFor(slug: string, weight: string) {
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product || product.price <= 0) return 0;
  const index = product.weights.indexOf(weight);
  if (index <= 0) return product.price;
  return Math.round(product.price * (1 + index * 0.8));
}

function readStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function deliveryFeeFor(subtotal: number) {
  if (subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD) return 0;
  return subtotal >= 499 ? 39 : 69;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [appliedPromo, setAppliedPromo] = useState<AppliedPromo | null>(null);

  useEffect(() => {
    setLines(readStorage(STORAGE_KEY, []));
    setWishlist(readStorage(WISH_KEY, []));
    setAppliedPromo(readStorage<AppliedPromo | null>(PROMO_KEY, null));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines]);
  useEffect(() => {
    localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
  }, [wishlist]);
  useEffect(() => {
    if (appliedPromo) localStorage.setItem(PROMO_KEY, JSON.stringify(appliedPromo));
    else localStorage.removeItem(PROMO_KEY);
  }, [appliedPromo]);

  const value = useMemo<CartValue>(() => {
    const safeLines = lines
      .map((line) => ({ ...line, qty: Math.max(1, Math.min(line.qty, getStockLimit(line.slug))) }))
      .filter(
        (line) =>
          PRODUCTS.some((p) => p.slug === line.slug) && priceFor(line.slug, line.weight) > 0,
      );
    const subtotal = safeLines.reduce((sum, l) => sum + priceFor(l.slug, l.weight) * l.qty, 0);
    const deliveryFee = deliveryFeeFor(subtotal);
    const discount = appliedPromo ? Math.min(appliedPromo.discount, subtotal) : 0;

    const add = (slug: string, weight: string) => {
      const product = PRODUCTS.find((p) => p.slug === slug);
      if (!product || priceFor(slug, weight) <= 0)
        return { ok: false, message: "This product is currently unavailable." };
      const max = getStockLimit(slug);
      const existing = lines.find((l) => l.slug === slug && l.weight === weight);
      if (existing && existing.qty >= max)
        return { ok: false, message: `Only ${max} units are available for this product.` };
      setLines((prev) => {
        const current = prev.find((l) => l.slug === slug && l.weight === weight);
        if (current)
          return prev.map((l) =>
            l.slug === slug && l.weight === weight ? { ...l, qty: Math.min(max, l.qty + 1) } : l,
          );
        return [...prev, { slug, weight, qty: 1 }];
      });
      return { ok: true };
    };

    const setQty = (slug: string, weight: string, qty: number) => {
      const max = getStockLimit(slug);
      if (qty > max) return { ok: false, message: `Only ${max} units are available.` };
      setLines((prev) =>
        qty <= 0
          ? prev.filter((l) => !(l.slug === slug && l.weight === weight))
          : prev.map((l) => (l.slug === slug && l.weight === weight ? { ...l, qty } : l)),
      );
      return { ok: true };
    };

    return {
      lines: safeLines,
      subtotal,
      count: safeLines.reduce((sum, l) => sum + l.qty, 0),
      deliveryFee,
      discount,
      total: Math.max(0, subtotal - discount + deliveryFee),
      wishlist,
      appliedPromo,
      add,
      setQty,
      remove: (slug, weight) =>
        setLines((prev) => prev.filter((l) => !(l.slug === slug && l.weight === weight))),
      toggleWishlist: (slug) =>
        setWishlist((prev) =>
          prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
        ),
      setAppliedPromo,
    };
  }, [lines, wishlist, appliedPromo]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
