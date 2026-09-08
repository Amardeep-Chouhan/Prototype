import { r as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowUpRight, D as ChevronRight, O as ChevronLeft, _ as MapPin, c as ShieldCheck, j as ArrowRight, o as Sparkles, r as Truck, w as Clock3, y as Leaf } from "../_libs/lucide-react.mjs";
import { n as PRODUCTS, t as CATEGORIES } from "./products-CNjfagVT.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as ProductCard } from "./ProductCard-D4qLIcUI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-pMbQwjhh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ScrollRow({ children, controls = "top", label }) {
	const ref = (0, import_react.useRef)(null);
	const [atStart, setAtStart] = (0, import_react.useState)(true);
	const [atEnd, setAtEnd] = (0, import_react.useState)(false);
	const sync = () => {
		const el = ref.current;
		if (!el) return;
		setAtStart(el.scrollLeft <= 4);
		setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
	};
	(0, import_react.useEffect)(sync, []);
	const scrollBy = (dir) => {
		const el = ref.current;
		if (!el) return;
		el.scrollBy({
			left: dir * el.clientWidth * .9,
			behavior: "smooth"
		});
	};
	const arrows = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": `Scroll ${label} left`,
			disabled: atStart,
			onClick: () => scrollBy(-1),
			className: "flex size-10 items-center justify-center rounded-full border bg-card text-foreground shadow-sm transition-opacity disabled:opacity-35",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": `Scroll ${label} right`,
			disabled: atEnd,
			onClick: () => scrollBy(1),
			className: "flex size-10 items-center justify-center rounded-full border bg-card text-foreground shadow-sm transition-opacity disabled:opacity-35",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: controls === "corner" ? "relative" : "",
		children: [
			controls === "top" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex justify-end",
				children: arrows
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref,
				onScroll: sync,
				className: "scroll-row -mx-6 px-6",
				children
			}),
			controls === "corner" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute bottom-10 right-10 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-auto",
					children: arrows
				})
			})
		]
	});
}
var HERO_SLIDES = [
	{
		kicker: "Naik Foods Original",
		title: "The Heart of Authentic Maharashtra",
		body: "From hand-pounded masalas to farm-fresh staples, bring the traditional flavours of Vidarbha and Konkan to your kitchen.",
		cta: "Shop the collection",
		href: "/store"
	},
	{
		kicker: "Small-batch goodness",
		title: "Aaji's recipes. Made for today.",
		body: "Sun-cured pickles, crunchy snacks and everyday staples made to feel familiar from the very first bite.",
		cta: "Explore pickles",
		href: "/store"
	},
	{
		kicker: "Visit Pune",
		title: "Taste the story in person",
		body: "Find our authentic food store in Shukrawar Peth and discover fresh batches and local favourites.",
		cta: "Locate our shop",
		href: "/contact"
	}
];
var CATEGORY_COUNTS = {
	"Snacks and Namkeen": 105,
	"Pickles & Condiments": 14,
	"Sweets & Bakery": 25,
	"Dairy & Beverages": 15,
	"Mukhvas & Digestives": 6,
	Confectionery: 5,
	"Spices & Masalas": 9,
	"Dry/Instant Grocery": 20
};
var REGIONS = [
	"Pune",
	"Vidarbha",
	"Konkan",
	"Nashik"
];
var PROMOS = [
	{
		kicker: "Pure & Traditional",
		title: "Small-batch pickles",
		body: "From Aaji's kitchen to yours.",
		cta: "Shop pickles",
		category: "Pickles & Condiments"
	},
	{
		kicker: "Everyday Staples",
		title: "Masalas ground fresh",
		body: "Hand-pounded, never machine-blasted.",
		cta: "Browse masalas",
		category: "Spices & Masalas"
	},
	{
		kicker: "Fast & Flavorful",
		title: "Meals made simpler",
		body: "Premixes and instant staples for busy days.",
		cta: "Browse grocery",
		category: "Dry/Instant Grocery"
	}
];
var TESTIMONIALS = [
	{
		name: "Riya Sharma",
		via: "Instagram",
		quote: "The taste feels truly homemade and the packaging is always perfect!"
	},
	{
		name: "Aman Verma",
		via: "Google",
		quote: "Great quality, consistent taste, and fast delivery every time."
	},
	{
		name: "Neha Gupta",
		via: "Google",
		quote: "From snacks to full meals, Naik Foods delivers amazing flavour and freshness."
	},
	{
		name: "Rahul Mehta",
		via: "Instagram",
		quote: "Everything tastes authentic, fresh, and perfectly packed."
	}
];
var ARTICLES = [
	{
		tag: "Healthy Snack",
		title: "10 Healthy & Crunchy Snack Products You Must Try",
		date: "3 March 2026"
	},
	{
		tag: "Fasting",
		title: "10 Delicious Upwas Snacks You Must Try During Fasting",
		date: "9 March 2026"
	},
	{
		tag: "Premixes",
		title: "Traditional Thalipith Bhajni for Nutritious Maharashtrian Meals",
		date: "12 March 2026"
	}
];
function SectionHeading({ eyebrow, title, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-2",
				children: eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] font-bold uppercase tracking-[0.18em] text-primary",
					children: eyebrow
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-[30px] font-extrabold tracking-tight md:text-[38px]",
				children: title
			}),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm leading-6 text-muted-foreground md:text-[15px]",
				children: sub
			})
		]
	});
}
function Home() {
	const [region, setRegion] = (0, import_react.useState)("Pune");
	const popular = PRODUCTS.filter((p) => p.popular).slice(0, 6);
	const bestSellers = PRODUCTS.filter((p) => p.bestSeller && !p.popular).slice(0, 6);
	const regional = PRODUCTS.filter((_, i) => REGIONS[i % 4] === region).slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[82rem] px-4 py-5 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Naik Foods highlights",
				className: "relative overflow-hidden rounded-[2rem] bg-background",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollRow, {
					label: "highlights",
					controls: "corner",
					children: HERO_SLIDES.map((slide, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "scroll-row-item relative min-h-[470px] w-[94vw] max-w-[76rem] overflow-hidden rounded-[2rem] bg-primary p-7 text-primary-foreground sm:p-10 md:p-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-16 -top-20 size-72 rounded-full border-[42px] border-white/10" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-110px] right-[18%] size-72 rounded-full bg-white/10 blur-2xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 flex h-full flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "max-w-3xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] backdrop-blur",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }),
												" ",
												slide.kicker
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
											className: "mt-7 max-w-3xl font-display text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-[4.5rem]",
											children: slide.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-5 max-w-2xl text-sm leading-6 text-white/85 md:text-base",
											children: slide.body
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-end justify-between gap-6",
									children: [index === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/store",
										search: { category: "Pickles & Condiments" },
										className: "inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-brand-dark shadow-lg transition hover:-translate-y-0.5",
										children: [
											slide.cta,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
										]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: slide.href,
										className: "inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-brand-dark shadow-lg transition hover:-translate-y-0.5",
										children: [
											slide.cta,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hidden rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur sm:block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-bold uppercase tracking-[0.16em] text-white/60",
											children: "Crafted with care"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm font-bold",
											children: "Traditional taste · modern convenience"
										})]
									})]
								})]
							})
						]
					}, slide.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						icon: Leaf,
						title: "Authentic recipes",
						note: "Regional flavours"
					},
					{
						icon: Truck,
						title: "Doorstep delivery",
						note: "Across India"
					},
					{
						icon: ShieldCheck,
						title: "Secure checkout",
						note: "Safe & simple"
					},
					{
						icon: Clock3,
						title: "Customer support",
						note: "Here when needed"
					}
				].map(({ icon: Icon, title, note }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 rounded-2xl border bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: note
					})] })]
				}, title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Shop by category",
					title: "Find your favourite flavour",
					sub: "From crunchy namkeen to Aaji-style pickles, explore the range by category."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollRow, {
					label: "featured categories",
					children: CATEGORIES.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/store",
						search: { category },
						className: "scroll-row-item group w-64 overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex h-36 items-end overflow-hidden bg-secondary p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-7 -top-7 size-28 rounded-full bg-primary/10 transition group-hover:scale-125" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative font-display text-lg font-extrabold leading-tight",
								children: category
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs font-semibold text-muted-foreground",
								children: [CATEGORY_COUNTS[category], " products"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-primary" })]
						})]
					}, category))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Curated for you",
						title: "Popular right now",
						sub: "Products customers keep coming back to."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/store",
						className: "mb-7 inline-flex items-center gap-2 text-sm font-bold text-primary",
						children: ["Explore all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollRow, {
					label: "popular products",
					children: popular.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "scroll-row-item w-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p })
					}, p.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-20 rounded-[2rem] bg-brand-dark p-7 text-white sm:p-10 md:p-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em]",
							children: "Naik Foods promise"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl",
							children: "Real food. Regional stories. A better everyday pantry."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-sm leading-6 text-white/70 md:text-base",
							children: "Discover food inspired by Maharashtra's kitchens, presented with the convenience today's customers expect."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/about",
						className: "inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-brand-dark",
						children: ["Our story ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Customer favourites",
						title: "Best sellers",
						sub: "Our strongest everyday picks — now separated from the popularity feed for clearer discovery."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/store",
						className: "mb-7 inline-flex items-center gap-2 text-sm font-bold text-primary",
						children: ["Shop best sellers ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollRow, {
					label: "best sellers",
					children: bestSellers.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "scroll-row-item w-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p })
					}, p.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Made for your region",
						title: "Shop by region",
						sub: "A quick way to discover flavours associated with different parts of Maharashtra."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-7 overflow-x-auto border-b text-sm",
						children: REGIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setRegion(r),
							className: `-mb-px shrink-0 border-b-2 pb-3 font-bold transition ${region === r ? "border-primary text-primary" : "border-transparent text-muted-foreground"}`,
							children: r
						}, r))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollRow, {
							label: "regional products",
							children: regional.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "scroll-row-item w-64",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p })
							}, p.slug))
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-20 grid gap-5 md:grid-cols-3",
				children: PROMOS.map((promo) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/store",
					search: { category: promo.category },
					className: "group rounded-[1.7rem] border bg-card p-7 transition hover:-translate-y-1 hover:shadow-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex rounded-full bg-secondary px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-primary",
							children: promo.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-2xl font-extrabold",
							children: promo.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: promo.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary",
							children: [
								promo.cta,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition group-hover:translate-x-1" })
							]
						})
					]
				}, promo.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Loved by foodies",
					title: "What our community says",
					sub: "A few words from customers who keep authentic flavours in their kitchens."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollRow, {
					label: "community reviews",
					children: TESTIMONIALS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "scroll-row-item w-80 rounded-2xl border bg-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-11 items-center justify-center rounded-full bg-secondary font-bold text-primary",
									children: t.name[0]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-bold",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-muted-foreground",
									children: ["Verified community · ", t.via]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-accent",
								children: "★★★★★"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "mt-3 text-sm italic leading-6 text-muted-foreground",
								children: [
									"“",
									t.quote,
									"”"
								]
							})
						]
					}, t.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "From the kitchen",
					title: "Recipes, stories & inspiration",
					sub: "Useful food content that helps customers discover more than just products."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 md:grid-cols-3",
					children: ARTICLES.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog",
						className: "group overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1 hover:shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-40 items-end bg-secondary p-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-card px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-primary",
								children: a.tag
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-extrabold leading-snug",
								children: a.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-xs text-muted-foreground",
								children: [
									a.date,
									" · Read article ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 inline size-3.5 transition group-hover:translate-x-1" })
								]
							})]
						})]
					}, a.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-20 overflow-hidden rounded-[2rem] bg-secondary p-7 sm:p-10 md:p-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary",
							children: "Stay in the loop"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-extrabold md:text-4xl",
							children: "Recipes, new launches & useful offers."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "No spam. Just the good stuff from Naik Foods."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "flex w-full max-w-xl overflow-hidden rounded-full border bg-card p-1.5",
						onSubmit: (e) => {
							e.preventDefault();
							const input = e.currentTarget.elements.namedItem("newsletter");
							const email = input?.value.trim() ?? "";
							if (!/^\S+@\S+\.\S+$/.test(email)) {
								input?.setCustomValidity("Enter a valid email address.");
								input?.reportValidity();
								return;
							}
							input?.setCustomValidity("");
							localStorage.setItem("naik-newsletter", email);
							if (input) input.value = "";
							toast.success("You're subscribed!", { description: "Thanks for joining the Naik Foods community." });
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "newsletter",
								className: "sr-only",
								children: "Email address"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "newsletter",
								name: "newsletter",
								type: "email",
								required: true,
								placeholder: "Your email address",
								className: "min-w-0 flex-1 bg-transparent px-5 py-3 text-sm outline-none"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground",
								children: "Subscribe"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20 grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "group rounded-2xl border bg-card p-6 transition hover:border-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold",
								children: "Visit our Pune store"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Shukrawar Peth · 9 AM–10 PM daily"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "ml-auto size-5 text-muted-foreground transition group-hover:text-primary" })
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/returns",
					className: "group rounded-2xl border bg-card p-6 transition hover:border-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold",
								children: "Shop with confidence"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Read our returns & refunds policy"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "ml-auto size-5 text-muted-foreground transition group-hover:text-primary" })
						]
					})
				})]
			})
		]
	});
}
//#endregion
export { Home as component };
