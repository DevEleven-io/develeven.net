import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import TechPill from "@/components/ui/TechPill";

const principles = [
  {
    title: "Quality you can inspect",
    description:
      "Readable code, meaningful tests, and thoughtful reviews. No black boxes. No shortcuts you inherit later.",
    icon: (
      <div className="w-[19.50px] h-[19.50px] left-[3.25px] top-[3.25px] absolute outline outline-[1.5px] outline-[#CEFF69] -outline-offset-[0.75px]" />
    ),
  },
  {
    title: "Resilience by design",
    description:
      "Security, accessibility, and performance considered from day one — not added at the finish line.",
    icon: (
      <div className="w-[17.33px] h-[21.67px] left-[4.33px] top-[2.17px] absolute outline outline-[1.5px] outline-[#CEFF69] -outline-offset-[0.75px]" />
    ),
  },
  {
    title: "Built for the next chapter",
    description:
      "Practical architecture, clear documentation, and a codebase your team can confidently take forward.",
    icon: (
      <div className="w-[19.50px] h-[19.50px] left-[3.25px] top-[3.25px] absolute outline outline-[1.5px] outline-[#CEFF69] -outline-offset-[0.75px]" />
    ),
  },
];

const techStack = ["React", "Node.js", "Python", "Unity", "AWS"];

export default function ApproachSection() {
  return (
    <section
      id="approach"
      className="w-full max-w-[1440px] mx-auto px-[64px] py-[96px] flex justify-start items-start gap-[80px] overflow-hidden"
    >
      {/* Left Column */}
      <div className="w-[580px] flex flex-col items-start gap-[28px] overflow-hidden shrink-0">
        <SectionLabel>03 / HOW WE THINK</SectionLabel>
        <h2 className="w-full text-[#F2F4EC] text-[56px] font-normal font-sans leading-[59.36px]">
          Good software
          <br />
          is more than
          <br />a good launch.
        </h2>
        <p className="w-full text-[#A4ADA0] text-[17px] font-normal font-sans leading-[28.05px]">
          It’s what happens after. How it holds up under pressure. How easily it
          evolves. How confidently your team can rely on it.
        </p>

        <div className="w-full pt-[12px] flex flex-col items-start gap-[14px] overflow-hidden">
          <span className="text-[#A4ADA0] text-[10px] font-normal font-mono">
            THE RIGHT TOOL FOR THE JOB, NOT THE TREND.
          </span>
          <div className="flex flex-wrap items-start gap-[8px] overflow-hidden">
            {techStack.map((tech) => (
              <TechPill key={tech} label={tech} />
            ))}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 flex flex-col items-start gap-[28px] overflow-hidden">
        {/* Quality Gate Bar */}
        <div className="w-full p-[16px] bg-[#191C19] rounded-[4px] outline outline-1 outline-[#343A33] -outline-offset-1 flex justify-between items-center overflow-hidden">
          <span className="text-[#A4ADA0] text-[11px] font-normal font-mono">
            DEVELEVEN / QUALITY GATE
          </span>
          <div className="flex items-center gap-[8px] overflow-hidden">
            <div className="w-[6px] h-[6px] bg-[#CEFF69] rounded-full" />
            <span className="text-[#CEFF69] text-[11px] font-normal font-mono">
              BUILT INTO EVERY RELEASE
            </span>
          </div>
        </div>

        {/* Principles List */}
        {principles.map((p) => (
          <div
            key={p.title}
            className="w-full pb-[24px] border-b border-[#343A33] flex items-start gap-[20px] overflow-hidden"
          >
            <div className="w-[26px] h-[26px] relative overflow-hidden shrink-0">
              {p.icon}
            </div>
            <div className="flex-1 flex flex-col items-start gap-[10px] overflow-hidden">
              <h3 className="w-full text-[#F2F4EC] text-[24px] font-normal font-sans">
                {p.title}
              </h3>
              <p className="w-full text-[#A4ADA0] text-[15px] font-normal font-sans leading-[24px]">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
