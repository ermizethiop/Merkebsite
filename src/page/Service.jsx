import { motion } from "framer-motion";
import { FiMonitor, FiPenTool, FiGlobe, FiTool, FiTrendingUp, FiShare2 } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import GlassCard from "../components/GlassCard";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import GradientBlobs from "../components/GradientBlobs";
import FloatingShapes from "../components/FloatingShapes";
import ScrollReveal from "../components/ScrollReveal";

const services = [
  {
    title: "Website & Web App Development",
    description: "Modern, fast, and scalable websites and web applications tailored to your business. We use cutting-edge frameworks to deliver exceptional performance.",
    icon: FiMonitor,
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
  },
  {
    title: "UI/UX Design",
    description: "Human-centered design that balances beauty, clarity, and conversion. Every pixel is crafted to create intuitive and memorable user experiences.",
    icon: FiPenTool,
    gradient: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
  },
  {
    title: "Domain & Hosting",
    description: "Reliable domains and secure hosting with performance and uptime in mind. We ensure your site stays fast, secure, and always accessible.",
    icon: FiGlobe,
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
  },
  {
    title: "Website Maintenance",
    description: "Continuous updates, security patches, and performance tuning to keep your online presence running smoothly around the clock.",
    icon: FiTool,
    gradient: "from-orange-500/20 to-yellow-500/20",
    borderColor: "border-orange-500/30",
  },
  {
    title: "Digital Consultancy",
    description: "Strategic roadmaps, technical audits, and growth-oriented digital strategies to elevate your online presence and achieve measurable results.",
    icon: FiTrendingUp,
    gradient: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    title: "Software Integration",
    description: "Seamlessly connect CRMs, payment gateways, analytics, and third-party tools to create a unified, efficient technology ecosystem.",
    icon: FiShare2,
    gradient: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-500/30",
  },
];

export default function Service() {
  return (
    <main className="relative min-h-screen bg-dark-900">
      <GradientBlobs />
      <FloatingShapes />
      <div className="relative z-10">
      <PageHeader
        title="Our Services"
        description="We help businesses grow online with modern technology, thoughtful design, and reliable delivery."
      />

      <ScrollReveal>
      <section className="relative py-28 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <GlassCard key={s.title} delay={i * 0.1} className="p-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} border ${s.borderColor} flex items-center justify-center mb-6`}>
                  <s.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{s.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <SectionTitle subtitle="Get Started" title="Need a Custom Solution?" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 mb-10"
          >
            Every business is unique. Let's discuss your specific needs and create a tailored solution that drives results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button to="/contact">
              Let's Talk <FiArrowRight />
            </Button>
          </motion.div>
        </div>
      </section>
      </ScrollReveal>
      </div>
    </main>
  );
}
