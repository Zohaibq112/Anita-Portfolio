import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Check, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Footer, Header, WHATSAPP_URL, WhatsAppButton } from "@/components/SiteChrome";
import { cn } from "@/lib/utils";
import bridalHero from "@/assets/bridal.png";
import eventsHero from "@/assets/image4.png";
import newimg3 from "@/assets/newimage3.png";
import img6 from "@/assets/newimage2.png";
import bridal121 from "@/assets/bridal121.png";

type Package = { name: string; price: string; includes: string };

type Service = {
  title: string;
  eyebrow: string;
  image: string;
  hero: string;
  alt: string;
  price?: string;
  intro: string;
  details: string[];
  packages?: Package[];
};

const SERVICES: Record<string, Service> = {
  bridal: {
    title: "Bridal Makeup (Mobile Bookings)",
    eyebrow: "The Bridal Experience",
    image: bridal121,
    hero: bridalHero,
    alt: "Bridal makeup by Anita",
    intro:
      "A polished, personalised bridal look designed to feel like you and last beautifully from the ceremony through to the last dance.",
    details: [
      "Personal consultation and look planning",
      "Makeup tailored to your features, style and dress",
      "Long-lasting products for photography and celebrations",
      "Touch-up guidance so you feel confident all day",
    ],
    packages: [
      {
        name: "Blushing Bride Bundle",
        price: "£300",
        includes: "Bridal trial + one-off makeup + touch-up bag",
      },
      {
        name: "Radiant Bride Experience",
        price: "£450",
        includes:
          "Bridal trial + up to 4 hours of service + touch-up + one change of makeup + free glam for a person of your choice",
      },
      {
        name: "The Ultimate Package",
        price: "£600",
        includes:
          "Bridal trial + up to 10 hours of service + touch-up + unlimited changes of makeup + free glam for a person of your choice + travel to and from the bride's suite, ceremony and reception",
      },
    ],
  },

events: {
title: "Events & Special Occasions (Mobile Bookings)",
  eyebrow: "Event Makeup",
  image: img6,
  hero: eventsHero,
  alt: "Event makeup by Anita",
  price: "£100",
  intro:
    "A refined makeup look for celebrations, parties and important occasions when you want to feel effortlessly beautiful.",
  details: [
    "Standard Mobile Glam — £100 (London only)",
    "Extra fees may apply for early bookings",
    "Extra fees may apply for locations outside London",
    "A look created around your outfit and occasion",
    "Soft, polished or more defined makeup options",
    "Camera-ready skin and beautifully balanced definition",
    "A calm, considered experience from start to finish",
  ],
},
};

const inputClass =
  "block min-h-[3rem] w-full min-w-0 rounded-none border-0 border-b border-input bg-transparent px-0 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus-visible:ring-0 sm:text-sm";

const summaryClass =
  "flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-light text-foreground md:text-xl [&::-webkit-details-marker]:hidden";

// Builds a prefilled WhatsApp link from the form, using the WHATSAPP_URL you already have.
function buildWhatsAppUrl(form: HTMLFormElement, priceLabel: string) {
  const get = (name: string) => {
    const el = form.elements.namedItem(name) as HTMLInputElement | null;
    return el && el.value.trim() ? el.value.trim() : "-";
  };

  const lines = [
    "*New enquiry from the website*",
    "",
    "*Service:* " + get("service"),
  ];

  if (get("package") !== "-") {
    lines.push("*Package:* " + get("package"));
  }

  lines.push(
    "*Price:* " + priceLabel,
    "",
    "*Name:* " + get("name"),
    "*Email:* " + get("email"),
    "*Phone:* " + get("phone"),
    "*Date:* " + get("date"),
    "*Preferred time:* " + get("time"),
    "*Location:* " + get("location"),
    "",
    "*More about my wishes:*",
    get("message"),
  );

  const url = new URL(WHATSAPP_URL);
  url.searchParams.set("text", lines.join("\n"));
  return url.toString();
}

