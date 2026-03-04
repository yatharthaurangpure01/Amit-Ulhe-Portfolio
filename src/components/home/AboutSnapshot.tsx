import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const AboutSnapshot = () => {
  const highlights = [
    "15+ years of financial expertise",
    "Personalized planning for every life stage",
    "100% transparent advisory process",
    "Quick claim support & assistance",
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[6/5] rounded-2xl overflow-hidden shadow-strong">
              <img
                src="/AmitUlhe.JPG"
                alt="Amit Suresh Ulhe - Financial Planner & Advisor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-accent/10 rounded-full">
              <span className="text-sm font-medium text-accent">About Me</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Your Trusted Partner in Financial Planning
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm Amit Suresh Ulhe, an Authorized Financial Planner & Insurance
              Advisor specializing in Child Funds Creation Planning and
              Retirement Planning. My mission is to help individuals and
              families achieve their financial goals, security, and peace of
              mind.
            </p>

            <blockquote className="border-l-4 border-accent pl-4 py-2 italic text-foreground/80">
              "Insurance isn't just a policy; it's a promise of protection for
              your loved ones."
            </blockquote>

            <ul className="space-y-3">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="default" size="lg" asChild>
              <Link to="/about" className="group">
                Learn More About Me
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
