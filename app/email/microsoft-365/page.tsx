'use client';

import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Mail, Shield, Layout, Globe, Users, Headphones } from 'lucide-react';

const Microsoft365Page = () => {
  const plans = [
    {
      name: 'M365 Business Basic',
      price: '$6.00',
      desc: 'Online versions of Office apps.',
      features: ['Teams & Outlook', '1 TB Cloud Storage', 'Exchange Email', 'Phishing Protection', 'Web & Mobile Apps']
    },
    {
      name: 'M365 Business Standard',
      price: '$12.50',
      popular: true,
      desc: 'Most popular for small business.',
      features: ['Desktop Office Apps', '1 TB Cloud Storage', 'Teams & Webinars', 'Advanced Security', 'Premium Management']
    },
    {
      name: 'M365 Business Premium',
      price: '$22.00',
      desc: 'Advanced security for large teams.',
      features: ['Standard Features +', 'Intune & Azure Info', 'Advanced Cyber Protection', 'Shared PC Support', 'VIP Support']
    }
  ];

  const features = [
    { title: 'Full Office Suite', desc: 'Work with the tools you know: Word, Excel, PowerPoint, and more.', icon: Layout },
    { title: 'Professional Email', desc: 'Get an @yourcompany email address that builds brand authority.', icon: Mail },
    { title: 'Seamless Teams', desc: 'Chat, call, and collaborate in real-time with Microsoft Teams.', icon: Users },
    { title: 'Enterprise Security', desc: 'Secure your business data across all devices with Microsoft security.', icon: Shield },
    { title: 'Cloud Powered', desc: 'Access your files from anywhere with 1TB of OneDrive cloud storage.', icon: Globe },
    { title: 'Managed Onboarding', desc: 'Our team helps you migrate your data to Microsoft 365 for free.', icon: Headphones }
  ];

  return (
    <ServicePageTemplate 
      title="Microsoft 365" 
      subtitle="for Business" 
      description="Modernize your productivity with the world's most popular business tools. Managed Microsoft 365 solutions for teams of all sizes."
      plans={plans}
      features={features}
    />
  );
};

export default Microsoft365Page;
