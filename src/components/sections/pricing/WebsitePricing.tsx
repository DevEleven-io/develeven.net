import React from "react";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import CheckItem from "@/components/ui/CheckItem";
import ArrowIcon from "@/components/ui/ArrowIcon";

interface Tier {
  name: string;
  tag: string;
  badge?: string;
  description: string;
  priceTag: string;
  price: string;
  scope: string;
  features: string[];
  note: string;
  buttonText: string;
  featured?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Launch",
    tag: "A focused first impression",
    description:
      "For a new business, campaign or focused service that needs a confident presence.",
    priceTag: "Example USD / One-time project",
    price: "$3,000–5,000",
    scope: "Up to 5 core pages",
    features: [
      "Responsive design & development",
      "Contact form + basic analytics",
      "On-page SEO foundations",
      "Browser testing & launch handover",
    ],
    note: "Static content. No CMS or commerce.",
    buttonText: "Discuss launch",
  },
  {
    name: "Growth",
    tag: "Built to evolve",
    badge: "CMS included",
    featured: true,
    description:
      "For teams publishing content and building a richer, more flexible brand experience.",
    priceTag: "Example USD / One-time project",
    price: "$6,000–10,000",
    scope: "Up to 12 pages + CMS",
    features: [
      "Everything in Launch",
      "Custom UI + reusable components",
      "CMS setup & editor training",
      "Blog, case studies + content migration",
    ],
    note: "One CMS. Complex integrations scoped separately.",
    buttonText: "Discuss growth",
  },
  {
    name: "Commerce",
    tag: "Turn visits into business",
    description:
      "For brands that need a considered storefront and a smooth buying journey.",
    priceTag: "Example USD / One-time project",
    price: "$10,000–18,000",
    scope: "Storefront + up to 50 products",
    features: [
      "Custom storefront & product templates",
      "Cart, checkout & payment setup",
      "Shipping + product catalog configuration",
      "Purchase analytics & handover training",
    ],
    note: "One store. Platform fees and subscriptions excluded.",
    buttonText: "Discuss commerce",
  },
];

export default function WebsitePricing() {
  return (
    <section id="websites" className="w-full bg-[#101211]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-start gap-12 overflow-hidden">
        {/* Header */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 overflow-hidden">
          <div className="max-w-2xl flex flex-col items-start gap-5 overflow-hidden">
            <SectionLabel>01 / Website development</SectionLabel>
            <h2 className="w-full text-[#F2F4EC] text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight leading-[1.08]">
              A website that earns its place.
            </h2>
          </div>
          <div className="max-w-sm flex flex-col items-start overflow-hidden">
            <p className="w-full text-[#C5CDC1] text-base sm:text-lg lg:text-xl font-normal font-sans leading-relaxed">
              Three example scopes. One standard of engineering. Choose the closest
              fit; we’ll tailor the details together.
            </p>
          </div>
        </div>

        {/* Cards Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-7 bg-[#191C19] rounded-[4px] outline outline-1 flex flex-col justify-between items-start gap-6 overflow-hidden ${
                tier.featured
                  ? "outline-[#CEFF69] -outline-offset-1"
                  : "outline-[#343A33] -outline-offset-1"
              }`}
            >
              <div className="w-full flex flex-col items-start gap-5">
                <div className="w-full flex justify-between items-center overflow-hidden">
                  <h3 className="text-[#F2F4EC] text-2xl sm:text-3xl font-bold font-sans tracking-tight">
                    {tier.name}
                  </h3>
                  {tier.badge && (
                    <div className="px-[10px] py-[6px] bg-[#CEFF69] rounded-[4px] overflow-hidden flex items-start">
                      <span className="text-[#11150E] text-xs sm:text-sm font-bold font-sans tracking-wider">
                        {tier.badge}
                      </span>
                    </div>
                  )}
                </div>

                <span className="text-[#CEFF69] text-sm font-bold font-sans tracking-wide">
                  {tier.tag}
                </span>

                <p className="w-full min-h-[48px] text-[#A4ADA0] text-sm sm:text-base font-normal font-sans leading-relaxed">
                  {tier.description}
                </p>

                <div className="w-full flex flex-col items-start gap-2 overflow-hidden">
                  <span className="text-[#A4ADA0] text-xs sm:text-sm font-bold font-sans tracking-wide">
                    {tier.priceTag}
                  </span>
                  <span className="text-[#F2F4EC] text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight">
                    {tier.price}
                  </span>
                </div>

                <div className="w-full h-[1px] bg-[#343A33]" />

                <span className="w-full text-[#F2F4EC] text-sm sm:text-base font-bold font-sans">
                  {tier.scope}
                </span>

                <div className="w-full flex flex-col items-start gap-3 overflow-hidden">
                  {tier.features.map((feature) => (
                    <CheckItem key={feature}>{feature}</CheckItem>
                  ))}
                </div>
              </div>

              <div className="w-full flex flex-col items-start gap-5 pt-2">
                <p className="w-full min-h-[32px] text-[#A4ADA0] text-xs sm:text-sm font-medium font-sans tracking-wide">
                  {tier.note}
                </p>

                {/* CTA Button */}
                <Link
                  href="/#contact"
                  className={`w-full h-[54px] px-[22px] rounded-[4px] flex items-center justify-between overflow-hidden transition-colors group cursor-pointer ${
                    tier.featured
                      ? "bg-[#CEFF69] text-[#11150E] hover:bg-[#b8f050]"
                      : "bg-[#101211] outline outline-1 outline-[#343A33] -outline-offset-1 text-[#F2F4EC] hover:outline-[#A4ADA0]"
                  }`}
                >
                  <span className="text-sm font-semibold font-sans">
                    {tier.buttonText}
                  </span>
                  <ArrowIcon color={tier.featured ? "dark" : "lime"} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 overflow-hidden pt-2">
          <p className="max-w-3xl text-[#A4ADA0] text-xs sm:text-sm font-normal font-sans leading-relaxed">
            Example budgets assume supplied copy and brand assets. Copywriting,
            photography, advanced integrations and ongoing hosting are scoped
            separately. Final pricing follows discovery.
          </p>
          <Link
            href="/#contact"
            className="text-[#CEFF69] text-sm font-medium font-sans hover:underline whitespace-nowrap"
          >
            Need a web app? Let’s scope it ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
