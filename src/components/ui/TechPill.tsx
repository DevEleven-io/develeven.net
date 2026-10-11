import React from "react";

export default function TechPill({ label }: { label: string }) {
  return (
    <div className="px-[12px] py-[8px] rounded-[4px] outline outline-1 outline-[#343A33] -outline-offset-1 justify-start items-start inline-flex overflow-hidden">
      <span className="text-[#F2F4EC] text-xs sm:text-sm font-semibold font-sans tracking-wide leading-normal">
        {label}
      </span>
    </div>
  );
}
