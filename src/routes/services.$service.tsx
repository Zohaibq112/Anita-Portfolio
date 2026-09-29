import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Check, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import bridal from "@/assets/image5.png";
import events from "@/assets/image7.png";
import bridal1 from "@/assets/bridal.png";
import logo from "@/assets/Logo.png";

const SERVICES = {
  bridal: {
    title: "Bridal Makeup",
    eyebrow: "The Bridal Experience",
    image: bridal,
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
        includes: "Bridal trial + one off makeup + touch up bag",
      },
      {
        name: "Radiant Bride Experience",
        price: "£450",
        includes:
          "Bridal trial + up to 4 hours of service + touch up + one change of makeup + free glam for a person of your choice",
      },
      {
        name: "Ultimate Bridal Experience",
        price: "£600",
        includes:
          "Bridal trial + up to 10 hours of service + touch up + unlimited change of makeup + free glam for a person of your choice + travel to and from bride's suite to ceremony and reception",
      },
    ],
  },

  events: {
    title: "Events & Special Occasions",
    eyebrow: "Event Makeup",
    image: events,
    alt: "Event makeup by Anita",
    // price: "£000", // <-- add your price here
    intro:
      "A refined makeup look for celebrations, parties and important occasions when you want to feel effortlessly beautiful.",
    details: [
      "A look created around your outfit and occasion",
      "Soft, polished or more defined makeup options",
      "Camera-ready skin and beautifully balanced definition",
      "A calm, considered experience from start to finish",
    ],
  },

  vip: {
    title: "THE “VIP” Experience",
    eyebrow: "The VIP Experience",
    image: bridal1,
    alt: "The VIP bridal experience by Anita",
    price: "£1000",
    intro:
      "Indulge in the ultimate luxury and comfort on your special day with our exclusive VIP Experience. This package has been designed to offer brides the most personalised and glamorous experience, ensuring you feel pampered and flawless throughout your wedding.",
    details: [
      "A pre-styled bridal wig of your choice, tailored to complement your look and vision",
      "Bridal makeup trial to perfect your dream look",
      "Up to 10 hours of on-site service, including makeup touch-ups and unlimited makeup changes to fit your style from ceremony to reception",
      "Complimentary glam for one person of your choice",
      "Travel between your suite, ceremony and reception within London",
    ],
    benefits: [
      {
        title: "Luxury & Comfort",
        text:
          "Enjoy a seamless, high-end experience without worrying about touch-ups or timing. We stay with you throughout the day, ensuring you look picture-perfect at every moment.",
      },
      {
        title: "Personalized Attention",
        text:
          "With dedicated time and unlimited makeup changes, you can switch up your look effortlessly while staying true to your bridal vision.",
      },
      {
        title: "Extra Glam",
        text:
          "Your chosen VIP guest will also enjoy a complimentary glamorous makeover, making sure you both shine on the big day.",
      },
      {
        title: "Convenience",
        text:
          "All services, including travel between your suite, ceremony and reception, are included, giving you peace of mind and freedom to enjoy your day stress-free.",
      },
    ],
  },
} as const;

const inputClass =
  "w-full border-0 border-b border-input bg-transparent px-0 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground focus-visible:ring-0";

const summaryClass =
  "flex cursor-pointer list-none items-center justify-between text-sm uppercase tracking-[0.18em] text-foreground [&::-webkit-details-marker]:hidden";

function Toggle() {
  return (
    <span aria-hidden="true" className="text-lg leading-none">
      <span className="group-open:hidden">+</span>
      <span className="hidden group-open:inline">−</span>
    </span>
  );
}

