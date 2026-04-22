'use client';

import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Server, Zap, Shield, Globe, Database, Headphones } from 'lucide-react';

const WebHostingPage = () => {
  const plans = [
    {
      name: 'Starter Cloud',
      price: '$2.99',
      desc: 'Perfect for small personal websites and blogs.',
      features: ['1 Website', '10 GB SSD Storage', 'Unmetered Bandwidth', 'Free SSL', '24/7 Support']
    },
    {
      name: 'Business Pro',
      price: '$5.99',
      popular: true,
      desc: 'Ideal for growing businesses and portfolios.',
      features: ['Unlimited Websites', '50 GB SSD Storage', 'Unmetered Bandwidth', 'Free Domain', 'Free SSL', 'Daily Backups']
    },
    {
      name: 'Enterprise Ultra',
      price: '$12.99',
      desc: 'Maximum performance for large scale projects.',
      features: ['Unlimited Websites', '100 GB NVMe Storage', 'Dedicated IP', 'Professional Email', 'Priority Support']
    }
  ];

  const features = [
    { title: 'Ultra-Fast Performance', desc: 'Our servers use NVMe SSD storage and LiteSpeed for 20x faster speeds.', icon: Zap },
    { title: 'Rock-Solid Security', desc: 'Free SSL, DDoS protection, and daily backups included with every plan.', icon: Shield },
    { title: 'Global Data Centers', desc: 'Choose from 10+ data center locations around the world.', icon: Globe },
    { title: '1-Click Installs', desc: 'Install WordPress, Joomla, and 400+ other apps with a single click.', icon: Database },
    { title: '99.9% Uptime', desc: 'Experience industry-leading reliability with our redundant infrastructure.', icon: Server },
    { title: 'Expert Support', desc: 'Our technical team is available 24/7/365 to help you succeed.', icon: Headphones }
  ];

  return (
    <ServicePageTemplate 
      title="Reliable Web" 
      subtitle="Hosting Services" 
      description="Launch your website on a platform designed for speed, security, and scalability. Get started today with a free domain and SSL."
      plans={plans}
      features={features}
    />
  );
};

export default WebHostingPage;
