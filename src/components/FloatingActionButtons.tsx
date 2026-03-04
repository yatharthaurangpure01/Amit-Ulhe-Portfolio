import { Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const FloatingActionButtons = () => {
  const phoneNumber = "8208691655";
  const whatsappMessage = "Hello i want consultancy!";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/91${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsApp}
        size="lg"
        className="h-14 w-8 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>

      {/* Call Button */}
      <Button
        onClick={handleCall}
        size="lg"
        className="h-14 w-8 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="h-8 w-8" />
      </Button>
    </div>
  );
};

export default FloatingActionButtons;
