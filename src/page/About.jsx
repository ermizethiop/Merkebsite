import { motion } from "framer-motion";
import { FiArrowRight, FiCode, FiDatabase, FiLayout, FiServer, FiCloud, FiGitBranch, FiUsers, FiTarget, FiZap } from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import SectionTitle from "../components/SectionTitle";
import GlassCard from "../components/GlassCard";
import AnimatedSection from "../components/AnimatedSection";
import Button from "../components/Button";
import GradientBlobs from "../components/GradientBlobs";
import ScanlineOverlay from "../components/ScanlineOverlay";
import ScrollReveal from "../components/ScrollReveal";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const techStack = [
  { name: "React", icon: FiCode, color: "text-cyan-400" },
  { name: "Node.js", icon: FiServer, color: "text-green-500" },
  { name: "TypeScript", icon: FiCode, color: "text-blue-500" },
  { name: "Python", icon: FiCode, color: "text-yellow-500" },
  { name: "MongoDB", icon: FiDatabase, color: "text-green-600" },
  { name: "MySQL", icon: FiDatabase, color: "text-blue-600" },
  { name: "Django", icon: FiCloud, color: "text-emerald-500" },
  { name: "Flask", icon: FiServer, color: "text-red-500" },
  { name: "Laravel", icon: FiGitBranch, color: "text-red-600" },
  { name: "Tailwind CSS", icon: FiLayout, color: "text-teal-500" },
];

const highlights = [
  { icon: FiUsers, label: "4 Team Members", desc: "Passionate developers & sales executives" },
  { icon: FiTarget, label: "Mission-Driven", desc: "Empowering Ethiopian businesses online" },
  { icon: FiZap, label: "Full-Stack Expertise", desc: "From design to deployment & beyond" },
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-dark-900">
      <GradientBlobs />
      <ScanlineOverlay targetSelector="h1, h2" />
      <div className="relative z-10">
      <PageHeader
        title="About Us"
        description="Explore how Merkeb Technologies empowers growth through scalable, future-ready innovation."
      />

      {/* ===== Who We Are — text only with highlight cards ===== */}
      <ScrollReveal>
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <AnimatedSection>
              <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-primary-light mb-4">
                Who We Are
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-8">
                Merkeb Technology
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                We are a team of three passionate software engineering students and a sales executive turning ideas into real, meaningful digital solutions. Our expertise spans frontend and backend development, UI/UX design, and full-stack systems. Each member brings unique skills and creativity. Together, we build software that works flawlessly, looks beautiful, and makes a lasting impact.
              </p>
            </AnimatedSection>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
          >
            {highlights.map((h) => (
              <motion.div key={h.label} variants={staggerItem}>
                <GlassCard className="p-8 text-center">
                  <h.icon className="text-3xl text-primary-light mx-auto mb-4" />
                  <h3 className="text-lg font-display font-semibold text-white mb-2">{h.label}</h3>
                  <p className="text-gray-400 text-sm">{h.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center">
            <Button to="/team">
              Meet the Team <FiArrowRight />
            </Button>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ===== What Drives Us ===== */}
      <ScrollReveal>
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <GlassCard className="max-w-4xl mx-auto px-6 py-16 text-center border-primary/10">
          <SectionTitle subtitle="Our Mission" title="What Drives Us?" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We started Merkeb Technology to help Ethiopian businesses thrive online. Our mission is to build modern, functional websites and software that drive growth. Every project is driven by creativity, quality, and impact. We believe technology should be simple, accessible, and useful for everyone.
          </motion.p>
        </GlassCard>
      </section>
      </ScrollReveal>

      {/* ===== Our Vision — text only with decorative elements ===== */}
      <ScrollReveal>
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-primary-light mb-4">
                Our Vision
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-8">
                Building the{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Future of Tech
                </span>{" "}
                in Ethiopia
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We dream of growing Merkeb into a hub for innovation, a team that not only builds software but also creates opportunities for other young developers in Ethiopia.
              </p>
              <p className="text-primary-light text-lg font-semibold mb-4">
                Let's Build Something Together
              </p>
              <p className="text-gray-400 text-lg mb-8">
                Have an idea or need a website? We'd love to help bring it to life the Merkeb way.
              </p>
              <Button to="/contact">
                Join the Vision <FiArrowRight />
              </Button>
            </AnimatedSection>
            <AnimatedSection delay={0.2} direction="right">
              <div className="relative flex items-center justify-center">
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  {/* Outer rotating ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(249,115,22,0.6)]" />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary shadow-[0_0_12px_rgba(245,158,11,0.6)]" />
                    <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary-light shadow-[0_0_12px_rgba(251,146,60,0.6)]" />
                    <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/60 shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
                  </motion.div>

                  {/* Inner counter-rotating ring */}
                  <motion.div
                    className="absolute inset-8 rounded-full border border-secondary/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary shadow-[0_0_12px_rgba(245,158,11,0.6)]" />
                    <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2 h-2 rounded-full bg-white/40" />
                  </motion.div>

                  {/* Pulsing glow background */}
                  <motion.div
                    className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent"
                    animate={{
                      scale: [1, 1.12, 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* Floating center icon */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ y: [0, -14, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-primary via-primary-dark to-secondary flex items-center justify-center shadow-2xl shadow-primary/40">
                      <FiTarget className="text-5xl md:text-6xl text-white" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      </ScrollReveal>

      {/* ===== Tech Stack ===== */}
      <ScrollReveal>
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Technology" title="Technologies We Choose" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {techStack.map((tech, i) => (
              <GlassCard key={tech.name} delay={i * 0.05} className="p-6 text-center">
                <tech.icon className={`text-4xl mx-auto mb-3 ${tech.color}`} />
                <span className="text-sm font-medium text-gray-300">{tech.name}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>
      </div>
    </div>
  );
}
