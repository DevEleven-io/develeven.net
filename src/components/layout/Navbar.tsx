"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Our approach", href: "/#approach" },
  { label: "Studio", href: "/#studio" },
  { label: "Pricing", href: "/pricing" },
];

function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className="w-full sticky top-0 z-50"
      style={{ background: "#101211", borderBottom: "1px solid #343A33" }}
    >
      <div className="max-w-[1440px] mx-auto px-16 flex items-center justify-between" style={{ height: "100px" }}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 overflow-hidden">
          <div className="flex items-start gap-[5px]">
            <div className="w-[6px] h-[25px]" style={{ background: "#CEFF69" }} />
            <div className="w-[6px] h-[25px]" style={{ background: "#CEFF69" }} />
          </div>
          <span style={{ color: "#F2F4EC", fontSize: "26px", fontFamily: "Inter", fontWeight: 400 }}>
            DevEleven
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === "/pricing" && link.href === "/pricing";
            return (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  color: isActive ? "#CEFF69" : "#F2F4EC",
                  fontSize: "14px",
                  fontFamily: "Inter",
                  fontWeight: 400,
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA button */}
        <Link
          href="/#contact"
          className="flex items-center gap-7 overflow-hidden"
          style={{
            height: "54px",
            paddingLeft: "22px",
            paddingRight: "22px",
            background: "#CEFF69",
            borderRadius: "4px",
            outline: "1px solid #CEFF69",
            outlineOffset: "-1px",
          }}
        >
          <span style={{ color: "#11150E", fontSize: "14px", fontFamily: "Inter", fontWeight: 600 }}>
            Let&apos;s talk
          </span>
          {/* Arrow icon */}
          <div className="w-[18px] h-[18px] relative overflow-hidden shrink-0">
            <div
              className="absolute"
              style={{
                width: "7.5px",
                height: "7.5px",
                left: "5.25px",
                top: "5.25px",
                outline: "1.5px solid #11150E",
                outlineOffset: "-0.75px",
              }}
            />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
