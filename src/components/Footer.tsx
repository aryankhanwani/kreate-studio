'use client';

import Link from 'next/link';
import Image from 'next/image';

const services = [
  { title: 'UI UX Design', href: '/services/ui-ux-design' },
  { title: 'Web Design', href: '/services/web-design' },
  { title: 'Product Design', href: '/services/product-design' },
  { title: 'SaaS Design', href: '/services/saas-design' },
  { title: 'Branding', href: '/services/branding' },
  { title: 'UX Audit', href: '/services/ux-audit' },
  { title: 'Mobile App', href: '/services/mobile-app' },
  { title: 'Design System', href: '/services/design-system' },
  { title: 'Webflow', href: '/services/webflow' },
  { title: 'UX Research', href: '/services/ux-research' },
];

const caseStudies = [
  { title: 'Open Hub', href: '/case-studies/open-hub' },
  { title: 'Better AI', href: '/case-studies/better-ai' },
  { title: 'Spacebook', href: '/case-studies/spacebook' },
  { title: 'Kodezi', href: '/case-studies/kodezi' },
  { title: 'View all work', href: '/case-studies' },
];

const contact = [
  { title: 'Clutch', href: 'https://clutch.co' },
  { title: 'Behance', href: 'https://behance.net' },
  { title: 'Dribbble', href: 'https://dribbble.com' },
  { title: 'Awwwards', href: 'https://awwwards.com' },
];

const socialLinks = [
  { title: 'Instagram', href: 'https://instagram.com' },
  { title: 'Facebook', href: 'https://facebook.com' },
  { title: 'LinkedIn', href: 'https://linkedin.com' },
  { title: 'Twitter', href: 'https://twitter.com' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 md:pt-20 lg:pt-24 pb-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Company Info Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.svg"
                alt="Kreate Studio"
                width={180}
                height={24}
                className="h-6 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Kreate Studio is a global UI/UX design agency that boosts brand value with user-friendly, effective designs for web, mobile, and SaaS platforms.
            </p>
            <Link
              href="/company-deck.pdf"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium group"
            >
              <span>Our Work</span>
              <svg
                className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </Link>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-base inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Case studies</h3>
            <ul className="space-y-3">
              {caseStudies.map((study, index) => (
                <li key={index}>
                  <Link
                    href={study.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-base inline-block"
                  >
                    {study.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              {contact.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-base inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"
                >
                  {social.title}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-white text-base mb-1">Let&apos;s work together</p>
                <p className="text-white text-3xl font-bold">Call Kreate Studio</p>
              </div>
              <Link
                href="/contact"
                className="flex items-center justify-center w-14 h-14 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 group shrink-0"
              >
                <svg
                  className="w-6 h-6 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Horizontal Rule */}
        <hr className="border-gray-800 my-12" />

        {/* Copyright and Large Logo Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <p className="text-gray-500 text-lg">
            Kreate Studio LLC © 2025
          </p>
          <p className="text-gray-500 text-lg text-center md:text-right">
            Kreate Studio is a limited liability company based in 🇺🇸 🇮🇳 🇩🇪
          </p>
        </div>
      </div>

      {/* Large Full-Width Logo - Outside Container */}
      <div className="relative w-full left-1/2 right-1/2 top-24 -mx-[50vw] overflow-y-hidden py-8 px-4 sm:px-6 lg:px-8" >
        <Image
          src="/logo.svg"
          alt="Kreate Studio"
          width={2000}
          height={200}
          className="w-full h-auto brightness-0 invert"
        />
      </div>
    </footer>
  );
}

