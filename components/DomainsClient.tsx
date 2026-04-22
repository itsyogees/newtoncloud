'use client';

import React, { useState } from 'react';
import CTA from '@/components/CTA';
import { Search, Globe, CheckCircle2, ArrowRight, Shield, Zap, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const DomainsClient = () => {
  const [domain, setDomain] = useState('');

  const tlds = [
    { name: '.com', price: '$9.99', oldPrice: '$14.99' },
    { name: '.net', price: '$12.99', oldPrice: '$16.99' },
    { name: '.org', price: '$14.99', oldPrice: '$19.99' },
    { name: '.cloud', price: '$4.99', oldPrice: '$29.99' },
    { name: '.io', price: '$29.99', oldPrice: '$49.99' },
    { name: '.tech', price: '$2.99', oldPrice: '$39.99' },
    { name: '.store', price: '$1.99', oldPrice: '$49.99' },
    { name: '.online', price: '$0.99', oldPrice: '$39.99' },
  ];

  const features = [
    { title: 'Free Domain Privacy', desc: 'Protect your personal information from WHOIS lookups for free.', icon: Shield },
    { title: 'Easy Management', desc: 'Our intuitive control panel makes managing your domains a breeze.', icon: Zap },
    { title: 'Auto-Renewal', desc: 'Never lose your domain again with our automated renewal system.', icon: Clock },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-600/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="w-[90%] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-5xl font-extrabold mb-6"
            >
              Find Your <span className="text-primary-600">Perfect Domain</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 mb-10 leading-relaxed"
            >
              Your domain name is your online identity. Start your journey with the perfect name today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative max-w-2xl mx-auto"
            >
              <input
                type="text"
                placeholder="Enter your domain name..."
                className="w-full bg-white/10 border-2 border-white/20 rounded-2xl px-6 py-5 pr-32 focus:outline-none focus:border-primary-500 transition-all text-lg font-medium text-white placeholder:text-gray-500"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary-600 text-white px-8 rounded-lg font-bold hover:bg-primary-700 transition-all flex items-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TLDs Section */}
      <section className="py-24 bg-white">
        <div className="w-[90%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Popular Extensions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose from hundreds of domain extensions at the best prices.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
            {tlds.map((tld, index) => (
              <motion.div
                key={tld.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group"
              >
                <h3 className="text-3xl font-extrabold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{tld.name}</h3>
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <span className="text-gray-400 line-through text-sm">{tld.oldPrice}</span>
                  <span className="text-2xl font-bold text-primary-600">{tld.price}</span>
                </div>
                <button className="w-full py-3 rounded-lg font-bold bg-white border border-gray-200 text-gray-900 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all">
                  Register Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default DomainsClient;
