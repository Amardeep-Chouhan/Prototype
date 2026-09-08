import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-BrUHwb-t.js
var import_jsx_runtime = require_jsx_runtime();
function Legal({ title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold text-primary",
				children: "Naik Foods"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-4xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-5 rounded-2xl border bg-card p-7 text-sm leading-7 text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We collect information needed to provide account, delivery, support and order services. We aim to collect only what is necessary for the customer experience." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Account information and order details are used to manage purchases, delivery updates and customer support. Newsletter subscriptions can be managed through the subscription flow." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "For a production launch, this page should be replaced with the business-approved privacy policy and retention/contact details." })
				]
			})
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legal, { title: "Privacy Policy" });
//#endregion
export { SplitComponent as component };
