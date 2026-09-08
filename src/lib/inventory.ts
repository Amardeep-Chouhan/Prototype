// Front-end demo inventory. Keeping one rule for product and cart quantity controls
// prevents the inconsistent stock behavior found on the live site.
export function getStockLimit(slug: string) {
  if (slug === "beetroot-chips") return 4;
  if (slug === "ambadi-bhajiche-lonche") return 8;
  return 12;
}
