export default function Badge({ children, variant = "blue", className = "" }) {
  const variants = {
    blue: "bg-[#2563EB]/10 text-[#2563EB]",
    gold: "bg-[#F59E0B] text-white",
    navy: "bg-[#1B2D5E] text-white",
    green: "bg-green-500 text-white",
    cream: "bg-[#F8F6F0] text-[#374151]",
    outline: "border border-[#2563EB] text-[#2563EB]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${variants[variant] || variants.blue} ${className}`}
    >
      {children}
    </span>
  );
}
