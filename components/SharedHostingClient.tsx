'use client';

import React from 'react';
import HostingPage from '@/components/HostingPage';
import { Zap, Shield, Server, Headphones, Globe, Database } from 'lucide-react';

const SharedHostingClient = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$4.99',
      desc: 'Perfect for personal blogs and small websites.',
      features: [
        '1 Website',
        '10 GB SSD Storage',
        'Unlimited Bandwidth',
        'Free SSL Certificate',
        '1 Email Account',
        '24/7 Support',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$9.99',
      desc: 'Ideal for growing businesses and portfolios.',
      features: [
        'Unlimited Websites',
        '50 GB NVMe Storage',
        'Unlimited Bandwidth',
        'Free SSL & Domain',
        'Unlimited Emails',
        'Daily Backups',
        'Priority Support',
      ],
      popular: true,
    },
    {
      name: 'Business',
      price: '$19.99',
      desc: 'Maximum performance for high-traffic sites.',
      features: [
        'Unlimited Websites',
        'Unlimited NVMe Storage',
        'Unlimited Bandwidth',
        'Free SSL & Domain',
        'Unlimited Emails',
        'Advanced Security',
        'Dedicated IP',
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
      title="Shared Hosting" 
      subtitle="Experience lightning-fast shared hosting with NVMe storage and LiteSpeed technology. Perfect for small to medium-sized websites."
      plans={plans}
      features={features}
    />
  );
};

export default SharedHostingClient;