function Toggle() {
  return (
    <span aria-hidden="true" className="text-xl leading-none text-primary">
      <span className="group-open:hidden">+</span>
      <span className="hidden group-open:inline">−</span>
    </span>
  );
}

export const Route = createFileRoute("/services/$service")({
  head: () => ({
    meta: [
      { title: "Services | Anita Makeup Artist London" },
      {
        name: "description",
        content: "Book bridal and event makeup with Anita in London.",
      },
    ],
  }),
  component: ServicePage,
});

function PageHero({ service }: { service: Service }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-gold-line">
      <img
        src={service.hero}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-wine/50" aria-hidden />
      <div className="relative mx-auto flex min-h-[55svh] max-w-[1400px] flex-col justify-end px-5 pb-14 pt-32 [text-shadow:0_1px_14px_rgb(0_0_0/0.5)] md:px-10 md:pb-20">
        <Link
          to="/"
          hash="services"
          className="fade-up flex w-fit items-center gap-2 text-[0.68rem] uppercase tracking-[0.22em] text-champagne/85 transition-opacity hover:opacity-70"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Back to services
        </Link>
        <p className="fade-up eyebrow mt-8 !text-gold" style={{ animationDelay: "80ms" }}>
          {service.eyebrow}
        </p>
        <h1
          className="fade-up mt-5 max-w-3xl font-serif text-[2.4rem] font-light leading-[1.05] text-champagne sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "160ms" }}
        >
          {service.title}
        </h1>
      </div>
    </section>
  );
}

