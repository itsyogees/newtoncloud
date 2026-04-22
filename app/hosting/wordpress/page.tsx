'use client';

import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Layout, Zap, Shield, Globe, Database, PenTool } from 'lucide-react';

const WordpressHostingPage = () => {
  const plans = [
    {
      name: 'WP Starter',
      price: '$4.99',
      desc: 'Optimized for personal WordPress blogs.',
      features: ['1 WP Install', 'Managed Updates', 'WP-CLI Access', 'Free SSL', 'WP Support']
    },
    {
      name: 'WP Business',
      price: '$9.99',
      popular: true,
      desc: 'Best for business sites and portfolios.',
      features: ['5 WP Installs', 'Automatic Backups', 'Staging Environment', 'Object Cache', 'Expert WP Support']
    },
    {
      name: 'WP Scale',
      price: '$19.99',
      desc: 'High-traffic WordPress solutions.',
      features: ['Unlimited WP Installs', 'Jetpack Included', 'Edge CDN', 'DDoS Protection', 'Priority WP Support']
    }
  ];

  const features = [
    { title: 'Managed Updates', desc: 'We handle core, plugin, and theme updates to keep your site secure.', icon: Shield },
    { title: 'Optimized Stack', desc: 'LiteSpeed Cache and PHP 8.2 support for maximum WordPress speed.', icon: Zap },
    { title: 'Staging Tools', desc: 'Test changes on a clone of your site before pushing it live.', icon: Layout },
    { title: 'WP Expert Support', desc: 'Talk to WordPress specialists who understand your needs.', icon: PenTool },
    { title: 'Daily Backups', desc: 'Automatic daily backups with 1-click restore functionality.', icon: Database },
    { title: 'Free Migration', desc: 'We will move your WordPress site to us for free with zero downtime.', icon: Globe }
  ];

  return (
    <ServicePageTemplate 
      title="Managed WordPress" 
      subtitle="Hosting" 
      description="Supercharge your WordPress site with our managed platform. Fast, secure, and hassle-free hosting for every WordPress user."
      plans={plans}
      features={features}
    />
  );
};

export default WordpressHostingPage;
