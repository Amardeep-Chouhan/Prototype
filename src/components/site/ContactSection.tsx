import { useState } from "react";

// Purely for show: nothing leaves the browser. The form just confirms the
// message on screen, like a working contact page would.
export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const set =
    (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="grid gap-8 rounded-3xl border bg-card p-8 md:grid-cols-2 md:p-12">
      <div>
        <h2 className="font-display text-[28px] font-extrabold md:text-[33px]">Contact Us</h2>
        <p className="mt-2 text-[15px] text-muted-foreground">
          Questions about an order, bulk gifting or store timings? Send us a message and we reply
          within one working day.
        </p>
        <dl className="mt-6 space-y-3 text-sm">
          <div>
            <dt className="font-semibold">Store</dt>
            <dd className="text-muted-foreground">Shukrawar Peth, Pune 411002</dd>
          </div>
          <div>
            <dt className="font-semibold">Phone</dt>
            <dd className="text-muted-foreground">+91 9730046247 · 9 AM – 10 PM daily</dd>
          </div>
        </dl>
      </div>

      <form onSubmit={onSubmit} className="space-y-3">
        <div>
          <label htmlFor="c-name" className="text-sm font-medium">
            Your name
          </label>
          <input
            id="c-name"
            required
            value={form.name}
            onChange={set("name")}
            className="mt-1.5 w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="c-email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="c-email"
            type="email"
            required
            value={form.email}
            onChange={set("email")}
            className="mt-1.5 w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="c-message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="c-message"
            required
            rows={4}
            value={form.message}
            onChange={set("message")}
            className="mt-1.5 w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Send message
        </button>
        {sent && (
          <p className="text-sm text-primary">
            Thanks — we've got your message and will reply within one working day.
          </p>
        )}
      </form>
    </section>
  );
}