function ServicePage() {
  const { service } = Route.useParams();
  const selectedService = SERVICES[service];
  const [sent, setSent] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(0);

  if (!selectedService) {
    return (
      <div className="overflow-x-clip bg-background">
        <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-5 text-center">
          <p className="eyebrow">Service not found</p>
          <h1 className="font-serif text-4xl font-light text-foreground sm:text-5xl">
            Explore Anita&apos;s services.
          </h1>
          <Link
            to="/"
            hash="services"
            className="border-b border-primary pb-1 text-[0.7rem] uppercase tracking-[0.22em] text-primary transition-opacity hover:opacity-60"
          >
            Back to services
          </Link>
        </main>
      </div>
    );
  }

  const packages = selectedService.packages;
  const priceLabel = packages
    ? packages[selectedPackage].price
    : selectedService.price ?? "Price on enquiry";

  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <Header />

      <main>
        <PageHero service={selectedService} />

        <section className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-2 lg:items-start lg:gap-20">
          {/* LEFT: service image */}
          <Reveal className="min-w-0 lg:sticky lg:top-28">
            <img
              src={selectedService.image}
              alt={selectedService.alt}
              className="aspect-[4/5] w-full border border-gold-line object-cover"
              fetchPriority="high"
            />
          </Reveal>

          {/* RIGHT: price, packages, form, description */}
          <Reveal delay={120} className="min-w-0">
            <p className="eyebrow">Enquiry</p>
            <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
              {packages ? "Choose your package." : "Let's plan your look."}
            </h2>
            <p className="mt-5 font-serif text-3xl font-light italic text-primary">{priceLabel}</p>

            <form
              className="mt-10 space-y-8 border-t border-gold-line pt-10"
              onSubmit={(event) => {
                event.preventDefault();
                const form = event.currentTarget;
                const url = buildWhatsAppUrl(form, priceLabel);
                window.open(url, "_blank", "noopener,noreferrer");
                setSent(true);
                form.reset();
                setSelectedPackage(0);
              }}
            >
              <input type="hidden" name="service" value={selectedService.title} />

              {packages && (
                <fieldset>
                  <legend className="eyebrow mb-4">Packages</legend>
                  <input
                    type="hidden"
                    name="package"
                    value={`${packages[selectedPackage].name} — ${packages[selectedPackage].price}`}
                  />
                  <div className="space-y-3">
                    {packages.map((pkg, i) => {
                      const active = selectedPackage === i;
                      return (
                        <button
                          key={pkg.name}
                          type="button"
                          onClick={() => setSelectedPackage(i)}
                          aria-pressed={active}
                          className={cn(
                            "block w-full border px-5 py-5 text-left transition-colors duration-300",
                            active
                              ? "border-primary bg-primary/5"
                              : "border-gold-line hover:border-primary/60",
                          )}
                        >
                          <span className="flex items-baseline justify-between gap-4">
                            <span className="flex items-baseline gap-4">
                              <span className="font-serif text-sm italic tracking-[0.15em] text-primary">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="text-[0.72rem] uppercase tracking-[0.2em] text-foreground">
                                {pkg.name}
                              </span>
                            </span>
                            <span className="font-serif text-xl font-light text-foreground">
                              {pkg.price}
                            </span>
                          </span>
                          <span className="mt-3 block pl-9 text-[0.8rem] leading-[1.75] text-muted-foreground">
                            {pkg.includes}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              )}

              <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
                <label className="eyebrow block">
                  Name
                  <input name="name" required className={cn(inputClass, "mt-2")} />
                </label>
                <label className="eyebrow block">
                  Email
                  <input name="email" type="email" required className={cn(inputClass, "mt-2")} />
                </label>
                <label className="eyebrow block">
                  Phone
                  <input name="phone" type="tel" className={cn(inputClass, "mt-2")} />
                </label>
                <label className="eyebrow block">
                  Date
                  <input name="date" type="date" required className={cn(inputClass, "mt-2")} />
                </label>
                <label className="eyebrow block">
                  Preferred time
                  <input name="time" type="time" className={cn(inputClass, "mt-2")} />
                </label>
                <label className="eyebrow block">
                  Location
                  <input name="location" className={cn(inputClass, "mt-2")} />
                </label>
              </div>

              <label className="eyebrow block">
                Tell me more about your wishes
                <textarea name="message" rows={4} className={cn(inputClass, "mt-2")} />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="w-full bg-primary px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity duration-300 hover:opacity-85 sm:w-auto"
                >
                  Send an enquiry · {priceLabel}
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-primary px-8 py-4 text-center text-[0.7rem] uppercase tracking-[0.22em] text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground sm:w-auto"
                >
                  WhatsApp
                </a>
              </div>

              <p aria-live="polite" className="text-sm text-muted-foreground">
                {sent && "WhatsApp has opened with your enquiry. Just press send to reach Anita."}
              </p>
            </form>

            {/* Description accordions */}
            <div className="mt-12 border-t border-border">
              <details open className="group border-b border-border py-6">
                <summary className={summaryClass}>
                  Description
                  <Toggle />
                </summary>
                <p className="mt-4 text-sm leading-[1.9] text-muted-foreground">
                  {selectedService.intro}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-foreground">
                  <li className="flex items-center gap-3">
                    <MapPin size={16} aria-hidden="true" className="text-primary" />
                    London, England
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={16} aria-hidden="true" className="text-primary" />
                    Personalised to your occasion
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={16} aria-hidden="true" className="text-primary" />
                    Final quote confirmed upon enquiry
                  </li>
                </ul>
              </details>

              <details className="group border-b border-border py-6">
                <summary className={summaryClass}>
                  What&apos;s included
                  <Toggle />
                </summary>
                <ul className="mt-4 space-y-3 text-sm leading-[1.8] text-muted-foreground">
                  {selectedService.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span aria-hidden className="mt-[0.7em] block h-px w-4 flex-none bg-primary/60" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </details>

              {packages && (
                <details className="group border-b border-border py-6">
                  <summary className={summaryClass}>
                    Package details
                    <Toggle />
                  </summary>
                  <ul className="mt-4 space-y-5 text-sm leading-[1.8] text-muted-foreground">
                    {packages.map((pkg) => (
                      <li key={pkg.name}>
                        <span className="text-foreground">
                          {pkg.name} — {pkg.price}
                        </span>
                        <br />
                        {pkg.includes}
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
