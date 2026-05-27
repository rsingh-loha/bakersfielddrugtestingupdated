import { useState } from "react";
import { MessageCircle, X, Calendar, MessageSquare, Phone, Mail } from "lucide-react";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBookAction = () => {
    const appointmentSection = document.getElementById("appointment");
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleTextAction = () => {
    window.location.href = "sms:661-321-0439";
  };

  const handleCallAction = () => {
    window.location.href = "tel:661-321-0439";
  };

  const handleEmailAction = () => {
    window.location.href = "mailto:BDT@Bakersfielddrugtesting.com";
  };

  const quickActions = [
    {
      icon: Calendar,
      label: "Book",
      action: handleBookAction
    },
    {
      icon: MessageSquare,
      label: "Text",
      action: handleTextAction
    },
    {
      icon: Phone,
      label: "Call",
      action: handleCallAction
    },
    {
      icon: Mail,
      label: "Email",
      action: handleEmailAction
    }
  ];

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all hover:scale-110 z-50"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[90vw] sm:w-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col border-2 border-blue-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div>
              <h3 className="text-white">Bakersfield Drug Testing</h3>
              <p className="text-sm text-blue-100">We're here to help!</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1 rounded transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Contact Information Message */}
          <div className="p-6 bg-gray-50">
            <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-blue-200">
              <h4 className="text-gray-900 font-semibold mb-3 text-lg">Get in Touch</h4>
              <p className="text-gray-700 mb-4">
                For questions or to schedule an appointment, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a 
                    href="mailto:BDT@Bakersfielddrugtesting.com" 
                    className="text-blue-600 hover:underline font-medium"
                  >
                    BDT@Bakersfielddrugtesting.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <a 
                    href="tel:661-321-0439" 
                    className="text-blue-600 hover:underline font-medium"
                  >
                    (661) 321-0439
                  </a>
                </div>
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                Someone will respond back to you promptly.
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-4 rounded-b-2xl grid grid-cols-4 gap-2">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={action.action}
                  className="flex flex-col items-center gap-1 text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}