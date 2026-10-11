interface StatusDotProps {
  label: string;
  color?: "lime" | "neutral";
}

function StatusDot({ label, color = "lime" }: StatusDotProps) {
  const dotColor = color === "lime" ? "bg-lime-300" : "bg-neutral-900";
  const textColor = color === "lime" ? "text-neutral-400" : "text-neutral-900";

  return (
    <div className="inline-flex items-center gap-2">
      <div className={`size-1.5 rounded-full shrink-0 ${dotColor}`} />
      <span className={`font-mono text-xs ${textColor}`}>{label}</span>
    </div>
  );
}

export default StatusDot;
