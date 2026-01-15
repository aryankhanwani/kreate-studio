'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

const projects = [
  {
    id: 1,
    title: 'K - Couture Landing page',
    slug: 'k-couture',
    image: '/proj-11.png',
    objectPosition: 'object-[50%_100%]',
    tags: ['Web Design', 'Responsive Design', 'UI/UX'],
    description: 'A sophisticated landing page design for a luxury fashion brand, featuring elegant typography and immersive visuals.',
    year: '2024',
    client: 'K-Couture',
  },
  {
    id: 2,
    title: 'CyberGuard - AI threat Detection',
    slug: 'cyberguard',
    image: '/proj-2.png',
    objectPosition: 'object-[50%_4%]',
    tags: ['UI/UX', 'Responsive Design', 'SaaS'],
    description: 'Enterprise-grade cybersecurity platform with AI-powered threat detection and real-time monitoring capabilities.',
    year: '2024',
    client: 'CyberGuard',
  },
  {
    id: 3,
    title: 'Senti - Smart Stablecoin wallet',
    slug: 'senti',
    image: '/proj-3.png',
    objectPosition: 'object-[50%_0%]',
    tags: ['Web3', 'App Design', 'UX Design'],
    description: 'Next-generation cryptocurrency wallet with seamless stablecoin management and intuitive user experience.',
    year: '2024',
    client: 'Senti',
  },
  {
    id: 4,
    title: 'Myopini - Opinion Trading Platform',
    slug: 'myopini',
    image: '/proj-4.png',
    objectPosition: 'object-[50%_0%] scale-120',
    tags: ['App design', 'Design System', 'Branding'],
    description: 'Revolutionary platform for trading opinions, featuring a comprehensive design system and bold brand identity.',
    year: '2024',
    client: 'Myopini',
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 pb-12 md:pb-16 overflow-hidden bg-gray-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
              Case Studies
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[38px] md:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-4 md:mb-6"
          >
            Showcasing excellence
            <br />
            <span className="text-gray-400">through innovation.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-md md:text-xl text-gray-600 max-w-2xl leading-relaxed"
          >
            Explore our portfolio of digital products that push boundaries and deliver exceptional results for ambitious brands.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/case-studies/${project.slug}`} className="group block">
                  {/* Project Image */}
                  <div className="relative aspect-video bg-gray-100 mb-6 rounded-2xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`object-cover ${project.objectPosition} group-hover:scale-105 transition-transform duration-500`}
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    {/* Client & Year */}
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="font-medium">{project.client}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View Full Portfolio CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mt-16 md:mt-20"
          >
            <Link
              href="https://www.figma.com/proto/2suiuZtzEbBlWxNeLYkRWA/Portfolio-Deck?node-id=2-12&t=flwIA4rbapQ5yvO2-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium group hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <Image
                src="/figma-1.png"
                alt="Figma"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span>View Full Portfolio</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions to elevate your brand
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Design Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Design</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'UI/UX Design',
                  'Product Design',
                  'Branding & Identity',
                  'Design Systems',
                  'Prototyping',
                  'Visual Design',
                ].map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 font-medium">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Development Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Development</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Web Development',
                  'Mobile App Development',
                  'E-commerce Solutions',
                  'Custom Software',
                  'API Integration',
                  'Performance Optimization',
                ].map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 font-medium">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Production Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Production</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Video Production',
                  'Animation & Motion',
                  'Content Creation',
                  'Photography',
                  '3D Visualization',
                  'Post-Production',
                ].map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 font-medium">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
