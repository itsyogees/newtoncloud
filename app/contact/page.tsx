import React from 'react';
import ContactClient from '@/components/ContactClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with NewtonCloud. Our team is available 24/7 to help you with cloud hosting, VPS, and domain registration inquiries.',
};

export default function ContactPage() {
  return <ContactClient />;
}
