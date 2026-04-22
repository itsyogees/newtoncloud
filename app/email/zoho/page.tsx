'use client';

import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Mail, Globe, Users, Shield, Zap, Lock } from 'lucide-react';

const ZohoMailPage = () => {
  const plans = [
    {
      name: 'Mail Lite',
      price: '$1.00',
      desc: 'Professional mail for businesses.',
      features: ['5GB Storage/User', 'Email Aliases', 'Offline Access', 'Mobile App', 'Standard Security']
    },
    {
      name: 'Mail Premium',
      price: '$4.00',
      popular: true,
      desc: 'Enhanced features & storage.',
      features: ['50GB Storage/User', 'Huge Attachments', 'White Labeling', 'Advanced Compliance', 'Priority Support']
    },
    {
      name: 'Workplace',
      price: '$6.00',
      desc: 'Complete productivity suite.',
      features: ['Mail + Productivity', 'Meeting & Chat', 'Remote Work Tools', 'File Management', 'Ad-Free Suite']
    }
  ];

  const features = [
    { title: 'Privacy First', desc: 'Secure, ad-free email that respects your personal and business data privacy.', icon: Lock },
    { title: 'Control Panel', desc: 'Extensive admin panel to manage domains, users, and security policies.', icon: Zap },
    { title: 'Email Retention', desc: 'Securely archive and retain emails for internal or legal audits.', icon: Shield },
    { title: 'Seamless Streams', desc: 'Share, comment, and collaborate with your team right inside your inbox.', icon: Users },
    { title: 'Global Connectivity', desc: 'Integrate with 50+ other Zoho apps to manage your entire business.', icon: Globe },
    { title: 'Mobile Productivity', desc: 'Stay connected on the move with Zoho\'s feature-rich mobile mail apps.', icon: Mail }
  ];

  return (
    <ServicePageTemplate 
      title="Professional" 
      subtitle="Zoho Mail" 
      description="Experience secure, ad-free business mail with Zoho. Affordable, reliable, and privacy-focused email solutions for growth."
      plans={plans}
      features={features}
    />
  );
};

export default ZohoMailPage;
