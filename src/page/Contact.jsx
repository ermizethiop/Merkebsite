import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiSend, FiMail, FiMapPin } from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import GlassCard from "../components/GlassCard";
import AnimatedSection from "../components/AnimatedSection";
import GradientBlobs from "../components/GradientBlobs";
import GridPulse from "../components/GridPulse";
import ScrollReveal from "../components/ScrollReveal";

const offices = [
  { city: "Bahir Dar", phone: "+251 964866786" },
  { city: "Dessie", phone: "+251 901171411" },
  { city: "Hawassa", phone: "+251 940664593" },
  { city: "Addis Ababa", phone: "+251 939445408" },
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61583313303819", color: "hover:bg-blue-600" },
  { name: "Instagram", href: "https://www.instagram.com/merkeb_tech", color: "hover:bg-pink-600" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/merkeb-tech/", color: "hover:bg-blue-700" },
  { name: "Telegram", href: "https://t.me/merkeb_tech", color: "hover:bg-blue-500" },
  { name: "TikTok", href: "https://www.tiktok.com/@merkeb_tech", color: "hover:bg-gray-900" },
];

function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ message: "", type: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm("service_7w34n3n", "template_wledv1g", formRef.current, "3UYf7_2Lsdb1_rRnd")
      .then(() => {
        setStatus({ message: "Message sent successfully! We'll get back to you soon.", type: "success" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setStatus({ message: "Failed to send. Please try again later.", type: "error" });
      })
      .finally(() => setSending(false));
  };

  const inputClass = "w-full px-5 py-4 bg-dark-800/80 border border-glass-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300 text-sm";

  return (
    <main className="relative min-h-screen bg-dark-900">
      <GradientBlobs />
      <GridPulse />
      <div className="relative z-10">
      <PageHeader
        title="Get in Touch"
        description="Have a question or want to work together? We're here to help and always open to discussing new projects."
      />

      <ScrollReveal>
      <section className="relative py-28 pb-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedSection>
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary-light mb-4">
                Contact Info
              </span>
              <h2 className="text-4xl font-display font-bold text-white leading-tight mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Have a question or want to work together? Feel free to reach out. We're here to help and always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-primary-light" />
                  </div>
                  <span>merkebtech1@gmail.com</span>
                </div>
                {offices.map((office) => (
                  <div key={office.city} className="flex items-center gap-4 text-gray-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <FiMapPin className="text-primary-light" />
                    </div>
                    <div>
                      <span className="text-white font-medium">{office.city}</span>
                      <br />
                      <span className="text-sm text-gray-400">{office.phone}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 text-sm font-medium rounded-lg border border-glass-border text-gray-300 ${link.color} transition-all duration-300 hover:text-white hover:border-transparent`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-display font-semibold text-white mb-6">Send Us a Message</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className={inputClass} />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" className={inputClass} />
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Subject" className={inputClass} />
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Your Message" className={`${inputClass} resize-none`} />
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {sending ? "Sending..." : "Send Message"}
                    <FiSend />
                  </button>
                </form>
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-6 p-4 rounded-xl text-sm font-medium ${
                      status.type === "success" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
      </ScrollReveal>
      </div>
    </main>
  );
}

export default Contact;
