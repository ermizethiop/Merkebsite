import { Link } from "react-router-dom";
import { FiArrowUp, FiMail, FiMapPin } from "react-icons/fi";
import { FaTelegramPlane, FaInstagram, FaFacebook, FaTiktok, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Logo from "../assets/Logo_2.png";

const footerLinks = {
  services: ["Web Development", "UI/UX Design", "Domain & Hosting", "Maintenance", "Digital Consultancy"],
  quickLinks: ["Home", "About", "Team", "Services", "Portfolio", "Pricing", "Contact"],
  social: [
    { icon: FaTelegramPlane, href: "https://t.me/merkeb_tech", hover: "hover:text-blue-400" },
    { icon: FaInstagram, href: "https://www.instagram.com/merkeb_tech", hover: "hover:text-pink-500" },
    { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61583313303819", hover: "hover:text-blue-500" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@merkeb_tech", hover: "hover:text-white" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/merkeb-tech/", hover: "hover:text-blue-600" },
    { icon: FaWhatsapp, href: "https://wa.me/251964866786", hover: "hover:text-green-400" },
  ],
  offices: [
    { city: "Bahir Dar", phone: "+251 964866786" },
    { city: "Dessie", phone: "+251 901171411" },
    { city: "Hawassa", phone: "+251 940664593" },
    { city: "Addis Ababa", phone: "+251 939445408" },
  ],
};

const linkPaths = {
  Home: "/",
  About: "/about",
  Team: "/team",
  Services: "/service",
  Portfolio: "/portfolio",
  Pricing: "/price",
  Contact: "/contact",
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-dark-800 border-t border-glass-border">
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center hover:shadow-[0_0_20px_-3px_rgba(249,115,22,0.5)] transition-all duration-300"
      >
        <FiArrowUp />
      </button>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <img src={Logo} alt="Merkeb Technologies" className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
              <div>
                <span className="text-xl font-display font-bold text-white block leading-tight">Merkeb</span>
                <span className="text-xs text-gray-400 tracking-widest uppercase block -mt-0.5">Technologies</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Full-service web development and digital consultancy. From static websites to full-stack solutions — we empower businesses through innovative software.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-lg border border-glass-border flex items-center justify-center text-gray-400 ${s.hover} transition-all duration-300 hover:border-transparent hover:bg-glass-hover`}
                >
                  <s.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-semibold mb-5">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((s) => (
                <li key={s}>
                  <Link to="/service" className="text-gray-400 hover:text-primary-light text-sm transition-colors duration-200">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    to={linkPaths[link] || "/"}
                    className="text-gray-400 hover:text-primary-light text-sm transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-semibold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:merkebtech1@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-primary-light text-sm transition-colors duration-200">
                  <FiMail className="flex-shrink-0" />
                  merkebtech1@gmail.com
                </a>
              </li>
              {footerLinks.offices.map((office) => (
                <li key={office.city} className="flex items-center gap-3 text-gray-400 text-sm">
                  <FiMapPin className="flex-shrink-0" />
                  <span>{office.city}: {office.phone}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-glass-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Merkeb Technologies. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Crafted with passion in Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
}
