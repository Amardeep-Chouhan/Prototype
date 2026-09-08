import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy | Naik Foods" }] }),
  component: () => <Legal title="Privacy Policy" />,
});
function Legal({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <p className="text-sm font-semibold text-primary">Naik Foods</p>
      <h1 className="mt-1 font-display text-4xl">{title}</h1>
      <div className="mt-8 space-y-5 rounded-2xl border bg-card p-7 text-sm leading-7 text-muted-foreground">
        <p>
          We collect information needed to provide account, delivery, support and order services. We
          aim to collect only what is necessary for the customer experience.
        </p>
        <p>
          Account information and order details are used to manage purchases, delivery updates and
          customer support. Newsletter subscriptions can be managed through the subscription flow.
        </p>
        <p>
          For a production launch, this page should be replaced with the business-approved privacy
          policy and retention/contact details.
        </p>
      </div>
    </div>
  );
}
