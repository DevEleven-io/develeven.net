import React from "react";
import { InfoIcon } from "@/components/ui/Icons";

export default function DisclaimerBanner() {
  return (
    <div className="w-full max-w-[1440px] mx-auto pb-[32px] px-[64px] flex justify-start items-start overflow-hidden">
      <div className="flex-1 p-[20px] bg-[#191C19] outline outline-1 outline-[#343A33] -outline-offset-1 flex items-start gap-[16px] overflow-hidden">
        <div className="w-[20px] h-[20px] flex items-center justify-center shrink-0 mt-[1px]">
          <InfoIcon size={18} color="#CEFF69" />
        </div>
        <div className="flex-1 flex flex-col items-start gap-[6px] overflow-hidden">
          <span className="text-[#CEFF69] text-[13px] font-semibold font-sans">
            INDICATIVE EXAMPLES — NOT A QUOTE
          </span>
          <p className="w-full text-[#A4ADA0] text-[13px] font-normal font-sans leading-[19.50px]">
            All amounts below are illustrative USD budgets, pending DevEleven
            confirmation. Rates, currency, taxes, timelines and commercial terms
            are not approved. Your proposal will define the actual price and
            scope.
          </p>
        </div>
      </div>
    </div>
  );
}
