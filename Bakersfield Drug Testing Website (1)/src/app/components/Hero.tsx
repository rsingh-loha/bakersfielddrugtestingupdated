import { CheckCircle, Clock, Shield } from "lucide-react";
import buildingImage from "../imports/975134F8-895B-4286-8665-6FC0ACCE4FB0.png";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-yellow-400 via-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Medical pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-blue-900/40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full mb-6">
              <p className="text-sm">Urine our Best Interest!</p>
            </div>
            
            <p className="text-xl text-blue-100 mb-8">
              Fast, accurate, and confidential drug testing services for employers, individuals, and organizations.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span>Certified Testing</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span>Fast Results</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span>Confidential</span>
              </div>
            </div>

            {/* On Call 24/7 Banner */}
            <div className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg mb-6 text-center">
              <p className="text-2xl font-bold">📞 On Call 24/7</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:661-321-0439"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-center font-semibold text-lg"
              >
                Call Us Now
              </a>
            </div>

            <p className="text-blue-100 mt-4 text-center sm:text-left">
              Speak with a live agent to answer all your questions
            </p>
          </div>

          <div className="hidden lg:block">
            <img
              src={buildingImage}
              alt="Bakersfield Drug Testing Location"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}