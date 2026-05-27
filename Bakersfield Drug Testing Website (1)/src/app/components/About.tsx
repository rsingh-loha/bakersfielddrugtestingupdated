import { Award, Target, Heart, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certified & Accredited",
    description: "Fully certified testing facility meeting all industry standards"
  },
  {
    icon: Target,
    title: "Accurate Results",
    description: "State-of-the-art testing methods ensure precision and reliability"
  },
  {
    icon: Heart,
    title: "Professional Care",
    description: "Friendly, confidential service with respect for your privacy"
  },
  {
    icon: TrendingUp,
    title: "Fast Turnaround",
    description: "Quick processing and reporting to meet your deadlines"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-100 to-yellow-100 rounded-2xl shadow-xl aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-blue-900 mb-2">Professional Testing Facility</h3>
                <p className="text-gray-600">State-of-the-art equipment and certified procedures</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-blue-900 mb-6">
              Trusted Drug Testing in Bakersfield
            </h2>
            
            <p className="text-gray-600 mb-6">
              As a division of West Coast Drug Testing, Inc., Bakersfield Drug Testing has been serving the Central Valley community with professional, reliable drug testing services.
            </p>

            <p className="text-gray-600 mb-6">
              All certified in The Department of Transportation's (DOT) rule, 49 CFR Part 40, which describes required procedures for conducting workplace drug and alcohol testing for the federally regulated transportation industry.
            </p>

            <p className="text-gray-600 mb-8">
              Our motto, "Urine our Best Interest!", reflects our dedication to putting our clients first. Whether you're an employer needing pre-employment screening, an individual requiring testing for personal reasons, or an organization with ongoing testing needs, we're here to help.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}