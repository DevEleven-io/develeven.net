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
  const textColor = theme === "lime" ? "text-[#A4ADA0]" : "text-[#11150E]";

  return (
    <div className={`justify-start items-center gap-[8px] inline-flex overflow-hidden ${className}`}>
      <div className={`w-[6px] h-[6px] rounded-full shrink-0 ${dotColor}`} />
      <span className={`font-mono text-[11px] font-normal leading-normal tracking-normal ${textColor}`}>
        {label}
      </span>
    </div>
  );
}
