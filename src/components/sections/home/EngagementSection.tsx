import SectionLabel from "@/components/ui/SectionLabel";
import ArrowIcon from "@/components/ui/ArrowIcon";

const engagements = [
  {
    type: "01 / PROJECT",
    title: "Build something new",
    description:
      "A focused engagement to take your idea from scope to launch, with clear milestones and a shared delivery plan.",
    bestFor: "New websites, MVPs, custom platforms",
  },
  {
    type: "02 / PARTNERSHIP",
    title: "Extend your team",
    description:
      "Engineering expertise alongside your people. Add capacity, solve specialist challenges, and keep delivery moving.",
    bestFor: "Growing products, ongoing roadmaps",
  },
  {
    type: "03 / CONTINUOUS CARE",
    title: "Keep getting better",
    description:
      "A dependable partner for maintenance, optimization, and thoughtful improvements after your product goes live.",
    bestFor: "Live websites, established software",
  },
];

function EngagementSection() {
  return (
    <section id="engagement" className="w-full max-w-[1440px] mx-auto px-16 py-24 bg-zinc-900 flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col gap-6">
        <SectionLabel>06 / A PARTNERSHIP THAT FITS</SectionLabel>
        <h2 className="text-stone-100 text-6xl font-sans leading-[1.02]">
          Your ambition. Our way in.
        </h2>
      </div>

      {/* Cards */}
      <div className="flex gap-4">
        {engagements.map((eng) => (
          <div
            key={eng.type}
            className="flex-1 p-7 bg-neutral-900 rounded-sm outline outline-1 outline-neutral-700 flex flex-col gap-6"
          >
            <span className="font-mono text-xs text-lime-300">{eng.type}</span>
            <h3 className="text-stone-100 text-3xl font-sans">{eng.title}</h3>
            <p className="text-neutral-400 text-base leading-6 font-sans">
              {eng.description}
            </p>
            <div className="pt-5 border-t border-neutral-700 flex flex-col gap-2">
              <span className="font-mono text-[10px] text-neutral-400">BEST FOR</span>
              <p className="text-stone-100 text-xs font-sans">{eng.bestFor}</p>
            </div>
            <a
              href="/#contact"
              className="flex justify-between items-center group"
            >
              <span className="text-lime-300 text-sm font-sans group-hover:text-lime-200 transition-colors">
                Let&apos;s talk about it
              </span>
              <ArrowIcon className="text-lime-300" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EngagementSection;
