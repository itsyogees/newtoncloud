'use client';

import React, { useState } from 'react';
import { Globe, CheckCircle2, ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';

const Hero = () => {
  const [domain, setDomain] = useState('');

  const tlds = [
    { name: '.com', price: '$9.99' },
    { name: '.net', price: '$12.99' },
    { name: '.org', price: '$14.99' },
    { name: '.cloud', price: '$4.99' },
    { name: '.io', price: '$29.99' },
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-primary-50 to-white">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-100/50 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary-100/50 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
              </span>
              <span>New: Cloud VPS Gen 2 is here!</span>
            </div>
            <h1 className="text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Empower Your <span className="text-primary-600">Digital Vision</span> with NewtonCloud
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              Experience lightning-fast hosting, iron-clad security, and 24/7 expert support. Your journey to the cloud starts here.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center space-x-2 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Free SSL Certificate</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>30-Day Money Back</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-200 flex items-center justify-center space-x-2 group">
                <span>View Hosting Plans</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center space-x-2">
                <span>Contact Sales</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group w-full"
          >
            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-white bg-gray-100">
              <Image
                src="/assets/vps_hosting_offer.avif"
                alt="Cloud Hosting Services"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center transition-colors">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <Play className="w-10 h-10 text-[#07a447] fill-[#07a447]" />
                </div>
              </div>
            </div>
 
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-600/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-600/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
