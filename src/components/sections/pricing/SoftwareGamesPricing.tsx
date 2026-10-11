import SectionLabel from "@/components/ui/SectionLabel";
import CheckItem from "@/components/ui/CheckItem";
import ArrowIcon from "@/components/ui/ArrowIcon";

const services = [
  {
    code: "SW / 01",
    title: "Custom software",
    subtitle: "SaaS, internal tools and connected systems.",
    price: "$15,000–30,000",
    priceNote: "EXAMPLE USD / FOCUSED MVP",
    scope:
      "Example scope: one core workflow, two user roles and one integration.",
    features: [
      "Discovery + system architecture",
      "UX flows & working prototype",
      "Application development + testing",
      "Deployment, documentation & handover",
    ],
    note: "Multi-product platforms, complex migrations and regulated workflows need a tailored estimate.",
    ctaLabel: "Scope your software",
  },
  {
    code: "GM / 02",
    title: "Game development",
    subtitle: "Validate the experience before a full production.",
    price: "$8,000–15,000",
    priceNote: "EXAMPLE USD / PLAYABLE PROTOTYPE",
    scope: "Example scope: one core mechanic, one level and one target platform.",
    features: [
      "Gameplay systems & interaction design",
      "Engine setup + prototype build",
      "Placeholder art & basic UI integration",
      "Playtesting + technical handover",
    ],
    note: "Full games, original art, multiplayer, console certification and live operations are quoted separately.",
    ctaLabel: "Scope your game",
  },
  {
    code: "EN / 03",
    title: "Engineering services",
    subtitle: "Specialist expertise for a specific challenge.",
    price: "$2,000–5,000",
    priceNote: "EXAMPLE USD / FOCUSED SPRINT",
    scope:
      "Example scope: one bounded technical problem with agreed deliverables.",
    features: [
      "Architecture or codebase assessment",
      "API, integration or automation work",
      "Cloud & delivery pipeline improvements",
      "Findings, implementation notes + next steps",
    ],
    note: "Ongoing team extension, infrastructure rebuilds and larger integrations use a tailored engagement.",
    ctaLabel: "Discuss engineering",
  },
];

function SoftwareGamesPricing() {
  return (
    <section id="software" className="w-full max-w-[1440px] mx-auto px-16 py-20 flex flex-col gap-10">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div className="w-[740px] flex flex-col gap-5">
          <SectionLabel>03–04 / SOFTWARE, GAMES &amp; ENGINEERING</SectionLabel>
          <h2 className="text-stone-100 text-5xl font-sans leading-[1.02]">
            Not every build
            <br />
            fits in a package.
          </h2>
        </div>
        <div className="w-96">
          <p className="text-neutral-400 text-base leading-7 font-sans">
            Start with a useful, bounded outcome. These example budgets help
            frame the conversation, not define your final quote.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex gap-4">
        {services.map((svc) => (
          <div
            key={svc.code}
            className="flex-1 p-7 bg-zinc-900 rounded-sm outline outline-1 outline-neutral-700 flex flex-col gap-5"
          >
            {/* Icon + code */}
            <div className="flex justify-between items-start">
              <div className="size-6 relative overflow-hidden">
                <div className="size-5 absolute top-[3.25px] left-[3.25px] outline outline-[1.5px] outline-lime-300" />
              </div>
              <span className="font-mono text-[10px] text-neutral-400">{svc.code}</span>
            </div>

            <h3 className="text-stone-100 text-3xl font-sans">{svc.title}</h3>

            <p className="h-11 text-neutral-400 text-base leading-6 font-sans">
              {svc.subtitle}
            </p>

            {/* Price */}
            <div className="flex flex-col gap-2.5">
              <span className="text-stone-100 text-4xl font-sans">{svc.price}</span>
              <span className="font-mono text-[10px] text-lime-300">{svc.priceNote}</span>
            </div>

            <div className="w-full h-px bg-neutral-700" />

            <p className="h-16 text-neutral-400 text-sm leading-6 font-sans">{svc.scope}</p>

            {/* Features */}
            <div className="flex flex-col gap-3">
              {svc.features.map((f) => (
                <CheckItem key={f}>{f}</CheckItem>
              ))}
            </div>

            <p className="h-16 font-mono text-[10px] text-neutral-400 leading-4">{svc.note}</p>

            {/* CTA */}
            <a
              href="/#contact"
              className="h-14 px-5 bg-neutral-900 rounded-sm outline outline-1 outline-neutral-700 flex items-center gap-7 hover:outline-neutral-500 transition-colors"
            >
              <span className="flex-1 text-stone-100 text-sm font-semibold font-sans">{svc.ctaLabel}</span>
              <ArrowIcon className="text-lime-300" />
            </a>
          </div>
        ))}
      </div>

      {/* Partnership CTA banner */}
      <div className="p-6 outline outline-1 outline-neutral-700 flex justify-between items-center">
        <div className="w-[920px] flex flex-col gap-2">
          <p className="text-stone-100 text-xl font-sans">
            Need engineering capacity, not a standalone project?
          </p>
          <p className="text-neutral-400 text-sm leading-6 font-sans">
            A dedicated partnership can flex around your roadmap. Team size,
            allocation and monthly budget are agreed after discovery.
          </p>
        </div>
        <a href="/#contact" className="text-lime-300 text-sm font-sans hover:text-lime-200 transition-colors whitespace-nowrap">
          Discuss a partnership ↗
        </a>
      </div>
    </section>
  );
}

export default SoftwareGamesPricing;
