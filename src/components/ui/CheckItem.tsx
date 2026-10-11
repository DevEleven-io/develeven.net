function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
      <div className="w-4 h-5 relative shrink-0 overflow-hidden">
        <div className="size-2.5 absolute top-[5px] left-[2.67px] outline outline-[1.5px] outline-lime-300" />
      </div>
      <span className="flex-1 text-stone-100 text-sm leading-5 font-sans">
        {children}
      </span>
    </div>
  );
}

export default CheckItem;
