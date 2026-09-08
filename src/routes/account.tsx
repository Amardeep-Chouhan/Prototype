import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, MapPin, Package, Pencil, Plus, Trash2, UserRound } from "lucide-react";
import { toast } from "sonner";

import {
  ADDRESSES_KEY,
  DEFAULT_PROFILE,
  ORDERS_KEY,
  PROFILE_KEY,
  type Address,
  type Order,
  type Profile,
} from "@/lib/account";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "My Account | Naik Foods" }] }),
  component: AccountPage,
});

const emptyAddress = (): Omit<Address, "id" | "isDefault"> => ({
  label: "Home",
  line1: "",
  city: "",
  state: "",
  pincode: "",
});

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function save<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

function validateProfile(profile: Profile) {
  if (!/^[A-Za-z][A-Za-z .'-]{1,39}$/.test(profile.firstName.trim()))
    return "Enter a valid first name.";
  if (!/^[A-Za-z][A-Za-z .'-]{1,39}$/.test(profile.lastName.trim()))
    return "Enter a valid last name.";
  if (!/^\S+@\S+\.\S+$/.test(profile.email.trim())) return "Enter a valid email address.";
  if (profile.phone && !/^\d{10}$/.test(profile.phone)) return "Phone number must be 10 digits.";
  return "";
}

function validateAddress(address: Omit<Address, "id" | "isDefault">) {
  if (address.line1.trim().length < 5) return "Enter a complete delivery address.";
  if (address.city.trim().length < 2) return "Enter a valid city.";
  if (address.state.trim().length < 2) return "Enter a valid state.";
  if (!/^\d{6}$/.test(address.pincode)) return "Pincode must be exactly 6 digits.";
  return "";
}

function AccountPage() {
  const [profile, setProfile] = useState<Profile>(DEFAULT_PROFILE);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(profile);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addressDraft, setAddressDraft] = useState(emptyAddress());
  const [editingAddressId, setEditingAddressId] = useState<string | null>(null);

  useEffect(() => {
    const p = read(PROFILE_KEY, DEFAULT_PROFILE);
    setProfile(p);
    setDraft(p);
    setAddresses(read(ADDRESSES_KEY, []));
    setOrders(read(ORDERS_KEY, []));
  }, []);

  const saveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateProfile(draft);
    if (error) return toast.error(error);
    save(PROFILE_KEY, draft);
    setProfile(draft);
    setEditing(false);
    toast.success("Profile updated successfully.");
  };

  const saveAddress = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateAddress(addressDraft);
    if (error) return toast.error(error);
    const next: Address = {
      ...addressDraft,
      id: editingAddressId ?? crypto.randomUUID(),
      isDefault: editingAddressId
        ? (addresses.find((a) => a.id === editingAddressId)?.isDefault ?? false)
        : addresses.length === 0,
    };
    const updated = editingAddressId
      ? addresses.map((a) => (a.id === editingAddressId ? next : a))
      : [...addresses, next];
    setAddresses(updated);
    save(ADDRESSES_KEY, updated);
    setAddressDraft(emptyAddress());
    setEditingAddressId(null);
    setShowAddressForm(false);
    toast.success(editingAddressId ? "Address updated." : "Address saved.");
  };

  const editAddress = (address: Address) => {
    setAddressDraft({
      label: address.label,
      line1: address.line1,
      city: address.city,
      state: address.state,
      pincode: address.pincode,
    });
    setEditingAddressId(address.id);
    setShowAddressForm(true);
  };

  const setDefault = (id: string) => {
    const updated = addresses.map((a) => ({ ...a, isDefault: a.id === id }));
    setAddresses(updated);
    save(ADDRESSES_KEY, updated);
  };

  const removeAddress = (id: string) => {
    const remaining = addresses.filter((a) => a.id !== id);
    if (remaining.length && !remaining.some((a) => a.isDefault)) {
      const first = remaining[0];
      if (first) remaining[0] = { ...first, isDefault: true };
    }
    setAddresses(remaining);
    save(ADDRESSES_KEY, remaining);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-primary">My account</p>
          <h1 className="mt-1 font-display text-4xl">Welcome, {profile.firstName}</h1>
          <p className="mt-2 text-muted-foreground">
            Manage your profile, addresses and Naik Foods orders.
          </p>
        </div>
        <Link
          to="/orders"
          className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold hover:bg-secondary"
        >
          <Package className="size-4" /> Order history
        </Link>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <section className="rounded-2xl border bg-card p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <UserRound className="size-5 text-primary" />
              <h2 className="font-display text-xl">Profile</h2>
            </div>
            {!editing && (
              <button
                onClick={() => {
                  setDraft(profile);
                  setEditing(true);
                }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                <Pencil className="size-4" /> Edit
              </button>
            )}
          </div>
          {editing ? (
            <form onSubmit={saveProfile} className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field
                label="First name"
                value={draft.firstName}
                onChange={(v) => setDraft({ ...draft, firstName: v })}
                pattern="[A-Za-z .'-]+"
              />
              <Field
                label="Last name"
                value={draft.lastName}
                onChange={(v) => setDraft({ ...draft, lastName: v })}
              />
              <Field
                label="Email"
                type="email"
                value={draft.email}
                onChange={(v) => setDraft({ ...draft, email: v })}
              />
              <Field
                label="Phone"
                inputMode="numeric"
                maxLength={10}
                value={draft.phone}
                onChange={(v) => setDraft({ ...draft, phone: v.replace(/\D/g, "").slice(0, 10) })}
                placeholder="10-digit mobile number"
              />
              <div className="flex gap-2 sm:col-span-2">
                <button className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
                  Save changes
                </button>
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="rounded-xl border px-5 py-2.5 text-sm font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <dl className="mt-5 grid gap-4 sm:grid-cols-2 text-sm">
              <Info label="Name" value={`${profile.firstName} ${profile.lastName}`} />
              <Info label="Email" value={profile.email} />
              <Info label="Phone" value={profile.phone || "Not added"} />
              <Info label="Orders" value={`${orders.length}`} />
            </dl>
          )}
        </section>

        <section className="rounded-2xl border bg-card p-6">
          <div className="flex items-center gap-3">
            <Package className="size-5 text-primary" />
            <h2 className="font-display text-xl">Recent orders</h2>
          </div>
          {orders.length === 0 ? (
            <EmptyOrders compact />
          ) : (
            <div className="mt-4 space-y-3">
              {orders.slice(0, 3).map((o) => (
                <OrderMini key={o.id} order={o} />
              ))}
            </div>
          )}
        </section>
      </div>

      <section className="mt-6 rounded-2xl border bg-card p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <MapPin className="size-5 text-primary" />
            <h2 className="font-display text-xl">Saved addresses</h2>
          </div>
          <button
            onClick={() => {
              setShowAddressForm(!showAddressForm);
              if (showAddressForm) {
                setEditingAddressId(null);
                setAddressDraft(emptyAddress());
              }
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <Plus className="size-4" />{" "}
            {showAddressForm && !editingAddressId ? "Close" : "Add address"}
          </button>
        </div>
        {showAddressForm && (
          <form
            onSubmit={saveAddress}
            className="mt-5 grid gap-4 rounded-xl bg-secondary/50 p-4 sm:grid-cols-2"
          >
            <Field
              label="Label"
              value={addressDraft.label}
              onChange={(v) => setAddressDraft({ ...addressDraft, label: v })}
            />
            <Field
              label="Address"
              value={addressDraft.line1}
              onChange={(v) => setAddressDraft({ ...addressDraft, line1: v })}
            />
            <Field
              label="City"
              value={addressDraft.city}
              onChange={(v) => setAddressDraft({ ...addressDraft, city: v })}
            />
            <Field
              label="State"
              value={addressDraft.state}
              onChange={(v) => setAddressDraft({ ...addressDraft, state: v })}
            />
            <Field
              label="Pincode"
              inputMode="numeric"
              maxLength={6}
              value={addressDraft.pincode}
              onChange={(v) =>
                setAddressDraft({ ...addressDraft, pincode: v.replace(/\D/g, "").slice(0, 6) })
              }
            />
            <div className="flex items-end gap-2">
              <button className="flex-1 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                {editingAddressId ? "Update address" : "Save address"}
              </button>
              {editingAddressId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingAddressId(null);
                    setAddressDraft(emptyAddress());
                    setShowAddressForm(false);
                  }}
                  className="rounded-xl border px-4 py-2.5 text-sm font-semibold"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        )}
        {addresses.length === 0 ? (
          <p className="mt-6 rounded-xl border border-dashed p-6 text-center text-sm text-muted-foreground">
            No saved addresses yet. Add one to make checkout faster.
          </p>
        ) : (
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {addresses.map((a) => (
              <div key={a.id} className="rounded-xl border p-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{a.label}</span>
                  {a.isDefault && (
                    <span className="rounded-full bg-secondary px-2 py-1 text-xs font-semibold text-primary">
                      Default
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {a.line1}
                  <br />
                  {a.city}, {a.state} — {a.pincode}
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold">
                  {!a.isDefault && (
                    <button onClick={() => setDefault(a.id)} className="text-primary">
                      Set default
                    </button>
                  )}
                  <button onClick={() => editAddress(a)} className="text-primary">
                    Edit
                  </button>
                  <button
                    onClick={() => removeAddress(a.id)}
                    className="inline-flex items-center gap-1 text-destructive"
                  >
                    <Trash2 className="size-3" /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function Field(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  inputMode?: "numeric";
  maxLength?: number;
  placeholder?: string;
  pattern?: string;
}) {
  return (
    <label className="grid gap-1.5 text-sm font-medium">
      <span>{props.label}</span>
      <input
        required={props.label !== "Phone"}
        type={props.type ?? "text"}
        inputMode={props.inputMode}
        maxLength={props.maxLength}
        pattern={props.pattern}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        className="rounded-xl border bg-background px-3 py-2.5 outline-none focus:border-primary"
      />
    </label>
  );
}
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="mt-1 font-semibold">{value}</dd>
    </div>
  );
}
function OrderMini({ order }: { order: Order }) {
  return (
    <Link
      to="/orders/$orderId"
      params={{ orderId: order.id }}
      className="block rounded-xl border p-4 hover:bg-secondary"
    >
      <div className="flex justify-between gap-3 text-sm">
        <span className="font-semibold">{order.id}</span>
        <span className="text-primary">{order.status}</span>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        {new Date(order.createdAt).toLocaleDateString("en-IN")} · {order.items.length} item(s)
      </p>
      <p className="mt-2 font-semibold">₹{order.total.toLocaleString("en-IN")}</p>
    </Link>
  );
}
function EmptyOrders({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`${compact ? "mt-4" : "mt-8"} rounded-xl border border-dashed p-6 text-center`}>
      <Package className="mx-auto size-8 text-muted-foreground" />
      <p className="mt-2 text-sm font-semibold">No orders yet</p>
      <p className="mt-1 text-xs text-muted-foreground">
        Your completed checkout orders will appear here.
      </p>
      {!compact && (
        <Link
          to="/store"
          className="mt-4 inline-block rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Start shopping
        </Link>
      )}
    </div>
  );
}
