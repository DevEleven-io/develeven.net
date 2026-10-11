interface SectionLabelProps {
  children: React.ReactNode;
  /** "dark" = lime text (default, on dark bg), "light" = stone-600 text (on stone-200 bg) */
  theme?: "dark" | "light";
}

function SectionLabel({ children, theme = "dark" }: SectionLabelProps) {
  const color = theme === "dark" ? "text-lime-300" : "text-stone-600";
  return (
    <span className={`font-mono text-xs ${color}`}>{children}</span>
  );
}

export default SectionLabel;
