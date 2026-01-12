'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import CustomSelect from '@/components/ui/custom-select';

const services = [
  'UI/UX Design',
  'Web Design',
  'Mobile App Design',
  'Product Design',
  'Branding & Identity',
  'Web Development',
  'Mobile App Development',
  'Custom Software Development',
  'E-commerce Development',
  'API Development',
  'Video Production',
  'Content Creation',
  'Photography',
  'Motion Graphics',
  '3D Rendering',
];

export default function ContactSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          budget: formData.budget,
          services: selectedServices,
          project: formData.project,
          timeline: 'Not specified', // Home form doesn't have timeline field
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          budget: '',
          project: '',
        });
        setSelectedServices([]);
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
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
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                  Location
                </h3>
                <p className="text-base md:text-lg text-gray-600">
                  Germany 🇩🇪
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                  Response Time
                </h3>
                <p className="text-base md:text-lg text-gray-600">
                  Within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100">
              {isSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-800 text-sm font-medium">
                    Thank you! We&apos;ve received your message and will get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all text-gray-900 bg-white"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all text-gray-900 bg-white"
                  placeholder="john@example.com"
                />
              </div>

              {/* Budget Field */}
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-gray-900 mb-2">
                  Project Budget *
                </label>
                <CustomSelect
                  id="budget"
                  value={formData.budget}
                  onChange={(value) => setFormData({ ...formData, budget: value })}
                  options={[
                    { value: '5k-10k', label: '$5,000 - $10,000' },
                    { value: '10k-25k', label: '$10,000 - $25,000' },
                    { value: '25k-50k', label: '$25,000 - $50,000' },
                    { value: '50k-100k', label: '$50,000 - $100,000' },
                    { value: '100k+', label: '$100,000+' },
                  ]}
                  placeholder="Select budget range"
                  required
                />
              </div>

              {/* Services Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Services Needed (Select all that apply) *
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                        selectedServices.includes(service)
                          ? 'bg-gray-900 text-white'
                          : 'border border-gray-300 bg-white text-gray-700 hover:border-gray-900'
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
                  Tell Us About Your Project *
                </label>
                <textarea
                  id="project"
                  required
                  rows={6}
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all text-gray-900 bg-white resize-none"
                  placeholder="Describe your project goals, target audience, key features, and any specific requirements..."
                />
              </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || selectedServices.length === 0}
                      className="w-full inline-flex items-center cursor-pointer justify-center gap-0 bg-gray-900 text-white px-6 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium group overflow-hidden hover:gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      <svg
                        className={`w-0 h-4 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 ${
                          isSubmitting ? '' : 'group-hover:translate-x-1'
                        }`}
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
    </div>
  );
}


