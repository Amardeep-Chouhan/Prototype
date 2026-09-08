import { n as PRODUCTS } from "./products-CNjfagVT.mjs";
import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { a as stringType, i as objectType, n as enumType, r as numberType, t as arrayType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog.functions-Dafrga7X.js
var searchSchema = objectType({
	q: stringType().default(""),
	categories: arrayType(stringType()).default([]),
	maxPrice: numberType().default(500),
	sort: enumType([
		"relevance",
		"price-asc",
		"price-desc",
		"rating"
	]).default("relevance"),
	limit: numberType().optional()
});
function matches(product, q) {
	if (!q) return true;
	const haystack = [
		product.name,
		product.tagline,
		product.category,
		...product.tags
	].join(" ").toLowerCase();
	return q.toLowerCase().split(/\s+/).filter(Boolean).every((term) => haystack.includes(term));
}
var searchProducts_createServerFn_handler = createServerRpc({
	id: "0ca8c0d451fe626e0bb9952fea9eca731a0c03e85886f5ab2eb56018486f2faf",
	name: "searchProducts",
	filename: "src/lib/catalog.functions.ts"
}, (opts) => searchProducts.__executeServer(opts));
var searchProducts = createServerFn({ method: "GET" }).inputValidator((data) => searchSchema.parse(data)).handler(searchProducts_createServerFn_handler, async ({ data }) => {
	const { q, categories, maxPrice, sort, limit } = data;
	let results = PRODUCTS.filter((p) => matches(p, q) && p.price <= maxPrice && (categories.length === 0 || categories.includes(p.category)));
	if (sort === "price-asc") results = [...results].sort((a, b) => a.price - b.price);
	if (sort === "price-desc") results = [...results].sort((a, b) => b.price - a.price);
	if (sort === "rating") results = [...results].sort((a, b) => b.rating - a.rating);
	return {
		total: results.length,
		products: limit ? results.slice(0, limit) : results
	};
});
//#endregion
export { searchProducts_createServerFn_handler };
