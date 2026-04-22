'use client';

import React, { useState } from 'react';
import CTA from '@/components/CTA';
import { Search, Globe, CheckCircle2, ArrowRight, Shield, Zap, Clock, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

const DomainTransferPage = () => {
  const [domain, setDomain] = useState('');

  const steps = [
    { title: 'Unlock Domain', desc: 'Ensure your domain is unlocked at your current registrar.', icon: Shield },
    { title: 'Get Auth Code', desc: 'Obtain the EPP/Authorization code from your provider.', icon: Zap },
    { title: 'Submit Transfer', desc: 'Enter the code here and we will handle the rest.', icon: RefreshCw },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-600/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="w-[90%] mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-5xl font-extrabold mb-6"
          >
            Transfer Your <span className="text-primary-600">Domain</span> 
          </motion.h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Move your domain to NewtonCloud and enjoy better support, lower prices, and simplified management.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative max-w-2xl mx-auto"
          >
            <input 
              type="text" 
              placeholder="Enter domain to transfer..." 
              className="w-full bg-white/10 border-2 border-white/20 rounded-2xl px-6 py-5 pr-32 focus:outline-none focus:border-primary-500 transition-all text-lg font-medium text-white placeholder:text-gray-500"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
            <button className="absolute right-2 top-2 bottom-2 bg-primary-600 text-white px-8 rounded-lg font-bold hover:bg-primary-700 transition-all flex items-center space-x-2">
              <span>Transfer</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-white">
        <div className="w-[90%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">How to Transfer?</h2>
            <p className="text-xl text-gray-600">Follow these 3 simple steps to move your domain.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <step.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default DomainTransferPage;
