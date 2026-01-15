'use client';

import CaseStudyLayout from '@/components/CaseStudyLayout';

export default function SentiCaseStudy() {
  return (
    <CaseStudyLayout
      title="Senti - Smart Stablecoin wallet"
      client="Senti"
      year="2024"
      industry="Web3 & Fintech"
      duration="10 Weeks"
      tags={['Web3', 'App Design', 'UX Design']}
      heroImage="/proj-3.png"
      heroImagePosition="object-[50%_0%]"
      overview={{
        description: [
          'Senti set out to create a cryptocurrency wallet that would make stablecoin management accessible to everyone, from crypto enthusiasts to traditional finance users. The goal was to bridge the gap between complex blockchain technology and everyday usability.',
          'We designed a mobile-first experience that prioritizes clarity, security, and speed. The interface guides users through complex transactions with confidence while maintaining the transparency and control that crypto users expect.',
          'The project required extensive research into user behavior patterns in both traditional banking apps and cryptocurrency wallets. We needed to create an experience that felt familiar to newcomers while providing the advanced features that experienced crypto users demand.',
        ],
      }}
      challenge={{
        title: 'The Challenge',
        description: 'Cryptocurrency wallets are often intimidating for new users while lacking advanced features for experienced traders. We needed to create an interface that serves both audiences without compromising on security or functionality. Additionally, the volatile nature of crypto markets meant users needed real-time information and the ability to act quickly on opportunities.',
      }}
      solution={{
        title: 'Our Approach',
        points: [
          'Designed an intuitive onboarding flow that educates users about stablecoins and blockchain basics in simple terms',
          'Created a clean transaction interface with real-time fee estimates and clear confirmation steps',
          'Implemented biometric security with clear visual feedback, making security features feel seamless rather than intrusive',
          'Built a comprehensive portfolio view with price charts, analytics, and transaction history',
          'Developed a smart notification system that alerts users to important events without overwhelming them',
          'Integrated educational tooltips and help resources throughout the app for continuous learning',
        ],
      }}
      contentSections={[
        {
          title: 'User Onboarding',
          content: [
            'We created a progressive onboarding experience that introduces concepts gradually. New users start with basic wallet functions and are introduced to more advanced features as they become comfortable with the platform.',
            'The onboarding includes interactive tutorials that let users practice with small amounts before committing to larger transactions. This hands-on approach builds confidence and reduces the anxiety often associated with cryptocurrency.',
          ],
          image: '/proj-3.png',
          imagePosition: 'object-[50%_20%]',
        },
        {
          title: 'Transaction Experience',
          content: [
            'Every transaction is broken down into clear, understandable steps. Users see exactly what will happen, how much it will cost, and how long it will take before they commit. We eliminated technical jargon in favor of plain language explanations.',
            'The app provides real-time feedback during transactions, showing progress and estimated completion times. If network congestion causes delays, users are informed proactively with clear explanations and options.',
          ],
        },
        {
          title: 'Security & Trust',
          content: [
            'Security features are presented as helpful protections rather than obstacles. Biometric authentication is quick and seamless, while still providing bank-level security. Users can customize their security settings based on their comfort level.',
            'We implemented clear visual indicators showing when the app is performing security checks, building trust through transparency. Recovery options are explained upfront, ensuring users never feel locked out of their funds.',
          ],
          image: '/proj-3.png',
          imagePosition: 'object-[50%_40%]',
        },
        {
          title: 'Portfolio Management',
          content: [
            'The portfolio view provides a comprehensive overview of holdings with beautiful, easy-to-read charts. Users can track performance over different time periods and see how their stablecoin holdings compare to other assets.',
            'Advanced users can access detailed analytics and transaction history, while casual users see a simplified view focused on the most important information. The interface adapts to user expertise level over time.',
          ],
          image: '/proj-3.png',
          imagePosition: 'object-[50%_70%]',
        },
      ]}
      results={{
        metrics: [
          { metric: '50K+', label: 'Active Users in 3 Months' },
          { metric: '4.8★', label: 'App Store Rating' },
          { metric: '85%', label: 'User Retention Rate' },
        ],
      }}
      moreProjects={[
        {
          title: 'Myopini - Opinion Trading Platform',
          href: '/case-studies/myopini',
          image: '/proj-4.png',
          imagePosition: 'object-[50%_0%] scale-120',
          tags: ['App design', 'Design System', 'Branding'],
        },
        {
          title: 'K - Couture Landing page',
          href: '/case-studies/k-couture',
          image: '/proj-11.png',
          imagePosition: 'object-[50%_100%]',
          tags: ['Web Design', 'Responsive Design', 'UI/UX'],
        },
      ]}
    />
  );
}
