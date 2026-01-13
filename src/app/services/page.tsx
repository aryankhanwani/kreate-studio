'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';

// Service sections with their sub-services
const serviceCategories = [
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    subtitle: 'Research-backed design that delights users',
    description: 'We create intuitive, beautiful interfaces backed by user research and data. From wireframes to polished designs, we ensure every pixel serves a purpose.',
    color: 'bg-[#6366F1]', // Indigo
    services: [
      'UI UX Consulting',
      'UX Research',
      'Usability Testing',
      'UX Audit',
      'Visual Design',
      'Interaction Design',
    ],
    image: '/proj-11.png',
    cta: 'Design with Us',
  },
  {
    id: 'product-branding',
    title: 'Product & Brand Design',
    subtitle: 'Building memorable digital identities',
    description: 'From product strategy to brand identity, we craft cohesive experiences that resonate with your audience and stand out in the market.',
    color: 'bg-[#8B5CF6]', // Purple
    services: [
      'Product Design',
      'Branding & Identity',
      'Design Systems',
      'Wireframing',
      'Prototyping',
      'Logo Design',
    ],
    image: '/proj-2.png',
    cta: 'Build Your Brand',
  },
  {
    id: 'web-mobile-design',
    title: 'Web & Mobile Design',
    subtitle: 'Responsive designs for every screen',
    description: 'Beautiful, responsive designs optimized for web and mobile. We create seamless experiences across all devices and platforms.',
    color: 'bg-[#0EA5E9]', // Sky blue
    services: [
      'Web Design',
      'Mobile App Design',
      'Responsive Design',
      'Landing Pages',
      'Dashboard Design',
      'E-commerce Design',
    ],
    image: '/proj-3.png',
    cta: 'Start Your Project',
  },
  {
    id: 'development',
    title: 'Development Services',
    subtitle: 'Robust, scalable applications',
    description: 'Full-stack development with modern technologies. We build high-performance web and mobile applications that scale with your business.',
    color: 'bg-[#14B8A6]', // Teal
    services: [
      'Web Development',
      'Mobile App Development',
      'E-commerce Development',
      'React/Next.js',
      'Node.js Backend',
      'API Development',
      'CMS Integration',
    ],
    image: '/proj-4.png',
    cta: 'Build Your App',
  },
  {
    id: 'video-motion',
    title: 'Video & Motion Graphics',
    subtitle: 'Dynamic visual storytelling',
    description: 'Professional video production and motion graphics that capture attention. From concept to final cut, we bring your stories to life.',
    color: 'bg-[#F97316]', // Orange
    services: [
      'Video Production',
      'Motion Graphics',
      '2D Animation',
      'Logo Animation',
      'Brand Videos',
      'Explainer Videos',
      'Product Demos',
    ],
    image: '/proj-222.png',
    cta: 'Create Your Video',
  },
  {
    id: 'content-production',
    title: 'Content & Production',
    subtitle: 'High-quality visual content',
    description: 'Stunning photography and content creation for your brand. We deliver polished visual assets that communicate your message with impact.',
    color: 'bg-black',
    services: [
      'Photography',
      'Content Creation',
      '3D Rendering',
      'Post-production',
      'Social Media Content',
    ],
    image: '/proj-1.png',
    cta: 'Get Your Content',
  },
];

// Stats for credibility
const stats = [
  { number: '500+', label: 'Projects Delivered' },
  { number: '150+', label: 'Happy Clients' },
  { number: '6+', label: 'Years Experience' },
  { number: '98%', label: 'Client Satisfaction' },
];

