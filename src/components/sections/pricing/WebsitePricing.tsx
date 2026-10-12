import React from "react";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import CheckItem from "@/components/ui/CheckItem";
import ArrowIcon from "@/components/ui/ArrowIcon";

interface Tier {
  name: string;
  tag: string;
  badge?: string;
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
    priceTag: "Example USD / One-time project",
    price: "$3,000–5,000",
    scope: "Up to 5 core pages",
    features: [
      "Responsive design & development",
      "Contact form + basic analytics",
      "On-page SEO foundations",
      "Browser testing & launch handover",
      "30-day post-launch warranty & fixes",
    ],
    note: "Static content. No CMS or commerce.",
    buttonText: "Discuss launch",
  },
  {
    name: "Growth",
    tag: "Built to evolve",
    badge: "CMS + Maintenance included",
    featured: true,
    priceTag: "Example USD / One-time project",
    price: "$6,000–10,000",
    scope: "Up to 12 pages + CMS",
    features: [
      "Everything in Launch",
      "Custom UI + reusable components",
      "CMS setup & editor training",
      "Blog, case studies + content migration",
      "3 months included maintenance & updates",
    ],
    note: "Includes 3 months of maintenance. Complex integrations scoped separately.",
    buttonText: "Discuss growth",
  },
  {
    name: "Commerce",
    tag: "Turn visits into business",
    priceTag: "Example USD / One-time project",
    price: "$10,000–18,000",
    scope: "Storefront + up to 50 products",
    features: [
      "Custom storefront & product templates",
      "Cart, checkout & payment setup",
      "Shipping + product catalog configuration",
      "Purchase analytics & handover training",
      "6 months included store maintenance & updates",
    ],
    note: "Includes 6 months of store maintenance. Platform fees excluded.",
    buttonText: "Discuss commerce",
  },
];

export default function WebsitePricing() {
  return (
    <section id="websites" className="w-full bg-[#101211]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 pt-8 pb-20 lg:pt-10 lg:pb-24 flex flex-col items-start gap-6 sm:gap-8 overflow-hidden">
        {/* Header */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <SectionLabel>01 / Website development & maintenance</SectionLabel>
          <span className="text-[#A4ADA0] text-xs sm:text-sm font-medium font-sans">
            Three example scopes · Post-launch maintenance included
          </span>
        </div>

        {/* Cards Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-7 bg-[#191C19] rounded-lg outline outline-1 flex flex-col justify-between items-start gap-6 overflow-hidden ${
                tier.featured
                  ? "outline-[#CEFF69] -outline-offset-1"
                  : "outline-[#2A3029] -outline-offset-1"
              }`}
            >
              <div className="w-full flex flex-col items-start gap-5">
                <div className="w-full flex justify-between items-center overflow-hidden">
                  <h3 className="text-[#F2F4EC] text-2xl sm:text-3xl font-bold font-sans tracking-tight">
                    {tier.name}
                  </h3>
                  {tier.badge && (
                    <div className="px-[10px] py-[6px] bg-[#CEFF69] rounded-md overflow-hidden flex items-start">
                      <span className="text-[#11150E] text-xs sm:text-sm font-bold font-sans tracking-wider">
                        {tier.badge}
                      </span>
                    </div>
                  )}
                </div>

                <span className="text-[#CEFF69] text-sm font-bold font-sans tracking-wide">
                  {tier.tag}
                </span>

                <div className="w-full flex flex-col items-start gap-2 overflow-hidden">
                  <span className="text-[#A4ADA0] text-xs sm:text-sm font-bold font-sans tracking-wide">
                    {tier.priceTag}
                  </span>
                  <span className="text-[#F2F4EC] text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight">
                    {tier.price}
                  </span>
                </div>

                <div className="w-full h-[1px] bg-[#2A3029]" />

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
                  className={`w-full h-[54px] px-[22px] rounded-lg flex items-center justify-between overflow-hidden transition-colors group cursor-pointer ${
                    tier.featured
                      ? "bg-[#CEFF69] text-[#11150E] hover:bg-[#b8f050]"
                      : "bg-[#101211] outline outline-1 outline-[#2A3029] -outline-offset-1 text-[#F2F4EC] hover:outline-[#A4ADA0]"
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
