import SectionLabel from "@/components/ui/SectionLabel";
import TechPill from "@/components/ui/TechPill";

const principles = [
  {
    title: "Quality you can inspect",
    description:
      "Readable code, meaningful tests, and thoughtful reviews. No black boxes. No shortcuts you inherit later.",
  },
  {
    title: "Resilience by design",
    description:
      "Security, accessibility, and performance considered from day one — not added at the finish line.",
  },
  {
    title: "Built for the next chapter",
    description:
      "Practical architecture, clear documentation, and a codebase your team can confidently take forward.",
  },
];

const techStack = ["React", "Node.js", "Python", "Unity", "AWS"];

function ApproachSection() {
  return (
    <section id="approach" className="w-full max-w-[1440px] mx-auto px-16 py-24 flex gap-20">
      {/* Left: philosophy */}
      <div className="w-[580px] flex flex-col gap-7">
        <SectionLabel>03 / HOW WE THINK</SectionLabel>
        <h2 className="text-stone-100 text-6xl font-sans leading-[1.02]">
          Good software
          <br />
          is more than
          <br />a good launch.
        </h2>
        <p className="text-neutral-400 text-base leading-7 font-sans">
          It&apos;s what happens after. How it holds up under pressure. How easily
          it evolves. How confidently your team can rely on it.
        </p>
        <div className="pt-3 flex flex-col gap-3.5">
          <span className="font-mono text-[10px] text-neutral-400">
            THE RIGHT TOOL FOR THE JOB, NOT THE TREND.
          </span>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <TechPill key={tech} label={tech} />
            ))}
          </div>
        </div>
      </div>

      {/* Right: quality principles */}
      <div className="flex-1 flex flex-col gap-7">
        {/* Quality gate header */}
        <div className="p-4 bg-zinc-900 rounded-sm outline outline-1 outline-neutral-700 flex justify-between items-center">
          <span className="font-mono text-xs text-neutral-400">
            DEVELEVEN / QUALITY GATE
          </span>
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-lime-300 rounded-full" />
            <span className="font-mono text-xs text-lime-300">
              BUILT INTO EVERY RELEASE
            </span>
          </div>
        </div>

        {principles.map((p) => (
          <div
            key={p.title}
            className="pb-6 border-b border-neutral-700 flex gap-5"
          >
            <div className="size-6 relative overflow-hidden shrink-0">
              <div className="size-5 absolute top-[3.25px] left-[3.25px] outline outline-[1.5px] outline-lime-300" />
            </div>
            <div className="flex flex-col gap-2.5">
              <h3 className="text-stone-100 text-2xl font-sans">{p.title}</h3>
              <p className="text-neutral-400 text-base leading-6 font-sans">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ApproachSection;
