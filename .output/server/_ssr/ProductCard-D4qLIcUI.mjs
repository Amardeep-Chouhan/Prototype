import { r as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Star, k as Check, x as Heart } from "../_libs/lucide-react.mjs";
import { r as formatINR } from "./products-CNjfagVT.mjs";
import { i as useCart } from "./cart-D0T8jWYC.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-D4qLIcUI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	const { add, wishlist, toggleWishlist } = useCart();
	const saved = wishlist.includes(product.slug);
	const [added, setAdded] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!added) return;
		const id = setTimeout(() => setAdded(false), 1800);
		return () => clearTimeout(id);
	}, [added]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex h-full flex-col overflow-hidden rounded-2xl border bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-40 items-center justify-center bg-secondary px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground",
					children: product.name
				}),
				product.tags.includes("Healthy") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground",
					children: "Healthy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": saved ? "Remove from wishlist" : "Save to wishlist",
					"aria-pressed": saved,
					onClick: () => toggleWishlist(product.slug),
					className: "absolute right-3 top-3 rounded-full bg-card p-2 text-muted-foreground shadow-sm transition-colors hover:text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
						className: "size-4",
						fill: saved ? "currentColor" : "none"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products/$slug",
					params: { slug: product.slug },
					className: "font-semibold leading-snug hover:text-primary",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[13px] text-muted-foreground",
					children: product.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex items-center gap-1 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-accent text-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-foreground",
							children: product.rating.toFixed(1)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"(",
							product.reviewCount,
							")"
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-extrabold",
						children: formatINR(product.price)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: product.weights[0]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						const weight = product.weights[0] ?? "";
						const result = add(product.slug, weight);
						if (!result.ok) {
							toast.error(result.message ?? "Unable to add this product.");
							return;
						}
						setAdded(true);
						toast.success(`${product.name} added to cart`, { description: weight });
					},
					className: `mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-colors ${added ? "bg-brand-dark text-white" : "bg-primary text-primary-foreground hover:opacity-90"}`,
					children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), " Added"] }) : "Add to Cart"
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as t };
