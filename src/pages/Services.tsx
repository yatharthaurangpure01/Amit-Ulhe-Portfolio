import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  HeartPulse, 
  AlertCircle,
  Car,
  Building,
  GraduationCap,
  Landmark,
  TrendingUp,
  Wallet,
  Users,
  UserCheck,
  Scale,
  Globe,
  AlertTriangle,
  ArrowRight,
  Ship,
  HardHat,
  Clock,
  Lock,
  CheckCircle2,
  Target,
  FileText
} from "lucide-react";

// Services Data
const insuranceServices = [
  { icon: Shield, title: "Life Insurance", description: "Protect your family's financial future with comprehensive life cover." },
  { icon: HeartPulse, title: "Health & Mediclaim", description: "Safeguard yourself and loved ones against medical emergencies." },
  { icon: AlertCircle, title: "Critical Illness", description: "Financial protection against serious illnesses and conditions." },
  { icon: Car, title: "Motor Insurance", description: "Protect your vehicle against accidents, theft, and damages." },
  { icon: Building, title: "Property & Asset Insurance", description: "Coverage for your valuable properties and assets." },
];

const financialPlanning = [
  { icon: GraduationCap, title: "Child Education Planning", description: "Secure your child's dreams with long-term planning and growth." },
  { icon: Landmark, title: "Retirement Planning", description: "Build a stable and stress-free post-retirement life." },
  { icon: TrendingUp, title: "Wealth Creation", description: "Grow your wealth strategically through diversified investments." },
  { icon: Wallet, title: "Term & Savings Plans", description: "Flexible plans combining protection with savings goals." },
];

const investmentServices = [
  { icon: TrendingUp, title: "Mutual Funds", description: "Diversified investment solutions for wealth growth and independence." },
  { icon: Globe, title: "Market-Linked Investments", description: "Investment options linked to market performance for higher growth." },
  { icon: Wallet, title: "ULIPs", description: "Insurance + market-linked investment with multiple fund options." },
  { icon: Scale, title: "ELSS Tax Saving Funds", description: "Tax-saving mutual funds with equity-linked growth potential." },
];

const businessInsurance = [
  { icon: UserCheck, title: "Keyman Insurance", description: "Covers financial loss due to key person absence." },
  { icon: Users, title: "Group Insurance", description: "Employee life, health & accident coverage for teams." },
  { icon: Scale, title: "Professional Indemnity", description: "Protects professionals against legal liabilities and claims." },
  { icon: AlertTriangle, title: "Cyber Risk Insurance", description: "Protection against cyber threats, hacking & data loss." },
  { icon: Building, title: "Business Interruption", description: "Covers lost income during unforeseen business downtime." },
];

// Insurance Products Data
const products = [
  {
    icon: Shield,
    title: "Term Life + Growth Rider Plan",
    benefits: ["Pure life protection + optional investment growth", "High coverage, low premiums, tax benefits", "Digital onboarding & easy claims"],
    suitableFor: "Families seeking affordable life protection with growth potential",
  },
  {
    icon: GraduationCap,
    title: "Child Education & Future Planning",
    benefits: ["Secure education, marriage, and future", "Guaranteed maturity benefits", "Inflation-protected growth", "Flexible premium payments"],
    suitableFor: "Parents planning for their children's future milestones",
  },
  {
    icon: HeartPulse,
    title: "Health & Critical Illness Cover",
    benefits: ["Hospitalization & critical illness protection", "Cashless hospitalization & telemedicine", "Preventive health check-ups"],
    suitableFor: "Individuals and families seeking comprehensive health protection",
  },
  {
    icon: Landmark,
    title: "Retirement Income Plan",
    benefits: ["Guaranteed monthly income or pension", "Inflation-adjusted payouts", "Flexible withdrawals", "Legacy benefit for family"],
    suitableFor: "Professionals planning for a stress-free retirement",
  },
  {
    icon: TrendingUp,
    title: "ULIPs",
    benefits: ["Insurance + market-linked investment", "Multiple fund options & fund switching", "Transparent returns & charges"],
    suitableFor: "Investors seeking insurance with market-linked growth",
  },
  {
    icon: Users,
    title: "Group Insurance Package",
    benefits: ["Employee life, health & accident coverage", "Boosts employee satisfaction & retention", "Affordable & customizable plans"],
    suitableFor: "Businesses looking to provide employee benefits",
  },
  {
    icon: Building,
    title: "Business Protection Plan",
    benefits: ["Keyman insurance for key personnel", "Ensures business continuity", "Tax benefits for businesses"],
    suitableFor: "Business owners protecting against key person risk",
  },
  {
    icon: Ship,
    title: "Marine & Transit Insurance",
    benefits: ["Covers goods during domestic & international transport", "Protection against damage or loss", "Comprehensive cargo coverage"],
    suitableFor: "Import/export businesses and logistics companies",
  },
  {
    icon: HardHat,
    title: "Contractor's All-Risk Insurance",
    benefits: ["Protects ongoing construction projects", "Covers material damage & theft", "Protection against natural calamities"],
    suitableFor: "Construction companies and contractors",
  },
  {
    icon: Clock,
    title: "Business Interruption Insurance",
    benefits: ["Covers lost income during downtime", "Protects operating expenses", "Recovery support after disasters"],
    suitableFor: "Businesses needing protection against operational disruptions",
  },
  {
    icon: Lock,
    title: "Cyber Risk Insurance",
    benefits: ["Protection against cyberattacks", "Data breach coverage", "Business continuity support"],
    suitableFor: "Technology companies and digital businesses",
  },
];

