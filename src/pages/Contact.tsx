import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    insuranceInterest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    // Check if all fields are filled
    if (!formData.name.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your full name.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.phone.trim()) {
      toast({
        title: "Phone Required",
        description: "Please enter your phone number.",
        variant: "destructive",
      });
      return false;
    }

    // Validate phone number (Indian format: 10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit Indian phone number.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.insuranceInterest.trim()) {
      toast({
        title: "Insurance Interest Required",
        description: "Please select your insurance interest.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.message.trim()) {
      toast({
        title: "Message Required",
        description: "Please enter your message.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };
  console.log(import.meta.env.VITE_TO_EMAIL);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send Email via EmailJS
      const templateParams = {
        from_name: formData.name,
        from_phone: formData.phone,
        message: formData.message,
        // to_email: "info.mfais2030@gmail.com",
        to_email: import.meta.env.VITE_TO_EMAIL,
      };

      await emailjs.send(
        "service_kukfmzq", // Replace with your EmailJS service ID
        "template_4qgwuiy", // Replace with your EmailJS template ID
        templateParams,
        "y6EVE2YvB60AKE5F7", // Replace with your EmailJS public key
      );

      setFormData({
        name: "",
        phone: "",
        insuranceInterest: "",
        message: "",
      });

      // Redirect to success page
      navigate("/success");
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to submit lead. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "8208691655",
      href: "tel:8208691655",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info.mfais2030@gmail.com",
      href: "mailto:info.mfais2030@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nagpur, Maharashtra, India",
      href: null,
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon - Sat: 9:00 AM - 7:00 PM",
      href: null,
    },
  ];


  

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container-custom px-4">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-primary-foreground/10 rounded-full mb-4">
              <span className="text-sm text-primary-foreground">Contact</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Let's Start Planning Your Future
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Ready to take control of your finances? Get in touch for a free
              consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-6 md:p-8 mb-2 shadow-soft border border-border">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-foreground"
                    >
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="insuranceInterest"
                    className="text-sm font-medium text-foreground"
                  >
                    Insurance Interest *
                  </label>
                  <Select
                    value={formData.insuranceInterest}
                    onValueChange={(value) =>
                      setFormData({ ...formData, insuranceInterest: value })
                    }
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select insurance type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Life">Life Insurance</SelectItem>
                      <SelectItem value="Health">Health Insurance</SelectItem>
                      <SelectItem value="Auto">Motor Insurance</SelectItem>
                      <SelectItem value="Home">General Insurance</SelectItem>
                      <SelectItem value="Business">
                        Business Insurance
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your financial goals..."
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 mb-2">
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 bg-muted rounded-xl"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium text-foreground hover:text-accent transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-muted rounded-2xl overflow-hidden h-72">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3721.415390617808!2d79.1261389!3d21.1358611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA4JzA5LjEiTiA3OcKwMDcnMzQuMSJF!5e0!3m2!1sen!2sin!4v1766119243829!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
