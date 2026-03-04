import { Link } from "react-router-dom";
import { Calculator, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CalculatorSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-strong border-2 border-primary/10">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Content */}
              <div className="p-8 md:p-10 bg-gradient-to-br from-primary/10 to-accent/10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full mb-4 w-fit">
                  <Calculator className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Free Tool</span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  SIP Delay Calculator
                </h2>
                
                <p className="text-muted-foreground mb-6 text-lg">
                  Discover how delaying your investment can cost you lakhs. Calculate the real impact of postponing your financial goals.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm text-foreground">See the power of compound interest</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm text-foreground">Calculate your wealth loss from delays</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm text-foreground">Make informed investment decisions</p>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full md:w-auto group">
                  <Link to="/sip-calculator">
                    Try Calculator Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              {/* Right Side - Visual */}
              <div className="relative bg-gradient-to-br from-primary to-accent p-8 md:p-10 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 rounded-3xl blur-xl"></div>
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                    <div className="text-center mb-4">
                      <Calculator className="w-16 h-16 mx-auto text-primary mb-3" />
                      <p className="text-sm font-medium text-muted-foreground">Calculate in seconds</p>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg">
                        <p className="text-xs text-green-700 mb-1">Start Today</p>
                        <p className="text-lg font-bold text-green-800">₹ 1,50,00,000</p>
                      </div>
                      <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-3 rounded-lg">
                        <p className="text-xs text-orange-700 mb-1">Delay 5 Years</p>
                        <p className="text-lg font-bold text-orange-800">₹ 95,00,000</p>
                      </div>
                      <div className="bg-gradient-to-r from-red-50 to-red-100 p-3 rounded-lg border-2 border-red-200">
                        <p className="text-xs text-red-700 mb-1 font-semibold">Cost of Delay</p>
                        <p className="text-xl font-bold text-red-800">₹ 55,00,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
