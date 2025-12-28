'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "What services does Kreate Studio offer?",
    answer: "We specialize in brand identity, web development, mobile apps, UI/UX design, and digital marketing. Our full-service approach ensures your digital presence is cohesive and impactful across all platforms."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A basic website typically takes 4-6 weeks, while comprehensive brand identity projects may take 8-12 weeks. We provide detailed timelines during our discovery phase."
  },
  {
    question: "What is your design process?",
    answer: "Our process includes three key phases: Strategic Discovery (48 hours), Rapid Execution (weekly deliverables), and Scalable Delivery (launch-ready product). We maintain transparent communication throughout."
  },
  {
    question: "Do you work with startups or only established companies?",
    answer: "We work with both! From early-stage startups to established enterprises, we've helped companies at every stage. We're experienced with YC-backed startups, VC-funded companies, and Fortune 500 organizations."
  },
  {
    question: "What are your pricing models?",
    answer: "We offer flexible pricing based on project scope: fixed-price projects, monthly retainers, and hourly consulting. We'll recommend the best model during our initial consultation based on your needs."
  },
  {
    question: "Can you help with ongoing maintenance and support?",
    answer: "Absolutely! We offer ongoing maintenance packages, technical support, and continuous improvement services. Many clients partner with us long-term for their evolving digital needs."
  },
  {
    question: "How do you ensure project success?",
    answer: "We combine strategic planning, agile execution, and data-driven decisions. With 92% client satisfaction, $10B+ in influenced valuation, and 500+ successful projects, our track record speaks for itself."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20 w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl lg:text-[52px] font-bold text-gray-900 mb-8 md:mb-16 leading-tight max-w-4xl">
          <span className="text-gray-900">Frequently asked</span>&nbsp;
          <span className="text-gray-600">questions.</span>
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <div className="shrink-0">
                  <svg
                    className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


