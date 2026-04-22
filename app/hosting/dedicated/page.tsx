'use client';

import React from 'react';
import HostingPage from '@/components/HostingPage';
import { Zap, Shield, Server, Headphones, Globe, Database } from 'lucide-react';

export default function DedicatedHosting() {
  const plans = [
    {
      name: 'D-1',
      price: '$149.99',
      desc: 'Perfect for large businesses and applications.',
      features: [
        '4 Cores / 8 Threads',
        '16 GB RAM',
        '500 GB NVMe Storage',
        'Unlimited Bandwidth',
        'Free SSL Certificate',
        'Full Root Access',
      ],
      popular: false,
    },
    {
      name: 'D-2',
      price: '$249.99',
      desc: 'Ideal for high-traffic sites and applications.',
      features: [
        '8 Cores / 16 Threads',
        '32 GB RAM',
        '1 TB NVMe Storage',
        'Unlimited Bandwidth',
        'Free SSL & Domain',
        'Full Root Access',
        'Priority Support',
      ],
      popular: true,
    },
    {
      name: 'D-3',
      price: '$399.99',
      desc: 'Maximum performance for intensive workloads.',
      features: [
        '16 Cores / 32 Threads',
        '64 GB RAM',
        '2 TB NVMe Storage',
        'Unlimited Bandwidth',
        'Free SSL & Domain',
        'Full Root Access',
        'Advanced Security',
        'VIP Support',
      ],
      popular: false,
    },
  ];

  const features = [
    { title: 'Ultra-Fast Performance', desc: 'Our servers are powered by NVMe SSD storage and LiteSpeed technology for maximum speed.', icon: Zap },
    { title: '99.9% Uptime Guarantee', desc: 'We guarantee your website will be online 99.9% of the time, backed by our SLA.', icon: Server },
    { title: 'Advanced Security', desc: 'Free SSL certificates, DDoS protection, and automated malware scanning for every site.', icon: Shield },
    { title: '24/7 Expert Support', desc: 'Our team of hosting experts is available around the clock to help you with any issues.', icon: Headphones },
    { title: 'Global Data Centers', desc: 'Choose from multiple server locations worldwide to ensure low latency for your visitors.', icon: Globe },
    { title: 'Automated Backups', desc: 'Never worry about losing data. We perform daily automated backups of all your files.', icon: Database },
  ];

  return (
    <HostingPage 
      title="Dedicated Servers" 
      subtitle="Experience the ultimate in power and control with our dedicated servers. Perfect for large businesses and applications that require maximum performance."
      plans={plans}
      features={features}
    />
  );
}
