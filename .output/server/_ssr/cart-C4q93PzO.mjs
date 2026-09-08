import { r as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PRODUCTS, r as formatINR } from "./products-CNjfagVT.mjs";
import { i as useCart, r as priceFor } from "./cart-D0T8jWYC.mjs";
import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { n as useServerFn, t as createSsrRpc } from "./createSsrRpc-DKHY0c2A.mjs";
import { a as stringType, i as objectType, r as numberType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-C4q93PzO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var applyPromo = createServerFn({ method: "POST" }).inputValidator((data) => objectType({
	code: stringType().min(1),
	subtotal: numberType().min(0)
}).parse(data)).handler(createSsrRpc("4995d690512e6a3f557285abba8a8dee1b671e73f31ab70b5f8d49fac5f80bd7"));
function CartPage() {
	const { lines, setQty, remove, subtotal, deliveryFee: fee, discount, total, appliedPromo, setAppliedPromo } = useCart();
	const checkPromo = useServerFn(applyPromo);
	const [code, setCode] = (0, import_react.useState)("");
	const [promoError, setPromoError] = (0, import_react.useState)("");
	const [promoBusy, setPromoBusy] = (0, import_react.useState)(false);
	const promo = appliedPromo;
	const submitPromo = async (e) => {
		e.preventDefault();
		setPromoBusy(true);
		setPromoError("");
		try {
			const res = await checkPromo({ data: {
				code,
				subtotal
			} });
			if (res.ok) {
				setAppliedPromo({
					code: res.code,
					discount: res.discount,
					note: res.note
				});
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
	const remaining = Math.max(0, 999 - subtotal);
	const progress = Math.min(100, subtotal / 999 * 100);
	if (lines.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[80rem] px-6 py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Your cart is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Nothing added yet."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/store",
				className: "mt-6 inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground",
				children: "Browse the store"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Your cart"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-lg border bg-card p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm",
					children: remaining > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Add ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: formatINR(remaining)
						}),
						" more for free delivery."
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "You've unlocked free delivery."
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 h-2 overflow-hidden rounded-full bg-secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-primary transition-all",
						style: { width: `${progress}%` }
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 divide-y rounded-lg border bg-card",
				children: lines.map((line) => {
					const product = PRODUCTS.find((p) => p.slug === line.slug);
					if (!product) return null;
					const linePrice = priceFor(line.slug, line.weight);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-wrap items-center gap-4 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-40 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/products/$slug",
									params: { slug: product.slug },
									className: "font-medium hover:underline",
									children: product.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: line.weight
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center rounded-md border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Decrease quantity",
										onClick: () => setQty(line.slug, line.weight, line.qty - 1),
										className: "px-3 py-1.5",
										children: "−"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-8 text-center text-sm",
										children: line.qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Increase quantity",
										onClick: () => {
											const result = setQty(line.slug, line.weight, line.qty + 1);
											if (!result.ok && result.message) setPromoError(result.message);
										},
										className: "px-3 py-1.5",
										children: "+"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "w-20 text-right font-medium",
								children: formatINR(linePrice * line.qty)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => remove(line.slug, line.weight),
								className: "text-sm text-muted-foreground underline",
								children: "Remove"
							})
						]
					}, `${line.slug}-${line.weight}`);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-lg border bg-card p-5 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submitPromo,
						className: "flex flex-wrap gap-2 border-b pb-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "promo",
								className: "sr-only",
								children: "Promo code"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "promo",
								value: code,
								onChange: (e) => setCode(e.target.value),
								placeholder: "Promo code (try NAIK10)",
								className: "min-w-40 flex-1 rounded-md border bg-background px-3 py-2 uppercase outline-none focus:border-primary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: promoBusy || code.trim().length === 0,
								className: "rounded-md border border-primary px-5 py-2 font-semibold text-primary disabled:opacity-50",
								children: promoBusy ? "Checking…" : "Apply"
							})
						]
					}),
					promoError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-destructive",
						children: promoError
					}),
					promo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 flex items-center justify-between text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: promo.code
							}),
							" applied — ",
							promo.note
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setAppliedPromo(null),
							className: "underline",
							children: "Remove"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Subtotal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatINR(subtotal) })]
					}),
					discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex justify-between text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Discount (",
							promo?.code,
							")"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["−", formatINR(discount)] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Delivery"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: fee === 0 ? "Free" : formatINR(fee) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex justify-between border-t pt-3 font-display text-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatINR(subtotal - discount + fee) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/checkout",
						className: "mt-5 block w-full rounded-md bg-primary px-5 py-3 text-center font-medium text-primary-foreground",
						children: ["Proceed to checkout · ", formatINR(total)]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-center text-xs text-muted-foreground",
						children: "Secure demo checkout with field validation and order history."
					})
				]
			})
		]
	});
}
//#endregion
export { CartPage as component };
