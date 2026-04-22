'use client';

import React from 'react';
import CTA from '@/components/CTA';
import { Check, ArrowRight, Zap, Shield, Server, Headphones, Globe, Database } from 'lucide-react';
import { motion } from 'motion/react';

interface HostingPageProps {
  title: string;
  subtitle: string;
  plans: any[];
  features: any[];
}

const HostingPage: React.FC<HostingPageProps> = ({ title, subtitle, plans, features }) => {
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
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 mb-10 leading-relaxed"
            >
              {subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <div className="flex items-center space-x-2 text-gray-300">
                <Check className="w-5 h-5 text-primary-500" />
                <span>Free SSL</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Check className="w-5 h-5 text-primary-500" />
                <span>Free Migration</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Check className="w-5 h-5 text-primary-500" />
                <span>30-Day Money Back</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl ${plan.popular ? 'border-primary-600 shadow-xl' : 'border-gray-100'}`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{plan.desc}</p>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-2">/mo</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature: string) => (
                    <li key={feature} className="flex items-center space-x-3 text-gray-700">
                      <Check className="w-5 h-5 text-primary-600" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-lg font-bold transition-all flex items-center justify-center space-x-2 group ${plan.popular ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200'}`}>
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="w-[90%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Included with Every Plan</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to build and grow your online presence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default HostingPage;
