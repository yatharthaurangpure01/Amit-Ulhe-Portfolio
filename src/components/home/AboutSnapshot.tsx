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
        {/* Amit Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] md:aspect-[6/5] rounded-2xl overflow-hidden shadow-strong">
              <img
                src="/AmitUlhe.JPG"
                alt="Amit Suresh Ulhe - Financial Planner & Advisor"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-accent/10 rounded-full">
              <span className="text-sm font-medium text-accent">About Me</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Amit Suresh Ulhe
            </h2>
            <p className="text-xl font-medium text-accent -mt-4">
              Authorized Financial Planner
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Hello and Welcome! I'm an Authorized Financial Planner & Insurance
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
              {[
                "15+ years of financial expertise",
                "Personalized planning for every life stage",
                "100% transparent advisory process",
                "Quick claim support & assistance",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bhavna Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-6 lg:order-1 order-2">
            <div className="inline-block px-4 py-1 bg-accent/10 rounded-full">
              <span className="text-sm font-medium text-accent">About Me</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Bhavna Amit Ulhe
            </h2>
            <p className="text-xl font-medium text-accent -mt-4">
              Authorized Financial Planner & Life Mitra
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Hello and welcome! I’m a Financial Planner & Life Mitra specializing in
              Child Funds Creation Planning and Retirement Planning.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              With over 5 years of experience in the insurance and investment sectors,
              I have helped countless families build strong foundations through customized
              financial planning in life insurance, health coverage, child education,
              retirement planning, and wealth creation.
            </p>

            <ul className="space-y-3 mt-4">
              {[
                "5+ years of insurance & investment expertise",
                "Dedicated Life Mitra",
                "Focus on Child Funds & Retirement",
                "Mission to help 300 families",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Side */}
          <div className="relative lg:order-2 order-1">
            <div className="aspect-[4/5] md:aspect-[6/5] overflow-hidden max-md:shadow-strong">
              <img
                src="/BhavnaUlhe.jpeg"
                alt="Bhavna Amit Ulhe - Financial Planner & Advisor"
                className="md:w-[80%] h-full rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Button variant="default" size="lg" asChild>
            <Link to="/about" className="group">
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
