'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { ReactNode } from 'react';

interface CaseStudyLayoutProps {
  // Hero data
  title: string;
  client: string;
  year: string;
  industry: string;
  duration: string;
  tags: string[];
  heroImage: string;
  heroImagePosition: string;
  
  // Content sections
  overview: {
    description: string[];
  };
  challenge: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    points: string[];
  };
  results: {
    metrics: Array<{ metric: string; label: string }>;
  };
  
  // Additional content sections
  contentSections?: Array<{
    title: string;
    content: string[];
    image?: string;
    imagePosition?: string;
  }>;
  
  // More projects
  moreProjects?: Array<{
    title: string;
    href: string;
    image: string;
    imagePosition: string;
    tags: string[];
  }>;
}

export default function CaseStudyLayout({
  title,
  client,
  year,
  industry,
  duration,
  tags,
  heroImage,
  heroImagePosition,
  overview,
  challenge,
  solution,
  results,
  contentSections = [],
  moreProjects,
}: CaseStudyLayoutProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 pb-8 md:pb-12 overflow-hidden bg-gray-50">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back to Case Studies</span>
            </Link>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[38px] md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-8 md:mb-12 max-w-4xl"
          >
            {title}
          </motion.h1>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl mb-12 md:mb-16"
          >
            <Image
              src={heroImage}
              alt={title}
              fill
              className={`object-cover ${heroImagePosition}`}
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left Sidebar - Sticky */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-4"
            >
              <div className="lg:sticky lg:top-24 space-y-8">
                {/* Client Badge */}
                <div>
                  <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {client} • {year}
                  </span>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6 pt-6 border-t border-gray-200">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Client</h3>
                    <p className="text-lg font-medium text-gray-900">{client}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Year</h3>
                    <p className="text-lg font-medium text-gray-900">{year}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Industry</h3>
                    <p className="text-lg font-medium text-gray-900">{industry}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Duration</h3>
                    <p className="text-lg font-medium text-gray-900">{duration}</p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium group hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                  >
                    <span>Start Your Project</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Scrollable */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-8 space-y-12 md:space-y-16"
            >
              {/* Overview */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Overview</h2>
                <div className="space-y-4">
                  {overview.description.map((paragraph, index) => (
                    <p key={index} className="text-lg text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Challenge */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{challenge.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {challenge.description}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{solution.title}</h2>
                <ul className="space-y-4">
                  {solution.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-600 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg text-gray-600 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Content Sections with Images */}
              {contentSections.map((section, index) => (
                <div key={index} className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{section.title}</h2>
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-lg text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  {section.image && (
                    <div className="relative w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg mt-8">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className={`object-cover ${section.imagePosition || 'object-center'}`}
                      />
                    </div>
                  )}
                </div>
              ))}

              {/* Results */}
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Results & Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {results.metrics.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.metric}</div>
                      <div className="text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* More Projects */}
      {moreProjects && moreProjects.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Title and CTA */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 md:mb-16">
                <h2 className="text-2xl md:text-4xl lg:text-[52px] font-bold text-gray-900 leading-tight max-w-4xl">
                  <span className="text-gray-900">More projects to</span>
                  <br />
                  <span className="text-gray-600">explore and discover.</span>
                </h2>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium group hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl whitespace-nowrap shrink-0 mt-0 md:mt-2"
                >
                  <span>Start a Project</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {moreProjects.map((project, index) => (
                  <Link key={index} href={project.href} className="group">
                    <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg mb-6">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={`object-cover ${project.imagePosition} group-hover:scale-105 transition-transform duration-500`}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h3>
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
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
