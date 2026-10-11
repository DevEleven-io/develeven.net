import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import TechPill from "@/components/ui/TechPill";
import { InspectIcon, ResilienceIcon, FoundationIcon } from "@/components/ui/Icons";

const principles = [
  {
    title: "Quality you can inspect",
    description:
      "Readable code, meaningful tests, and thoughtful reviews. No black boxes. No shortcuts you inherit later.",
    icon: <InspectIcon size={24} color="#CEFF69" />,
  },
  {
    title: "Resilience by design",
    description:
      "Security, accessibility, and performance considered from day one — not added at the finish line.",
    icon: <ResilienceIcon size={24} color="#CEFF69" />,
  },
  {
    title: "Built for the next chapter",
    description:
      "Practical architecture, clear documentation, and a codebase your team can confidently take forward.",
    icon: <FoundationIcon size={24} color="#CEFF69" />,
  },
];

const techStack = ["React", "Node.js", "Python", "Unity", "AWS"];

export default function ApproachSection() {
  return (
    <section id="approach" className="w-full bg-[#101211]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col lg:flex-row justify-start items-start gap-12 lg:gap-20 overflow-hidden">
        {/* Left Column */}
        <div className="flex-1 max-w-xl flex flex-col items-start gap-[28px] overflow-hidden">
          <SectionLabel>03 / How we think</SectionLabel>
          <h2 className="w-full text-[#F2F4EC] text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight leading-[1.08]">
            Good software
            <br />
            is more than
            <br />a good launch.
          </h2>
          <p className="w-full text-[#C5CDC1] text-base sm:text-lg lg:text-xl font-normal font-sans leading-relaxed">
            It’s what happens after. How it holds up under pressure. How easily it
            evolves. How confidently your team can rely on it.
          </p>

          <div className="w-full pt-[12px] flex flex-col items-start gap-[14px] overflow-hidden">
            <span className="text-[#A4ADA0] text-sm font-bold font-sans tracking-wider">
              The right tool for the job, not the trend.
            </span>
            <div className="flex flex-wrap items-start gap-[8px] overflow-hidden">
              {techStack.map((tech) => (
                <TechPill key={tech} label={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 w-full flex flex-col items-start gap-[28px] overflow-hidden">
          {/* Quality Gate Bar */}
          <div className="w-full p-[16px] bg-[#191C19] rounded-[4px] outline outline-1 outline-[#343A33] -outline-offset-1 flex justify-between items-center overflow-hidden">
            <span className="text-[#A4ADA0] text-xs sm:text-sm font-bold font-sans tracking-wider">
              DevEleven / Quality gate
            </span>
            <div className="flex items-center gap-[8px] overflow-hidden">
              <div className="w-[6px] h-[6px] bg-[#CEFF69] rounded-full" />
              <span className="text-[#CEFF69] text-xs sm:text-sm font-bold font-sans tracking-wider">
                Built into every release
              </span>
            </div>
          </div>

          {/* Principles List */}
          {principles.map((p) => (
            <div
              key={p.title}
              className="w-full pb-[24px] border-b border-[#343A33] flex items-start gap-[20px] overflow-hidden"
            >
              <div className="w-[26px] h-[26px] flex items-center justify-center shrink-0 mt-[2px]">
                {p.icon}
              </div>
              <div className="flex-1 flex flex-col items-start gap-[10px] overflow-hidden">
                <h3 className="w-full text-[#F2F4EC] text-2xl font-bold font-sans tracking-tight">
                  {p.title}
                </h3>
                <p className="w-full text-[#A4ADA0] text-sm sm:text-base font-normal font-sans leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
