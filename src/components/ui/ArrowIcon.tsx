import React from "react";

interface ArrowIconProps {
  color?: "dark" | "lime" | "light";
  size?: "md" | "lg";
  className?: string;
}

export default function ArrowIcon({
  color = "lime",
  size = "md",
  className = "",
}: ArrowIconProps) {
  const outlineColor =
    color === "dark"
      ? "outline-[#11150E]"
      : color === "light"
      ? "outline-[#F2F4EC]"
      : "outline-[#CEFF69]";

  if (size === "lg") {
    return (
      <div className={`w-[22px] h-[22px] relative overflow-hidden shrink-0 ${className}`}>
        <div
          className={`w-[9.17px] h-[9.17px] left-[6.42px] top-[6.42px] absolute outline outline-1 ${outlineColor} -outline-offset-[0.5px]`}
        />
      </div>
    );
  }

  return (
    <div className={`w-[18px] h-[18px] relative overflow-hidden shrink-0 ${className}`}>
      <div
        className={`w-[7.5px] h-[7.5px] left-[5.25px] top-[5.25px] absolute outline outline-[1.5px] ${outlineColor} -outline-offset-[0.75px]`}
      />
    </div>
  );
}
