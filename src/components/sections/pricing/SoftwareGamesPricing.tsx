import React from "react";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import CheckItem from "@/components/ui/CheckItem";
import ArrowIcon from "@/components/ui/ArrowIcon";
import {
  BracesIcon,
  GameDevIcon,
  EngineeringIcon,
} from "@/components/ui/Icons";

interface ServiceTier {
  code: string;
  title: string;
  subtitle: string;
  price: string;
  priceTag: string;
  scope: string;
  features: string[];
  note: string;
  buttonText: string;
  icon: React.ReactNode;
}

const services: ServiceTier[] = [
  {
    code: "SW / 01",
    title: "Custom software",
    subtitle: "SaaS, internal tools and connected systems.",
    price: "$15,000–30,000",
    priceTag: "Example USD / Focused MVP",
    scope: "Example scope: one core workflow, two user roles and one integration.",
    features: [
      "Discovery + system architecture",
      "UX flows & working prototype",
      "Application development + testing",
      "Deployment, documentation & handover",
    ],
    note: "Multi-product platforms, complex migrations and regulated workflows need a tailored estimate.",
    buttonText: "Scope your software",
    icon: <BracesIcon size={24} color="#CEFF69" />,
  },
  {
    code: "GM / 02",
    title: "Game development",
    subtitle: "Validate the experience before a full production.",
    price: "$8,000–15,000",
    priceTag: "Example USD / Playable prototype",
    scope: "Example scope: one core mechanic, one level and one target platform.",
    features: [
      "Gameplay systems & interaction design",
      "Engine setup + prototype build",
      "Placeholder art & basic UI integration",
      "Playtesting + technical handover",
    ],
    note: "Full games, original art, multiplayer, console certification and live operations are quoted separately.",
    buttonText: "Scope your game",
    icon: <GameDevIcon size={24} color="#CEFF69" />,
  },
  {
    code: "EN / 03",
    title: "Engineering services",
    subtitle: "Specialist expertise for a specific challenge.",
    price: "$2,000–5,000",
    priceTag: "Example USD / Focused sprint",
    scope: "Example scope: one bounded technical problem with agreed deliverables.",
    features: [
      "Architecture or codebase assessment",
      "API, integration or automation work",
      "Cloud & delivery pipeline improvements",
      "Findings, implementation notes + next steps",
    ],
    note: "Ongoing team extension, infrastructure rebuilds and larger integrations use a tailored engagement.",
    buttonText: "Discuss engineering",
    icon: <EngineeringIcon size={24} color="#CEFF69" />,
  },
];

export default function SoftwareGamesPricing() {
  return (
    <section id="software" className="w-full bg-[#101211]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-start gap-12 overflow-hidden">
        {/* Header */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div className="max-w-2xl flex flex-col items-start gap-5">
            <SectionLabel>02 / Custom software, games & engineering</SectionLabel>
            <h2 className="w-full text-[#F2F4EC] text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight leading-[1.12] pb-2">
              Not every build
              <br />
              fits in a package.
            </h2>
          </div>
          <div className="lg:max-w-md flex flex-col items-start pb-2">
            <p className="w-full text-[#C5CDC1] text-base sm:text-lg lg:text-xl font-normal font-sans leading-relaxed">
              Start with a useful, bounded outcome. These example budgets frame
              the conversation, not your final quote.
            </p>
          </div>
        </div>

        {/* Cards Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
          {services.map((svc) => (
            <div
              key={svc.code}
              className="p-7 bg-[#191C19] rounded-lg outline outline-1 outline-[#2A3029] -outline-offset-1 flex flex-col justify-between items-start gap-6 overflow-hidden"
            >
              <div className="w-full flex flex-col items-start gap-5">
                <div className="w-full flex justify-between items-start overflow-hidden">
                  <div className="w-[26px] h-[26px] flex items-center justify-center shrink-0">
                    {svc.icon}
                  </div>
                  <span className="text-[#A4ADA0] text-xs sm:text-sm font-bold font-sans tracking-wider">
                    {svc.code}
                  </span>
                </div>

                <h3 className="w-full text-[#F2F4EC] text-2xl font-bold font-sans tracking-tight">
                  {svc.title}
                </h3>

                <p className="w-full min-h-[44px] text-[#A4ADA0] text-sm sm:text-base font-normal font-sans leading-relaxed">
                  {svc.subtitle}
                </p>

                <div className="w-full flex flex-col items-start gap-2 overflow-hidden">
                  <span className="text-[#F2F4EC] text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight">
                    {svc.price}
                  </span>
                  <span className="text-[#CEFF69] text-xs sm:text-sm font-bold font-sans tracking-wide">
                    {svc.priceTag}
                  </span>
                </div>

                <div className="w-full h-[1px] bg-[#2A3029]" />

                <p className="w-full min-h-[50px] text-[#F2F4EC] text-sm sm:text-base font-semibold font-sans leading-relaxed">
                  {svc.scope}
                </p>

                <div className="w-full flex flex-col items-start gap-3 overflow-hidden">
                  {svc.features.map((feature) => (
                    <CheckItem key={feature}>{feature}</CheckItem>
                  ))}
                </div>
              </div>

              <div className="w-full flex flex-col items-start gap-5 pt-2">
                <p className="w-full min-h-[50px] text-[#A4ADA0] text-xs sm:text-sm font-medium font-sans tracking-wide">
                  {svc.note}
                </p>

                {/* CTA Button */}
                <Link
                  href="/#contact"
                  className="w-full h-[54px] px-[22px] bg-[#101211] rounded-lg outline outline-1 outline-[#2A3029] -outline-offset-1 flex items-center justify-between overflow-hidden hover:outline-[#A4ADA0] transition-colors group cursor-pointer"
                >
                  <span className="text-[#F2F4EC] text-sm font-semibold font-sans">
                    {svc.buttonText}
                  </span>
                  <ArrowIcon color="lime" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Banner */}
        <div className="w-full p-6 sm:p-7 rounded-lg outline outline-1 outline-[#2A3029] -outline-offset-1 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 overflow-hidden">
          <div className="max-w-3xl flex flex-col items-start gap-2 overflow-hidden">
            <h4 className="text-[#F2F4EC] text-lg sm:text-xl font-medium font-sans">
              Need engineering capacity, not a standalone project?
            </h4>
            <p className="w-full text-[#A4ADA0] text-sm font-normal font-sans leading-relaxed">
              A dedicated partnership can flex around your roadmap. Team size,
              allocation and monthly budget are agreed after discovery.
            </p>
          </div>
          <Link
            href="/#contact"
            className="text-[#CEFF69] text-sm font-medium font-sans hover:underline whitespace-nowrap flex items-center gap-2 group shrink-0"
          >
            <span>Discuss a partnership</span>
            <ArrowIcon color="lime" size="md" />
          </Link>
        </div>
      </div>
    </section>
  );
}
