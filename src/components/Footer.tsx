'use client';

import Link from 'next/link';
import Image from 'next/image';

const servicesCol1 = [
  { title: 'UI/UX Design', href: '/services/ui-ux-design' },
  { title: 'Web Design', href: '/services/web-design' },
  { title: 'Mobile App Design', href: '/services/mobile-app-design' },
  { title: 'Product Design', href: '/services/product-design' },
  { title: 'Branding & Identity', href: '/services/branding' },
  { title: 'UX Research', href: '/services/ux-research' },
  { title: 'UX Audit', href: '/services/ux-audit' },
];

const servicesCol2 = [
  { title: 'Web Development', href: '/services/web-development' },
  { title: 'Mobile App Development', href: '/services/mobile-app-development' },
  { title: 'E-commerce Development', href: '/services/ecommerce-development' },
  { title: 'Video Production', href: '/services/video-production' },
  { title: 'Motion Graphics', href: '/services/motion-graphics' },
  { title: 'Photography', href: '/services/photography' },
  { title: 'Content Creation', href: '/services/content-creation' },
];

const caseStudies: { title: string; href: string; external?: boolean }[] = [
  { title: 'K-Couture', href: '/case-studies/k-couture' },
  { title: 'CyberGuard', href: '/case-studies/cyberguard' },
  { title: 'Myopini', href: '/case-studies/myopini' },
  { title: 'Senti', href: '/case-studies/senti' },
];

const contact = [
  { title: 'Behance', href: 'https://behance.net/kreatestudio' },
  { title: 'Dribbble', href: 'https://dribbble.com/kreatestudio' },
  { title: 'Figma', href: 'https://figma.com/@kreatestudio' },
];

const socialLinks = [
  { title: 'Instagram', href: 'https://instagram.com/kreatestudio' },
  { title: 'LinkedIn', href: 'https://linkedin.com/company/kreatestudio' },
  { title: 'Twitter', href: 'https://twitter.com/kreatestudio' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 md:pt-16 lg:pt-20 xl:pt-24 pb-6 md:pb-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-8 mb-12 md:mb-16">
          {/* Company Info Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo-2.svg"
                alt="Kreate Studio"
                width={180}
                height={24}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              Kreate Studio is a global UI/UX design agency that boosts brand value with user-friendly, effective designs for web, mobile, and SaaS platforms.
            </p>
            <Link
              href="https://www.figma.com/proto/2suiuZtzEbBlWxNeLYkRWA/Portfolio-Deck?node-id=2-12&t=flwIA4rbapQ5yvO2-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium group text-sm md:text-base"
            >
              <span>Our Work</span>
              <Image
                src="/figma-1.png"
                alt="Figma"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
            </Link>
          </div>

          {/* Services Column 1 - Design */}
          <div>
            <h3 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-6">Design</h3>
            <ul className="space-y-3">
              {servicesCol1.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 2 - Development & Production */}
          <div>
            <h3 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-6">Development & Production</h3>
            <ul className="space-y-3">
              {servicesCol2.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies Column */}
          <div>
            <h3 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-6">Case studies</h3>
            <ul className="space-y-3">
              {caseStudies.map((study, index) => (
                <li key={index}>
                  <Link
                    href={study.href}
                    {...(study.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base inline-block"
                  >
                    {study.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-6">Contact</h3>
            <ul className="space-y-3">
              {contact.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base inline-block"
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
            <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-base md:text-lg"
                >
                  {social.title}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3 md:gap-4">
              <div className="text-center md:text-right">
                <p className="text-white text-sm md:text-base mb-1">Let&apos;s work together</p>
                <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold">Call Kreate Studio</p>
              </div>
              <Link
                href="/contact"
                className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 group shrink-0"
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
        <hr className="border-gray-800 my-8 md:my-12" />

        {/* Copyright and Large Logo Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 mb-6 md:mb-8">
          <p className="text-gray-500 text-sm md:text-lg text-center md:text-left">
            Kreate Studio © 2026
          </p>
          <p className="text-gray-500 text-sm md:text-lg text-center md:text-right">
            Kreate Studio is a design agency based in 🇮🇳
          </p>
        </div>
      </div>

      {/* Large Full-Width Logo - Outside Container */}
      <div className="relative w-full left-1/2 right-1/2 top-12 md:top-20 lg:top-24 -mx-[50vw] overflow-y-hidden pb-6 md:pb-8 px-4 sm:px-6 lg:px-8" >
        <Image
          src="/logo-2.svg"
          alt="Kreate Studio"
          width={2000}
          height={200}
          className="w-full h-auto"
        />
      </div>
    </footer>
  );
}

