import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Share the brief",
    description:
      "Your goals, audience, must-haves, budget and target date. An early idea is enough to begin.",
    output: "INPUT / YOUR PROJECT CONTEXT",
  },
  {
    number: "02",
    title: "Define the scope",
    description:
      "We map the requirements, risks and dependencies, then separate essentials from later phases.",
    output: "OUTPUT / A BOUNDED DELIVERY PLAN",
  },
  {
    number: "03",
    title: "Agree the proposal",
    description:
      "Review the price, deliverables, milestones and commercial terms before any build starts.",
    output: "OUTPUT / YOUR ACTUAL PROJECT QUOTE",
  },
];

const proposalItems = [
  "+ Deliverables & exclusions",
  "+ Milestones & payment terms",
  "+ Ownership & support",
];

export default function PricingProcess() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-[64px] py-[80px] bg-[#E8EDE1] flex flex-col items-start gap-[48px] overflow-hidden">
      {/* Header */}
      <div className="w-full flex justify-between items-end overflow-hidden">
        <div className="w-[740px] flex flex-col items-start gap-[20px] overflow-hidden">
          <SectionLabel theme="light">05 / FROM EXAMPLE TO ESTIMATE</SectionLabel>
          <h2 className="w-full text-[#11150E] text-[52px] font-normal font-sans leading-[56.16px]">
            The price follows the plan.
            <br />
            Not the other way around.
          </h2>
        </div>
        <div className="w-[380px] flex flex-col items-start overflow-hidden">
          <p className="w-full text-[#596151] text-[16px] font-normal font-sans leading-[26.40px]">
            Complexity, integrations, content readiness and delivery constraints
            shape your investment. We make those trade-offs visible.
          </p>
        </div>
      </div>

      {/* Steps Row */}
      <div className="w-full flex items-start gap-[40px] overflow-hidden">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex-1 flex flex-col items-start gap-[20px] overflow-hidden"
          >
            <div className="w-full flex items-center gap-[16px] overflow-hidden">
              <span className="text-[#596151] text-[12px] font-normal font-mono">
                {step.number}
              </span>
              <div className="flex-1 h-[1px] bg-[#BCC5B3]" />
            </div>
            <h3 className="w-full text-[#11150E] text-[26px] font-normal font-sans">
              {step.title}
            </h3>
            <p className="w-full text-[#596151] text-[15px] font-normal font-sans leading-[24.75px]">
              {step.description}
            </p>
            <span className="text-[#11150E] text-[10px] font-normal font-mono leading-[15px]">
              {step.output}
            </span>
          </div>
        ))}
      </div>

      {/* Checklist Footer */}
      <div className="w-full pt-[28px] border-t border-[#BCC5B3] flex justify-between items-center overflow-hidden">
        <span className="text-[#596151] text-[11px] font-normal font-mono">
          EVERY PROPOSAL SHOULD MAKE CLEAR
        </span>
        <div className="flex items-center gap-[32px] overflow-hidden">
          {proposalItems.map((item) => (
            <span
              key={item}
              className="text-[#11150E] text-[14px] font-normal font-sans"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
