import React from "react";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const faqs = [
  {
    question: "Are these your final prices?",
    answer:
      "No. Every amount on this page is an indicative USD example, pending confirmation. Your tailored proposal sets the actual currency, price, taxes, scope and commercial terms.",
  },
  {
    question: "What is not included in the examples?",
    answer:
      "Unless explicitly scoped, allow separately for hosting, domains, third-party licenses, original content and ongoing support. Your proposal will itemize inclusions and exclusions.",
  },
  {
    question: "Can we start smaller or phase the work?",
    answer:
      "Yes. Share your priorities and budget so we can explore a smaller first release. Additional features, platforms or integrations can be planned as separate phases.",
  },
  {
    question: "What if the scope changes after we start?",
    answer:
      "New requirements are reviewed against the agreed scope. Any impact on budget and schedule should be documented and approved before the additional work begins.",
  },
  {
    question: "Can you maintain an existing site or codebase?",
    answer:
      "Bring it to the conversation. A technical review helps establish the condition of the code, dependencies and infrastructure before we agree the right care or engineering scope.",
  },
];

export default function PricingFAQ() {
  return (
    <section
      id="pricing-faq"
      className="w-full max-w-[1440px] mx-auto px-[64px] py-[88px] flex justify-start items-start gap-[96px] overflow-hidden"
    >
      {/* Left Column */}
      <div className="w-[430px] flex flex-col items-start gap-[24px] overflow-hidden shrink-0">
        <SectionLabel>06 / PRICING FAQ</SectionLabel>
        <h2 className="w-full text-[#F2F4EC] text-[52px] font-normal font-sans leading-[56.16px]">
          A little clarity.
          <br />
          Before you commit.
        </h2>
        <p className="w-full text-[#A4ADA0] text-[16px] font-normal font-sans leading-[26.40px]">
          Budget questions are good questions. Here’s what to know before we put a
          proposal together.
        </p>
        <Link
          href="/#contact"
          className="text-[#CEFF69] text-[15px] font-normal font-sans hover:underline"
        >
          Talk to our team ↗
        </Link>
      </div>

      {/* Right List */}
      <div className="flex-1 flex flex-col items-start overflow-hidden">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="w-full py-[24px] border-t border-[#343A33] flex flex-col items-start gap-[12px] overflow-hidden"
          >
            <h3 className="w-full text-[#F2F4EC] text-[20px] font-medium font-sans">
              {faq.question}
            </h3>
            <p className="w-full text-[#A4ADA0] text-[15px] font-normal font-sans leading-[24.75px]">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
