import { r as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Bhy5sQUs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactSection() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const [sent, setSent] = (0, import_react.useState)(false);
	const set = (key) => (e) => setForm((prev) => ({
		...prev,
		[key]: e.target.value
	}));
	const onSubmit = (e) => {
		e.preventDefault();
		setSent(true);
		setForm({
			name: "",
			email: "",
			message: ""
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid gap-8 rounded-3xl border bg-card p-8 md:grid-cols-2 md:p-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-[28px] font-extrabold md:text-[33px]",
				children: "Contact Us"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[15px] text-muted-foreground",
				children: "Questions about an order, bulk gifting or store timings? Send us a message and we reply within one working day."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-6 space-y-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "font-semibold",
					children: "Store"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "text-muted-foreground",
					children: "Shukrawar Peth, Pune 411002"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "font-semibold",
					children: "Phone"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "text-muted-foreground",
					children: "+91 9730046247 · 9 AM – 10 PM daily"
				})] })]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "c-name",
					className: "text-sm font-medium",
					children: "Your name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "c-name",
					required: true,
					value: form.name,
					onChange: set("name"),
					className: "mt-1.5 w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "c-email",
					className: "text-sm font-medium",
					children: "Email"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "c-email",
					type: "email",
					required: true,
					value: form.email,
					onChange: set("email"),
					className: "mt-1.5 w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "c-message",
					className: "text-sm font-medium",
					children: "Message"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "c-message",
					required: true,
					rows: 4,
					value: form.message,
					onChange: set("message"),
					className: "mt-1.5 w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground",
					children: "Send message"
				}),
				sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-primary",
					children: "Thanks — we've got your message and will reply within one working day."
				})
			]
		})]
	});
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto w-full max-w-[80rem] px-6 pb-16 pt-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
	});
}
//#endregion
export { ContactPage as component };
