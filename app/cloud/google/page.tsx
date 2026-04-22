'use client';

import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Cloud, Zap, Shield, Globe, Database, Headphones } from 'lucide-react';

const GoogleCloudPage = () => {
  const plans = [
    {
      name: 'Google Lite',
      price: '$45.00',
      desc: 'Smart instances for smaller apps.',
      features: ['Compute Engine', 'Cloud Storage', 'Cloud DNS', '99.9% Uptime', 'Standard Support']
    },
    {
      name: 'Google Premium',
      price: '$135.00',
      popular: true,
      desc: 'Optimized for high-speed apps.',
      features: ['Auto-Scale Groups', 'BigQuery Access', 'Cloud SQL', 'Global Load Balancing', 'Priority Support']
    },
    {
      name: 'Google Global',
      price: '$520.00',
      desc: 'Multi-region global scale.',
      features: ['Anthos (Hybrid)', 'AI Platform', 'Custom VPC', 'Security Command Center', 'VIP Engineering']
    }
  ];

  const features = [
    { title: 'Blazing Fast Speed', desc: 'Google\'s premium network ensures minimal latency for all your users.', icon: Zap },
    { title: 'Scalable Database', desc: 'Managed Spanner and Cloud SQL solutions for any data volume.', icon: Database },
    { title: 'Smart Infrastructure', desc: 'Leverage Google\'s AI and ML capabilities in your business apps.', icon: Cloud },
    { title: 'Global Load Balance', desc: 'Distribute your traffic globally with a single Anycast IP.', icon: Globe },
    { title: 'Zero Trust Security', desc: 'Google-grade security protocols managed and monitored 24/7.', icon: Shield },
    { title: 'Dedicated Support', desc: 'Direct access to cloud engineers who understand your GC infrastructure.', icon: Headphones }
  ];

  return (
    <ServicePageTemplate 
      title="Managed Google" 
      subtitle="Cloud Platform" 
      description="Run your applications on the same infrastructure that powers Google. Innovate faster with our managed Google Cloud services."
      plans={plans}
      features={features}
    />
  );
};

export default GoogleCloudPage;
