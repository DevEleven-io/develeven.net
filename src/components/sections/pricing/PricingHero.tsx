import React from "react";

export default function PricingHero() {
  return (
    <section className="w-full bg-[#101211]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 pt-10 pb-8 sm:pt-12 sm:pb-10 lg:pt-16 lg:pb-12 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl flex flex-col items-center text-center gap-3 sm:gap-4">
          <span className="text-[#CEFF69] text-xs sm:text-sm font-bold font-sans tracking-wider">
            DevEleven / Pricing & engagements
          </span>
          <h1 className="w-full text-[#F2F4EC] text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight leading-[1.08]">
            Clear scope. Considered investment.
          </h1>
        </div>
      </div>
    </section>
  );
}