export const Route = createFileRoute("/services/$service")({
  head: () => ({
    meta: [
      { title: "Service | Anita Makeup Artist" },
      {
        name: "description",
        content: "Book professional makeup services with Anita in London.",
      },
    ],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useParams();
  const selectedService = SERVICES[service as keyof typeof SERVICES];
  const [sent, setSent] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(0);

  if (!selectedService) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-5 text-center">
        <p className="eyebrow">Service not found</p>

        <h1 className="font-serif text-4xl font-light text-foreground sm:text-5xl">
          Explore Anita&apos;s services.
        </h1>

        <Link
          to="/"
          hash="services"
          className="border-b border-foreground/40 pb-1 text-xs uppercase tracking-[0.2em]"
        >
          Back to services
        </Link>
      </main>
    );
  }

  const packages =
    "packages" in selectedService ? selectedService.packages : undefined;

  const benefits =
    "benefits" in selectedService ? selectedService.benefits : undefined;

  const servicePrice =
    "price" in selectedService ? (selectedService.price as string) : undefined;

  // Price shown under the title: the selected package's price, the service price, or a fallback
  const priceLabel = packages
    ? packages[selectedPackage].price
    : servicePrice ?? "Price on enquiry";

  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-5 md:h-20 md:px-10">
          <Link
            to="/"
            aria-label="Anita, makeup artist in London, home"
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Anita Makeup Artist logo"
              className="h-9 w-auto object-contain brightness-0 sm:h-10 md:h-12"
            />
          </Link>

          <Link
            to="/"
            hash="services"
            className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-foreground transition-opacity hover:opacity-60"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            <span className="hidden sm:inline">Back to services</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-[1400px] gap-10 px-5 py-10 md:px-10 md:py-16 lg:grid-cols-2 lg:gap-16">
          {/* LEFT: single service image */}
          <Reveal>
            <div className="lg:sticky lg:top-8 lg:self-start">
              <img
                src={selectedService.image}
                alt={selectedService.alt}
                className="aspect-[4/5] w-full object-cover"
                fetchPriority="high"
              />
            </div>
          </Reveal>

          {/* RIGHT: title, price, packages, form, then description */}
          <Reveal delay={120}>
            <p className="eyebrow">{selectedService.eyebrow}</p>

            <h1 className="mt-4 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
              {selectedService.title}
            </h1>

            <p className="mt-4 text-2xl text-foreground">{priceLabel}</p>

            <form
              className="mt-8 space-y-6 border-t border-border pt-8"
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
                event.currentTarget.reset();
                setSelectedPackage(0);
              }}
            >
              <input
                type="hidden"
                name="service"
                value={selectedService.title}
              />

              {/* Package picker with prices (like Shopify variants) */}
              {packages && (
                <fieldset>
                  <legend className="eyebrow mb-3">Choose a package</legend>

                  <input
                    type="hidden"
                    name="package"
                    value={`${packages[selectedPackage].name} — ${packages[selectedPackage].price}`}
                  />

                  <div className="space-y-3">
                    {packages.map((pkg, i) => (
                      <button
                        key={pkg.name}
                        type="button"
                        onClick={() => setSelectedPackage(i)}
                        aria-pressed={selectedPackage === i}
                        className={`flex w-full items-center justify-between gap-4 border px-4 py-4 text-left text-sm transition-colors ${
                          selectedPackage === i
                            ? "border-foreground text-foreground"
                            : "border-border text-muted-foreground hover:border-foreground/60"
                        }`}
                      >
                        <span>{pkg.name}</span>
                        <span className="text-foreground">{pkg.price}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>
              )}

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="eyebrow">
                  Name
                  <input
                    name="name"
                    required
                    className={`${inputClass} mt-2`}
                  />
                </label>

                <label className="eyebrow">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    className={`${inputClass} mt-2`}
                  />
                </label>

                <label className="eyebrow">
                  Phone
                  <input
                    name="phone"
                    type="tel"
                    className={`${inputClass} mt-2`}
                  />
                </label>

                <label className="eyebrow">
                  Date
                  <input
                    name="date"
                    type="date"
                    required
                    className={`${inputClass} mt-2`}
                  />
                </label>

                <label className="eyebrow">
                  Preferred time
                  <input
                    name="time"
                    type="time"
                    className={`${inputClass} mt-2`}
                  />
                </label>

                <label className="eyebrow">
                  Location
                  <input
                    name="location"
                    className={`${inputClass} mt-2`}
                  />
                </label>
              </div>

              <label className="eyebrow block">
                Tell me more
                <textarea
                  name="message"
                  rows={4}
                  className={`${inputClass} mt-2`}
                />
              </label>

              <button
                type="submit"
                className="w-full bg-foreground px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-85"
              >
                Send an enquiry · {priceLabel}
              </button>

              <p
                aria-live="polite"
                className="text-sm text-muted-foreground"
              >
                {sent &&
                  "Thank you. Anita will get back to you as soon as possible."}
              </p>
            </form>

            {/* DESCRIPTION: at the very end */}
            <div className="mt-10 border-t border-border">
              <details open className="group border-b border-border py-5">
                <summary className={summaryClass}>
                  Description
                  <Toggle />
                </summary>

                <p className="mt-4 text-sm leading-[1.9] text-muted-foreground">
                  {selectedService.intro}
                </p>

                <ul className="mt-6 space-y-3 text-sm text-foreground">
                  <li className="flex items-center gap-3">
                    <MapPin size={16} aria-hidden="true" />
                    London, England
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={16} aria-hidden="true" />
                    Personalised to your occasion
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={16} aria-hidden="true" />
                    Final quote confirmed upon enquiry
                  </li>
                </ul>
              </details>

              <details className="group border-b border-border py-5">
                <summary className={summaryClass}>
                  What&apos;s included
                  <Toggle />
                </summary>

                <ul className="mt-4 space-y-3 text-sm leading-[1.8] text-muted-foreground">
                  {selectedService.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </details>

              {benefits && (
                <details className="group border-b border-border py-5">
                  <summary className={summaryClass}>
                    Benefits
                    <Toggle />
                  </summary>

                  <div className="mt-5 space-y-6">
                    {benefits.map((benefit) => (
                      <div key={benefit.title}>
                        <h3 className="text-sm text-foreground">
                          {benefit.title}
                        </h3>
                        <p className="mt-2 text-sm leading-[1.8] text-muted-foreground">
                          {benefit.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </details>
              )}

              {packages && (
                <details className="group border-b border-border py-5">
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
    </div>
  );
}
