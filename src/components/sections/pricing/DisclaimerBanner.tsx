import React from "react";
import { InfoIcon } from "@/components/ui/Icons";

export default function DisclaimerBanner() {
  return (
    <div className="w-full bg-[#101211]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 pb-8 flex justify-start items-start overflow-hidden">
        <div className="w-full p-5 bg-[#191C19] rounded-lg outline outline-1 outline-[#2A3029] -outline-offset-1 flex items-start gap-4 overflow-hidden">
          <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-[1px]">
            <InfoIcon size={18} color="#CEFF69" />
          </div>
          <div className="flex-1 flex flex-col items-start gap-1.5 overflow-hidden">
            <span className="text-[#CEFF69] text-xs sm:text-sm font-semibold font-sans tracking-wide">
              Indicative examples — Not a quote
            </span>
            <p className="w-full text-[#A4ADA0] text-xs sm:text-sm font-normal font-sans leading-relaxed">
              All amounts below are illustrative USD budgets, pending DevEleven
              confirmation. Rates, currency, taxes, timelines and commercial terms
              are not approved. Your proposal will define the actual price and
              scope.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
