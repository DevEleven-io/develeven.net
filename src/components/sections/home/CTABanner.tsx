import React from "react";
import ArrowIcon from "@/components/ui/ArrowIcon";

interface CTABannerProps {
  sectionTag: string;
  topRightText: string;
  hasDot?: boolean;
  headline: React.ReactNode;
  headlineSize?: "8xl" | "7xl" | "88px" | "80px";
  description: string;
  buttonHeight?: string;
  buttonText?: string;
  note?: string;
  ctaHref?: string;
}

export default function CTABanner({
  sectionTag,
  topRightText,
  hasDot = false,
  headline,
  headlineSize = "8xl",
  description,
  buttonHeight = "h-14",
  buttonText = "Discuss your project",
  note = "No sales script. Just a good conversation.",
  ctaHref = "/#contact",
}: CTABannerProps) {
  const isLarge = headlineSize === "8xl" || headlineSize === "88px";

  return (
    <section id="contact" className="w-full bg-[#CEFF69]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 py-16 lg:py-20 flex flex-col items-start gap-12 overflow-hidden">
        {/* Top Row */}
        <div className="w-full flex justify-between items-start overflow-hidden">
          <span className="text-[#11150E] text-xs sm:text-sm font-bold font-sans tracking-wider">
            {sectionTag}
          </span>
          <div className="flex items-center gap-2 overflow-hidden">
            {hasDot && (
              <div className="w-1.5 h-1.5 bg-[#11150E] rounded-full shrink-0" />
            )}
            <span className="text-[#11150E] text-xs sm:text-sm font-bold font-sans tracking-wider">
              {topRightText}
            </span>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="w-full flex flex-col lg:flex-row justify-start items-start lg:items-end gap-10 lg:gap-14 xl:gap-16 overflow-hidden">
          <h2
            className={`text-[#11150E] font-bold font-sans tracking-tight flex-1 ${
              isLarge
                ? "text-5xl sm:text-7xl lg:text-8xl leading-tight lg:leading-[0.98]"
                : "text-4xl sm:text-6xl lg:text-7xl leading-tight lg:leading-[1.02]"
            }`}
          >
            {headline}
          </h2>

          <div className="w-full lg:max-w-sm xl:max-w-md shrink-0 flex flex-col items-start gap-7 overflow-hidden">
            <p className="w-full text-[#11150E] text-base sm:text-lg lg:text-xl font-medium font-sans leading-relaxed">
              {description}
            </p>

            <a
              href={ctaHref}
              className={`w-full ${buttonHeight} px-6 rounded-lg bg-[#11150E] flex items-center justify-between overflow-hidden hover:bg-[#1a1f16] transition-colors group cursor-pointer`}
            >
              <span className="text-[#F2F4EC] text-sm font-semibold font-sans">
                {buttonText}
              </span>
              <ArrowIcon
                color="lime"
                size="md"
              />
            </a>

            {note && (
              <span className="text-[#11150E]/80 text-xs sm:text-sm font-bold font-sans tracking-wide">
                {note}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
