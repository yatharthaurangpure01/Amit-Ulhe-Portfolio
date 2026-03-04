import { 
  UserCheck, 
  Eye, 
  Smartphone, 
  Zap, 
  Handshake,
  FileCheck
} from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Personalized Guidance",
    description: "Customized financial plans tailored to your unique goals and life stage.",
  },
  {
    icon: Eye,
    title: "100% Transparency",
    description: "Clear communication with no hidden charges or surprises.",
  },
  {
    icon: Smartphone,
    title: "Digital & Paperless",
    description: "Modern, hassle-free onboarding with complete digital documentation.",
  },
  {
    icon: Zap,
    title: "Quick Claim Support",
    description: "Dedicated assistance for fast and smooth claim settlements.",
  },
  {
    icon: Handshake,
    title: "Long-term Relationship",
    description: "Building trust through consistent support over the years.",
  },
  {
    icon: FileCheck,
    title: "Compliance-Driven",
    description: "Ethical advisory following all regulatory guidelines.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-accent/10 rounded-full">
              <span className="text-sm font-medium text-accent">Why Choose Me</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Your Financial Success is My Priority
            </h2>
            <p className="text-muted-foreground text-lg">
              With a client-first philosophy and years of experience, I'm committed to helping you navigate your financial journey with confidence and clarity.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {reasons.slice(0, 4).map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <reason.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{reason.title}</h4>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-primary rounded-2xl p-8 md:p-10 text-primary-foreground shadow-strong">
            <h3 className="font-display text-2xl font-semibold mb-8">
              Trust Built Over Years
            </h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-primary-foreground/10 rounded-xl">
                <p className="font-display text-4xl font-bold text-accent mb-2">15+</p>
                <p className="text-sm text-primary-foreground/80">Years Experience</p>
              </div>
              <div className="text-center p-6 bg-primary-foreground/10 rounded-xl">
                <p className="font-display text-4xl font-bold text-accent mb-2">500+</p>
                <p className="text-sm text-primary-foreground/80">Happy Clients</p>
              </div>
              <div className="text-center p-6 bg-primary-foreground/10 rounded-xl">
                <p className="font-display text-4xl font-bold text-accent mb-2">50Cr+</p>
                <p className="text-sm text-primary-foreground/80">Claims Settled</p>
              </div>
              <div className="text-center p-6 bg-primary-foreground/10 rounded-xl">
                <p className="font-display text-4xl font-bold text-accent mb-2">98%</p>
                <p className="text-sm text-primary-foreground/80">Client Retention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
