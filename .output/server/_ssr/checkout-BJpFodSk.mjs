import { r as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as CircleCheck, M as ArrowLeft, v as LockKeyhole } from "../_libs/lucide-react.mjs";
import { r as formatINR } from "./products-CNjfagVT.mjs";
import { i as useCart, r as priceFor } from "./cart-D0T8jWYC.mjs";
import { a as createOrder, i as PROFILE_KEY, n as DEFAULT_PROFILE, r as ORDERS_KEY, t as ADDRESSES_KEY } from "./account-sjw_2gG_.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-BJpFodSk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EMPTY_FORM = {
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	line1: "",
	city: "",
	state: "",
	pincode: ""
};
function read(key, fallback) {
	try {
		const raw = localStorage.getItem(key);
		return raw ? JSON.parse(raw) : fallback;
	} catch {
		return fallback;
	}
}
function CheckoutPage() {
	const navigate = useNavigate();
	const { lines, subtotal, discount, deliveryFee, total } = useCart();
	const [form, setForm] = (0, import_react.useState)(EMPTY_FORM);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const profile = read(PROFILE_KEY, DEFAULT_PROFILE);
		const addresses = read(ADDRESSES_KEY, []);
		const address = addresses.find((a) => a.isDefault) ?? addresses[0];
		setForm({
			firstName: profile.firstName === "Naik" ? "" : profile.firstName,
			lastName: profile.lastName === "Customer" ? "" : profile.lastName,
			email: profile.email === "customer@example.com" ? "" : profile.email,
			phone: profile.phone,
			line1: address?.line1 ?? "",
			city: address?.city ?? "",
			state: address?.state ?? "",
			pincode: address?.pincode ?? ""
		});
		setReady(true);
	}, []);
	if (lines.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Nothing to checkout"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Add a product before starting checkout."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/store",
				className: "mt-6 inline-block rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground",
				children: "Browse store"
			})
		]
	});
	const submit = (e) => {
		e.preventDefault();
		setError("");
		if (!/^[A-Za-z][A-Za-z .'-]{1,39}$/.test(form.firstName.trim())) return setError("Enter a valid first name.");
		if (!/^[A-Za-z][A-Za-z .'-]{1,39}$/.test(form.lastName.trim())) return setError("Enter a valid last name.");
		if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return setError("Enter a valid email address.");
		if (!/^\d{10}$/.test(form.phone)) return setError("Phone number must be exactly 10 digits.");
		if (form.line1.trim().length < 5) return setError("Enter a complete delivery address.");
		if (form.city.trim().length < 2 || form.state.trim().length < 2) return setError("Enter a valid city and state.");
		if (!/^\d{6}$/.test(form.pincode)) return setError("Pincode must be exactly 6 digits.");
		const address = {
			id: crypto.randomUUID(),
			label: "Checkout",
			line1: form.line1.trim(),
			city: form.city.trim(),
			state: form.state.trim(),
			pincode: form.pincode,
			isDefault: true
		};
		const order = createOrder(lines, subtotal, discount, deliveryFee, address);
		const orders = read(ORDERS_KEY, []);
		const addresses = read(ADDRESSES_KEY, []);
		localStorage.setItem(ORDERS_KEY, JSON.stringify([order, ...orders]));
		localStorage.setItem(PROFILE_KEY, JSON.stringify({
			firstName: form.firstName.trim(),
			lastName: form.lastName.trim(),
			email: form.email.trim(),
			phone: form.phone
		}));
		localStorage.setItem(ADDRESSES_KEY, JSON.stringify([address, ...addresses.filter((a) => a.line1 !== address.line1)]));
		localStorage.removeItem("naik-prototype-cart");
		localStorage.removeItem("naik-prototype-promo");
		setDone(true);
		toast.success("Order placed successfully!");
		setTimeout(() => navigate({
			to: "/orders/$orderId",
			params: { orderId: order.id }
		}), 500);
	};
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-4 py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto size-16 text-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-5 font-display text-4xl",
				children: "Order placed!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Your order has been saved to your account. Redirecting to order details…"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/cart",
				className: "inline-flex items-center gap-2 text-sm font-semibold text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Back to cart"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center gap-2 text-xs font-semibold text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { className: "size-4" }), " Secure demo checkout · No real payment is processed"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7 grid gap-7 lg:grid-cols-[1fr_22rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "rounded-2xl border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl",
							children: "Delivery details"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "We validate every field before creating an order."
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							role: "alert",
							className: "mt-5 rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "First name",
									value: form.firstName,
									onChange: (v) => setForm({
										...form,
										firstName: v
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Last name",
									value: form.lastName,
									onChange: (v) => setForm({
										...form,
										lastName: v
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									type: "email",
									value: form.email,
									onChange: (v) => setForm({
										...form,
										email: v
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									inputMode: "numeric",
									maxLength: 10,
									value: form.phone,
									onChange: (v) => setForm({
										...form,
										phone: v.replace(/\D/g, "").slice(0, 10)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Address",
									value: form.line1,
									onChange: (v) => setForm({
										...form,
										line1: v
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "City",
									value: form.city,
									onChange: (v) => setForm({
										...form,
										city: v
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "State",
									value: form.state,
									onChange: (v) => setForm({
										...form,
										state: v
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Pincode",
									inputMode: "numeric",
									maxLength: 6,
									value: form.pincode,
									onChange: (v) => setForm({
										...form,
										pincode: v.replace(/\D/g, "").slice(0, 6)
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							disabled: !ready,
							className: "mt-7 w-full rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground disabled:opacity-50",
							children: ["Place order · ", formatINR(total)]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "h-fit rounded-2xl border bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "Order summary"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-3 text-sm",
						children: [lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								line.weight,
								" × ",
								line.qty
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatINR(line.qty * priceFor(line.slug, line.weight)) })]
						}, `${line.slug}-${line.weight}`)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t pt-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatINR(subtotal) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Discount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: discount ? `−${formatINR(discount)}` : "—" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Delivery" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: deliveryFee ? formatINR(deliveryFee) : "Free" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex justify-between text-base font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatINR(total) })]
								})
							]
						})]
					})]
				})]
			})
		]
	});
}
function Field(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-1.5 text-sm font-medium",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: props.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			required: true,
			type: props.type ?? "text",
			inputMode: props.inputMode,
			maxLength: props.maxLength,
			value: props.value,
			onChange: (e) => props.onChange(e.target.value),
			className: "rounded-xl border bg-background px-3 py-2.5 outline-none focus:border-primary"
		})]
	});
}
//#endregion
export { CheckoutPage as component };
