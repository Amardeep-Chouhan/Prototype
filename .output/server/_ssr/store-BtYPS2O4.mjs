import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as createSsrRpc } from "./createSsrRpc-DKHY0c2A.mjs";
import { a as stringType, i as objectType, n as enumType, r as numberType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-BtYPS2O4.js
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
var searchProducts = createServerFn({ method: "GET" }).inputValidator((data) => searchSchema.parse(data)).handler(createSsrRpc("0ca8c0d451fe626e0bb9952fea9eca731a0c03e85886f5ab2eb56018486f2faf"));
var $$splitComponentImporter = () => import("./store-DZWWaAS_.mjs");
var Route = createFileRoute("/store")({
	validateSearch: (search) => ({
		q: typeof search["q"] === "string" ? search["q"] : void 0,
		category: typeof search["category"] === "string" ? search["category"] : void 0
	}),
	head: () => ({ meta: [
		{ title: "Our Store | Search & Filter Maharashtrian Products | Naik Foods" },
		{
			name: "description",
			content: "Search the full Naik Foods catalog and filter by category, price and dietary tags — snacks, pickles, masalas and millet staples."
		},
		{
			property: "og:title",
			content: "Our Store | Naik Foods"
		},
		{
			property: "og:description",
			content: "Search and filter the full Naik Foods catalog by category, price and tags."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { searchProducts as n, Route as t };
