'use client';

import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Users, Layout, Shield, Globe, Database, Settings } from 'lucide-react';

const ResellerHostingPage = () => {
  const plans = [
    {
      name: 'Economy',
      price: '₹1500',
      desc: 'Start your hosting business with ease.',
      features: ['10 cPanel Accounts', '10 GB Disk Space', '200 GB Bandwidth', 'Unlimited Domains', 'LiteSpeed Web Server', 'Latest WHM/cPanel']
    },
    {
      name: 'Deluxe',
      price: '₹2500',
      desc: 'Perfect for growing reseller businesses.',
      features: ['25 cPanel Accounts', '25 GB Disk Space', '500 GB Bandwidth', 'Unlimited Domains', 'LiteSpeed Web Server', 'Latest WHM/cPanel']
    },
    {
      name: 'Professional',
      price: '₹3500',
      popular: true,
      desc: 'Best for established agencies.',
      features: ['50 cPanel Accounts', '50 GB Disk Space', '1000 GB Bandwidth', 'Unlimited Domains', 'LiteSpeed Web Server', 'Latest WHM/cPanel']
    },
    {
      name: 'Business',
      price: '₹4500',
      desc: 'High-performance required for larger clients.',
      features: ['75 cPanel Accounts', '75 GB Disk Space', '1500 GB Bandwidth', 'Unlimited Domains', 'LiteSpeed Web Server', 'Latest WHM/cPanel']
    },
    {
      name: 'Premium',
      price: '₹5500',
      desc: 'Enterprise-grade reseller hosting.',
      features: ['100 cPanel Accounts', '100 GB Disk Space', '2000 GB Bandwidth', 'Unlimited Domains', 'LiteSpeed Web Server', 'Latest WHM/cPanel']
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
