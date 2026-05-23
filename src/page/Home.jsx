import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck, FiCode, FiLayers, FiZap, FiTrendingUp, FiUsers, FiClock, FiShield, FiStar, FiTarget, FiHeart, FiAward } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiPython, SiMongodb, SiTailwindcss, SiDjango, SiFlask, SiMysql, SiNextdotjs, SiTypescript } from "react-icons/si";
import W1 from "../assets/W1.webp";
import W2 from "../assets/W2.webp";
import P_O from "../assets/P_O.webp";
import SectionTitle from "../components/SectionTitle";
import GlassCard from "../components/GlassCard";
import AnimatedSection from "../components/AnimatedSection";
import ParticleNetwork from "../components/ParticleNetwork";
import GradientBlobs from "../components/GradientBlobs";
import CodeWindow from "../components/CodeWindow";
import ScrollReveal from "../components/ScrollReveal";
import CountUp from "../components/CountUp";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stats = [
  { value: "50+", label: "Projects Delivered", icon: FiCode },
  { value: "20+", label: "Happy Clients", icon: FiUsers },
  { value: "99%", label: "Client Satisfaction", icon: FiTrendingUp },
  { value: "24/7", label: "Support", icon: FiClock },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "We dive deep into your vision, goals, and audience to craft a roadmap for success.", icon: FiTarget },
  { step: "02", title: "Strategy", desc: "We architect a tailored plan combining design thinking with technical feasibility.", icon: FiLayers },
  { step: "03", title: "Design & Develop", desc: "Our team builds pixel-perfect, high-performance solutions using cutting-edge tech.", icon: FiCode },
  { step: "04", title: "Launch", desc: "We deploy, test, and optimize — ensuring your digital presence is flawless.", icon: FiAward },
  { step: "05", title: "Grow", desc: "Ongoing support, analytics, and iteration to keep you ahead of the curve.", icon: FiTrendingUp },
];

const features = [
  { title: "Lightning Fast", desc: "Optimized for speed with sub-second load times and performance best practices.", icon: FiZap },
  { title: "Pixel Perfect", desc: "Every detail is crafted with precision for a flawless visual experience.", icon: FiLayers },
  { title: "Battle Tested", desc: "Robust security, scalability, and reliability built into every solution.", icon: FiShield },
];

const whyUs = [
  { title: "Creative & Affordable", desc: "Student developers bring fresh ideas and modern design at accessible prices." },
  { title: "Innovative Approach", desc: "Modern frameworks and performance-driven practices for standout digital solutions." },
  { title: "Client-Centered", desc: "Transparent collaboration ensuring the final product exceeds expectations." },
  { title: "Future-Ready", desc: "Scalable products designed to keep your business ahead in a fast-changing world." },
];

const projects = [
  { img: W1, name: "Fetel Habesha Dress", desc: "E-commerce platform for traditional Ethiopian fashion", link: "https://habesha-traditional-dress.vercel.app/" },
  { img: W2, name: "KARAWI Hotel", desc: "Premium hotel booking & management system", link: "https://kerawi-hotel.onrender.com/" },
  { img: P_O, name: "Corporate Profile", desc: "Professional web presence highlighting mission, services, and organizational impact.", link: "https://www.segelconsult.com/" },
];

const techStack = [
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "Django", icon: SiDjango, color: "text-green-600" },
  { name: "Flask", icon: SiFlask, color: "text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-400" },
];

const testimonials = [
  {
    quote: "Merkeb Tech transformed our online presence. The team was professional, responsive, and delivered beyond our expectations.",
    author: "Abebe Kebede",
    role: "Founder, Habesha Fashion",
  },
  {
    quote: "Working with Merkeb was a game-changer. They built a booking system that saved us countless hours of manual work.",
    author: "Sara Mohammed",
    role: "Manager, KARAWI Hotel",
  },
];

const values = [
  { icon: FiCode, label: "Clean Code" },
  { icon: FiHeart, label: "Passion" },
  { icon: FiTarget, label: "Precision" },
  { icon: FiUsers, label: "Collaboration" },
];

