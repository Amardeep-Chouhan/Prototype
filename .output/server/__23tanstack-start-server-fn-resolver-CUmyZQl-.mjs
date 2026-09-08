//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-CUmyZQl-.js
var manifest = {
	"0ca8c0d451fe626e0bb9952fea9eca731a0c03e85886f5ab2eb56018486f2faf": {
		functionName: "searchProducts_createServerFn_handler",
		importer: () => import("./_ssr/catalog.functions-Dafrga7X.mjs")
	},
	"4995d690512e6a3f557285abba8a8dee1b671e73f31ab70b5f8d49fac5f80bd7": {
		functionName: "applyPromo_createServerFn_handler",
		importer: () => import("./_ssr/promo.functions-hk7KmRnR.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
