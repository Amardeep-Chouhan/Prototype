import { r as __toESM } from "../_runtime.mjs";
import { i as require_react, n as QueryClientProvider, r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useNavigate, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Clock, S as Facebook, _ as MapPin, b as Instagram, f as Phone, g as MessageCircle, l as Search, s as ShoppingBag, t as User, u as RotateCcw, x as Heart } from "../_libs/lucide-react.mjs";
import { r as formatINR } from "./products-CNjfagVT.mjs";
import { i as useCart, t as CartProvider } from "./cart-D0T8jWYC.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as Route$1$1, t as Route$12 } from "./blog._slug-Cs1nhUC-.mjs";
import { n as useServerFn } from "./createSsrRpc-DKHY0c2A.mjs";
import { t as Route$13 } from "./orders._orderId-BR1jxgU7.mjs";
import { t as Route$14 } from "./products._slug-KsM9-Fpy.mjs";
import { n as searchProducts, t as Route$15 } from "./store-BtYPS2O4.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-ViSrNOvR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-RpPQB6BP.css";
var NAV = [
	{
		label: "Home",
		href: "/"
	},
	{
		label: "About",
		href: "/about"
	},
	{
		label: "Shop",
		href: "/store"
	},
	{
		label: "Blogs",
		href: "/blog"
	},
	{
		label: "Contact",
		href: "/contact"
	}
];
function SearchBox() {
	const navigate = useNavigate();
	const search = useServerFn(searchProducts);
	const [term, setTerm] = (0, import_react.useState)("");
	const [debounced, setDebounced] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const boxRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const id = setTimeout(() => setDebounced(term.trim()), 200);
		return () => clearTimeout(id);
	}, [term]);
	(0, import_react.useEffect)(() => {
		const onClick = (e) => {
			if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false);
		};
		document.addEventListener("mousedown", onClick);
		return () => document.removeEventListener("mousedown", onClick);
	}, []);
	const { data, isFetching } = useQuery({
		queryKey: ["search", debounced],
		queryFn: () => search({ data: {
			q: debounced,
			categories: [],
			maxPrice: 9999,
			limit: 6
		} }),
		enabled: debounced.length > 1
	});
	const results = data?.products ?? [];
	const showPanel = open && debounced.length > 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: boxRef,
		className: "relative w-full max-w-xs",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				setOpen(false);
				navigate({
					to: "/store",
					search: { q: term.trim() }
				});
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "site-search",
					className: "sr-only",
					children: "Search products"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "site-search",
					value: term,
					onChange: (e) => {
						setTerm(e.target.value);
						setOpen(true);
					},
					onFocus: () => setOpen(true),
					placeholder: "Search chakali, pickle, masala…",
					className: "w-full rounded-full border bg-secondary/60 py-2.5 pl-10 pr-3 text-sm outline-none transition-colors focus:border-primary focus:bg-card"
				})
			]
		}), showPanel && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute left-0 right-0 top-12 z-50 overflow-hidden rounded-2xl border bg-popover shadow-xl",
			children: [
				isFetching && results.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-4 py-3 text-sm text-muted-foreground",
					children: "Searching…"
				}),
				!isFetching && results.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "px-4 py-3 text-sm text-muted-foreground",
					children: [
						"Nothing matches “",
						debounced,
						"”. Try “pickle”, “khakhra” or “masala”."
					]
				}),
				results.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/products/$slug",
					params: { slug: p.slug },
					onClick: () => setOpen(false),
					className: "flex items-center justify-between gap-4 border-b px-4 py-2.5 text-sm last:border-b-0 hover:bg-secondary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-semibold",
						children: p.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs text-muted-foreground",
						children: p.category
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 font-semibold",
						children: formatINR(p.price)
					})]
				}, p.slug))
			]
		})]
	});
}
function IconButton({ children, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-label": label,
		className: "flex size-10 items-center justify-center rounded-full bg-secondary text-foreground/70",
		children
	});
}
function Header() {
	const { count, wishlist } = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b bg-card/95 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[80rem] flex-wrap items-center gap-x-8 gap-y-3 px-6 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "leading-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-2xl font-extrabold tracking-tight text-accent",
						children: "Naik"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-lg font-bold leading-none text-primary",
						children: "Foods"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "order-3 hidden items-center gap-8 text-[15px] font-medium md:order-none md:flex",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "transition-colors hover:text-primary",
						children: item.label
					}, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "order-4 ml-auto flex items-center gap-3 md:order-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden lg:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBox, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/account",
							"aria-label": "Account",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
								label: "Account",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4" })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/wishlist",
							"aria-label": "Wishlist",
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
								label: "Wishlist",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground",
								children: wishlist.length
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/cart",
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
								label: "Cart",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground",
								children: count
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "order-5 w-full lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBox, {})
				})
			]
		})
	});
}
var promises = [
	{
		title: "Free Delivery",
		note: "Minimum order ₹999"
	},
	{
		title: "24/7 Support",
		note: "Contact us 24 Hours"
	},
	{
		title: "Secure Pay",
		note: "100% Secure Payment"
	},
	{
		title: "Easy Returns",
		note: "7-day return window"
	}
];
var shopLinks = [
	"Snacks and Namkeen",
	"Pickles & Condiments",
	"Sweets & Bakery",
	"Dairy & Beverages",
	"Mukhvas & Digestives"
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto mt-16 w-full max-w-[80rem] px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-6 rounded-3xl border bg-card px-8 py-7 md:grid-cols-4",
			children: promises.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold",
				children: p.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: p.note
			})] }, p.title))
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-14 bg-brand-dark text-white/85",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[80rem] gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr_1fr_1.3fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-extrabold text-white",
						children: "Naik Foods"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm leading-relaxed",
						children: [
							"Authentic flavors from ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-white",
								children: "Vidarbha & Konkan"
							}),
							", delivered with love."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex gap-3",
						children: [
							Instagram,
							Facebook,
							MessageCircle
						].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-10 items-center justify-center rounded-full border border-white/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-xs text-white/60",
						children: "FSSAI Lic. No. 11522999000123 (placeholder)"
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col gap-3 text-sm",
					children: shopLinks.map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/store",
						search: { category: label },
						className: "hover:text-white",
						children: label
					}, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-white",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-white",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog",
							className: "hover:text-white",
							children: "Blog"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/store",
							className: "hover:text-white",
							children: "Store"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/cart",
							className: "hover:text-white",
							children: "Cart"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/orders",
							className: "hover:text-white",
							children: "Order History"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/returns",
							className: "inline-flex items-center gap-2 hover:text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), " Returns & Refunds"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-white/10 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-bold text-white",
							children: "Visit Our Store"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 flex gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Seva Mitra Mandal Chowk",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Near Fadgate Police Chowki",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Shukrawar Peth, Pune 411002"
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 flex items-center gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), " +91 9730046247"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 flex items-center gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" }), " 9 AM – 10 PM Daily"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://wa.me/919730046247",
							target: "_blank",
							rel: "noreferrer",
							className: "mt-5 block rounded-xl border border-white/40 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-white",
							children: "Get Directions"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[80rem] flex-col gap-3 px-6 py-5 text-xs md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Naik Foods · Prototype rebuild" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms",
						className: "hover:text-white",
						children: "Terms & Conditions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "hover:text-white",
						children: "Privacy Policy"
					})]
				})]
			})
		})]
	})] });
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Naik Foods | Authentic Maharashtrian Delicacies & Masalas" },
			{
				name: "description",
				content: "Authentic Maharashtrian snacks, pickles, sweets and masalas from Pune, delivered across India."
			},
			{
				property: "og:title",
				content: "Naik Foods | Authentic Maharashtrian Delicacies"
			},
			{
				property: "og:description",
				content: "Authentic Maharashtrian snacks, pickles, sweets and masalas from Pune."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function OfflineBanner() {
	const [offline, setOffline] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const sync = () => setOffline(!navigator.onLine);
		sync();
		window.addEventListener("online", sync);
		window.addEventListener("offline", sync);
		return () => {
			window.removeEventListener("online", sync);
			window.removeEventListener("offline", sync);
		};
	}, []);
	if (!offline) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "status",
		className: "sticky top-0 z-50 flex items-center justify-center gap-2 bg-brand-dark px-4 py-2 text-center text-xs font-semibold text-white",
		children: ["You're offline. Your cart and wishlist are saved on this device. Reconnect to load fresh catalog data.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => window.location.reload(),
			className: "underline underline-offset-2",
			children: "Try again"
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfflineBanner, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "bottom-right" })] })
	});
}
var $$splitComponentImporter$10 = () => import("./routes-pMbQwjhh.mjs");
var Route$10 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Naik Foods | Authentic Maharashtrian Snacks, Pickles & Masalas" },
		{
			name: "description",
			content: "Authentic Maharashtrian snacks, pickles, sweets and masalas from Pune, delivered across India."
		},
		{
			property: "og:title",
			content: "Naik Foods | Authentic Maharashtrian Delicacies"
		},
		{
			property: "og:description",
			content: "Hand-pounded masalas, sun-cured pickles and small-batch snacks from Vidarbha and Konkan."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./about-BzIlgIID.mjs");
var Route$9 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About Naik Foods | Authentic Maharashtrian Food" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./account-DjtPtxQi.mjs");
var Route$8 = createFileRoute("/account")({
	head: () => ({ meta: [{ title: "My Account | Naik Foods" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./cart-C4q93PzO.mjs");
var Route$7 = createFileRoute("/cart")({
	head: () => ({ meta: [
		{ title: "Your Cart | Naik Foods" },
		{
			name: "description",
			content: "Review your Naik Foods order and see how close you are to free delivery on orders above ₹999."
		},
		{
			property: "og:title",
			content: "Your Cart | Naik Foods"
		},
		{
			property: "og:description",
			content: "Review your Naik Foods order before checkout."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./checkout-BJpFodSk.mjs");
var Route$6 = createFileRoute("/checkout")({
	head: () => ({ meta: [{ title: "Checkout | Naik Foods" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./contact-Bhy5sQUs.mjs");
var Route$5 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Us — Naik Foods" },
		{
			name: "description",
			content: "Get in touch with Naik Foods — questions about orders, bulk gifting or our Pune store."
		},
		{
			property: "og:title",
			content: "Contact Us — Naik Foods"
		},
		{
			property: "og:description",
			content: "Get in touch with Naik Foods — questions about orders, bulk gifting or our Pune store."
		},
		{
			property: "og:type",
			content: "website"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./orders-hD4bK2NB.mjs");
var Route$4 = createFileRoute("/orders")({
	head: () => ({ meta: [{ title: "Order History | Naik Foods" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./privacy-BrUHwb-t.mjs");
var Route$3 = createFileRoute("/privacy")({
	head: () => ({ meta: [{ title: "Privacy Policy | Naik Foods" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./returns-JYIDPOQs.mjs");
var Route$2 = createFileRoute("/returns")({
	head: () => ({ meta: [{ title: "Returns & Refunds | Naik Foods" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./terms-DVXX4oDq.mjs");
var Route$1 = createFileRoute("/terms")({
	head: () => ({ meta: [{ title: "Terms & Conditions | Naik Foods" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./wishlist-BLSPjLBp.mjs");
var Route = createFileRoute("/wishlist")({
	head: () => ({ meta: [{ title: "Wishlist | Naik Foods" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var AboutRoute = Route$9.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$11
});
var AccountRoute = Route$8.update({
	id: "/account",
	path: "/account",
	getParentRoute: () => Route$11
});
var BlogRoute = Route$1$1.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$11
});
var CartRoute = Route$7.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$11
});
var CheckoutRoute = Route$6.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$11
});
var ContactRoute = Route$5.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$11
});
var OrdersRoute = Route$4.update({
	id: "/orders",
	path: "/orders",
	getParentRoute: () => Route$11
});
var PrivacyRoute = Route$3.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$11
});
var ReturnsRoute = Route$2.update({
	id: "/returns",
	path: "/returns",
	getParentRoute: () => Route$11
});
var StoreRoute = Route$15.update({
	id: "/store",
	path: "/store",
	getParentRoute: () => Route$11
});
var TermsRoute = Route$1.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$11
});
var WishlistRoute = Route.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => Route$11
});
var BlogSlugRoute = Route$12.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => BlogRoute
});
var OrdersOrderIdRoute = Route$13.update({
	id: "/$orderId",
	path: "/$orderId",
	getParentRoute: () => OrdersRoute
});
var ProductsSlugRoute = Route$14.update({
	id: "/products/$slug",
	path: "/products/$slug",
	getParentRoute: () => Route$11
});
var BlogRouteChildren = { BlogSlugRoute };
var BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
var OrdersRouteChildren = { OrdersOrderIdRoute };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AccountRoute,
	BlogRoute: BlogRouteWithChildren,
	CartRoute,
	CheckoutRoute,
	ContactRoute,
	OrdersRoute: OrdersRoute._addFileChildren(OrdersRouteChildren),
	PrivacyRoute,
	ReturnsRoute,
	StoreRoute,
	TermsRoute,
	WishlistRoute,
	ProductsSlugRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
