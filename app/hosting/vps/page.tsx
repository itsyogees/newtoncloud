'use client';

import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Cpu, Zap, Shield, Globe, Database, Terminal } from 'lucide-react';

const VPSHostingPage = () => {
  const plans = [
    {
      name: 'Beginner',
      price: '₹1450',
      desc: 'The perfect starting point for an online presence.',
      features: ['1 vCPU Core', '2 GB RAM', '40 GB NVMe Space', '1 TB Bandwidth', '1 Dedicated IP', 'Linux/Windows OS', 'Live Replication']
    },
    {
      name: 'Valued',
      price: '₹1800',
      desc: 'Balanced performance for growing apps.',
      features: ['2 vCPU Cores', '2 GB RAM', '80 GB NVMe Space', '2 TB Bandwidth', '1 Dedicated IP', '10GB DR Backup', '99.9% Uptime']
    },
    {
      name: 'Advanced',
      price: '₹2900',
      popular: true,
      desc: 'Great for high traffic sites and databases.',
      features: ['2 vCPU Cores', '4 GB RAM', '100 GB NVMe Space', '3 TB Bandwidth', '2 Dedicated IPs', '25GB DR Backup', 'Indian Server']
    },
    {
      name: 'Business',
      price: '₹5100',
      desc: 'Maximum performance for large scale projects.',
      features: ['4 vCPU Cores', '8 GB RAM', '150 GB NVMe Space', 'Unlimited Bandwidth', '2 Dedicated IPs', '25GB DR Backup', 'Indian Server']
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
