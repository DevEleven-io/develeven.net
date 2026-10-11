import React from "react";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import ArrowIcon from "@/components/ui/ArrowIcon";

const engagements = [
  {
    type: "01 / Project",
    title: "Build something new",
    description:
      "A focused engagement to take your idea from scope to launch, with clear milestones and a shared delivery plan.",
    bestFor: "New websites, MVPs, custom platforms",
  },
  {
    type: "02 / Partnership",
    title: "Extend your team",
    description:
      "Engineering expertise alongside your people. Add capacity, solve specialist challenges, and keep delivery moving.",
    bestFor: "Growing products, ongoing roadmaps",
  },
  {
    type: "03 / Continuous care",
    title: "Keep getting better",
    description:
      "A dependable partner for maintenance, optimization, and thoughtful improvements after your product goes live.",
    bestFor: "Live websites, established software",
  },
];

export default function EngagementSection() {
  return (
    <section id="engagement" className="w-full bg-[#191C19]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col items-start gap-12 overflow-hidden">
        {/* Header */}
        <div className="w-full flex flex-col items-start gap-6 overflow-hidden">
          <SectionLabel>06 / A partnership that fits</SectionLabel>
          <h2 className="w-full text-[#F2F4EC] text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight leading-[1.08]">
            Your ambition. Our way in.
          </h2>
        </div>

        {/* Cards Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
          {engagements.map((eng) => (
            <div
              key={eng.type}
              className="p-7 bg-[#101211] rounded-[4px] outline outline-1 outline-[#343A33] -outline-offset-1 flex flex-col justify-between items-start gap-6 overflow-hidden"
            >
              <div className="w-full flex flex-col items-start gap-5">
                <span className="text-[#CEFF69] text-sm font-bold font-sans tracking-wider">
                  {eng.type}
                </span>
                <h3 className="w-full text-[#F2F4EC] text-2xl font-bold font-sans tracking-tight">
                  {eng.title}
                </h3>
                <p className="w-full text-[#A4ADA0] text-sm sm:text-base font-normal font-sans leading-relaxed">
                  {eng.description}
                </p>
              </div>

              <div className="w-full flex flex-col items-start gap-6">
                {/* Best For Box */}
                <div className="w-full pt-5 border-t border-[#343A33] flex flex-col items-start gap-2 overflow-hidden">
                  <span className="text-[#A4ADA0] text-xs sm:text-sm font-bold font-sans tracking-wider">
                    Best for
                  </span>
                  <p className="w-full text-[#F2F4EC] text-sm sm:text-base font-semibold font-sans">
                    {eng.bestFor}
                  </p>
                </div>

                {/* CTA Link */}
                <Link
                  href="/#contact"
                  className="w-full flex justify-between items-center overflow-hidden group pt-1"
                >
                  <span className="text-[#CEFF69] text-sm sm:text-base font-semibold font-sans group-hover:underline">
                    Let’s talk about it
                  </span>
                  <ArrowIcon color="lime" size="md" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
