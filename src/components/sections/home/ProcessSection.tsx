import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We ask better questions. Together, we define the problem, the users, and what success actually looks like.",
    deliverable: "Project brief + roadmap",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We shape the experience and the system behind it. Prototypes and technical decisions make the plan tangible.",
    deliverable: "Prototype + technical plan",
  },
  {
    number: "03",
    title: "Build & validate",
    description:
      "We work in focused iterations. You see progress, test real functionality, and help steer every release.",
    deliverable: "Working software + tests",
  },
  {
    number: "04",
    title: "Launch & evolve",
    description:
      "We deploy with care, hand over with clarity, and keep improving what matters as your product grows.",
    deliverable: "Release + ongoing support",
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full bg-[#191C19]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-start gap-12 lg:gap-14 overflow-hidden">
        {/* Header */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div className="max-w-2xl flex flex-col items-start gap-6">
            <SectionLabel>04 / From zero to shipped</SectionLabel>
            <h2 className="w-full text-[#F2F4EC] text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight leading-[1.12] pb-2">
              A clear process.
              <br />
              No disappearing acts.
            </h2>
          </div>
          <div className="lg:max-w-md flex flex-col items-start pb-2">
            <p className="w-full text-[#C5CDC1] text-base sm:text-lg lg:text-xl font-normal font-sans leading-relaxed">
              Direct conversations. Visible progress. Shared decisions. You always know
              what we’re building, and why.
            </p>
          </div>
        </div>

        {/* Steps Row */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-start gap-6 overflow-hidden"
            >
              <div className="w-full flex items-center gap-4 overflow-hidden">
                <span className="text-[#CEFF69] text-base sm:text-lg font-bold font-sans tracking-wide">
                  {step.number}
                </span>
                <div className="flex-1 h-[1px] bg-[#2A3029]" />
              </div>
              <h3 className="w-full text-[#F2F4EC] text-2xl font-bold font-sans tracking-tight">
                {step.title}
              </h3>
              <p className="w-full text-[#A4ADA0] text-sm sm:text-base font-normal font-sans leading-relaxed">
                {step.description}
              </p>
              <span className="w-full text-[#CEFF69] text-xs sm:text-sm font-bold font-sans tracking-wide">
                {step.deliverable}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
