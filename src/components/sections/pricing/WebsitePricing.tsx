import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import PricingCard, { PricingCardProps } from "@/components/sections/pricing/PricingCard";
import {
  WebDevIcon,
  LayersIcon,
  CommerceIcon,
  BracesIcon,
  GameDevIcon,
  EngineeringIcon,
} from "@/components/ui/Icons";

const websiteTiers: PricingCardProps[] = [
  {
    name: "Launch",
    tag: "A focused first impression",
    code: "WB / 01",
    icon: <WebDevIcon size={24} color="#CEFF69" />,
    price: "$3k to $5k",
    period: "/ project",
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
    icon: <LayersIcon size={24} color="#CEFF69" />,
    price: "$6k to $10k",
    period: "/ project",
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
    code: "WB / 03",
    icon: <CommerceIcon size={24} color="#CEFF69" />,
    price: "$10k to $18k",
    period: "/ project",
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

const softwareTiers: PricingCardProps[] = [
  {
    name: "Custom software",
    tag: "SaaS, internal tools & platforms",
    code: "SW / 01",
    icon: <BracesIcon size={24} color="#CEFF69" />,
    price: "$15k to $30k",
    period: "/ project",
    scope: "One core workflow, two roles & integration",
    features: [
      "Discovery + system architecture",
      "UX flows & working prototype",
      "Application development + testing",
      "Deployment, documentation & handover",
      "Post-launch warranty & handover support",
    ],
    note: "Multi-product platforms, complex migrations and regulated workflows need a tailored estimate.",
    buttonText: "Scope your software",
  },
  {
    name: "Game development",
    tag: "Playable prototypes & production",
    code: "GM / 02",
    icon: <GameDevIcon size={24} color="#CEFF69" />,
    price: "$8k to $15k",
    period: "/ project",
    scope: "One core mechanic, one level & platform",
    features: [
      "Gameplay systems & interaction design",
      "Engine setup + prototype build",
      "Placeholder art & basic UI integration",
      "Playtesting + performance validation",
      "Technical handover & architecture notes",
    ],
    note: "Full games, original art, multiplayer, console certification and live operations are quoted separately.",
    buttonText: "Scope your game",
  },
  {
    name: "Engineering services",
    tag: "Targeted architecture & sprints",
    code: "EN / 03",
    icon: <EngineeringIcon size={24} color="#CEFF69" />,
    price: "$2k to $5k",
    period: "/ project",
    scope: "One bounded technical problem",
    features: [
      "Architecture or codebase assessment",
      "API, integration or automation work",
      "Cloud & delivery pipeline improvements",
      "Refactoring, benchmarks & testing",
      "Findings, implementation notes + handover",
    ],
    note: "Ongoing team extension, infrastructure rebuilds and larger integrations use a tailored engagement.",
    buttonText: "Discuss engineering",
  },
];

export default function WebsitePricing() {
  return (
    <section id="websites" className="w-full bg-[#101211]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 pt-8 pb-20 lg:pt-10 lg:pb-24 flex flex-col items-start gap-14 lg:gap-16">
        {/* 01 / Website development & maintenance */}
        <div className="w-full flex flex-col items-start gap-6 sm:gap-8">
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <SectionLabel>01 / Website development & maintenance</SectionLabel>
            <span className="text-[#A4ADA0] text-xs sm:text-sm font-medium font-sans">
              Three example scopes · Post-launch maintenance included
            </span>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteTiers.map((tier) => (
              <PricingCard key={tier.name} {...tier} />
            ))}
          </div>
        </div>

        {/* 02 / Custom software, games & engineering */}
        <div id="software" className="w-full flex flex-col items-start gap-6 sm:gap-8 scroll-mt-24">
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <SectionLabel>02 / Custom software, games & engineering</SectionLabel>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareTiers.map((svc) => (
              <PricingCard key={svc.name} {...svc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
