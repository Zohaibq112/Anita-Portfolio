import { r as __toESM } from "../_runtime.mjs";
import { _ as require_react, a as Trigger2, g as require_jsx_runtime, i as Root2, n as Header$1, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as image5_default, i as cn, n as Reveal, o as image7_default, r as bridal_default, t as Logo_default } from "./Logo-BOMcFBSZ.mjs";
import { r as ChevronDown, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-2BfUy9_L.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header$1, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var image2_default = "/assets/image2-BVCezlOC.png";
var image3_default = "/assets/image3-CUN8IfFC.png";
var image4_default = "/assets/image4-DH0oSVhc.png";
var image6_default = "/assets/image6-DqLB7JuV.png";
var image8_default = "/assets/image8-D_H5DBrp.png";
var image9_default = "/assets/image9-DomtW8MH.png";
var image10_default = "/assets/image10-CmAU08qj.png";
var artist_default = "/assets/artist-BwyrHMrD.png";
var image11_default = "/assets/image11-DEVsilVw.png";
var bridal1_default = "/assets/bridal1-JdVfhuI_.png";
var bridal11_default = "/assets/bridal11-wVQVhHBM.png";
var NAV = [
	{
		label: "Home",
		href: "#start"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Services",
		href: "#services"
	},
	{
		label: "Portfolio",
		href: "#portfolio"
	},
	{
		label: "Bridal Makeup",
		href: "#bridal"
	},
	{
		label: "FAQ",
		href: "#faq"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
var INSTAGRAM = "https://instagram.com/makeupartistAnita";
var WHATSAPP_URL = `https://wa.me/+44 7460 285854?text=${encodeURIComponent("Hello Anita, I'd like to enquire about your makeup services.")}`;
var GALLERY = [
	{
		src: image2_default,
		alt: "Bridal makeup by Anita with a natural, flawless finish",
		cat: "Bridal",
		ratio: "3/4"
	},
	{
		src: image6_default,
		alt: "Elegant eye makeup close-up",
		cat: "Makeup",
		ratio: "3/4"
	},
	{
		src: image5_default,
		alt: "Beauty portrait with soft light and polished skin finish",
		cat: "Makeup",
		ratio: "1/1"
	},
	{
		src: image7_default,
		alt: "Editorial beauty look for a photoshoot in London",
		cat: "Makeup",
		ratio: "3/4"
	},
	{
		src: image4_default,
		alt: "Makeup look for a special occasion",
		cat: "Events",
		ratio: "3/4"
	},
	{
		src: image9_default,
		alt: "Bridal makeup with a long-lasting, harmonious finish",
		cat: "Bridal",
		ratio: "3/4"
	},
	{
		src: image8_default,
		alt: "Close-up of skin and complexion after makeup",
		cat: "Makeup",
		ratio: "1/1"
	},
	{
		src: image10_default,
		alt: "Portrait with defined eyes and soft contouring",
		cat: "Makeup",
		ratio: "3/4"
	},
	{
		src: image3_default,
		alt: "Elegant evening makeup look for events",
		cat: "Events",
		ratio: "3/4"
	}
];
var CATS = [
	"All",
	"Bridal",
	"Makeup",
	"Events"
];
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled || open ? "border-b border-border bg-background/95 backdrop-blur-md" : "border-b border-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-5 md:h-20 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#start",
					"aria-label": "Anita, makeup artist in London, home",
					className: "flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: Logo_default,
						alt: "Anita Makeup Artist logo",
						className: cn("h-9 w-auto object-contain transition-[filter] duration-500 sm:h-10 md:h-12", scrolled || open ? "brightness-0" : "brightness-0 invert")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Main navigation",
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex items-center gap-8",
						children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: n.href,
							className: cn("text-[0.7rem] uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-60", scrolled ? "text-foreground" : "text-white"),
							children: n.label
						}) }, n.href))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: cn("hidden border px-6 py-3 text-[0.7rem] uppercase tracking-[0.2em] transition-colors duration-300 md:inline-block", scrolled ? "border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground" : "border-white/70 text-white hover:bg-white hover:text-foreground"),
						children: "Send an inquiry"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-expanded": open,
						"aria-label": open ? "Close menu" : "Open menu",
						className: cn("flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden", scrolled || open ? "text-foreground" : "text-white"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-px w-6 bg-current transition-transform duration-300", open && "translate-y-[3px] rotate-45") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-px w-6 bg-current transition-transform duration-300", open && "-translate-y-[3px] -rotate-45") })]
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "Mobile navigation",
			className: "max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-border bg-background lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mx-auto max-w-[1400px] px-5 py-4",
				children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-b border-border/60 last:border-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: n.href,
						onClick: () => setOpen(false),
						className: "block py-4 font-serif text-2xl text-foreground",
						children: n.label
					})
				}, n.href))
			})
		})]
	});
}
var REELS_DATA = [
	{
		id: 1,
		videoUrl: "/reel1.mp4",
		url: "https://www.instagram.com/reel/REEL_ID_1/",
		handle: "@makeupartistAnita"
	},
	{
		id: 2,
		videoUrl: "/reel2.mp4",
		url: "https://www.instagram.com/reel/REEL_ID_2/",
		handle: "@makeupartistAnita"
	},
	{
		id: 3,
		videoUrl: "/reel3.mp4",
		url: "https://www.instagram.com/reel/REEL_ID_3/",
		handle: "@makeupartistAnita"
	}
];
function Reels() {
	const videoRefs = (0, import_react.useRef)([]);
	const [isMuted, setIsMuted] = (0, import_react.useState)(true);
	const loadAndPlayVideo = (video) => {
		if (!video) return;
		const dataSrc = video.getAttribute("data-src");
		if (dataSrc && !video.src) {
			video.src = dataSrc;
			video.load();
		}
		const playPromise = video.play();
		if (playPromise !== void 0) playPromise.catch((error) => {
			console.warn("Autoplay interrupted:", error);
		});
	};
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
		const videos = videoRefs.current.filter((el) => el !== null);
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const video = entry.target;
				if (entry.isIntersecting) loadAndPlayVideo(video);
				else if (video && !video.paused) video.pause();
			});
		}, { threshold: .35 });
		videos.forEach((video) => observer.observe(video));
		return () => {
			observer.disconnect();
		};
	}, []);
	const toggleSound = (e) => {
		e.preventDefault();
		e.stopPropagation();
		const nextMuteState = !isMuted;
		setIsMuted(nextMuteState);
		videoRefs.current.forEach((video) => {
			if (video) video.muted = nextMuteState;
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Instagram Reels"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl",
						children: "Beauty in Motion"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-xl text-sm leading-[1.9] text-muted-foreground md:text-base",
						children: "Follow Anita on Instagram for daily inspiration, transformations and behind-the-scenes moments."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-12 grid grid-cols-3 gap-2 sm:gap-4 md:mt-14 md:gap-6",
				children: REELS_DATA.map((reel, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: reel.url,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "group relative block aspect-[9/16] w-full overflow-hidden bg-[#28221F] shadow-lg transition-all duration-500 hover:-translate-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							ref: (el) => {
								videoRefs.current[index] = el;
							},
							"data-src": reel.videoUrl,
							className: "h-full w-full object-cover",
							muted: isMuted,
							loop: true,
							playsInline: true,
							preload: "metadata"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 flex items-end justify-center bg-gradient-to-t from-[#28221F]/80 via-[#28221F]/10 to-transparent p-2 opacity-90 transition-opacity duration-300 group-hover:opacity-100 sm:p-4 md:p-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden text-center text-[0.65rem] font-medium uppercase tracking-[0.22em] text-white/90 sm:inline md:text-[0.7rem]",
								children: reel.handle
							})
						})]
					})
				}, reel.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col items-center justify-center gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: toggleSound,
					type: "button",
					className: "border border-foreground/20 bg-transparent px-5 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:bg-foreground/5 active:scale-95",
					children: isMuted ? "Unmute reels" : "Mute reels"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: INSTAGRAM,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "bg-foreground px-8 py-4 text-center text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity duration-300 hover:opacity-85",
					children: "View on Instagram"
				})]
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "start",
		className: "relative min-h-[100svh] w-full overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "absolute inset-0 h-full w-full object-cover object-center",
				src: "/hero.mp4",
				autoPlay: true,
				loop: true,
				muted: true,
				playsInline: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#28221F]/85 via-[#28221F]/35 to-[#28221F]/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pb-28 pt-32 md:px-10 md:pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "fade-up eyebrow text-white/75",
							children: "Makeup Artist • London"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "fade-up mt-6 font-serif text-[2.4rem] font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl",
							style: { animationDelay: "120ms" },
							children: [
								"Your beauty.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Perfectly brought to life."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "fade-up mt-7 max-w-xl text-sm leading-relaxed text-white/80 md:text-base",
							style: { animationDelay: "240ms" },
							children: "Flawless, long-lasting makeup for brides, special occasions, events and photoshoots."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "fade-up mt-10 flex flex-col gap-3 sm:flex-row sm:items-center",
							style: { animationDelay: "340ms" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "bg-white px-8 py-4 text-center text-[0.7rem] uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:bg-[#E9DED2]",
								children: "Send an inquiry"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#portfolio",
								className: "border border-white/60 px-8 py-4 text-center text-[0.7rem] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-white/10",
								children: "Explore the portfolio"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "fade-up mt-8 text-[0.65rem] uppercase tracking-[0.2em] text-white/60 sm:text-[0.7rem] sm:tracking-[0.24em]",
							style: { animationDelay: "440ms" },
							children: "Bridal makeup • Events • Photoshoots"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[0.6rem] uppercase tracking-[0.3em] text-white/60",
					children: "Scroll"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-12 w-px bg-gradient-to-b from-white/70 to-transparent" })]
			})
		]
	});
}
function Statement() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-10 lg:grid-cols-2 lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Beauty Statement"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl lg:text-[3.4rem]",
					children: "Beauty that feels like you."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-xl text-sm leading-[1.9] text-muted-foreground md:text-base",
					children: "The perfect makeup look should enhance your natural beauty, reflect your personality and make you feel completely at ease."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-sm leading-[1.9] text-muted-foreground md:text-base",
					children: "A natural glow, elegant definition and a flawless finish, tailored to your individual wishes. For long-lasting results and confidence you can see."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-10 h-px w-24 bg-champagne" })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image6_default,
					alt: "Close-up of elegant eye makeup by Anita",
					loading: "lazy",
					className: "aspect-[4/5] w-full object-cover"
				})
			})]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "bg-secondary/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] gap-10 px-5 py-20 md:px-10 md:py-32 lg:grid-cols-2 lg:items-center lg:gap-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: artist_default,
				alt: "Portrait of makeup artist Anita in London",
				loading: "lazy",
				className: "aspect-[3/4] w-full object-cover"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 120,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "About Anita"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl",
						children: "Makeup with attention to detail."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-sm leading-[1.9] text-muted-foreground md:text-base",
						children: "Anita is a professional makeup artist in London. Her work begins with a personal consultation: she listens, understands your wishes and creates a look that suits you and your occasion."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base",
						children: "Precise application, a high-quality finish and a modern beauty aesthetic define every look. The result is makeup that enhances rather than conceals, giving you confidence for your moment."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#services",
						className: "mt-10 inline-block border-b border-foreground pb-1 text-[0.7rem] uppercase tracking-[0.22em] text-foreground transition-opacity duration-300 hover:opacity-60",
						children: "More about Anita"
					})
				]
			})]
		})
	});
}
var PRINCIPLES = [
	{
		no: "01",
		title: "Flawless",
		text: "Precise, harmonious makeup with a polished and elegant finish."
	},
	{
		no: "02",
		title: "Modern",
		text: "Contemporary beauty aesthetics tailored to your personal style."
	},
	{
		no: "03",
		title: "Long-lasting",
		text: "A look that stays with you beautifully for hours."
	},
	{
		no: "04",
		title: "Personal",
		text: "Your makeup is tailored to your wishes, occasion and personality."
	}
];
function Signature() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Signature Style"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl",
						children: "The Anita Look"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 font-serif text-xl font-light italic text-champagne sm:text-2xl md:text-3xl",
						children: "Flawless. Modern. Long-lasting."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-2 gap-x-5 gap-y-10 md:mt-16 md:grid-cols-4 md:gap-10",
				children: PRINCIPLES.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * 90,
					className: "border-t border-border pt-5 md:pt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-sm tracking-[0.2em] text-champagne",
							children: p.no
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-[0.72rem] uppercase tracking-[0.22em] text-foreground md:mt-4 md:text-[0.75rem] md:tracking-[0.24em]",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[0.82rem] leading-[1.75] text-muted-foreground md:mt-4 md:text-sm md:leading-[1.85]",
							children: p.text
						})
					]
				}, p.no))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-4 sm:grid-cols-3 md:mt-20",
				children: [
					{
						src: image3_default,
						alt: "Editorial beauty look with soft light"
					},
					{
						src: image10_default,
						alt: "Defined eye makeup close-up"
					},
					{
						src: image9_default,
						alt: "Bridal makeup with a natural finish"
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 90,
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.src,
						alt: s.alt,
						loading: "lazy",
						className: "aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
					})
				}, s.src))
			})
		]
	});
}
var SERVICES = [
	{
		src: image5_default,
		title: "Bridal Makeup",
		text: "An elegant, personalised bridal look that enhances your natural beauty and lets you shine on your special day.",
		slug: "bridal",
		alt: "Bridal makeup by makeup artist Anita"
	},
	{
		src: image4_default,
		title: "Events & Special Occasions",
		text: "A stylish makeup look for special events, celebrations and moments when you want to feel completely beautiful.",
		slug: "events",
		alt: "Event makeup for special occasions"
	},
	{
		src: bridal_default,
		title: "THE “VIP” Experience",
		text: "Luxury all-day bridal glam with a pre-styled wig, makeup trial, 10 hours of touch-ups, guest glam, and venue travel.",
		slug: "vip",
		alt: "THE “VIP” Experience"
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "bg-secondary/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl",
						children: "Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base",
						children: "Professional makeup for special moments, important occasions and unforgettable images."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-8",
				children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * 100,
					as: "article",
					className: "group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.src,
								alt: s.alt,
								loading: "lazy",
								className: "aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-7 font-serif text-2xl font-light text-foreground",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-[1.85] text-muted-foreground",
							children: s.text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services/$service",
							params: { service: s.slug },
							className: "mt-6 inline-block border-b border-foreground/40 pb-1 text-[0.68rem] uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:border-foreground",
							children: "Learn more"
						})
					]
				}, s.title))
			})]
		})
	});
}
var BRIDAL_STEPS = [
	{
		no: "01",
		title: "Getting to know you",
		text: "We talk about your wishes, your style and the look you envision for your special day."
	},
	{
		no: "02",
		title: "Styling",
		text: "Your makeup is tailored to your features, your style and your occasion."
	},
	{
		no: "03",
		title: "Your moment",
		text: "You feel beautiful, confident and completely yourself, ready for your big moment."
	}
];
function Bridal() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "bridal",
		className: "mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: bridal11_default,
				alt: "Bride with flawless, long-lasting makeup by Anita",
				loading: "lazy",
				className: "aspect-[4/5] w-full object-cover"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 120,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "The Bridal Experience"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl",
						children: "For your most special moment."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-sm leading-[1.9] text-muted-foreground md:text-base",
						children: "Your wedding day should feel completely right. Your makeup should reflect your personality, look beautiful and carry you through every special moment."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-12 space-y-8",
						children: BRIDAL_STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-t border-border pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif text-sm tracking-[0.2em] text-champagne",
									children: s.no
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-[0.72rem] uppercase tracking-[0.24em] text-foreground",
									children: s.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-[1.85] text-muted-foreground",
								children: s.text
							})]
						}, s.no))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services/$service",
						params: { service: "bridal" },
						className: "mt-12 inline-block w-full bg-foreground px-8 py-4 text-center text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity duration-300 hover:opacity-85 sm:w-auto",
						children: "Enquire about bridal makeup"
					})
				]
			})]
		})
	});
}
function Portfolio() {
	const [cat, setCat] = (0, import_react.useState)("All");
	const [active, setActive] = (0, import_react.useState)(null);
	const shots = (0, import_react.useMemo)(() => cat === "All" ? GALLERY : GALLERY.filter((g) => g.cat === cat), [cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "portfolio",
		className: "bg-secondary/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Portfolio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl",
							children: "Portfolio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-serif text-xl font-light italic text-muted-foreground sm:text-2xl",
							children: "A glimpse into my looks."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					role: "tablist",
					"aria-label": "Portfolio categories",
					className: "mt-10 flex flex-wrap gap-x-7 gap-y-4 md:mt-12 md:gap-x-8",
					children: CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						role: "tab",
						"aria-selected": cat === c,
						onClick: () => setCat(c),
						className: cn("pb-1 text-[0.7rem] uppercase tracking-[0.22em] transition-colors duration-300", cat === c ? "border-b border-foreground text-foreground" : "border-b border-transparent text-muted-foreground hover:text-foreground"),
						children: c
					}, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 hidden gap-5 md:block md:columns-2 lg:columns-3",
					children: shots.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3 * 80,
						className: "mb-5 break-inside-avoid",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActive(s),
							className: "group block w-full overflow-hidden",
							"aria-label": `${s.alt} - Enlarge image`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.src,
								alt: s.alt,
								loading: "lazy",
								style: { aspectRatio: s.ratio },
								className: "w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
							})
						})
					}, s.src))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:hidden",
					children: shots.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActive(s),
						className: "w-[78%] flex-none snap-center",
						"aria-label": `${s.alt} - Enlarge image`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.src,
							alt: s.alt,
							loading: "lazy",
							className: "aspect-[3/4] w-full object-cover"
						})
					}, s.src))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: !!active,
			onOpenChange: (o) => !o && setActive(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "max-h-[92svh] max-w-3xl overflow-auto border-0 bg-background p-2 sm:p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "sr-only",
					children: active?.alt ?? "Portfolio image"
				}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: active.src,
					alt: active.alt,
					className: "h-auto w-full object-contain"
				})]
			})
		})]
	});
}
function Featured() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: bridal1_default,
				alt: "Flawless beauty look by Anita in close-up",
				loading: "lazy",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[#28221F]/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-44",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-white/70",
							children: "The Anita Look"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-serif text-3xl font-light leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-[3.4rem]",
							children: "Flawless beauty, interpreted with a modern eye."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-xl text-sm leading-[1.9] text-white/80 md:text-base",
							children: "A harmonious blend of precision, elegance and personality, for a look that feels entirely like you."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#portfolio",
							className: "mt-10 inline-block border border-white/60 px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-white hover:text-foreground",
							children: "View the portfolio"
						})
					]
				})
			})
		]
	});
}
var WHY = [
	{
		title: "Personal",
		text: "Your wishes and personal style are at the heart of every look."
	},
	{
		title: "Flawless",
		text: "A precise finish with special attention to detail."
	},
	{
		title: "Long-lasting",
		text: "A beauty look that stays with you for hours."
	},
	{
		title: "Tailored",
		text: "Every look is created for you, your occasion and your desired aesthetic."
	}
];
function Why() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "max-w-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Why Anita"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl",
				children: "Why Anita?"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:mt-16 sm:gap-x-10 sm:gap-y-10 md:gap-x-12 md:gap-y-12 lg:grid-cols-4",
			children: WHY.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: i * 90,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "block h-px w-8 bg-champagne sm:w-10"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "mt-4 text-[0.68rem] uppercase tracking-[0.16em] text-foreground sm:mt-6 sm:text-[0.72rem] sm:tracking-[0.24em]",
						children: w.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-3 text-[0.8rem] leading-[1.7] text-muted-foreground sm:mt-4 sm:text-sm sm:leading-[1.85]",
						children: w.text
					})
				]
			}, w.title))
		})]
	});
}
var TESTIMONIALS = [
	{
		name: "Lerato",
		quote: "Anita is a bomb ass MUA who knows her job inside out and makes you feel like a queen! From start to finish your professionalism has been exceptional! Really enjoyed my trial and the positive vibes we had throughout the journey! Defo 5 star rating. Would highly recommend! I look forward to the next event to get dolled up for!!!",
		rating: 5
	},
	{
		name: "Carlene",
		quote: "I loved working with Anita. Her vibe is pure and effortless. Her work is amazing. Very professional and cutesy. 5 stars for you babygirl.",
		rating: 5
	},
	{
		name: "Denise",
		quote: "Thank you so much for making my day so special, Anita. I've never had so many compliments in all my life! 🥰",
		rating: 5
	},
	{
		name: "Happy client",
		quote: "Thanks soo much Anita!! Honestly! My makeup looked so flawless and it stayed for the entire night without me looking oily or anything. You're my makeup artist now 😂💯",
		rating: 5
	}
];
function TestimonialCard({ t, onOpen }) {
	const textRef = (0, import_react.useRef)(null);
	const [truncated, setTruncated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const check = () => {
			const el = textRef.current;
			if (el) setTruncated(el.scrollHeight > el.clientHeight + 1);
		};
		check();
		window.addEventListener("resize", check);
		return () => window.removeEventListener("resize", check);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col border border-border bg-background p-7 md:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm tracking-[0.3em] text-champagne",
				"aria-label": `${t.rating} out of 5 stars`,
				children: "★".repeat(t.rating)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				ref: textRef,
				className: "mt-6 line-clamp-6 h-[9.5rem] font-serif text-lg font-light italic leading-relaxed text-foreground md:text-[1.05rem] xl:text-lg",
				children: [
					"“",
					t.quote,
					"”"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 h-6",
				children: truncated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onOpen(t),
					className: "border-b border-foreground/40 pb-0.5 text-[0.68rem] uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:border-foreground",
					children: "Show more"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-auto border-t border-border pt-5 text-[0.7rem] uppercase tracking-[0.22em] text-foreground",
				children: t.name
			})
		]
	});
}
function Testimonials() {
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-secondary/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Testimonials"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl",
						children: "What clients say"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base",
						children: "Kind words from brides and clients Anita has worked with."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "-mx-5 mt-12 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:mt-14 md:grid md:snap-none md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 xl:grid-cols-4",
				children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: i * 90,
					className: "w-[84%] flex-none snap-center sm:w-[60%] md:w-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialCard, {
						t,
						onOpen: setActive
					})
				}, t.name + i))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: !!active,
			onOpenChange: (o) => !o && setActive(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "max-h-[90svh] max-w-xl overflow-y-auto border-0 bg-background p-8 md:p-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
					className: "sr-only",
					children: ["Review by ", active?.name]
				}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm tracking-[0.3em] text-champagne",
						"aria-hidden": true,
						children: "★".repeat(active.rating)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 font-serif text-xl font-light italic leading-relaxed text-foreground",
						children: [
							"“",
							active.quote,
							"”"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 border-t border-border pt-5 text-[0.7rem] uppercase tracking-[0.22em] text-foreground",
						children: active.name
					})
				] })]
			})
		})]
	});
}
var INSTA = [
	{
		src: image2_default,
		alt: "Bridal makeup look on Instagram"
	},
	{
		src: image5_default,
		alt: "Beauty portrait on Instagram"
	},
	{
		src: image6_default,
		alt: "Eye makeup detail on Instagram"
	},
	{
		src: image4_default,
		alt: "Event makeup look on Instagram"
	},
	{
		src: image10_default,
		alt: "Beauty detail on Instagram"
	},
	{
		src: image7_default,
		alt: "Photoshoot look on Instagram"
	}
];
function Instagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Instagram"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl",
						children: "More from Anita"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base",
						children: "Discover more looks, beauty inspiration and behind-the-scenes moments on Instagram."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-3 md:gap-4",
				children: INSTA.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * 80,
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: INSTAGRAM,
						target: "_blank",
						rel: "noreferrer noopener",
						className: "block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.src,
							alt: s.alt,
							loading: "lazy",
							className: "aspect-square w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.05]"
						})
					})
				}, s.alt))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: INSTAGRAM,
				target: "_blank",
				rel: "noreferrer noopener",
				className: "mt-12 inline-block border-b border-foreground pb-1 text-[0.7rem] uppercase tracking-[0.22em] text-foreground transition-opacity duration-300 hover:opacity-60",
				children: "Discover Instagram"
			})
		]
	});
}
var FAQS = [
	{
		q: "What services does Anita offer?",
		a: "Anita offers professional makeup for bridal makeup, events, special occasions and photoshoots."
	},
	{
		q: "How can I request an appointment?",
		a: "Use the enquiry form, message Anita on WhatsApp or contact her directly through Instagram."
	},
	{
		q: "Can I bring my own ideas and inspiration?",
		a: "Yes. Your personal ideas and inspiration can be considered when planning your look."
	},
	{
		q: "Is the makeup long-lasting?",
		a: "Anita places special emphasis on a flawless and long-lasting finish."
	},
	{
		q: "Where is Anita's service available?",
		a: "Anita works as a makeup artist in London. Please enquire directly for availability and location details."
	},
	{
		q: "How much do your services cost?",
		a: "Prices depend on the service and occasion. Please send an enquiry for personalised information."
	},
	{
		q: "Do you offer bridal makeup?",
		a: "Yes. Bridal makeup is one of the services offered."
	},
	{
		q: "How can I book Anita?",
		a: "Send an enquiry through the contact form, message Anita on WhatsApp or contact her directly through Instagram."
	}
];
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "bg-secondary/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] gap-10 px-5 py-20 md:px-10 md:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "FAQ"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl",
				children: "Frequently asked questions"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "w-full",
					children: FAQS.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `item-${i}`,
						className: "border-b border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "py-5 text-left font-serif text-lg font-light text-foreground hover:no-underline md:py-6 md:text-xl",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "pb-6 text-sm leading-[1.9] text-muted-foreground",
							children: f.a
						})]
					}, f.q))
				})
			})]
		})
	});
}
var inputClass = "w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground focus-visible:ring-0 sm:text-sm";
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const formRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-2 lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image5_default,
				alt: "Beauty portrait with flawless makeup by Anita",
				loading: "lazy",
				className: "aspect-[4/5] w-full object-cover"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 120,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Enquiry"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl",
						children: "Let's plan your look."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base",
						children: "Do you have a special occasion, are you planning your wedding or do you want a professional look for a photoshoot? Tell me more about your wishes."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						ref: formRef,
						className: "mt-10 space-y-8 md:mt-12",
						onSubmit: (e) => {
							e.preventDefault();
							setSent(true);
							formRef.current?.reset();
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-8 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "name",
										className: "eyebrow block",
										children: "Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "name",
										name: "name",
										required: true,
										className: cn(inputClass, "mt-2")
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "email",
										className: "eyebrow block",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "email",
										name: "email",
										type: "email",
										required: true,
										className: cn(inputClass, "mt-2")
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "phone",
										className: "eyebrow block",
										children: "Phone"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "phone",
										name: "phone",
										type: "tel",
										className: cn(inputClass, "mt-2")
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "date",
										className: "eyebrow block",
										children: "Date"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "date",
										name: "date",
										type: "date",
										className: cn(inputClass, "mt-2")
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "occasion",
										className: "eyebrow block",
										children: "Occasion"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "occasion",
										name: "occasion",
										defaultValue: "Bridal makeup",
										className: cn(inputClass, "mt-2"),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Bridal makeup" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Event" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Special occasion" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Photoshoot" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other" })
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "location",
										className: "eyebrow block",
										children: "Location"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "location",
										name: "location",
										className: cn(inputClass, "mt-2")
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "message",
								className: "eyebrow block",
								children: "Tell me more about your wishes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "message",
								name: "message",
								rows: 4,
								className: cn(inputClass, "mt-2")
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "w-full bg-foreground px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity duration-300 hover:opacity-85 sm:w-auto",
								children: "Send an enquiry"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"aria-live": "polite",
								className: "text-sm text-muted-foreground",
								children: sent && "Thank you for your enquiry. I will get back to you as soon as possible."
							})
						]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mt-20 border-t border-border pt-12 md:mt-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Direct contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 font-serif text-3xl font-light text-foreground md:text-4xl",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
						className: "not-italic",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-foreground",
								children: "Makeup Artist Anita"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "London"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: WHATSAPP_URL,
									target: "_blank",
									rel: "noreferrer noopener",
									className: "border-b border-foreground/40 pb-0.5 text-foreground transition-colors hover:border-foreground",
									children: "WhatsApp — message Anita"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: INSTAGRAM,
									target: "_blank",
									rel: "noreferrer noopener",
									className: "border-b border-foreground/40 pb-0.5 text-foreground transition-colors hover:border-foreground",
									children: "Instagram — @makeupartistAnita"
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "inline-block self-start border border-foreground px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-primary-foreground md:self-auto",
						children: "Send an enquiry"
					})]
				})
			]
		})]
	});
}
function FinalCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image11_default,
				alt: "Elegant beauty look by makeup artist Anita",
				loading: "lazy",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[#28221F]/72" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-3xl px-5 py-24 text-center md:px-10 md:py-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl font-light leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]",
						children: "Ready for your perfect look?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-8 max-w-xl text-sm leading-[1.9] text-white/80 md:text-base",
						children: "Let's create a makeup look together that makes you feel beautiful, confident and entirely yourself."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "w-full bg-white px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:bg-[#E9DED2] sm:w-auto",
							children: "Send an enquiry"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#portfolio",
							className: "w-full border border-white/60 px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-white/10 sm:w-auto",
							children: "View the portfolio"
						})]
					})
				] })
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-[#28221F] text-[#E9DED2]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 sm:grid-cols-2 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: Logo_default,
							alt: "Anita Makeup Artist logo",
							className: "h-12 w-auto object-contain brightness-0 invert"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[0.65rem] uppercase tracking-[0.26em] text-[#E9DED2]/60",
							children: "Makeup Artist • London"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 font-serif text-lg font-light italic text-[#D5C2AE]",
							children: "Flawless • Modern • Tailored"
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Footer Navigation",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.65rem] uppercase tracking-[0.26em] text-[#E9DED2]/60",
							children: "Navigation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3",
							children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: n.href,
								className: "text-sm text-[#E9DED2]/85 transition-opacity hover:opacity-60",
								children: n.label
							}) }, n.href))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.65rem] uppercase tracking-[0.26em] text-[#E9DED2]/60",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-3 text-sm text-[#E9DED2]/85",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: WHATSAPP_URL,
									target: "_blank",
									rel: "noreferrer noopener",
									className: "transition-opacity hover:opacity-60",
									children: "WhatsApp — message Anita"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: INSTAGRAM,
									target: "_blank",
									rel: "noreferrer noopener",
									className: "transition-opacity hover:opacity-60",
									children: "Instagram — @makeupartistAnita"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "London" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-8 space-y-3 text-sm text-[#E9DED2]/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									className: "transition-opacity hover:opacity-100",
									children: "Privacy policy"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									className: "transition-opacity hover:opacity-100",
									children: "Legal notice"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									className: "transition-opacity hover:opacity-100",
									children: "Cookie policy"
								}) })
							]
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-16 border-t border-[#E9DED2]/15 pt-8 text-[0.65rem] uppercase tracking-[0.26em] text-[#E9DED2]/50",
				children: "© Anita"
			})]
		})
	});
}
function WhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: WHATSAPP_URL,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat with Anita on WhatsApp",
		className: "fixed bottom-5 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 md:bottom-8 md:right-8 md:h-16 md:w-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-60"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40 [animation-delay:600ms]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 32 32",
				className: "relative h-7 w-7 md:h-8 md:w-8",
				fill: "currentColor",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.003 3C8.83 3 3 8.83 3 16c0 2.29.6 4.52 1.74 6.49L3 29l6.68-1.72A12.94 12.94 0 0 0 16.003 29C23.17 29 29 23.17 29 16S23.17 3 16.003 3zm0 23.7a10.7 10.7 0 0 1-5.46-1.5l-.39-.23-3.96 1.02 1.06-3.86-.25-.4A10.7 10.7 0 1 1 16.003 26.7zm5.87-8c-.32-.16-1.9-.94-2.2-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.9-.78 2.16-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37z" })
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-x-clip bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Statement, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signature, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reels, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bridal, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Featured, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Why, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {})
		]
	});
}
//#endregion
export { Home as component };
