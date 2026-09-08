import { r as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Star, k as Check, x as Heart } from "../_libs/lucide-react.mjs";
import { n as PRODUCTS, r as formatINR } from "./products-CNjfagVT.mjs";
import { i as useCart, n as getStockLimit, r as priceFor } from "./cart-D0T8jWYC.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Route } from "./products._slug-KsM9-Fpy.mjs";
import { t as ProductCard } from "./ProductCard-D4qLIcUI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-BX0GxRRo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var REVIEWS = [
	{
		name: "Sneha K.",
		rating: 5,
		verified: true,
		text: "Ordered for Diwali and finished it in three days. Tastes like the batch my aunt makes in Nagpur."
	},
	{
		name: "Mandar P.",
		rating: 4,
		verified: true,
		text: "Good crunch and the packing held up in transit. Wish the 200g pack was a little cheaper."
	},
	{
		name: "Aarti D.",
		rating: 5,
		verified: false,
		text: "Not too oily, which is rare. Will reorder with the pickles next time."
	}
];
function Stars({ rating }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "flex items-center gap-0.5",
		"aria-label": `${rating} out of 5`,
		children: [
			1,
			2,
			3,
			4,
			5
		].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `size-4 ${n <= Math.round(rating) ? "fill-accent text-accent" : "text-border"}` }, n))
	});
}
function ProductPage() {
	const { product } = Route.useLoaderData();
	const { add, wishlist, toggleWishlist } = useCart();
	const [weight, setWeight] = (0, import_react.useState)(product.weights[0] ?? "");
	const [tab, setTab] = (0, import_react.useState)("description");
	const [added, setAdded] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!added) return;
		const id = setTimeout(() => setAdded(false), 2500);
		return () => clearTimeout(id);
	}, [added]);
	const saved = wishlist.includes(product.slug);
	const price = priceFor(product.slug, weight);
	const stock = getStockLimit(product.slug);
	const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[80rem] px-6 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/store",
						className: "hover:text-foreground",
						children: "Store"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "px-2",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/store",
						search: { category: product.category },
						className: "hover:text-foreground",
						children: product.category
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid gap-10 md:grid-cols-[22rem_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex aspect-square w-full items-center justify-center rounded-2xl border border-dashed bg-secondary text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "px-6 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground",
							children: [product.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block text-[11px] font-medium normal-case tracking-normal",
								children: "Product image"
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-4 gap-3",
						children: [
							1,
							2,
							3,
							4
						].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "aspect-square rounded-xl border border-dashed bg-secondary"
						}, n))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted-foreground",
							children: product.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { rating: product.rating }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setTab("reviews"),
								className: "text-muted-foreground underline",
								children: [product.reviewCount, " reviews"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-display text-3xl",
							children: formatINR(price)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
							className: "mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "text-sm font-medium",
								children: "Select weight"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex flex-wrap gap-2",
								children: product.weights.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setWeight(w),
									"aria-pressed": weight === w,
									className: `rounded-md border px-4 py-2 text-sm ${weight === w ? "border-primary bg-primary text-primary-foreground" : "bg-card"}`,
									children: [w, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 opacity-70",
										children: formatINR(priceFor(product.slug, w))
									})]
								}, w))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 rounded-xl bg-secondary/60 p-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-primary",
								children: stock <= 4 ? `Hurry! Only ${stock} left in stock` : "In stock"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ml-2 text-muted-foreground",
								children: [
									"Maximum ",
									stock,
									" per order."
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										const result = add(product.slug, weight);
										if (!result.ok) {
											toast.error(result.message ?? "Unable to add this product.");
											return;
										}
										setAdded(true);
										toast.success(`${product.name} added to cart`, { description: weight });
									},
									className: `flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-colors ${added ? "bg-brand-dark text-white" : "bg-primary text-primary-foreground"}`,
									children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), " Added to cart"] }) : "Add to cart"
								}),
								added && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/cart",
									className: "text-sm font-semibold text-primary underline",
									children: "View cart"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => toggleWishlist(product.slug),
									className: "flex items-center gap-2 rounded-md border px-4 py-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
										className: "size-4",
										fill: saved ? "currentColor" : "none"
									}), saved ? "Saved" : "Save for later"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-2",
							children: product.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["• ", h] }, h))
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border bg-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2 border-b pb-3 text-sm",
								children: [
									"description",
									"nutrition",
									"reviews"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setTab(t),
									className: `rounded-md px-3 py-1.5 capitalize ${tab === t ? "bg-secondary font-medium" : "text-muted-foreground"}`,
									children: t === "nutrition" ? "Nutrition & ingredients" : t
								}, t))
							}),
							tab === "description" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-4 text-sm leading-relaxed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: product.description }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Prepared in small batches in our own Pune kitchen and hygienically packed for freshness."
								})]
							}),
							tab === "nutrition" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
										className: "w-full border-collapse",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: product.nutrition.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-b last:border-b-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												scope: "row",
												className: "py-2 text-left font-normal text-muted-foreground",
												children: row.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-2 text-right font-medium",
												children: row.value
											})]
										}, row.label)) })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: "Ingredients: "
										}), product.ingredients]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: "Shelf life: "
										}), product.shelfLife]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-muted-foreground",
										children: "Allergen note: may contain traces of peanut, sesame and milk."
									})
								]
							}),
							tab === "reviews" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 space-y-4 text-sm",
								children: REVIEWS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-b pb-4 last:border-b-0 last:pb-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { rating: r.rating }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium",
												children: r.name
											}),
											r.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-secondary px-2 py-0.5 text-[11px]",
												children: "Verified purchase"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-muted-foreground",
										children: r.text
									})]
								}, r.name))
							})
						]
					})
				]
			}),
			related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mb-5 font-display text-2xl",
					children: ["More from ", product.category]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "scroll-row -mx-4 px-4 md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0",
					children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "scroll-row-item w-64 md:w-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p })
					}, p.slug))
				})]
			})
		]
	});
}
//#endregion
export { ProductPage as component };
