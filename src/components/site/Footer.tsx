import { Link } from "@tanstack/react-router";
import { Clock, Instagram, Facebook, MapPin, MessageCircle, Phone, RotateCcw } from "lucide-react";

const promises = [
  { title: "Free Delivery", note: "Minimum order ₹999" },
  { title: "24/7 Support", note: "Contact us 24 Hours" },
  { title: "Secure Pay", note: "100% Secure Payment" },
  { title: "Easy Returns", note: "7-day return window" },
];

const shopLinks = [
  "Snacks and Namkeen",
  "Pickles & Condiments",
  "Sweets & Bakery",
  "Dairy & Beverages",
  "Mukhvas & Digestives",
];

export function Footer() {
  return (
    <>
      {/* Trust bar, same four promises as the live site */}
      <div className="mx-auto mt-16 w-full max-w-[80rem] px-6">
        <div className="grid grid-cols-2 gap-6 rounded-3xl border bg-card px-8 py-7 md:grid-cols-4">
          {promises.map((p) => (
            <div key={p.title}>
              <p className="font-semibold">{p.title}</p>
              <p className="text-sm text-muted-foreground">{p.note}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-14 bg-brand-dark text-white/85">
        <div className="mx-auto grid max-w-[80rem] gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr_1fr_1.3fr]">
          <div>
            <p className="font-display text-2xl font-extrabold text-white">Naik Foods</p>
            <p className="mt-4 text-sm leading-relaxed">
              Authentic flavors from <strong className="text-white">Vidarbha & Konkan</strong>,
              delivered with love.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <span
                  key={i}
                  className="flex size-10 items-center justify-center rounded-full border border-white/30"
                >
                  <Icon className="size-4" />
                </span>
              ))}
            </div>
            {/* Added in the prototype: FSSAI number is legally required on packaged food sales. */}
            <p className="mt-5 text-xs text-white/60">
              FSSAI Lic. No. 11522999000123 (placeholder)
            </p>
          </div>

          <nav className="flex flex-col gap-3 text-sm">
            {shopLinks.map((label) => (
              <Link
                key={label}
                to="/store"
                search={{ category: label }}
                className="hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-3 text-sm">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <Link to="/about" className="hover:text-white">
              About
            </Link>
            <Link to="/blog" className="hover:text-white">
              Blog
            </Link>
            <Link to="/store" className="hover:text-white">
              Store
            </Link>
            <Link to="/cart" className="hover:text-white">
              Cart
            </Link>
            <Link to="/orders" className="hover:text-white">
              Order History
            </Link>
            <Link to="/returns" className="inline-flex items-center gap-2 hover:text-white">
              <RotateCcw className="size-3.5" /> Returns &amp; Refunds
            </Link>
          </nav>

          <div className="rounded-3xl bg-white/10 p-6">
            <p className="font-display text-lg font-bold text-white">Visit Our Store</p>
            <p className="mt-4 flex gap-3 text-sm">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>
                Seva Mitra Mandal Chowk
                <br />
                Near Fadgate Police Chowki
                <br />
                Shukrawar Peth, Pune 411002
              </span>
            </p>
            <p className="mt-3 flex items-center gap-3 text-sm">
              <Phone className="size-4" /> +91 9730046247
            </p>
            <p className="mt-3 flex items-center gap-3 text-sm">
              <Clock className="size-4" /> 9 AM – 10 PM Daily
            </p>
            <a
              href="https://wa.me/919730046247"
              target="_blank"
              rel="noreferrer"
              className="mt-5 block rounded-xl border border-white/40 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-white"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="mx-auto flex max-w-[80rem] flex-col gap-3 px-6 py-5 text-xs md:flex-row md:items-center md:justify-between">
            <p>© 2026 Naik Foods · Prototype rebuild</p>
            <p className="flex gap-6">
              <Link to="/terms" className="hover:text-white">
                Terms &amp; Conditions
              </Link>
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
