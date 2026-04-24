'use client';

import React from 'react';
import CTA from '@/components/CTA';
import { Cloud, Shield, Zap, Globe, Users, Award } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

const AboutClient = () => {
  const stats = [
    { label: 'Customers Worldwide', value: '50,000+', icon: Users },
    { label: 'Data Centers', value: '12', icon: Globe },
    { label: 'Uptime Guarantee', value: '99.9%', icon: Zap },
    { label: 'Years of Experience', value: '10+', icon: Award },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#0a1128] text-white relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#07a447]/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#07a447]/10 rounded-full blur-[120px]"></div>
        </div>

        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1128]/50 to-[#0a1128] -z-10"></div>
        
        <div className="w-[90%] mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#07a447]/10 border border-[#07a447]/20 backdrop-blur-md"
            >
              <span className="text-sm font-bold text-[#07a447] tracking-wider uppercase">Our Journey & Vision</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tight"
            >
              About <span className="text-[#07a447] relative">
                NewtonCloud
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#07a447]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-lg lg:text-xl text-gray-400 mb-12 leading-relaxed font-medium max-w-2xl mx-auto"
            >
              We are a team of passionate hosting experts dedicated to providing the best cloud infrastructure for modern businesses.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At NewtonCloud, our mission is to empower businesses worldwide with cutting-edge cloud hosting solutions that are fast, secure, and scalable. We believe that every business deserves a reliable online presence, and we are committed to providing the tools and support needed to achieve that.
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are constantly innovating and investing in the latest technology to ensure that our customers always have access to the best hosting experience possible.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Cloud className="text-white w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">NewtonCloud</h4>
                  <p className="text-sm text-gray-500">Empowering Your Digital Vision</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://picsum.photos/seed/about/800/1000"
                  alt="About NewtonCloud"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden lg:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Shield className="text-green-600 w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">100% Secure</h4>
                    <p className="text-sm text-gray-500">Your data is safe with us</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm text-center border border-gray-100"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-4xl font-extrabold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default AboutClient;
