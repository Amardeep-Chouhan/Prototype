import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Clock3, Package, RotateCcw, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { formatINR } from "@/data/products";
import { useCart } from "@/lib/cart";
import type { Order } from "@/lib/account";
import { ORDERS_KEY } from "@/lib/account";

export const Route = createFileRoute("/orders/$orderId")({
  head: () => ({ meta: [{ title: "Order Details | Naik Foods" }] }),
  component: OrderDetailsPage,
});

const statuses = ["Placed", "Confirmed", "Packed", "Shipped", "Delivered"] as const;

function OrderDetailsPage() {
  const { orderId } = Route.useParams();
  const { add } = useCart();
  const [order, setOrder] = useState<Order | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    try {
      const orders = JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]") as Order[];
      setOrder(orders.find((item) => item.id === orderId) ?? null);
    } catch {
      setOrder(null);
    }
    setLoaded(true);
  }, [orderId]);
  if (!loaded)
    return (
      <div className="mx-auto max-w-5xl px-4 py-20 text-center text-sm text-muted-foreground">
        Loading order…
      </div>
    );
  if (!order)
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <Package className="mx-auto size-12 text-muted-foreground" />
        <h1 className="mt-4 font-display text-3xl font-bold">Order not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          This order may have been cleared from this demo browser.
        </p>
        <Link
          to="/orders"
          className="mt-6 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
        >
          Back to orders
        </Link>
      </div>
    );

  const active = statuses.indexOf(order.status);
  const buyAgain = () => {
    let added = 0;
    order.items.forEach((item) => {
      for (let i = 0; i < item.qty; i++) {
        if (add(item.slug, item.weight).ok) added += 1;
      }
    });
    toast.success(
      added
        ? `${added} item${added === 1 ? "" : "s"} added to cart`
        : "Some items could not be added",
      { description: "Stock limits are checked before adding." },
    );
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Link to="/orders" className="inline-flex items-center gap-2 text-sm font-bold text-primary">
        <ArrowLeft className="size-4" /> Back to order history
      </Link>
      <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Order details</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold">{order.id}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Placed{" "}
            {new Date(order.createdAt).toLocaleString("en-IN", {
              dateStyle: "long",
              timeStyle: "short",
            })}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/returns"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold"
          >
            <RotateCcw className="size-4" /> Returns policy
          </Link>
          <button
            onClick={buyAgain}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground"
          >
            <ShoppingBag className="size-4" /> Buy again
          </button>
        </div>
      </div>

      <section className="mt-8 rounded-2xl border bg-card p-6 md:p-8">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl font-bold">Delivery progress</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Your order moves through these stages.
            </p>
          </div>
          <Clock3 className="size-5 text-primary" />
        </div>
        <div className="mt-8 grid grid-cols-5 gap-2">
          {statuses.map((status, i) => (
            <div key={status} className="relative text-center text-xs">
              {i < statuses.length - 1 && (
                <span
                  className={`absolute left-1/2 top-4 hidden h-0.5 w-full -z-0 sm:block ${i < active ? "bg-primary" : "bg-border"}`}
                />
              )}
              <div
                className={`relative z-10 mx-auto flex size-9 items-center justify-center rounded-full border-2 ${i <= active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-secondary text-muted-foreground"}`}
              >
                {i <= active ? <Check className="size-4" /> : i + 1}
              </div>
              <p className="mt-2 font-semibold">{status}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_22rem]">
        <section className="rounded-2xl border bg-card p-6 md:p-8">
          <div className="flex items-center gap-2">
            <Package className="size-5 text-primary" />
            <h2 className="font-display text-2xl font-bold">Products in this order</h2>
          </div>
          <div className="mt-5 divide-y">
            {order.items.map((item) => (
              <div
                key={`${item.slug}-${item.weight}`}
                className="flex flex-wrap items-center justify-between gap-4 py-5"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Pack size: {item.weight} · Quantity: {item.qty}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Unit price {formatINR(item.unitPrice)}
                  </p>
                </div>
                <p className="font-display text-lg font-extrabold">
                  {formatINR(item.unitPrice * item.qty)}
                </p>
              </div>
            ))}
          </div>
        </section>
        <aside className="h-fit space-y-6">
          <section className="rounded-2xl border bg-card p-6">
            <h2 className="font-display text-xl font-bold">Payment summary</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatINR(order.subtotal)}</span>
              </div>
              {order.discount > 0 && (
                <div className="flex justify-between text-primary">
                  <span>Discount</span>
                  <span>−{formatINR(order.discount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery</span>
                <span>{order.delivery ? formatINR(order.delivery) : "Free"}</span>
              </div>
              <div className="flex justify-between border-t pt-3 font-display text-lg font-extrabold">
                <span>Total</span>
                <span>{formatINR(order.total)}</span>
              </div>
            </div>
            <p className="mt-4 rounded-xl bg-secondary p-3 text-xs font-semibold text-muted-foreground">
              Payment status: {order.paymentStatus}
            </p>
          </section>
          <section className="rounded-2xl border bg-card p-6">
            <h2 className="font-display text-xl font-bold">Delivered to</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {order.address.label}
              <br />
              {order.address.line1}
              <br />
              {order.address.city}, {order.address.state} — {order.address.pincode}
            </p>
          </section>
          <section className="rounded-2xl border bg-secondary p-6">
            <h2 className="font-display text-xl font-bold">Need help?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              For a damaged, missing or incorrect item, keep this order number ready.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground"
            >
              Contact support
            </Link>
          </section>
        </aside>
      </div>
    </div>
  );
}