export default function Home() {
  return (
    <div className="relative">
      <GradientBlobs />
      <div className="relative z-10">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
        <ParticleNetwork />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <span className="inline-block text-xs font-mono tracking-widest text-primary-light/80 uppercase mb-6">
                🇪🇹 Addis Ababa · Est. 2024
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
                Building Digital
                <br />
                <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                  Empires
                </span>
                {" "}with Brilliant Code
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed">
                From inventory systems to SaaS platforms — we ship software that actually works.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-3">
                <Link to="/contact" className="group relative px-9 py-3.5 text-base font-semibold rounded-full bg-gradient-to-r from-primary to-secondary text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_-5px_rgba(249,115,22,0.6)] hover:scale-105 active:scale-95">
                  <span className="relative z-10 flex items-center gap-2">
                    Start a Project
                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
                <Link to="/portfolio" className="group relative text-base font-semibold text-primary-light transition-all duration-300">
                  See Our Work
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>
              <p className="text-xs text-gray-500 mb-8">Free consultation · No commitment</p>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["JD", "SM", "AT", "KM"].map((init, i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-[10px] font-bold text-white border-2 border-dark-900">
                      {init}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-400">
                  <span className="text-white font-semibold">12+</span> projects delivered
                </span>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="hidden lg:block"
            >
              <CodeWindow />
            </motion.div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* ===== STATS ===== */}
      <ScrollReveal>
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-5">
                  <stat.icon className="text-2xl text-primary-light" />
                </div>
                <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2">
                  {stat.value.includes("/") ? stat.value : <CountUp end={parseInt(stat.value)} suffix={stat.value.includes("+") ? "+" : stat.value.includes("%") ? "%" : ""} />}
                </div>
                <div className="text-sm text-gray-400 font-medium tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ===== TECH STACK MARQUEE ===== */}
      <ScrollReveal>
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-primary/5 to-dark-900" />
        <div className="relative">
          <div className="flex gap-16 animate-marquee items-center" style={{ width: "max-content" }}>
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex items-center gap-4 px-6">
                <tech.icon className={`text-5xl ${tech.color} transition-all duration-300 hover:scale-110`} />
                <span className="text-lg font-semibold text-gray-300 whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ===== ABOUT — text-only with values grid ===== */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <AnimatedSection>
              <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-primary-light mb-4">
                About Merkeb Tech
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-8">
                We Build Smart,{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Modern Websites.
                </span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                From sleek designs to fast performance — we create sites that bring real results for small businesses, restaurants, and organizations. Our team of passionate developers combines creativity with technical expertise to deliver exceptional digital solutions.
              </p>
            </AnimatedSection>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8"
          >
            {values.map((v) => (
              <motion.div key={v.label} variants={staggerItem} className="flex flex-col items-center gap-3 px-8 py-6 rounded-2xl border border-glass-border bg-glass backdrop-blur-xl">
                <v.icon className="text-3xl text-primary-light" />
                <span className="text-sm font-semibold text-gray-300 tracking-wide">{v.label}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_40px_-5px_rgba(249,115,22,0.5)] transition-all duration-300 hover:scale-105 active:scale-95">
              Let's Work Together
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== HORIZONTAL TIMELINE PROCESS ===== */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="How We Work" title="From Idea to Launch" />
          <div className="timeline-line grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 pt-12">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center md:pt-0 pt-0"
              >
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-[0_0_20px_-3px_rgba(249,115,22,0.5)] animate-dot-pulse md:mb-6 mb-4">
                  {step.step}
                </div>
                <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 to-secondary/40 -z-10" />
                <div className="md:mt-0 mt-2">
                  <h3 className="text-lg font-display font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-[220px]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Testimonials" title="What Our Clients Say" />
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <GlassCard key={t.author} delay={i * 0.15} className="p-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <FiStar key={j} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">"{t.quote}"</p>
                <div className="flex items-center gap-1">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                    {t.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-semibold">{t.author}</p>
                    <p className="text-gray-400 text-sm">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Why Merkeb Tech" title="Why Businesses Choose Us" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {whyUs.map((item) => (
              <motion.div key={item.title} variants={staggerItem}>
                <GlassCard className="p-10">
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mt-1">
                      <FiCheck className="text-xl text-primary-light" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-semibold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="What We Offer" title="Built for Excellence" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feat) => (
              <motion.div key={feat.title} variants={staggerItem}>
                <GlassCard className="p-10 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center mx-auto mb-8">
                    <feat.icon className="text-4xl text-primary-light" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-white mb-4">{feat.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feat.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== RECENT WORK ===== */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Portfolio" title="Our Recent Work" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((work, i) => {
              const Card = work.link ? motion.a : motion.div;
              const linkProps = work.link ? { href: work.link, target: "_blank", rel: "noopener noreferrer" } : {};
              return (
                <Card
                  key={work.name}
                  {...linkProps}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border border-glass-border bg-glass backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={work.img} alt={work.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-display font-semibold text-white mb-1.5">{work.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{work.desc}</p>
                    {work.link && (
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-light group-hover:gap-2.5 transition-all">View Project <FiArrowRight className="text-xs" /></span>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/portfolio" className="group inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_40px_-5px_rgba(249,115,22,0.5)] transition-all duration-300 hover:scale-105 active:scale-95">
              View All Projects
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-40">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <SectionTitle subtitle="Get In Touch" title="Ready to Build Something Amazing?" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Let's collaborate to create a digital experience that sets your business apart. Your vision, our expertise — together we'll build something extraordinary.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contact" className="group inline-flex items-center gap-3 px-12 py-5 text-lg font-semibold rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_60px_-5px_rgba(249,115,22,0.6)] transition-all duration-300 hover:scale-105 active:scale-95">
              Start Your Project
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
      </div>
    </div>
  );
}
