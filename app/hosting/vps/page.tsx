'use client';

import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Cpu, Zap, Shield, Globe, Database, Terminal } from 'lucide-react';

const VPSHostingPage = () => {
  const plans = [
    {
      name: 'VPS Start',
      price: '$9.99',
      desc: 'Entry-level dedicated resources.',
      features: ['2 vCPU Cores', '4 GB RAM', '80 GB NVMe SSD', '1 TB Bandwidth', 'Root Access']
    },
    {
      name: 'VPS Power',
      price: '$24.99',
      popular: true,
      desc: 'Balanced performance for apps.',
      features: ['4 vCPU Cores', '8 GB RAM', '160 GB NVMe SSD', '4 TB Bandwidth', 'Daily Backups']
    },
    {
      name: 'VPS Beast',
      price: '$49.99',
      desc: 'High-compute enterprise VPS.',
      features: ['8 vCPU Cores', '16 GB RAM', '320 GB NVMe SSD', 'Unlimited Bandwidth', 'Priority Support']
    }
  ];

  const features = [
    { title: 'Full Root Access', desc: 'Total control over your server environment with administrative access.', icon: Terminal },
    { title: 'NVMe Storage', desc: 'Lightning-fast storage for high-performance applications and databases.', icon: Database },
    { title: 'KVM Virtualization', desc: 'Guaranteed resources and complete isolation with KVM technology.', icon: Cpu },
    { title: 'DDoS Protection', desc: 'Always-on enterprise-grade DDoS mitigation to keep you online.', icon: Shield },
    { title: 'Instant Deployment', desc: 'Your VPS is provisioned and ready to use in under 60 seconds.', icon: Zap },
    { title: 'Scale with Ease', desc: 'Upgrade your CPU, RAM, or storage at any time with zero downtime.', icon: Globe }
  ];

  return (
    <ServicePageTemplate 
      title="High-Performance" 
      subtitle="VPS Hosting" 
      description="Experience the power of dedicated resources with our premium VPS hosting. Fully scalable, secure, and ready for your next big project."
      plans={plans}
      features={features}
    />
  );
};

export default VPSHostingPage;
