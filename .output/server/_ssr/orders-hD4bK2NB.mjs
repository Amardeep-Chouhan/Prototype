import { r as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as Outlet, g as Link, l as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
import { j as ArrowRight, m as Package, s as ShoppingBag } from "../_libs/lucide-react.mjs";
import { n as PRODUCTS, r as formatINR } from "./products-CNjfagVT.mjs";
import "./account-sjw_2gG_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders-hD4bK2NB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OrdersPage() {
	const location = useLocation();
	const [orders, setOrders] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		try {
			setOrders(JSON.parse(localStorage.getItem("naik-orders") || "[]"));
		} catch {
			setOrders([]);
		}
	}, []);
	const totalItems = (0, import_react.useMemo)(() => orders.reduce((sum, order) => sum + order.items.reduce((n, item) => n + item.qty, 0), 0), [orders]);
	if (location.pathname.startsWith("/orders/") && location.pathname !== "/orders") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[2rem] bg-secondary px-6 py-8 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-[0.2em] text-primary",
						children: "My account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl font-extrabold tracking-tight",
						children: "Order history"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm text-muted-foreground",
						children: "Every purchase, item and delivery update in one place."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/store",
					className: "inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-4" }), " Continue shopping"]
				})]
			}), orders.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3 text-xs font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "rounded-full bg-card px-3 py-2",
					children: [
						orders.length,
						" order",
						orders.length === 1 ? "" : "s"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "rounded-full bg-card px-3 py-2",
					children: [totalItems, " items purchased"]
				})]
			})]
		}), orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 rounded-2xl border border-dashed bg-card p-12 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "mx-auto size-12 text-muted-foreground" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-2xl font-bold",
					children: "No orders yet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-2 max-w-md text-sm text-muted-foreground",
					children: "Your order history is empty. Once you complete checkout, your order number, products, quantities and delivery status will appear here."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/store",
					className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground",
					children: ["Explore the store ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 space-y-5",
			children: orders.map((order) => {
				const quantity = order.items.reduce((n, item) => n + item.qty, 0);
				const preview = order.items.slice(0, 3);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group rounded-2xl border bg-card p-5 transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg font-bold",
								children: order.id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-secondary px-2.5 py-1 text-xs font-bold text-primary",
								children: order.status
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: [
								"Placed ",
								" ",
								new Date(order.createdAt).toLocaleString("en-IN", {
									dateStyle: "medium",
									timeStyle: "short"
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-extrabold",
								children: formatINR(order.total)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									quantity,
									" total item",
									quantity === 1 ? "" : "s"
								]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 border-t pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [preview.map((item) => {
								const product = PRODUCTS.find((p) => p.slug === item.slug);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-xl border bg-background px-3 py-2 text-xs font-semibold",
									children: [
										product?.name ?? item.name,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-muted-foreground",
											children: ["× ", item.qty]
										})
									]
								}, `${item.slug}-${item.weight}`);
							}), order.items.length > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-xl bg-secondary px-3 py-2 text-xs font-semibold",
								children: [
									"+",
									order.items.length - 3,
									" more"
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/orders/$orderId",
							params: { orderId: order.id },
							className: "mt-4 inline-flex items-center gap-1 rounded-sm text-sm font-bold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
							children: ["View products & order details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
						})]
					})]
				}, order.id);
			})
		})]
	});
}
//#endregion
export { OrdersPage as component };
