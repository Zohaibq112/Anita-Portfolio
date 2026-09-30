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
import logo from "@/assets/Logo.png";
import bridalimg from "@/assets/bridalimg.png";
import bridal1212 from "@/assets/bridal1212.png";
import bridal12 from "@/assets/bridal12.png";
import bridal121 from "@/assets/bridal121.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gems Beauty London | Bridal Makeup Artist in London" },
      {
        name: "description",
        content:
          "Soft, glowing, long-lasting bridal and occasion makeup in London by Anita Lordman. Bridal packages include a trial and start from £300.",
      },
      {
        property: "og:title",
        content: "Gems Beauty London | Your Beauty, Beautifully Enhanced",
      },
      {
        property: "og:description",
        content:
          "Bridal and occasion makeup in London by Anita Lordman, finalist for Best Bridal Makeup Artist at the Hair & Beauty Awards UK 2025.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "bridal makeup artist London, wedding makeup London, bridal makeup trial London, event makeup London, Gems Beauty London",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Gems Beauty London",
          slogan: "Your Beauty, Beautifully Enhanced",
          founder: { "@type": "Person", name: "Anita Lordman" },
          description:
            "Bridal and occasion makeup in London by Anita Lordman. Bridal packages include a trial.",
          areaServed: { "@type": "City", name: "London" },
          address: {
            "@type": "PostalAddress",
            addressLocality: "London",
            addressCountry: "GB",
          },
          sameAs: ["https://instagram.com/gems.beauty.london"],
          makesOffer: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bridal makeup" } },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Events & special occasions" },
            },
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

const INSTAGRAM = "https://instagram.com/gems.beauty.london";

// Digits only: country code + number, no "+", spaces or leading 0. Example: 447460285854
const WHATSAPP_NUMBER = "447460285854";
const WHATSAPP_MESSAGE = "Hi Anita, I'd like to check your availability for my date.";
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
  { src: img2, alt: "Bridal makeup by Anita", cat: "Bridal", ratio: "3/4" },
  { src: img6, alt: "Eye makeup close-up by Anita", cat: "Makeup", ratio: "3/4" },
  { src: img5, alt: "Soft glam makeup by Anita", cat: "Makeup", ratio: "1/1" },
  { src: img7, alt: "Photoshoot makeup by Anita", cat: "Makeup", ratio: "3/4" },
  { src: img4, alt: "Event makeup by Anita", cat: "Events", ratio: "3/4" },
  { src: img9, alt: "Bridal makeup by Anita", cat: "Bridal", ratio: "3/4" },
  { src: img8, alt: "Skin close-up after makeup by Anita", cat: "Makeup", ratio: "1/1" },
  { src: img10, alt: "Defined eye makeup by Anita", cat: "Makeup", ratio: "3/4" },
  { src: img3, alt: "Evening event makeup by Anita", cat: "Events", ratio: "3/4" },
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
        <a
          href="#start"
          aria-label="Gems Beauty London, home"
          className="flex min-w-0 items-center gap-3"
        >
          <img
            src={logo}
            alt=""
            aria-hidden
            className={cn(
              "h-9 w-auto flex-none object-contain transition-[filter] duration-500 md:h-11",
              scrolled || open ? "brightness-0" : "brightness-0 invert",
            )}
          />
          <span
            className={cn(
              "flex min-w-0 flex-col leading-none transition-colors duration-500 lg:hidden xl:flex",
              scrolled || open ? "text-foreground" : "text-champagne",
            )}
          >
            <span className="truncate font-serif text-[1.05rem] font-light tracking-[0.04em] sm:text-lg md:text-xl">
              Gems Beauty London
            </span>
            <span
              className={cn(
                "mt-1 truncate font-serif text-[0.68rem] italic sm:text-xs",
                scrolled || open ? "text-primary" : "text-gold",
              )}
            >
              Your Beauty, Beautifully Enhanced
            </span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className={cn(
                    "text-[0.7rem] uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-60",
                    scrolled ? "text-foreground" : "text-champagne",
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
                : "border-gold/70 text-champagne hover:bg-champagne hover:text-foreground",
            )}
          >
            Send an enquiry
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden",
              scrolled || open ? "text-foreground" : "text-champagne",
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

