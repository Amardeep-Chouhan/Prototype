import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { ProductCard } from "@/components/site/ProductCard";
import { ScrollRow } from "@/components/site/ScrollRow";
import { CATEGORIES, PRODUCTS } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naik Foods | Authentic Maharashtrian Snacks, Pickles & Masalas" },
      {
        name: "description",
        content:
          "Authentic Maharashtrian snacks, pickles, sweets and masalas from Pune, delivered across India.",
      },
      { property: "og:title", content: "Naik Foods | Authentic Maharashtrian Delicacies" },
      {
        property: "og:description",
        content:
          "Hand-pounded masalas, sun-cured pickles and small-batch snacks from Vidarbha and Konkan.",
      },
    ],
  }),
  component: Home,
});

const HERO_SLIDES = [
  {
    kicker: "Naik Foods Original",
    title: "The Heart of Authentic Maharashtra",
    body: "From hand-pounded masalas to farm-fresh staples, bring the traditional flavours of Vidarbha and Konkan to your kitchen.",
    cta: "Shop the collection",
    href: "/store" as const,
  },
  {
    kicker: "Small-batch goodness",
    title: "Aaji's recipes. Made for today.",
    body: "Sun-cured pickles, crunchy snacks and everyday staples made to feel familiar from the very first bite.",
    cta: "Explore pickles",
    href: "/store" as const,
  },
  {
    kicker: "Visit Pune",
    title: "Taste the story in person",
    body: "Find our authentic food store in Shukrawar Peth and discover fresh batches and local favourites.",
    cta: "Locate our shop",
    href: "/contact" as const,
  },
];

const CATEGORY_COUNTS: Record<string, number> = {
  "Snacks and Namkeen": 105,
  "Pickles & Condiments": 14,
  "Sweets & Bakery": 25,
  "Dairy & Beverages": 15,
  "Mukhvas & Digestives": 6,
  Confectionery: 5,
  "Spices & Masalas": 9,
  "Dry/Instant Grocery": 20,
};
const REGIONS = ["Pune", "Vidarbha", "Konkan", "Nashik"] as const;
const PROMOS = [
  {
    kicker: "Pure & Traditional",
    title: "Small-batch pickles",
    body: "From Aaji's kitchen to yours.",
    cta: "Shop pickles",
    category: "Pickles & Condiments",
  },
  {
    kicker: "Everyday Staples",
    title: "Masalas ground fresh",
    body: "Hand-pounded, never machine-blasted.",
    cta: "Browse masalas",
    category: "Spices & Masalas",
  },
  {
    kicker: "Fast & Flavorful",
    title: "Meals made simpler",
    body: "Premixes and instant staples for busy days.",
    cta: "Browse grocery",
    category: "Dry/Instant Grocery",
  },
];
const TESTIMONIALS = [
  {
    name: "Riya Sharma",
    via: "Instagram",
    quote: "The taste feels truly homemade and the packaging is always perfect!",
  },
  {
    name: "Aman Verma",
    via: "Google",
    quote: "Great quality, consistent taste, and fast delivery every time.",
  },
  {
    name: "Neha Gupta",
    via: "Google",
    quote: "From snacks to full meals, Naik Foods delivers amazing flavour and freshness.",
  },
  {
    name: "Rahul Mehta",
    via: "Instagram",
    quote: "Everything tastes authentic, fresh, and perfectly packed.",
  },
];
const ARTICLES = [
  {
    tag: "Healthy Snack",
    title: "10 Healthy & Crunchy Snack Products You Must Try",
    date: "3 March 2026",
  },
  {
    tag: "Fasting",
    title: "10 Delicious Upwas Snacks You Must Try During Fasting",
    date: "9 March 2026",
  },
  {
    tag: "Premixes",
    title: "Traditional Thalipith Bhajni for Nutritious Maharashtrian Meals",
    date: "12 March 2026",
  },
];

function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-7">
      <div className="flex items-center gap-2">
        {eyebrow && (
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </span>
        )}
      </div>
      <h2 className="mt-1 font-display text-[30px] font-extrabold tracking-tight md:text-[38px]">
        {title}
      </h2>
      {sub && (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground md:text-[15px]">
          {sub}
        </p>
      )}
    </div>
  );
}

