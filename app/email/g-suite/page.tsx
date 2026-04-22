'use client';

import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Mail, Globe, Users, Shield, Layout, Zap } from 'lucide-react';

const GoogleWorkspacePage = () => {
  const plans = [
    {
      name: 'Business Starter',
      price: '$6.00',
      desc: 'Collaborative productivity suite.',
      features: ['30GB Drive Storage', 'Custom Biz Email', '100 Participant Video', 'Standard Support', 'Security Controls']
    },
    {
      name: 'Business Standard',
      price: '$12.00',
      popular: true,
      desc: 'Enhanced storage & features.',
      features: ['2TB Drive Storage', 'Enhanced Meetings', 'Shared Drives', 'Smart Searches', 'Priority Support']
    },
    {
      name: 'Business Plus',
      price: '$18.00',
      desc: 'Advanced security & vault.',
      features: ['5TB Drive Storage', '500 Participant Video', 'Vault & Endpoint Mgmt', 'E-Discovery', 'VIP Management']
    }
  ];

  const features = [
    { title: 'Smart Collaboration', desc: 'Work together in Docs, Sheets, and Slides with real-time editing.', icon: Users },
    { title: 'Professional Mail', desc: 'Ad-free Gmail with your customized business domain name.', icon: Mail },
    { title: 'Large Cloud Drive', desc: 'Store, share, and access your work from any device with Google Drive.', icon: Globe },
    { title: 'Secure Meetings', desc: 'Conduct encrypted video meetings with high-quality Google Meet.', icon: Zap },
    { title: 'Enhanced Security', desc: 'Secure your corporate data with Google\'s advanced admin controls.', icon: Shield },
    { title: 'Productivity Tools', desc: 'Include Calendar, Chat, Forms, and Keep for a complete workspace.', icon: Layout }
  ];

  return (
    <ServicePageTemplate 
      title="Google" 
      subtitle="Workspace" 
      description="Empower your team with Google's collaborative tools. Secure, smart, and professional workspace solutions for modern business."
      plans={plans}
      features={features}
    />
  );
};

export default GoogleWorkspacePage;
