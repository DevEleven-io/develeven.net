import React from "react";

export default function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full overflow-hidden justify-start items-start gap-[10px] inline-flex">
      <div className="w-[16px] h-[20px] relative overflow-hidden shrink-0">
        <div className="w-[10.67px] h-[9.17px] left-[2.67px] top-[5px] absolute outline outline-[1.5px] outline-[#CEFF69] -outline-offset-[0.75px]" />
      </div>
      <span className="flex-1 text-[#F2F4EC] text-[14px] font-normal font-sans leading-[21px] break-words">
        {children}
      </span>
    </div>
  );
}
