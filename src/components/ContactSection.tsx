'use client';

import { useState } from 'react';

const services = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Brand Identity',
  'Digital Marketing',
  'Consulting',
];

export default function ContactSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    project: '',
  });

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ ...formData, services: selectedServices });
  };

  return (
    <div className="bg-white pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20 lg:pb-24 w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Title and Company Details */}
          <div>
            {/* Title */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              Have a project in mind?
              <br />
              <span className="text-gray-600">Contact Us!</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 mb-12 md:mb-16">
              Let&apos;s discuss how we can help bring your vision to life. Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>

            {/* Company Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                  Email
                </h3>
                <a
                  href="mailto:hello@kreatestudio.com"
                  className="text-base md:text-lg text-gray-600 hover:text-gray-900 transition-colors"
                >
                  hello@kreatestudio.com
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                  Phone
                </h3>
                <a
                  href="tel:+1234567890"
                  className="text-base md:text-lg text-gray-600 hover:text-gray-900 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                  Location
                </h3>
                <p className="text-base md:text-lg text-gray-600">
                  San Francisco, CA
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors text-gray-900"
                placeholder="Your full name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors text-gray-900"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Budget Field */}
            <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-gray-900 mb-2">
                Project Budget *
              </label>
              <div className="relative">
                <select
                  id="budget"
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors text-gray-900 bg-white appearance-none cursor-pointer"
                >
                  <option value="">Select your budget range</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Services Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                How can we help you? (Select all that apply) *
              </label>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`px-4 py-2 border text-sm font-medium transition-all duration-200  ${
                      selectedServices.includes(service)
                        ? ' bg-gray-200 text-gray-900'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-gray-900'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label htmlFor="project" className="block text-sm font-semibold text-gray-900 mb-2">
                Tell us about your project and goals *
              </label>
              <textarea
                id="project"
                required
                rows={6}
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-colors text-gray-900 resize-none"
                placeholder="Describe your project, goals, timeline, and any specific requirements..."
              />
            </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center cursor-pointer justify-center gap-0 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium group overflow-hidden hover:gap-2"
                  >
                    <span>Book a Call</span>
                    <svg
                      className="w-0 h-4 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


