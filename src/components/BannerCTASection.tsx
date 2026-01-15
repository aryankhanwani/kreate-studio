'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';

export default function BannerCTASection() {
  const [scrollY, setScrollY] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [smoothCursorPosition, setSmoothCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Check if cursor is within banner bounds
  const checkCursorInBanner = useCallback(() => {
    if (!bannerRef.current || !isHovering) return;
    
    const rect = bannerRef.current.getBoundingClientRect();
    const cursorY = smoothCursorPosition.y;
    
    // Check if cursor position is within the visible banner area
    const isInBounds = cursorY >= rect.top && cursorY <= rect.bottom;
    setIsCursorVisible(isInBounds);
  }, [isHovering, smoothCursorPosition.y]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Check cursor bounds on scroll
      checkCursorInBanner();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [checkCursorInBanner]);

  // Smooth cursor animation
  useEffect(() => {
    let animationFrameId: number;
    
    const animate = () => {
      setSmoothCursorPosition(prev => ({
        x: prev.x + (cursorPosition.x - prev.x) * 0.15,
        y: prev.y + (cursorPosition.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(animate);
    };
    
    if (isHovering) {
      animationFrameId = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [cursorPosition, isHovering]);

  // Update cursor visibility when smooth position changes
  useEffect(() => {
    checkCursorInBanner();
  }, [smoothCursorPosition, checkCursorInBanner]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovering(true);
    setIsCursorVisible(true);
    // Initialize smooth cursor position to current mouse position
    setSmoothCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsCursorVisible(false);
  };

  return (
    <Link href="/contact">
    <div
        ref={bannerRef}
      className="relative w-full overflow-hidden cursor-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
        {/* Custom Cursor - Smooth */}
        {isCursorVisible && (
        <div
            className="fixed pointer-events-none z-50 will-change-transform"
          style={{
              left: `${smoothCursorPosition.x}px`,
              top: `${smoothCursorPosition.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
            <div className="relative w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-center flex flex-col items-center justify-center gap-2">
            <svg
                  className="w-6 h-6 md:w-7 md:h-7 text-gray-900"
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
                <div className="text-gray-900 font-bold text-xs md:text-sm tracking-wider">
                  BOOK A CALL
                </div>
            </div>
          </div>
        </div>
      )}

        {/* Background */}
      <div
          className="absolute inset-0 bg-black"
        style={{
            transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
          }}></div>
        </div>
      </div>

      {/* Content */}
        <div className="relative z-10 py-24 md:py-36 lg:py-44">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight">
              Let&apos;s Build
            <br />
              <span className="text-white/60">Something Great</span>
          </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}


