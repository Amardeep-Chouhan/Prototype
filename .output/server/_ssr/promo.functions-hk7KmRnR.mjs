import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { a as stringType, i as objectType, r as numberType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/promo.functions-hk7KmRnR.js
var CODES = {
	NAIK10: {
		type: "percent",
		value: 10,
		minSubtotal: 0,
		note: "10% off your order"
	},
	FIRST50: {
		type: "flat",
		value: 50,
		minSubtotal: 299,
		note: "₹50 off orders above ₹299"
	},
	DIWALI15: {
		type: "percent",
		value: 15,
		minSubtotal: 999,
		note: "15% off orders above ₹999"
	}
};
var applyPromo_createServerFn_handler = createServerRpc({
	id: "4995d690512e6a3f557285abba8a8dee1b671e73f31ab70b5f8d49fac5f80bd7",
	name: "applyPromo",
	filename: "src/lib/promo.functions.ts"
}, (opts) => applyPromo.__executeServer(opts));
var applyPromo = createServerFn({ method: "POST" }).inputValidator((data) => objectType({
	code: stringType().min(1),
	subtotal: numberType().min(0)
}).parse(data)).handler(applyPromo_createServerFn_handler, async ({ data }) => {
	const code = data.code.trim().toUpperCase();
	const promo = CODES[code];
	if (!promo) return {
		ok: false,
		error: "That code isn't valid."
	};
	if (data.subtotal < promo.minSubtotal) return {
		ok: false,
		error: `This code needs a subtotal of ₹${promo.minSubtotal}.`
	};
	return {
		ok: true,
		code,
		discount: promo.type === "percent" ? Math.round(data.subtotal * promo.value / 100) : Math.min(promo.value, data.subtotal),
		note: promo.note
	};
});
//#endregion
export { applyPromo_createServerFn_handler };
