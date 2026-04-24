'use client';

import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Server, Zap, Shield, Globe, Database, Headphones } from 'lucide-react';

const WebHostingPage = () => {
  const plans = [
    {
      name: 'LIN_TINY',
      price: '₹199',
      desc: 'The perfect starting point for growing an online presence.',
      features: ['1 Website', '10 GB Disk Space', '100 GB Bandwidth', '3 Email Accounts', 'Free Softaculous', '99.9% Uptime', 'Indian Server']
    },
    {
      name: 'LIN_MICRO',
      price: '₹399',
      popular: true,
      desc: 'Ideal for growing businesses and portfolios.',
      features: ['1 Website', '60 GB Disk Space', '100 GB Bandwidth', '10 Email Accounts', 'Free Softaculous', '99.9% Uptime', 'Indian Server']
    },
    {
      name: 'LIN_BIG',
      price: '₹499',
      desc: 'Great for high traffic sites and multiple domains.',
      features: ['Unlimited Websites', '160 GB Disk Space', 'Unlimited Bandwidth', '250 Email Accounts', 'Free Softaculous', '99.9% Uptime', 'Indian Server']
    },
    {
      name: 'LIN_LARGE',
      price: '₹749',
      desc: 'Maximum performance for large scale projects.',
      features: ['Unlimited Websites', 'Unlimited Disk Space', 'Unlimited Bandwidth', 'Unlimited Email Accounts', 'Free Softaculous', '99.9% Uptime', 'Indian Server']
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
