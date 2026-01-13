'use client';

import { useState } from 'react';
import { Send, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import Footer from '@/components/Footer';
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

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    timeline: '',
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
          ...formData,
          services: selectedServices,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          budget: '',
          timeline: '',
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
    <>
      <div className="bg-gray-50 min-h-screen pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Let&apos;s Create Something
              <br />
              <span className="text-gray-600">Amazing Together</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your vision into reality? Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Email Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                      Email Us
                    </h3>
                    <a
                      href="mailto:teamkreatestudio@gmail.com"
                      className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      teamkreatestudio@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                      Location
                    </h3>
                    <p className="text-base text-gray-600">
                      India 🇮🇳
                    </p>
                  </div>
                </div>
              </div>

              {/* Availability Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                      Availability
                    </h3>
                    <p className="text-base text-gray-600">
                      Mon - Sat, 10AM - 7PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gray-900 p-6 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-2">
                  Prefer to talk directly?
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Schedule a call with our team to discuss your project in detail.
                </p>
                <a
                  href="mailto:teamkreatestudio@gmail.com"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium text-sm group"
                >
                  <span>Book a Call</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-10 lg:p-12 rounded-2xl shadow-sm border border-gray-100">
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
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all text-gray-900"
                          placeholder="John Doe"
                        />
                      </div>

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
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all text-gray-900"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Phone and Company Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all text-gray-900"
                          placeholder="+1 (234) 567-890"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all text-gray-900"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    {/* Budget and Timeline Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                      <div>
                        <label htmlFor="timeline" className="block text-sm font-semibold text-gray-900 mb-2">
                          Project Timeline *
                        </label>
                        <CustomSelect
                          id="timeline"
                          value={formData.timeline}
                          onChange={(value) => setFormData({ ...formData, timeline: value })}
                          options={[
                            { value: 'asap', label: 'ASAP' },
                            { value: '1-3months', label: '1-3 months' },
                            { value: '3-6months', label: '3-6 months' },
                            { value: '6+months', label: '6+ months' },
                            { value: 'flexible', label: 'Flexible' },
                          ]}
                          placeholder="Select timeline"
                          required
                        />
                      </div>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all text-gray-900 resize-none"
                        placeholder="Describe your project goals, target audience, key features, and any specific requirements..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting || selectedServices.length === 0}
                        className="w-full inline-flex items-center justify-center gap-0 bg-gray-900 text-white px-6 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium group overflow-hidden hover:gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        <Send
                          className={`w-0 h-4 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 ${
                            isSubmitting ? '' : 'group-hover:translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
