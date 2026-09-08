import { Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Search, ShoppingBag, Heart, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { formatINR } from "@/data/products";
import { searchProducts } from "@/lib/catalog.functions";
import { useCart } from "@/lib/cart";

// Same nav labels as the live site.
const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/store" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// Site-wide search with instant results — the main gap this prototype fills.
function SearchBox() {
  const navigate = useNavigate();
  const search = useServerFn(searchProducts);
  const [term, setTerm] = useState("");
  const [debounced, setDebounced] = useState("");
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(term.trim()), 200);
    return () => clearTimeout(id);
  }, [term]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const { data, isFetching } = useQuery({
    queryKey: ["search", debounced],
    queryFn: () => search({ data: { q: debounced, categories: [], maxPrice: 9999, limit: 6 } }),
    enabled: debounced.length > 1,
  });

  const results = data?.products ?? [];
  const showPanel = open && debounced.length > 1;

  return (
    <div ref={boxRef} className="relative w-full max-w-xs">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setOpen(false);
          navigate({ to: "/store", search: { q: term.trim() } });
        }}
      >
        <label htmlFor="site-search" className="sr-only">
          Search products
        </label>
        <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          id="site-search"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search chakali, pickle, masala…"
          className="w-full rounded-full border bg-secondary/60 py-2.5 pl-10 pr-3 text-sm outline-none transition-colors focus:border-primary focus:bg-card"
        />
      </form>

      {showPanel && (
        <div className="absolute left-0 right-0 top-12 z-50 overflow-hidden rounded-2xl border bg-popover shadow-xl">
          {isFetching && results.length === 0 && (
            <p className="px-4 py-3 text-sm text-muted-foreground">Searching…</p>
          )}
          {!isFetching && results.length === 0 && (
            <p className="px-4 py-3 text-sm text-muted-foreground">
              Nothing matches “{debounced}”. Try “pickle”, “khakhra” or “masala”.
            </p>
          )}
          {results.map((p) => (
            <Link
              key={p.slug}
              to="/products/$slug"
              params={{ slug: p.slug }}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between gap-4 border-b px-4 py-2.5 text-sm last:border-b-0 hover:bg-secondary"
            >
              <span>
                <span className="block font-semibold">{p.name}</span>
                <span className="block text-xs text-muted-foreground">{p.category}</span>
              </span>
              <span className="shrink-0 font-semibold">{formatINR(p.price)}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function IconButton({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <span
      aria-label={label}
      className="flex size-10 items-center justify-center rounded-full bg-secondary text-foreground/70"
    >
      {children}
    </span>
  );
}

export function Header() {
  const { count, wishlist } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-[80rem] flex-wrap items-center gap-x-8 gap-y-3 px-6 py-3">
        {/* Wordmark stands in for the logo image — this prototype uses no images. */}
        <Link to="/" className="leading-none">
          <span className="block font-display text-2xl font-extrabold tracking-tight text-accent">
            Naik
          </span>
          <span className="block font-display text-lg font-bold leading-none text-primary">
            Foods
          </span>
        </Link>

        <nav className="order-3 hidden items-center gap-8 text-[15px] font-medium md:order-none md:flex">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="transition-colors hover:text-primary">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="order-4 ml-auto flex items-center gap-3 md:order-none">
          <div className="hidden lg:block">
            <SearchBox />
          </div>
          <Link to="/account" aria-label="Account">
            <IconButton label="Account">
              <User className="size-4" />
            </IconButton>
          </Link>
          <Link to="/wishlist" aria-label="Wishlist" className="relative">
            <IconButton label="Wishlist">
              <Heart className="size-4" />
            </IconButton>
            <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
              {wishlist.length}
            </span>
          </Link>
          <Link to="/cart" className="relative">
            <IconButton label="Cart">
              <ShoppingBag className="size-4" />
            </IconButton>
            <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
              {count}
            </span>
          </Link>
        </div>

        <div className="order-5 w-full lg:hidden">
          <SearchBox />
        </div>
      </div>
    </header>
  );
}
