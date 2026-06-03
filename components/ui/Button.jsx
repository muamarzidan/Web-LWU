import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  icon = false,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 active:scale-95";

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const variants = {
    primary: "bg-[#2563EB] text-white hover:bg-blue-700 shadow-sm shadow-blue-500/20",
    secondary:
      "border-2 border-[#1B2D5E] text-[#1B2D5E] hover:bg-[#1B2D5E] hover:text-white",
    gold: "bg-[#F59E0B] text-white hover:bg-amber-500 shadow-sm",
    ghost: "text-[#2563EB] hover:bg-[#2563EB]/10",
    white: "bg-white text-[#1B2D5E] hover:bg-[#F8F6F0] shadow-sm",
    outline_white:
      "border-2 border-white text-white hover:bg-white hover:text-[#1B2D5E]",
    green: "bg-green-500 text-white hover:bg-green-600 shadow-sm",
  };

  const classes = `${base} ${sizes[size] || sizes.md} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
          {children}
          {icon && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {children}
        {icon && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
    </button>
  );
}
