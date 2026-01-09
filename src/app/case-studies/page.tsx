import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const projects = [
  {
    id: 1,
    title: 'Project Title 1',
    tags: ['Web Design', 'Branding', 'UI/UX'],
    gradient: 'from-blue-100 to-purple-100',
  },
  {
    id: 2,
    title: 'Project Title 2',
    tags: ['Mobile App', 'Development', 'iOS'],
    gradient: 'from-pink-100 to-red-100',
  },
  {
    id: 3,
    title: 'Project Title 3',
    tags: ['E-commerce', 'Platform', 'SaaS'],
    gradient: 'from-green-100 to-teal-100',
  },
  {
    id: 4,
    title: 'Project Title 4',
    tags: ['Dashboard', 'Analytics', 'Data Visualization'],
    gradient: 'from-orange-100 to-yellow-100',
  },
  {
    id: 5,
    title: 'Project Title 5',
    tags: ['Web Development', 'API Integration', 'Cloud'],
    gradient: 'from-indigo-100 to-blue-100',
  },
  {
    id: 6,
    title: 'Project Title 6',
    tags: ['Mobile App', 'Android', 'React Native'],
    gradient: 'from-purple-100 to-pink-100',
  },
];

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Case Studies Section */}
      <div className="bg-white pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20 w-full">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-2xl md:text-4xl lg:text-[52px] font-bold text-gray-900 mb-8 md:mb-16 leading-tight max-w-4xl">
            <span className="text-gray-900">Showcasing excellence through</span>
            <br />
            <span className="text-gray-600">innovative digital solutions.</span>
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {projects.map((project) => (
              <div key={project.id}>
                <div className={`aspect-video bg-gradient-to-br ${project.gradient} mb-4 rounded-lg`}></div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <div className="flex items-center gap-2 text-base text-gray-500">
                  <span>{project.tags[0]}</span>
                  <span>•</span>
                  <span>{project.tags[1]}</span>
                  <span>•</span>
                  <span>{project.tags[2]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
