import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, Mail } from "lucide-react";
import successAnimation from "../../public/success-animation.json";

const Success = () => {
  const navigate = useNavigate();

//   useEffect(() => {
//     // Auto redirect to home after 5 seconds
//     const timer = setTimeout(() => {
//       navigate("/");
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, [navigate]);

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center py-20">
        <div className="container-custom px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Lottie Animation */}
            <div className="w-64 h-64 mx-auto mb-8">
              <Lottie
                animationData={successAnimation}
                loop={false}
                autoplay={true}
              />
            </div>

            {/* Success Message */}
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Message Sent Successfully!
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Thank you for reaching out to us.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              We have received your message and will get back to you within 24 hours.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
            onClick={() => navigate("/")}
                size="lg"
                className="gap-2"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
              <Button
                onClick={() => navigate("/contact")}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <Mail className="w-4 h-4" />
                Send Another Message
              </Button>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Success;
