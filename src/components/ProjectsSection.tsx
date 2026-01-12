import Link from 'next/link';

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
          <div>
            <div className="aspect-video bg-gray-100 mb-4 rounded-xl flex items-center justify-center">
              <span className="text-4xl md:text-6xl font-bold text-gray-300">proj-1</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Project Title 1</h3>
            <div className="flex items-center gap-2 text-base text-gray-500">
              <span>Web Design</span>
              <span>•</span>
              <span>Branding</span>
              <span>•</span>
              <span>UI/UX</span>
            </div>
          </div>

          {/* Project 2 */}
          <div>
            <div className="aspect-video bg-gray-100 mb-4 rounded-xl flex items-center justify-center">
              <span className="text-4xl md:text-6xl font-bold text-gray-300">proj-2</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Project Title 2</h3>
            <div className="flex items-center gap-2 text-base text-gray-500">
              <span>Mobile App</span>
              <span>•</span>
              <span>Development</span>
              <span>•</span>
              <span>iOS</span>
            </div>
          </div>

          {/* Project 3 */}
          <div>
            <div className="aspect-video bg-gray-100 mb-4 rounded-xl flex items-center justify-center">
              <span className="text-4xl md:text-6xl font-bold text-gray-300">proj-3</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Project Title 3</h3>
            <div className="flex items-center gap-2 text-base text-gray-500">
              <span>E-commerce</span>
              <span>•</span>
              <span>Platform</span>
              <span>•</span>
              <span>SaaS</span>
            </div>
          </div>

          {/* Project 4 */}
          <div>
            <div className="aspect-video bg-gray-100 mb-4 rounded-xl flex items-center justify-center">
              <span className="text-4xl md:text-6xl font-bold text-gray-300">proj-4</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Project Title 4</h3>
            <div className="flex items-center gap-2 text-base text-gray-500">
              <span>Dashboard</span>
              <span>•</span>
              <span>Analytics</span>
              <span>•</span>
              <span>Data Visualization</span>
            </div>
          </div>
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

