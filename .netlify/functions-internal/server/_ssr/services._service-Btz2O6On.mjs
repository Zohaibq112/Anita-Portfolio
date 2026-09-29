import { r as __toESM } from "../_runtime.mjs";
import { _ as require_react, g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./services._service-D_EE2Lcy.mjs";
import { a as image5_default, n as Reveal, o as image7_default, r as bridal_default, t as Logo_default } from "./Logo-BOMcFBSZ.mjs";
import { a as ArrowLeft, i as Check, n as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._service-Btz2O6On.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SERVICES = {
	bridal: {
		title: "Bridal Makeup",
		eyebrow: "The Bridal Experience",
		image: image5_default,
		alt: "Bridal makeup by Anita",
		intro: "A polished, personalised bridal look designed to feel like you and last beautifully from the ceremony through to the last dance.",
		details: [
			"Personal consultation and look planning",
			"Makeup tailored to your features, style and dress",
			"Long-lasting products for photography and celebrations",
			"Touch-up guidance so you feel confident all day"
		],
		packages: [
			{
				name: "Blushing Bride Bundle",
				price: "£300",
				includes: "Bridal trial + one off makeup + touch up bag"
			},
			{
				name: "Radiant Bride Experience",
				price: "£450",
				includes: "Bridal trial + up to 4 hours of service + touch up + one change of makeup + free glam for a person of your choice"
			},
			{
				name: "Ultimate Bridal Experience",
				price: "£600",
				includes: "Bridal trial + up to 10 hours of service + touch up + unlimited change of makeup + free glam for a person of your choice + travel to and from bride's suite to ceremony and reception"
			}
		]
	},
	events: {
		title: "Events & Special Occasions",
		eyebrow: "Event Makeup",
		image: image7_default,
		alt: "Event makeup by Anita",
		intro: "A refined makeup look for celebrations, parties and important occasions when you want to feel effortlessly beautiful.",
		details: [
			"A look created around your outfit and occasion",
			"Soft, polished or more defined makeup options",
			"Camera-ready skin and beautifully balanced definition",
			"A calm, considered experience from start to finish"
		]
	},
	vip: {
		title: "THE “VIP” Experience",
		eyebrow: "The VIP Experience",
		image: bridal_default,
		alt: "The VIP bridal experience by Anita",
		price: "£1000",
		intro: "Indulge in the ultimate luxury and comfort on your special day with our exclusive VIP Experience. This package has been designed to offer brides the most personalised and glamorous experience, ensuring you feel pampered and flawless throughout your wedding.",
		details: [
			"A pre-styled bridal wig of your choice, tailored to complement your look and vision",
			"Bridal makeup trial to perfect your dream look",
			"Up to 10 hours of on-site service, including makeup touch-ups and unlimited makeup changes to fit your style from ceremony to reception",
			"Complimentary glam for one person of your choice",
			"Travel between your suite, ceremony and reception within London"
		],
		benefits: [
			{
				title: "Luxury & Comfort",
				text: "Enjoy a seamless, high-end experience without worrying about touch-ups or timing. We stay with you throughout the day, ensuring you look picture-perfect at every moment."
			},
			{
				title: "Personalized Attention",
				text: "With dedicated time and unlimited makeup changes, you can switch up your look effortlessly while staying true to your bridal vision."
			},
			{
				title: "Extra Glam",
				text: "Your chosen VIP guest will also enjoy a complimentary glamorous makeover, making sure you both shine on the big day."
			},
			{
				title: "Convenience",
				text: "All services, including travel between your suite, ceremony and reception, are included, giving you peace of mind and freedom to enjoy your day stress-free."
			}
		]
	}
};
var inputClass = "w-full border-0 border-b border-input bg-transparent px-0 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground focus-visible:ring-0";
var summaryClass = "flex cursor-pointer list-none items-center justify-between text-sm uppercase tracking-[0.18em] text-foreground [&::-webkit-details-marker]:hidden";
function Toggle() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		"aria-hidden": "true",
		className: "text-lg leading-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "group-open:hidden",
			children: "+"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden group-open:inline",
			children: "−"
		})]
	});
}
function ServicePage() {
	const { service } = Route.useParams();
	const selectedService = SERVICES[service];
	const [sent, setSent] = (0, import_react.useState)(false);
	const [selectedPackage, setSelectedPackage] = (0, import_react.useState)(0);
	if (!selectedService) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-6 px-5 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Service not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-4xl font-light text-foreground sm:text-5xl",
				children: "Explore Anita's services."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				hash: "services",
				className: "border-b border-foreground/40 pb-1 text-xs uppercase tracking-[0.2em]",
				children: "Back to services"
			})
		]
	});
	const packages = "packages" in selectedService ? selectedService.packages : void 0;
	const benefits = "benefits" in selectedService ? selectedService.benefits : void 0;
	const servicePrice = "price" in selectedService ? selectedService.price : void 0;
	const priceLabel = packages ? packages[selectedPackage].price : servicePrice ?? "Price on enquiry";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-clip bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-5 md:h-20 md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					"aria-label": "Anita, makeup artist in London, home",
					className: "flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: Logo_default,
						alt: "Anita Makeup Artist logo",
						className: "h-9 w-auto object-contain brightness-0 sm:h-10 md:h-12"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					hash: "services",
					className: "flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-foreground transition-opacity hover:opacity-60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							size: 15,
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Back to services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sm:hidden",
							children: "Back"
						})
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-[1400px] gap-10 px-5 py-10 md:px-10 md:py-16 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:sticky lg:top-8 lg:self-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: selectedService.image,
					alt: selectedService.alt,
					className: "aspect-[4/5] w-full object-cover",
					fetchPriority: "high"
				})
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 120,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: selectedService.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl",
						children: selectedService.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-2xl text-foreground",
						children: priceLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-8 space-y-6 border-t border-border pt-8",
						onSubmit: (event) => {
							event.preventDefault();
							setSent(true);
							event.currentTarget.reset();
							setSelectedPackage(0);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "hidden",
								name: "service",
								value: selectedService.title
							}),
							packages && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
									className: "eyebrow mb-3",
									children: "Choose a package"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "hidden",
									name: "package",
									value: `${packages[selectedPackage].name} — ${packages[selectedPackage].price}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-3",
									children: packages.map((pkg, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setSelectedPackage(i),
										"aria-pressed": selectedPackage === i,
										className: `flex w-full items-center justify-between gap-4 border px-4 py-4 text-left text-sm transition-colors ${selectedPackage === i ? "border-foreground text-foreground" : "border-border text-muted-foreground hover:border-foreground/60"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: pkg.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground",
											children: pkg.price
										})]
									}, pkg.name))
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-6 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "eyebrow",
										children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "name",
											required: true,
											className: `${inputClass} mt-2`
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "eyebrow",
										children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "email",
											type: "email",
											required: true,
											className: `${inputClass} mt-2`
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "eyebrow",
										children: ["Phone", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "phone",
											type: "tel",
											className: `${inputClass} mt-2`
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "eyebrow",
										children: ["Date", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "date",
											type: "date",
											required: true,
											className: `${inputClass} mt-2`
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "eyebrow",
										children: ["Preferred time", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "time",
											type: "time",
											className: `${inputClass} mt-2`
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "eyebrow",
										children: ["Location", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "location",
											className: `${inputClass} mt-2`
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "eyebrow block",
								children: ["Tell me more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "message",
									rows: 4,
									className: `${inputClass} mt-2`
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "w-full bg-foreground px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-85",
								children: ["Send an enquiry · ", priceLabel]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"aria-live": "polite",
								className: "text-sm text-muted-foreground",
								children: sent && "Thank you. Anita will get back to you as soon as possible."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 border-t border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
								open: true,
								className: "group border-b border-border py-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
										className: summaryClass,
										children: ["Description", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm leading-[1.9] text-muted-foreground",
										children: selectedService.intro
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-6 space-y-3 text-sm text-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
													size: 16,
													"aria-hidden": "true"
												}), "London, England"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
													size: 16,
													"aria-hidden": "true"
												}), "Personalised to your occasion"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
													size: 16,
													"aria-hidden": "true"
												}), "Final quote confirmed upon enquiry"]
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
								className: "group border-b border-border py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
									className: summaryClass,
									children: ["What's included", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-3 text-sm leading-[1.8] text-muted-foreground",
									children: selectedService.details.map((detail) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: detail }, detail))
								})]
							}),
							benefits && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
								className: "group border-b border-border py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
									className: summaryClass,
									children: ["Benefits", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 space-y-6",
									children: benefits.map((benefit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm text-foreground",
										children: benefit.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-[1.8] text-muted-foreground",
										children: benefit.text
									})] }, benefit.title))
								})]
							}),
							packages && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
								className: "group border-b border-border py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
									className: summaryClass,
									children: ["Package details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-5 text-sm leading-[1.8] text-muted-foreground",
									children: packages.map((pkg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-foreground",
											children: [
												pkg.name,
												" — ",
												pkg.price
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										pkg.includes
									] }, pkg.name))
								})]
							})
						]
					})
				]
			})]
		}) })]
	});
}
//#endregion
export { ServicePage as component };