// Mutual Funds Data
type RiskLevel = "Low" | "Low-Medium" | "Medium" | "High" | "Very High";

const funds = [
  {
    icon: TrendingUp,
    title: "Equity Mutual Funds",
    description: "Invest primarily in stocks for long-term growth. Ideal for wealth creation and beating inflation.",
    options: "Large-cap, Mid-cap, Small-cap, Sectoral funds",
    riskLevel: "High" as RiskLevel,
    horizon: "5+ years",
    taxBenefits: "LTCG up to ₹1 lakh/year tax-free. Dividends tax-free in hands of investors.",
  },
  {
    icon: Landmark,
    title: "Debt Mutual Funds",
    description: "Invest in fixed-income securities for stable returns with lower risk.",
    options: "Short-term, Long-term, Liquid, Dynamic Bond Funds",
    riskLevel: "Low-Medium" as RiskLevel,
    horizon: "1-3 years",
    taxBenefits: "Long-term gains (held >3 years) taxed at 20% with indexation.",
  },
  {
    icon: Scale,
    title: "Hybrid / Balanced Funds",
    description: "Combination of equity and debt, offering growth + stability for medium-risk investors.",
    options: "Aggressive hybrid, Conservative hybrid, Dynamic allocation",
    riskLevel: "Medium" as RiskLevel,
    horizon: "3-5 years",
    taxBenefits: "Equity-oriented hybrids enjoy LTCG exemption up to ₹1 lakh/year.",
  },
  {
    icon: Target,
    title: "ELSS (Tax Saving Funds)",
    description: "Tax-saving mutual funds under Section 80C with 3-year lock-in period.",
    options: "Various ELSS schemes from different AMCs",
    riskLevel: "High" as RiskLevel,
    horizon: "3+ years (lock-in)",
    taxBenefits: "Investment up to ₹1.5 lakh/year eligible for 80C deduction.",
  },
  {
    icon: Building,
    title: "Index Funds / ETFs",
    description: "Track market indices like Nifty or Sensex. Low-cost, transparent passive investment.",
    options: "Nifty 50, Sensex, Nifty Next 50, Sector ETFs",
    riskLevel: "Medium" as RiskLevel,
    horizon: "5+ years",
    taxBenefits: "Equity-oriented ETFs enjoy LTCG exemption up to ₹1 lakh/year.",
  },
  {
    icon: AlertTriangle,
    title: "Sectoral & Thematic Funds",
    description: "Focus on specific sectors like technology, banking, pharma, or renewable energy.",
    options: "IT, Banking, Pharma, Infrastructure, ESG funds",
    riskLevel: "Very High" as RiskLevel,
    horizon: "5+ years",
    taxBenefits: "Equity-oriented funds enjoy LTCG exemption up to ₹1 lakh/year.",
  },
  {
    icon: Globe,
    title: "International / Global Funds",
    description: "Invest in global markets outside India. Diversify geographically and hedge against domestic fluctuations.",
    options: "US Equity, Global Tech, Emerging Markets funds",
    riskLevel: "High" as RiskLevel,
    horizon: "5+ years",
    taxBenefits: "Taxed based on equity or debt classification.",
  },
  {
    icon: Clock,
    title: "Liquid & Ultra Short-Term Funds",
    description: "Short-term parking of funds with high liquidity and low risk. Ideal for emergency funds.",
    options: "Liquid funds, Overnight funds, Ultra short-term",
    riskLevel: "Low" as RiskLevel,
    horizon: "1 day - 3 months",
    taxBenefits: "Short-term gains taxed as per income slab.",
  },
];

