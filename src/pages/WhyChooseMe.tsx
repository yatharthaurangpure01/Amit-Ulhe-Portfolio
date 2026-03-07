import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  UserCheck, 
  Eye, 
  Smartphone, 
  Zap,
  Handshake,
  FileCheck,
  Award,
  Shield,
  HeartHandshake,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Personalized Financial Guidance",
    description: "Every client is unique. We take time to understand your specific situation, goals, and concerns before recommending any solution. No cookie-cutter approaches here.",
  },
  {
    icon: Eye,
    title: "100% Transparency",
    description: "Complete clarity on charges, terms, and conditions. We believe in building trust through honest communication, even when it means recommending a less expensive option.",
  },
  {
    icon: Smartphone,
    title: "Digital & Paperless Process",
    description: "Modern, hassle-free onboarding with complete digital documentation. No endless paperwork or multiple office visits required.",
  },
  {
    icon: Zap,
    title: "Quick Claim Support",
    description: "When you need to file a claim, we're there to guide you through every step. Fast, reliable support when it matters most.",
  },
  {
    icon: Handshake,
    title: "Long-term Relationship",
    description: "We don't disappear after the sale. Regular reviews, policy updates, and ongoing support ensure your financial plan evolves with your life.",
  },
  {
    icon: FileCheck,
    title: "Ethical & Compliance-Driven",
    description: "All recommendations follow regulatory guidelines. Your interests always come first, backed by compliant and ethical advisory practices.",
  },
];

const stats = [
  { number: "15+", label: "Years of Experience" },
  { number: "500+", label: "Happy Families" },
  { number: "₹50Cr+", label: "Claims Settled" },
  { number: "98%", label: "Client Retention" },
];

const WhyChooseMe = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container-custom px-4">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-primary-foreground/10 rounded-full mb-4">
              <span className="text-sm text-primary-foreground">Why Choose Us</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Your Success is Our Priority
            </h1>
            <p className="text-lg text-primary-foreground/80">
              With a client-first philosophy and years of experience, we're committed to helping you navigate your financial journey with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-muted-foreground text-lg">
              We bring a unique combination of expertise, ethics, and empathy to every client relationship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, idx) => (
              <div 
                key={idx} 
                className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <reason.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-6">
                  Built on Trust & Excellence
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Certified Financial Planner</h4>
                      <p className="text-sm text-primary-foreground/70">
                        Authorized advisor with recognized certifications
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Regulatory Compliance</h4>
                      <p className="text-sm text-primary-foreground/70">
                        All practices follow IRDAI and SEBI guidelines
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                      <HeartHandshake className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Client-First Approach</h4>
                      <p className="text-sm text-primary-foreground/70">
                        Your interests always come before sales targets
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-foreground/10 rounded-xl p-6">
                <h4 className="font-display text-xl font-semibold mb-4">
                  Our Promise to You
                </h4>
                <ul className="space-y-3">
                  {[
                    "Honest recommendations tailored to your needs",
                    "Complete transparency in all transactions",
                    "Regular policy reviews and updates",
                    "24/7 support during claim emergencies",
                    "Continuous education on financial matters",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-sm text-primary-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's start with a free consultation. No obligations, just honest advice about your financial goals.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" className="group">
              Book Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WhyChooseMe;
