'use client';

import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Cloud, Zap, Shield, Globe, Database, Headphones } from 'lucide-react';

const AWSCloudPage = () => {
  const plans = [
    {
      name: 'Cloud Starter',
      price: '$49.00',
      desc: 'Small scale AWS managed instances.',
      features: ['Managed EC2', 'S3 Storage (10GB)', 'Global CDN', '24/7 Monitoring', 'Basic Support']
    },
    {
      name: 'Cloud Grow',
      price: '$129.00',
      popular: true,
      desc: 'Optimized for business growth.',
      features: ['Auto-Scaling', 'S3 Storage (100GB)', 'RDS Database', 'WAF Protection', 'Expert AWS Support']
    },
    {
      name: 'Cloud Scale',
      price: '$499.00',
      desc: 'Enterprise AWS infrastructure.',
      features: ['Multi-Region Deploy', 'Teralite Direct Connect', 'Full Cloud Architecture', 'AI-Driven Monitoring', 'VIP Engineering']
    }
  ];

  const features = [
    { title: 'Auto-Scaling', desc: 'Automatically adjust resources based on traffic demands to save costs.', icon: Cloud },
    { title: 'Global Availability', desc: 'Deploy your applications across 30+ AWS global regions.', icon: Globe },
    { title: 'Enhanced Security', desc: 'Advanced WAF and Identity management to keep your cloud secure.', icon: Shield },
    { title: 'Expert Management', desc: 'Our AWS certified architects manage your stack so you don\'t have to.', icon: Headphones },
    { title: 'High Availability', desc: 'Redundant configurations ensure your services stay up 99.99% of the time.', icon: Database },
    { title: 'Cost Optimization', desc: 'We help you optimize your AWS spend to get the most for your budget.', icon: Zap }
  ];

  return (
    <ServicePageTemplate 
      title="Managed AWS" 
      subtitle="Cloud Solutions" 
      description="Harness the world's most comprehensive cloud platform with CloudMinister's expert management. Secure, reliable, and built for scale."
      plans={plans}
      features={features}
    />
  );
};

export default AWSCloudPage;
