import React from 'react';
import DomainsClient from '@/components/DomainsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register Domain | NewtonCloud',
  description: 'Search and register your perfect domain name with NewtonCloud.',
};

export default function RegisterDomainPage() {
  return <DomainsClient />;
}
