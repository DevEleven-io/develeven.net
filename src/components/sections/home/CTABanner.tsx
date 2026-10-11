import ArrowIcon from "@/components/ui/ArrowIcon";

interface CTABannerProps {
  /** Section label shown top-left */
  sectionTag: string;
  /** The large headline — accepts JSX for line breaks */
  headline: React.ReactNode;
  /** Supporting note below the CTA button */
  note?: string;
  /** CTA button label */
  ctaLabel?: string;
  ctaHref?: string;
}

function CTABanner({
  sectionTag,
  headline,
  note,
  ctaLabel = "Discuss your project",
  ctaHref = "/#contact",
}: CTABannerProps) {
  return (
    <section
      id="contact"
      className="w-full max-w-[1440px] mx-auto px-16 py-20 bg-lime-300 flex flex-col gap-12"
    >
      {/* Top row */}
      <div className="flex justify-between items-start">
        <span className="font-mono text-xs text-neutral-900">
          {sectionTag}
        </span>
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-neutral-900 rounded-full" />
          <span className="font-mono text-xs text-neutral-900">
            LET&apos;S BUILD SOMETHING THAT MATTERS
          </span>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex justify-start items-end gap-16">
        <h2 className="w-[820px] text-neutral-900 text-8xl font-sans leading-[1.02]">
          {headline}
        </h2>
        <div className="flex-1 flex flex-col gap-7">
          <p className="text-neutral-900 text-base leading-7 font-sans">
            Tell us what you&apos;re thinking. We&apos;ll bring the questions, the
            expertise, and a clear way forward.
          </p>
          <a
            href={ctaHref}
            className="h-16 px-6 bg-neutral-900 rounded-sm flex items-center justify-between gap-4 hover:bg-neutral-800 transition-colors"
          >
            <span className="text-stone-100 text-base font-semibold font-sans">
              {ctaLabel}
            </span>
            <ArrowIcon className="text-lime-300" />
          </a>
          {note && (
            <span className="font-mono text-[10px] text-neutral-900">
              {note}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
