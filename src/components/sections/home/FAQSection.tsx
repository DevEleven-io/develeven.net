"use client";

import React, { useState } from "react";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { PlusIcon, MinusIcon } from "@/components/ui/Icons";

const faqs = [
  {
    question: "What do you need to get started?",
    answer:
      "You don’t need a perfect brief. Bring your idea, the problem you want to solve, and any goals or constraints you already know. We’ll help define the scope, explore the options, and agree on a practical next step.",
  },
  {
    question: "Can you work with our existing website or codebase?",
    answer:
      "Yes. We regularly inherit and improve existing projects. A technical review helps us understand the current state so we can give you an honest assessment and a clear path forward.",
  },
  {
    question: "How do you estimate cost and timelines?",
    answer:
      "We base estimates on scope, complexity, and your delivery constraints. After an initial conversation we’ll give you a clear proposal with milestones, deliverables, and transparent pricing.",
  },
  {
    question: "Will we own the code and source files?",
    answer:
      "Yes. Full ownership of all code, assets, and documentation is transferred to you on completion. No lock-in, no hidden licensing.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We offer ongoing care plans for maintenance, security updates, and continuous improvement. Or we hand over cleanly — your choice. Either way, you leave with clear documentation.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="w-full max-w-[1440px] mx-auto px-[64px] py-[96px] flex justify-start items-start gap-[96px] overflow-hidden"
    >
      {/* Left Column */}
      <div className="w-[430px] flex flex-col items-start gap-[24px] overflow-hidden shrink-0">
        <SectionLabel>07 / A FEW GOOD QUESTIONS</SectionLabel>
        <h2 className="w-full text-[#F2F4EC] text-[56px] font-normal font-sans leading-[59.36px]">
          Before we
          <br />
          write a line.
        </h2>
        <p className="w-full text-[#A4ADA0] text-[17px] font-normal font-sans leading-[28.05px]">
          A little clarity before a big decision. Have something else in mind? Just
          ask.
        </p>
        <Link
          href="/#contact"
          className="text-[#CEFF69] text-[15px] font-normal font-sans hover:underline flex items-center gap-[6px] group"
        >
          <span>Talk to our team</span>
          <ArrowIcon color="lime" size="md" />
        </Link>
      </div>

      {/* Right Accordion List */}
      <div className="flex-1 flex flex-col items-start overflow-hidden border-t border-[#343A33]">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className={`w-full overflow-hidden border-b border-[#343A33] transition-all ${
                isOpen ? "pt-[24px] pb-[28px]" : "py-[26px]"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center gap-[24px] text-left cursor-pointer group overflow-hidden"
              >
                <span className="flex-1 text-[#F2F4EC] text-[20px] font-medium font-sans">
                  {faq.question}
                </span>

                {/* Toggle Icon */}
                <div className="w-[20px] h-[20px] flex items-center justify-center shrink-0">
                  {isOpen ? (
                    <MinusIcon size={18} color="#CEFF69" />
                  ) : (
                    <PlusIcon size={18} color="#A4ADA0" className="group-hover:stroke-[#CEFF69] transition-colors" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="w-full pt-[20px]">
                  <p className="w-full text-[#A4ADA0] text-[16px] font-normal font-sans leading-[26.40px]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
