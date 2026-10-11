import React from "react";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const engagements = [
  {
    type: "01 / PROJECT",
    title: "Build something new",
    description:
      "A focused engagement to take your idea from scope to launch, with clear milestones and a shared delivery plan.",
    bestFor: "New websites, MVPs, custom platforms",
  },
  {
    type: "02 / PARTNERSHIP",
    title: "Extend your team",
    description:
      "Engineering expertise alongside your people. Add capacity, solve specialist challenges, and keep delivery moving.",
    bestFor: "Growing products, ongoing roadmaps",
  },
  {
    type: "03 / CONTINUOUS CARE",
    title: "Keep getting better",
    description:
      "A dependable partner for maintenance, optimization, and thoughtful improvements after your product goes live.",
    bestFor: "Live websites, established software",
  },
];

export default function EngagementSection() {
  return (
    <section
      id="engagement"
      className="w-full max-w-[1440px] mx-auto px-[64px] py-[96px] bg-[#191C19] flex flex-col items-start gap-[48px] overflow-hidden"
    >
      {/* Header */}
      <div className="w-full flex flex-col items-start gap-[24px] overflow-hidden">
        <SectionLabel>06 / A PARTNERSHIP THAT FITS</SectionLabel>
        <h2 className="w-full text-[#F2F4EC] text-[56px] font-normal font-sans leading-[59.36px]">
          Your ambition. Our way in.
        </h2>
      </div>

      {/* Cards Row */}
      <div className="w-full flex items-start gap-[16px] overflow-hidden">
        {engagements.map((eng) => (
          <div
            key={eng.type}
            className="flex-1 p-[28px] bg-[#101211] rounded-[4px] outline outline-1 outline-[#343A33] -outline-offset-1 flex flex-col items-start gap-[24px] overflow-hidden"
          >
            <span className="text-[#CEFF69] text-[11px] font-normal font-mono">
              {eng.type}
            </span>
            <h3 className="w-full text-[#F2F4EC] text-[28px] font-normal font-sans">
              {eng.title}
            </h3>
            <p className="w-full text-[#A4ADA0] text-[15px] font-normal font-sans leading-[24.75px]">
              {eng.description}
            </p>

            {/* Best For Box */}
            <div className="w-full pt-[20px] border-t border-[#343A33] flex flex-col items-start gap-[8px] overflow-hidden">
              <span className="text-[#A4ADA0] text-[10px] font-normal font-mono">
                BEST FOR
              </span>
              <p className="w-full text-[#F2F4EC] text-[13px] font-normal font-sans">
                {eng.bestFor}
              </p>
            </div>

            {/* CTA Link */}
            <Link
              href="/#contact"
              className="w-full flex justify-between items-center overflow-hidden group"
            >
              <span className="text-[#CEFF69] text-[14px] font-normal font-sans group-hover:underline">
                Let’s talk about it
              </span>
              <div className="w-[20px] h-[20px] relative overflow-hidden shrink-0">
                <div className="w-[8.33px] h-[8.33px] left-[5.83px] top-[5.83px] absolute outline outline-1 outline-[#CEFF69] -outline-offset-[0.5px]" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
