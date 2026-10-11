import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We ask better questions. Together, we define the problem, the users, and what success actually looks like.",
    deliverable: "PROJECT BRIEF + ROADMAP",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We shape the experience and the system behind it. Prototypes and technical decisions make the plan tangible.",
    deliverable: "PROTOTYPE + TECHNICAL PLAN",
  },
  {
    number: "03",
    title: "Build & validate",
    description:
      "We work in focused iterations. You see progress, test real functionality, and help steer every release.",
    deliverable: "WORKING SOFTWARE + TESTS",
  },
  {
    number: "04",
    title: "Launch & evolve",
    description:
      "We deploy with care, hand over with clarity, and keep improving what matters as your product grows.",
    deliverable: "RELEASE + ONGOING SUPPORT",
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-[64px] py-[96px] bg-[#191C19] flex flex-col items-start gap-[56px] overflow-hidden">
      {/* Header */}
      <div className="w-full flex justify-between items-end overflow-hidden">
        <div className="w-[730px] flex flex-col items-start gap-[24px] overflow-hidden">
          <SectionLabel>04 / FROM ZERO TO SHIPPED</SectionLabel>
          <h2 className="w-full text-[#F2F4EC] text-[56px] font-normal font-sans leading-[59.36px]">
            A clear process.
            <br />
            No disappearing acts.
          </h2>
        </div>
        <div className="w-[360px] flex flex-col items-start overflow-hidden">
          <p className="w-full text-[#A4ADA0] text-[17px] font-normal font-sans leading-[28.05px]">
            Direct conversations. Visible progress. Shared decisions. You always know
            what we’re building, and why.
          </p>
        </div>
      </div>

      {/* Steps Row */}
      <div className="w-full flex items-start gap-[32px] overflow-hidden">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex-1 flex flex-col items-start gap-[24px] overflow-hidden"
          >
            <div className="w-full flex items-center gap-[16px] overflow-hidden">
              <span className="text-[#CEFF69] text-[13px] font-normal font-mono">
                {step.number}
              </span>
              <div className="flex-1 h-[1px] bg-[#343A33]" />
            </div>
            <h3 className="w-full text-[#F2F4EC] text-[26px] font-normal font-sans">
              {step.title}
            </h3>
            <p className="w-full text-[#A4ADA0] text-[15px] font-normal font-sans leading-[24.75px]">
              {step.description}
            </p>
            <span className="w-full text-[#CEFF69] text-[10px] font-normal font-mono">
              {step.deliverable}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
