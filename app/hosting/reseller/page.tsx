'use client';

import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Users, Layout, Shield, Globe, Database, Settings } from 'lucide-react';

const ResellerHostingPage = () => {
  const plans = [
    {
      name: 'Reseller Lite',
      price: '$19.99',
      desc: 'Start your hosting business with ease.',
      features: ['20 cPanel Accounts', '40 GB SSD Storage', 'WHM Access', 'White Label', 'Free Migrations']
    },
    {
      name: 'Reseller Pro',
      price: '$34.99',
      popular: true,
      desc: 'Best for established agencies.',
      features: ['50 cPanel Accounts', '100 GB SSD Storage', 'WHM Access', 'Billing Software', 'Priority Support']
    },
    {
      name: 'Reseller Elite',
      price: '$59.99',
      desc: 'Enterprise-grade reseller hosting.',
      features: ['100 cPanel Accounts', '250 GB NVMe Storage', 'Dedicated IP', 'Custom Logo WHM', 'VIP Support']
    }
  ];

  const features = [
    { title: 'White Label Branding', desc: 'Host clients under your own brand with custom nameservers and logos.', icon: Users },
    { title: 'WHM Control Panel', desc: 'Powerful WebHost Manager to manage all your cPanel accounts efficiently.', icon: Settings },
    { title: 'Billing Integration', desc: 'Automate your billing and client management with WHMCS or Blesta.', icon: Layout },
    { title: 'Overselling Enabled', desc: 'Maximize your profits by flexible resource allocation for your clients.', icon: Database },
    { title: 'Top-Tier Security', desc: 'Imunify360 and CageFS provided to keep your clients safe.', icon: Shield },
    { title: 'Global Reach', desc: 'Deploy your hosting nodes in strategic locations worldwide.', icon: Globe }
  ];

  return (
    <ServicePageTemplate 
      title="Professional" 
      subtitle="Reseller Hosting" 
      description="Start your own hosting company today. We provide the infrastructure, you provide the brand. Scale your hosting business seamlessly."
      plans={plans}
      features={features}
    />
  );
};

export default ResellerHostingPage;
