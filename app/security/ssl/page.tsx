'use client';

import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Shield, Zap, Globe, Lock, Search, CheckCircle } from 'lucide-react';

const SSLSecurityPage = () => {
  const plans = [
    {
      name: 'Positive SSL',
      price: '$12.00',
      desc: 'Protect a single domain name.',
      features: ['Single Domain', 'Domain Validation', '256-Bit Encryption', '99% Browser Compatibility', 'Free Reissues']
    },
    {
      name: 'Wildcard SSL',
      price: '$89.00',
      popular: true,
      desc: 'Protect domain & subdomains.',
      features: ['Unlimited Subdomains', 'Organization Validated', 'Static Site Seal', '$1.5M Warranty', 'Mobile Friendly']
    },
    {
      name: 'EV SSL',
      price: '$199.00',
      desc: 'The green bar for maximum trust.',
      features: ['Extended Validation', 'Company Name in Browser', 'Dynamic Site Seal', '$1.75M Warranty', 'Highest Security']
    }
  ];

  const features = [
    { title: 'Google SEO Boost', desc: 'HTTPS is a ranking factor in Google. Improve your SEO instantly with an SSL.', icon: Search },
    { title: 'Customer Trust', desc: 'Display a secure padlock in the browser and win your customer\'s confidence.', icon: Lock },
    { title: 'Strong Encryption', desc: '256-bit encryption ensures that sensitive data stays private and secure.', icon: Shield },
    { title: 'Fast Validation', desc: 'Get your SSL issued in minutes with our fast domain validation process.', icon: Zap },
    { title: 'Safe Transactions', desc: 'Secure your e-commerce platform and process payments safely.', icon: CheckCircle },
    { title: 'Browser Coverage', desc: 'Our certificates are trusted by 99.9% of all devices and web browsers.', icon: Globe }
  ];

  return (
    <ServicePageTemplate 
      title="Secure Your Site" 
      subtitle="with SSL" 
      description="Encrypt your website traffic and build visitor trust. Protect your data with industry-leading SSL certificates from CloudMinister."
      plans={plans}
      features={features}
    />
  );
};

export default SSLSecurityPage;
