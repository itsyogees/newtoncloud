import React from 'react';
import DomainsClient from '@/components/DomainsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Domain Registration',
  description: 'Search and register your perfect domain name with NewtonCloud. We offer a wide range of TLDs, free domain privacy, and easy management tools.',
};

export default function DomainsPage() {
  return <DomainsClient />;
}
