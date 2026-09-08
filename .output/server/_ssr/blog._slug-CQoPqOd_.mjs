import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as Route } from "./blog._slug-Cs1nhUC-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-CQoPqOd_.js
var import_jsx_runtime = require_jsx_runtime();
function BlogDetails() {
	const { post } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-4xl px-4 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/blog",
			className: "inline-flex items-center gap-2 text-sm font-semibold text-primary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Back to journal"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 overflow-hidden rounded-3xl border bg-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-72 items-center justify-center bg-secondary p-10 text-center font-display text-2xl font-bold uppercase tracking-widest text-muted-foreground",
				children: [post.tag, " · Featured story"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-7 md:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-primary",
						children: post.tag
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl",
						children: post.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base leading-8 text-muted-foreground",
						children: post.excerpt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-5 text-sm leading-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Good food starts with useful choices. This article space gives customers practical context around regional ingredients, recipes and pantry habits." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Explore the store alongside the journal to discover products that fit the same idea: familiar food, clear information and a simpler shopping experience." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/store",
						className: "mt-8 inline-block rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground",
						children: "Shop related products"
					})
				]
			})]
		})]
	});
}
//#endregion
export { BlogDetails as component };
