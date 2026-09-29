import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import bridal from "@/assets/bridal.png";
import hero from "@/assets/image.webp";
import img2 from "@/assets/image2.png";
import img3 from "@/assets/image3.png";
import img4 from "@/assets/image4.png";
import img5 from "@/assets/image5.png";
import img6 from "@/assets/image6.png";
import img7 from "@/assets/image7.png";
import img8 from "@/assets/image8.png";
import img9 from "@/assets/image9.png";
import img10 from "@/assets/image10.png";
import artist from "@/assets/artist.png";
import image11 from "@/assets/image11.png";
import bridal1 from "@/assets/bridal1.png";
import bridal11 from "@/assets/bridal11.png";
import bridal1212 from "@/assets/bridal1212.png";
import logo from "@/assets/Logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anita | Makeup Artist & Bridal Makeup in London" },
      {
        name: "description",
        content:
          "Professional, flawless and long-lasting makeup for bridal makeup, events and photoshoots in London.",
      },
      {
        property: "og:title",
        content: "Anita | Makeup Artist & Bridal Makeup in London",
      },
      {
        property: "og:description",
        content:
          "Flawless, long-lasting makeup for brides, special occasions, events and photoshoots in London.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "Makeup Artist London, bridal makeup London, bride makeup London, event makeup London, photoshoot makeup London",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "GemsBeautyLondon",
          description:
            "Professional, flawless and long-lasting makeup for bridal makeup, events and photoshoots in London.",
          areaServed: { "@type": "City", name: "London" },
          address: {
            "@type": "PostalAddress",
            addressLocality: "London",
            addressCountry: "GB",
          },
          sameAs: ["https://instagram.com/makeupartistAnita"],
          makesOffer: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bridal makeup" } },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Events & special occasions" },
            },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Photoshoots" } },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const NAV = [
  { label: "Home", href: "#start" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Bridal Makeup", href: "#bridal" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const INSTAGRAM = "https://instagram.com/makeupartistAnita";

// Digits only: country code + number, no "+", spaces or leading 0. Example: 447123456789
const WHATSAPP_NUMBER = "+44 7460 285854";
const WHATSAPP_MESSAGE = "Hello Anita, I'd like to enquire about your makeup services.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

type Shot = {
  src: string;
  alt: string;
  cat: "Bridal" | "Makeup" | "Events";
  ratio: string;
};

const GALLERY: Shot[] = [
  {
    src: img2,
    alt: "Bridal makeup by Anita with a natural, flawless finish",
    cat: "Bridal",
    ratio: "3/4",
  },
  {
    src: img6,
    alt: "Elegant eye makeup close-up",
    cat: "Makeup",
    ratio: "3/4",
  },
  {
    src: img5,
    alt: "Beauty portrait with soft light and polished skin finish",
    cat: "Makeup",
    ratio: "1/1",
  },
  {
    src: img7,
    alt: "Editorial beauty look for a photoshoot in London",
    cat: "Makeup",
    ratio: "3/4",
  },
  {
    src: img4,
    alt: "Makeup look for a special occasion",
    cat: "Events",
    ratio: "3/4",
  },
  {
    src: img9,
    alt: "Bridal makeup with a long-lasting, harmonious finish",
    cat: "Bridal",
    ratio: "3/4",
  },
  {
    src: img8,
    alt: "Close-up of skin and complexion after makeup",
    cat: "Makeup",
    ratio: "1/1",
  },
  {
    src: img10,
    alt: "Portrait with defined eyes and soft contouring",
    cat: "Makeup",
    ratio: "3/4",
  },
  {
    src: img3,
    alt: "Elegant evening makeup look for events",
    cat: "Events",
    ratio: "3/4",
  },
];

const CATS = ["All", "Bridal", "Makeup", "Events"] as const;

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-5 md:h-20 md:px-10">
        <a href="#start" aria-label="Anita, makeup artist in London, home" className="flex items-center">
          <img
            src={logo}
            alt="Anita Makeup Artist logo"
            className={cn(
              "h-9 w-auto object-contain transition-[filter] duration-500 sm:h-10 md:h-12",
              scrolled || open ? "brightness-0" : "brightness-0 invert",
            )}
          />
        </a>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className={cn(
                    "text-[0.7rem] uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-60",
                    scrolled ? "text-foreground" : "text-white",
                  )}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={cn(
              "hidden border px-6 py-3 text-[0.7rem] uppercase tracking-[0.2em] transition-colors duration-300 md:inline-block",
              scrolled
                ? "border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground"
                : "border-white/70 text-white hover:bg-white hover:text-foreground",
            )}
          >
            Send an inquiry
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden",
              scrolled || open ? "text-foreground" : "text-white",
            )}
          >
            <span
              className={cn(
                "block h-px w-6 bg-current transition-transform duration-300",
                open && "translate-y-[3px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-current transition-transform duration-300",
                open && "-translate-y-[3px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-border bg-background lg:hidden"
        >
          <ul className="mx-auto max-w-[1400px] px-5 py-4">
            {NAV.map((n) => (
              <li key={n.href} className="border-b border-border/60 last:border-0">
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-serif text-2xl text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

const REELS_DATA = [
  {
    id: 1,
    videoUrl: "/reel1.mp4",
    url: "https://www.instagram.com/reel/REEL_ID_1/",
    handle: "@makeupartistAnita",
  },
  {
    id: 2,
    videoUrl: "/reel2.mp4",
    url: "https://www.instagram.com/reel/REEL_ID_2/",
    handle: "@makeupartistAnita",
  },
  {
    id: 3,
    videoUrl: "/reel3.mp4",
    url: "https://www.instagram.com/reel/REEL_ID_3/",
    handle: "@makeupartistAnita",
  },
];

function Reels() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isMuted, setIsMuted] = useState(true);

  const loadAndPlayVideo = (video: HTMLVideoElement) => {
    if (!video) return;

    const dataSrc = video.getAttribute("data-src");

    if (dataSrc && !video.src) {
      video.src = dataSrc;
      video.load();
    }

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.warn("Autoplay interrupted:", error);
      });
    }
  };

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const videos = videoRefs.current.filter((el): el is HTMLVideoElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;

          if (entry.isIntersecting) {
            loadAndPlayVideo(video);
          } else {
            if (video && !video.paused) {
              video.pause();
            }
          }
        });
      },
      { threshold: 0.35 },
    );

    videos.forEach((video) => observer.observe(video));

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleSound = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const nextMuteState = !isMuted;
    setIsMuted(nextMuteState);
    videoRefs.current.forEach((video) => {
      if (video) video.muted = nextMuteState;
    });
  };

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Instagram Reels</p>
        <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
          Beauty in Motion
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-[1.9] text-muted-foreground md:text-base">
          Follow Anita on Instagram for daily inspiration, transformations and
          behind-the-scenes moments.
        </p>
      </Reveal>

      <div className="mx-auto mt-12 grid grid-cols-3 gap-2 sm:gap-4 md:mt-14 md:gap-6">
        {REELS_DATA.map((reel, index) => (
          <Reveal key={reel.id} delay={index * 90}>
            <a
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[9/16] w-full overflow-hidden bg-[#28221F] shadow-lg transition-all duration-500 hover:-translate-y-1.5"
            >
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                data-src={reel.videoUrl}
                className="h-full w-full object-cover"
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
              />

              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-[#28221F]/80 via-[#28221F]/10 to-transparent p-2 opacity-90 transition-opacity duration-300 group-hover:opacity-100 sm:p-4 md:p-6">
                <span className="hidden text-center text-[0.65rem] font-medium uppercase tracking-[0.22em] text-white/90 sm:inline md:text-[0.7rem]">
                  {reel.handle}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center justify-center gap-6">
        <button
          onClick={toggleSound}
          type="button"
          className="border border-foreground/20 bg-transparent px-5 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:bg-foreground/5 active:scale-95"
        >
          {isMuted ? "Unmute reels" : "Mute reels"}
        </button>

        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-foreground px-8 py-4 text-center text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity duration-300 hover:opacity-85"
        >
          View on Instagram
        </a>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section id="start" className="relative min-h-[100svh] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#28221F]/85 via-[#28221F]/35 to-[#28221F]/40" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pb-28 pt-32 md:px-10 md:pb-24">
        <div className="max-w-3xl">
          <p className="fade-up eyebrow text-white/75">Makeup Artist • London</p>
          <h1
            className="fade-up mt-6 font-serif text-[2.4rem] font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Your beauty.
            <br />
            Perfectly brought to life.
          </h1>
          <p
            className="fade-up mt-7 max-w-xl text-sm leading-relaxed text-white/80 md:text-base"
            style={{ animationDelay: "240ms" }}
          >
            Flawless, long-lasting makeup for brides, special occasions, events and photoshoots.
          </p>
          <div
            className="fade-up mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "340ms" }}
          >
            <a
              href="#contact"
              className="bg-white px-8 py-4 text-center text-[0.7rem] uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:bg-[#E9DED2]"
            >
              Send an inquiry
            </a>
            <a
              href="#portfolio"
              className="border border-white/60 px-8 py-4 text-center text-[0.7rem] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-white/10"
            >
              Explore the portfolio
            </a>
          </div>
          <p
            className="fade-up mt-8 text-[0.65rem] uppercase tracking-[0.2em] text-white/60 sm:text-[0.7rem] sm:tracking-[0.24em]"
            style={{ animationDelay: "440ms" }}
          >
            Bridal makeup • Events • Photoshoots
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-white/60">Scroll</span>
        <span className="h-12 w-px bg-gradient-to-b from-white/70 to-transparent" />
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-36">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">Beauty Statement</p>
          <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl lg:text-[3.4rem]">
            Beauty that feels like you.
          </h2>
          <p className="mt-8 max-w-xl text-sm leading-[1.9] text-muted-foreground md:text-base">
            The perfect makeup look should enhance your natural beauty, reflect your personality and
            make you feel completely at ease.
          </p>
          <p className="mt-6 max-w-xl text-sm leading-[1.9] text-muted-foreground md:text-base">
            A natural glow, elegant definition and a flawless finish, tailored to your individual
            wishes. For long-lasting results and confidence you can see.
          </p>
          <div className="mt-10 h-px w-24 bg-champagne" />
        </Reveal>
        <Reveal delay={120} className="relative">
          <img
            src={img6}
            alt="Close-up of elegant eye makeup by Anita"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-secondary/60">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 md:px-10 md:py-32 lg:grid-cols-2 lg:items-center lg:gap-24">
        <Reveal>
          <img
            src={artist}
            alt="Portrait of makeup artist Anita in London"
            loading="lazy"
            className="aspect-[3/4] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">About Anita</p>
          <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
            Makeup with attention to detail.
          </h2>
          <p className="mt-8 text-sm leading-[1.9] text-muted-foreground md:text-base">
            Anita is a professional makeup artist in London. Her work begins with a personal
            consultation: she listens, understands your wishes and creates a look that suits you and
            your occasion.
          </p>
          <p className="mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base">
            Precise application, a high-quality finish and a modern beauty aesthetic define every look.
            The result is makeup that enhances rather than conceals, giving you confidence for your
            moment.
          </p>
          <a
            href="#services"
            className="mt-10 inline-block border-b border-foreground pb-1 text-[0.7rem] uppercase tracking-[0.22em] text-foreground transition-opacity duration-300 hover:opacity-60"
          >
            More about Anita
          </a>
        </Reveal>
      </div>
    </section>
  );
}

const PRINCIPLES = [
  {
    no: "01",
    title: "Flawless",
    text: "Precise, harmonious makeup with a polished and elegant finish.",
  },
  {
    no: "02",
    title: "Modern",
    text: "Contemporary beauty aesthetics tailored to your personal style.",
  },
  {
    no: "03",
    title: "Long-lasting",
    text: "A look that stays with you beautifully for hours.",
  },
  {
    no: "04",
    title: "Personal",
    text: "Your makeup is tailored to your wishes, occasion and personality.",
  },
];

function Signature() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Signature Style</p>
        <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
          The Anita Look
        </h2>
        <p className="mt-5 font-serif text-xl font-light italic text-champagne sm:text-2xl md:text-3xl">
          Flawless. Modern. Long-lasting.
        </p>
      </Reveal>

      {/* 2 x 2 on phones, 4 across from md up */}
      <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 md:mt-16 md:grid-cols-4 md:gap-10">
        {PRINCIPLES.map((p, i) => (
          <Reveal key={p.no} delay={i * 90} className="border-t border-border pt-5 md:pt-6">
            <span className="font-serif text-sm tracking-[0.2em] text-champagne">{p.no}</span>
            <h3 className="mt-3 text-[0.72rem] uppercase tracking-[0.22em] text-foreground md:mt-4 md:text-[0.75rem] md:tracking-[0.24em]">
              {p.title}
            </h3>
            <p className="mt-3 text-[0.82rem] leading-[1.75] text-muted-foreground md:mt-4 md:text-sm md:leading-[1.85]">
              {p.text}
            </p>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-3 md:mt-20">
        {[
          { src: img3, alt: "Editorial beauty look with soft light" },
          { src: img10, alt: "Defined eye makeup close-up" },
          { src: img9, alt: "Bridal makeup with a natural finish" },
        ].map((s, i) => (
          <Reveal key={s.src} delay={i * 90} className="overflow-hidden">
            <img
              src={s.src}
              alt={s.alt}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const SERVICES = [
  {
    src: img5,
    title: "Bridal Makeup",
    text: "An elegant, personalised bridal look that enhances your natural beauty and lets you shine on your special day.",
    slug: "bridal",
    alt: "Bridal makeup by makeup artist Anita",
  },
  {
    src: img4,
    title: "Events & Special Occasions",
    text: "A stylish makeup look for special events, celebrations and moments when you want to feel completely beautiful.",
    slug: "events",
    alt: "Event makeup for special occasions",
  },
  {
    src: bridal,
    title: "THE “VIP” Experience",
    text: "Luxury all-day bridal glam with a pre-styled wig, makeup trial, 10 hours of touch-ups, guest glam, and venue travel.",
    slug: "vip",
    alt: "THE “VIP” Experience",
  },
];

function Services() {
  return (
    <section id="services" className="bg-secondary/60">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Services</p>
          <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
            Services
          </h2>
          <p className="mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base">
            Professional makeup for special moments, important occasions and unforgettable images.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-8">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} as="article" className="group">
              <div className="overflow-hidden">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="mt-7 font-serif text-2xl font-light text-foreground">{s.title}</h3>
              <p className="mt-4 text-sm leading-[1.85] text-muted-foreground">{s.text}</p>
              <Link
                to="/services/$service"
                params={{ service: s.slug }}
                className="mt-6 inline-block border-b border-foreground/40 pb-1 text-[0.68rem] uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:border-foreground"
              >
                Learn more
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const BRIDAL_STEPS = [
  {
    no: "01",
    title: "Getting to know you",
    text: "We talk about your wishes, your style and the look you envision for your special day.",
  },
  {
    no: "02",
    title: "Styling",
    text: "Your makeup is tailored to your features, your style and your occasion.",
  },
  {
    no: "03",
    title: "Your moment",
    text: "You feel beautiful, confident and completely yourself, ready for your big moment.",
  },
];

function Bridal() {
  return (
    <section id="bridal" className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
        <Reveal>
          <img
            src={bridal11}
            alt="Bride with flawless, long-lasting makeup by Anita"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">The Bridal Experience</p>
          <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
            For your most special moment.
          </h2>
          <p className="mt-8 text-sm leading-[1.9] text-muted-foreground md:text-base">
            Your wedding day should feel completely right. Your makeup should reflect your personality,
            look beautiful and carry you through every special moment.
          </p>
          <ol className="mt-12 space-y-8">
            {BRIDAL_STEPS.map((s) => (
              <li key={s.no} className="border-t border-border pt-6">
                <div className="flex items-baseline gap-5">
                  <span className="font-serif text-sm tracking-[0.2em] text-champagne">{s.no}</span>
                  <h3 className="text-[0.72rem] uppercase tracking-[0.24em] text-foreground">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-[1.85] text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
          <Link
            to="/services/$service"
            params={{ service: "bridal" }}
            className="mt-12 inline-block w-full bg-foreground px-8 py-4 text-center text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity duration-300 hover:opacity-85 sm:w-auto"
          >
            Enquire about bridal makeup
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Portfolio() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [active, setActive] = useState<Shot | null>(null);
  const shots = useMemo(
    () => (cat === "All" ? GALLERY : GALLERY.filter((g) => g.cat === cat)),
    [cat],
  );

  return (
    <section id="portfolio" className="bg-secondary/60">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Portfolio</p>
          <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
            Portfolio
          </h2>
          <p className="mt-5 font-serif text-xl font-light italic text-muted-foreground sm:text-2xl">
            A glimpse into my looks.
          </p>
        </Reveal>

        <div
          role="tablist"
          aria-label="Portfolio categories"
          className="mt-10 flex flex-wrap gap-x-7 gap-y-4 md:mt-12 md:gap-x-8"
        >
          {CATS.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={cn(
                "pb-1 text-[0.7rem] uppercase tracking-[0.22em] transition-colors duration-300",
                cat === c
                  ? "border-b border-foreground text-foreground"
                  : "border-b border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-14 hidden gap-5 md:block md:columns-2 lg:columns-3">
          {shots.map((s, i) => (
            <Reveal key={s.src} delay={(i % 3) * 80} className="mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(s)}
                className="group block w-full overflow-hidden"
                aria-label={`${s.alt} - Enlarge image`}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  style={{ aspectRatio: s.ratio }}
                  className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                />
              </button>
            </Reveal>
          ))}
        </div>

        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:hidden">
          {shots.map((s) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setActive(s)}
              className="w-[78%] flex-none snap-center"
              aria-label={`${s.alt} - Enlarge image`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[92svh] max-w-3xl overflow-auto border-0 bg-background p-2 sm:p-3">
          <DialogTitle className="sr-only">{active?.alt ?? "Portfolio image"}</DialogTitle>
          {active && (
            <img src={active.src} alt={active.alt} className="h-auto w-full object-contain" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Featured() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={bridal1}
        alt="Flawless beauty look by Anita in close-up"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#28221F]/60" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-44">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-white/70">The Anita Look</p>
          <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-[3.4rem]">
            Flawless beauty, interpreted with a modern eye.
          </h2>
          <p className="mt-8 max-w-xl text-sm leading-[1.9] text-white/80 md:text-base">
            A harmonious blend of precision, elegance and personality, for a look that feels entirely
            like you.
          </p>
          <a
            href="#portfolio"
            className="mt-10 inline-block border border-white/60 px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-white hover:text-foreground"
          >
            View the portfolio
          </a>
        </Reveal>
      </div>
    </section>
  );
}

const WHY = [
  {
    title: "Personal",
    text: "Your wishes and personal style are at the heart of every look.",
  },
  { title: "Flawless", text: "A precise finish with special attention to detail." },
  { title: "Long-lasting", text: "A beauty look that stays with you for hours." },
  {
    title: "Tailored",
    text: "Every look is created for you, your occasion and your desired aesthetic.",
  },
];

function Why() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Why Anita</p>
        <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
          Why Anita?
        </h2>
      </Reveal>
      <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:mt-16 sm:gap-x-10 sm:gap-y-10 md:gap-x-12 md:gap-y-12 lg:grid-cols-4">
        {WHY.map((w, i) => (
          <Reveal key={w.title} delay={i * 90}>
            <span aria-hidden className="block h-px w-8 bg-champagne sm:w-10" />
            <dt className="mt-4 text-[0.68rem] uppercase tracking-[0.16em] text-foreground sm:mt-6 sm:text-[0.72rem] sm:tracking-[0.24em]">
              {w.title}
            </dt>
            <dd className="mt-3 text-[0.8rem] leading-[1.7] text-muted-foreground sm:mt-4 sm:text-sm sm:leading-[1.85]">
              {w.text}
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}

const TESTIMONIALS = [
  {
    name: "Lerato",
    quote:
      "Anita is a bomb ass MUA who knows her job inside out and makes you feel like a queen! From start to finish your professionalism has been exceptional! Really enjoyed my trial and the positive vibes we had throughout the journey! Defo 5 star rating. Would highly recommend! I look forward to the next event to get dolled up for!!!",
    rating: 5,
  },
  {
    name: "Carlene",
    quote:
      "I loved working with Anita. Her vibe is pure and effortless. Her work is amazing. Very professional and cutesy. 5 stars for you babygirl.",
    rating: 5,
  },
  {
    name: "Denise",
    quote:
      "Thank you so much for making my day so special, Anita. I've never had so many compliments in all my life! 🥰",
    rating: 5,
  },
  {
    name: "Happy client",
    quote:
      "Thanks soo much Anita!! Honestly! My makeup looked so flawless and it stayed for the entire night without me looking oily or anything. You're my makeup artist now 😂💯",
    rating: 5,
  },
];

type Testimonial = (typeof TESTIMONIALS)[number];

function TestimonialCard({ t, onOpen }: { t: Testimonial; onOpen: (t: Testimonial) => void }) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [truncated, setTruncated] = useState(false);

  useEffect(() => {
    const check = () => {
      const el = textRef.current;
      if (el) setTruncated(el.scrollHeight > el.clientHeight + 1);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="flex h-full flex-col border border-border bg-background p-7 md:p-8">
      <p
        className="text-sm tracking-[0.3em] text-champagne"
        aria-label={`${t.rating} out of 5 stars`}
      >
        {"★".repeat(t.rating)}
      </p>

      {/* Fixed height so every card is the same size; long reviews are clipped */}
      <p
        ref={textRef}
        className="mt-6 line-clamp-6 h-[9.5rem] font-serif text-lg font-light italic leading-relaxed text-foreground md:text-[1.05rem] xl:text-lg"
      >
        “{t.quote}”
      </p>

      <div className="mt-3 h-6">
        {truncated && (
          <button
            type="button"
            onClick={() => onOpen(t)}
            className="border-b border-foreground/40 pb-0.5 text-[0.68rem] uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:border-foreground"
          >
            Show more
          </button>
        )}
      </div>

      <p className="mt-auto border-t border-border pt-5 text-[0.7rem] uppercase tracking-[0.22em] text-foreground">
        {t.name}
      </p>
    </div>
  );
}

function Testimonials() {
  const [active, setActive] = useState<Testimonial | null>(null);

  return (
    <section className="bg-secondary/60">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
            What clients say
          </h2>
          <p className="mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base">
            Kind words from brides and clients Anita has worked with.
          </p>
        </Reveal>

        <ul className="-mx-5 mt-12 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:mt-14 md:grid md:snap-none md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 xl:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name + i}
              as="li"
              delay={i * 90}
              className="w-[84%] flex-none snap-center sm:w-[60%] md:w-auto"
            >
              <TestimonialCard t={t} onOpen={setActive} />
            </Reveal>
          ))}
        </ul>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[90svh] max-w-xl overflow-y-auto border-0 bg-background p-8 md:p-10">
          <DialogTitle className="sr-only">Review by {active?.name}</DialogTitle>
          {active && (
            <div>
              <p className="text-sm tracking-[0.3em] text-champagne" aria-hidden>
                {"★".repeat(active.rating)}
              </p>
              <p className="mt-6 font-serif text-xl font-light italic leading-relaxed text-foreground">
                “{active.quote}”
              </p>
              <p className="mt-8 border-t border-border pt-5 text-[0.7rem] uppercase tracking-[0.22em] text-foreground">
                {active.name}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

const INSTA = [
  { src: img2, alt: "Bridal makeup look on Instagram" },
  { src: img5, alt: "Beauty portrait on Instagram" },
  { src: img6, alt: "Eye makeup detail on Instagram" },
  { src: img4, alt: "Event makeup look on Instagram" },
  { src: img10, alt: "Beauty detail on Instagram" },
  { src: img7, alt: "Photoshoot look on Instagram" },
];

function Instagram() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Instagram</p>
        <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
          More from Anita
        </h2>
        <p className="mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base">
          Discover more looks, beauty inspiration and behind-the-scenes moments on Instagram.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-3 md:gap-4">
        {INSTA.map((s, i) => (
          <Reveal key={s.alt} delay={(i % 3) * 80} className="overflow-hidden">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer noopener" className="block">
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.05]"
              />
            </a>
          </Reveal>
        ))}
      </div>

      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-12 inline-block border-b border-foreground pb-1 text-[0.7rem] uppercase tracking-[0.22em] text-foreground transition-opacity duration-300 hover:opacity-60"
      >
        Discover Instagram
      </a>
    </section>
  );
}

const FAQS = [
  {
    q: "What services does Anita offer?",
    a: "Anita offers professional makeup for bridal makeup, events, special occasions and photoshoots.",
  },
  {
    q: "How can I request an appointment?",
    a: "Use the enquiry form, message Anita on WhatsApp or contact her directly through Instagram.",
  },
  {
    q: "Can I bring my own ideas and inspiration?",
    a: "Yes. Your personal ideas and inspiration can be considered when planning your look.",
  },
  {
    q: "Is the makeup long-lasting?",
    a: "Anita places special emphasis on a flawless and long-lasting finish.",
  },
  {
    q: "Where is Anita's service available?",
    a: "Anita works as a makeup artist in London. Please enquire directly for availability and location details.",
  },
  {
    q: "How much do your services cost?",
    a: "Prices depend on the service and occasion. Please send an enquiry for personalised information.",
  },
  {
    q: "Do you offer bridal makeup?",
    a: "Yes. Bridal makeup is one of the services offered.",
  },
  {
    q: "How can I book Anita?",
    a: "Send an enquiry through the contact form, message Anita on WhatsApp or contact her directly through Instagram.",
  },
];

function Faq() {
  return (
    <section id="faq" className="bg-secondary/60">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 md:px-10 md:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
            Frequently asked questions
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="py-5 text-left font-serif text-lg font-light text-foreground hover:no-underline md:py-6 md:text-xl">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-[1.9] text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

const inputClass =
  "w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground focus-visible:ring-0 sm:text-sm";

function Contact() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <img
            src={img5}
            alt="Beauty portrait with flawless makeup by Anita"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">Enquiry</p>
          <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
            Let's plan your look.
          </h2>
          <p className="mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base">
            Do you have a special occasion, are you planning your wedding or do you want a
            professional look for a photoshoot? Tell me more about your wishes.
          </p>

          <form
            ref={formRef}
            className="mt-10 space-y-8 md:mt-12"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              formRef.current?.reset();
            }}
          >
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="eyebrow block">
                  Name
                </label>
                <input id="name" name="name" required className={cn(inputClass, "mt-2")} />
              </div>
              <div>
                <label htmlFor="email" className="eyebrow block">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={cn(inputClass, "mt-2")}
                />
              </div>
              <div>
                <label htmlFor="phone" className="eyebrow block">
                  Phone
                </label>
                <input id="phone" name="phone" type="tel" className={cn(inputClass, "mt-2")} />
              </div>
              <div>
                <label htmlFor="date" className="eyebrow block">
                  Date
                </label>
                <input id="date" name="date" type="date" className={cn(inputClass, "mt-2")} />
              </div>
              <div>
                <label htmlFor="occasion" className="eyebrow block">
                  Occasion
                </label>
                <select
                  id="occasion"
                  name="occasion"
                  defaultValue="Bridal makeup"
                  className={cn(inputClass, "mt-2")}
                >
                  <option>Bridal makeup</option>
                  <option>Event</option>
                  <option>Special occasion</option>
                  <option>Photoshoot</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="location" className="eyebrow block">
                  Location
                </label>
                <input id="location" name="location" className={cn(inputClass, "mt-2")} />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="eyebrow block">
                Tell me more about your wishes
              </label>
              <textarea id="message" name="message" rows={4} className={cn(inputClass, "mt-2")} />
            </div>

            <button
              type="submit"
              className="w-full bg-foreground px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity duration-300 hover:opacity-85 sm:w-auto"
            >
              Send an enquiry
            </button>

            <p aria-live="polite" className="text-sm text-muted-foreground">
              {sent && "Thank you for your enquiry. I will get back to you as soon as possible."}
            </p>
          </form>
        </Reveal>
      </div>

      <Reveal className="mt-20 border-t border-border pt-12 md:mt-24">
        <p className="eyebrow">Direct contact</p>
        <h2 className="mt-5 font-serif text-3xl font-light text-foreground md:text-4xl">Contact</h2>
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <address className="not-italic">
            <p className="text-sm text-foreground">Makeup Artist Anita</p>
            <p className="mt-2 text-sm text-muted-foreground">London</p>
            <p className="mt-2 text-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="border-b border-foreground/40 pb-0.5 text-foreground transition-colors hover:border-foreground"
              >
                WhatsApp — message Anita
              </a>
            </p>
            <p className="mt-2 text-sm">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer noopener"
                className="border-b border-foreground/40 pb-0.5 text-foreground transition-colors hover:border-foreground"
              >
                Instagram — @makeupartistAnita
              </a>
            </p>
          </address>
          <a
            href="#contact"
            className="inline-block self-start border border-foreground px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-primary-foreground md:self-auto"
          >
            Send an enquiry
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image11}
        alt="Elegant beauty look by makeup artist Anita"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#28221F]/72" />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center md:px-10 md:py-40">
        <Reveal>
          <h2 className="font-serif text-3xl font-light leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            Ready for your perfect look?
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-[1.9] text-white/80 md:text-base">
            Let's create a makeup look together that makes you feel beautiful, confident and entirely
            yourself.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="w-full bg-white px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:bg-[#E9DED2] sm:w-auto"
            >
              Send an enquiry
            </a>
            <a
              href="#portfolio"
              className="w-full border border-white/60 px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-white/10 sm:w-auto"
            >
              View the portfolio
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#28221F] text-[#E9DED2]">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <img src={logo} alt="Anita Makeup Artist logo" className="h-12 w-auto object-contain brightness-0 invert" />
            <p className="mt-4 text-[0.65rem] uppercase tracking-[0.26em] text-[#E9DED2]/60">
              Makeup Artist • London
            </p>
            <p className="mt-6 font-serif text-lg font-light italic text-[#D5C2AE]">
              Flawless • Modern • Tailored
            </p>
          </div>

          <nav aria-label="Footer Navigation">
            <p className="text-[0.65rem] uppercase tracking-[0.26em] text-[#E9DED2]/60">Navigation</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-[#E9DED2]/85 transition-opacity hover:opacity-60"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.26em] text-[#E9DED2]/60">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-[#E9DED2]/85">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-opacity hover:opacity-60"
                >
                  WhatsApp — message Anita
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-opacity hover:opacity-60"
                >
                  Instagram — @makeupartistAnita
                </a>
              </li>
              <li>London</li>
            </ul>
            <ul className="mt-8 space-y-3 text-sm text-[#E9DED2]/60">
              <li>
                <a href="#contact" className="transition-opacity hover:opacity-100">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-opacity hover:opacity-100">
                  Legal notice
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-opacity hover:opacity-100">
                  Cookie policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-16 border-t border-[#E9DED2]/15 pt-8 text-[0.65rem] uppercase tracking-[0.26em] text-[#E9DED2]/50">
          © Anita
        </p>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Anita on WhatsApp"
      className="fixed bottom-5 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <span
        aria-hidden
        className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-60"
      />
      <span
        aria-hidden
        className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40 [animation-delay:600ms]"
      />
      <svg
        viewBox="0 0 32 32"
        className="relative h-7 w-7 md:h-8 md:w-8"
        fill="currentColor"
        aria-hidden
      >
        <path d="M16.003 3C8.83 3 3 8.83 3 16c0 2.29.6 4.52 1.74 6.49L3 29l6.68-1.72A12.94 12.94 0 0 0 16.003 29C23.17 29 29 23.17 29 16S23.17 3 16.003 3zm0 23.7a10.7 10.7 0 0 1-5.46-1.5l-.39-.23-3.96 1.02 1.06-3.86-.25-.4A10.7 10.7 0 1 1 16.003 26.7zm5.87-8c-.32-.16-1.9-.94-2.2-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.9-.78 2.16-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37z" />
      </svg>
    </a>
  );
}

function Home() {
  return (
    <div className="overflow-x-clip bg-background">
      <Header />
      <main>
        <Hero />
        <Statement />
        <About />
        <Signature />
        <Services />
        <Reels />
        <Bridal />
        <Portfolio />
        <Featured />
        <Why />
        <Testimonials />
        <Instagram />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
