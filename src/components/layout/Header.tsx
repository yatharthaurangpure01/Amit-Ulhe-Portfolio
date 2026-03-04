import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Calculator", path: "/sip-calculator" },
  { name: "Why Choose Me", path: "/why-choose-me" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-medium py-2"
          : location.pathname === "/success"
            ? "gradient-hero py-4"
            : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center border border-black">
            <span className="text-blue-950 font-display font-bold text-lg">
              M
            </span>
          </div>
          <div className="">
            <p
              className={`font-display font-semibold text-lg ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Madhura Wealth Management
            </p>
            <p
              className={`text-xs ${
                isScrolled ? "text-muted-foreground" : "text-gray-200"
              }`}
            >
              Amit Ulhe
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === link.path
                  ? "text-accent bg-accent/10"
                  : isScrolled
                    ? "text-foreground hover:text-accent hover:bg-accent/5"
                    : "text-white hover:text-accent"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="navCta" asChild className="hidden sm:inline-flex">
            <Link to="/contact">Get Free Consultation</Link>
          </Button>
          <button
            className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gold" />
            ) : (
              <Menu className="w-6 h-6 text-gold" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-strong animate-fade-in">
          <nav className="container-custom py-4 px-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-md font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-accent bg-accent/10"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <Button variant="accent" className="w-full" asChild>
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
