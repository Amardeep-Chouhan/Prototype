import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// Promo codes live on the server so the discount can't be edited in the browser.
const CODES: Record<
  string,
  { type: "percent" | "flat"; value: number; minSubtotal: number; note: string }
> = {
  NAIK10: { type: "percent", value: 10, minSubtotal: 0, note: "10% off your order" },
  FIRST50: { type: "flat", value: 50, minSubtotal: 299, note: "₹50 off orders above ₹299" },
  DIWALI15: { type: "percent", value: 15, minSubtotal: 999, note: "15% off orders above ₹999" },
};

export const applyPromo = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) =>
    z.object({ code: z.string().min(1), subtotal: z.number().min(0) }).parse(data),
  )
  .handler(async ({ data }) => {
    const code = data.code.trim().toUpperCase();
    const promo = CODES[code];
    if (!promo) return { ok: false as const, error: "That code isn't valid." };
    if (data.subtotal < promo.minSubtotal) {
      return { ok: false as const, error: `This code needs a subtotal of ₹${promo.minSubtotal}.` };
    }
    const discount =
      promo.type === "percent"
        ? Math.round((data.subtotal * promo.value) / 100)
        : Math.min(promo.value, data.subtotal);
    return { ok: true as const, code, discount, note: promo.note };
  });
