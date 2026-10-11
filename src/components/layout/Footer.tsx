"use client";

import Link from "next/link";

const expertiseLinks = [
  { label: "Website development", href: "/#services" },
  { label: "Website maintenance", href: "/#services" },
  { label: "Custom software", href: "/#services" },
  { label: "Game development", href: "/#services" },
  { label: "Engineering services", href: "/#services" },
];

const exploreLinks = [
  { label: "Our approach", href: "/#approach" },
  { label: "The studio", href: "/#studio" },
  { label: "Ways to work together", href: "/#engagement" },
  { label: "FAQs", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

function Footer() {
  return (
    <footer className="w-full bg-neutral-900">
      <div className="max-w-[1440px] mx-auto px-16 pt-16 pb-8 flex flex-col gap-12">
        {/* Top row */}
        <div className="flex justify-between items-start">
          {/* Brand */}
          <div className="w-96 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-start gap-[5px]">
                <div className="w-1.5 h-6 bg-lime-300" />
                <div className="w-1.5 h-6 bg-lime-300" />
              </div>
              <span className="text-stone-100 text-2xl font-sans">
                DevEleven
              </span>
            </Link>
            <p className="text-neutral-400 text-base leading-6 font-sans">
              Independent thinking. Precise engineering. Digital products built
              for the long run.
            </p>
            <Link
              href="/#contact"
              className="text-lime-300 text-sm font-sans hover:text-lime-200 transition-colors"
            >
              Start a conversation ↗
            </Link>
          </div>

          {/* Expertise column */}
          <div className="flex flex-col gap-3.5">
            <span className="font-mono text-[10px] text-neutral-400">
              EXPERTISE
            </span>
            {expertiseLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-stone-100 text-sm font-sans hover:text-lime-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Explore column */}
          <div className="flex flex-col gap-3.5">
            <span className="font-mono text-[10px] text-neutral-400">
              EXPLORE
            </span>
            {exploreLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-stone-100 text-sm font-sans hover:text-lime-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Brand mark */}
          <div className="flex flex-col items-end gap-3.5">
            <span className="text-lime-300 text-8xl font-medium font-sans leading-[81px]">
              /11
            </span>
            <span className="font-mono text-[10px] text-neutral-400">
              BUILT WITH INTENT.
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-700" />

        {/* Legal bar */}
        <div className="flex justify-between items-center">
          <span className="font-mono text-[10px] text-neutral-400">
            © 2026 DEVELEVEN. ALL RIGHTS RESERVED.
          </span>
          <div className="flex gap-7">
            <Link
              href="/privacy"
              className="text-neutral-400 text-xs font-sans hover:text-stone-100 transition-colors"
            >
              Privacy policy
            </Link>
            <Link
              href="/terms"
              className="text-neutral-400 text-xs font-sans hover:text-stone-100 transition-colors"
            >
              Terms of use
            </Link>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-mono text-[10px] text-stone-100 hover:text-lime-300 transition-colors cursor-pointer"
          >
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