export default function ServicesPage() {
  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative pt-12 md:pt-20 pb-12 md:pb-24 overflow-hidden bg-gray-50">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}></div>
          </div>

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
                    Our Services
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-[38px] md:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-4 md:mb-6"
                >
                  Design, Development
                  <br />
                  <span className="text-gray-400">& Production</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-md md:text-xl text-gray-600 max-w-2xl mb-6 md:mb-8 leading-relaxed"
                >
                  End-to-end digital solutions for ambitious brands. From pixel-perfect designs to robust development and stunning visual content.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col md:flex-row gap-3 md:gap-4"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium text-base group shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                  >
                    <span>Start a Project</span>
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.figma.com/proto/2suiuZtzEbBlWxNeLYkRWA/Portfolio-Deck?node-id=2-12&t=flwIA4rbapQ5yvO2-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-full border-2 border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition-all duration-300 font-medium text-base group hover:scale-105 active:scale-95"
                  >
                    <Image
                      src="/figma-1.png"
                      alt="Figma"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span>View Our Work</span>
                  </Link>
                </motion.div>
              </div>

              {/* Right Content - Browser Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:block"
              >
                {/* Browser Window */}
                <div className="relative">
                  {/* Browser Chrome */}
                  <div className="bg-gray-200 rounded-t-xl p-3 flex items-center gap-2 shadow-lg">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-500 flex items-center gap-2">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>kreatestudio.com</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Browser Content */}
                  <div className="bg-white rounded-b-xl overflow-hidden shadow-2xl">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src="/proj-11.png"
                        alt="Services Preview"
                        fill
                        className="object-cover object-[50%_0%]"
                      />
                    </div>
                  </div>

                  {/* Floating Elements for Visual Interest */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl opacity-20 blur-xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories - Sticky Image Layout */}
        {serviceCategories.map((category, categoryIndex) => (
          <section
            key={category.id}
            id={category.id}
            className="bg-white py-8 md:py-24 border-t border-gray-100"
          >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 ${categoryIndex % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image Side - Sticky */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`lg:sticky lg:top-24 lg:self-start ${categoryIndex % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <div className="relative aspect-4/3 rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover object-[50%_0%]"
                    />
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={categoryIndex % 2 === 1 ? 'lg:order-1' : ''}
                >
                  {/* Title */}
                  <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 md:mb-4">
                    {category.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-3 md:mb-6">
                    {category.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm md:text-lg text-gray-500 mb-5 md:mb-10 max-w-lg leading-relaxed">
                    {category.description}
                  </p>

                  {/* Services List - Numbered with Arrows */}
                  <div className="space-y-0 mb-5 md:mb-10">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={serviceIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: serviceIndex * 0.05 }}
                        className="group border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-center justify-between py-2.5 md:py-5 hover:bg-gray-50 px-2 md:px-4 transition-colors duration-200">
                          <div className="flex items-center gap-3 md:gap-6">
                            <span className="text-gray-400 text-sm md:text-lg lg:text-xl font-normal w-6 md:w-8">
                              {String(serviceIndex + 1).padStart(2, '0')}
                            </span>
                            <span className="text-gray-900 text-base md:text-xl lg:text-2xl font-normal">
                              {service}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 md:px-8 md:py-4 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium text-sm md:text-base group"
                  >
                    <span>{category.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* Who We Design For Section */}
        <section className="bg-gray-50 pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20 w-full">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 md:mb-16"
            >
              <h2 className="text-2xl md:text-4xl lg:text-[52px] font-bold text-gray-900 leading-tight max-w-4xl">
                <span className="text-gray-900">Partners we work with</span>
                <br />
                <span className="text-gray-600">and how we help them grow.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Startups & Founders",
                  description: "Launch your MVP with confidence. We help early-stage startups validate ideas and build products that attract investors and users.",
                  features: ["MVP Design & Development", "Pitch Deck Design", "Brand Identity", "Go-to-Market Strategy"],
                  icon: "🚀",
                },
                {
                  title: "Growing Companies",
                  description: "Scale your product and team. We provide the design systems and development infrastructure you need to grow sustainably.",
                  features: ["Design Systems", "Product Scaling", "Team Augmentation", "Technical Consulting"],
                  icon: "📈",
                },
                {
                  title: "Enterprises",
                  description: "Transform your digital presence. We modernize legacy systems and create enterprise-grade solutions that drive business outcomes.",
                  features: ["Digital Transformation", "Enterprise Software", "System Integration", "Ongoing Support"],
                  icon: "🏢",
                },
              ].map((segment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 md:p-8 border border-gray-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]"
                >
                  <div className="text-4xl mb-4">{segment.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{segment.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{segment.description}</p>
                  <ul className="space-y-2">
                    {segment.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Testimonials Section - Reusing from Homepage */}
        <TestimonialsSection />

        {/* Final CTA Section */}
        <section className="bg-white pt-12 md:pt-20 lg:pt-24 pb-12 md:pb-20 lg:pb-24 w-full">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-2xl md:rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left Content */}
                <div className="p-6 md:p-12 lg:p-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/10 text-white rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
                      Let&apos;s Work Together
                    </span>
                    
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                      Ready to transform your digital presence?
                    </h2>
                    
                    <p className="text-sm md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed">
                      Whether you&apos;re launching a new product, scaling your business, or modernizing your digital experience, we&apos;re here to help you succeed.
                    </p>

                    {/* Benefits List */}
                    <div className="space-y-3 md:space-y-4 mb-6 md:mb-10">
                      {[
                        "Free consultation to discuss your project",
                        "Detailed proposal within 48 hours",
                        "Transparent pricing with no hidden costs",
                        "Dedicated team assigned to your project",
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-center gap-2 md:gap-3"
                        >
                          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                            <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm md:text-base text-gray-200">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium text-sm md:text-base group"
                      >
                        <span>Start Your Project</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href="https://www.figma.com/proto/2suiuZtzEbBlWxNeLYkRWA/Portfolio-Deck?node-id=2-12&t=flwIA4rbapQ5yvO2-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-6 py-3 md:px-8 md:py-4 rounded-full border border-gray-700 hover:border-white transition-all duration-300 font-medium text-sm md:text-base"
                      >
                        <span>View Our Work</span>
                      </Link>
                    </div>
                  </motion.div>
                </div>

                {/* Right Content - Contact Info */}
                <div className="bg-white/5 backdrop-blur-sm p-6 md:p-12 lg:p-16 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6 md:space-y-8"
                  >
                    <div>
                      <h3 className="text-white text-base md:text-lg font-semibold mb-1.5 md:mb-2">Email Us</h3>
                      <a
                        href="mailto:teamkreatestudio@gmail.com"
                        className="text-gray-300 hover:text-white transition-colors text-lg md:text-xl break-all"
                      >
                        teamkreatestudio@gmail.com
                      </a>
                    </div>

                    <div>
                      <h3 className="text-white text-base md:text-lg font-semibold mb-1.5 md:mb-2">Location</h3>
                      <p className="text-gray-300 text-lg md:text-xl">India 🇮🇳</p>
                    </div>

                    <div>
                      <h3 className="text-white text-base md:text-lg font-semibold mb-1.5 md:mb-2">Availability</h3>
                      <p className="text-gray-300 text-lg md:text-xl">Mon - Sat</p>
                      <p className="text-gray-300 text-sm md:text-base">10AM - 7PM IST</p>
                    </div>

                    <div className="pt-4 md:pt-6 border-t border-white/10">
                      <h3 className="text-white text-base md:text-lg font-semibold mb-3 md:mb-4">Follow Us</h3>
                      <div className="flex flex-wrap gap-3 md:gap-4">
                        {[
                          { name: 'Instagram', href: 'https://instagram.com/kreatestudio' },
                          { name: 'LinkedIn', href: 'https://linkedin.com/company/kreatestudio' },
                          { name: 'Twitter', href: 'https://twitter.com/kreatestudio' },
                        ].map((social) => (
                          <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                          >
                            {social.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
