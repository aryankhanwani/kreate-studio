'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    type: 'overall',
    rating: 4.9,
    stars: 5,
  },
  {
    type: 'review',
    text: "Exceptional work! They transformed our vision into reality with incredible attention to detail.",
    name: "Sarah Johnson",
    image: "/testimonial-1.jpg",
  },
  {
    type: 'review',
    text: "The team delivered beyond our expectations. Professional, creative, and results-driven.",
    name: "Michael Chen",
    image: "/testimonial-2.jpg",
  },
  {
    type: 'review',
    text: "Outstanding service from start to finish. Our project was completed on time and exceeded all goals.",
    name: "Emma Williams",
    image: "/testimonial-3.jpg",
  },
  {
    type: 'review',
    text: "Working with them was a game-changer. Their expertise and dedication are unmatched.",
    name: "David Rodriguez",
    image: "/testimonial-4.jpg",
  },
  {
    type: 'review',
    text: "Simply the best digital agency we've worked with. They understand our needs perfectly.",
    name: "Lisa Anderson",
    image: "/testimonial-5.jpg",
  },
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20 w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with Chevrons */}
        <div className="flex items-center justify-between mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-[52px] font-bold text-gray-900 leading-tight max-w-4xl flex-1 pr-4">
            <span className="text-gray-900">What our clients say</span>
            <br />
            <span className="text-gray-600">about working with us.</span>
          </h2>
          
          {/* Chevron Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center group hover:border-gray-900"
              aria-label="Scroll left"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-gray-900 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center group hover:border-gray-900"
              aria-label="Scroll right"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-gray-900 transition-colors"
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
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Cards */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollability}
          className="flex overflow-x-auto gap-0 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="shrink-0 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px]"
            >
              {testimonial.type === 'overall' ? (
                // Overall Rating Card
                <div className="bg-white p-5 sm:p-6 md:p-8 border border-gray-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] h-[380px] md:h-[420px] lg:h-[460px]">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                      {testimonial.rating}
                    </div>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 md:w-7 md:h-7 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-base md:text-lg text-gray-600 text-center">
                      Overall Rating
                    </p>
                  </div>
                </div>
              ) : (
                // Review Card
                <div className="bg-white p-5 sm:p-6 md:p-8 border border-gray-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] h-[380px] md:h-[420px] lg:h-[460px]">
                  <div className="flex flex-col h-full">
                    <div className="flex-1 mb-4 sm:mb-6">
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed">
                        &quot;{testimonial.text}&quot;
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-white shrink-0 overflow-hidden">
                        {testimonial.image && (
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={56}
                            height={56}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div>
                        <p className="text-base md:text-lg font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

