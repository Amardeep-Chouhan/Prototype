import { PRODUCTS, type Product } from "@/data/products";
import { priceFor } from "@/lib/cart";

export type CartLine = { slug: string; weight: string; qty: number };

export type Profile = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type Address = {
  id: string;
  label: string;
  line1: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
};

export type OrderStatus = "Placed" | "Confirmed" | "Packed" | "Shipped" | "Delivered";

export type Order = {
  id: string;
  createdAt: string;
  items: Array<CartLine & { name: string; unitPrice: number }>;
  subtotal: number;
  discount: number;
  delivery: number;
  total: number;
  status: OrderStatus;
  paymentStatus: "Demo payment" | "Pending";
  address: Address;
};

export const PROFILE_KEY = "naik-profile";
export const ADDRESSES_KEY = "naik-addresses";
export const ORDERS_KEY = "naik-orders";
export const NEWSLETTER_KEY = "naik-newsletter";

export const DEFAULT_PROFILE: Profile = {
  firstName: "Naik",
  lastName: "Customer",
  email: "customer@example.com",
  phone: "",
};

export const DEFAULT_ADDRESSES: Address[] = [];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getCartItems(lines: CartLine[]) {
  return lines.flatMap((line) => {
    const product = getProduct(line.slug);
    if (!product) return [];
    return [{ ...line, name: product.name, unitPrice: priceFor(line.slug, line.weight) }];
  });
}

export function createOrder(
  lines: CartLine[],
  subtotal: number,
  discount: number,
  delivery: number,
  address: Address,
): Order {
  const id = `NF-${Date.now().toString().slice(-8)}`;
  return {
    id,
    createdAt: new Date().toISOString(),
    items: getCartItems(lines),
    subtotal,
    discount,
    delivery,
    total: Math.max(0, subtotal - discount + delivery),
    status: "Placed",
    paymentStatus: "Demo payment",
    address,
  };
}
