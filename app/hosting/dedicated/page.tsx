'use client';

import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Zap, Shield, Server, Headphones, Globe, Database } from 'lucide-react';

export default function DedicatedHosting() {
  const plans = [
    {
      name: 'NDC_BASIC',
      price: '₹7999',
      desc: 'Entry-level dedicated power.',
      features: ['Intel Xeon Dual Core', '4 GB RAM', '1 TB Disk Space', '500 GB Bandwidth', '2 Dedicated IPs', 'Choice of OS']
    },
    {
      name: 'NDC_STANDARD',
      price: '₹12999',
      popular: true,
      desc: 'Balanced performance for apps.',
      features: ['Intel Xeon Dual Core', '12 GB DDR3 RAM', '1.5 TB Disk Space', '1 TB Bandwidth', '2 Dedicated IPs', 'RAID Setup']
    },
    {
      name: 'C_PROFESSION',
      price: '₹15999',
      desc: 'High-compute professional server.',
      features: ['2x Intel Xeon Dual Core', '20 GB DDR3 RAM', '2 TB Disk Space', '1.5 TB Bandwidth', '2 Dedicated IPs', 'Hardware RAID']
    },
    {
      name: 'NDC_ENTERPRISE',
      price: '₹19999',
      desc: 'Maximum performance enterprise server.',
      features: ['2x Intel Xeon Dual Core', '32 GB DDR3 RAM', '3 TB Disk Space', '2 TB Bandwidth', '2 Dedicated IPs', 'Hardware RAID']
    }
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
    <ServicePageTemplate 
      title="Dedicated" 
      subtitle="Servers" 
      description="Experience the ultimate in power and control with our bare-metal dedicated servers. Perfect for large businesses that require maximum performance."
      plans={plans}
      features={features}
    />
  );
}
