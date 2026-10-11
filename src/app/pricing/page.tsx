import type { Metadata } from "next";
import React from "react";
import PricingHero from "@/components/sections/pricing/PricingHero";
import DisclaimerBanner from "@/components/sections/pricing/DisclaimerBanner";
import PricingNav from "@/components/sections/pricing/PricingNav";
import WebsitePricing from "@/components/sections/pricing/WebsitePricing";
import MaintenancePricing from "@/components/sections/pricing/MaintenancePricing";
import SoftwareGamesPricing from "@/components/sections/pricing/SoftwareGamesPricing";
import PricingProcess from "@/components/sections/pricing/PricingProcess";
import PricingFAQ from "@/components/sections/pricing/PricingFAQ";
import CTABanner from "@/components/sections/home/CTABanner";

export const metadata: Metadata = {
  title: "Pricing — DevEleven",
  description:
    "Clear scope. Considered investment. Compare ways to work with DevEleven — from a focused website to a complex product.",
};

export default function PricingPage() {
  return (
    <div className="w-full flex flex-col items-center bg-[#101211]">
      <PricingHero />
      <DisclaimerBanner />
      <PricingNav />
      <WebsitePricing />
      <MaintenancePricing />
      <SoftwareGamesPricing />
      <PricingProcess />
      <PricingFAQ />
      <CTABanner
        sectionTag="07 / YOUR PROJECT, CLEARLY SCOPED"
        topRightText="LET’S FIND THE RIGHT STARTING POINT"
        hasDot={false}
        headline={
          <>
            Bring the ambition.
            <br />
            Let’s define the build.
          </>
        }
        headlineSize="80px"
        description="Tell us your goals, the service you need, your budget range and your ideal launch date. We’ll work out a practical next step."
        buttonHeight="54px"
        buttonText="Discuss your project"
        note="NO SALES SCRIPT. JUST A GOOD CONVERSATION."
      />
    </div>
  );
}
