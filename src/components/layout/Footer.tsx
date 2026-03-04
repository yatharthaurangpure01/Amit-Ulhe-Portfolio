import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Life Insurance", path: "/services" },
    { name: "Health Insurance", path: "/services" },
    { name: "Mutual Funds", path: "/services" },
    { name: "Retirement Planning", path: "/services" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">Madhura Wealth Management</h3>
                <p className="text-sm text-primary-foreground/70">Amit Ulhe</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Authorized Financial Planner & Insurance Advisor with 15+ years of experience helping families secure their financial future.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1Baq9e5WVQ/" target="_blank" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/amit-ulhe-704b6777" target="_blank" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/amitsureshulhe/" target="_blank" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">Nagpur, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:8208691655" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  8208691655
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info.mfais2030@gmail.com" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  info.mfais2030@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Amit Suresh Ulhe. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/services" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Tax Benefits
            </Link>
            <Link to="/why-choose-me" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Why Choose Me
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
