import { P as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PRODUCTS } from "./products-CNjfagVT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-KsM9-Fpy.js
var $$splitComponentImporter = () => import("./products._slug-BX0GxRRo.mjs");
var Route = createFileRoute("/products/$slug")({
	loader: ({ params }) => {
		const product = PRODUCTS.find((p) => p.slug === params.slug);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ loaderData }) => {
		const product = loaderData?.product;
		return { meta: [
			{ title: `${product?.name ?? "Product"} | Naik Foods` },
			{
				name: "description",
				content: product?.description ?? ""
			},
			{
				property: "og:title",
				content: `${product?.name ?? "Product"} | Naik Foods`
			},
			{
				property: "og:description",
				content: product?.description ?? ""
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
