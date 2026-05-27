import { MapPin, Phone, Mail, Printer, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">
            Call us to get in touch
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-yellow-200">
            <h3 className="text-gray-900 mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">2204 Q Street, Suite A</p>
                  <p className="text-gray-600">Bakersfield, CA 93301</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Office Phone</h4>
                  <a href="tel:661-321-0439" className="text-blue-600 hover:underline">
                    (661) 321-0439
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Printer className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Fax</h4>
                  <p className="text-gray-600">(661) 321-9068</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Email</h4>
                  <a
                    href="mailto:BDT@bakersfielddrugtesting.com"
                    className="text-blue-600 hover:underline break-all"
                  >
                    BDT@bakersfielddrugtesting.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600 font-semibold text-yellow-600">On Call 24/7</p>
                  <p className="text-gray-600 mt-2">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-200">
            <h3 className="text-gray-900 mb-6">Our Location</h3>
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.4947835627855!2d-119.02083!3d35.37528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea6bc0b2d0c1d7%3A0x1234567890abcdef!2s2204%20Q%20St%20Suite%20A%2C%20Bakersfield%2C%20CA%2093301!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bakersfield Drug Testing Location"
              ></iframe>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-gray-700">
                Conveniently located in downtown Bakersfield with easy access and parking available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}