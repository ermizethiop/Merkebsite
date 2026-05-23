import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import GlassCard from "../components/GlassCard";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import GradientBlobs from "../components/GradientBlobs";
import FloatingShapes from "../components/FloatingShapes";
import ScrollReveal from "../components/ScrollReveal";
import P_B from "../assets/P_B.webp";
import P_G from "../assets/P_G.webp";
import P_H from "../assets/P_H.webp";
import P_D from "../assets/P_D.webp";
import P_O from "../assets/P_O.webp";
import menu from "../assets/menu.webp";

const projects = [
  { title: "Content Platform", image: P_B, desc: "A clean, content-focused website for writers to publish articles and engage readers.", tech: ["Python", "Flask", "MySQL"] },
  { title: "Gym Management System", image: P_G, desc: "Complete platform for gym operations — memberships, payments, class scheduling.", tech: ["Next.js", "MySQL", "Node.js"] },
  { title: "Hotel Management", image: P_H, desc: "Responsive booking system with room listings, availability, and secure reservations.", tech: ["Python", "Flask", "MySQL"] },
  { title: "Fashion E-Commerce", image: P_D, desc: "Modern online store for Habesha clothing with collections, inventory, and seamless shopping.", tech: ["React", "Tailwind", "Node.js", "MongoDB"] },
  { title: "Corporate Profile", image: P_O, desc: "Professional web presence highlighting mission, services, and organizational impact.", tech: ["React", "Figma", "Bootstrap"] },
  { title: "Digital Menu", image: menu, desc: "Interactive digital menu showcasing offerings with a modern, easy-to-navigate design.", tech: ["React", "Tailwind"] },
];

export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-dark-900">
      <GradientBlobs />
      <FloatingShapes />
      <div className="relative z-10">
      <PageHeader
        title="Our Portfolio"
        description="Explore our collection of innovative projects that showcase our design excellence and technical expertise."
      />

      <ScrollReveal>
      <section className="relative py-28 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <GlassCard key={project.title} delay={i * 0.08} hover={false} className="overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary-light border border-primary/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
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
          <SectionTitle subtitle="Let's Collaborate" title="Have a Project in Mind?" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 mb-10"
          >
            We'd love to hear about your next big idea. Let's work together to bring it to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button to="/contact">
              Start a Project <FiArrowRight />
            </Button>
          </motion.div>
        </div>
      </section>
      </ScrollReveal>
      </div>
    </main>
  );
}
