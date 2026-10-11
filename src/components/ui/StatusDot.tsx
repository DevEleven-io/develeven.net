import React from "react";

interface StatusDotProps {
  label: string;
  theme?: "lime" | "dark";
  className?: string;
}

export default function StatusDot({
  label,
  theme = "lime",
  className = "",
}: StatusDotProps) {
  const dotColor = theme === "lime" ? "bg-[#CEFF69]" : "bg-[#11150E]";
  const textColor = theme === "lime" ? "text-[#F2F4EC]" : "text-[#11150E]";

  return (
    <div className={`justify-start items-center gap-[8px] inline-flex overflow-hidden ${className}`}>
      <div className={`w-[6px] h-[6px] rounded-full shrink-0 ${dotColor}`} />
      <span className={`font-sans text-xs sm:text-sm font-semibold leading-normal tracking-wide ${textColor}`}>
        {label}
      </span>
    </div>
  );
}
