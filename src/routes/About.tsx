import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Footer, Header, WHATSAPP_URL, WhatsAppButton } from "@/components/SiteChrome";
import artist from "@/assets/artist.png";
import bridal1 from "@/assets/bridal1.png";
import bridal11 from "@/assets/bridal11.png";
import img2 from "@/assets/newimage2.png";
import img9 from "@/assets/newimagebridal.png";

export const Route = createFileRoute("/About")({
  head: () => ({
    meta: [
      { title: "About Anita Lordman | Gems Beauty London" },
      {
        name: "description",
        content:
          "Meet Anita Lordman, founder of Gems Beauty London: a qualified bridal makeup artist with almost seven years of experience and a 2025 Hair & Beauty Awards UK finalist.",
      },
      { property: "og:title", content: "About Anita Lordman | Gems Beauty London" },
      {
        property: "og:description",
        content: "Soft, elegant and glowing bridal and occasion makeup in London by Anita Lordman.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:locale", content: "en_GB" },
    ],
  }),
  component: AboutPage,
});

const CREDENTIALS = [
  { value: "~7 years", label: "Creating bridal & occasion looks" },
  { value: "Certified", label: "Academy of Freelance Makeup London" },
  { value: "Bridal qualified", label: "Layefa Beauty" },
  { value: "Finalist 2025", label: "Best Bridal Makeup Artist, Hair & Beauty Awards UK" },
];

const APPROACH = [
  {
    no: "01",
    title: "Consultation",
    text: "Understanding exactly what you want, from a subtle, natural glow to an elevated full-glam look.",
  },
  {
    no: "02",
    title: "Tailored artistry",
    text: "Soft, elegant, glowing makeup matched to your features and your skin type.",
  },
  {
    no: "03",
    title: "The final touch-up",
    text: "A calm, personalised experience so you feel confident and completely yourself.",
  },
];

function PageHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-gold-line">
      <img
        src={bridal1}
        alt="Bridal makeup by Anita Lordman"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-wine/45" aria-hidden />
      <div className="relative mx-auto flex min-h-[70svh] max-w-[1400px] flex-col justify-end px-5 pb-16 pt-32 [text-shadow:0_1px_14px_rgb(0_0_0/0.5)] md:px-10 md:pb-24">
        <p className="fade-up eyebrow !text-gold">About • Gems Beauty London</p>
        <h1
          className="fade-up mt-6 max-w-3xl font-serif text-[2.4rem] font-light leading-[1.05] text-champagne sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "120ms" }}
        >
          Meet Anita Lordman.
        </h1>
        <p
          className="fade-up mt-7 max-w-xl text-sm leading-relaxed text-champagne/85 md:text-base"
          style={{ animationDelay: "240ms" }}
        >
          Founder of Gems Beauty London. Bridal and special-occasion makeup artist.
        </p>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-24">
        <Reveal className="min-w-0 lg:sticky lg:top-28">
          <img
            src={artist}
            alt="Portrait of Anita Lordman, founder of Gems Beauty London"
            className="aspect-[3/4] w-full border border-gold-line object-cover"
          />
          <p className="mt-5 font-serif text-lg font-light italic text-primary">
            Anita Lordman, Founder
          </p>
        </Reveal>

        <Reveal delay={120} className="min-w-0">
          <p className="eyebrow">Her Story</p>
          <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
            Enhancing, never masking, your natural beauty.
          </h2>
          <p className="mt-8 text-sm leading-[1.9] text-muted-foreground md:text-base">
            Gems Beauty London was founded by Anita Lordman, a professional makeup artist with almost
            seven years of experience creating elevated, long-lasting beauty looks for brides and
            special occasions.
          </p>
          <p className="mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base">
            With a passion for enhancing rather than masking natural beauty, Anita is known for
            creating soft, elegant and glowing makeup tailored to each individual client. Her bridal
            approach is centred around understanding exactly what each bride wants — whether
            that&rsquo;s a subtle, natural glow or a more elevated full-glam look — while ensuring she
            still looks and feels like herself.
          </p>
          <p className="mt-6 text-sm leading-[1.9] text-muted-foreground md:text-base">
            Anita is professionally trained and qualified, holding a certificate from the Academy of
            Freelance Makeup London as well as a bridal makeup qualification from Layefa Beauty. Her
            work and dedication to the beauty industry have also earned her recognition as a finalist
            for{" "}
            <em className="font-serif text-[1.05em] text-foreground">
              Best Bridal Makeup Artist at the Hair &amp; Beauty Awards UK 2025
            </em>
            .
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-10">
            {CREDENTIALS.map((c) => (
              <div key={c.label} className="border-t border-gold-line pt-5">
                <dt className="font-serif text-xl font-light text-primary md:text-2xl">{c.value}</dt>
                <dd className="mt-2 text-[0.68rem] uppercase leading-[1.7] tracking-[0.16em] text-muted-foreground sm:tracking-[0.2em]">
                  {c.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 md:px-10 md:py-32 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <p className="eyebrow">The Experience</p>
          <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
            Calm, personalised, professional.
          </h2>
          <p className="mt-8 border-l border-gold-line pl-6 text-sm leading-[1.9] text-muted-foreground md:text-base">
            From the initial consultation to the final touch-up, Anita takes pride in creating a calm,
            personalised and professional experience. Brides trust her not only for her makeup
            artistry, but for her attention to detail, understanding of different skin types and
            commitment to making every client feel confident, beautiful and completely themselves on
            one of the most important days of their lives.
          </p>

          <ol className="mt-12 space-y-8">
            {APPROACH.map((s) => (
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
        </Reveal>

        <Reveal
          delay={120}
          className="order-1 grid grid-cols-2 items-start gap-4 md:gap-6 lg:order-2"
        >
          <img
            src={bridal11}
            alt="Bride with soft, glowing makeup by Anita"
            loading="lazy"
            className="aspect-[3/4] w-full border border-gold-line object-cover"
          />
          <div className="mt-10 space-y-4 md:mt-16 md:space-y-6">
            <img
              src={img2}
              alt="Natural bridal glow by Anita"
              loading="lazy"
              className="aspect-[3/4] w-full border border-gold-line object-cover"
            />
            <img
              src={img9}
              alt="Long-lasting bridal makeup by Anita"
              loading="lazy"
              className="aspect-square w-full border border-gold-line object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutCta() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 text-center md:px-10 md:py-32">
      <Reveal>
        <p className="eyebrow">Work with Anita</p>
        <h2 className="mt-6 font-serif text-3xl font-light leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
          Let&rsquo;s plan your look.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-[1.9] text-muted-foreground md:text-base">
          Tell Anita about your wedding, event or photoshoot, and she&rsquo;ll get back to you with
          availability.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/#contact"
            className="w-full bg-primary px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity duration-300 hover:opacity-85 sm:w-auto"
          >
            Send an enquiry
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-primary px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground sm:w-auto"
          >
            Message on WhatsApp
          </a>
        </div>
        <Link
          to="/"
          className="mt-10 inline-block border-b border-primary/50 pb-1 text-[0.68rem] uppercase tracking-[0.22em] text-primary transition-colors duration-300 hover:border-primary"
        >
          Back to home
        </Link>
      </Reveal>
    </section>
  );
}

function AboutPage() {
  return (
    <div className="overflow-x-clip bg-background">
      <Header />
      <main>
        <PageHero />
        <Story />
        <Approach />
        <AboutCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}