import { createFileRoute } from "@tanstack/react-router";
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

import hero from "@/assets/image.webp";
import img2 from "@/assets/image-2.webp";
import img3 from "@/assets/image-3.webp";
import img4 from "@/assets/image-4.webp";
import img5 from "@/assets/image-5.webp";
import img6 from "@/assets/image-6.webp";
import img7 from "@/assets/image-7.webp";
import img8 from "@/assets/image-8.webp";
import img9 from "@/assets/image-9.webp";
import img10 from "@/assets/image-10.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kateryna | Makeup Artist & Brautstyling in Melbourne" },
      {
        name: "description",
        content:
          "Professionelles, makelloses und langanhaltendes Make-up für Brautstyling, Events und Fotoshootings in Melbourne.",
      },
      {
        property: "og:title",
        content: "Kateryna | Makeup Artist & Brautstyling in Melbourne",
      },
      {
        property: "og:description",
        content:
          "Makelloses, langanhaltendes Make-up für Bräute, besondere Anlässe, Events und Fotoshootings in Melbourne.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "Makeup Artist Melbourne, Brautstyling Melbourne, Braut Make-up Melbourne, Event Make-up Melbourne, Fotoshooting Make-up Melbourne",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Makeup Artist Kateryna",
          description:
            "Professionelles, makelloses und langanhaltendes Make-up für Brautstyling, Events und Fotoshootings in Melbourne.",
          areaServed: { "@type": "City", name: "Melbourne" },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Melbourne",
            addressCountry: "AU",
          },
          sameAs: ["https://instagram.com/makeupartistkateryna"],
          makesOffer: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brautstyling" } },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Events & besondere Anlässe" },
            },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fotoshootings" } },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const NAV = [
  { label: "Startseite", href: "#start" },
  { label: "Über Kateryna", href: "#ueber" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Brautstyling", href: "#brautstyling" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const INSTAGRAM = "https://instagram.com/makeupartistkateryna";

type Shot = {
  src: string;
  alt: string;
  cat: "Braut" | "Make-up" | "Events" | "Fotoshootings" | "Beauty";
  ratio: string;
};

const GALLERY: Shot[] = [
  {
    src: img2,
    alt: "Brautstyling von Kateryna mit natürlichem, makellosem Finish",
    cat: "Braut",
    ratio: "3/4",
  },
  {
    src: img6,
    alt: "Elegantes Augen-Make-up in Nahaufnahme",
    cat: "Make-up",
    ratio: "3/4",
  },
  {
    src: img5,
    alt: "Beauty-Porträt mit softem Licht und gepflegtem Hautfinish",
    cat: "Beauty",
    ratio: "1/1",
  },
  {
    src: img7,
    alt: "Editorial Beauty-Look für ein Fotoshooting in Melbourne",
    cat: "Fotoshootings",
    ratio: "3/4",
  },
  {
    src: img4,
    alt: "Make-up-Look für einen besonderen Anlass",
    cat: "Events",
    ratio: "3/4",
  },
  {
    src: img9,
    alt: "Braut-Make-up mit langanhaltendem, harmonischem Finish",
    cat: "Braut",
    ratio: "3/4",
  },
  {
    src: img8,
    alt: "Detailaufnahme von Haut und Teint nach dem Make-up",
    cat: "Beauty",
    ratio: "1/1",
  },
  {
    src: img10,
    alt: "Porträt mit definierten Augen und weichem Konturenspiel",
    cat: "Make-up",
    ratio: "3/4",
  },
  {
    src: img3,
    alt: "Eleganter Abend-Make-up-Look für Events",
    cat: "Events",
    ratio: "3/4",
  },
];

const CATS = ["Alle", "Braut", "Make-up", "Events", "Fotoshootings", "Beauty"] as const;

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
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
        <a
          href="#start"
          className={cn(
            "font-serif text-lg tracking-[0.32em] transition-colors duration-500",
            scrolled ? "text-foreground" : "text-white md:text-white",
          )}
        >
          KATERYNA
        </a>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
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
            href="#kontakt"
            className={cn(
              "hidden border px-6 py-3 text-[0.7rem] uppercase tracking-[0.2em] transition-colors duration-300 md:inline-block",
              scrolled
                ? "border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground"
                : "border-white/70 text-white hover:bg-white hover:text-foreground",
            )}
          >
            Anfrage senden
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            className={cn(
              "flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden",
              scrolled ? "text-foreground" : "text-white",
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
          aria-label="Mobile Navigation"
          className="border-t border-border bg-background lg:hidden"
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

function Hero() {
  return (
    <section id="start" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={hero}
        alt="Makeup Artist Kateryna aus Melbourne"
        width={1080}
        height={1080}
        className="hero-zoom absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#28221F]/85 via-[#28221F]/35 to-[#28221F]/40" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pb-28 pt-32 md:px-10 md:pb-24">
        <div className="max-w-3xl">
          <p className="fade-up eyebrow text-white/75">Makeup Artist • Melbourne</p>
          <h1
            className="fade-up mt-6 font-serif text-[2.75rem] font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Deine Schönheit.
            <br />
            Perfekt in Szene gesetzt.
          </h1>
          <p
            className="fade-up mt-7 max-w-xl text-sm leading-relaxed text-white/80 md:text-base"
            style={{ animationDelay: "240ms" }}
          >
            Makelloses, langanhaltendes Make-up für Bräute, besondere Anlässe, Events und
            Fotoshootings.
          </p>
          <div
            className="fade-up mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "340ms" }}
          >
            <a
              href="#kontakt"
              className="bg-white px-8 py-4 text-center text-[0.7rem] uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:bg-[#E9DED2]"
            >
              Anfrage senden
            </a>
            <a
              href="#portfolio"
              className="border border-white/60 px-8 py-4 text-center text-[0.7rem] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-white/10"
            >
              Portfolio entdecken
            </a>
          </div>
          <p
            className="fade-up mt-8 text-[0.7rem] uppercase tracking-[0.24em] text-white/60"
            style={{ animationDelay: "440ms" }}
          >
            Brautstyling • Events • Fotoshootings
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-white/60">Scrollen</span>
        <span className="h-12 w-px bg-gradient-to-b from-white/70 to-transparent" />
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">Beauty Statement</p>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-foreground md:text-5xl lg:text-[3.4rem]">
            Schönheit, die sich nach dir anfühlt.
          </h2>
          <p className="mt-8 max-w-xl text-sm leading-[1.9] text-muted-foreground md:text-base">
            Ein perfekter Make-up-Look soll deine natürliche Schönheit unterstreichen, deine
            Persönlichkeit widerspiegeln und dir das Gefühl geben, dich rundum wohlzufühlen.
          </p>
          <p className="mt-6 max-w-xl text-sm leading-[1.9] text-muted-foreground md:text-base">
            Eine natürliche Ausstrahlung, elegante Definition und ein makelloses Finish – abgestimmt
            auf deine individuellen Wünsche. Für langanhaltende Ergebnisse und ein Selbstbewusstsein,
            das man sieht.
          </p>
          <div className="mt-10 h-px w-24 bg-champagne" />
        </Reveal>
        <Reveal delay={120} className="relative">
          <img
            src={img6}
            alt="Nahaufnahme eines eleganten Augen-Make-ups von Kateryna"
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
    <section id="ueber" className="bg-secondary/60">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-2 lg:items-center lg:gap-24">
        <Reveal>
          <img
            src={img4}
            alt="Porträt der Makeup Artist Kateryna in Melbourne"
            loading="lazy"
            className="aspect-[3/4] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">Über Kateryna</p>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-foreground md:text-5xl">
            Make-up mit Liebe zum Detail.
          </h2>
          <p className="mt-8 text-sm leading-[1.9] text-muted-foreground md:text-base">
            Kateryna ist professionelle Makeup Artist in Melbourne. Ihre Arbeit beginnt mit einer
            individuellen Beratung: Sie hört zu, versteht deine persönlichen Wünsche und entwickelt
            daraus einen Look, der zu dir und deinem Anlass passt.
          </p>
          <p className="mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base">
            Präzises Arbeiten, ein hochwertiges Finish und eine moderne Beauty-Ästhetik prägen jeden
            ihrer Looks. Das Ergebnis ist ein Make-up, das nicht überdeckt, sondern unterstreicht –
            und dir Selbstbewusstsein für deinen Moment gibt.
          </p>
          <a
            href="#leistungen"
            className="mt-10 inline-block border-b border-foreground pb-1 text-[0.7rem] uppercase tracking-[0.22em] text-foreground transition-opacity duration-300 hover:opacity-60"
          >
            Mehr über Kateryna
          </a>
        </Reveal>
      </div>
    </section>
  );
}

const PRINCIPLES = [
  {
    no: "01",
    title: "Makellos",
    text: "Ein präzises, harmonisches Make-up mit einem gepflegten und eleganten Finish.",
  },
  {
    no: "02",
    title: "Modern",
    text: "Zeitgemäße Beauty-Ästhetik, individuell auf deinen Stil abgestimmt.",
  },
  {
    no: "03",
    title: "Langanhaltend",
    text: "Ein Look, der dich auch über viele Stunden hinweg zuverlässig begleitet.",
  },
  {
    no: "04",
    title: "Individuell",
    text: "Dein Make-up wird auf deine Wünsche, deinen Anlass und deine Persönlichkeit abgestimmt.",
  },
];

function Signature() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Signature Style</p>
        <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-foreground md:text-5xl">
          Der Kateryna Look
        </h2>
        <p className="mt-5 font-serif text-2xl font-light italic text-champagne md:text-3xl">
          Makellos. Modern. Langanhaltend.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {PRINCIPLES.map((p, i) => (
          <Reveal key={p.no} delay={i * 90} className="border-t border-border pt-6">
            <span className="font-serif text-sm tracking-[0.2em] text-champagne">{p.no}</span>
            <h3 className="mt-4 text-[0.75rem] uppercase tracking-[0.24em] text-foreground">
              {p.title}
            </h3>
            <p className="mt-4 text-sm leading-[1.85] text-muted-foreground">{p.text}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 grid gap-4 md:grid-cols-3">
        {[
          { src: img7, alt: "Editorial Beauty-Look mit softem Licht" },
          { src: img10, alt: "Definiertes Augen-Make-up in Nahaufnahme" },
          { src: img9, alt: "Braut-Make-up mit natürlichem Finish" },
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
    src: img2,
    title: "Brautstyling",
    text: "Ein eleganter und individuell abgestimmter Bridal Look, der deine natürliche Schönheit unterstreicht und dich an deinem großen Tag strahlen lässt.",
    href: "#brautstyling",
    alt: "Brautstyling von Makeup Artist Kateryna",
  },
  {
    src: img3,
    title: "Events & besondere Anlässe",
    text: "Ein stilvoller Make-up-Look für besondere Veranstaltungen, Feiern und Momente, in denen du dich rundum schön fühlen möchtest.",
    href: "#kontakt",
    alt: "Event Make-up für besondere Anlässe",
  },
  {
    src: img7,
    title: "Fotoshootings",
    text: "Professionelles Make-up für Shootings und besondere Bildmomente – abgestimmt auf deinen Look und die gewünschte Ästhetik.",
    href: "#kontakt",
    alt: "Make-up für ein professionelles Fotoshooting",
  },
];

function Services() {
  return (
    <section id="leistungen" className="bg-secondary/60">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Leistungen</p>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-foreground md:text-5xl">
            Leistungen
          </h2>
          <p className="mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base">
            Professionelles Make-up für besondere Momente, wichtige Anlässe und unvergessliche
            Bilder.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
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
              <a
                href={s.href}
                className="mt-6 inline-block border-b border-foreground/40 pb-1 text-[0.68rem] uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:border-foreground"
              >
                Mehr erfahren
              </a>
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
    title: "Kennenlernen",
    text: "Wir sprechen über deine Wünsche, deinen Stil und den Look, den du dir für deinen besonderen Tag vorstellst.",
  },
  {
    no: "02",
    title: "Styling",
    text: "Dein Make-up wird individuell auf deine Gesichtszüge, deinen Stil und deinen Anlass abgestimmt.",
  },
  {
    no: "03",
    title: "Dein Moment",
    text: "Du fühlst dich wunderschön, selbstbewusst und ganz bei dir – bereit für deinen großen Moment.",
  },
];

function Bridal() {
  return (
    <section id="brautstyling" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
        <Reveal>
          <img
            src={img9}
            alt="Braut mit makellosem, langanhaltendem Make-up von Kateryna"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">Bridal Experience</p>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-foreground md:text-5xl">
            Für deinen ganz besonderen Moment.
          </h2>
          <p className="mt-8 text-sm leading-[1.9] text-muted-foreground md:text-base">
            Am Hochzeitstag soll sich alles richtig anfühlen. Dein Make-up soll deine Persönlichkeit
            widerspiegeln, wunderschön aussehen und dich durch jeden besonderen Moment begleiten.
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
          <a
            href="#kontakt"
            className="mt-12 inline-block bg-foreground px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity duration-300 hover:opacity-85"
          >
            Brautstyling anfragen
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Portfolio() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("Alle");
  const [active, setActive] = useState<Shot | null>(null);
  const shots = useMemo(
    () => (cat === "Alle" ? GALLERY : GALLERY.filter((g) => g.cat === cat)),
    [cat],
  );

  return (
    <section id="portfolio" className="bg-secondary/60">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Portfolio</p>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-foreground md:text-5xl">
            Portfolio
          </h2>
          <p className="mt-5 font-serif text-2xl font-light italic text-muted-foreground">
            Einblicke in meine Looks.
          </p>
        </Reveal>

        <div
          role="tablist"
          aria-label="Portfolio Kategorien"
          className="mt-12 flex flex-wrap gap-x-8 gap-y-4"
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
                aria-label={`${s.alt} – Bild vergrößern`}
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

        <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:hidden">
          {shots.map((s) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setActive(s)}
              className="w-[78%] flex-none snap-center"
              aria-label={`${s.alt} – Bild vergrößern`}
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
        <DialogContent className="max-w-3xl border-0 bg-background p-2 sm:p-3">
          <DialogTitle className="sr-only">{active?.alt ?? "Portfolio Bild"}</DialogTitle>
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
        src={img8}
        alt="Makelloser Beauty-Look von Kateryna in Nahaufnahme"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#28221F]/60" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-44">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-white/70">Der Kateryna Look</p>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-white md:text-5xl lg:text-[3.4rem]">
            Makellose Schönheit, modern interpretiert.
          </h2>
          <p className="mt-8 max-w-xl text-sm leading-[1.9] text-white/80 md:text-base">
            Ein harmonisches Zusammenspiel aus Präzision, Eleganz und Persönlichkeit – für einen
            Look, der sich ganz nach dir anfühlt.
          </p>
          <a
            href="#portfolio"
            className="mt-10 inline-block border border-white/60 px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-white hover:text-foreground"
          >
            Portfolio ansehen
          </a>
        </Reveal>
      </div>
    </section>
  );
}

const WHY = [
  {
    title: "Persönlich",
    text: "Deine Wünsche und dein persönlicher Stil stehen im Mittelpunkt.",
  },
  { title: "Makellos", text: "Ein präzises Finish mit besonderem Augenmerk auf Details." },
  { title: "Langanhaltend", text: "Ein Beauty-Look, der dich auch über viele Stunden begleitet." },
  {
    title: "Individuell",
    text: "Jeder Look wird auf dich, deinen Anlass und deine gewünschte Ästhetik abgestimmt.",
  },
];

function Why() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Warum Kateryna</p>
        <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-foreground md:text-5xl">
          Warum Kateryna?
        </h2>
      </Reveal>
      <dl className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
        {WHY.map((w, i) => (
          <Reveal key={w.title} delay={i * 90}>
            <span aria-hidden className="block h-px w-10 bg-champagne" />
            <dt className="mt-6 text-[0.72rem] uppercase tracking-[0.24em] text-foreground">
              {w.title}
            </dt>
            <dd className="mt-4 text-sm leading-[1.85] text-muted-foreground">{w.text}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}

const TESTIMONIALS = [
  { name: "Platzhalter – Name der Kundin", occasion: "Anlass", rating: 5 },
  { name: "Platzhalter – Name der Kundin", occasion: "Anlass", rating: 5 },
  { name: "Platzhalter – Name der Kundin", occasion: "Anlass", rating: 5 },
];

function Testimonials() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-foreground md:text-5xl">
            Was Kundinnen sagen
          </h2>
          <p className="mt-6 text-sm leading-[1.9] text-muted-foreground">
            Hier werden echte Kundenstimmen eingefügt. Die folgenden Felder sind Platzhalter und
            können jederzeit durch echte Bewertungen ersetzt werden.
          </p>
        </Reveal>

        <ul className="-mx-5 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={i}
              as="li"
              delay={i * 90}
              className="w-[82%] flex-none snap-center border border-border bg-background p-8 md:w-auto"
            >
              <p className="text-[0.7rem] uppercase tracking-[0.24em] text-champagne">
                {"★".repeat(t.rating)}
              </p>
              <p className="mt-6 font-serif text-xl font-light italic leading-relaxed text-foreground">
                „Platzhalter für eine echte Kundenstimme. Hier kann das Zitat deiner Kundin
                eingefügt werden.“
              </p>
              <p className="mt-8 text-[0.7rem] uppercase tracking-[0.22em] text-foreground">
                {t.name}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">{t.occasion}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const INSTA = [
  { src: img2, alt: "Brautstyling Look auf Instagram" },
  { src: img5, alt: "Beauty-Porträt auf Instagram" },
  { src: img6, alt: "Augen-Make-up Detail auf Instagram" },
  { src: img4, alt: "Event Make-up Look auf Instagram" },
  { src: img10, alt: "Beauty Detail auf Instagram" },
  { src: img7, alt: "Fotoshooting Look auf Instagram" },
];

function Instagram() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Instagram</p>
        <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-foreground md:text-5xl">
          Mehr von Kateryna
        </h2>
        <p className="mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base">
          Weitere Looks, Beauty-Inspirationen und Einblicke findest du auf Instagram.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
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
        Instagram entdecken
      </a>
    </section>
  );
}

const FAQS = [
  {
    q: "Welche Leistungen bietet Kateryna an?",
    a: "Kateryna bietet professionelles Make-up für Brautstyling, Events, besondere Anlässe und Fotoshootings an.",
  },
  {
    q: "Wie kann ich einen Termin anfragen?",
    a: "Nutze das Anfrageformular oder kontaktiere Kateryna direkt über Instagram.",
  },
  {
    q: "Kann ich meine eigenen Wünsche und Inspirationen mitbringen?",
    a: "Ja. Deine persönlichen Vorstellungen und Inspirationen können bei der Planung deines Looks berücksichtigt werden.",
  },
  {
    q: "Ist das Make-up langanhaltend?",
    a: "Kateryna legt besonderen Wert auf ein makelloses und langanhaltendes Finish.",
  },
  {
    q: "Wo befindet sich Katerynas Service?",
    a: "Kateryna ist als Makeup Artist in Melbourne tätig. Für genaue Informationen zur Verfügbarkeit und zum Einsatzort bitte direkt anfragen.",
  },
  {
    q: "Wie hoch sind die Preise?",
    a: "Die Preise hängen von der gewünschten Leistung und dem Anlass ab. Für individuelle Informationen bitte eine Anfrage senden.",
  },
  {
    q: "Bietest du Brautstyling an?",
    a: "Ja. Brautstyling gehört zu den angebotenen Leistungen.",
  },
  {
    q: "Wie kann ich Kateryna buchen?",
    a: "Sende eine Anfrage über das Kontaktformular oder kontaktiere Kateryna direkt über Instagram.",
  },
];

function Faq() {
  return (
    <section id="faq" className="bg-secondary/60">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-foreground md:text-5xl">
            Häufige Fragen
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="py-6 text-left font-serif text-xl font-light text-foreground hover:no-underline">
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
  "w-full border-0 border-b border-input bg-transparent px-0 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground focus-visible:ring-0";

function Contact() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section id="kontakt" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <img
            src={img5}
            alt="Beauty-Porträt mit makellosem Make-up von Kateryna"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">Anfrage</p>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-foreground md:text-5xl">
            Lass uns deinen Look planen.
          </h2>
          <p className="mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base">
            Du hast einen besonderen Anlass, planst deine Hochzeit oder möchtest einen
            professionellen Look für ein Fotoshooting? Erzähle mir mehr über deine Wünsche.
          </p>

          <form
            ref={formRef}
            className="mt-12 space-y-8"
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
                  E-Mail
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
                  Telefon
                </label>
                <input id="phone" name="phone" type="tel" className={cn(inputClass, "mt-2")} />
              </div>
              <div>
                <label htmlFor="date" className="eyebrow block">
                  Datum
                </label>
                <input id="date" name="date" type="date" className={cn(inputClass, "mt-2")} />
              </div>
              <div>
                <label htmlFor="occasion" className="eyebrow block">
                  Anlass
                </label>
                <select
                  id="occasion"
                  name="occasion"
                  defaultValue="Brautstyling"
                  className={cn(inputClass, "mt-2")}
                >
                  <option>Brautstyling</option>
                  <option>Event</option>
                  <option>Besonderer Anlass</option>
                  <option>Fotoshooting</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              <div>
                <label htmlFor="location" className="eyebrow block">
                  Veranstaltungsort
                </label>
                <input id="location" name="location" className={cn(inputClass, "mt-2")} />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="eyebrow block">
                Erzähl mir mehr über deine Wünsche
              </label>
              <textarea id="message" name="message" rows={4} className={cn(inputClass, "mt-2")} />
            </div>

            <button
              type="submit"
              className="w-full bg-foreground px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity duration-300 hover:opacity-85 sm:w-auto"
            >
              Anfrage senden
            </button>

            <p aria-live="polite" className="text-sm text-muted-foreground">
              {sent && "Vielen Dank für deine Anfrage. Ich melde mich so bald wie möglich bei dir."}
            </p>
          </form>
        </Reveal>
      </div>

      <Reveal className="mt-24 border-t border-border pt-12">
        <p className="eyebrow">Direkter Kontakt</p>
        <h2 className="mt-5 font-serif text-3xl font-light text-foreground md:text-4xl">Kontakt</h2>
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <address className="not-italic">
            <p className="text-sm text-foreground">Makeup Artist Kateryna</p>
            <p className="mt-2 text-sm text-muted-foreground">Melbourne</p>
            <p className="mt-2 text-sm">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer noopener"
                className="border-b border-foreground/40 pb-0.5 text-foreground transition-colors hover:border-foreground"
              >
                Instagram — @makeupartistkateryna
              </a>
            </p>
          </address>
          <a
            href="#kontakt"
            className="inline-block self-start border border-foreground px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-primary-foreground md:self-auto"
          >
            Anfrage senden
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
        src={img10}
        alt="Eleganter Beauty-Look von Makeup Artist Kateryna"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#28221F]/72" />
      <div className="relative mx-auto max-w-3xl px-5 py-28 text-center md:px-10 md:py-40">
        <Reveal>
          <h2 className="font-serif text-4xl font-light leading-[1.1] text-white md:text-5xl lg:text-[3.5rem]">
            Bereit für deinen perfekten Look?
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-[1.9] text-white/80 md:text-base">
            Lass uns gemeinsam einen Make-up-Look kreieren, in dem du dich wunderschön,
            selbstbewusst und ganz wie du selbst fühlst.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="w-full bg-white px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:bg-[#E9DED2] sm:w-auto"
            >
              Anfrage senden
            </a>
            <a
              href="#portfolio"
              className="w-full border border-white/60 px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-white/10 sm:w-auto"
            >
              Portfolio ansehen
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
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl tracking-[0.32em] text-white">KATERYNA</p>
            <p className="mt-4 text-[0.65rem] uppercase tracking-[0.26em] text-[#E9DED2]/60">
              Makeup Artist • Melbourne
            </p>
            <p className="mt-6 font-serif text-lg font-light italic text-[#D5C2AE]">
              Makellos • Modern • Individuell
            </p>
          </div>

          <nav aria-label="Footer Navigation">
            <p className="text-[0.65rem] uppercase tracking-[0.26em] text-[#E9DED2]/60">
              Navigation
            </p>
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
            <p className="text-[0.65rem] uppercase tracking-[0.26em] text-[#E9DED2]/60">Kontakt</p>
            <ul className="mt-5 space-y-3 text-sm text-[#E9DED2]/85">
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-opacity hover:opacity-60"
                >
                  Instagram — @makeupartistkateryna
                </a>
              </li>
              <li>Melbourne</li>
            </ul>
            <ul className="mt-8 space-y-3 text-sm text-[#E9DED2]/60">
              <li>
                <a href="#kontakt" className="transition-opacity hover:opacity-100">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#kontakt" className="transition-opacity hover:opacity-100">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#kontakt" className="transition-opacity hover:opacity-100">
                  Cookie-Richtlinie
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-16 border-t border-[#E9DED2]/15 pt-8 text-[0.65rem] uppercase tracking-[0.26em] text-[#E9DED2]/50">
          © Kateryna
        </p>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur md:hidden">
      <a
        href="#kontakt"
        className="block bg-foreground py-4 text-center text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground"
      >
        Anfrage senden
      </a>
    </div>
  );
}

function Home() {
  return (
    <div className="bg-background">
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Statement />
        <About />
        <Signature />
        <Services />
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
      <MobileBar />
    </div>
  );
}
