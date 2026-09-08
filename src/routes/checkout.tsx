import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, CheckCircle2, LockKeyhole } from "lucide-react";
import { toast } from "sonner";

import { formatINR } from "@/data/products";
import { priceFor, useCart } from "@/lib/cart";
import {
  ADDRESSES_KEY,
  DEFAULT_PROFILE,
  ORDERS_KEY,
  PROFILE_KEY,
  createOrder,
  type Address,
  type Profile,
} from "@/lib/account";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout | Naik Foods" }] }),
  component: CheckoutPage,
});

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  line1: string;
  city: string;
  state: string;
  pincode: string;
};

const EMPTY_FORM: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  line1: "",
  city: "",
  state: "",
  pincode: "",
};

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function CheckoutPage() {
  const navigate = useNavigate();
  const { lines, subtotal, discount, deliveryFee, total } = useCart();
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [ready, setReady] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const profile = read<Profile>(PROFILE_KEY, DEFAULT_PROFILE);
    const addresses = read<Address[]>(ADDRESSES_KEY, []);
    const address = addresses.find((a) => a.isDefault) ?? addresses[0];
    setForm({
      firstName: profile.firstName === "Naik" ? "" : profile.firstName,
      lastName: profile.lastName === "Customer" ? "" : profile.lastName,
      email: profile.email === "customer@example.com" ? "" : profile.email,
      phone: profile.phone,
      line1: address?.line1 ?? "",
      city: address?.city ?? "",
      state: address?.state ?? "",
      pincode: address?.pincode ?? "",
    });
    setReady(true);
  }, []);

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-display text-3xl">Nothing to checkout</h1>
        <p className="mt-2 text-muted-foreground">Add a product before starting checkout.</p>
        <Link
          to="/store"
          className="mt-6 inline-block rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
        >
          Browse store
        </Link>
      </div>
    );
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!/^[A-Za-z][A-Za-z .'-]{1,39}$/.test(form.firstName.trim()))
      return setError("Enter a valid first name.");
    if (!/^[A-Za-z][A-Za-z .'-]{1,39}$/.test(form.lastName.trim()))
      return setError("Enter a valid last name.");
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return setError("Enter a valid email address.");
    if (!/^\d{10}$/.test(form.phone)) return setError("Phone number must be exactly 10 digits.");
    if (form.line1.trim().length < 5) return setError("Enter a complete delivery address.");
    if (form.city.trim().length < 2 || form.state.trim().length < 2)
      return setError("Enter a valid city and state.");
    if (!/^\d{6}$/.test(form.pincode)) return setError("Pincode must be exactly 6 digits.");

    const address: Address = {
      id: crypto.randomUUID(),
      label: "Checkout",
      line1: form.line1.trim(),
      city: form.city.trim(),
      state: form.state.trim(),
      pincode: form.pincode,
      isDefault: true,
    };
    const order = createOrder(lines, subtotal, discount, deliveryFee, address);
    const orders = read<ReturnType<typeof createOrder>[]>(ORDERS_KEY, []);
    const addresses = read<Address[]>(ADDRESSES_KEY, []);

    localStorage.setItem(ORDERS_KEY, JSON.stringify([order, ...orders]));
    localStorage.setItem(
      PROFILE_KEY,
      JSON.stringify({
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        phone: form.phone,
      }),
    );
    localStorage.setItem(
      ADDRESSES_KEY,
      JSON.stringify([address, ...addresses.filter((a) => a.line1 !== address.line1)]),
    );
    localStorage.removeItem("naik-prototype-cart");
    localStorage.removeItem("naik-prototype-promo");
    setDone(true);
    toast.success("Order placed successfully!");
    setTimeout(() => navigate({ to: "/orders/$orderId", params: { orderId: order.id } }), 500);
  };

  if (done) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <CheckCircle2 className="mx-auto size-16 text-primary" />
        <h1 className="mt-5 font-display text-4xl">Order placed!</h1>
        <p className="mt-2 text-muted-foreground">
          Your order has been saved to your account. Redirecting to order details…
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Link
        to="/cart"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
      >
        <ArrowLeft className="size-4" /> Back to cart
      </Link>
      <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
        <LockKeyhole className="size-4" /> Secure demo checkout · No real payment is processed
      </div>
      <div className="mt-7 grid gap-7 lg:grid-cols-[1fr_22rem]">
        <form onSubmit={submit} className="rounded-2xl border bg-card p-6">
          <h1 className="font-display text-3xl">Delivery details</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            We validate every field before creating an order.
          </p>
          {error && (
            <div
              role="alert"
              className="mt-5 rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"
            >
              {error}
            </div>
          )}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field
              label="First name"
              value={form.firstName}
              onChange={(v) => setForm({ ...form, firstName: v })}
            />
            <Field
              label="Last name"
              value={form.lastName}
              onChange={(v) => setForm({ ...form, lastName: v })}
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
            />
            <Field
              label="Phone"
              inputMode="numeric"
              maxLength={10}
              value={form.phone}
              onChange={(v) => setForm({ ...form, phone: v.replace(/\D/g, "").slice(0, 10) })}
            />
            <Field
              label="Address"
              value={form.line1}
              onChange={(v) => setForm({ ...form, line1: v })}
            />
            <Field label="City" value={form.city} onChange={(v) => setForm({ ...form, city: v })} />
            <Field
              label="State"
              value={form.state}
              onChange={(v) => setForm({ ...form, state: v })}
            />
            <Field
              label="Pincode"
              inputMode="numeric"
              maxLength={6}
              value={form.pincode}
              onChange={(v) => setForm({ ...form, pincode: v.replace(/\D/g, "").slice(0, 6) })}
            />
          </div>
          <button
            disabled={!ready}
            className="mt-7 w-full rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground disabled:opacity-50"
          >
            Place order · {formatINR(total)}
          </button>
        </form>
        <aside className="h-fit rounded-2xl border bg-card p-6">
          <h2 className="font-display text-xl">Order summary</h2>
          <div className="mt-4 space-y-3 text-sm">
            {lines.map((line) => (
              <div key={`${line.slug}-${line.weight}`} className="flex justify-between gap-4">
                <span>
                  {line.weight} × {line.qty}
                </span>
                <span>{formatINR(line.qty * priceFor(line.slug, line.weight))}</span>
              </div>
            ))}
            <div className="border-t pt-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatINR(subtotal)}</span>
              </div>
              <div className="mt-2 flex justify-between">
                <span>Discount</span>
                <span>{discount ? `−${formatINR(discount)}` : "—"}</span>
              </div>
              <div className="mt-2 flex justify-between">
                <span>Delivery</span>
                <span>{deliveryFee ? formatINR(deliveryFee) : "Free"}</span>
              </div>
              <div className="mt-3 flex justify-between text-base font-bold">
                <span>Total</span>
                <span>{formatINR(total)}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field(props: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  inputMode?: "numeric";
  maxLength?: number;
}) {
  return (
    <label className="grid gap-1.5 text-sm font-medium">
      <span>{props.label}</span>
      <input
        required
        type={props.type ?? "text"}
        inputMode={props.inputMode}
        maxLength={props.maxLength}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        className="rounded-xl border bg-background px-3 py-2.5 outline-none focus:border-primary"
      />
    </label>
  );
}
