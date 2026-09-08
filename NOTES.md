# Notes on the analysis document (checked against the live site)

I re-checked every finding in the analysis against https://www.naikfoods.co.in/in before
building. Below is what held up, what didn't, and the UI decisions I made in the prototype.

## Confirmed — findings that are correct

| #   | Finding                                                               | Status                               |
| --- | --------------------------------------------------------------------- | ------------------------------------ |
| 3.1 | "Aaswad Mitha Paan" and "Shahi Mukhwas" both list at ₹0               | Confirmed on /store, page 1          |
| 3.3 | Variant selector reads "Select Default option / Default option value" | Confirmed on the Beetroot Chips page |
| 4.1 | No search field anywhere in the header or catalog                     | Confirmed sitewide                   |
| 4.2 | "Filters" label renders with no filter controls under it              | Confirmed on /store                  |
| 4.3 | No nutrition table, ingredient list, allergen info or FSSAI number    | Confirmed                            |
| 4.4 | "(56 Reviews)" shown with no review content anywhere on the page      | Confirmed                            |
| 4.5 | No wishlist control on product cards or detail pages                  | Confirmed                            |
| 4.6 | Cart gives no indication of the ₹999 free-delivery threshold          | Confirmed                            |
| 5.2 | Sort defaults to "Newest first"; no recently-viewed                   | Confirmed                            |
| 5.3 | Images requested at w=3840 for small thumbnails                       | Confirmed in the markup              |

## Corrections — two claims in the document are wrong

1. **3.2 "Featured Products renders empty on product pages" — not accurate.**
   The Beetroot Chips page renders three real products in that block (Cheeseling, Corn
   Chakali, Thepla Puri), not six empty slots. It was probably a slow image load when the
   screenshot was taken. **Suggested rewrite:** drop this as a P0 bug, and instead note that
   the block only shows same-category products with no "frequently bought together" logic.

2. **Section 7 "the Blog section shows no visible articles" — not accurate.**
   /blog has published, categorised posts (Healthy Snack, Fasting, Premixes, Recipes,
   Pickles) with author and date. **The real bug is next door:** the homepage's
   "Regular Articles" strip renders its heading and "Explore the Journal" button with no
   article cards, even though the posts exist. That's worth raising as a P0/P1 instead —
   it's a broken-looking block on the homepage and it wastes the SEO value of content
   that's already written.

## UI/UX changes I made in the prototype (beyond the listed fixes)

Each of these is either a confirmed bug or a defensible usability call — nothing cosmetic
for its own sake.

- **Variant selector → pack-size buttons with per-size prices.** A dropdown hides the price
  difference until after selection. Buttons show 100g ₹70 / 200g ₹126 side by side.
- **Free delivery is tiered instead of one flat wall.** ₹69 under ₹499, ₹39 from ₹499–998,
  free above ₹999. A single ₹999 threshold makes a ₹38 soup order feel pointless.
- **Sort defaults to "Best selling", not "Newest first".** Newest-first is a merchandising
  default that serves the store, not the shopper.
- **Empty search state says what to do next** ("try pickle, khakhra or masala") rather than
  showing a blank grid.
- **Horizontal scroll rows instead of an auto-rotating hero carousel.** Auto-rotation moves
  content out from under people who are still reading it; scrolling leaves them in control.
- **FSSAI licence number placed in the footer.** Placeholder number in the prototype — the
  real one needs to come from the business.
- **Live counts kept honest.** Category counts on the homepage use the real numbers from the
  live site (105 / 14 / 25 / 15 / 6 / 5 / 9 / 20).

## Scope

Built: P0 and P1 items plus the two P2 items (real reviews UI, cart progress bar).
Not built: P2 bundles / Subscribe & Save, and all of P3 — those stay as recommendations.
No product photography is used; this is a structural prototype, so all content is text.

## Visual fidelity

The prototype now follows the live site's own look: Manrope typography, the
#FAFAF8 page background, green rounded panels for the hero / offer / newsletter
blocks, the same header (logo, Home–About–Shop–Blogs–Contact, account, wishlist,
cart), the same section order (hero → categories → popular → best sellers →
offer → shop by region → promo trio → community → articles → newsletter → trust
bar → footer) and the same card proportions. Since the prototype uses no
photography, each image slot holds the item's name as text so the layout keeps
the real page's rhythm.

## Round 3 changes (arrows, promo, contact, feedback)

- **Arrow scrolling everywhere.** All the rows that scroll (highlights, categories,
  popular, best sellers, region, reviews, reels) now move with left/right arrow
  buttons, like the live site. Arrows grey out at each end.
- **Arrows no longer cut the text.** On the live site the big highlight tiles have
  arrows sitting mid-tile, straight over the headline. Here they sit in the
  bottom-right corner of the row, clear of all copy.
- **Promo code at checkout.** The cart takes a code and checks it on the server
  (NAIK10 = 10% off, FIRST50 = ₹50 off above ₹299, DIWALI15 = 15% above ₹999).
  Wrong codes get a clear message instead of silently doing nothing.
- **Image space kept empty on purpose.** Product pages and the reels strip keep a
  correctly sized, clearly-marked empty frame so spacing matches the real site
  without shipping photos.
- **Contact is its own page.** Like the live site, Contact lives at /contact, not on
  the homepage. The form is front-end only — it shows a thank-you message on screen
  without sending anything anywhere.
- **Add-to-cart feedback.** Live site gives no confirmation, so people click several
  times. Buttons now flip to "Added" with a tick, a toast appears, and the product
  page shows a "View cart" link.
