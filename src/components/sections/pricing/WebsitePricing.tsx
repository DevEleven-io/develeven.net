import SectionLabel from "@/components/ui/SectionLabel";
import CheckItem from "@/components/ui/CheckItem";
import ArrowIcon from "@/components/ui/ArrowIcon";

interface PricingTier {
  name: string;
  tagline: string;
  description: string;
  priceLabel: string;
  price: string;
  scope: string;
  features: string[];
  note: string;
  ctaLabel: string;
  featured?: boolean;
  badge?: string;
}

const tiers: PricingTier[] = [
  {
    name: "Launch",
    tagline: "A FOCUSED FIRST IMPRESSION",
    description:
      "For a new business, campaign or focused service that needs a confident presence.",
    priceLabel: "EXAMPLE USD / ONE-TIME PROJECT",
    price: "$3,000–5,000",
    scope: "Up to 5 core pages",
    features: [
      "Responsive design & development",
      "Contact form + basic analytics",
      "On-page SEO foundations",
      "Browser testing & launch handover",
    ],
    note: "Static content. No CMS or commerce.",
    ctaLabel: "Discuss launch",
  },
  {
    name: "Growth",
    tagline: "BUILT TO EVOLVE",
    description:
      "For teams publishing content and building a richer, more flexible brand experience.",
    priceLabel: "EXAMPLE USD / ONE-TIME PROJECT",
    price: "$6,000–10,000",
    scope: "Up to 12 pages + CMS",
    features: [
      "Everything in Launch",
      "Custom UI + reusable components",
      "CMS setup & editor training",
      "Blog, case studies + content migration",
    ],
    note: "One CMS. Complex integrations scoped separately.",
    ctaLabel: "Discuss growth",
    featured: true,
    badge: "CMS INCLUDED",
  },
  {
    name: "Commerce",
    tagline: "TURN VISITS INTO BUSINESS",
    description:
      "For brands that need a considered storefront and a smooth buying journey.",
    priceLabel: "EXAMPLE USD / ONE-TIME PROJECT",
    price: "$10,000–18,000",
    scope: "Storefront + up to 50 products",
    features: [
      "Custom storefront & product templates",
      "Cart, checkout & payment setup",
      "Shipping + product catalog configuration",
      "Purchase analytics & handover training",
    ],
    note: "One store. Platform fees and subscriptions excluded.",
    ctaLabel: "Discuss commerce",
  },
];

function WebsitePricing() {
  return (
    <section id="websites" className="w-full max-w-[1440px] mx-auto px-16 py-20 flex flex-col gap-10">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div className="w-[760px] flex flex-col gap-5">
          <SectionLabel>01 / WEBSITE DEVELOPMENT</SectionLabel>
          <h2 className="text-stone-100 text-5xl font-sans leading-[1.02]">
            A website that earns its place.
          </h2>
        </div>
        <div className="w-96">
          <p className="text-neutral-400 text-base leading-7 font-sans">
            Three example scopes. One standard of engineering. Choose the
            closest fit; we&apos;ll tailor the details together.
          </p>
        </div>
      </div>

      {/* Tier cards */}
      <div className="flex gap-4">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex-1 p-7 bg-zinc-900 rounded-sm outline outline-1 flex flex-col gap-5 ${
              tier.featured ? "outline-lime-300" : "outline-neutral-700"
            }`}
          >
            {/* Name + badge */}
            <div className="flex justify-between items-center">
              <h3 className="text-stone-100 text-3xl font-sans">{tier.name}</h3>
              {tier.badge && (
                <span className="px-2.5 py-1.5 bg-lime-300 rounded-sm font-mono text-[10px] text-neutral-900">
                  {tier.badge}
                </span>
              )}
            </div>

            <span className="font-mono text-[10px] text-lime-300">{tier.tagline}</span>

            <p className="h-16 text-neutral-400 text-base leading-6 font-sans">
              {tier.description}
            </p>

            {/* Price */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] text-neutral-400">{tier.priceLabel}</span>
              <span className="text-stone-100 text-4xl font-sans">{tier.price}</span>
            </div>

            <div className="w-full h-px bg-neutral-700" />

            <span className="text-stone-100 text-base font-semibold font-sans">{tier.scope}</span>

            {/* Features */}
            <div className="flex flex-col gap-3">
              {tier.features.map((f) => (
                <CheckItem key={f}>{f}</CheckItem>
              ))}
            </div>

            <p className="h-10 font-mono text-[10px] text-neutral-400 leading-4">{tier.note}</p>

            {/* CTA */}
            <a
              href="/#contact"
              className={`h-14 px-5 rounded-sm flex items-center gap-7 outline outline-1 transition-colors ${
                tier.featured
                  ? "bg-lime-300 outline-lime-300 text-neutral-900 hover:bg-lime-200"
                  : "bg-neutral-900 outline-neutral-700 text-stone-100 hover:outline-neutral-500"
              }`}
            >
              <span className="flex-1 text-sm font-semibold font-sans">{tier.ctaLabel}</span>
              <ArrowIcon className={tier.featured ? "text-neutral-900" : "text-lime-300"} />
            </a>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="flex justify-between items-center">
        <p className="w-[900px] text-neutral-400 text-xs leading-5 font-sans">
          Example budgets assume supplied copy and brand assets. Copywriting,
          photography, advanced integrations and ongoing hosting are scoped
          separately. Final pricing follows discovery.
        </p>
        <a href="/#contact" className="text-lime-300 text-sm font-sans hover:text-lime-200 transition-colors">
          Need a web app? Let&apos;s scope it ↗
        </a>
      </div>
    </section>
  );
}

export default WebsitePricing;
