import { Link } from "react-router-dom";

export default function Button({ children, to, onClick, variant = "primary", className = "", size = "md" }) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const base = `relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 overflow-hidden group ${sizeClasses[size]} ${className}`;

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)] hover:scale-[1.02] active:scale-[0.98]",
    outline:
      "border border-glass-border text-white hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.2)]",
    ghost: "text-white/80 hover:text-white hover:bg-glass-hover",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${base} ${variants[variant]}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {content}
    </button>
  );
}
