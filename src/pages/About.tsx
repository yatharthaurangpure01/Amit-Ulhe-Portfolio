import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Heart, 
  BookOpen, 
  MessageCircle, 
  Handshake,
  FileCheck,
  ArrowRight 
} from "lucide-react";

const About = () => {
  const values = [
    { icon: BookOpen, title: "Customer Education First", description: "I believe in educating clients before selling any product." },
    { icon: MessageCircle, title: "Transparent Communication", description: "Clear and honest discussions about all options and outcomes." },
    { icon: Handshake, title: "Long-term Trust", description: "Building relationships that last for decades, not transactions." },
    { icon: FileCheck, title: "Paperless Onboarding", description: "Modern, hassle-free digital documentation process." },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container-custom px-4">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-primary-foreground/10 rounded-full mb-4">
              <span className="text-sm text-primary-foreground">About Me</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Your Partner in Financial Success
            </h1>
            <p className="text-lg text-primary-foreground/80">
              With over 15 years of experience, I help families and businesses achieve financial security and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-[6/5]  rounded-2xl overflow-hidden shadow-strong">
                <img
                  src="/AmitUlhe.JPG"
                  alt="Amit Suresh Ulhe - Authorized Financial Planner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Hello and Welcome!
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm Amit Suresh Ulhe, an Authorized Financial Planner & Insurance Advisor specializing in Child Funds Creation Planning and Retirement Planning. My mission is to help individuals and families achieve their financial goals, security, and peace of mind.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With over 15 years of experience in financial, insurance, and investment sectors, I have helped countless families build strong foundations through customized planning in life insurance, health coverage, child education, retirement planning, and wealth creation.
              </p>
              <blockquote className="border-l-4 border-accent pl-6 py-4 bg-muted rounded-r-lg italic text-foreground">
                "Insurance isn't just a policy; it's a promise of protection for your loved ones."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                "To create a financially secure and confident society, where every individual and family is protected, independent, and empowered to achieve their life goals through proper financial planning."
              </p>
              <p className="text-muted-foreground mt-4">
                We aim for a future where financial literacy and protection reach every home — turning uncertainty into confidence and dreams into reality.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground shadow-strong">
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Mission</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                To empower every individual and family with the right financial knowledge and planning so they can:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Protect their income and future
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Fulfill their dreams confidently
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Live a financially independent life
                </li>
              </ul>
              <p className="mt-6 text-accent font-semibold">"Right Planning = Secure Future."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach & Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-4">
              <span className="text-sm font-medium text-accent">My Approach</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Values That Drive My Practice
            </h2>
            <p className="text-muted-foreground text-lg">
              "Smart businesses insure before they invest." — This philosophy guides every recommendation I make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Let's Start Your Financial Journey
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Ready to take the first step towards financial security? I'm here to help you every step of the way.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" className="group">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
