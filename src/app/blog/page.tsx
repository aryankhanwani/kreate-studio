'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function BlogPage() {
  const router = useRouter();

  return (
    <main className="h-screen w-screen bg-gray-50 flex items-center justify-center overflow-hidden fixed inset-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-3 sm:mb-6"
        >
          <div className="text-6xl md:text-7xl lg:text-8xl mb-2 sm:mb-4">✍️</div>
          <h1 className="text-[52px] sm:text-[100px] lg:text-[140px] font-bold text-gray-900 leading-none mb-3 sm:mb-6">
            Coming Soon
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 sm:mb-6"
        >
          <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
            We're writing something amazing,
            <span className="text-gray-400"> coming soon!</span>
          </h2>
          <p className="text-[15px] sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our blog is in the works! We'll be sharing design insights, development tips, and creative inspiration. Stay tuned!
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 justify-center items-stretch sm:items-center mb-4 sm:mb-0"
        >
          <button
            onClick={() => router.back()}
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full hover:bg-gray-800 transition-all duration-300 text-[15px] sm:text-base font-medium group hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Go Back</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full border-2 border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition-all duration-300 text-[15px] sm:text-base font-medium group hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            <span>Back to Home</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-gray-900 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 text-[15px] sm:text-base font-medium group hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            <span>Contact Us</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 sm:mt-12 pt-4 sm:pt-6 border-t border-gray-200"
        >
          <p className="text-[13px] sm:text-sm text-gray-500 mb-2.5 sm:mb-3">Or explore these popular pages:</p>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {[
              { label: 'Services', href: '/services', showIcon: false },
              { label: 'Case Studies', href: '/case-studies', showIcon: false },
              { label: 'Our Work', href: 'https://www.figma.com/proto/2suiuZtzEbBlWxNeLYkRWA/Portfolio-Deck?node-id=2-12&t=flwIA4rbapQ5yvO2-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1', showIcon: true },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-4 sm:py-2 text-[13px] sm:text-sm text-gray-700 hover:text-gray-900 bg-white rounded-full border border-gray-200 hover:border-gray-900 transition-all duration-300"
              >
                {link.showIcon && (
                  <Image
                    src="/figma-1.png"
                    alt="Figma"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                )}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
