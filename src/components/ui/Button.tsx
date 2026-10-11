import React from "react";
import ArrowIcon from "./ArrowIcon";

type ButtonVariant = "primary" | "secondary" | "dark";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  href?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  href,
  fullWidth = false,
}: ButtonProps) {
  const variantStyles = {
    primary:
      "bg-[#CEFF69] outline outline-1 outline-[#CEFF69] -outline-offset-1 text-[#11150E] hover:bg-[#b8f050] transition-colors",
    secondary:
      "bg-transparent outline outline-1 outline-[#343A33] -outline-offset-1 text-[#F2F4EC] hover:outline-[#A4ADA0] transition-colors",
    dark:
      "bg-[#101211] outline outline-1 outline-[#343A33] -outline-offset-1 text-[#F2F4EC] hover:outline-[#A4ADA0] transition-colors",
  };

  const arrowColor =
    variant === "primary" ? "dark" : variant === "secondary" ? "light" : "lime";

  const baseClasses = `h-[54px] px-[22px] rounded-[4px] overflow-hidden justify-start items-center gap-[28px] inline-flex font-sans text-[14px] font-semibold cursor-pointer shrink-0 ${
    fullWidth ? "w-full justify-between" : ""
  } ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span className={fullWidth ? "flex-1 text-left" : ""}>{children}</span>
      <ArrowIcon color={arrowColor} />
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}
