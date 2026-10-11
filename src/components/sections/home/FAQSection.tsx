"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

interface FAQItemData {
  question: string;
  answer: string;
}

const faqs: FAQItemData[] = [
  {
    question: "What do you need to get started?",
    answer:
      "You don't need a perfect brief. Bring your idea, the problem you want to solve, and any goals or constraints you already know. We'll help define the scope, explore the options, and agree on a practical next step.",
  },
  {
    question: "Can you work with our existing website or codebase?",
    answer:
      "Yes. We regularly inherit and improve existing projects. A technical review helps us understand the current state so we can give you an honest assessment and a clear path forward.",
  },
  {
    question: "How do you estimate cost and timelines?",
    answer:
      "We base estimates on scope, complexity, and your delivery constraints. After an initial conversation we'll give you a clear proposal with milestones, deliverables, and transparent pricing.",
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

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemData & { isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-neutral-700">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center gap-6 py-6 text-left group"
      >
        <span className="flex-1 text-stone-100 text-xl font-medium font-sans">
          {question}
        </span>
        {/* Toggle icon */}
        <div className="size-5 relative shrink-0 overflow-hidden">
          <div
            className={`absolute left-[4.17px] top-[10px] w-3 h-0 outline outline-1 ${
              isOpen ? "outline-lime-300" : "outline-neutral-400"
            }`}
          />
          {!isOpen && (
            <div className="absolute top-[4.17px] left-[10px] w-0 h-3 outline outline-1 outline-neutral-400" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="pb-7">
          <p className="text-neutral-400 text-base leading-7 font-sans">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full max-w-[1440px] mx-auto px-16 py-24 flex gap-24">
      {/* Left sidebar */}
      <div className="w-96 flex flex-col gap-6">
        <SectionLabel>07 / A FEW GOOD QUESTIONS</SectionLabel>
        <h2 className="text-stone-100 text-6xl font-sans leading-[1.02]">
          Before we
          <br />
          write a line.
        </h2>
        <p className="text-neutral-400 text-base leading-7 font-sans">
          A little clarity before a big decision. Have something else in mind?
          Just ask.
        </p>
        <a
          href="/#contact"
          className="text-lime-300 text-base font-sans hover:text-lime-200 transition-colors"
        >
          Talk to our team ↗
        </a>
      </div>

      {/* FAQ list */}
      <div className="flex-1 flex flex-col border-t border-neutral-700">
        {faqs.map((faq, i) => (
          <FAQItem
            key={faq.question}
            {...faq}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
