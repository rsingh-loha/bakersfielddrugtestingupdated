import { RefreshCw, Link, Database } from "lucide-react";

export function ThirdPartyAdmin() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-blue-900 mb-4">
            West Coast Drug Testing <span className="text-yellow-600">dba</span> Bakersfield Drug Testing
          </h2>
          <h3 className="text-gray-700 mb-6">
            Third Party Administration (TPA)
          </h3>
        </div>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            We act as your dedicated Third Party Administration (TPA), handling everything from random selections to secure results reporting.
          </p>
        </div>

        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <RefreshCw className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-gray-900 mb-3">Random Pool Management</h4>
            <p className="text-gray-600">
              We manage your DOT or NON-DOT random pools, ensuring you hit your mandated testing percent every year.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <Link className="w-6 h-6 text-yellow-600" />
            </div>
            <h4 className="text-gray-900 mb-3">End to End Coordination</h4>
            <p className="text-gray-600">
              From scheduling the collections to coordinating with the lab and MRO, we handle every logistic step.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-gray-900 mb-3">Secure Reporting & Records</h4>
            <p className="text-gray-600">
              Access all results, CCFs, and compliance documents in one secure place. Audit ready.
            </p>
          </div>
        </div>

        {/* Consortium Program */}
        <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-xl shadow-lg border border-yellow-200 mb-12">
          <h3 className="text-blue-900 mb-4 text-center">
            Operating Solo? Join our consortium program!
          </h3>
          <p className="text-gray-700 text-center mb-6">
            Meet FMCSA random testing requirements without the administrative headache.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h5 className="text-gray-900 mb-2 font-semibold">FMCSA Clearinghouse Support</h5>
              <p className="text-sm text-gray-600">
                We help you report violations and conduct required queries.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h5 className="text-gray-900 mb-2 font-semibold">MRO Oversight</h5>
              <p className="text-sm text-gray-600">
                Results are verified by a certified medical review officer before they reach you.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h5 className="text-gray-900 mb-2 font-semibold">Audit Support</h5>
              <p className="text-sm text-gray-600">
                If DOT knocks on your door, we provide the records you need to pass.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="grid md:grid-cols-2">
            <div className="bg-gray-100 p-8 border-r border-gray-300">
              <h4 className="text-gray-900 mb-4">The Old Way:</h4>
              <p className="text-gray-700">
                You call the lab, you track the driver, you chase the MRO for results, you file paperwork, you worry about the audit
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-yellow-50 p-8">
              <h4 className="text-blue-900 mb-4">Bakersfield Drug Testing Way:</h4>
              <p className="text-gray-900 font-semibold">
                You Hire the employee, We handle the Rest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
