import React from "react";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import CheckItem from "@/components/ui/CheckItem";
import ArrowIcon from "@/components/ui/ArrowIcon";

const plans = [
  {
    name: "Essential care",
    subtitle: "For a stable, low-change website.",
    price: "$150–300",
    scope: "Routine maintenance only",
    features: [
      "CMS & dependency updates",
      "Scheduled backups + uptime checks",
      "Monthly maintenance summary",
    ],
  },
  {
    name: "Active care",
    subtitle: "For a website that changes with you.",
    price: "$400–750",
    scope: "Example: 4 engineering hours / month",
    features: [
      "Everything in Essential care",
      "Content edits & small improvements",
      "Performance review + priority triage",
    ],
  },
  {
    name: "Product care",
    subtitle: "For business-critical web experiences.",
    price: "$1,000–2,000",
    scope: "Example: 12 engineering hours / month",
    features: [
      "Everything in Active care",
      "Release support & integration checks",
      "Planned improvement backlog",
    ],
  },
];

export default function MaintenancePricing() {
  return (
    <section
      id="maintenance"
      className="w-full max-w-[1440px] mx-auto px-[64px] py-[88px] bg-[#191C19] flex flex-col items-start gap-[40px] overflow-hidden"
    >
      {/* Header */}
      <div className="w-full flex justify-between items-end overflow-hidden">
        <div className="w-[760px] flex flex-col items-start gap-[20px] overflow-hidden">
          <SectionLabel>02 / WEBSITE MAINTENANCE</SectionLabel>
          <h2 className="w-full text-[#F2F4EC] text-[52px] font-normal font-sans leading-[56.16px]">
            Launch is only the beginning.
          </h2>
        </div>
        <div className="w-[380px] flex flex-col items-start overflow-hidden">
          <p className="w-full text-[#A4ADA0] text-[16px] font-normal font-sans leading-[26.40px]">
            Keep your website secure, current and moving forward. Example care plans
            for different levels of change.
          </p>
        </div>
      </div>

      {/* Cards Row */}
      <div className="w-full flex items-start gap-[16px] overflow-hidden">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="flex-1 p-[28px] bg-[#101211] rounded-[4px] outline outline-1 outline-[#343A33] -outline-offset-1 flex flex-col items-start gap-[20px] overflow-hidden"
          >
            <h3 className="w-full text-[#F2F4EC] text-[26px] font-normal font-sans">
              {plan.name}
            </h3>
            <p className="w-full text-[#A4ADA0] text-[14px] font-normal font-sans">
              {plan.subtitle}
            </p>

            <div className="w-full flex flex-col items-start gap-[8px] overflow-hidden">
              <span className="text-[#F2F4EC] text-[38px] font-normal font-sans">
                {plan.price}
              </span>
              <span className="text-[#CEFF69] text-[10px] font-normal font-mono">
                EXAMPLE USD / MONTH
              </span>
            </div>

            <div className="w-full h-[1px] bg-[#343A33]" />

            <span className="w-full text-[#A4ADA0] text-[13px] font-normal font-sans">
              {plan.scope}
            </span>

            <div className="w-full flex flex-col items-start gap-[12px] overflow-hidden">
              {plan.features.map((feature) => (
                <CheckItem key={feature}>{feature}</CheckItem>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/#contact"
              className="w-full h-[54px] px-[22px] bg-[#101211] rounded-[4px] outline outline-1 outline-[#343A33] -outline-offset-1 flex items-center justify-between overflow-hidden hover:outline-[#A4ADA0] transition-colors"
            >
              <span className="text-[#F2F4EC] text-[14px] font-semibold font-sans">
                Discuss a care plan
              </span>
              <ArrowIcon color="lime" />
            </Link>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <p className="w-full text-[#A4ADA0] text-[13px] font-normal font-sans leading-[21.45px]">
        Illustrative allowances only. An initial codebase review may be needed.
        Hosting, paid licenses, major redesigns and new features are separate;
        response times, emergency cover, overages and rollover are agreed in your
        proposal.
      </p>
    </section>
  );
}
