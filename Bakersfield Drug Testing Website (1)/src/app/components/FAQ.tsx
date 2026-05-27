import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  questions: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "For Employers & Managers",
    questions: [
      {
        question: "How does a Third Party administrator benefit my business?",
        answer: "We act as your compliance partner. As a professional collection site, we manage the entire process. From random pool selections and specimen collections to coordinating with certified labs and MROs. Ensuring your records are audit-ready."
      },
      {
        question: "What is the difference between DOT and NON-DOT testing?",
        answer: "DOT tests are federally mandated for safety-sensitive roles (like CDL drivers) and follow strict 49 CFR Part 40 collection procedures. Non-DOT tests are custom programs designed by your company for general workplace safety."
      },
      {
        question: "Can you manage our FMCSA Clearinghouse requirements?",
        answer: "Yes. We assist employers with required pre-employment and annual queries, as well as reporting drug and alcohol violations to keep your company in full federal compliance."
      }
    ]
  },
  {
    title: "For Drivers & Employees",
    questions: [
      {
        question: "Do I need an appointment or can I walk in?",
        answer: "No appointments are necessary. We operate as a 100% walk-in collection site to ensure the fastest service. Simply visit our facility between 8AM and 5PM"
      },
      {
        question: "What is the typical wait time for a collection?",
        answer: "Because we focus strictly on professional collections, most donors are in and out within 15-20 minutes. Peak volume is typically 8:30AM - 11AM"
      },
      {
        question: "When can my employer expect to receive the results?",
        answer: "Once we complete the collection, the specimen is securely shipped to a certified laboratory. Standard results are typically reported to the employer within 48 to 72 Hours."
      }
    ]
  },
  {
    title: "General & Federal Compliance",
    questions: [
      {
        question: "Is your facility an authorized collection site?",
        answer: "Yes. Our facility and staff are fully certified to perform collections for all DOT agencies and NON-DOT federal programs. We maintain a sterile, secure environment that meets all federal requirements."
      },
      {
        question: "Which Federal Agencies do you provide collections for?",
        answer: "We are an authorized collection site for all DOT agencies (FMCSA, FAA, FRA, FTA, PHMSA, USCG) as well as federal agencies that follow HHS mandatory guidelines."
      }
    ]
  }
];

export function FAQ() {
  const [openCategoryIndex, setOpenCategoryIndex] = useState<number | null>(null);
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    if (openCategoryIndex === index) {
      setOpenCategoryIndex(null);
      setOpenQuestionIndex(null);
    } else {
      setOpenCategoryIndex(index);
      setOpenQuestionIndex(null);
    }
  };

  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 mb-4">Frequently Asked Questions (FAQ)</h2>
          <p className="text-xl text-gray-600">
            Find answers for employers, drivers, and individual testing needs.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl shadow-lg border-2 border-blue-200 overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(categoryIndex)}
                className="w-full px-6 py-5 flex justify-between items-center text-left bg-gradient-to-r from-blue-50 to-yellow-50 hover:from-blue-100 hover:to-yellow-100 transition-colors"
              >
                <h3 className="text-blue-900 text-xl font-bold pr-4">
                  {category.title}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openCategoryIndex === categoryIndex ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Questions within Category */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openCategoryIndex === categoryIndex ? "max-h-[2000px]" : "max-h-0"
                }`}
              >
                <div className="p-4 space-y-2">
                  {category.questions.map((faq, questionIndex) => (
                    <div
                      key={questionIndex}
                      className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(questionIndex)}
                        className="w-full px-5 py-4 flex justify-between items-center text-left hover:bg-gray-100 transition-colors"
                      >
                        <h4 className="text-gray-900 font-semibold pr-4">
                          {faq.question}
                        </h4>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                            openCategoryIndex === categoryIndex && openQuestionIndex === questionIndex ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openCategoryIndex === categoryIndex && openQuestionIndex === questionIndex ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <div className="px-5 pb-4 pt-2">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white shadow-lg">
          <h3 className="text-white mb-3">Have a specific question?</h3>
          <p className="text-blue-100 mb-6">
            Call us now at (661) 321-0439 or email us at BDT@bakersfielddrugtesting.com
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:661-321-0439"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Call (661) 321-0439
            </a>
            <a
              href="mailto:BDT@bakersfielddrugtesting.com"
              className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
