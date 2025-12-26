'use client';

export default function ServicesSection() {
  const services = [
    {
      title: 'Brand Identity',
      description: 'Create a trusted, global brand with our expert designs and strategies. We help improve your brand\'s visibility, credibility, and connection.',
      services: [
        'Motion graphics design',
        'Graphic design',
        'Startup branding',
        'Brand identity design',
        'Corporate identity design',
        'Brand strategy',
      ],
      cta: 'Build your brand',
      bgColor: 'bg-[#8B5CF6]', // Purple
      textColor: 'text-white',
      descColor: 'text-white/90',
      servicesColor: 'text-white/80',
      btnBg: 'bg-white',
      btnText: 'text-gray-900',
      image: '/service-1.jpg',
    },
    {
      title: 'Web Development',
      description: 'Build powerful, scalable web applications that drive results. Our full-stack developers create seamless experiences that convert visitors.',
      services: [
        'Full-stack development',
        'E-commerce platforms',
        'Progressive web apps',
        'API development',
        'CMS integration',
        'Performance optimization',
      ],
      cta: 'Start your project',
      bgColor: 'bg-[#14B8A6]', // Teal
      textColor: 'text-white',
      descColor: 'text-white/90',
      servicesColor: 'text-white/80',
      btnBg: 'bg-white',
      btnText: 'text-gray-900',
      image: '/service-2.jpg',
    },
    {
      title: 'Mobile Apps',
      description: 'Launch native and cross-platform mobile apps that users love. From concept to App Store, we deliver polished mobile experiences.',
      services: [
        'iOS development',
        'Android development',
        'React Native apps',
        'Flutter applications',
        'App store optimization',
        'Mobile UX design',
      ],
      cta: 'Launch your app',
      bgColor: 'bg-[#F97316]', // Orange
      textColor: 'text-white',
      descColor: 'text-white/90',
      servicesColor: 'text-white/80',
      btnBg: 'bg-white',
      btnText: 'text-gray-900',
      image: '/service-3.jpg',
    },
    {
      title: 'UI/UX Design',
      description: 'Design intuitive, beautiful interfaces that delight users and drive engagement. Our research-backed approach ensures your product stands out.',
      services: [
        'User research',
        'Wireframing & prototyping',
        'Design systems',
        'Usability testing',
        'Interface design',
        'Interaction design',
      ],
      cta: 'Design with us',
      bgColor: 'bg-[#3B82F6]', // Blue
      textColor: 'text-white',
      descColor: 'text-white/90',
      servicesColor: 'text-white/80',
      btnBg: 'bg-white',
      btnText: 'text-gray-900',
      image: '/service-4.jpg',
    },
    {
      title: 'Digital Marketing',
      description: 'Amplify your reach with data-driven marketing strategies. We help startups and scale-ups acquire customers and grow their revenue.',
      services: [
        'SEO optimization',
        'Content marketing',
        'Social media strategy',
        'Email campaigns',
        'PPC advertising',
        'Analytics & reporting',
      ],
      cta: 'Grow your reach',
      bgColor: 'bg-[#F43F5E]', // Rose
      textColor: 'text-white',
      descColor: 'text-white/90',
      servicesColor: 'text-white/80',
      btnBg: 'bg-white',
      btnText: 'text-gray-900',
      image: '/service-5.jpg',
    },
    {
      title: 'Product Strategy',
      description: 'Transform your vision into a winning product roadmap. We help you validate ideas, prioritize features, and build products that scale.',
      services: [
        'Market research',
        'Product roadmapping',
        'MVP development',
        'Feature prioritization',
        'User story mapping',
        'Growth strategy',
      ],
      cta: 'Plan your product',
      bgColor: 'bg-[#06B6D4]', // Cyan
      textColor: 'text-white',
      descColor: 'text-white/90',
      servicesColor: 'text-white/80',
      btnBg: 'bg-white',
      btnText: 'text-gray-900',
      image: '/service-6.jpg',
    },
  ];

  return (
    <div className="bg-white w-full">
      {/* Header Section with padding */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 md:mb-12">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-4xl lg:text-[52px] font-bold text-gray-900 leading-tight">
              Services designed to scale your <br className="hidden md:block" />
              <span className="text-gray-500">digital transformation.</span>
            </h2>
          </div>
          
          <a
            href="/services"
            className="inline-flex items-center gap-0 bg-gray-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium text-base md:text-lg group overflow-hidden hover:gap-2 shadow-lg hover:scale-105 active:scale-95 w-fit shrink-0 mb-2"
          >
            <span>View All Services</span>
            <svg
              className="w-0 h-5 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300"
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
          </a>
        </div>
      </div>

      {/* Services Cards - Full Width with Sticky Scroll */}
      <div className="relative">
        {services.map((service, index) => (
          <div 
            key={index}
            className="sticky top-0"
            style={{ 
              top: `0px`,
              zIndex: index + 1
            }}
          >
            <div className={`${service.bgColor} py-8 md:py-12 lg:py-14 w-full`}>
              <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
                  {/* Left - Title, Description and CTA */}
                  <div className="lg:col-span-4">
                    <h3 className={`text-3xl md:text-3xl lg:text-4xl font-bold ${service.textColor} mb-2 md:mb-3`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm md:text-lg ${service.descColor} leading-relaxed mb-3 md:mb-5`}>
                      {service.description}
                    </p>
                    <button className={`inline-flex items-center gap-0 ${service.btnBg} ${service.btnText} px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:opacity-90 transition-all duration-300 font-medium hover:gap-2 text-sm md:text-base group cursor-pointer`}>
                      <span>{service.cta}</span>
                      <svg
                        className="w-0 h-4 md:h-5 opacity-0 group-hover:w-4 group-hover:md:w-5 group-hover:opacity-100 transition-all duration-300"
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
                    </button>
                  </div>

                  {/* Center - Services List */}
                  <div className="lg:col-span-4">
                    <div className="grid grid-cols-1 gap-1.5 md:gap-2.5">
                      {service.services.map((item, idx) => (
                        <div key={idx} className={`text-sm md:text-lg ${service.servicesColor} py-0.5 md:py-1`}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right - Image */}
                  <div className="lg:col-span-4">
                    <div className="relative aspect-4/3 bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-white/20">
                      <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
                      {/* Placeholder for image */}
                      <div className={`w-full h-full flex items-center justify-center ${service.servicesColor} text-sm`}>
                        Service Image
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
