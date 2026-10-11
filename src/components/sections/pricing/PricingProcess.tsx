import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Share the brief",
    description:
      "Your goals, audience, must-haves, budget and target date. An early idea is enough to begin.",
    output: "Input / Your project context",
  },
  {
    number: "02",
    title: "Define the scope",
    description:
      "We map the requirements, risks and dependencies, then separate essentials from later phases.",
    output: "Output / A bounded delivery plan",
  },
  {
    number: "03",
    title: "Agree the proposal",
    description:
      "Review the price, deliverables, milestones and commercial terms before any build starts.",
    output: "Output / Your actual project quote",
  },
];

const proposalItems = [
  "+ Deliverables & exclusions",
  "+ Milestones & payment terms",
  "+ Ownership & support",
];

export default function PricingProcess() {
  return (
    <section className="w-full bg-[#E8EDE1]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-start gap-12 overflow-hidden">
        {/* Header */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 overflow-hidden">
          <div className="max-w-2xl flex flex-col items-start gap-5 overflow-hidden">
            <SectionLabel theme="light">05 / From example to estimate</SectionLabel>
            <h2 className="w-full text-[#11150E] text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight leading-[1.08]">
              The price follows the plan.
              <br />
              Not the other way around.
            </h2>
          </div>
          <div className="max-w-sm flex flex-col items-start overflow-hidden">
            <p className="w-full text-[#384031] text-base sm:text-lg lg:text-xl font-normal font-sans leading-relaxed">
              Complexity, integrations, content readiness and delivery constraints
              shape your investment. We make those trade-offs visible.
            </p>
          </div>
        </div>

        {/* Steps Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 overflow-hidden">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-start gap-5 overflow-hidden"
            >
              <div className="w-full flex items-center gap-4 overflow-hidden">
                <span className="text-[#2D3427] text-base sm:text-lg font-bold font-sans tracking-wide">
                  {step.number}
                </span>
                <div className="flex-1 h-[1px] bg-[#BCC5B3]" />
              </div>
              <h3 className="w-full text-[#11150E] text-2xl font-bold font-sans tracking-tight">
                {step.title}
              </h3>
              <p className="w-full text-[#384031] text-sm sm:text-base font-normal font-sans leading-relaxed">
                {step.description}
              </p>
              <span className="text-[#11150E] text-xs sm:text-sm font-bold font-sans tracking-wide">
                {step.output}
              </span>
            </div>
          ))}
        </div>

        {/* Checklist Footer */}
        <div className="w-full pt-7 border-t border-[#BCC5B3] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 overflow-hidden">
          <span className="text-[#384031] text-xs sm:text-sm font-bold font-sans tracking-wider">
            Every proposal should make clear
          </span>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 overflow-hidden">
            {proposalItems.map((item) => (
              <span
                key={item}
                className="text-[#11150E] text-sm sm:text-base font-bold font-sans"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
