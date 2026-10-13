import React from "react";
import { CheckIcon } from "./Icons";

export default function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full overflow-hidden justify-start items-start gap-2.5 inline-flex">
      <div className="w-4 h-5 flex items-center justify-center shrink-0">
        <CheckIcon size={14} color="#CEFF69" />
      </div>
      <span className="flex-1 text-[#F2F4EC] text-sm sm:text-base font-medium font-sans leading-relaxed break-words">
        {children}
      </span>
    </div>
  );
}
