'use client';

import React from 'react';
import CTA from '@/components/CTA';
import { motion } from 'motion/react';
import { Shield, FileText } from 'lucide-react';

const TermsPage = () => {
  const sections = [
    {
      title: '1. Introduction',
      content: 'Welcome to NewtonCloud. By using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read these carefully before using our services.'
    },
    {
      title: '2. Acceptable Use Policy',
      content: 'Users are prohibited from using NewtonCloud services for any unlawful activities, including but not limited to hosting malicious content, spamming, or unauthorized access to other systems.'
    },
    {
      title: '3. Payment and Refunds',
      content: 'Payments for services are due in advance. We offer a 30-day money-back guarantee for shared hosting services. Domain registrations and SSL certificates are non-refundable.'
    },
    {
      title: '4. Service Level Agreement',
      content: 'We strive for 99.9% uptime. In the event of significant downtime, customers may be eligible for service credits as outlined in our detailed SLA documentation.'
    },
    {
      title: '5. Limitation of Liability',
      content: 'NewtonCloud shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services.'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gray-900 text-white relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-600/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="w-[90%] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
              <Shield className="w-8 h-8 text-primary-500" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">Terms <span className="text-primary-500">& Conditions</span></h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Last updated: April 2024. Please review our legal framework for using NewtonCloud services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="w-[90%] mx-auto max-w-4xl">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div 
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-start space-x-6">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-primary-600 font-black group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    {index + 1}
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">{section.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default TermsPage;
