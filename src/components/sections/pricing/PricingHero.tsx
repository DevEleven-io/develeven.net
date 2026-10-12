import React from "react";

export default function PricingHero() {
  return (
    <section className="w-full bg-[#101211]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 pt-8 pb-6 sm:pt-10 sm:pb-8 lg:pt-12 lg:pb-8 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        {/* Left Column */}
        <div className="max-w-2xl flex flex-col items-start gap-3">
          <span className="text-[#CEFF69] text-xs sm:text-sm font-bold font-sans tracking-wider">
            DevEleven / Pricing & engagements
          </span>
          <h1 className="w-full text-[#F2F4EC] text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight leading-[1.12] pb-1.5">
            Clear scope. Considered investment.
          </h1>
        </div>

        {/* Right Column */}
        <div className="lg:max-w-md flex flex-col items-start pb-1.5">
          <p className="w-full text-[#C5CDC1] text-sm sm:text-base font-normal font-sans leading-relaxed">
            Realistic project budgets for websites, software, and games. Every
            website package includes post-launch maintenance.
          </p>
        </div>
      </div>
    </section>
  );
}
