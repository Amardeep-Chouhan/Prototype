import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/routes/blog";
export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.post.title ?? "Article"} | Naik Foods` }],
  }),
  component: BlogDetails,
});
function BlogDetails() {
  const { post } = Route.useLoaderData();
  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
      >
        <ArrowLeft className="size-4" /> Back to journal
      </Link>
      <div className="mt-6 overflow-hidden rounded-3xl border bg-card">
        <div className="flex min-h-72 items-center justify-center bg-secondary p-10 text-center font-display text-2xl font-bold uppercase tracking-widest text-muted-foreground">
          {post.tag} · Featured story
        </div>
        <div className="p-7 md:p-10">
          <p className="text-sm font-semibold text-primary">{post.tag}</p>
          <h1 className="mt-2 font-display text-4xl">{post.title}</h1>
          <p className="mt-5 text-base leading-8 text-muted-foreground">{post.excerpt}</p>
          <div className="mt-8 space-y-5 text-sm leading-7">
            <p>
              Good food starts with useful choices. This article space gives customers practical
              context around regional ingredients, recipes and pantry habits.
            </p>
            <p>
              Explore the store alongside the journal to discover products that fit the same idea:
              familiar food, clear information and a simpler shopping experience.
            </p>
          </div>
          <Link
            to="/store"
            className="mt-8 inline-block rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Shop related products
          </Link>
        </div>
      </div>
    </article>
  );
}
