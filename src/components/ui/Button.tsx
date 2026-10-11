import React from "react";
import ArrowIcon from "./ArrowIcon";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  href?: string;
  size?: "sm" | "md" | "lg";
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-lime-300 text-neutral-900 outline outline-1 outline-lime-300 hover:bg-lime-200 transition-colors",
  secondary:
    "bg-transparent text-stone-100 outline outline-1 outline-neutral-700 hover:outline-neutral-500 transition-colors",
  ghost:
    "bg-neutral-900 text-stone-100 outline outline-1 outline-neutral-700 hover:outline-neutral-500 transition-colors",
};

const sizeClasses = {
  sm: "h-10 px-4 text-xs",
  md: "h-14 px-5 text-sm",
  lg: "h-16 px-6 text-base",
};

function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  href,
  size = "md",
}: ButtonProps) {
  const base = `rounded-sm inline-flex items-center gap-7 font-semibold font-sans shrink-0 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const arrowColor =
    variant === "primary" ? "text-neutral-900" : "text-lime-300";

  const content = (
    <>
      <span>{children}</span>
      <ArrowIcon className={arrowColor} />
    </>
  );

  if (href) {
    return (
      <a href={href} className={base}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={base}>
      {content}
    </button>
  );
}

export default Button;
