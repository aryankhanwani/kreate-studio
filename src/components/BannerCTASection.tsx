'use client';

import { useEffect, useState } from 'react';

export default function BannerCTASection() {
  const [scrollY, setScrollY] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div
      className="relative w-full overflow-hidden cursor-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Custom Cursor */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-900 absolute top-24 right-12 font-bold text-xs md:text-sm tracking-wider mb-1">
                BOOK A CALL
              </div>
            <svg
              className="absolute top-4 right-8 w-5 h-5 md:w-6 md:h-6 text-gray-900"
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
            </div>
          </div>
        </div>
      )}

      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Overlay Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 md:py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
            Ready to transform
            <br />
            your digital presence?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto">
            Let&apos;s create something extraordinary together. Your vision, our expertise.
          </p>
          {/* <a
            href="/contact"
            className="inline-flex items-center gap-0 bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium group shadow-2xl overflow-hidden hover:gap-2"
          >
            <span>Get Started Today</span>
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
          </a> */}
        </div>
      </div>
    </div>
  );
}


