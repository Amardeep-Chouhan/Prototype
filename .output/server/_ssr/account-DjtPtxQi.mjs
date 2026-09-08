import { r as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as MapPin, d as Plus, i as Trash2, m as Package, n as UserRound, p as Pencil } from "../_libs/lucide-react.mjs";
import { i as PROFILE_KEY, n as DEFAULT_PROFILE, r as ORDERS_KEY, t as ADDRESSES_KEY } from "./account-sjw_2gG_.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-DjtPtxQi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var emptyAddress = () => ({
	label: "Home",
	line1: "",
	city: "",
	state: "",
	pincode: ""
});
function read(key, fallback) {
	try {
		const raw = localStorage.getItem(key);
		return raw ? JSON.parse(raw) : fallback;
	} catch {
		return fallback;
	}
}
function save(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}
function validateProfile(profile) {
	if (!/^[A-Za-z][A-Za-z .'-]{1,39}$/.test(profile.firstName.trim())) return "Enter a valid first name.";
	if (!/^[A-Za-z][A-Za-z .'-]{1,39}$/.test(profile.lastName.trim())) return "Enter a valid last name.";
	if (!/^\S+@\S+\.\S+$/.test(profile.email.trim())) return "Enter a valid email address.";
	if (profile.phone && !/^\d{10}$/.test(profile.phone)) return "Phone number must be 10 digits.";
	return "";
}
function validateAddress(address) {
	if (address.line1.trim().length < 5) return "Enter a complete delivery address.";
	if (address.city.trim().length < 2) return "Enter a valid city.";
	if (address.state.trim().length < 2) return "Enter a valid state.";
	if (!/^\d{6}$/.test(address.pincode)) return "Pincode must be exactly 6 digits.";
	return "";
}
function AccountPage() {
	const [profile, setProfile] = (0, import_react.useState)(DEFAULT_PROFILE);
	const [addresses, setAddresses] = (0, import_react.useState)([]);
	const [orders, setOrders] = (0, import_react.useState)([]);
	const [editing, setEditing] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)(profile);
	const [showAddressForm, setShowAddressForm] = (0, import_react.useState)(false);
	const [addressDraft, setAddressDraft] = (0, import_react.useState)(emptyAddress());
	const [editingAddressId, setEditingAddressId] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const p = read(PROFILE_KEY, DEFAULT_PROFILE);
		setProfile(p);
		setDraft(p);
		setAddresses(read(ADDRESSES_KEY, []));
		setOrders(read(ORDERS_KEY, []));
	}, []);
	const saveProfile = (e) => {
		e.preventDefault();
		const error = validateProfile(draft);
		if (error) return toast.error(error);
		save(PROFILE_KEY, draft);
		setProfile(draft);
		setEditing(false);
		toast.success("Profile updated successfully.");
	};
	const saveAddress = (e) => {
		e.preventDefault();
		const error = validateAddress(addressDraft);
		if (error) return toast.error(error);
		const next = {
			...addressDraft,
			id: editingAddressId ?? crypto.randomUUID(),
			isDefault: editingAddressId ? addresses.find((a) => a.id === editingAddressId)?.isDefault ?? false : addresses.length === 0
		};
		const updated = editingAddressId ? addresses.map((a) => a.id === editingAddressId ? next : a) : [...addresses, next];
		setAddresses(updated);
		save(ADDRESSES_KEY, updated);
		setAddressDraft(emptyAddress());
		setEditingAddressId(null);
		setShowAddressForm(false);
		toast.success(editingAddressId ? "Address updated." : "Address saved.");
	};
	const editAddress = (address) => {
		setAddressDraft({
			label: address.label,
			line1: address.line1,
			city: address.city,
			state: address.state,
			pincode: address.pincode
		});
		setEditingAddressId(address.id);
		setShowAddressForm(true);
	};
	const setDefault = (id) => {
		const updated = addresses.map((a) => ({
			...a,
			isDefault: a.id === id
		}));
		setAddresses(updated);
		save(ADDRESSES_KEY, updated);
	};
	const removeAddress = (id) => {
		const remaining = addresses.filter((a) => a.id !== id);
		if (remaining.length && !remaining.some((a) => a.isDefault)) {
			const first = remaining[0];
			if (first) remaining[0] = {
				...first,
				isDefault: true
			};
		}
		setAddresses(remaining);
		save(ADDRESSES_KEY, remaining);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-primary",
						children: "My account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-1 font-display text-4xl",
						children: ["Welcome, ", profile.firstName]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Manage your profile, addresses and Naik Foods orders."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/orders",
					className: "inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold hover:bg-secondary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-4" }), " Order history"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl border bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl",
								children: "Profile"
							})]
						}), !editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								setDraft(profile);
								setEditing(true);
							},
							className: "inline-flex items-center gap-2 text-sm font-semibold text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" }), " Edit"]
						})]
					}), editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: saveProfile,
						className: "mt-5 grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "First name",
								value: draft.firstName,
								onChange: (v) => setDraft({
									...draft,
									firstName: v
								}),
								pattern: "[A-Za-z .'-]+"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Last name",
								value: draft.lastName,
								onChange: (v) => setDraft({
									...draft,
									lastName: v
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								type: "email",
								value: draft.email,
								onChange: (v) => setDraft({
									...draft,
									email: v
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Phone",
								inputMode: "numeric",
								maxLength: 10,
								value: draft.phone,
								onChange: (v) => setDraft({
									...draft,
									phone: v.replace(/\D/g, "").slice(0, 10)
								}),
								placeholder: "10-digit mobile number"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2 sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
									children: "Save changes"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setEditing(false),
									className: "rounded-xl border px-5 py-2.5 text-sm font-semibold",
									children: "Cancel"
								})]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-5 grid gap-4 sm:grid-cols-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								label: "Name",
								value: `${profile.firstName} ${profile.lastName}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								label: "Email",
								value: profile.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								label: "Phone",
								value: profile.phone || "Not added"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								label: "Orders",
								value: `${orders.length}`
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl border bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl",
							children: "Recent orders"
						})]
					}), orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyOrders, { compact: true }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-3",
						children: orders.slice(0, 3).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderMini, { order: o }, o.id))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 rounded-2xl border bg-card p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl",
								children: "Saved addresses"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								setShowAddressForm(!showAddressForm);
								if (showAddressForm) {
									setEditingAddressId(null);
									setAddressDraft(emptyAddress());
								}
							},
							className: "inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }),
								" ",
								showAddressForm && !editingAddressId ? "Close" : "Add address"
							]
						})]
					}),
					showAddressForm && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: saveAddress,
						className: "mt-5 grid gap-4 rounded-xl bg-secondary/50 p-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Label",
								value: addressDraft.label,
								onChange: (v) => setAddressDraft({
									...addressDraft,
									label: v
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Address",
								value: addressDraft.line1,
								onChange: (v) => setAddressDraft({
									...addressDraft,
									line1: v
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "City",
								value: addressDraft.city,
								onChange: (v) => setAddressDraft({
									...addressDraft,
									city: v
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "State",
								value: addressDraft.state,
								onChange: (v) => setAddressDraft({
									...addressDraft,
									state: v
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Pincode",
								inputMode: "numeric",
								maxLength: 6,
								value: addressDraft.pincode,
								onChange: (v) => setAddressDraft({
									...addressDraft,
									pincode: v.replace(/\D/g, "").slice(0, 6)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-end gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "flex-1 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground",
									children: editingAddressId ? "Update address" : "Save address"
								}), editingAddressId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setEditingAddressId(null);
										setAddressDraft(emptyAddress());
										setShowAddressForm(false);
									},
									className: "rounded-xl border px-4 py-2.5 text-sm font-semibold",
									children: "Cancel"
								})]
							})
						]
					}),
					addresses.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 rounded-xl border border-dashed p-6 text-center text-sm text-muted-foreground",
						children: "No saved addresses yet. Add one to make checkout faster."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 grid gap-4 md:grid-cols-2",
						children: addresses.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: a.label
									}), a.isDefault && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-secondary px-2 py-1 text-xs font-semibold text-primary",
										children: "Default"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: [
										a.line1,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										a.city,
										", ",
										a.state,
										" — ",
										a.pincode
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap gap-4 text-xs font-semibold",
									children: [
										!a.isDefault && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setDefault(a.id),
											className: "text-primary",
											children: "Set default"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => editAddress(a),
											className: "text-primary",
											children: "Edit"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => removeAddress(a.id),
											className: "inline-flex items-center gap-1 text-destructive",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3" }), " Remove"]
										})
									]
								})
							]
						}, a.id))
					})
				]
			})
		]
	});
}
function Field(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-1.5 text-sm font-medium",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: props.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			required: props.label !== "Phone",
			type: props.type ?? "text",
			inputMode: props.inputMode,
			maxLength: props.maxLength,
			pattern: props.pattern,
			value: props.value,
			onChange: (e) => props.onChange(e.target.value),
			placeholder: props.placeholder,
			className: "rounded-xl border bg-background px-3 py-2.5 outline-none focus:border-primary"
		})]
	});
}
function Info({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-1 font-semibold",
		children: value
	})] });
}
function OrderMini({ order }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/orders/$orderId",
		params: { orderId: order.id },
		className: "block rounded-xl border p-4 hover:bg-secondary",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between gap-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold",
					children: order.id
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: order.status
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: [
					new Date(order.createdAt).toLocaleDateString("en-IN"),
					" · ",
					order.items.length,
					" item(s)"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 font-semibold",
				children: ["₹", order.total.toLocaleString("en-IN")]
			})
		]
	});
}
function EmptyOrders({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${compact ? "mt-4" : "mt-8"} rounded-xl border border-dashed p-6 text-center`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "mx-auto size-8 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm font-semibold",
				children: "No orders yet"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: "Your completed checkout orders will appear here."
			}),
			!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/store",
				className: "mt-4 inline-block rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground",
				children: "Start shopping"
			})
		]
	});
}
//#endregion
export { AccountPage as component };
