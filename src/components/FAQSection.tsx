'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "What services does Kreate Studio offer?",
    answer: "We provide end-to-end digital solutions: UI/UX Design (consulting, research, audits, visual design), Web & Mobile Development (full-stack, e-commerce, native apps), Brand Identity, Product Strategy, and Production Services (video, photography, motion graphics). Everything you need under one roof."
  },
  {
    question: "How does your UI/UX design process work?",
    answer: "We start with UX Research and Consulting to understand your users and goals. Then we conduct UX Audits and Usability Testing on existing products, followed by UI/UX Design and Design System creation. Every decision is backed by data and user insights."
  },
  {
    question: "What development technologies do you work with?",
    answer: "Our team is proficient in full-stack development including React, Next.js, Node.js, and modern frameworks. We build progressive web apps, native iOS/Android applications, e-commerce platforms, and custom software solutions with API integrations."
  },
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary by scope: UI/UX audits take 1-2 weeks, website designs 3-4 weeks, full web development 6-10 weeks, and mobile apps 8-12 weeks. We provide detailed timelines during our Strategic Discovery phase."
  },
  {
    question: "Do you offer production services for video and content?",
    answer: "Yes! Our Production Services include video production, photography, motion graphics, 3D rendering, and post-production. We handle everything from concept to final delivery, ensuring high-quality visual content for your brand."
  },
  {
    question: "What are your pricing models?",
    answer: "We offer flexible pricing: fixed-price projects for defined scopes, monthly retainers for ongoing design and development support, and hourly consulting for UX audits and strategic sessions. We'll recommend the best fit during our initial call."
  },
  {
    question: "Do you work with startups or only established companies?",
    answer: "We partner with both! From early-stage startups needing MVP design to enterprises requiring design system audits and scalable development. Our process adapts to your stage and budget while maintaining quality."
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




