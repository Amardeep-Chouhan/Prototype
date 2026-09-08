import { r as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { r as formatINR, t as CATEGORIES } from "./products-CNjfagVT.mjs";
import { n as useServerFn } from "./createSsrRpc-DKHY0c2A.mjs";
import { t as ProductCard } from "./ProductCard-D4qLIcUI.mjs";
import { n as searchProducts, t as Route } from "./store-BtYPS2O4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-DZWWaAS_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SORTS = [
	{
		value: "relevance",
		label: "Best selling"
	},
	{
		value: "price-asc",
		label: "Price: low to high"
	},
	{
		value: "price-desc",
		label: "Price: high to low"
	},
	{
		value: "rating",
		label: "Top rated"
	}
];
function Store() {
	const initial = Route.useSearch();
	const search = useServerFn(searchProducts);
	const [term, setTerm] = (0, import_react.useState)(initial.q ?? "");
	const [debounced, setDebounced] = (0, import_react.useState)(initial.q ?? "");
	const [categories, setCategories] = (0, import_react.useState)(initial.category ? [initial.category] : []);
	const [maxPrice, setMaxPrice] = (0, import_react.useState)(500);
	const [sort, setSort] = (0, import_react.useState)("relevance");
	(0, import_react.useEffect)(() => {
		const id = setTimeout(() => setDebounced(term.trim()), 200);
		return () => clearTimeout(id);
	}, [term]);
	const { data, isFetching } = useQuery({
		queryKey: [
			"store",
			debounced,
			categories,
			maxPrice,
			sort
		],
		queryFn: () => search({ data: {
			q: debounced,
			categories,
			maxPrice,
			sort
		} })
	});
	const products = data?.products ?? [];
	const activeFilters = categories.length > 0 || maxPrice < 500 || debounced.length > 0;
	const toggleCategory = (category) => setCategories((prev) => prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[80rem] px-6 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Our Store"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "scroll-row -mx-4 mt-5 px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setCategories([]),
					className: `scroll-row-item rounded-full border px-3 py-1.5 text-sm ${categories.length === 0 ? "bg-primary text-primary-foreground" : "bg-card"}`,
					children: "All Categories"
				}), CATEGORIES.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => toggleCategory(category),
					className: `scroll-row-item rounded-full border px-3 py-1.5 text-sm ${categories.includes(category) ? "bg-primary text-primary-foreground" : "bg-card"}`,
					children: category
				}, category))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-8 md:grid-cols-[16rem_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "h-fit rounded-lg border bg-card p-5 md:sticky md:top-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg",
							children: "Filters"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "store-search",
								className: "text-sm font-medium",
								children: "Search"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "store-search",
								value: term,
								onChange: (e) => setTerm(e.target.value),
								placeholder: "e.g. chakali",
								className: "mt-1.5 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "max-price",
								className: "text-sm font-medium",
								children: ["Max price: ", formatINR(maxPrice)]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "max-price",
								type: "range",
								min: 30,
								max: 500,
								step: 10,
								value: maxPrice,
								onChange: (e) => setMaxPrice(Number(e.target.value)),
								className: "mt-2 w-full accent-[var(--primary)]"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "sort",
								className: "text-sm font-medium",
								children: "Sort by"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								id: "sort",
								value: sort,
								onChange: (e) => setSort(e.target.value),
								className: "mt-1.5 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:border-primary",
								children: SORTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: s.value,
									children: s.label
								}, s.value))
							})]
						}),
						activeFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setTerm("");
								setCategories([]);
								setMaxPrice(500);
							},
							className: "mt-5 text-sm text-primary underline",
							children: "Clear all filters"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					"aria-live": "polite",
					children: isFetching ? "Updating…" : `Showing ${products.length} of ${data?.total ?? 0} products`
				}), products.length === 0 && !isFetching ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-lg border border-dashed bg-card p-10 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg",
						children: "No products match that"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Try a shorter word, a higher price limit, or clear the category filters."
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
				})] })]
			})
		]
	});
}
//#endregion
export { Store as component };
