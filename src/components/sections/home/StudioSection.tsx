import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const traits = ["ENGINEER-LED", "COLLABORATIVE", "LONG-TERM MINDED"];

export default function StudioSection() {
  return (
    <section
      id="studio"
      className="w-full max-w-[1440px] mx-auto px-[64px] py-[96px] flex items-center gap-[80px] overflow-hidden"
    >
      {/* Left Image Box */}
      <div className="w-[572px] h-[430px] relative overflow-hidden flex flex-col items-start shrink-0">
        <img
          src="/images/engineering-workspace.png"
          alt="The DevEleven studio"
          className="w-full flex-1 object-cover"
        />
        <div className="left-[20px] top-[379px] absolute px-[12px] py-[9px] bg-[#101211] overflow-hidden flex items-start">
          <span className="text-[#F2F4EC] text-[10px] font-normal font-mono">
            THE DETAILS ARE THE WORK.
          </span>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 flex flex-col items-start gap-[24px] overflow-hidden">
        <SectionLabel>05 / THE PEOPLE BEHIND THE CODE</SectionLabel>
        <h2 className="w-full text-[#F2F4EC] text-[56px] font-normal font-sans leading-[59.36px]">
          Engineers by trade.
          <br />
          Partners by nature.
        </h2>
        <p className="w-full text-[#A4ADA0] text-[17px] font-normal font-sans leading-[28.05px]">
          DevEleven is a technology studio for teams who care about what they put into
          the world. We bring curious thinking, hands-on engineering, and a shared
          sense of ownership to every project.
        </p>
        <p className="w-full text-[#A4ADA0] text-[17px] font-normal font-sans leading-[28.05px]">
          You work directly with the people building your product. Less translation.
          Better decisions. A closer partnership.
        </p>

        <div className="w-full h-[1px] bg-[#343A33]" />

        <div className="w-full flex justify-between items-start overflow-hidden">
          {traits.map((trait) => (
            <span
              key={trait}
              className="text-[#CEFF69] text-[11px] font-normal font-mono"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
