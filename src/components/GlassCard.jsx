import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  delay = 0,
  hover = true,
  glow = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : undefined}
      className={`group relative overflow-hidden rounded-2xl border border-glass-border bg-glass backdrop-blur-xl transition-all duration-500 ${
        glow ? "hover:border-primary/50 hover:shadow-[0_0_60px_-10px_rgba(249,115,22,0.4)]" : ""
      } ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/0 via-transparent to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ margin: "-1px", zIndex: -1 }} />
      {children}
    </motion.div>
  );
}
