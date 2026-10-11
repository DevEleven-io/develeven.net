import React from "react";
import Button from "@/components/ui/Button";

export default function PricingHero() {
  return (
    <section className="w-full max-w-[1440px] mx-auto pt-[64px] pb-[48px] px-[64px] flex items-center gap-[72px] overflow-hidden">
      {/* Left Column */}
      <div className="flex-1 flex flex-col items-start gap-[24px] overflow-hidden">
        <span className="text-[#CEFF69] text-[11px] font-normal font-mono">
          DEVELEVEN / PRICING & ENGAGEMENTS
        </span>

        <h1 className="w-full text-[#F2F4EC] text-[80px] font-normal font-sans leading-[81.60px] tracking-tight">
          Clear scope.
          <br />
          Considered investment.
        </h1>

        <div className="w-[670px] overflow-hidden flex flex-col items-start">
          <p className="w-full text-[#A4ADA0] text-[16px] font-semibold font-sans leading-[26.40px]">
            From a focused website to a complex product. Compare ways to work with
            us, understand what’s included, and find the right starting point.
          </p>
        </div>

        <div className="flex items-start gap-[12px] overflow-hidden">
          <Button href="#websites" variant="primary" arrowDirection="down">
            Explore pricing
          </Button>
          <Button href="/#contact" variant="dark">
            Discuss your project
          </Button>
        </div>
      </div>

      {/* Right Image Box */}
      <div className="w-[350px] h-[304px] relative overflow-hidden outline outline-1 outline-[#343A33] -outline-offset-1 shrink-0">
        <img
          src="/images/dollar-sign-sculpture.png"
          alt="Built with intent"
          className="w-[350px] h-[304px] left-0 top-0 absolute object-cover"
        />
        <span className="left-[16px] top-[16px] absolute text-[#A4ADA0] text-[10px] font-normal font-mono">
          FIG. 11 / BUILT WITH INTENT
        </span>
      </div>
    </section>
  );
}
