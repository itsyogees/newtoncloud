'use client';

import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Cloud, Zap, Shield, Globe, Database, Headphones } from 'lucide-react';

const AzureCloudPage = () => {
  const plans = [
    {
      name: 'Azure Entry',
      price: '$55.00',
      desc: 'Managed entry-level Azure VMs.',
      features: ['B-Series VM', 'Managed Disk', 'Azure DNS', 'Cloud Backup', 'Standard Support']
    },
    {
      name: 'Azure Business',
      price: '$145.00',
      popular: true,
      desc: 'Professional Azure management.',
      features: ['D-Series VM', 'Azure SQL Database', 'App Service', 'Advanced Security', 'Priority Management']
    },
    {
      name: 'Azure Enterprise',
      price: '$550.00',
      desc: 'Scalable corporate infrastructure.',
      features: ['Kubernetes (AKS)', 'Cosmos DB', 'Azure Firewall', 'Custom Solutions', 'Dedicated Architect']
    }
  ];

  const features = [
    { title: 'Seamless Integration', desc: 'Connect your cloud with Microsoft tools like Office 365 and AD.', icon: Globe },
    { title: 'Advanced Analytics', desc: 'Unlock insights with Azure\'s industry-leading data analytics tools.', icon: Database },
    { title: 'Hybrid Cloud', desc: 'Bridge your on-premises data centers with the Azure public cloud.', icon: Cloud },
    { title: 'Managed Security', desc: 'Azure Sentinel and Security Center monitored by our expert team.', icon: Shield },
    { title: 'Infinite Performance', desc: 'Scale your compute power instantly to meet any business demand.', icon: Zap },
    { title: '24/7 Expert Help', desc: 'Our Azure-certified team is always ready to support your operations.', icon: Headphones }
  ];

  return (
    <ServicePageTemplate 
      title="Managed Microsoft" 
      subtitle="Azure" 
      description="Modernize your business with enterprise-class Azure solutions managed by CloudMinister. The power of Microsoft, simplified for you."
      plans={plans}
      features={features}
    />
  );
};

export default AzureCloudPage;
