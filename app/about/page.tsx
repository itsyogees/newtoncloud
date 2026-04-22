import React from 'react';
import AboutClient from '@/components/AboutClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about NewtonCloud, our mission to provide lightning-fast cloud hosting, and the experts behind our infrastructure.',
};

export default function AboutPage() {
  return <AboutClient />;
}
