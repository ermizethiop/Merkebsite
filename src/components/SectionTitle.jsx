import { motion } from "framer-motion";

export default function SectionTitle({ subtitle, title, align = "center" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mb-20 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {subtitle && (
        <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-primary-light mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1]">
        {title}
      </h2>
      <div className={`mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-secondary ${align === "center" ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
