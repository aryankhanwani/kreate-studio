'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { 
  Code2, 
  Smartphone, 
  Palette, 
  Sparkles, 
  Layers, 
  FileText, 
  ShoppingCart, 
  Cloud, 
  Brain, 
  Box,
  Camera,
  Film,
  Lightbulb,
  Video 
} from 'lucide-react';

const services = [
  { title: 'UI/UX Design', href: '/services/ui-ux-design', icon: Palette, color: 'text-pink-600' },
  { title: 'Web Design', href: '/services/web-design', icon: Layers, color: 'text-blue-600' },
  { title: 'Mobile App Design', href: '/services/mobile-app-design', icon: Smartphone, color: 'text-purple-600' },
  { title: 'Product Design', href: '/services/product-design', icon: Box, color: 'text-teal-600' },
  { title: 'Branding & Identity', href: '/services/brand-identity', icon: Sparkles, color: 'text-yellow-600' },
  { title: 'Web Development', href: '/services/web-development', icon: Code2, color: 'text-indigo-600' },
  { title: 'Mobile App Development', href: '/services/mobile-app-development', icon: Smartphone, color: 'text-green-600' },
  { title: 'Custom Software Development', href: '/services/custom-software-development', icon: Cloud, color: 'text-cyan-600' },
  { title: 'E-commerce Development', href: '/services/ecommerce-development', icon: ShoppingCart, color: 'text-red-600' },
  { title: 'API Development', href: '/services/api-development', icon: FileText, color: 'text-orange-600' },
  { title: 'Video Production', href: '/services/video-production', icon: Video, color: 'text-rose-600' },
  { title: 'Content Creation', href: '/services/content-creation', icon: Film, color: 'text-violet-600' },
  { title: 'Photography', href: '/services/photography', icon: Camera, color: 'text-amber-600' },
  { title: 'Motion Graphics', href: '/services/motion-graphics', icon: Lightbulb, color: 'text-sky-600' },
];

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only hide/show if we've scrolled more than 100px
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-1.svg"
              alt="Kreate Studio"
              width={180}
              height={24}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link href="/services" className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors py-2">
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Dropdown Menu - Two Column Layout */}
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 w-[640px]">
                  {/* Invisible bridge to prevent gap issues */}
                  <div className="h-2"></div>
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 animate-fadeIn">
                    {/* Decorative arrow */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {/* Left Column - First 7 services */}
                    <div className="space-y-1">
                      {services.slice(0, 7).map((service, index) => {
                        const Icon = service.icon;
                        const bgColorMap: { [key: string]: string } = {
                          'text-blue-600': 'bg-blue-100',
                          'text-purple-600': 'bg-purple-100',
                          'text-pink-600': 'bg-pink-100',
                          'text-yellow-600': 'bg-yellow-100',
                          'text-green-600': 'bg-green-100',
                          'text-orange-600': 'bg-orange-100',
                          'text-indigo-600': 'bg-indigo-100',
                        };
                        return (
                          <Link
                            key={index}
                            href={service.href}
                            className="group flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200 hover:translate-x-1"
                          >
                            <div className={`${bgColorMap[service.color] || 'bg-gray-100'} p-2 rounded-lg group-hover:scale-110 transition-transform duration-200`}>
                              <Icon className={`w-4 h-4 ${service.color}`} />
                            </div>
                            <span className="flex-1 group-hover:text-gray-900 font-medium">{service.title}</span>
                            <svg
                              className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Right Column - Last 7 services */}
                    <div className="space-y-1 border-l border-gray-100 pl-2">
                      {services.slice(7, 14).map((service, index) => {
                        const Icon = service.icon;
                        const bgColorMap: { [key: string]: string } = {
                          'text-red-600': 'bg-red-100',
                          'text-cyan-600': 'bg-cyan-100',
                          'text-violet-600': 'bg-violet-100',
                          'text-amber-600': 'bg-amber-100',
                          'text-teal-600': 'bg-teal-100',
                          'text-rose-600': 'bg-rose-100',
                          'text-sky-600': 'bg-sky-100',
                        };
                        return (
                          <Link
                            key={index}
                            href={service.href}
                            className="group flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200 hover:translate-x-1"
                          >
                            <div className={`${bgColorMap[service.color] || 'bg-gray-100'} p-2 rounded-lg group-hover:scale-110 transition-transform duration-200`}>
                              <Icon className={`w-4 h-4 ${service.color}`} />
                            </div>
                            <span className="flex-1 group-hover:text-gray-900 font-medium">{service.title}</span>
                            <svg
                              className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/case-studies"
              className="relative text-gray-700 hover:text-gray-900 font-medium transition-colors group"
            >
              <span>Case Studies</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/about"
              className="relative text-gray-700 hover:text-gray-900 font-medium transition-colors group"
            >
              <span>About Us</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/blog"
              className="relative text-gray-700 hover:text-gray-900 font-medium transition-colors group"
            >
              <span>Blog</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-0 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium group overflow-hidden hover:gap-2"
          >
            <span>Contact Us</span>
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
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-fadeIn">
          <div className="px-6 py-6">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/services"
                className="flex items-center justify-between px-4 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl font-medium transition-all duration-200 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Services</span>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/case-studies"
                className="flex items-center justify-between px-4 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl font-medium transition-all duration-200 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Case Studies</span>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/about"
                className="flex items-center justify-between px-4 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl font-medium transition-all duration-200 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>About Us</span>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/blog"
                className="flex items-center justify-between px-4 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl font-medium transition-all duration-200 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Blog</span>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </nav>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-0 bg-gray-900 text-white px-6 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl w-full group overflow-hidden active:scale-95 hover:gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Contact Us</span>
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
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

