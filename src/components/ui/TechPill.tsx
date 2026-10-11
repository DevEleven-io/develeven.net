function TechPill({ label }: { label: string }) {
  return (
    <div className="px-3 py-2 rounded-sm outline outline-1 outline-neutral-700 inline-flex">
      <span className="font-mono text-xs text-stone-100">{label}</span>
    </div>
  );
}

export default TechPill;
