import screenshotImage from "../imports/Screenshot_2026-04-01_at_10.29.54 AM.png";
import buildingImage from "../imports/975134F8-895B-4286-8665-6FC0ACCE4FB0.png";

export function FacilityShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 mb-4">
            Our Secure & Certified Facility
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            2204 Q Street, Bakersfield CA 93301
          </p>
        </div>

        <div className="space-y-8">
          {/* Screenshot - Full Width */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <img
              src={screenshotImage}
              alt="Bakersfield Drug Testing Facility Front Exterior"
              className="w-full h-auto"
            />
          </div>

          {/* Building Image - Full Width */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <img
              src={buildingImage}
              alt="Here's a look inside our drug testing office. Clean and professional environment. Fast, efficient service. Friendly, experienced staff."
              className="w-full h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
}