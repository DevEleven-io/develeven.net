import SectionLabel from "@/components/ui/SectionLabel";
import ArrowIcon from "@/components/ui/ArrowIcon";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  tags: string;
}

function ServiceCard({ number, title, description, tags }: ServiceCardProps) {
  return (
    <div className="flex-1 h-72 p-7 bg-zinc-900 rounded-sm outline outline-1 outline-neutral-700 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        {/* Icon placeholder — lime square outline */}
        <div className="size-6 relative overflow-hidden">
          <div className="size-5 absolute top-[3.25px] left-[3.25px] outline outline-[1.5px] outline-lime-300" />
        </div>
        <span className="font-mono text-xs text-neutral-400">{number}</span>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-stone-100 text-2xl font-sans">{title}</h3>
        <p className="text-neutral-400 text-base leading-6 font-sans">
          {description}
        </p>
      </div>
      <span className="font-mono text-[10px] text-lime-300 leading-4">
        {tags}
      </span>
    </div>
  );
}

const services = [
  {
    number: "SVC / 01",
    title: "Website development",
    description:
      "Fast, accessible websites that turn your brand into a better digital experience. Built for people, search, and scale.",
    tags: "MARKETING SITES / E-COMMERCE / WEB APPS",
  },
  {
    number: "SVC / 02",
    title: "Website maintenance",
    description:
      "Keep your website secure, current, and performing at its best. Proactive care, without the technical overhead.",
    tags: "UPDATES / SECURITY / PERFORMANCE",
  },
  {
    number: "SVC / 03",
    title: "Custom software",
    description:
      "Purpose-built tools for the way your business actually works. From customer platforms to complex internal systems.",
    tags: "SAAS / BUSINESS TOOLS / INTEGRATIONS",
  },
  {
    number: "SVC / 04",
    title: "Game development",
    description:
      "Compelling worlds, responsive mechanics, and solid technical foundations. From playable prototype to polished release.",
    tags: "UNITY / UNREAL / INTERACTIVE EXPERIENCES",
  },
  {
    number: "SVC / 05",
    title: "Engineering & infrastructure",
    description:
      "Connect systems, modernize your stack, and make your infrastructure ready for what comes next.",
    tags: "APIS / CLOUD / DEVOPS / MODERNIZATION",
  },
];

function ServicesGrid() {
  return (
    <section id="services" className="w-full max-w-[1440px] mx-auto px-16 py-24 flex flex-col gap-12">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div className="w-[730px] flex flex-col gap-6">
          <SectionLabel>01 / WHAT WE BUILD</SectionLabel>
          <h2 className="text-stone-100 text-6xl font-sans leading-[1.02]">
            The right expertise.
            <br />
            From the ground up.
          </h2>
        </div>
        <div className="w-96">
          <p className="text-neutral-400 text-base leading-7 font-sans">
            One engineering partner for your entire digital ecosystem. Start with
            a single challenge. Stay for the bigger picture.
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="flex flex-col gap-4">
        {/* Row 1 */}
        <div className="flex gap-4">
          {services.slice(0, 3).map((svc) => (
            <ServiceCard key={svc.number} {...svc} />
          ))}
        </div>
        {/* Row 2 */}
        <div className="flex gap-4">
          {services.slice(3).map((svc) => (
            <ServiceCard key={svc.number} {...svc} />
          ))}
          {/* CTA card */}
          <div className="flex-1 h-72 p-7 rounded-sm outline outline-1 outline-neutral-700 flex flex-col justify-between">
            <span className="font-mono text-xs text-neutral-400">
              NOT SURE WHERE TO START?
            </span>
            <p className="text-stone-100 text-3xl font-sans leading-9">
              Bring the challenge. We&apos;ll find the right approach.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-4 group"
            >
              <span className="text-lime-300 text-sm font-semibold font-sans group-hover:text-lime-200 transition-colors">
                Let&apos;s figure it out
              </span>
              <ArrowIcon className="text-lime-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
