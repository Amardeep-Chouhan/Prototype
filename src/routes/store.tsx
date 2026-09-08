import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";

import { ProductCard } from "@/components/site/ProductCard";
import { CATEGORIES, formatINR } from "@/data/products";
import { searchProducts } from "@/lib/catalog.functions";

type StoreSearch = { q?: string | undefined; category?: string | undefined };

export const Route = createFileRoute("/store")({
  validateSearch: (search: Record<string, unknown>): StoreSearch => ({
    q: typeof search["q"] === "string" ? search["q"] : undefined,
    category: typeof search["category"] === "string" ? search["category"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Our Store | Search & Filter Maharashtrian Products | Naik Foods" },
      {
        name: "description",
        content:
          "Search the full Naik Foods catalog and filter by category, price and dietary tags — snacks, pickles, masalas and millet staples.",
      },
      { property: "og:title", content: "Our Store | Naik Foods" },
      {
        property: "og:description",
        content: "Search and filter the full Naik Foods catalog by category, price and tags.",
      },
    ],
  }),
  component: Store,
});

const SORTS = [
  { value: "relevance", label: "Best selling" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Top rated" },
] as const;

function Store() {
  const initial = Route.useSearch();
  const search = useServerFn(searchProducts);

  const [term, setTerm] = useState(initial.q ?? "");
  const [debounced, setDebounced] = useState(initial.q ?? "");
  const [categories, setCategories] = useState<string[]>(
    initial.category ? [initial.category] : [],
  );
  const [maxPrice, setMaxPrice] = useState(500);
  const [sort, setSort] = useState<(typeof SORTS)[number]["value"]>("relevance");

  useEffect(() => {
    const id = setTimeout(() => setDebounced(term.trim()), 200);
    return () => clearTimeout(id);
  }, [term]);

  const { data, isFetching } = useQuery({
    queryKey: ["store", debounced, categories, maxPrice, sort],
    queryFn: () => search({ data: { q: debounced, categories, maxPrice, sort } }),
  });

  const products = data?.products ?? [];
  const activeFilters = categories.length > 0 || maxPrice < 500 || debounced.length > 0;

  const toggleCategory = (category: string) =>
    setCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    );

  return (
    <div className="mx-auto max-w-[80rem] px-6 py-8">
      <h1 className="font-display text-3xl">Our Store</h1>

      {/* Category chips: horizontally scrollable on small screens */}
      <div className="scroll-row -mx-4 mt-5 px-4">
        <button
          type="button"
          onClick={() => setCategories([])}
          className={`scroll-row-item rounded-full border px-3 py-1.5 text-sm ${
            categories.length === 0 ? "bg-primary text-primary-foreground" : "bg-card"
          }`}
        >
          All Categories
        </button>
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => toggleCategory(category)}
            className={`scroll-row-item rounded-full border px-3 py-1.5 text-sm ${
              categories.includes(category) ? "bg-primary text-primary-foreground" : "bg-card"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-8 md:grid-cols-[16rem_1fr]">
        <aside className="h-fit rounded-lg border bg-card p-5 md:sticky md:top-24">
          <h2 className="font-display text-lg">Filters</h2>

          <div className="mt-4">
            <label htmlFor="store-search" className="text-sm font-medium">
              Search
            </label>
            <input
              id="store-search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="e.g. chakali"
              className="mt-1.5 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="max-price" className="text-sm font-medium">
              Max price: {formatINR(maxPrice)}
            </label>
            <input
              id="max-price"
              type="range"
              min={30}
              max={500}
              step={10}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="mt-2 w-full accent-[var(--primary)]"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="sort" className="text-sm font-medium">
              Sort by
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="mt-1.5 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {activeFilters && (
            <button
              type="button"
              onClick={() => {
                setTerm("");
                setCategories([]);
                setMaxPrice(500);
              }}
              className="mt-5 text-sm text-primary underline"
            >
              Clear all filters
            </button>
          )}
        </aside>

        <section>
          <p className="text-sm text-muted-foreground" aria-live="polite">
            {isFetching
              ? "Updating…"
              : `Showing ${products.length} of ${data?.total ?? 0} products`}
          </p>

          {products.length === 0 && !isFetching ? (
            <div className="mt-6 rounded-lg border border-dashed bg-card p-10 text-center">
              <p className="font-display text-lg">No products match that</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try a shorter word, a higher price limit, or clear the category filters.
              </p>
            </div>
          ) : (
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
