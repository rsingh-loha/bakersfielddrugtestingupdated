import { Briefcase, Users, FileCheck, Stethoscope, Car, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Pre-Employment Testing",
    description: "Ensure a drug free workplace from day one"
  },
  {
    icon: Users,
    title: "Random Testing",
    description: "Ongoing, random testing programs to maintain safety standards and regulatory compliance."
  },
  {
    icon: FileCheck,
    title: "Federal & DOT Testing",
    description: "Authorized collection for FMCSA, FAA, FTA, and other federal agencies. Fully compliant with 49CFRpart40"
  },
  {
    icon: Stethoscope,
    title: "Post-Accident Testing",
    description: "Immediate response testing, following workplace incidents. Available 24/7 to meet mandatory reporting windows."
  },
  {
    icon: Car,
    title: "Reasonable Suspicion",
    description: "Professional testing when drug or alcohol use is suspected, protecting your liability and staff safety."
  },
  {
    icon: GraduationCap,
    title: "Individual Testing",
    description: "Private testing for court requirements, probation or personal peace of mind."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-yellow-50 via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 mb-4">Comprehensive Testing & Compliance Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast, accurate results for employers, federal contractors, and individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-yellow-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
