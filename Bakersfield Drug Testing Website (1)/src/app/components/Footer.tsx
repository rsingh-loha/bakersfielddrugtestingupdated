import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white py-12 border-t-4 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white mb-4">Bakersfield Drug Testing</h3>
            <p className="text-blue-200 text-sm mb-2">A division of West Coast Drug Testing, Inc</p>
            <p className="text-yellow-300 text-sm italic">Urine our Best Interest!</p>
          </div>

          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#services" className="block text-blue-200 hover:text-yellow-300 transition-colors">
                Services
              </a>
              <a href="#about" className="block text-blue-200 hover:text-yellow-300 transition-colors">
                About Us
              </a>
              <a href="#contact" className="block text-blue-200 hover:text-yellow-300 transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                <p className="text-blue-200 text-sm">
                  2204 Q Street, Suite A<br />
                  Bakersfield, CA 93301
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                <a href="tel:661-321-0439" className="text-blue-200 hover:text-yellow-300 transition-colors text-sm">
                  (661) 321-0439
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                <a
                  href="mailto:BDT@bakersfielddrugtesting.com"
                  className="text-blue-200 hover:text-yellow-300 transition-colors text-sm break-all"
                >
                  BDT@bakersfielddrugtesting.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} Bakersfield Drug Testing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}