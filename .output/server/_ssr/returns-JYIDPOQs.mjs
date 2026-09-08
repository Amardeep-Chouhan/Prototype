import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as CircleCheck, T as CircleQuestionMark, c as ShieldCheck, h as PackageCheck, w as Clock3 } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/returns-JYIDPOQs.js
var import_jsx_runtime = require_jsx_runtime();
var policy = [
	{
		title: "7-day return window",
		body: "For eligible packaged products, request a return within 7 days of delivery."
	},
	{
		title: "Damaged or wrong item",
		body: "Report damaged, missing or incorrect products as soon as possible so support can help resolve the issue."
	},
	{
		title: "Refund after inspection",
		body: "Eligible refunds are shown against the original order after the return request is reviewed."
	}
];
function ReturnsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-[2rem] bg-brand-dark px-6 py-10 text-white md:px-10 md:py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-[0.2em] text-white/65",
						children: "Customer care"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight md:text-5xl",
						children: "Returns & refunds, made simple."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-sm leading-6 text-white/75 md:text-base",
						children: "A clear policy helps customers order with confidence. Here is the prototype policy flow for Naik Foods."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-8 grid gap-4 md:grid-cols-3",
				children: policy.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-6 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-xl font-bold",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-muted-foreground",
							children: item.body
						})
					]
				}, item.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 lg:grid-cols-[1fr_20rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl border bg-card p-6 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-bold",
							children: "How it works"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 space-y-6",
							children: [
								[
									PackageCheck,
									"Open your order",
									"Go to Order History and open the order that needs attention."
								],
								[
									Clock3,
									"Check eligibility",
									"The product should be eligible and within the return window. Perishable or opened food may be excluded."
								],
								[
									ShieldCheck,
									"Contact support",
									"Share the order number and issue. Support can arrange the next step and refund/replacement where applicable."
								]
							].map(([Icon, title, body]) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-semibold",
										children: title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-6 text-muted-foreground",
										children: body
									})] })]
								}, title);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 rounded-2xl bg-secondary p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold",
								children: "Usually not eligible"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-6 text-muted-foreground",
								children: "Opened food products, products damaged after delivery, and items outside the return window may not qualify. Final policy should be replaced with the business-approved rules before production launch."
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "h-fit rounded-2xl border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "size-6 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-xl font-bold",
							children: "Need help?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-muted-foreground",
							children: "Keep your order number ready and our support flow can help you resolve an issue faster."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "mt-5 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-bold text-primary-foreground",
							children: "Contact support"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/orders",
							className: "mt-3 block rounded-xl border px-4 py-3 text-center text-sm font-semibold",
							children: "View my orders"
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { ReturnsPage as component };
