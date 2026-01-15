'use client';

import CaseStudyLayout from '@/components/CaseStudyLayout';

export default function CyberGuardCaseStudy() {
  return (
    <CaseStudyLayout
      title="CyberGuard - AI threat Detection"
      client="CyberGuard"
      year="2024"
      industry="Cybersecurity & SaaS"
      duration="8 Weeks"
      tags={['UI/UX', 'Responsive Design', 'SaaS']}
      heroImage="/proj-2.png"
      heroImagePosition="object-[50%_4%]"
      overview={{
        description: [
          'CyberGuard needed a complete redesign of their threat detection platform to make complex security data more accessible and actionable for enterprise security teams. The existing interface was cluttered and difficult to navigate during critical security incidents.',
          'We designed an intuitive dashboard that prioritizes real-time threat visualization, streamlined workflows, and quick access to critical security information. The new interface reduces response time and improves team collaboration during security events.',
          'The project required balancing the need for comprehensive data display with clarity and usability. Security professionals need to make split-second decisions, so every element of the interface was optimized for speed and clarity.',
        ],
      }}
      challenge={{
        title: 'The Challenge',
        description: 'Security teams needed to process vast amounts of data quickly during critical incidents. The challenge was to create an interface that could display complex information clearly while maintaining fast performance and enabling rapid decision-making. The platform had to serve both junior analysts and experienced security professionals, each with different needs and expertise levels.',
      }}
      solution={{
        title: 'Our Solution',
        points: [
          'Designed a real-time threat visualization dashboard with AI-powered insights that highlight the most critical threats',
          'Created a streamlined incident response workflow that reduces time-to-action by 60% through intelligent automation',
          'Implemented dark mode as the default for extended monitoring sessions, reducing eye strain for security teams',
          'Built a comprehensive design system ensuring consistent enterprise experience across all modules',
          'Developed customizable views allowing teams to configure dashboards based on their specific security needs',
          'Integrated contextual help and onboarding flows to reduce training time for new team members',
        ],
      }}
      contentSections={[
        {
          title: 'Information Architecture',
          content: [
            'We conducted extensive user research with security professionals to understand their workflows and pain points. This research revealed that the most critical information was often buried under multiple clicks, causing dangerous delays during incidents.',
            'Our new information architecture brings the most important data to the surface, using a card-based system that allows for quick scanning and prioritization. Threats are automatically ranked by severity, with AI-powered recommendations for response actions.',
          ],
          image: '/proj-2.png',
          imagePosition: 'object-[50%_30%]',
        },
        {
          title: 'Real-Time Monitoring',
          content: [
            'The dashboard features live threat feeds with automatic updates, eliminating the need for manual refreshing. Security teams can see threats as they emerge, with visual indicators showing the progression and potential impact of each threat.',
            'We implemented smart filtering and search capabilities that allow teams to quickly drill down into specific types of threats or affected systems. The interface adapts based on the severity of active threats, automatically highlighting critical items.',
          ],
        },
        {
          title: 'Collaborative Response',
          content: [
            'Security incidents often require coordination between multiple team members. We built collaboration features directly into the platform, allowing teams to assign tasks, share notes, and track response progress in real-time.',
            'The platform includes a comprehensive audit trail showing all actions taken during an incident, which is crucial for post-incident analysis and compliance reporting. Team members can see who\'s working on what, preventing duplicate efforts.',
          ],
          image: '/proj-2.png',
          imagePosition: 'object-[50%_60%]',
        },
      ]}
      results={{
        metrics: [
          { metric: '60%', label: 'Faster Threat Response' },
          { metric: '3.5x', label: 'Improved User Satisfaction' },
          { metric: '40%', label: 'Reduced Training Time' },
        ],
      }}
      moreProjects={[
        {
          title: 'Senti - Smart Stablecoin wallet',
          href: '/case-studies/senti',
          image: '/proj-3.png',
          imagePosition: 'object-[50%_0%]',
          tags: ['Web3', 'App Design', 'UX Design'],
        },
        {
          title: 'Myopini - Opinion Trading Platform',
          href: '/case-studies/myopini',
          image: '/proj-4.png',
          imagePosition: 'object-[50%_0%] scale-120',
          tags: ['App design', 'Design System', 'Branding'],
        },
      ]}
    />
  );
}
