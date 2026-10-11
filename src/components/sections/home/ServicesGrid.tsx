import React from "react";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  tags: string;
  iconShape: React.ReactNode;
}

function ServiceCard({
  number,
  title,
  description,
  tags,
  iconShape,
}: ServiceCardProps) {
  return (
    <div className="flex-1 h-[274px] p-[28px] bg-[#191C19] rounded-[4px] outline outline-1 outline-[#343A33] -outline-offset-1 flex flex-col justify-start items-start gap-[24px] overflow-hidden">
      <div className="w-full flex justify-between items-center overflow-hidden">
        <div className="w-[26px] h-[26px] relative overflow-hidden shrink-0">
          {iconShape}
        </div>
        <span className="text-[#A4ADA0] text-[11px] font-normal font-mono">
          {number}
        </span>
      </div>
      <div className="w-full flex flex-col items-start gap-[12px] overflow-hidden">
        <h3 className="w-full text-[#F2F4EC] text-[26px] font-normal font-sans">
          {title}
        </h3>
        <p className="w-full text-[#A4ADA0] text-[15px] font-normal font-sans leading-[24px]">
          {description}
        </p>
      </div>
      <span className="w-full text-[#CEFF69] text-[10px] font-normal font-mono leading-[15px]">
        {tags}
      </span>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="w-full max-w-[1440px] mx-auto px-[64px] py-[96px] flex flex-col items-start gap-[48px] overflow-hidden"
    >
      {/* Header */}
      <div className="w-full flex justify-between items-end overflow-hidden">
        <div className="w-[730px] flex flex-col items-start gap-[24px] overflow-hidden">
          <SectionLabel>01 / WHAT WE BUILD</SectionLabel>
          <h2 className="w-full text-[#F2F4EC] text-[56px] font-normal font-sans leading-[59.36px]">
            The right expertise.
            <br />
            From the ground up.
          </h2>
        </div>
        <div className="w-[390px] flex flex-col items-start overflow-hidden">
          <p className="w-full text-[#A4ADA0] text-[17px] font-normal font-sans leading-[28.05px]">
            One engineering partner for your entire digital ecosystem. Start with a
            single challenge. Stay for the bigger picture.
          </p>
        </div>
      </div>

      {/* Grid Rows */}
      <div className="w-full flex flex-col items-start gap-[16px] overflow-hidden">
        {/* Row 1 */}
        <div className="w-full flex items-start gap-[16px] overflow-hidden">
          <ServiceCard
            number="SVC / 01"
            title="Website development"
            description="Fast, accessible websites that turn your brand into a better digital experience. Built for people, search, and scale."
            tags="MARKETING SITES / E-COMMERCE / WEB APPS"
            iconShape={
              <div className="w-[19.5px] h-[19.5px] left-[3.25px] top-[3.25px] absolute outline outline-[1.5px] outline-[#CEFF69] -outline-offset-[0.75px]" />
            }
          />
          <ServiceCard
            number="SVC / 02"
            title="Website maintenance"
            description="Keep your website secure, current, and performing at its best. Proactive care, without the technical overhead."
            tags="UPDATES / SECURITY / PERFORMANCE"
            iconShape={
              <div className="w-[21.67px] h-[21.67px] left-[2.17px] top-[2.16px] absolute outline outline-[1.5px] outline-[#CEFF69] -outline-offset-[0.75px]" />
            }
          />
          <ServiceCard
            number="SVC / 03"
            title="Custom software"
            description="Purpose-built tools for the way your business actually works. From customer platforms to complex internal systems."
            tags="SAAS / BUSINESS TOOLS / INTEGRATIONS"
            iconShape={
              <div className="w-[21.67px] h-[17.33px] left-[2.17px] top-[4.33px] absolute outline outline-[1.5px] outline-[#CEFF69] -outline-offset-[0.75px]" />
            }
          />
        </div>

        {/* Row 2 */}
        <div className="w-full flex items-start gap-[16px] overflow-hidden">
          <ServiceCard
            number="SVC / 04"
            title="Game development"
            description="Compelling worlds, responsive mechanics, and solid technical foundations. From playable prototype to polished release."
            tags="UNITY / UNREAL / INTERACTIVE EXPERIENCES"
            iconShape={
              <div className="w-[21.67px] h-[15.17px] left-[2.17px] top-[5.42px] absolute outline outline-[1.5px] outline-[#CEFF69] -outline-offset-[0.75px]" />
            }
          />
          <ServiceCard
            number="SVC / 05"
            title="Engineering & infrastructure"
            description="Connect systems, modernize your stack, and make your infrastructure ready for what comes next."
            tags="APIS / CLOUD / DEVOPS / MODERNIZATION"
            iconShape={
              <div className="w-[21.67px] h-[21.67px] left-[2.17px] top-[2.17px] absolute outline outline-[1.5px] outline-[#CEFF69] -outline-offset-[0.75px]" />
            }
          />

          {/* CTA Card */}
          <div className="flex-1 h-[274px] p-[28px] rounded-[4px] outline outline-1 outline-[#343A33] -outline-offset-1 flex flex-col justify-between items-start overflow-hidden">
            <span className="text-[#A4ADA0] text-[11px] font-normal font-mono">
              NOT SURE WHERE TO START?
            </span>
            <p className="w-full text-[#F2F4EC] text-[30px] font-normal font-sans leading-[34.80px]">
              Bring the challenge. We’ll find the right approach.
            </p>
            <Link
              href="/#contact"
              className="flex items-center gap-[16px] overflow-hidden group"
            >
              <span className="text-[#CEFF69] text-[14px] font-semibold font-sans group-hover:underline">
                Let’s figure it out
              </span>
              <div className="w-[18px] h-[18px] relative overflow-hidden shrink-0">
                <div className="w-[7.5px] h-[7.5px] left-[5.25px] top-[5.25px] absolute outline outline-1 outline-[#CEFF69] -outline-offset-[0.5px]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
