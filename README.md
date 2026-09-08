# Naik Foods — Improvement Prototype

A working improvement prototype built for the BITS AND VOLTS Full Stack MERN intern task. It recreates the structure of `naikfoods.co.in` and turns the manually verified findings into a more complete, usable e-commerce experience.

## What's here

- **Home** — live-site-inspired hero, categories, product discovery, regional content, testimonials, articles and newsletter.
- **Site-wide search** — instant product search from the header on desktop and mobile.
- **Store** — category filters, price cap, sorting and a useful empty state.
- **Product page** — priced pack-size buttons, stock messaging, nutrition/ingredients, allergen/shelf-life information, reviews and wishlist.
- **Cart** — persistent cart, quantity/stock limits, tiered delivery fee, free-delivery progress, promo codes and consistent total calculation.
- **Wishlist** — dedicated wishlist page with persistent local storage and current catalog pricing.
- **Checkout** — working front-end checkout with field-level validation, safe error handling and an order confirmation flow. No real payment is processed.
- **Orders** — order history and order details/tracking stored locally so a customer can place an order and see it later in the demo.
- **Account** — editable profile and address management with validation, plus recent orders.
- **Legal pages** — working Privacy Policy and Terms routes instead of dead links. Production legal copy should be supplied by the business.
- **Journal** — working Blog listing and article detail routes with controlled featured-image placeholders.
- **Offline state** — a clear reconnect/retry banner while the already-loaded app is offline.
- **Fixed data** — products that displayed ₹0 on the live site have valid prices in this prototype.

## Important scope note

This is intentionally **backend-free** for the assessment prototype. Account, wishlist, cart, addresses, newsletter subscription and orders are persisted in the browser with `localStorage`, so the complete customer flow can be demonstrated without a database or payment gateway. A production version should move these records to authenticated API/database storage.

## Technologies

React 19, TanStack Start, TanStack Query, TypeScript, Tailwind CSS v4, Zod and Vite.

## Project structure

- `src/data/products.ts` — sample catalog modelled on the live listing.
- `src/lib/cart.tsx` — cart, wishlist and promo state with persistence and inventory guards.
- `src/lib/account.ts` — profile, address and order models/helpers.
- `src/lib/inventory.ts` — one stock-limit rule shared by product/cart interactions.
- `src/lib/catalog.functions.ts` — server-side search/filter/sort prototype function.
- `src/routes/checkout.tsx` — validated demo checkout and order creation.
- `src/routes/account.tsx` — profile and address management.
- `src/routes/orders.tsx` / `src/routes/orders.$orderId.tsx` — order history and details.

## Running it

```bash
npm install
npm run dev
```

The development server runs on port `8080`.

For production verification:

```bash
npm run build
npm run preview
```

## Demo flow

1. Open the Store.
2. Search/filter a product.
3. Add it to wishlist and refresh — it remains saved on the same browser.
4. Add it to cart and test quantity/stock limits.
5. Apply `NAIK10`, `FIRST50` or `DIWALI15` where eligible.
6. Proceed to Checkout and try invalid values — the flow is blocked with clear validation.
7. Enter valid details and place the demo order.
8. Open **Account → Order history** to see the order and its delivery timeline.
9. Edit the profile or add/remove a saved address.

## Promo codes

- `NAIK10` — 10% off
- `FIRST50` — ₹50 off orders above ₹299
- `DIWALI15` — 15% off orders above ₹999

## Assessment note

The implementation focuses on high-impact findings from the manual QA report: pricing integrity, cart consistency, stock rules, wishlist reliability, checkout validation/error handling, navigation/legal routes, newsletter feedback, account management and clearer product discovery.
