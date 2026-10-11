import React from "react";
import Button from "@/components/ui/Button";
import StatusDot from "@/components/ui/StatusDot";

export default function HeroSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto p-[64px] flex items-center gap-[32px] overflow-hidden">
      {/* Left Column */}
      <div className="w-[720px] flex flex-col items-start gap-[30px] overflow-hidden shrink-0">
        <span className="text-[#CEFF69] text-[11px] font-normal font-mono">
          INDEPENDENT ENGINEERING STUDIO / DEVELEVEN
        </span>

        <h1 className="w-full text-[#F2F4EC] text-[92px] font-normal font-sans leading-[93.84px] tracking-tight">
          Ambitious ideas.
          <br />
          Precisely
          <br />
          engineered.
        </h1>

        <div className="w-[550px] overflow-hidden flex flex-col items-start">
          <p className="w-full text-[#A4ADA0] text-[17px] font-normal font-sans leading-[28.05px]">
            Websites, software, and games built to work beautifully. We turn complex
            challenges into reliable digital products — from first sketch to the next
            release.
          </p>
        </div>

        <div className="flex items-start gap-[12px] overflow-hidden">
          <Button href="/#contact" variant="primary">
            Discuss your project
          </Button>
          <Button href="/#services" variant="secondary">
            Explore our services
          </Button>
        </div>

        <StatusDot label="OPEN FOR NEW COLLABORATIONS" theme="lime" />
      </div>

      {/* Right Column (Fig. 11 Card) */}
      <div className="flex-1 h-[548px] relative bg-[#191C19] outline outline-1 outline-[#343A33] -outline-offset-1 flex flex-col items-start overflow-hidden">
        <img
          src="https://placehold.co/560x548"
          alt="Built with intent"
          className="w-full flex-1 object-cover"
        />

        {/* Top Overlay */}
        <div className="w-[470px] left-[20px] top-[20px] absolute flex justify-between items-start overflow-hidden">
          <span className="text-[#A4ADA0] text-[10px] font-normal font-mono">
            FIG. 11 — BUILT WITH INTENT
          </span>
          <span className="text-[#CEFF69] text-[10px] font-normal font-mono">
            [ X / Y / Z ]
          </span>
        </div>

        {/* Bottom Overlay */}
        <div className="left-[20px] top-[515px] absolute flex items-center gap-[10px] overflow-hidden">
          <div className="w-[20px] h-[2px] bg-[#CEFF69]" />
          <span className="text-[#F2F4EC] text-[10px] font-normal font-mono">
            PRECISION IS A MINDSET, NOT A FEATURE.
          </span>
        </div>
      </div>
    </section>
  );
}
