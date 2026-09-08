import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { j as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-DGyOekZM.js
var import_jsx_runtime = require_jsx_runtime();
var POSTS = [
	{
		slug: "healthy-snacking",
		tag: "Healthy Snack",
		title: "How to build a better everyday snack box",
		excerpt: "Simple regional favourites for work, school and travel."
	},
	{
		slug: "maharashtrian-recipes",
		tag: "Recipes",
		title: "5 Maharashtrian pantry staples worth keeping",
		excerpt: "A practical guide to masalas, pickles and instant staples."
	},
	{
		slug: "pickle-guide",
		tag: "Pickles",
		title: "A guide to choosing the right pickle",
		excerpt: "From tangy vegetables to coastal favourites, find your match."
	}
];
function BlogPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold text-primary",
				children: "Naik Foods Journal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-4xl",
				children: "Recipes, stories & pantry ideas"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-muted-foreground",
				children: "Useful food stories designed to help customers discover products and make better use of them."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-6 md:grid-cols-3",
				children: POSTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog/$slug",
					params: { slug: p.slug },
					className: "overflow-hidden rounded-2xl border bg-card hover:shadow-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-44 items-center justify-center bg-secondary p-6 text-center font-display text-sm font-bold uppercase tracking-widest text-muted-foreground",
						children: p.tag
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wide text-primary",
								children: p.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-xl",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-6 text-muted-foreground",
								children: p.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary",
								children: ["Read article ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					})]
				}, p.slug))
			})
		]
	});
}
//#endregion
export { BlogPage as component };
