import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  HeartPulse, 
  GraduationCap, 
  Landmark, 
  TrendingUp, 
  Building2,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Life Insurance",
    description: "Protect your family's financial future with comprehensive life cover.",
  },
  {
    icon: HeartPulse,
    title: "Health Insurance",
    description: "Safeguard yourself and loved ones against medical emergencies.",
  },
  {
    icon: GraduationCap,
    title: "Child Education Planning",
    description: "Secure your child's dreams with long-term planning and growth.",
  },
  {
    icon: Landmark,
    title: "Retirement Planning",
    description: "Build a stable and stress-free post-retirement life.",
  },
  {
    icon: TrendingUp,
    title: "Mutual Funds & Investments",
    description: "Grow your wealth strategically while minimizing risk.",
  },
  {
    icon: Building2,
    title: "Business Insurance",
    description: "Comprehensive protection for your business assets and employees.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-4">
            <span className="text-sm font-medium text-accent">Our Services</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            Tailor-made insurance and investment solutions designed to match your life goals and financial aspirations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="default" size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
