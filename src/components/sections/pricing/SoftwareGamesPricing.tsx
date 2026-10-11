import React from "react";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import CheckItem from "@/components/ui/CheckItem";
import ArrowIcon from "@/components/ui/ArrowIcon";

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
  iconShape: React.ReactNode;
}

const services: ServiceTier[] = [
  {
    code: "SW / 01",
    title: "Custom software",
    subtitle: "SaaS, internal tools and connected systems.",
    price: "$15,000–30,000",
    priceTag: "EXAMPLE USD / FOCUSED MVP",
    scope: "Example scope: one core workflow, two user roles and one integration.",
    features: [
      "Discovery + system architecture",
      "UX flows & working prototype",
      "Application development + testing",
      "Deployment, documentation & handover",
    ],
    note: "Multi-product platforms, complex migrations and regulated workflows need a tailored estimate.",
    buttonText: "Scope your software",
    iconShape: (
      <div className="w-[19.50px] h-[19.50px] left-[3.25px] top-[3.25px] absolute outline outline-[1.5px] outline-[#CEFF69] -outline-offset-[0.75px]" />
    ),
  },
  {
    code: "GM / 02",
    title: "Game development",
    subtitle: "Validate the experience before a full production.",
    price: "$8,000–15,000",
    priceTag: "EXAMPLE USD / PLAYABLE PROTOTYPE",
    scope: "Example scope: one core mechanic, one level and one target platform.",
    features: [
      "Gameplay systems & interaction design",
      "Engine setup + prototype build",
      "Placeholder art & basic UI integration",
      "Playtesting + technical handover",
    ],
    note: "Full games, original art, multiplayer, console certification and live operations are quoted separately.",
    buttonText: "Scope your game",
    iconShape: (
      <div className="w-[21.67px] h-[15.17px] left-[2.17px] top-[5.42px] absolute outline outline-[1.5px] outline-[#CEFF69] -outline-offset-[0.75px]" />
    ),
  },
  {
    code: "EN / 03",
    title: "Engineering services",
    subtitle: "Specialist expertise for a specific challenge.",
    price: "$2,000–5,000",
    priceTag: "EXAMPLE USD / FOCUSED SPRINT",
    scope: "Example scope: one bounded technical problem with agreed deliverables.",
    features: [
      "Architecture or codebase assessment",
      "API, integration or automation work",
      "Cloud & delivery pipeline improvements",
      "Findings, implementation notes + next steps",
    ],
    note: "Ongoing team extension, infrastructure rebuilds and larger integrations use a tailored engagement.",
    buttonText: "Discuss engineering",
    iconShape: (
      <div className="w-[21.67px] h-[21.67px] left-[2.17px] top-[2.17px] absolute outline outline-[1.5px] outline-[#CEFF69] -outline-offset-[0.75px]" />
    ),
  },
];

export default function SoftwareGamesPricing() {
  return (
    <section
      id="software"
      className="w-full max-w-[1440px] mx-auto px-[64px] py-[88px] flex flex-col items-start gap-[40px] overflow-hidden"
    >
      {/* Header */}
      <div className="w-full flex justify-between items-end overflow-hidden">
        <div className="w-[740px] flex flex-col items-start gap-[20px] overflow-hidden">
          <SectionLabel>03–04 / SOFTWARE, GAMES & ENGINEERING</SectionLabel>
          <h2 className="w-full text-[#F2F4EC] text-[52px] font-normal font-sans leading-[56.16px]">
            Not every build
            <br />
            fits in a package.
          </h2>
        </div>
        <div className="w-[380px] flex flex-col items-start overflow-hidden">
          <p className="w-full text-[#A4ADA0] text-[16px] font-normal font-sans leading-[26.40px]">
            Start with a useful, bounded outcome. These example budgets help
            frame the conversation, not define your final quote.
          </p>
        </div>
      </div>

      {/* Cards Row */}
      <div className="w-full flex items-start gap-[16px] overflow-hidden">
        {services.map((svc) => (
          <div
            key={svc.code}
            className="flex-1 p-[28px] bg-[#191C19] rounded-[4px] outline outline-1 outline-[#343A33] -outline-offset-1 flex flex-col items-start gap-[22px] overflow-hidden"
          >
            <div className="w-full flex justify-between items-start overflow-hidden">
              <div className="w-[26px] h-[26px] relative overflow-hidden shrink-0">
                {svc.iconShape}
              </div>
              <span className="text-[#A4ADA0] text-[10px] font-normal font-mono">
                {svc.code}
              </span>
            </div>

            <h3 className="w-full text-[#F2F4EC] text-[28px] font-normal font-sans">
              {svc.title}
            </h3>

            <p className="w-full h-[46px] text-[#A4ADA0] text-[15px] font-normal font-sans leading-[22.50px]">
              {svc.subtitle}
            </p>

            <div className="w-full flex flex-col items-start gap-[10px] overflow-hidden">
              <span className="text-[#F2F4EC] text-[36px] font-normal font-sans">
                {svc.price}
              </span>
              <span className="text-[#CEFF69] text-[10px] font-normal font-mono">
                {svc.priceTag}
              </span>
            </div>

            <div className="w-full h-[1px] bg-[#343A33]" />

            <p className="w-full h-[70px] text-[#A4ADA0] text-[14px] font-normal font-sans leading-[22.40px]">
              {svc.scope}
            </p>

            <div className="w-full flex flex-col items-start gap-[12px] overflow-hidden">
              {svc.features.map((feature) => (
                <CheckItem key={feature}>{feature}</CheckItem>
              ))}
            </div>

            <p className="w-full h-[72px] text-[#A4ADA0] text-[10px] font-normal font-mono leading-[16.50px]">
              {svc.note}
            </p>

            {/* CTA Button */}
            <Link
              href="/#contact"
              className="w-full h-[54px] px-[22px] bg-[#101211] rounded-[4px] outline outline-1 outline-[#343A33] -outline-offset-1 flex items-center justify-between overflow-hidden hover:outline-[#A4ADA0] transition-colors"
            >
              <span className="text-[#F2F4EC] text-[14px] font-semibold font-sans">
                {svc.buttonText}
              </span>
              <ArrowIcon color="lime" />
            </Link>
          </div>
        ))}
      </div>

      {/* Partnership Banner */}
      <div className="w-full p-[24px] outline outline-1 outline-[#343A33] -outline-offset-1 flex justify-between items-center overflow-hidden">
        <div className="w-[920px] flex flex-col items-start gap-[8px] overflow-hidden">
          <h4 className="text-[#F2F4EC] text-[20px] font-normal font-sans">
            Need engineering capacity, not a standalone project?
          </h4>
          <p className="w-full text-[#A4ADA0] text-[14px] font-normal font-sans leading-[22.40px]">
            A dedicated partnership can flex around your roadmap. Team size,
            allocation and monthly budget are agreed after discovery.
          </p>
        </div>
        <Link
          href="/#contact"
          className="text-[#CEFF69] text-[14px] font-normal font-sans hover:underline whitespace-nowrap"
        >
          Discuss a partnership ↗
        </Link>
      </div>
    </section>
  );
}
