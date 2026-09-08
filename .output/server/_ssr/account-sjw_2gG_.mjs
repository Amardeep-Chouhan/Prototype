import { n as PRODUCTS } from "./products-CNjfagVT.mjs";
import { r as priceFor } from "./cart-D0T8jWYC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-sjw_2gG_.js
var PROFILE_KEY = "naik-profile";
var ADDRESSES_KEY = "naik-addresses";
var ORDERS_KEY = "naik-orders";
var DEFAULT_PROFILE = {
	firstName: "Naik",
	lastName: "Customer",
	email: "customer@example.com",
	phone: ""
};
function getProduct(slug) {
	return PRODUCTS.find((p) => p.slug === slug);
}
function getCartItems(lines) {
	return lines.flatMap((line) => {
		const product = getProduct(line.slug);
		if (!product) return [];
		return [{
			...line,
			name: product.name,
			unitPrice: priceFor(line.slug, line.weight)
		}];
	});
}
function createOrder(lines, subtotal, discount, delivery, address) {
	return {
		id: `NF-${Date.now().toString().slice(-8)}`,
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		items: getCartItems(lines),
		subtotal,
		discount,
		delivery,
		total: Math.max(0, subtotal - discount + delivery),
		status: "Placed",
		paymentStatus: "Demo payment",
		address
	};
}
//#endregion
export { createOrder as a, PROFILE_KEY as i, DEFAULT_PROFILE as n, ORDERS_KEY as r, ADDRESSES_KEY as t };
