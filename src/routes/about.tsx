import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Heart, Leaf, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About Naik Foods | Authentic Maharashtrian Food" }] }),
  component: AboutPage,
});
function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl bg-brand-dark px-7 py-14 text-white md:px-14">
        <p className="text-sm font-semibold text-white/70">Our story</p>
        <h1 className="mt-2 max-w-3xl font-display text-5xl font-extrabold text-white">
          Traditional Maharashtrian flavours, made for modern homes.
        </h1>
        <p className="mt-5 max-w-2xl text-white/80">
          Naik Foods brings regional recipes, familiar ingredients and small-batch care together in
          one place.
        </p>
      </div>
      <section id="story" className="mt-10 grid gap-6 md:grid-cols-3">
        <Value
          icon={<Leaf />}
          title="Authentic"
          text="Recipes inspired by regional kitchens and family traditions."
        />
        <Value
          icon={<Heart />}
          title="Made with care"
          text="Thoughtful ingredients, clear product information and dependable packaging."
        />
        <Value
          icon={<ShieldCheck />}
          title="Shop with confidence"
          text="Transparent prices, validation and useful order information throughout the journey."
        />
      </section>
      <section className="mt-12 rounded-2xl border bg-card p-7">
        <h2 className="font-display text-3xl">From Farm to Your Kitchen</h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
          Our food story starts with regional ingredients and ends with easy-to-shop products for
          everyday meals, gifting and celebrations. This page now makes the previously inactive
          Learn More journey useful by providing the full story in one place.
        </p>
        <Link
          to="/store"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
        >
          Explore the collection <ArrowRight className="size-4" />
        </Link>
      </section>
    </div>
  );
}
function Value({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
        {icon}
      </div>
      <h2 className="mt-4 font-display text-xl">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}
