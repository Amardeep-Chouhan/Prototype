import { r as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as PRODUCTS } from "./products-CNjfagVT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-D0T8jWYC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function getStockLimit(slug) {
	if (slug === "beetroot-chips") return 4;
	if (slug === "ambadi-bhajiche-lonche") return 8;
	return 12;
}
var CartContext = (0, import_react.createContext)(null);
var STORAGE_KEY = "naik-prototype-cart";
var WISH_KEY = "naik-prototype-wishlist";
var PROMO_KEY = "naik-prototype-promo";
function priceFor(slug, weight) {
	const product = PRODUCTS.find((p) => p.slug === slug);
	if (!product || product.price <= 0) return 0;
	const index = product.weights.indexOf(weight);
	if (index <= 0) return product.price;
	return Math.round(product.price * (1 + index * .8));
}
function readStorage(key, fallback) {
	try {
		const raw = localStorage.getItem(key);
		return raw ? JSON.parse(raw) : fallback;
	} catch {
		return fallback;
	}
}
function deliveryFeeFor(subtotal) {
	if (subtotal === 0 || subtotal >= 999) return 0;
	return subtotal >= 499 ? 39 : 69;
}
function CartProvider({ children }) {
	const [lines, setLines] = (0, import_react.useState)([]);
	const [wishlist, setWishlist] = (0, import_react.useState)([]);
	const [appliedPromo, setAppliedPromo] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setLines(readStorage(STORAGE_KEY, []));
		setWishlist(readStorage(WISH_KEY, []));
		setAppliedPromo(readStorage(PROMO_KEY, null));
	}, []);
	(0, import_react.useEffect)(() => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
	}, [lines]);
	(0, import_react.useEffect)(() => {
		localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
	}, [wishlist]);
	(0, import_react.useEffect)(() => {
		if (appliedPromo) localStorage.setItem(PROMO_KEY, JSON.stringify(appliedPromo));
		else localStorage.removeItem(PROMO_KEY);
	}, [appliedPromo]);
	const value = (0, import_react.useMemo)(() => {
		const safeLines = lines.map((line) => ({
			...line,
			qty: Math.max(1, Math.min(line.qty, getStockLimit(line.slug)))
		})).filter((line) => PRODUCTS.some((p) => p.slug === line.slug) && priceFor(line.slug, line.weight) > 0);
		const subtotal = safeLines.reduce((sum, l) => sum + priceFor(l.slug, l.weight) * l.qty, 0);
		const deliveryFee = deliveryFeeFor(subtotal);
		const discount = appliedPromo ? Math.min(appliedPromo.discount, subtotal) : 0;
		const add = (slug, weight) => {
			if (!PRODUCTS.find((p) => p.slug === slug) || priceFor(slug, weight) <= 0) return {
				ok: false,
				message: "This product is currently unavailable."
			};
			const max = getStockLimit(slug);
			const existing = lines.find((l) => l.slug === slug && l.weight === weight);
			if (existing && existing.qty >= max) return {
				ok: false,
				message: `Only ${max} units are available for this product.`
			};
			setLines((prev) => {
				if (prev.find((l) => l.slug === slug && l.weight === weight)) return prev.map((l) => l.slug === slug && l.weight === weight ? {
					...l,
					qty: Math.min(max, l.qty + 1)
				} : l);
				return [...prev, {
					slug,
					weight,
					qty: 1
				}];
			});
			return { ok: true };
		};
		const setQty = (slug, weight, qty) => {
			const max = getStockLimit(slug);
			if (qty > max) return {
				ok: false,
				message: `Only ${max} units are available.`
			};
			setLines((prev) => qty <= 0 ? prev.filter((l) => !(l.slug === slug && l.weight === weight)) : prev.map((l) => l.slug === slug && l.weight === weight ? {
				...l,
				qty
			} : l));
			return { ok: true };
		};
		return {
			lines: safeLines,
			subtotal,
			count: safeLines.reduce((sum, l) => sum + l.qty, 0),
			deliveryFee,
			discount,
			total: Math.max(0, subtotal - discount + deliveryFee),
			wishlist,
			appliedPromo,
			add,
			setQty,
			remove: (slug, weight) => setLines((prev) => prev.filter((l) => !(l.slug === slug && l.weight === weight))),
			toggleWishlist: (slug) => setWishlist((prev) => prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]),
			setAppliedPromo
		};
	}, [
		lines,
		wishlist,
		appliedPromo
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartContext.Provider, {
		value,
		children
	});
}
function useCart() {
	const ctx = (0, import_react.useContext)(CartContext);
	if (!ctx) throw new Error("useCart must be used inside CartProvider");
	return ctx;
}
//#endregion
export { useCart as i, getStockLimit as n, priceFor as r, CartProvider as t };
