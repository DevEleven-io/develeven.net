import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const traits = ["Engineer-led", "Collaborative", "Long-term minded"];

export default function StudioSection() {
  return (
    <section id="studio" className="w-full bg-[#101211]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 overflow-hidden">
        {/* Left Image Box */}
        <div className="w-full lg:w-[520px] xl:w-[572px] h-[340px] sm:h-[400px] lg:h-[430px] relative overflow-hidden flex flex-col items-start shrink-0">
          <img
            src="/images/engineering-workspace.png"
            alt="The DevEleven studio"
            className="w-full h-full object-cover"
          />
          <div className="left-5 bottom-5 absolute px-3 py-2 bg-[#101211] overflow-hidden flex items-start">
            <span className="text-[#F2F4EC] text-xs sm:text-sm font-semibold font-sans tracking-wide">
              The details are the work.
            </span>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 w-full flex flex-col items-start gap-6 overflow-hidden">
          <SectionLabel>05 / The people behind the code</SectionLabel>
          <h2 className="w-full text-[#F2F4EC] text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight leading-[1.08]">
            Engineers by trade.
            <br />
            Partners by nature.
          </h2>
          <p className="w-full text-[#C5CDC1] text-base sm:text-lg lg:text-xl font-normal font-sans leading-relaxed">
            DevEleven is a technology studio for teams who care about what they put into
            the world. We bring curious thinking, hands-on engineering, and a shared
            sense of ownership to every project.
          </p>
          <p className="w-full text-[#C5CDC1] text-base sm:text-lg lg:text-xl font-normal font-sans leading-relaxed">
            You work directly with the people building your product. Less translation.
            Better decisions. A closer partnership.
          </p>

          <div className="w-full h-[1px] bg-[#343A33]" />

          <div className="w-full flex flex-wrap justify-between items-start gap-4 overflow-hidden">
            {traits.map((trait) => (
              <span
                key={trait}
                className="text-[#CEFF69] text-sm sm:text-base font-bold font-sans tracking-wide"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
