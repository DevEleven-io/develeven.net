import React from "react";

const services = [
  "Web experiences",
  "Custom software",
  "Game development",
  "Continuous care",
];

export default function ServicesBar() {
  return (
    <div className="w-full border-t border-b border-[#343A33] bg-[#101211]">
      <div className="w-full max-w-screen-2xl mx-auto h-[84px] px-6 sm:px-8 lg:px-16 flex justify-between items-center overflow-x-auto gap-6">
        <span className="text-[#A4ADA0] text-sm sm:text-base font-bold font-sans tracking-wide whitespace-nowrap">
          From idea to infrastructure
        </span>
        {services.map((svc) => (
          <div key={svc} className="flex items-center gap-[12px] overflow-hidden whitespace-nowrap">
            <span className="text-[#CEFF69] text-base font-bold font-sans">
              +
            </span>
            <span className="text-[#F2F4EC] text-sm sm:text-base font-semibold font-sans tracking-wide">
              {svc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
