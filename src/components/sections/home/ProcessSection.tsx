import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We ask better questions. Together, we define the problem, the users, and what success actually looks like.",
    deliverable: "PROJECT BRIEF + ROADMAP",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We shape the experience and the system behind it. Prototypes and technical decisions make the plan tangible.",
    deliverable: "PROTOTYPE + TECHNICAL PLAN",
  },
  {
    number: "03",
    title: "Build & validate",
    description:
      "We work in focused iterations. You see progress, test real functionality, and help steer every release.",
    deliverable: "WORKING SOFTWARE + TESTS",
  },
  {
    number: "04",
    title: "Launch & evolve",
    description:
      "We deploy with care, hand over with clarity, and keep improving what matters as your product grows.",
    deliverable: "RELEASE + ONGOING SUPPORT",
  },
];

function ProcessSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-16 py-24 bg-zinc-900 flex flex-col gap-14">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div className="w-[730px] flex flex-col gap-6">
          <SectionLabel>04 / FROM ZERO TO SHIPPED</SectionLabel>
          <h2 className="text-stone-100 text-6xl font-sans leading-[1.02]">
            A clear process.
            <br />
            No disappearing acts.
          </h2>
        </div>
        <div className="w-96">
          <p className="text-neutral-400 text-base leading-7 font-sans">
            Direct conversations. Visible progress. Shared decisions. You always
            know what we&apos;re building, and why.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="flex gap-8">
        {steps.map((step) => (
          <div key={step.number} className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-lime-300">
                {step.number}
              </span>
              <div className="flex-1 h-px bg-neutral-700" />
            </div>
            <h3 className="text-stone-100 text-2xl font-sans">{step.title}</h3>
            <p className="text-neutral-400 text-base leading-6 font-sans">
              {step.description}
            </p>
            <span className="font-mono text-[10px] text-lime-300">
              {step.deliverable}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;
