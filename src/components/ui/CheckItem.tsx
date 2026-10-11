import React from "react";
import { CheckIcon } from "./Icons";

export default function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full overflow-hidden justify-start items-start gap-[10px] inline-flex">
      <div className="w-[16px] h-[20px] flex items-center justify-center shrink-0">
        <CheckIcon size={14} color="#CEFF69" />
      </div>
      <span className="flex-1 text-[#F2F4EC] text-[14px] font-normal font-sans leading-[21px] break-words">
        {children}
      </span>
    </div>
  );
}
