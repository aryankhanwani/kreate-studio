import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsSection() {
  return (
    <div className="bg-white pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20 w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl lg:text-[52px] font-bold text-gray-900 mb-8 md:mb-16 leading-tight max-w-4xl">
          <span className="text-gray-900">Showcasing excellence through</span>
          <br />
          <span className="text-gray-600">innovative digital solutions.</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
          {/* Project 1 */}
          <Link href="/case-studies/k-couture" className="group">
            <div className="aspect-video bg-gray-100 mb-4 rounded-xl overflow-hidden relative">
              <Image
                src="/proj-11.png"
                alt="Project 1"
                fill
                className="object-cover object-[50%_100%] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">K - Couture Landing page</h3>
            <div className="flex items-center gap-2 text-base text-gray-500">
              <span>Web Design</span>
              <span>•</span>
              <span>Responsive Design</span>
              <span>•</span>
              <span>UI/UX</span>
            </div>
          </Link>

          {/* Project 2 */}
          <Link href="/case-studies/cyberguard" className="group">
            <div className="aspect-video bg-gray-100 mb-4 rounded-xl overflow-hidden relative">
              <Image
                src="/proj-2.png"
                alt="Project 2"
                fill
                className="object-cover object-[50%_4%] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">CyberGuard - AI threat Detection</h3>
            <div className="flex items-center gap-2 text-base text-gray-500">
              <span>UI/UX </span>
              <span>•</span>
              <span>Responsive Design</span>
              <span>•</span>
              <span>SaaS </span>
            </div>
          </Link>

          {/* Project 3 */}
          <Link href="/case-studies/senti" className="group">
            <div className="aspect-video bg-gray-100 mb-4 rounded-xl overflow-hidden relative">
              <Image
                src="/proj-3.png"
                alt="Project 3"
                fill
                className="object-cover object-[50%_0%] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">Senti - Smart Stablecoin wallet</h3>
            <div className="flex items-center gap-2 text-base text-gray-500">
              <span>Web3</span>
              <span>•</span>
              <span>App Design</span>
              <span>•</span>
              <span>UX Design</span>
            </div>
          </Link>

          {/* Project 4 */}
          <Link href="/case-studies/myopini" className="group">
            <div className="aspect-video bg-gray-100 mb-4 rounded-xl overflow-hidden relative">
              <Image
                src="/proj-4.png"
                alt="Project 4"
                fill
                className="object-cover object-[50%_0%] scale-120 group-hover:scale-125 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">Myopini - Opinion Trading Platform</h3>
            <div className="flex items-center gap-2 text-base text-gray-500">
              <span>App design</span>
              <span>•</span>
              <span>Design System</span>
              <span>•</span>
              <span>Branding </span>
            </div>
          </Link>
        </div>

        {/* View Our Work CTA */}
        <div className="flex justify-center">
          <Link
            href="https://www.figma.com/proto/2suiuZtzEbBlWxNeLYkRWA/Portfolio-Deck?node-id=2-12&t=flwIA4rbapQ5yvO2-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium group"
          >
            <span>View Our Work</span>
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
        </div>
      </div>
    </div>
  );
}

