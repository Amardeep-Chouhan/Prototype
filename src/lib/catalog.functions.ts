import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { PRODUCTS, type Product } from "@/data/products";

// The only backend in this prototype: search + filter runs on the server, the
// same way a real integration would hit the Medusa product API on each
// (debounced) keystroke instead of shipping the whole catalog to the browser.

const searchSchema = z.object({
  q: z.string().default(""),
  categories: z.array(z.string()).default([]),
  maxPrice: z.number().default(500),
  sort: z.enum(["relevance", "price-asc", "price-desc", "rating"]).default("relevance"),
  limit: z.number().optional(),
});

function matches(product: Product, q: string) {
  if (!q) return true;
  const haystack = [product.name, product.tagline, product.category, ...product.tags]
    .join(" ")
    .toLowerCase();
  return q
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => haystack.includes(term));
}

export const searchProducts = createServerFn({ method: "GET" })
  .inputValidator((data: unknown) => searchSchema.parse(data))
  .handler(async ({ data }) => {
    const { q, categories, maxPrice, sort, limit } = data;

    let results = PRODUCTS.filter(
      (p) =>
        matches(p, q) &&
        p.price <= maxPrice &&
        (categories.length === 0 || categories.includes(p.category)),
    );

    if (sort === "price-asc") results = [...results].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") results = [...results].sort((a, b) => b.price - a.price);
    if (sort === "rating") results = [...results].sort((a, b) => b.rating - a.rating);

    return {
      total: results.length,
      products: limit ? results.slice(0, limit) : results,
    };
  });
