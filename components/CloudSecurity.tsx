'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const CloudSecurity = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/Cloud-security.avif"
                alt="Cloud Security"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Soft Glow behind image */}
            <div className="absolute -inset-4 bg-primary-100/30 blur-3xl rounded-full -z-10"></div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
              Your Data, Your Power – <span className="text-primary-600">Secure It with</span> Cloudminister’s Expertise
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed mb-10">
              Protect your data with Cloudminister&apos;s expert solutions. Secure, backup, and recover seamlessly — because your data is your power, and we help you safeguard it.
            </p>
            
            <button className="bg-[#f29400] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#d98500] transition-all shadow-xl shadow-orange-100 flex items-center justify-center space-x-2 group">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CloudSecurity;
