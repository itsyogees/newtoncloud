import React from 'react';
import Hero from '@/components/Hero';
import PricingPlans from '@/components/PricingPlans';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';


import PowerfulServices from '@/components/PowerfulServices';
import ServerManagement from '@/components/ServerManagement';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | NewtonCloud - High-Performance Cloud Hosting',
  description: 'NewtonCloud provides lightning-fast cloud hosting, secure VPS, and domain registration with 24/7 expert support.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-600">
      <Hero />
      <PricingPlans />



      <PowerfulServices />
      <ServerManagement />
      <Features />
      <Testimonials />
      <CTA />
    </main>
  );
}
