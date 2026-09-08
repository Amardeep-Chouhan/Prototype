import { createFileRoute } from "@tanstack/react-router";

import { ContactSection } from "@/components/site/ContactSection";

// Separate Contact page, like the live site. The form is shared from
// ContactSection and posts to the server with a ticket id in return.
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Naik Foods" },
      {
        name: "description",
        content:
          "Get in touch with Naik Foods — questions about orders, bulk gifting or our Pune store.",
      },
      { property: "og:title", content: "Contact Us — Naik Foods" },
      {
        property: "og:description",
        content:
          "Get in touch with Naik Foods — questions about orders, bulk gifting or our Pune store.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-[80rem] px-6 pb-16 pt-10">
      <ContactSection />
    </div>
  );
}
