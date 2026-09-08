import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Journal | Naik Foods" }] }),
  component: BlogPage,
});
const POSTS = [
  {
    slug: "healthy-snacking",
    tag: "Healthy Snack",
    title: "How to build a better everyday snack box",
    excerpt: "Simple regional favourites for work, school and travel.",
  },
  {
    slug: "maharashtrian-recipes",
    tag: "Recipes",
    title: "5 Maharashtrian pantry staples worth keeping",
    excerpt: "A practical guide to masalas, pickles and instant staples.",
  },
  {
    slug: "pickle-guide",
    tag: "Pickles",
    title: "A guide to choosing the right pickle",
    excerpt: "From tangy vegetables to coastal favourites, find your match.",
  },
];
export const posts = POSTS;
function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-sm font-semibold text-primary">Naik Foods Journal</p>
      <h1 className="mt-1 font-display text-4xl">Recipes, stories & pantry ideas</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Useful food stories designed to help customers discover products and make better use of
        them.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {POSTS.map((p) => (
          <Link
            key={p.slug}
            to="/blog/$slug"
            params={{ slug: p.slug }}
            className="overflow-hidden rounded-2xl border bg-card hover:shadow-md"
          >
            <div className="flex h-44 items-center justify-center bg-secondary p-6 text-center font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
              {p.tag}
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{p.tag}</p>
              <h2 className="mt-2 font-display text-xl">{p.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{p.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Read article <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
