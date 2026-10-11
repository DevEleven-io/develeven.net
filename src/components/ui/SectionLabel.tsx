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
  const textColor = theme === "dark" ? "text-[#CEFF69]" : "text-[#2D3427]";
  return (
    <div
      className={`font-sans text-xs sm:text-sm font-bold leading-normal tracking-wider ${textColor} ${className}`}
    >
      {children}
    </div>
  );
}
