import g1 from "../assets/g1.webp";
import g2 from "../assets/g2.webp";
import g3 from "../assets/g3.webp";
import g4 from "../assets/g4.webp";
import g5 from "../assets/g5.webp";
import g6 from "../assets/g6.webp";
import P2 from "../assets/P2.webp";
import P3 from "../assets/P3.webp";
import P6 from "../assets/P6.webp";

import { motion } from "framer-motion";
import { FiArrowRight, FiCode, FiLayout, FiServer } from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import SectionTitle from "../components/SectionTitle";
import GlassCard from "../components/GlassCard";
import AnimatedSection from "../components/AnimatedSection";
import Button from "../components/Button";
import GradientBlobs from "../components/GradientBlobs";
import ScrollReveal from "../components/ScrollReveal";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const founders = [
  { name: "Lidia Ashenafi", role: "Team Leader & Front-end Developer", bio: "Specializes in building responsive, performant, and visually stunning interfaces with a strong emphasis on usability and modern web technologies.", img: g1, icon: FiLayout },
  { name: "Ermiyas Sharew", role: "Full-Stack Developer & Co-Founder", bio: "Expert in building scalable backends and crafting intuitive, responsive frontend experiences that elevate digital products end-to-end.", img: P2, icon: FiCode },
  { name: "Sofonias Alebachew", role: "Backend Developer & Co-Founder", bio: "Focuses on designing scalable architectures, secure APIs, and high-performance server-side solutions.", img: P3, icon: FiServer },
];

const teamMembers = [
  { name: "Finoteloza Wanaw", role: "Social Media & Sales Manager", bio: "Skilled in driving brand growth, engaging audiences, and generating sales through strategic campaigns.", img: g4 },
  { name: "Tsehaye Adugna", role: "Graphics Designer & Sales Executive", bio: "Delivering bold designs and smart digital strategies that capture attention and drive sales growth.", img: g2 },
  { name: "Mahelete Admasie", role: "Sales Executive — Hawassa", bio: "Passionate about delivering exceptional customer experiences and fostering long-term client partnerships.", img: g3 },
  { name: "Ermiyas Getachew", role: "Sales Executive — Addis Ababa", bio: "Performance-driven sales excelling in client partnerships and measurable revenue results.", img: P6 },
  { name: "Hilawit Assefa", role: "Sales Executive — Bahir Dar", bio: "High-performing sales executive driving strategic client partnerships and consistent revenue growth.", img: g5 },
  { name: "Kidist Kebretie", role: "Sales Executive — Bahir Dar", bio: "Growth-focused sales executive with a proven track record of exceeding revenue targets.", img: g6 },
];

export default function Team() {
  return (
    <div className="relative min-h-screen bg-dark-900">
      <GradientBlobs />
      <div className="relative z-10">
      <PageHeader
        title="Our Team"
        description="Meet the talented individuals behind Merkeb Technologies who drive innovation and excellence in every project."
      />

      {/* ===== Intro — text only ===== */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-primary-light mb-4">
              Who We Are
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-8">
              Meet Our Team
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
              Behind Merkeb Tech is a small but driven group of developers, designers, and problem-solvers who love turning ideas into digital reality. Each of us brings something different — from clean UI design to solid backend systems — and together we collaborate on a variety of projects.
            </p>
            <p className="text-gray-400 mb-8">
              <span className="font-semibold text-white">Want to see what we've built together?</span>
            </p>
            <Button to="/portfolio">
              View Our Portfolio <FiArrowRight />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== Founders Spotlight ===== */}
      <ScrollReveal>
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Core Team" title="The Founders" />
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden border border-glass-border bg-glass backdrop-blur-xl transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_60px_-10px_rgba(249,115,22,0.4)]">
                  <div className="relative h-72 overflow-hidden bg-dark-800">
                    <img src={f.img} alt={f.name} loading="lazy" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-full bg-primary/20 text-primary-light border border-primary/30">
                        <f.icon className="text-sm" />
                        {f.role.split("&")[0].trim()}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-display font-bold text-white mb-2">{f.name}</h3>
                    <p className="text-sm text-primary-light font-medium mb-3">{f.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{f.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      </ScrollReveal>

      {/* ===== Team Members ===== */}
      <ScrollReveal>
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Team" title="The People Behind the Code" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {teamMembers.map((member) => (
              <motion.div key={member.name} variants={staggerItem}>
                <GlassCard className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={member.img} alt={member.name} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-semibold text-white">{member.name}</h3>
                      <p className="text-xs text-primary-light font-medium">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      </ScrollReveal>
      </div>
    </div>
  );
}
