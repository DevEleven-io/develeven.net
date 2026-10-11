import React from "react";
import Button from "@/components/ui/Button";
import StatusDot from "@/components/ui/StatusDot";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#101211]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 overflow-hidden">
        {/* Left Column */}
        <div className="flex-1 w-full flex flex-col items-start gap-[30px] overflow-hidden">
          <span className="text-[#CEFF69] text-sm sm:text-base font-bold font-sans tracking-wider">
            Independent engineering studio / DevEleven
          </span>

          <h1 className="w-full text-[#F2F4EC] text-5xl sm:text-7xl lg:text-8xl font-bold font-sans leading-[0.98] tracking-tight">
            Ambitious ideas.
            <br />
            Precisely
            <br />
            engineered.
          </h1>

          <div className="w-full max-w-[550px] overflow-hidden flex flex-col items-start">
            <p className="w-full text-[#C5CDC1] text-base sm:text-lg lg:text-xl font-normal font-sans leading-relaxed">
              Websites, software, and games built to work beautifully. We turn complex
              challenges into reliable digital products — from first sketch to the next
              release.
            </p>
          </div>

          <div className="flex flex-wrap items-start gap-[12px] overflow-hidden">
            <Button href="/#contact" variant="primary">
              Discuss your project
            </Button>
            <Button href="/#services" variant="secondary">
              Explore our services
            </Button>
          </div>
        </div>

        {/* Right Column (Fig. 11 Card) */}
        <div className="w-full lg:w-[480px] xl:w-[540px] h-[480px] lg:h-[548px] relative bg-[#191C19] rounded-lg outline outline-1 outline-[#2A3029] -outline-offset-1 flex flex-col items-start overflow-hidden shrink-0">
          <img
            src="/images/eleven-sculpture.png"
            alt="Built with intent"
            className="w-full flex-1 object-cover"
          />

          {/* Top Overlay */}
          <div className="w-[calc(100%-40px)] left-[20px] top-[20px] absolute flex justify-between items-start overflow-hidden">
            <span className="text-[#A4ADA0] text-xs sm:text-sm font-semibold font-sans tracking-wider">
              Fig. 11 — Built with intent
            </span>
            <span className="text-[#CEFF69] text-xs sm:text-sm font-bold font-sans">
              [ X / Y / Z ]
            </span>
          </div>

          {/* Bottom Overlay */}
          <div className="left-[20px] bottom-[20px] absolute flex items-center gap-[10px] overflow-hidden">
            <div className="w-[20px] h-[2px] bg-[#CEFF69]" />
            <span className="text-[#F2F4EC] text-xs sm:text-sm font-semibold font-sans tracking-wide">
              Precision is a mindset, not a feature.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
