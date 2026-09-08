globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { i as toEventHandler, n as defineHandler, o as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-C9Yxeect.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9da-y9KO6H/rX0/s5++/MOXGx6hB1PI\"",
		"mtime": "2026-09-08T16:42:09.982Z",
		"size": 2522,
		"path": "../public/assets/about-C9Yxeect.js"
	},
	"/assets/account-D1UeUTaq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"266-x6U4Oqp+mi/RSE0Qwu18Uib2TRM\"",
		"mtime": "2026-09-08T16:42:09.984Z",
		"size": 614,
		"path": "../public/assets/account-D1UeUTaq.js"
	},
	"/assets/account-vnq-JzFX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2800-JbK/5nPrmmmHTyKqTF5o6LDKBUg\"",
		"mtime": "2026-09-08T16:42:09.985Z",
		"size": 10240,
		"path": "../public/assets/account-vnq-JzFX.js"
	},
	"/assets/arrow-left-CXD44z9P.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-0TQydj65uEEBJKEClcz2TTNx938\"",
		"mtime": "2026-09-08T16:42:09.986Z",
		"size": 154,
		"path": "../public/assets/arrow-left-CXD44z9P.js"
	},
	"/assets/arrow-right-0-NachK8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-Vy9EWl2T/MWGwDSfCDUgqX7eTF8\"",
		"mtime": "2026-09-08T16:42:09.996Z",
		"size": 154,
		"path": "../public/assets/arrow-right-0-NachK8.js"
	},
	"/assets/blog-6SfgIRyg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7cd-x+R7zttn39ncFgIdFdom5QFCC7o\"",
		"mtime": "2026-09-08T16:42:09.997Z",
		"size": 1997,
		"path": "../public/assets/blog-6SfgIRyg.js"
	},
	"/assets/blog._slug-CMfAvs5l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6a7-HCL9N0MCAcLKlw7A1qmpK6N0HO0\"",
		"mtime": "2026-09-08T16:42:09.997Z",
		"size": 1703,
		"path": "../public/assets/blog._slug-CMfAvs5l.js"
	},
	"/assets/cart-BqpgaNRe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14b3-lqTKZhnloRR89rrokkduRmx33Xo\"",
		"mtime": "2026-09-08T16:42:09.998Z",
		"size": 5299,
		"path": "../public/assets/cart-BqpgaNRe.js"
	},
	"/assets/check-Kimhie7f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"71-KEKM7FxqjZyVnjErfkwT2uZGyQg\"",
		"mtime": "2026-09-08T16:42:09.999Z",
		"size": 113,
		"path": "../public/assets/check-Kimhie7f.js"
	},
	"/assets/circle-check-D1bPXR9E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-1rXgzoXH9uLX/4qlVLitZVCag1k\"",
		"mtime": "2026-09-08T16:42:10.008Z",
		"size": 167,
		"path": "../public/assets/circle-check-D1bPXR9E.js"
	},
	"/assets/checkout-CW_X7qvF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1aad-qQJ1QIItpYinqkRh2XYfcfHRlEo\"",
		"mtime": "2026-09-08T16:42:10.007Z",
		"size": 6829,
		"path": "../public/assets/checkout-CW_X7qvF.js"
	},
	"/assets/clock-3-Dxn0FytE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-R9VySBvU/x2MTv+rfuwZq9OtjHg\"",
		"mtime": "2026-09-08T16:42:10.014Z",
		"size": 158,
		"path": "../public/assets/clock-3-Dxn0FytE.js"
	},
	"/assets/contact-B0-nsl2f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a67-eoA6uffN3OCv5iSGj2rd/HrJcV0\"",
		"mtime": "2026-09-08T16:42:10.015Z",
		"size": 2663,
		"path": "../public/assets/contact-B0-nsl2f.js"
	},
	"/assets/jsx-runtime-BkSabwWG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c1-VkW1xFbt56H2FC99QIi6PTzaFIo\"",
		"mtime": "2026-09-08T16:42:10.017Z",
		"size": 961,
		"path": "../public/assets/jsx-runtime-BkSabwWG.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-08T16:28:23.651Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/leaf-BUqw3CSA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fe-LwvH0p0DZMPtOZtlq6hvefjIJN4\"",
		"mtime": "2026-09-08T16:42:10.022Z",
		"size": 254,
		"path": "../public/assets/leaf-BUqw3CSA.js"
	},
	"/assets/not-found-i5RsCZif.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-Trmr7GZIBZuvfg4uM18tBiRtOXg\"",
		"mtime": "2026-09-08T16:42:10.045Z",
		"size": 118,
		"path": "../public/assets/not-found-i5RsCZif.js"
	},
	"/assets/orders-y3OXPkhG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"127a-5PaJV9A/SqJRyrLazF0yie512Ao\"",
		"mtime": "2026-09-08T16:42:10.054Z",
		"size": 4730,
		"path": "../public/assets/orders-y3OXPkhG.js"
	},
	"/assets/orders._orderId-CTzLmc0c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b68-rN4WSheeCeYM9uj2i/21HKj0O4I\"",
		"mtime": "2026-09-08T16:42:10.057Z",
		"size": 7016,
		"path": "../public/assets/orders._orderId-CTzLmc0c.js"
	},
	"/assets/link-D0kujlJP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"68d4-KJfCXp+wxEET9jaW8NiVp+Mut0M\"",
		"mtime": "2026-09-08T16:42:10.034Z",
		"size": 26836,
		"path": "../public/assets/link-D0kujlJP.js"
	},
	"/assets/privacy-fZ0LE4c7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"421-ROAygfYJXni1pUbaWMhqNgtqJq8\"",
		"mtime": "2026-09-08T16:42:10.058Z",
		"size": 1057,
		"path": "../public/assets/privacy-fZ0LE4c7.js"
	},
	"/assets/package-C6QVnKqS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"169-eNe1pd6IQ+3sU7+ugv7tyr2n9vM\"",
		"mtime": "2026-09-08T16:42:10.057Z",
		"size": 361,
		"path": "../public/assets/package-C6QVnKqS.js"
	},
	"/assets/ProductCard-Bp3SPxHH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c44-9kqpMP9S2coeZbvUQU1Y0/f1hUw\"",
		"mtime": "2026-09-08T16:42:09.981Z",
		"size": 3140,
		"path": "../public/assets/ProductCard-Bp3SPxHH.js"
	},
	"/assets/products._slug-CKnHAUGC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c89-gvQHHmXlYWbVZ60l/7lnjS7w1gk\"",
		"mtime": "2026-09-08T16:42:10.058Z",
		"size": 7305,
		"path": "../public/assets/products._slug-CKnHAUGC.js"
	},
	"/assets/index-4M0VJXwu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"60f4f-uofcqd3nzbcgZs6d0GPA7L4TCDw\"",
		"mtime": "2026-09-08T16:42:09.980Z",
		"size": 397135,
		"path": "../public/assets/index-4M0VJXwu.js"
	},
	"/assets/redirect-Dhm19zUi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f4-ePZWCXP5uehkmkGMkMl5xDch+/Y\"",
		"mtime": "2026-09-08T16:42:10.059Z",
		"size": 500,
		"path": "../public/assets/redirect-Dhm19zUi.js"
	},
	"/assets/react-DHmoMYoq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d67-nufvvndhXtiz6VWh8XcPEWVqP1g\"",
		"mtime": "2026-09-08T16:42:10.059Z",
		"size": 7527,
		"path": "../public/assets/react-DHmoMYoq.js"
	},
	"/assets/routes-VSbS4KuC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4757-rtLn20I+U2QUP4mwGlEcX96N8Ag\"",
		"mtime": "2026-09-08T16:42:10.069Z",
		"size": 18263,
		"path": "../public/assets/routes-VSbS4KuC.js"
	},
	"/assets/returns-Demet0Ey.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1196-J0SQC0Y4HW1EolqsYIwQ6syxRuQ\"",
		"mtime": "2026-09-08T16:42:10.066Z",
		"size": 4502,
		"path": "../public/assets/returns-Demet0Ey.js"
	},
	"/assets/shield-check-B415vcPd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"135-jxzpVbQwxbTrKjl/9FtiMrxbMic\"",
		"mtime": "2026-09-08T16:42:10.071Z",
		"size": 309,
		"path": "../public/assets/shield-check-B415vcPd.js"
	},
	"/assets/store-Be3xhOSy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e94-kHnKUhwj1smFPySwrPJp23qhsJA\"",
		"mtime": "2026-09-08T16:42:10.072Z",
		"size": 3732,
		"path": "../public/assets/store-Be3xhOSy.js"
	},
	"/assets/styles-RpPQB6BP.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1612a-RLb+44EHCSM5/4wO0VZlzP/KkU8\"",
		"mtime": "2026-09-08T16:42:10.079Z",
		"size": 90410,
		"path": "../public/assets/styles-RpPQB6BP.css"
	},
	"/assets/terms-B_ds5Ugs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a9-s6UCIeQpB6n/KSwNm7lJWhYHoJ0\"",
		"mtime": "2026-09-08T16:42:10.073Z",
		"size": 937,
		"path": "../public/assets/terms-B_ds5Ugs.js"
	},
	"/assets/useMatch-DwPAA0oo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29e-fRyD7BLTldjtIZA5lJXsjTkkJPc\"",
		"mtime": "2026-09-08T16:42:10.076Z",
		"size": 670,
		"path": "../public/assets/useMatch-DwPAA0oo.js"
	},
	"/assets/wishlist-kGWm9T0G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5a9-c/58JnOKYn9wLq6McesOYDINStk\"",
		"mtime": "2026-09-08T16:42:10.078Z",
		"size": 1449,
		"path": "../public/assets/wishlist-kGWm9T0G.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_pvjJvT = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_pvjJvT
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
