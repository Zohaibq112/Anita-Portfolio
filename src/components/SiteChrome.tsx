import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/Logo.png";

// Shared site chrome (header, footer, WhatsApp button) used by every page.

export const NAV = [
  { label: "Home", href: "/#start" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Bridal Makeup", href: "/#bridal" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export const INSTAGRAM = "https://instagram.com/gems.beauty.london";

// Digits only: country code + number, no "+", spaces or leading 0. Example: 447460285854
const WHATSAPP_NUMBER = "447460285854";
const WHATSAPP_MESSAGE = "Hello Anita, I'd like to enquire about your makeup services.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

/**
 * Nav link helper: the About page is a real route (client-side <Link>),
 * everything else is a section on the home page ("/#section").
 */
export function SiteLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  if (href === "/about") {
    return (
      <Link to="/about" className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

export function Header() {
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
        <a href="/#start" aria-label="Anita, makeup artist in London, home" className="flex items-center">
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
                <SiteLink
                  href={n.href}
                  className={cn(
                    "text-[0.7rem] uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-60",
                    scrolled ? "text-foreground" : "text-champagne",
                  )}
                >
                  {n.label}
                </SiteLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className={cn(
              "hidden border px-6 py-3 text-[0.7rem] uppercase tracking-[0.2em] transition-colors duration-300 md:inline-block",
              scrolled
                ? "border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground"
                : "border-gold/70 text-champagne hover:bg-champagne hover:text-foreground",
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
                <SiteLink
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-serif text-2xl text-foreground"
                >
                  {n.label}
                </SiteLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-wine text-champagne">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <img src={logo} alt="Anita Makeup Artist logo" className="h-12 w-auto object-contain brightness-0 invert" />
            <p className="mt-4 text-[0.65rem] uppercase tracking-[0.26em] text-champagne/60">
              Makeup Artist • London
            </p>
            <p className="mt-6 font-serif text-lg font-light italic text-gold">
              Flawless • Modern • Tailored
            </p>
          </div>

          <nav aria-label="Footer Navigation">
            <p className="text-[0.65rem] uppercase tracking-[0.26em] text-champagne/60">Navigation</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <SiteLink
                    href={n.href}
                    className="text-sm text-champagne/85 transition-opacity hover:opacity-60"
                  >
                    {n.label}
                  </SiteLink>
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
                  Instagram — @gems.beauty.london
                </a>
              </li>
              <li>London</li>
            </ul>
            <ul className="mt-8 space-y-3 text-sm text-champagne/60">
              <li>
                <a href="/#contact" className="transition-opacity hover:opacity-100">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="/#contact" className="transition-opacity hover:opacity-100">
                  Legal notice
                </a>
              </li>
              <li>
                <a href="/#contact" className="transition-opacity hover:opacity-100">
                  Cookie policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-16 border-t border-gold/20 pt-8 text-[0.65rem] uppercase tracking-[0.26em] text-champagne/50">
          © Anita
        </p>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
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
