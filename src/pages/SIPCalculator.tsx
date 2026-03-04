import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Calculator, TrendingUp, AlertCircle } from "lucide-react";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<string>("5000");
  const [returnRate, setReturnRate] = useState<string>("12");
  const [timePeriod, setTimePeriod] = useState<string>("20");
  const [delayYears, setDelayYears] = useState<string>("5");
  const [result, setResult] = useState<{
    withoutDelay: number;
    withDelay: number;
    costOfDelay: number;
  } | null>(null);

  const calculateSIP = (monthly: number, rate: number, years: number): number => {
    const monthlyRate = rate / 12 / 100;
    const months = years * 12;
    
    if (monthlyRate === 0) {
      return monthly * months;
    }
    
    const futureValue = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    return futureValue;
  };

  const handleCalculate = () => {
    const monthly = parseFloat(monthlyInvestment);
    const rate = parseFloat(returnRate);
    const years = parseFloat(timePeriod);
    const delay = parseFloat(delayYears);

    if (isNaN(monthly) || isNaN(rate) || isNaN(years) || isNaN(delay)) {
      return;
    }

    const totalYears = years;
    const delayedYears = years - delay;

    const withoutDelay = calculateSIP(monthly, rate, totalYears);
    const withDelay = calculateSIP(monthly, rate, delayedYears);
    const costOfDelay = withoutDelay - withDelay;

    setResult({
      withoutDelay,
      withDelay,
      costOfDelay,
    });
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container-custom px-4">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-primary-foreground/10 rounded-full mb-4">
              <span className="text-sm text-primary-foreground">Financial Tools</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              SIP Delay Calculator
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Discover the true cost of delaying your investments. Start investing today to maximize your wealth.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Input Card */}
            <Card className="p-6 md:p-8 shadow-soft border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  Investment Details
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Monthly Investment Amount (₹)
                  </label>
                  <Input
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(e.target.value)}
                    placeholder="5000"
                    min="500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Expected Annual Return (%)
                  </label>
                  <Input
                    type="number"
                    value={returnRate}
                    onChange={(e) => setReturnRate(e.target.value)}
                    placeholder="12"
                    min="1"
                    max="30"
                    step="0.1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Investment Period (Years)
                  </label>
                  <Input
                    type="number"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(e.target.value)}
                    placeholder="20"
                    min="1"
                    max="50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Delay in Starting (Years)
                  </label>
                  <Input
                    type="number"
                    value={delayYears}
                    onChange={(e) => setDelayYears(e.target.value)}
                    placeholder="5"
                    min="1"
                    max="20"
                  />
                </div>

                <Button
                  onClick={handleCalculate}
                  size="lg"
                  className="w-full"
                >
                  Calculate Impact
                </Button>
              </div>
            </Card>

            {/* Results Card */}
            <Card className="p-6 md:p-8 shadow-soft border border-border bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  Calculation Results
                </h2>
              </div>

              {result ? (
                <div className="space-y-6">
                  <div className="bg-card rounded-xl p-5 border border-border">
                    <p className="text-sm text-muted-foreground mb-2">
                      If you start today
                    </p>
                    <p className="text-3xl font-bold text-green-600">
                      {formatCurrency(result.withoutDelay)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      After {timePeriod} years
                    </p>
                  </div>

                  <div className="bg-card rounded-xl p-5 border border-border">
                    <p className="text-sm text-muted-foreground mb-2">
                      If you delay by {delayYears} years
                    </p>
                    <p className="text-3xl font-bold text-orange-600">
                      {formatCurrency(result.withDelay)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      After {parseFloat(timePeriod) - parseFloat(delayYears)} years
                    </p>
                  </div>

                  <div className="bg-destructive/10 rounded-xl p-5 border-2 border-destructive/30">
                    <div className="flex items-start gap-3 mb-2">
                      <AlertCircle className="w-5 h-5 text-destructive mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-destructive mb-1">
                          Cost of Delay
                        </p>
                        <p className="text-3xl font-bold text-destructive">
                          {formatCurrency(result.costOfDelay)}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      This is the wealth you could lose by delaying your investment decision.
                    </p>
                  </div>

                  <div className="bg-muted rounded-lg p-4 mt-6">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Key Insights
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Early investments benefit from compound interest</li>
                      <li>• Time in the market beats timing the market</li>
                      <li>• Every year of delay reduces your final corpus</li>
                      <li>• Start small, but start now!</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                  <Calculator className="w-16 h-16 text-muted-foreground/30 mb-4" />
                  <p className="text-muted-foreground">
                    Enter your investment details and click "Calculate Impact" to see the results.
                  </p>
                </div>
              )}
            </Card>
          </div>

          {/* Info Section */}
          <div className="max-w-4xl mx-auto mt-12">
            <Card className="p-6 md:p-8 bg-muted/50">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Why Start Early?
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Power of Compounding</h4>
                  <p>
                    Albert Einstein called compound interest the "eighth wonder of the world." 
                    The longer your money stays invested, the more it grows exponentially.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Time is Your Biggest Asset</h4>
                  <p>
                    When it comes to investing, time is more valuable than the amount. Starting 
                    early, even with smaller amounts, beats starting late with larger investments.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Reduce Risk with Time</h4>
                  <p>
                    Longer investment periods help smooth out market volatility and reduce overall 
                    risk, giving you better chances of achieving your financial goals.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Build Wealth Systematically</h4>
                  <p>
                    SIP helps you invest regularly without trying to time the market. It's a 
                    disciplined approach that builds significant wealth over time.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SIPCalculator;
