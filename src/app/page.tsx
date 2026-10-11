import HeroSection from "@/components/sections/home/HeroSection";
import ServicesBar from "@/components/sections/home/ServicesBar";
import ServicesGrid from "@/components/sections/home/ServicesGrid";
import WorkShowcase from "@/components/sections/home/WorkShowcase";
import ApproachSection from "@/components/sections/home/ApproachSection";
import ProcessSection from "@/components/sections/home/ProcessSection";
import StudioSection from "@/components/sections/home/StudioSection";
import EngagementSection from "@/components/sections/home/EngagementSection";
import FAQSection from "@/components/sections/home/FAQSection";
import CTABanner from "@/components/sections/home/CTABanner";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center">
      <HeroSection />
      <ServicesBar />
      <ServicesGrid />
      <WorkShowcase />
      <ApproachSection />
      <ProcessSection />
      <StudioSection />
      <EngagementSection />
      <FAQSection />
      <CTABanner
        sectionTag="08 / YOUR NEXT CHAPTER"
        headline={<>Big idea?<br />Let&apos;s make it real.</>}
        note="NO SALES SCRIPT. JUST A GOOD CONVERSATION."
        ctaLabel="Discuss your project"
      />
    </div>
  );
}
