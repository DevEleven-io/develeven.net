import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  theme?: "dark" | "light";
  className?: string;
}

export default function SectionLabel({
  children,
  theme = "dark",
  className = "",
}: SectionLabelProps) {
  const textColor = theme === "dark" ? "text-[#CEFF69]" : "text-[#596151]";
  return (
    <div
      className={`font-mono text-[11px] font-normal leading-normal tracking-normal ${textColor} ${className}`}
    >
      {children}
    </div>
  );
}
