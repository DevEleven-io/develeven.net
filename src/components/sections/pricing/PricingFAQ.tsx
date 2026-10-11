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

function PricingFAQ() {
  return (
    <section id="pricing-faq" className="w-full max-w-[1440px] mx-auto px-16 py-20 flex gap-24">
      {/* Left sidebar */}
      <div className="w-96 flex flex-col gap-6 shrink-0">
        <span className="font-mono text-xs text-lime-300">06 / PRICING FAQ</span>
        <h2 className="text-stone-100 text-5xl font-sans leading-[1.02]">
          A little clarity.
          <br />
          Before you commit.
        </h2>
        <p className="text-neutral-400 text-base leading-7 font-sans">
          Budget questions are good questions. Here&apos;s what to know before we
          put a proposal together.
        </p>
        <a
          href="/#contact"
          className="text-lime-300 text-base font-sans hover:text-lime-200 transition-colors"
        >
          Talk to our team ↗
        </a>
      </div>

      {/* FAQ items — always expanded (no accordion on pricing page) */}
      <div className="flex-1 flex flex-col">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="py-6 border-t border-neutral-700 flex flex-col gap-3"
          >
            <h3 className="text-stone-100 text-xl font-medium font-sans">
              {faq.question}
            </h3>
            <p className="text-neutral-400 text-base leading-6 font-sans">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingFAQ;
