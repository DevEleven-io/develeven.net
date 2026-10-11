import React from "react";
import ArrowIcon from "@/components/ui/ArrowIcon";

interface CTABannerProps {
  sectionTag: string;
  topRightText: string;
  hasDot?: boolean;
  headline: React.ReactNode;
  headlineSize?: "88px" | "80px";
  description: string;
  buttonHeight?: "62px" | "54px";
  buttonText?: string;
  note?: string;
  ctaHref?: string;
}

export default function CTABanner({
  sectionTag,
  topRightText,
  hasDot = false,
  headline,
  headlineSize = "88px",
  description,
  buttonHeight = "62px",
  buttonText = "Discuss your project",
  note = "NO SALES SCRIPT. JUST A GOOD CONVERSATION.",
  ctaHref = "/#contact",
}: CTABannerProps) {
  const isLarge = headlineSize === "88px";

  return (
    <section
      id="contact"
      className="w-full max-w-[1440px] mx-auto px-[64px] py-[80px] bg-[#CEFF69] flex flex-col items-start gap-[48px] overflow-hidden"
    >
      {/* Top Row */}
      <div className="w-full flex justify-between items-start overflow-hidden">
        <span className="text-[#11150E] text-[11px] font-normal font-mono">
          {sectionTag}
        </span>
        <div className="flex items-center gap-[8px] overflow-hidden">
          {hasDot && (
            <div className="w-[6px] h-[6px] bg-[#11150E] rounded-full shrink-0" />
          )}
          <span className="text-[#11150E] text-[11px] font-normal font-mono">
            {topRightText}
          </span>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="w-full flex justify-start items-end gap-[72px] overflow-hidden">
        <h2
          className={`text-[#11150E] font-normal font-sans tracking-tight shrink-0 ${
            isLarge
              ? "w-[820px] text-[88px] leading-[89.76px]"
              : "w-[800px] text-[80px] leading-[81.60px]"
          }`}
        >
          {headline}
        </h2>

        <div className="flex-1 flex flex-col items-start gap-[28px] overflow-hidden">
          <p
            className={`w-full text-[#11150E] font-normal font-sans ${
              isLarge
                ? "text-[17px] leading-[27.20px]"
                : "text-[16px] leading-[25.60px]"
            }`}
          >
            {description}
          </p>

          <a
            href={ctaHref}
            className={`w-full rounded-[4px] bg-[#11150E] flex items-center justify-between overflow-hidden hover:bg-[#1a1f16] transition-colors group cursor-pointer ${
              buttonHeight === "62px" ? "h-[62px] px-[24px]" : "h-[54px] px-[22px]"
            }`}
          >
            <span
              className={`text-[#F2F4EC] font-semibold font-sans ${
                buttonHeight === "62px" ? "text-[15px]" : "text-[14px]"
              }`}
            >
              {buttonText}
            </span>
            <ArrowIcon
              color="lime"
              size={buttonHeight === "62px" ? "lg" : "md"}
            />
          </a>

          {note && (
            <span className="text-[#11150E] text-[10px] font-normal font-mono">
              {note}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
