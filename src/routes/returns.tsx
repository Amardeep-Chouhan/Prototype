import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Clock3, HelpCircle, PackageCheck, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/returns")({
  head: () => ({ meta: [{ title: "Returns & Refunds | Naik Foods" }] }),
  component: ReturnsPage,
});

const policy = [
  {
    title: "7-day return window",
    body: "For eligible packaged products, request a return within 7 days of delivery.",
  },
  {
    title: "Damaged or wrong item",
    body: "Report damaged, missing or incorrect products as soon as possible so support can help resolve the issue.",
  },
  {
    title: "Refund after inspection",
    body: "Eligible refunds are shown against the original order after the return request is reviewed.",
  },
];

function ReturnsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="overflow-hidden rounded-[2rem] bg-brand-dark px-6 py-10 text-white md:px-10 md:py-14">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">Customer care</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight md:text-5xl">
          Returns & refunds, made simple.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 md:text-base">
          A clear policy helps customers order with confidence. Here is the prototype policy flow
          for Naik Foods.
        </p>
      </div>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {policy.map((item) => (
          <article key={item.title} className="rounded-2xl border bg-card p-6">
            <CheckCircle2 className="size-6 text-primary" />
            <h2 className="mt-4 font-display text-xl font-bold">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
          </article>
        ))}
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_20rem]">
        <section className="rounded-2xl border bg-card p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold">How it works</h2>
          <div className="mt-6 space-y-6">
            {[
              [
                PackageCheck,
                "Open your order",
                "Go to Order History and open the order that needs attention.",
              ],
              [
                Clock3,
                "Check eligibility",
                "The product should be eligible and within the return window. Perishable or opened food may be excluded.",
              ],
              [
                ShieldCheck,
                "Contact support",
                "Share the order number and issue. Support can arrange the next step and refund/replacement where applicable.",
              ],
            ].map(([Icon, title, body]) => {
              const StepIcon = Icon as typeof PackageCheck;
              return (
                <div key={title as string} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <StepIcon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{title as string}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{body as string}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl bg-secondary p-5">
            <h3 className="font-semibold">Usually not eligible</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Opened food products, products damaged after delivery, and items outside the return
              window may not qualify. Final policy should be replaced with the business-approved
              rules before production launch.
            </p>
          </div>
        </section>

        <aside className="h-fit rounded-2xl border bg-card p-6">
          <HelpCircle className="size-6 text-primary" />
          <h2 className="mt-4 font-display text-xl font-bold">Need help?</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Keep your order number ready and our support flow can help you resolve an issue faster.
          </p>
          <Link
            to="/contact"
            className="mt-5 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-bold text-primary-foreground"
          >
            Contact support
          </Link>
          <Link
            to="/orders"
            className="mt-3 block rounded-xl border px-4 py-3 text-center text-sm font-semibold"
          >
            View my orders
          </Link>
        </aside>
      </div>
    </div>
  );
}
