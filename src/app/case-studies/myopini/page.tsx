'use client';

import CaseStudyLayout from '@/components/CaseStudyLayout';

export default function MyopiniCaseStudy() {
  return (
    <CaseStudyLayout
      title="Myopini - Opinion Trading Platform"
      client="Myopini"
      year="2024"
      industry="Social & Trading"
      duration="12 Weeks"
      tags={['App design', 'Design System', 'Branding']}
      heroImage="/proj-4.png"
      heroImagePosition="object-[50%_0%] scale-120"
      overview={{
        description: [
          'Myopini envisioned a platform where users could trade their opinions on various topics, from sports to politics to entertainment. The challenge was to create a trading experience that felt exciting and social while maintaining the seriousness of financial transactions.',
          'We developed a complete brand identity and design system from scratch, creating a bold visual language that stands out in the crowded prediction market space. The interface balances playfulness with functionality, making opinion trading accessible to everyone.',
          'The project was unique in that it required us to merge concepts from social media, trading platforms, and gaming. We needed to create an experience that felt familiar yet innovative, encouraging users to engage daily while building a community around shared predictions.',
        ],
      }}
      challenge={{
        title: 'The Challenge',
        description: 'Prediction markets can be complex and intimidating. We needed to create an experience that felt more like social media than a trading platform, while still providing the depth and tools that serious traders require. The platform had to encourage both casual participation and serious analysis, serving users with vastly different goals and expertise levels.',
      }}
      solution={{
        title: 'Our Solution',
        points: [
          'Created a vibrant brand identity with bold colors and engaging illustrations that make the platform feel approachable',
          'Designed a social feed that makes opinion trading feel like a community activity, with likes, comments, and sharing',
          'Built a comprehensive design system for consistent experience across iOS, Android, and web platforms',
          'Implemented gamification elements including achievements, leaderboards, and streaks to increase engagement',
          'Developed an intuitive trading interface that simplifies complex predictions into simple yes/no questions',
          'Created educational content and tooltips that help new users understand prediction markets',
        ],
      }}
      contentSections={[
        {
          title: 'Brand Identity',
          content: [
            'We started with extensive brand exploration, testing different visual directions with target users. The final brand identity uses bold, energetic colors and playful illustrations that make prediction markets feel accessible and fun.',
            'The logo and visual system were designed to work across all platforms and contexts, from app icons to social media posts. Every element reinforces the brand\'s personality: confident, social, and slightly rebellious.',
          ],
          image: '/proj-4.png',
          imagePosition: 'object-[50%_10%] scale-120',
        },
        {
          title: 'Social Features',
          content: [
            'The platform\'s social feed is the heart of the experience. Users can see what topics are trending, what their friends are predicting, and join conversations around predictions. This creates a sense of community and makes the platform habit-forming.',
            'We implemented features like prediction sharing, which allows users to show off their successful predictions on social media. This not only provides social proof but also serves as organic marketing for the platform.',
          ],
        },
        {
          title: 'Trading Interface',
          content: [
            'The trading interface was designed to be as simple as possible while still providing necessary information. Users can see the current odds, potential payout, and related predictions all on one screen. Complex market mechanics are hidden behind simple interactions.',
            'We created visual representations of market sentiment using dynamic charts and graphs that update in real-time. Users can quickly understand market trends without needing to analyze raw data.',
          ],
          image: '/proj-4.png',
          imagePosition: 'object-[50%_30%] scale-120',
        },
        {
          title: 'Gamification',
          content: [
            'Gamification elements are woven throughout the experience. Users earn badges for various achievements, climb leaderboards, and maintain prediction streaks. These elements provide motivation beyond financial gains.',
            'The achievement system was carefully designed to reward both accuracy and participation. New users can earn achievements quickly to build confidence, while experienced users have long-term goals to work toward.',
          ],
        },
        {
          title: 'Design System',
          content: [
            'We built a comprehensive design system that ensures consistency across all platforms. The system includes components for every common pattern, from buttons and forms to complex trading interfaces.',
            'The design system is documented with usage guidelines, code examples, and accessibility standards. This enables the development team to build new features quickly while maintaining quality and consistency.',
          ],
          image: '/proj-4.png',
          imagePosition: 'object-[50%_60%] scale-120',
        },
      ]}
      results={{
        metrics: [
          { metric: '100K+', label: 'Users in First Month' },
          { metric: '2M+', label: 'Opinions Traded' },
          { metric: '70%', label: 'Daily Active Users' },
        ],
      }}
      moreProjects={[
        {
          title: 'K - Couture Landing page',
          href: '/case-studies/k-couture',
          image: '/proj-11.png',
          imagePosition: 'object-[50%_100%]',
          tags: ['Web Design', 'Responsive Design', 'UI/UX'],
        },
        {
          title: 'CyberGuard - AI threat Detection',
          href: '/case-studies/cyberguard',
          image: '/proj-2.png',
          imagePosition: 'object-[50%_4%]',
          tags: ['UI/UX', 'Responsive Design', 'SaaS'],
        },
      ]}
    />
  );
}
