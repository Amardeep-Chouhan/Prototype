import { P as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-Cs1nhUC-.js
var $$splitComponentImporter$1 = () => import("./blog-DGyOekZM.mjs");
var Route$1 = createFileRoute("/blog")({
	head: () => ({ meta: [{ title: "Journal | Naik Foods" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var posts = [
	{
		slug: "healthy-snacking",
		tag: "Healthy Snack",
		title: "How to build a better everyday snack box",
		excerpt: "Simple regional favourites for work, school and travel."
	},
	{
		slug: "maharashtrian-recipes",
		tag: "Recipes",
		title: "5 Maharashtrian pantry staples worth keeping",
		excerpt: "A practical guide to masalas, pickles and instant staples."
	},
	{
		slug: "pickle-guide",
		tag: "Pickles",
		title: "A guide to choosing the right pickle",
		excerpt: "From tangy vegetables to coastal favourites, find your match."
	}
];
var $$splitComponentImporter = () => import("./blog._slug-CQoPqOd_.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = posts.find((p) => p.slug === params.slug);
		if (!post) throw notFound();
		return { post };
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.post.title ?? "Article"} | Naik Foods` }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route$1 as n, Route as t };
