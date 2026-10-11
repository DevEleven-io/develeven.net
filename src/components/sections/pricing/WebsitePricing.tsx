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
    tag: "A FOCUSED FIRST IMPRESSION",
    description:
      "For a new business, campaign or focused service that needs a confident presence.",
    priceTag: "EXAMPLE USD / ONE-TIME PROJECT",
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
    tag: "BUILT TO EVOLVE",
    badge: "CMS INCLUDED",
    featured: true,
    description:
      "For teams publishing content and building a richer, more flexible brand experience.",
    priceTag: "EXAMPLE USD / ONE-TIME PROJECT",
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
    tag: "TURN VISITS INTO BUSINESS",
    description:
      "For brands that need a considered storefront and a smooth buying journey.",
    priceTag: "EXAMPLE USD / ONE-TIME PROJECT",
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
    <section
      id="websites"
      className="w-full max-w-[1440px] mx-auto px-[64px] py-[88px] flex flex-col items-start gap-[40px] overflow-hidden"
    >
      {/* Header */}
      <div className="w-full flex justify-between items-end overflow-hidden">
        <div className="w-[760px] flex flex-col items-start gap-[20px] overflow-hidden">
          <SectionLabel>01 / WEBSITE DEVELOPMENT</SectionLabel>
          <h2 className="w-full text-[#F2F4EC] text-[52px] font-normal font-sans leading-[56.16px]">
            A website that earns its place.
          </h2>
        </div>
        <div className="w-[380px] flex flex-col items-start overflow-hidden">
          <p className="w-full text-[#A4ADA0] text-[16px] font-normal font-sans leading-[26.40px]">
            Three example scopes. One standard of engineering. Choose the closest
            fit; we’ll tailor the details together.
          </p>
        </div>
      </div>

      {/* Cards Row */}
      <div className="w-full flex items-start gap-[16px] overflow-hidden">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex-1 p-[28px] bg-[#191C19] rounded-[4px] outline outline-1 flex flex-col items-start gap-[22px] overflow-hidden ${
              tier.featured
                ? "outline-[#CEFF69] -outline-offset-1"
                : "outline-[#343A33] -outline-offset-1"
            }`}
          >
            <div className="w-full flex justify-between items-center overflow-hidden">
              <h3 className="text-[#F2F4EC] text-[28px] font-normal font-sans">
                {tier.name}
              </h3>
              {tier.badge && (
                <div className="px-[10px] py-[6px] bg-[#CEFF69] rounded-[4px] overflow-hidden flex items-start">
                  <span className="text-[#11150E] text-[10px] font-normal font-mono">
                    {tier.badge}
                  </span>
                </div>
              )}
            </div>

            <span className="text-[#CEFF69] text-[10px] font-normal font-mono">
              {tier.tag}
            </span>

            <p className="w-full h-[66px] text-[#A4ADA0] text-[15px] font-normal font-sans leading-[23.25px]">
              {tier.description}
            </p>

            <div className="w-full flex flex-col items-start gap-[8px] overflow-hidden">
              <span className="text-[#A4ADA0] text-[10px] font-normal font-mono">
                {tier.priceTag}
              </span>
              <span className="text-[#F2F4EC] text-[38px] font-normal font-sans">
                {tier.price}
              </span>
            </div>

            <div className="w-full h-[1px] bg-[#343A33]" />

            <span className="w-full text-[#F2F4EC] text-[16px] font-semibold font-sans">
              {tier.scope}
            </span>

            <div className="w-full flex flex-col items-start gap-[12px] overflow-hidden">
              {tier.features.map((feature) => (
                <CheckItem key={feature}>{feature}</CheckItem>
              ))}
            </div>

            <p className="w-full h-[40px] text-[#A4ADA0] text-[10px] font-normal font-mono leading-[16px]">
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
              <span className="text-[14px] font-semibold font-sans">
                {tier.buttonText}
              </span>
              <ArrowIcon color={tier.featured ? "dark" : "lime"} />
            </Link>
          </div>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="w-full flex justify-between items-center overflow-hidden">
        <p className="w-[900px] text-[#A4ADA0] text-[13px] font-normal font-sans leading-[20.80px]">
          Example budgets assume supplied copy and brand assets. Copywriting,
          photography, advanced integrations and ongoing hosting are scoped
          separately. Final pricing follows discovery.
        </p>
        <Link
          href="/#contact"
          className="text-[#CEFF69] text-[14px] font-normal font-sans hover:underline whitespace-nowrap"
        >
          Need a web app? Let’s scope it ↗
        </Link>
      </div>
    </section>
  );
}
