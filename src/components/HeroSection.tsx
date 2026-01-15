'use client';

import Image from 'next/image';
import { TextRotate } from '@/components/ui/text-rotate';

const words = [
  'ambitious brands.',
  'industry leaders.',
  'scaling startups.',
  'global enterprises.',
  'visionary founders.',
];

export default function HeroSection() {

  return (
    <div className="min-h-screen bg-gray-50 pt-12 lg:pt-20 pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability Badge */}
        <div className="flex justify-start mb-6 md:mb-8 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white border border-gray-200 rounded-full shadow-sm">
            <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-green-500"></span>
            </span>
            <span className="text-xs md:text-sm font-medium text-gray-700">Available for New Projects</span>
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden space-y-6">
          {/* Hero Text */}
          <h1 className="font-bold text-gray-900 leading-[1.1] flex flex-wrap items-end text-[38px]">
            <span className="mb-2">We design & develop digital products for</span>
            <br className="basis-full" />
            <TextRotate
              texts={words}
              mainClassName="bg-gray-700 text-white px-3 py-1.5 overflow-hidden justify-center rounded-xl"
              splitLevelClassName="overflow-hidden pb-0.5"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
              splitBy="characters"
            />
          </h1>

          {/* Subtext */}
          <div className="space-y-3">
            <p className="text-md text-gray-600 leading-relaxed">
              Strategic design and development partner for businesses ready to scale. We deliver pixel-perfect interfaces and robust solutions that drive growth.
            </p>
            
          </div>

          {/* Reviews/Testimonials */}
          <div className="py-6 border-t border-gray-200">
            <div className="flex items-start gap-4">
              <div className="flex -space-x-2 shrink-0">
                <div className="relative group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-white cursor-pointer"></div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    Sarah Johnson
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-red-600 border-2 border-white cursor-pointer"></div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    Michael Chen
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-teal-600 border-2 border-white cursor-pointer"></div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    Emma Williams
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm md:text-base text-gray-700">
                  "Exceptional work! They transformed our vision into reality."
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium text-base group shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <span>Start Your Project</span>
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
            </a>
            <a
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
                className="w-4 h-4"
              />
              <span>View Our Work</span>
            </a>
          </div>
        </div>

        {/* Desktop Layout - Two Column */}
        <div className="hidden lg:grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left Column - Hero Text */}
          <div>
            <h1 className="font-bold text-gray-900 mb-8 leading-[1.1] flex flex-wrap items-end text-7xl">
              <span>We design & develop</span>
              <br className="basis-full" />
              <span className="mb-2">digital products for</span>
              <br className="basis-full" />
              <TextRotate
                texts={words}
                mainClassName="bg-gray-700 text-white px-4 py-2 overflow-hidden justify-center rounded-2xl"
                splitLevelClassName="overflow-hidden pb-1"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
                splitBy="characters"
              />
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium text-lg group shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <span>Start Your Project</span>
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="https://www.figma.com/proto/2suiuZtzEbBlWxNeLYkRWA/Portfolio-Deck?node-id=2-12&t=flwIA4rbapQ5yvO2-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-full border-2 border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition-all duration-300 font-medium text-lg group hover:scale-105 active:scale-95"
              >
                <Image
                  src="/figma-1.png"
                  alt="Figma"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span>View Our Work</span>
              </a>
            </div>
          </div>

          {/* Right Column - Short Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
            Strategic design and development partner for businesses ready to scale. We deliver pixel-perfect interfaces and robust solutions that drive growth.
            </p>

            {/* Reviews/Testimonials */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-start gap-4">
                <div className="flex -space-x-2 shrink-0">
                  <div className="relative group">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-white cursor-pointer"></div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      Sarah Johnson
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-red-600 border-2 border-white cursor-pointer"></div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      Michael Chen
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-600 border-2 border-white cursor-pointer"></div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      Emma Williams
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-base text-gray-700">
                    "Exceptional work! They transformed our vision into reality."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <div className="relative w-full rounded-xl overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            >
              <source src="/agency-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 md:mt-20 lg:mt-24">
          {/* Title */}
          <h2 className="text-2xl md:text-4xl lg:text-[52px] font-bold text-gray-900 mb-8 md:mb-16 leading-tight max-w-5xl">
            <span className="text-gray-900">Our work speaks for itself. We don't just ship pixels,</span>
            <span className="text-gray-600"> we deliver results.</span>
          </h2>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-3">
            {/* Card 1 - Equal size (4 columns) */}
            <div className="bg-white rounded-2xl p-4 md:p-8 border border-gray-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] md:col-span-4">
              <div className="text-sm md:text-base text-gray-400 font-mono mb-12 md:mb-24">/01</div>
              <div className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-none">98%</div>
              <div className="text-sm md:text-lg text-gray-600 font-medium leading-relaxed">client satisfaction in post-project reviews.</div>
            </div>

            {/* Card 2 - Equal size (4 columns) */}
            <div className="bg-white rounded-2xl p-4 md:p-8 border border-gray-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] md:col-span-4">
              <div className="text-sm md:text-base text-gray-400 font-mono mb-12 md:mb-24">/02</div>
              <div className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-none">20+</div>
              <div className="text-sm md:text-lg text-gray-600 font-medium leading-relaxed">businesses served with our expertise across industries.</div>
            </div>

            {/* Card 3 - Equal size (4 columns) */}
            <div className="bg-white rounded-2xl p-4 md:p-8 border border-gray-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] md:col-span-4">
              <div className="text-sm md:text-base text-gray-400 font-mono mb-12 md:mb-24">/03</div>
              <div className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-none">Ahmedabad</div>
              <div className="text-sm md:text-lg text-gray-600 font-medium leading-relaxed">Based in Ahmedabad, India, we serve clients worldwide.</div>
            </div>

            {/* Card 4 - Equal (6 columns) */}
            <div className="bg-white rounded-2xl p-4 md:p-8 border border-gray-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] md:col-span-6">
              <div className="text-sm md:text-base text-gray-400 font-mono mb-12 md:mb-24">/04</div>
              <div className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-none">Talented Team</div>
              <div className="text-sm md:text-lg text-gray-600 font-medium leading-relaxed">We have a team of talented designers and developers who are dedicated to delivering the best possible products for their clients.</div>
            </div>

            {/* Card 5 - Equal (6 columns) */}
            <div className="bg-white rounded-2xl p-4 md:p-8 border border-gray-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] md:col-span-6">
              <div className="text-sm md:text-base text-gray-400 font-mono mb-12 md:mb-24">/05</div>
              <div className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-none">Your Kreative Partner</div>
              <div className="text-sm md:text-lg text-gray-600 font-medium leading-relaxed">Discovery, design, development, deployment, we handle every stage with the same obsessive attention to detail.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

