import React from "react";
import Button from "@/components/ui/Button";

export default function PricingHero() {
  return (
    <section className="w-full bg-[#101211]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 overflow-hidden">
        {/* Left Column */}
        <div className="flex-1 w-full flex flex-col items-start gap-6 overflow-hidden">
          <span className="text-[#CEFF69] text-sm sm:text-base font-bold font-sans tracking-wider">
            DevEleven / Pricing & engagements
          </span>

          <h1 className="w-full text-[#F2F4EC] text-5xl sm:text-7xl lg:text-8xl font-bold font-sans tracking-tight leading-[0.98]">
            Clear scope.
            <br />
            Considered investment.
          </h1>

          <div className="w-full max-w-2xl overflow-hidden flex flex-col items-start">
            <p className="w-full text-[#C5CDC1] text-base sm:text-lg lg:text-xl font-normal font-sans leading-relaxed">
              From a focused website to a complex product. Compare ways to work with
              us, understand what’s included, and find the right starting point.
            </p>
          </div>

          <div className="flex flex-wrap items-start gap-3 overflow-hidden">
            <Button href="#websites" variant="primary" arrowDirection="down">
              Explore pricing
            </Button>
            <Button href="/#contact" variant="dark">
              Discuss your project
            </Button>
          </div>
        </div>

        {/* Right Image Box (Matching HeroSection sculpture size) */}
        <div className="w-full lg:w-[480px] xl:w-[540px] h-[480px] lg:h-[548px] relative bg-[#191C19] rounded-lg outline outline-1 outline-[#2A3029] -outline-offset-1 flex flex-col items-start overflow-hidden shrink-0">
          <img
            src="/images/dollar-sign-sculpture.png"
            alt="Built with intent"
            className="w-full flex-1 object-cover"
          />
          <span className="left-5 top-5 absolute text-[#A4ADA0] text-xs sm:text-sm font-semibold font-sans tracking-wider">
            Fig. 11 / Built with intent
          </span>
        </div>
      </div>
    </section>
  );
}
