import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-4 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm animate-fade-in">
              <Award className="w-4 h-4 text-accent" />
              <span>15+ Years of Trusted Experience</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
              Secure Your Future with{" "}
              <span className="text-gradient-gold">Smart Financial Planning</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl animate-fade-in-up stagger-1">
              Authorized Financial Planner & Insurance Advisor helping families and businesses achieve financial security and peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-2">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Get Insurance Quote</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20 animate-fade-in-up stagger-3">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-accent">100+</p>
                <p className="text-sm text-primary-foreground/70">Happy Families</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-accent">15+</p>
                <p className="text-sm text-primary-foreground/70">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-accent">₹50Cr+</p>
                <p className="text-sm text-primary-foreground/70">Claims Settled</p>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in-up stagger-2">
            {[
              { icon: Shield, title: "Life Protection", desc: "Comprehensive coverage for your family" },
              { icon: TrendingUp, title: "Wealth Growth", desc: "Strategic investment planning" },
              { icon: Users, title: "Family Security", desc: "Plans for every life stage" },
              { icon: Award, title: "Expert Guidance", desc: "Personalized financial advice" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-primary-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-5 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