function Home() {
  const [region, setRegion] = useState<(typeof REGIONS)[number]>("Pune");
  const popular = PRODUCTS.filter((p) => p.popular).slice(0, 6);
  const bestSellers = PRODUCTS.filter((p) => p.bestSeller && !p.popular).slice(0, 6);
  const regional = PRODUCTS.filter((_, i) => REGIONS[i % 4] === region).slice(0, 6);

  return (
    <div className="mx-auto max-w-[82rem] px-4 py-5 sm:px-6">
      <section
        aria-label="Naik Foods highlights"
        className="relative overflow-hidden rounded-[2rem] bg-background"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
        <ScrollRow label="highlights" controls="corner">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.title}
              className="scroll-row-item relative min-h-[470px] w-[94vw] max-w-[76rem] overflow-hidden rounded-[2rem] bg-primary p-7 text-primary-foreground sm:p-10 md:p-14"
            >
              <div className="absolute -right-16 -top-20 size-72 rounded-full border-[42px] border-white/10" />
              <div className="absolute bottom-[-110px] right-[18%] size-72 rounded-full bg-white/10 blur-2xl" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] backdrop-blur">
                    <Sparkles className="size-3.5" /> {slide.kicker}
                  </span>
                  <h1 className="mt-7 max-w-3xl font-display text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-[4.5rem]">
                    {slide.title}
                  </h1>
                  <p className="mt-5 max-w-2xl text-sm leading-6 text-white/85 md:text-base">
                    {slide.body}
                  </p>
                </div>
                <div className="flex flex-wrap items-end justify-between gap-6">
                  {index === 1 ? (
                    <Link
                      to="/store"
                      search={{ category: "Pickles & Condiments" }}
                      className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-brand-dark shadow-lg transition hover:-translate-y-0.5"
                    >
                      {slide.cta} <ArrowRight className="size-4" />
                    </Link>
                  ) : (
                    <Link
                      to={slide.href}
                      className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-brand-dark shadow-lg transition hover:-translate-y-0.5"
                    >
                      {slide.cta} <ArrowRight className="size-4" />
                    </Link>
                  )}
                  <div className="hidden rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur sm:block">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">
                      Crafted with care
                    </p>
                    <p className="mt-1 text-sm font-bold">Traditional taste · modern convenience</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ScrollRow>
      </section>

      <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Leaf, title: "Authentic recipes", note: "Regional flavours" },
          { icon: Truck, title: "Doorstep delivery", note: "Across India" },
          { icon: ShieldCheck, title: "Secure checkout", note: "Safe & simple" },
          { icon: Clock3, title: "Customer support", note: "Here when needed" },
        ].map(({ icon: Icon, title, note }) => (
          <div key={title} className="flex items-center gap-3 rounded-2xl border bg-card p-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
              <Icon className="size-5" />
            </span>
            <div>
              <p className="text-sm font-bold">{title}</p>
              <p className="text-xs text-muted-foreground">{note}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Shop by category"
          title="Find your favourite flavour"
          sub="From crunchy namkeen to Aaji-style pickles, explore the range by category."
        />
        <ScrollRow label="featured categories">
          {CATEGORIES.map((category) => (
            <Link
              key={category}
              to="/store"
              search={{ category }}
              className="scroll-row-item group w-64 overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
            >
              <div className="relative flex h-36 items-end overflow-hidden bg-secondary p-5">
                <div className="absolute -right-7 -top-7 size-28 rounded-full bg-primary/10 transition group-hover:scale-125" />
                <span className="relative font-display text-lg font-extrabold leading-tight">
                  {category}
                </span>
              </div>
              <div className="flex items-center justify-between p-4">
                <span className="text-xs font-semibold text-muted-foreground">
                  {CATEGORY_COUNTS[category]} products
                </span>
                <ArrowUpRight className="size-4 text-primary" />
              </div>
            </Link>
          ))}
        </ScrollRow>
      </section>

      <section className="mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Curated for you"
            title="Popular right now"
            sub="Products customers keep coming back to."
          />
          <Link
            to="/store"
            className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            Explore all <ArrowRight className="size-4" />
          </Link>
        </div>
        <ScrollRow label="popular products">
          {popular.map((p) => (
            <div key={p.slug} className="scroll-row-item w-64">
              <ProductCard product={p} />
            </div>
          ))}
        </ScrollRow>
      </section>

      <section className="mt-20 rounded-[2rem] bg-brand-dark p-7 text-white sm:p-10 md:p-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em]">
              Naik Foods promise
            </span>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Real food. Regional stories. A better everyday pantry.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 md:text-base">
              Discover food inspired by Maharashtra's kitchens, presented with the convenience
              today's customers expect.
            </p>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-brand-dark"
          >
            Our story <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Customer favourites"
            title="Best sellers"
            sub="Our strongest everyday picks — now separated from the popularity feed for clearer discovery."
          />
          <Link
            to="/store"
            className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            Shop best sellers <ArrowRight className="size-4" />
          </Link>
        </div>
        <ScrollRow label="best sellers">
          {bestSellers.map((p) => (
            <div key={p.slug} className="scroll-row-item w-64">
              <ProductCard product={p} />
            </div>
          ))}
        </ScrollRow>
      </section>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Made for your region"
          title="Shop by region"
          sub="A quick way to discover flavours associated with different parts of Maharashtra."
        />
        <div className="flex gap-7 overflow-x-auto border-b text-sm">
          {REGIONS.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRegion(r)}
              className={`-mb-px shrink-0 border-b-2 pb-3 font-bold transition ${region === r ? "border-primary text-primary" : "border-transparent text-muted-foreground"}`}
            >
              {r}
            </button>
          ))}
        </div>
        <div className="mt-6">
          <ScrollRow label="regional products">
            {regional.map((p) => (
              <div key={p.slug} className="scroll-row-item w-64">
                <ProductCard product={p} />
              </div>
            ))}
          </ScrollRow>
        </div>
      </section>

      <section className="mt-20 grid gap-5 md:grid-cols-3">
        {PROMOS.map((promo) => (
          <Link
            key={promo.title}
            to="/store"
            search={{ category: promo.category }}
            className="group rounded-[1.7rem] border bg-card p-7 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="inline-flex rounded-full bg-secondary px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-primary">
              {promo.kicker}
            </span>
            <h3 className="mt-5 font-display text-2xl font-extrabold">{promo.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{promo.body}</p>
            <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">
              {promo.cta} <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </section>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Loved by foodies"
          title="What our community says"
          sub="A few words from customers who keep authentic flavours in their kitchens."
        />
        <ScrollRow label="community reviews">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="scroll-row-item w-80 rounded-2xl border bg-card p-6">
              <figcaption className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-secondary font-bold text-primary">
                  {t.name[0]}
                </span>
                <span>
                  <span className="block font-bold">{t.name}</span>
                  <span className="text-xs text-muted-foreground">
                    Verified community · {t.via}
                  </span>
                </span>
              </figcaption>
              <p className="mt-4 text-accent">★★★★★</p>
              <blockquote className="mt-3 text-sm italic leading-6 text-muted-foreground">
                “{t.quote}”
              </blockquote>
            </figure>
          ))}
        </ScrollRow>
      </section>

      <section className="mt-20">
        <SectionHeading
          eyebrow="From the kitchen"
          title="Recipes, stories & inspiration"
          sub="Useful food content that helps customers discover more than just products."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {ARTICLES.map((a) => (
            <Link
              key={a.title}
              to="/blog"
              className="group overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-40 items-end bg-secondary p-5">
                <span className="rounded-full bg-card px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                  {a.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-extrabold leading-snug">{a.title}</h3>
                <p className="mt-3 text-xs text-muted-foreground">
                  {a.date} · Read article{" "}
                  <ArrowRight className="ml-1 inline size-3.5 transition group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-20 overflow-hidden rounded-[2rem] bg-secondary p-7 sm:p-10 md:p-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
              Stay in the loop
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">
              Recipes, new launches & useful offers.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No spam. Just the good stuff from Naik Foods.
            </p>
          </div>
          <form
            className="flex w-full max-w-xl overflow-hidden rounded-full border bg-card p-1.5"
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.elements.namedItem(
                "newsletter",
              ) as HTMLInputElement | null;
              const email = input?.value.trim() ?? "";
              if (!/^\S+@\S+\.\S+$/.test(email)) {
                input?.setCustomValidity("Enter a valid email address.");
                input?.reportValidity();
                return;
              }
              input?.setCustomValidity("");
              localStorage.setItem("naik-newsletter", email);
              if (input) input.value = "";
              toast.success("You're subscribed!", {
                description: "Thanks for joining the Naik Foods community.",
              });
            }}
          >
            <label htmlFor="newsletter" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter"
              name="newsletter"
              type="email"
              required
              placeholder="Your email address"
              className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="mt-20 grid gap-4 sm:grid-cols-2">
        <Link
          to="/contact"
          className="group rounded-2xl border bg-card p-6 transition hover:border-primary"
        >
          <div className="flex items-center gap-3">
            <MapPin className="size-5 text-primary" />
            <div>
              <p className="font-bold">Visit our Pune store</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Shukrawar Peth · 9 AM–10 PM daily
              </p>
            </div>
            <ArrowUpRight className="ml-auto size-5 text-muted-foreground transition group-hover:text-primary" />
          </div>
        </Link>
        <Link
          to="/returns"
          className="group rounded-2xl border bg-card p-6 transition hover:border-primary"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="size-5 text-primary" />
            <div>
              <p className="font-bold">Shop with confidence</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Read our returns & refunds policy
              </p>
            </div>
            <ArrowUpRight className="ml-auto size-5 text-muted-foreground transition group-hover:text-primary" />
          </div>
        </Link>
      </section>
    </div>
  );
}
