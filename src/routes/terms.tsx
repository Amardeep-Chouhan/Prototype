import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms & Conditions | Naik Foods" }] }),
  component: () => (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <p className="text-sm font-semibold text-primary">Naik Foods</p>
      <h1 className="mt-1 font-display text-4xl">Terms & Conditions</h1>
      <div className="mt-8 space-y-5 rounded-2xl border bg-card p-7 text-sm leading-7 text-muted-foreground">
        <p>
          Orders are subject to product availability, applicable delivery areas and the final order
          confirmation shown to the customer.
        </p>
        <p>
          Prices and promotions displayed in the shopping flow should be treated as the current
          offer for the prototype. A production deployment should replace this text with
          business-approved terms.
        </p>
        <p>For support, customers can use the Contact page to reach the Naik Foods team.</p>
      </div>
    </div>
  ),
});