// Tax Benefits Data
const personalInsuranceTax = [
  {
    icon: Shield,
    title: "Life Insurance Policies",
    includes: "Term Insurance, Endowment Plans, Whole Life Plans, ULIPs",
    benefits: [
      "Premium Paid: Deduction under Section 80C, up to ₹1.5 lakh per year",
      "Maturity / Death Benefits: Tax-free under Section 10(10D), if premiums ≤ 10% of sum assured",
      "ULIP Benefits: Returns and maturity proceeds tax-free if policy meets 10(10D) criteria",
    ],
  },
  {
    icon: HeartPulse,
    title: "Health Insurance / Mediclaim",
    includes: "Individual, Family Floater, Senior Citizen Policies",
    benefits: [
      "Premium Paid: Deduction under Section 80D up to ₹25,000/year (self, spouse, children)",
      "Senior Citizens: Up to ₹50,000 per year",
      "Preventive Health Checkups: Up to ₹5,000 included in 80D limit",
      "Claim Payout: Tax-free in case of hospitalization",
    ],
  },
  {
    icon: HeartPulse,
    title: "Critical Illness Insurance",
    includes: "Critical illness cover attached to life or health insurance",
    benefits: [
      "Premium Paid: Eligible under Section 80D (within health insurance limit)",
      "Payout: Tax-free under Section 10(10D) if part of life insurance policy",
    ],
  },
  {
    icon: Shield,
    title: "Child Education & Future Planning",
    includes: "Child plans like Endowment, Money-back, ULIPs",
    benefits: [
      "Premium Paid: Deduction under Section 80C, up to ₹1.5 lakh/year",
      "Maturity / Death Benefits: Tax-free under Section 10(10D)",
    ],
  },
  {
    icon: Landmark,
    title: "Retirement / Pension Plans",
    includes: "Annuity Plans, Pension Plans, NPS-linked insurance products",
    benefits: [
      "Traditional Plans: Deduction under Section 80C, up to ₹1.5 lakh/year",
      "NPS Contributions: Additional deduction under Section 80CCD(1B) up to ₹50,000",
      "Payout / Pension: Taxed partially as per income slab, depending on plan type",
    ],
  },
  {
    icon: Users,
    title: "Group Insurance",
    includes: "Employee Group Term Life, Group Health, Group Accident Policies",
    benefits: [
      "Premium by Employer: Not taxable for employee (within specified limits)",
      "Premium by Employee: Deductible under 80C/80D, depending on policy type",
      "Claim Payout: Generally tax-free under Section 10(10D)",
    ],
  },
];

const businessInsuranceTax = [
  {
    icon: Lock,
    title: "Keyman / Key Person Insurance",
    purpose: "Protects business against financial loss caused by death or disability of key personnel.",
    taxBenefits: "Premium paid is allowed as business expense (deductible). Claim received is generally tax-free under Section 10(10D).",
  },
  {
    icon: Building,
    title: "Business Property & Asset Insurance",
    purpose: "Covers office, factory, warehouse, machinery, inventory against fire, theft, disasters.",
    taxBenefits: "Premium paid is deductible as business expense. Claim payout is generally non-taxable as it compensates actual loss.",
  },
  {
    icon: Users,
    title: "Employee Group Insurance",
    purpose: "Provides life, health, or accident coverage for employees.",
    taxBenefits: "Premium paid by employer is deductible as business expense. Benefit to employees is tax-free within limits.",
  },
  {
    icon: Scale,
    title: "Professional Liability Insurance",
    purpose: "Covers legal liabilities, negligence claims for professionals (doctors, lawyers, consultants).",
    taxBenefits: "Premium paid is deductible as business expense. Claim settlement is generally not taxed.",
  },
  {
    icon: Ship,
    title: "Marine & Transit Insurance",
    purpose: "Covers goods in transit via road, rail, air, or sea against damage or loss.",
    taxBenefits: "Premium paid is deductible as business expense. Compensation for lost/damaged goods is not taxed.",
  },
  {
    icon: HardHat,
    title: "Contractor's All-Risk Insurance",
    purpose: "Protects construction projects, equipment, and third-party liabilities.",
    taxBenefits: "Premium paid is deductible under business expenses. Claim proceeds are not taxable.",
  },
  {
    icon: Clock,
    title: "Business Interruption Insurance",
    purpose: "Covers lost profits and operating expenses during unforeseen events.",
    taxBenefits: "Premium paid is deductible as business expense. Claim payout treatment depends on accounting method.",
  },
  {
    icon: Lock,
    title: "Cyber Risk Insurance",
    purpose: "Protects against cyberattacks, hacking, and data breaches.",
    taxBenefits: "Premium paid is deductible as business expense. Claim payouts to cover losses are not taxed.",
  },
];

// Helper Components
interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => (
  <div className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
      <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
    </div>
    <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground mb-4">{description}</p>
    <Link 
      to="/contact" 
      className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
    >
      Get Details
      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
);

