'use client';

import React from 'react';
import { Shield, Zap, Clock, Headphones, Globe, Database, Cloud, Lock } from 'lucide-react';
import { motion } from 'motion/react';

const Features = () => {
  const features = [
    {
      title: 'Ultra-Fast Performance',
      desc: 'Our servers are powered by NVMe SSD storage and LiteSpeed technology for maximum speed.',
      icon: Zap,
      color: 'blue',
    },
    {
      title: '99.9% Uptime Guarantee',
      desc: 'We guarantee your website will be online 99.9% of the time, backed by our SLA.',
      icon: Clock,
      color: 'indigo',
    },
    {
      title: 'Advanced Security',
      desc: 'Free SSL certificates, DDoS protection, and automated malware scanning for every site.',
      icon: Shield,
      color: 'purple',
    },
    {
      title: '24/7 Expert Support',
      desc: 'Our team of hosting experts is available around the clock to help you with any issues.',
      icon: Headphones,
      color: 'pink',
    },
    {
      title: 'Global Data Centers',
      desc: 'Choose from multiple server locations worldwide to ensure low latency for your visitors.',
      icon: Globe,
      color: 'emerald',
    },
    {
      title: 'Automated Backups',
      desc: 'Never worry about losing data. We perform daily automated backups of all your files.',
      icon: Database,
      color: 'orange',
    },
    {
      title: 'Scalable Infrastructure',
      desc: 'Easily upgrade your resources as your website grows with just a few clicks.',
      icon: Cloud,
      color: 'cyan',
    },
    {
      title: 'Free Website Migration',
      desc: 'Moving from another host? Our team will migrate your website for free, with zero downtime.',
      icon: Lock,
      color: 'rose',
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-extrabold text-gray-900 mb-4"
          >
            Why Choose <span className="text-primary-600">NewtonCloud?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We provide the tools and infrastructure you need to succeed online, with a focus on speed, security, and reliability.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-primary-50 group-hover:bg-primary-600 transition-colors`}>
                <feature.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
