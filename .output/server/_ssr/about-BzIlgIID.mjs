import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ShieldCheck, j as ArrowRight, x as Heart, y as Leaf } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BzIlgIID.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-brand-dark px-7 py-14 text-white md:px-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-white/70",
						children: "Our story"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 max-w-3xl font-display text-5xl font-extrabold text-white",
						children: "Traditional Maharashtrian flavours, made for modern homes."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-white/80",
						children: "Naik Foods brings regional recipes, familiar ingredients and small-batch care together in one place."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "story",
				className: "mt-10 grid gap-6 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Value, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {}),
						title: "Authentic",
						text: "Recipes inspired by regional kitchens and family traditions."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Value, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {}),
						title: "Made with care",
						text: "Thoughtful ingredients, clear product information and dependable packaging."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Value, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {}),
						title: "Shop with confidence",
						text: "Transparent prices, validation and useful order information throughout the journey."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 rounded-2xl border bg-card p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "From Farm to Your Kitchen"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-3xl leading-7 text-muted-foreground",
						children: "Our food story starts with regional ingredients and ends with easy-to-shop products for everyday meals, gifting and celebrations. This page now makes the previously inactive Learn More journey useful by providing the full story in one place."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/store",
						className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground",
						children: ["Explore the collection ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				]
			})
		]
	});
}
function Value({ icon, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border bg-card p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-11 items-center justify-center rounded-full bg-secondary text-primary",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-6 text-muted-foreground",
				children: text
			})
		]
	});
}
//#endregion
export { AboutPage as component };
