
import { FiCheck } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import GlassCard from "../components/GlassCard";
import GradientBlobs from "../components/GradientBlobs";
import ScrollReveal from "../components/ScrollReveal";

const packages = [
  {
    name: "Basic",
    price: "15,000 - 25,000 ETB",
    desc: "A simple, clean website for your business with standard pages.",
    features: ["Up to 5 Pages", "Responsive Design", "Basic Contact Form", "SEO Friendly"],
    popular: false,
  },
  {
    name: "Standard",
    price: "25,000 - 50,000 ETB",
    desc: "Interactive website with advanced features and dynamic content.",
    features: ["Up to 10 Pages", "Interactive Forms", "Gallery & Portfolio", "Basic Analytics", "Responsive & SEO"],
    popular: true,
  },
  {
    name: "Premium",
    price: "50,000 - 100,000 ETB",
    desc: "Full-featured e-commerce website with integrated backend system.",
    features: ["Unlimited Pages", "Online Store Integration", "Secure Payments", "Inventory Management", "Customer Dashboard", "Full Analytics & SEO"],
    popular: false,
  },
];

export default function Price() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-dark-900">
      <GradientBlobs />
      <div className="relative z-10">
      <PageHeader
        title="Our Pricing"
        description="Choose the plan that fits your business needs. Simple, Standard, or fully Integrated E-Commerce. Hosting fees not included."
      />

      <ScrollReveal>
      <section className="relative py-28 pb-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {packages.map((pkg, i) => (
              <GlassCard
                key={pkg.name}
                delay={i * 0.15}
                className={`p-8 ${pkg.popular ? "border-primary/50 ring-1 ring-primary/30" : ""}`}
              >
                {pkg.popular && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-gradient-to-r from-primary to-secondary text-white mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-display font-bold text-white mb-3">{pkg.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{pkg.desc}</p>
                <div className="text-3xl font-display font-bold text-white mb-8">
                  {pkg.price.split(" - ").map((part, j) => (
                    <span key={j} className="block text-lg text-gray-300 font-normal">
                      {j === 0 ? "From " : "To "}{part}
                    </span>
                  ))}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-gray-300 text-sm">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <FiCheck className="text-primary-light text-xs" />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate("/contact")}
                  className={`w-full py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    pkg.popular
                      ? "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)]"
                      : "border border-glass-border text-white hover:bg-glass-hover hover:border-primary/50"
                  }`}
                >
                  Get Started
                </button>
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
