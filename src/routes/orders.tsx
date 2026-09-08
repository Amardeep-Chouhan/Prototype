import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { ArrowRight, Package, ShoppingBag } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { Order } from "@/lib/account";
import { ORDERS_KEY } from "@/lib/account";
import { formatINR, PRODUCTS } from "@/data/products";

export const Route = createFileRoute("/orders")({
  head: () => ({ meta: [{ title: "Order History | Naik Foods" }] }),
  component: OrdersPage,
});

function OrdersPage() {
  const location = useLocation();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    try {
      setOrders(JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]"));
    } catch {
      setOrders([]);
    }
  }, []);

  const totalItems = useMemo(
    () => orders.reduce((sum, order) => sum + order.items.reduce((n, item) => n + item.qty, 0), 0),
    [orders],
  );

  if (location.pathname.startsWith("/orders/") && location.pathname !== "/orders") {
    return <Outlet />;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-[2rem] bg-secondary px-6 py-8 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">My account</p>
            <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight">
              Order history
            </h1>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Every purchase, item and delivery update in one place.
            </p>
          </div>
          <Link
            to="/store"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground"
          >
            <ShoppingBag className="size-4" /> Continue shopping
          </Link>
        </div>
        {orders.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold">
            <span className="rounded-full bg-card px-3 py-2">
              {orders.length} order{orders.length === 1 ? "" : "s"}
            </span>
            <span className="rounded-full bg-card px-3 py-2">{totalItems} items purchased</span>
          </div>
        )}
      </div>

      {orders.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed bg-card p-12 text-center">
          <Package className="mx-auto size-12 text-muted-foreground" />
          <h2 className="mt-4 font-display text-2xl font-bold">No orders yet</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Your order history is empty. Once you complete checkout, your order number, products,
            quantities and delivery status will appear here.
          </p>
          <Link
            to="/store"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
          >
            Explore the store <ArrowRight className="size-4" />
          </Link>
        </div>
      ) : (
        <div className="mt-8 space-y-5">
          {orders.map((order) => {
            const quantity = order.items.reduce((n, item) => n + item.qty, 0);
            const preview = order.items.slice(0, 3);

            return (
              <div
                key={order.id}
                className="group rounded-2xl border bg-card p-5 transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-lg font-bold">{order.id}</span>
                      <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-bold text-primary">
                        {order.status}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Placed{" "}
                      {new Date(order.createdAt).toLocaleString("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-lg font-extrabold">{formatINR(order.total)}</p>
                    <p className="text-xs text-muted-foreground">
                      {quantity} total item{quantity === 1 ? "" : "s"}
                    </p>
                  </div>
                </div>
                <div className="mt-5 border-t pt-4">
                  <div className="flex flex-wrap gap-2">
                    {preview.map((item) => {
                      const product = PRODUCTS.find((p) => p.slug === item.slug);
                      return (
                        <span
                          key={`${item.slug}-${item.weight}`}
                          className="rounded-xl border bg-background px-3 py-2 text-xs font-semibold"
                        >
                          {product?.name ?? item.name}{" "}
                          <span className="text-muted-foreground">× {item.qty}</span>
                        </span>
                      );
                    })}
                    {order.items.length > 3 && (
                      <span className="rounded-xl bg-secondary px-3 py-2 text-xs font-semibold">
                        +{order.items.length - 3} more
                      </span>
                    )}
                  </div>
                  <Link
                    to="/orders/$orderId"
                    params={{ orderId: order.id }}
                    className="mt-4 inline-flex items-center gap-1 rounded-sm text-sm font-bold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    View products & order details
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
