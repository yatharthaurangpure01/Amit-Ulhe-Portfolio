import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relati ve z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Secure Your Financial Future?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
            Let's discuss your financial goals and create a personalized plan
            that works for you. Book a free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="group">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:8208691655">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 8208691655
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/60">
            No obligations • 100% Free • Personalized advice
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