/* ---------------------------------------------------------------- Hero */

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Autoplay on every device. Phones only autoplay a video that is muted and
  // inline, and React doesn't always render the `muted` attribute, so we set
  // it on the element directly and call play() ourselves. If the browser still
  // blocks it (e.g. iPhone Low Power Mode), it starts on the first tap/scroll touch.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      v.play().catch(() => {});
    };
    tryPlay();

    const onVisible = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("touchstart", tryPlay, { once: true, passive: true });
    window.addEventListener("click", tryPlay, { once: true });

    return () => {
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("touchstart", tryPlay);
      window.removeEventListener("click", tryPlay);
    };
  }, []);

  return (
    <section id="start" className="relative min-h-[100svh] w-full overflow-hidden bg-wine">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="/hero.mp4"
        poster={bridal11}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        aria-hidden="true"
        tabIndex={-1}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/25"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col items-center justify-end px-5 pb-24 pt-32 text-center [text-shadow:0_1px_14px_rgb(0_0_0/0.45)] md:px-10 md:pb-28">
        <h1 className="fade-up font-serif text-[2.6rem] font-light leading-[1.05] text-champagne sm:text-6xl lg:text-7xl">
          Gems Beauty London
        </h1>
        <p
          className="fade-up mt-5 font-serif text-lg font-light italic text-gold sm:text-2xl"
          style={{ animationDelay: "150ms" }}
        >
          Your Beauty, Beautifully Enhanced
        </p>
        <a
          href="#contact"
          className="fade-up mt-10 border border-gold/70 px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-champagne transition-colors duration-300 hover:bg-champagne hover:text-foreground"
          style={{ animationDelay: "300ms" }}
        >
          Check your date
        </a>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Statement */

function Statement() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-36">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">Soft glam, made to last</p>
          <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl lg:text-[3.4rem]">
            Makeup that still looks like you.
          </h2>
          <p className="mt-8 max-w-xl text-sm leading-[1.9] text-muted-foreground md:text-base">
            Anita&rsquo;s work is soft, glowing and built to last. She would rather bring your skin
            forward than cover it up, and every look starts with what you actually want, whether
            that&rsquo;s a barely-there glow or full glam.
          </p>
          <p className="mt-6 max-w-xl text-sm leading-[1.9] text-muted-foreground md:text-base">
            Her brides tend to say the same two things afterwards: it lasted all day and night, and
            they still felt like themselves.
          </p>
          <div className="mt-10 h-px w-24 bg-primary/40" />
        </Reveal>
        <Reveal delay={120} className="relative">
          <img
            src={bridal1}
            alt="Soft, glowing bridal makeup by Anita"
            loading="lazy"
            className="aspect-[4/5] w-full border border-gold-line object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- About */

function About() {
  return (
    <section id="about" className="bg-secondary/60">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 md:px-10 md:py-32 lg:grid-cols-2 lg:items-center lg:gap-24">
        <Reveal>
          <img
            src={artist}
            alt="Anita Lordman, founder of Gems Beauty London"
            loading="lazy"
            className="aspect-[3/4] w-full border border-gold-line object-cover"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">About Anita</p>
          <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
            Meet Anita Lordman.
          </h2>
          <p className="mt-8 text-sm leading-[1.9] text-muted-foreground md:text-base">
            Anita founded Gems Beauty London and has spent almost seven years doing bridal and
            occasion makeup. She trained at the Academy of Freelance Makeup London, holds a bridal
            qualification from Layefa Beauty, and was a finalist for{" "}
            <em className="font-serif text-[1.05em] text-foreground">
              Best Bridal Makeup Artist at the Hair &amp; Beauty Awards UK 2025
            </em>
            .
          </p>
          <p className="mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base">
            What her brides mention most isn&rsquo;t only the makeup. It&rsquo;s that she&rsquo;s
            calm, listens properly, and is there whenever they need her on the day.
          </p>
          <Link
            to="/about"
            className="mt-10 inline-block border-b border-primary pb-1 text-[0.7rem] uppercase tracking-[0.22em] text-primary transition-opacity duration-300 hover:opacity-60"
          >
            More about Anita
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Signature */

const PRINCIPLES = [
  {
    no: "01",
    title: "Skin first",
    text: "Prep and products chosen for your skin type, so it looks like skin up close and on camera.",
  },
  {
    no: "02",
    title: "Lasts all day",
    text: "From getting ready in the morning to the last song of the night.",
  },
  {
    no: "03",
    title: "Still you",
    text: "Subtle or full glam, you'll recognise yourself in every photo.",
  },
  {
    no: "04",
    title: "Your ideas",
    text: "Bring your inspiration pictures. The trial is where you get it right together.",
  },
];

const SIGNATURE_IMAGES = [
  { src: bridal121, alt: "Bridal skin finish by Anita" },
  { src: bridal12, alt: "Long-lasting bridal makeup by Anita" },
  { src: bridal1212, alt: "Natural bridal glam by Anita" },
  { src: img2, alt: "Bridal look created from a client's inspiration" },
];

function Signature() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Signature Style</p>
        <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
          The Gems look
        </h2>
        <p className="mt-5 font-serif text-xl font-light italic text-primary sm:text-2xl md:text-3xl">
          Soft. Glowing. Made to last.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 items-start gap-x-4 gap-y-10 md:mt-16 md:grid-cols-4 md:gap-x-6 lg:gap-x-8">
        {PRINCIPLES.map((p, i) => (
          <Reveal key={p.no} delay={i * 90} className={cn(i % 2 === 1 && "mt-10 md:mt-20")}>
            <div className="overflow-hidden border border-gold-line">
              <img
                src={SIGNATURE_IMAGES[i].src}
                alt={SIGNATURE_IMAGES[i].alt}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
              />
            </div>
            <span className="mt-5 block font-serif text-sm italic tracking-[0.15em] text-primary">
              {p.no}
            </span>
            <h3 className="mt-2 font-serif text-base uppercase tracking-[0.18em] text-foreground sm:text-lg md:text-xl md:tracking-[0.22em]">
              {p.title}
            </h3>
            <p className="mt-3 text-[0.8rem] leading-[1.75] text-muted-foreground md:text-sm md:leading-[1.85]">
              {p.text}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Services */

const SERVICES = [
  {
    src: bridalimg,
    title: "Bridal Makeup",
    price: "From £300",
    text: "Three bridal packages, each with a trial included, so your look is settled long before the wedding morning.",
    slug: "bridal",
    alt: "Bridal makeup by Anita",
  },
  {
    src: img4,
    title: "Events & Special Occasions",
    price: "Price on enquiry",
    text: "Parties, celebrations and shoots. Soft or full glam, done to suit your outfit and the occasion.",
    slug: "events",
    alt: "Event makeup by Anita",
  },
];

// Note: not exported. Exporting non-route components from a TanStack route
// file breaks route code-splitting and Fast Refresh.
function Services() {
  return (
    <section id="services" className="bg-secondary/60">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Services</p>
          <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
            Services
          </h2>
          <p className="mx-auto mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base">
            Bridal packages with a trial included, or one-off glam for your event.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-12 sm:grid-cols-2 md:mt-16 lg:gap-14">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 100} as="article" className="group flex flex-col">
              <Link
                to="/services/$service"
                params={{ service: s.slug }}
                aria-label={`${s.title}, see details`}
                className="block overflow-hidden border border-gold-line"
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </Link>
              <span className="mt-6 block font-serif text-sm italic tracking-[0.15em] text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-serif text-2xl font-light text-foreground">{s.title}</h3>
              <p className="mt-2 font-serif text-lg italic text-primary">{s.price}</p>
              <p className="mt-4 flex-1 text-sm leading-[1.85] text-muted-foreground">{s.text}</p>
              <Link
                to="/services/$service"
                params={{ service: s.slug }}
                className="mt-6 inline-block self-start border-b border-primary/50 pb-1 text-[0.68rem] uppercase tracking-[0.22em] text-primary transition-colors duration-300 hover:border-primary"
              >
                {s.slug === "bridal" ? "See packages" : "Learn more"}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Reels */

const REELS_DATA = [
  {
    id: 1,
    videoUrl: "/reel1.mp4",
    url: "https://www.instagram.com/reel/REEL_ID_1/",
    handle: "@gems.beauty.london",
  },
  {
    id: 2,
    videoUrl: "/reel2.mp4",
    url: "https://www.instagram.com/reel/REEL_ID_2/",
    handle: "@gems.beauty.london",
  },
  {
    id: 3,
    videoUrl: "/reel3.mp4",
    url: "https://www.instagram.com/reel/REEL_ID_3/",
    handle: "@gems.beauty.london",
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
    video.play().catch(() => {});
  };

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const videos = videoRefs.current.filter((el): el is HTMLVideoElement => el !== null);
    videos.forEach((v) => {
      v.muted = true;
      v.setAttribute("playsinline", "");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) loadAndPlayVideo(video);
          else if (!video.paused) video.pause();
        });
      },
      { threshold: 0.35 },
    );

    videos.forEach((video) => observer.observe(video));
    return () => observer.disconnect();
  }, []);

  const toggleSound = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const next = !isMuted;
    setIsMuted(next);
    videoRefs.current.forEach((video) => {
      if (video) video.muted = next;
    });
  };

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Instagram Reels</p>
        <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
          Behind the scenes
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-[1.9] text-muted-foreground md:text-base">
          A few clips from Anita&rsquo;s Instagram. There&rsquo;s plenty more on @gems.beauty.london.
        </p>
      </Reveal>

      <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-4 md:mx-auto md:mt-14 md:grid md:snap-none md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
        {REELS_DATA.map((reel, index) => (
          <Reveal
            key={reel.id}
            delay={index * 90}
            className="w-[72%] flex-none snap-center sm:w-[45%] md:w-auto"
          >
            <a
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[9/16] w-full overflow-hidden border border-gold-line bg-wine shadow-lg transition-all duration-500 hover:-translate-y-1.5"
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
              <div className="absolute inset-0 flex items-end justify-center p-5 opacity-90 transition-opacity duration-300 group-hover:opacity-100 md:p-6">
                <span className="text-center text-[0.65rem] font-medium uppercase tracking-[0.22em] text-champagne [text-shadow:0_1px_8px_rgb(0_0_0/0.6)] md:text-[0.7rem]">
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
          className="border border-primary/40 bg-transparent px-5 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:bg-primary/10 active:scale-95"
        >
          {isMuted ? "Unmute reels" : "Mute reels"}
        </button>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary px-8 py-4 text-center text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity duration-300 hover:opacity-85"
        >
          View on Instagram
        </a>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Bridal */

const BRIDAL_STEPS = [
  {
    no: "01",
    title: "Enquire",
    text: "Send your date and a few inspiration pictures. Anita gets back to you quickly and sends her terms, so everything is clear from the start.",
  },
  {
    no: "02",
    title: "Your trial",
    text: "You try the look together. Not used to full glam? This is where you work out what feels right, with no pressure.",
  },
  {
    no: "03",
    title: "The wedding morning",
    text: "Anita arrives on time and does your makeup. Depending on your package, she also does your chosen guest and stays on for touch-ups, and you get a touch-up kit for later.",
  },
];

function Bridal() {
  return (
    <section id="bridal" className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
        <Reveal>
          <img
            src={bridal11}
            alt="Bride on her wedding day, makeup by Anita"
            loading="lazy"
            className="aspect-[4/5] w-full border border-gold-line object-cover"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">The Bridal Experience</p>
          <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
            From first message to last dance.
          </h2>
          <p className="mt-8 text-sm leading-[1.9] text-muted-foreground md:text-base">
            Here&rsquo;s how booking your wedding makeup with Anita works.
          </p>
          <ol className="mt-12 space-y-8">
            {BRIDAL_STEPS.map((s) => (
              <li key={s.no} className="border-t border-border pt-6">
                <div className="flex items-baseline gap-5">
                  <span className="font-serif text-sm tracking-[0.2em] text-primary">{s.no}</span>
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
            className="mt-12 inline-block w-full bg-primary px-8 py-4 text-center text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity duration-300 hover:opacity-85 sm:w-auto"
          >
            See bridal packages
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Portfolio */

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
            Brides, events and shoots.
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
                  ? "border-b border-primary text-primary"
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
                className="group block w-full overflow-hidden border border-gold-line"
                aria-label={`${s.alt}, enlarge image`}
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
              className="w-[78%] flex-none snap-center border border-gold-line"
              aria-label={`${s.alt}, enlarge image`}
            >
              <img src={s.src} alt={s.alt} loading="lazy" className="aspect-[3/4] w-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[92svh] max-w-3xl overflow-auto border border-gold-line bg-background p-2 sm:p-3">
          <DialogTitle className="sr-only">{active?.alt ?? "Portfolio image"}</DialogTitle>
          {active && (
            <img
              src={active.src}
              alt={active.alt}
              className="h-auto w-full border border-gold-line object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

/* ------------------------------------------------------------- Featured */

function Featured() {
  return (
    <section className="relative isolate overflow-hidden border-y border-gold-line">
      <img
        src={bridal1}
        alt="Bridal makeup by Anita"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 [text-shadow:0_1px_14px_rgb(0_0_0/0.5)] md:px-10 md:py-44">
        <Reveal className="max-w-2xl">
          <p className="eyebrow !text-gold">Hair &amp; Beauty Awards UK 2025</p>
          <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-champagne sm:text-4xl md:text-5xl lg:text-[3.4rem]">
            Finalist, Best Bridal Makeup Artist.
          </h2>
          <p className="mt-8 max-w-xl text-sm leading-[1.9] text-champagne/85 md:text-base">
            A proud moment after almost seven years of bridal work, and a lot of happy brides along
            the way.
          </p>
          <a
            href="#portfolio"
            className="mt-10 inline-block border border-gold/70 px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-champagne transition-colors duration-300 hover:bg-champagne hover:text-foreground"
          >
            See her work
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Credentials */

const WHY = [
  { title: "Almost 7 years", text: "Doing bridal and occasion makeup." },
  { title: "Certified", text: "Academy of Freelance Makeup London." },
  { title: "Bridal qualified", text: "Bridal makeup qualification from Layefa Beauty." },
  {
    title: "Awards finalist",
    text: "Best Bridal Makeup Artist, Hair & Beauty Awards UK 2025.",
  },
];

function Why() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Background</p>
        <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
          Trained, qualified and recognised.
        </h2>
      </Reveal>
      <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:mt-16 sm:gap-x-10 sm:gap-y-10 md:gap-x-12 md:gap-y-12 lg:grid-cols-4">
        {WHY.map((w, i) => (
          <Reveal key={w.title} delay={i * 90}>
            <span aria-hidden className="block h-px w-8 bg-primary/50 sm:w-10" />
            <dt className="mt-4 font-serif text-lg font-light text-foreground sm:mt-6 md:text-xl">
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

/* --------------------------------------------------------- Testimonials */

type Testimonial = {
  title?: string;
  name: string;
  source?: string;
  quote: string;
  rating: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    title: "Best makeup artist",
    name: "Bride", // add the bride's first name if you have it
    source: "Hitched",
    quote:
      "I honestly couldn't have been happier with my makeup! Anita was absolutely amazing from start to finish. She listened to exactly what I wanted and made me feel so comfortable and beautiful on my wedding day. My makeup looked amazing, lasted all day and night, and I still felt like myself. But what really stood out was how much she went above and beyond. She helped me throughout the day, not just with my makeup, and was always there whenever I needed her. She genuinely did so much more than I expected and I really appreciated having her there. She was so lovely, calm and easy to be around, and I got so many compliments on my makeup. I absolutely loved it and would 100% recommend her to any bride. Thank you so much for everything! ❤️",
    rating: 5,
  },
  {
    title: "A true gem!",
    name: "Bride", // add the bride's first name if you have it
    source: "Hitched",
    quote:
      "I stumbled across Gem's late into my wedding planning as my previous intended MUA was no longer available. The response was quick and professional. I was booked in for my trial with ease, sent terms and conditions and asked for inspired looks. Anita visited me at home and we conducted a magical make-up trial. I am not used to wearing full glam so was very nervous, but she was patient and helped me find my perfect look. On the day, she arrived on time, in good spirits and gave me and my bridal team the BEST glam make-overs. She is professional, friendly, good fun and really made me the most beautiful bride. Her special bride kit (for touch ups) was a lovely touch. 100% recommend.",
    rating: 5,
  },
  {
    title: "Excellent makeup by gems beauty 🤭❤️",
    name: "Omoyemi",
    source: "Hitched",
    quote:
      "Choosing gems.beauty for my makeup was the best decision. She exceeded my expectations. My makeup came out so beautiful and lasted so long. She was very patient and professional. She is also very friendly and accommodating. Everyone who saw me that day loved my makeup and kept asking who did my makeup. I loved my makeup so much that I didn't want to wash it off 🤭. Gems beauty, you are a star and your hands are blessed. Thank you for the excellent makeup and will definitely be back soon 🥰.",
    rating: 5,
  },
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
    <div className="flex h-full flex-col border border-gold-line bg-card p-7 md:p-8">
      <p className="text-sm tracking-[0.3em] text-primary" aria-label={`${t.rating} out of 5 stars`}>
        {"★".repeat(t.rating)}
      </p>

      <p className="mt-5 h-6 truncate text-[0.72rem] uppercase tracking-[0.2em] text-foreground">
        {t.title ?? ""}
      </p>

      {/* Fixed height so every card is the same size; long reviews open in a dialog */}
      <p
        ref={textRef}
        className="mt-3 line-clamp-6 h-[9.5rem] font-serif text-lg font-light italic leading-relaxed text-foreground md:text-[1.05rem] xl:text-lg"
      >
        “{t.quote}”
      </p>

      <div className="mt-3 h-6">
        {truncated && (
          <button
            type="button"
            onClick={() => onOpen(t)}
            className="border-b border-primary/50 pb-0.5 text-[0.68rem] uppercase tracking-[0.22em] text-primary transition-colors duration-300 hover:border-primary"
          >
            Read full review
          </button>
        )}
      </div>

      <p className="mt-auto flex items-baseline justify-between gap-3 border-t border-border pt-5 text-[0.7rem] uppercase tracking-[0.22em] text-foreground">
        <span>{t.name}</span>
        {t.source && (
          <span className="font-serif text-xs normal-case italic tracking-normal text-muted-foreground">
            via {t.source}
          </span>
        )}
      </p>
    </div>
  );
}

function Testimonials() {
  const [active, setActive] = useState<Testimonial | null>(null);
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="bg-secondary/60">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Reviews</p>
            <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
              In their own words
            </h2>
            <p className="mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base">
              Reviews from Anita&rsquo;s brides and clients, including ones left on Hitched.
            </p>
          </Reveal>

          <div className="hidden gap-3 md:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous reviews"
              className="flex h-12 w-12 items-center justify-center border border-gold-line text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next reviews"
              className="flex h-12 w-12 items-center justify-center border border-gold-line text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              →
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="-mx-5 mt-12 flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mx-0 md:mt-14 md:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((t, i) => (
            <li
              key={t.name + i}
              className="w-[84%] flex-none snap-start sm:w-[60%] md:w-[calc((100%-1.25rem)/2)] xl:w-[calc((100%-2.5rem)/3)]"
            >
              <TestimonialCard t={t} onOpen={setActive} />
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[90svh] max-w-xl overflow-y-auto border border-gold-line bg-background p-8 md:p-10">
          <DialogTitle className="sr-only">Review by {active?.name}</DialogTitle>
          {active && (
            <div>
              <p className="text-sm tracking-[0.3em] text-primary" aria-hidden>
                {"★".repeat(active.rating)}
              </p>
              {active.title && (
                <p className="mt-5 text-[0.72rem] uppercase tracking-[0.2em] text-foreground">
                  {active.title}
                </p>
              )}
              <p className="mt-4 font-serif text-xl font-light italic leading-relaxed text-foreground">
                “{active.quote}”
              </p>
              <p className="mt-8 flex items-baseline justify-between gap-3 border-t border-border pt-5 text-[0.7rem] uppercase tracking-[0.22em] text-foreground">
                <span>{active.name}</span>
                {active.source && (
                  <span className="font-serif text-xs normal-case italic tracking-normal text-muted-foreground">
                    via {active.source}
                  </span>
                )}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

/* ------------------------------------------------------------ Instagram */

const INSTA = [
  { src: img2, alt: "Bridal look on Instagram" },
  { src: img5, alt: "Soft glam on Instagram" },
  { src: img6, alt: "Eye makeup on Instagram" },
  { src: img4, alt: "Event look on Instagram" },
  { src: img10, alt: "Makeup detail on Instagram" },
  { src: img7, alt: "Photoshoot look on Instagram" },
];

function Instagram() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Instagram</p>
        <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
          @gems.beauty.london
        </h2>
        <p className="mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base">
          Recent looks and wedding mornings are posted on Instagram first.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-3 md:gap-4">
        {INSTA.map((s, i) => (
          <Reveal key={s.alt} delay={(i % 3) * 80} className="overflow-hidden">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer noopener"
              className="block overflow-hidden border border-gold-line"
            >
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
        className="mt-12 inline-block border-b border-primary pb-1 text-[0.7rem] uppercase tracking-[0.22em] text-primary transition-opacity duration-300 hover:opacity-60"
      >
        Follow on Instagram
      </a>
    </section>
  );
}

/* ------------------------------------------------------------------ FAQ */

const FAQS = [
  {
    q: "Is a trial included?",
    a: "Yes. Every bridal package includes a trial, so you can try your look and make changes well before the wedding.",
  },
  {
    q: "How much is bridal makeup?",
    a: "There are three bridal packages: the Blushing Bride Bundle (£300), the Radiant Bride Experience (£450) and The Ultimate Package (£600). Event makeup is priced on enquiry.",
  },
  {
    q: "Will you come to me?",
    a: "Yes, Anita comes to you in London, whether that's your home or your bridal suite. The Ultimate Package also covers travel between your suite, ceremony and reception.",
  },
  {
    q: "Can you do my bridal party too?",
    a: "The Radiant and Ultimate packages include free glam for one person of your choice. If you'd like bridesmaids or family done as well, mention it in your enquiry.",
  },
  {
    q: "Can I send inspiration pictures?",
    a: "Please do. Anita asks for inspiration looks when you book, and the trial is where you fine-tune them together.",
  },
  {
    q: "Will my makeup last all day?",
    a: "That's the aim. Anita preps for your skin type and uses long-wear products, and brides get a touch-up kit for later in the day.",
  },
  {
    q: "How do I book?",
    a: "Fill in the enquiry form with your date, message Anita on WhatsApp, or send a DM to @gems.beauty.london on Instagram.",
  },
];

function Faq() {
  return (
    <section id="faq" className="bg-secondary/60">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 md:px-10 md:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
            Questions brides ask
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

/* -------------------------------------------------------------- Contact */

const inputClass =
  "block min-h-[3rem] w-full min-w-0 rounded-none border-0 border-b border-input bg-transparent px-0 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus-visible:ring-0 sm:text-sm";

function Contact() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-20">
        <Reveal className="min-w-0 lg:sticky lg:top-28">
          <img
            src={img5}
            alt="Soft glam makeup by Anita"
            loading="lazy"
            className="aspect-[4/3] w-full border border-gold-line object-cover object-top sm:aspect-[16/10] lg:aspect-[4/5]"
          />
        </Reveal>
        <Reveal delay={120} className="min-w-0">
          <p className="eyebrow">Enquiry</p>
          <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
            Tell Anita about your day.
          </h2>
          <p className="mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base">
            Send your date, where you&rsquo;ll be getting ready and the look you have in mind.
            Anita will get back to you with her availability.
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
            <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
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
                <input id="email" name="email" type="email" required className={cn(inputClass, "mt-2")} />
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
                  defaultValue="Wedding"
                  className={cn(inputClass, "mt-2")}
                >
                  <option>Wedding</option>
                  <option>Event or party</option>
                  <option>Photoshoot</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="location" className="eyebrow block">
                  Where you&rsquo;re getting ready
                </label>
                <input id="location" name="location" className={cn(inputClass, "mt-2")} />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="eyebrow block">
                The look you have in mind
              </label>
              <textarea id="message" name="message" rows={4} className={cn(inputClass, "mt-2")} />
            </div>

            <button
              type="submit"
              className="w-full bg-primary px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity duration-300 hover:opacity-85 sm:w-auto"
            >
              Send an enquiry
            </button>

            <p aria-live="polite" className="text-sm text-muted-foreground">
              {sent && "Thank you! Anita will be in touch soon."}
            </p>
          </form>
        </Reveal>
      </div>

      <Reveal className="mt-20 border-t border-border pt-12 md:mt-24">
        <p className="eyebrow">Direct contact</p>
        <h2 className="mt-5 font-serif text-3xl font-light text-foreground md:text-4xl">Contact</h2>
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <address className="min-w-0 break-words not-italic">
            <p className="text-sm text-foreground">Gems Beauty London · Anita Lordman</p>
            <p className="mt-2 text-sm text-muted-foreground">London</p>
            <p className="mt-2 text-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="border-b border-primary/50 pb-0.5 text-primary transition-colors hover:border-primary"
              >
                WhatsApp Anita
              </a>
            </p>
            <p className="mt-2 text-sm">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer noopener"
                className="border-b border-primary/50 pb-0.5 text-primary transition-colors hover:border-primary"
              >
                Instagram · @gems.beauty.london
              </a>
            </p>
          </address>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="block w-full border border-primary px-8 py-4 text-center text-[0.7rem] uppercase tracking-[0.22em] text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground md:inline-block md:w-auto md:self-auto"
          >
            Message on WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------ Final CTA */

function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden border-y border-gold-line">
      <img
        src={image11}
        alt="Makeup by Anita"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center [text-shadow:0_1px_14px_rgb(0_0_0/0.5)] md:px-10 md:py-40">
        <Reveal>
          <h2 className="font-serif text-3xl font-light leading-[1.1] text-champagne sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            Got a date in mind?
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-[1.9] text-champagne/85 md:text-base">
            Send an enquiry or drop Anita a message on WhatsApp to check if she&rsquo;s free.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="w-full bg-gold px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-wine transition-colors duration-300 hover:bg-champagne sm:w-auto"
            >
              Send an enquiry
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="w-full border border-gold/70 px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-champagne transition-colors duration-300 hover:bg-champagne/10 sm:w-auto"
            >
              WhatsApp Anita
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Footer */

function Footer() {
  return (
    <footer className="bg-wine text-champagne">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <img
              src={logo}
              alt="Gems Beauty London logo"
              className="h-12 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-4 text-[0.65rem] uppercase tracking-[0.26em] text-champagne/60">
              Bridal &amp; occasion makeup • London
            </p>
            <p className="mt-6 font-serif text-lg font-light italic text-gold">
              Your Beauty, Beautifully Enhanced
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-[0.65rem] uppercase tracking-[0.26em] text-champagne/60">Navigation</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-champagne/85 transition-opacity hover:opacity-60">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.26em] text-champagne/60">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-champagne/85">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-opacity hover:opacity-60"
                >
                  WhatsApp Anita
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-opacity hover:opacity-60"
                >
                  Instagram · @gems.beauty.london
                </a>
              </li>
              <li>London</li>
            </ul>
            <ul className="mt-8 space-y-3 text-sm text-champagne/60">
              <li>
                <a href="#contact" className="transition-opacity hover:opacity-100">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-opacity hover:opacity-100">
                  Terms &amp; conditions
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

        <p className="mt-16 border-t border-gold/20 pt-8 text-[0.65rem] uppercase tracking-[0.26em] text-champagne/50">
          © Gems Beauty London
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
      <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-60" />
      <span
        aria-hidden
        className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40 [animation-delay:600ms]"
      />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7 md:h-8 md:w-8" fill="currentColor" aria-hidden>
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
