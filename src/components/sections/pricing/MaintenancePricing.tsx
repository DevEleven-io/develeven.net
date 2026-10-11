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
    <section id="maintenance" className="w-full bg-[#191C19]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-start gap-12 overflow-hidden">
        {/* Header */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 overflow-hidden">
          <div className="max-w-2xl flex flex-col items-start gap-5 overflow-hidden">
            <SectionLabel>02 / Website maintenance</SectionLabel>
            <h2 className="w-full text-[#F2F4EC] text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight leading-[1.08]">
              Launch is only the beginning.
            </h2>
          </div>
          <div className="max-w-sm flex flex-col items-start overflow-hidden">
            <p className="w-full text-[#C5CDC1] text-base sm:text-lg lg:text-xl font-normal font-sans leading-relaxed">
              Keep your website secure, current and moving forward. Example care plans
              for different levels of change.
            </p>
          </div>
        </div>

        {/* Cards Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="p-7 bg-[#101211] rounded-[4px] outline outline-1 outline-[#343A33] -outline-offset-1 flex flex-col justify-between items-start gap-6 overflow-hidden"
            >
              <div className="w-full flex flex-col items-start gap-5">
                <h3 className="w-full text-[#F2F4EC] text-2xl font-bold font-sans tracking-tight">
                  {plan.name}
                </h3>
                <p className="w-full text-[#A4ADA0] text-sm sm:text-base font-normal font-sans min-h-[40px] leading-relaxed">
                  {plan.subtitle}
                </p>

                <div className="w-full flex flex-col items-start gap-2 overflow-hidden">
                  <span className="text-[#F2F4EC] text-3xl sm:text-4xl font-bold font-sans tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-[#CEFF69] text-xs sm:text-sm font-bold font-sans tracking-wide">
                    Example USD / Month
                  </span>
                </div>

                <div className="w-full h-[1px] bg-[#343A33]" />

                <span className="w-full text-[#F2F4EC] text-sm sm:text-base font-bold font-sans">
                  {plan.scope}
                </span>

                <div className="w-full flex flex-col items-start gap-3 overflow-hidden">
                  {plan.features.map((feature) => (
                    <CheckItem key={feature}>{feature}</CheckItem>
                  ))}
                </div>
              </div>

              <div className="w-full pt-4">
                {/* CTA Button */}
                <Link
                  href="/#contact"
                  className="w-full h-[54px] px-[22px] bg-[#101211] rounded-[4px] outline outline-1 outline-[#343A33] -outline-offset-1 flex items-center justify-between overflow-hidden hover:outline-[#A4ADA0] transition-colors group cursor-pointer"
                >
                  <span className="text-[#F2F4EC] text-sm font-semibold font-sans">
                    Discuss a care plan
                  </span>
                  <ArrowIcon color="lime" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="max-w-4xl text-[#A4ADA0] text-xs sm:text-sm font-normal font-sans leading-relaxed">
          Illustrative allowances only. An initial codebase review may be needed.
          Hosting, paid licenses, major redesigns and new features are separate;
          response times, emergency cover, overages and rollover are agreed in your
          proposal.
        </p>
      </div>
    </section>
  );
}
