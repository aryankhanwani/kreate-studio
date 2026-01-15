'use client';

import CaseStudyLayout from '@/components/CaseStudyLayout';

export default function KCoutureCaseStudy() {
  return (
    <CaseStudyLayout
      title="K - Couture Landing page"
      client="K-Couture"
      year="2024"
      industry="Fashion & Luxury"
      duration="6 Weeks"
      tags={['Web Design', 'Responsive Design', 'UI/UX']}
      heroImage="/proj-11.png"
      heroImagePosition="object-[50%_100%]"
      overview={{
        description: [
          'K-Couture approached us to create a digital presence that would match their prestigious reputation in the luxury fashion industry. The challenge was to design a landing page that not only showcased their exquisite collections but also conveyed the brand\'s heritage and exclusivity.',
          'Our design philosophy centered around creating an immersive experience that would captivate visitors from the moment they landed on the page. We employed sophisticated typography, carefully curated imagery, and subtle animations to create a sense of luxury and refinement.',
          'The project required a deep understanding of luxury brand aesthetics and how to translate the tactile experience of haute couture into a digital format. Every element was meticulously crafted to reflect the brand\'s commitment to excellence and attention to detail.',
        ],
      }}
      challenge={{
        title: 'The Challenge',
        description: 'Creating a digital experience that matches the tactile luxury of haute couture required careful attention to every detail. We needed to balance visual impact with performance, ensuring fast load times while maintaining the high-quality imagery essential to showcasing the fashion collections. The website had to work flawlessly across all devices, from desktop to mobile, without compromising the premium feel.',
      }}
      solution={{
        title: 'Our Approach',
        points: [
          'Implemented a minimalist design approach that puts the fashion collections front and center, allowing the garments to speak for themselves',
          'Created a responsive design system that maintains visual elegance across all devices, from large desktop displays to mobile phones',
          'Optimized images using next-gen formats and lazy loading techniques for fast loading without compromising quality',
          'Developed a custom typography system that reflects the brand\'s sophisticated identity and enhances readability',
          'Integrated smooth scroll animations and micro-interactions that add polish without overwhelming the user',
          'Built a modular component system for easy content updates and future scalability',
        ],
      }}
      contentSections={[
        {
          title: 'Design Process',
          content: [
            'We began with extensive research into luxury fashion websites and competitor analysis. This helped us identify opportunities to differentiate K-Couture while adhering to industry best practices.',
            'The design phase involved creating multiple mood boards and style explorations, working closely with the K-Couture team to ensure every decision aligned with their brand vision. We focused on creating a visual hierarchy that guides users naturally through the content.',
          ],
          image: '/proj-11.png',
          imagePosition: 'object-[50%_50%]',
        },
        {
          title: 'Technical Implementation',
          content: [
            'The website was built using modern web technologies including Next.js for optimal performance and SEO. We implemented advanced image optimization techniques to ensure fast loading times without sacrificing the high-quality visuals essential for a luxury brand.',
            'Special attention was paid to accessibility, ensuring the site meets WCAG 2.1 AA standards while maintaining the sophisticated aesthetic. The site also includes comprehensive analytics integration to track user behavior and inform future improvements.',
          ],
        },
        {
          title: 'Brand Experience',
          content: [
            'Every interaction on the site was designed to reinforce K-Couture\'s brand values of elegance, exclusivity, and craftsmanship. From the moment a user lands on the page, they\'re immersed in the world of haute couture through carefully orchestrated visual storytelling.',
            'The navigation is intuitive yet refined, allowing users to explore collections effortlessly while maintaining a sense of discovery and delight. Subtle animations and transitions add a layer of sophistication without distracting from the content.',
          ],
          image: '/proj-11.png',
          imagePosition: 'object-[50%_20%]',
        },
      ]}
      results={{
        metrics: [
          { metric: '150%', label: 'Increase in Engagement' },
          { metric: '2.5x', label: 'Higher Conversion Rate' },
          { metric: '45%', label: 'Longer Session Duration' },
        ],
      }}
      moreProjects={[
        {
          title: 'CyberGuard - AI threat Detection',
          href: '/case-studies/cyberguard',
          image: '/proj-2.png',
          imagePosition: 'object-[50%_4%]',
          tags: ['UI/UX', 'Responsive Design', 'SaaS'],
        },
        {
          title: 'Senti - Smart Stablecoin wallet',
          href: '/case-studies/senti',
          image: '/proj-3.png',
          imagePosition: 'object-[50%_0%]',
          tags: ['Web3', 'App Design', 'UX Design'],
        },
      ]}
    />
  );
}