const getRiskColor = (risk: RiskLevel) => {
  switch (risk) {
    case "Low": return "bg-green-100 text-green-700";
    case "Low-Medium": return "bg-green-100 text-green-700";
    case "Medium": return "bg-yellow-100 text-yellow-700";
    case "High": return "bg-orange-100 text-orange-700";
    case "Very High": return "bg-red-100 text-red-700";
    default: return "bg-muted text-muted-foreground";
  }
};

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container-custom px-4">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-primary-foreground/10 rounded-full mb-4">
              <span className="text-sm text-primary-foreground">Complete Financial Solutions</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Comprehensive Financial Services & Products
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Tailor-made insurance and investment solutions designed to match your life goals and financial aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg">Comprehensive coverage to protect what matters most</p>
          </div>

          {/* Insurance Services */}
          <div className="mb-16">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Insurance Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {insuranceServices.map((service, idx) => (
                <ServiceCard key={idx} {...service} />
              ))}
            </div>
          </div>

          {/* Financial Planning */}
          <div className="mb-16">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Landmark className="w-6 h-6 text-primary" />
              Financial Planning
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {financialPlanning.map((service, idx) => (
                <ServiceCard key={idx} {...service} />
              ))}
            </div>
          </div>

          {/* Investment Services */}
          <div className="mb-16">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Investment Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {investmentServices.map((service, idx) => (
                <ServiceCard key={idx} {...service} />
              ))}
            </div>
          </div>

          {/* Business Insurance */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Building className="w-6 h-6 text-primary" />
              Business Insurance
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {businessInsurance.map((service, idx) => (
                <ServiceCard key={idx} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Products Section */}
      <section id="products" className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Insurance Products</h2>
            <p className="text-muted-foreground text-lg">Comprehensive insurance solutions for every need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <div 
                key={idx} 
                className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <product.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    {product.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    {product.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-3">
                      <span className="font-medium text-foreground">Suitable for:</span> {product.suitableFor}
                    </p>
                    <Button variant="outline" size="sm" asChild className="w-full group">
                      <Link to="/contact">
                        Request Quote
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mutual Funds Section */}
      <section id="mutual-funds" className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Mutual Fund Products</h2>
            <p className="text-muted-foreground text-lg">Grow your wealth systematically while diversifying risk</p>
          </div>

          {/* MF Introduction */}
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft border border-border mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Wallet className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Why Invest in Mutual Funds?
                </h3>
                <p className="text-muted-foreground">
                  "Mutual funds are not just investments; they are tools to grow wealth systematically while optimizing taxes." I provide guidance on a variety of mutual fund products to suit your goals, risk appetite, and investment horizon.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {funds.map((fund, idx) => (
              <div 
                key={idx} 
                className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border border-border"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <fund.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRiskColor(fund.riskLevel)}`}>
                      {fund.riskLevel} Risk
                    </span>
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {fund.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {fund.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-medium text-foreground w-20 shrink-0">Options:</span>
                      <span className="text-xs text-muted-foreground">{fund.options}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-medium text-foreground w-20 shrink-0">Horizon:</span>
                      <span className="text-xs text-muted-foreground">{fund.horizon}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">Tax Benefits:</span> {fund.taxBenefits}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Benefits Section */}
      <section id="tax-benefits" className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Tax Benefits & Insurance Knowledge</h2>
            <p className="text-muted-foreground text-lg">Understanding the tax advantages of insurance products</p>
          </div>

          {/* Key Points */}
          <div className="bg-accent/10 rounded-xl p-6 md:p-8 border border-accent/20 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Key Points under New Tax Regime
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      <strong>Section 80C:</strong> Life insurance, child plans, retirement → ₹1.5 lakh/year
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      <strong>Section 80D:</strong> Health & critical illness → ₹25,000–₹50,000/year
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      <strong>Section 10(10D):</strong> Death & maturity benefits → generally tax-free
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      <strong>NPS Extra:</strong> Section 80CCD(1B) → ₹50,000 additional deduction
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Insurance Tax Benefits */}
          <div className="mb-12">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Personal Insurance Tax Benefits</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalInsuranceTax.map((item, idx) => (
                <div key={idx} className="bg-card rounded-xl p-6 shadow-soft border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-4">
                    <span className="font-medium">Includes:</span> {item.includes}
                  </p>
                  <div className="space-y-2">
                    {item.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-accent shrink-0 mt-1" />
                        <span className="text-xs text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Insurance Tax Benefits */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Business Insurance Tax Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {businessInsuranceTax.map((item, idx) => (
                <div key={idx} className="bg-card rounded-xl p-6 shadow-soft border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">{item.purpose}</p>
                      <div className="flex items-start gap-2 bg-accent/5 rounded-lg p-3">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground">{item.taxBenefits}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero">
        <div className="container-custom text-center">
          <blockquote className="text-2xl md:text-3xl font-display italic text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            "Insurance products help you secure your future while providing valuable tax benefits."
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="group">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:8208691655">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
