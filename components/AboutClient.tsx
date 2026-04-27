'use client';

import React from 'react';
import CTA from '@/components/CTA';
import { Cloud, Shield, Zap, Globe, Users, Award, Target, Rocket, Heart, Clock, CheckCircle2, Quote, ArrowRight, Server, Database, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

const AboutClient = () => {
  const stats = [
    { label: 'Happy Customers', value: '1.2M+', icon: Users },
    { label: 'Cloud Instances', value: '500k+', icon: Cloud },
    { label: 'Uptime Guarantee', value: '99.9%', icon: Zap },
    { label: 'Service Experience', value: '9+ Years', icon: Award },
  ];

  const maintenanceFeatures = [
    { title: 'Customization and Control', icon: Target },
    { title: 'Expert Support', icon: Users },
    { title: 'Reliability and Performance', icon: Zap },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#1f1f1f] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=2000"
            alt="Lady smiling professional"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1f1f1f] via-[#1f1f1f]/80 to-transparent"></div>
        </div>

        <div className="w-[90%] mx-auto relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-lg bg-[#07a447] text-white text-sm font-bold uppercase tracking-widest"
            >
              About us
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl lg:text-7xl font-black mb-8 leading-tight"
            >
              NEWTON CLOUD <br />
              <span className="text-[#07a447]">SERVE PVT LTD.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-10 leading-relaxed font-medium"
            >
              We are dedicated to providing reliable and scalable private cloud solutions to empower individuals and businesses in the digital world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <button className="bg-[#07a447] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#068f3e] transition-all shadow-xl shadow-[#07a447]/20 active:scale-95">
                Get started Now
              </button>
            </motion.div>

            {/* Quote Box */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-16 p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 max-w-2xl"
            >
              <Quote className="text-[#07a447] w-10 h-10 mb-4 opacity-50" />
              <p className="text-lg text-gray-200 italic font-medium leading-relaxed">
                NEWTON CLOUD provide a comprehensive range of private cloud services tailored to meet your specific requirements.
              </p>
              <button className="mt-6 text-[#07a447] font-black uppercase tracking-widest text-sm flex items-center group">
                SEE OUR Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[650px] rounded-[3rem] overflow-hidden shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                  alt="Group of people working"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#07a447] text-white p-10 rounded-[2.5rem] shadow-2xl">
                <h4 className="text-4xl font-black mb-1">9+</h4>
                <p className="text-sm font-bold uppercase tracking-widest">Years Experience</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-1 bg-[#07a447]"></div>
                <span className="text-[#07a447] font-black uppercase tracking-[0.3em] text-sm">About Us</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Since we establishment in <span className="text-[#07a447]">2015.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We understand that every business has unique requirements. Our private cloud solutions offer unparalleled customization and control, allowing you to shape your infrastructure to fit your specific needs. We are receiving overwhelming response from all the sides of the customers.
              </p>
              
              <div className="space-y-4">
                {maintenanceFeatures.map((f, i) => (
                  <div key={i} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-2xl border border-gray-100 hover:border-[#07a447]/30 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                      <f.icon className="w-5 h-5 text-[#07a447]" />
                    </div>
                    <span className="font-bold text-gray-800">{f.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-gray-50">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                We take care of Your <br />
                <span className="text-[#07a447]">High Risk, Data Security</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We understand the importance of keeping your cloud servers up to date with the latest software versions, patches, and security updates. Our team diligently monitors and manages the upgrade process, ensuring that your servers have access to the latest features and enhancements while minimizing disruption to your services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Regular maintenance is crucial for optimal performance and reliability of your cloud servers. We proactively schedule and perform routine maintenance tasks, including hardware checks, software optimizations, and system health monitoring.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white"
            >
              <Image 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000"
                alt="User seeing computer"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 24/7 Support Section */}
      <section className="py-24 bg-white">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative h-[550px] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=1000"
                alt="Lady support professional"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-1 bg-[#07a447]"></div>
                <span className="text-[#07a447] font-black uppercase tracking-[0.3em] text-sm">24/7 support</span>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                We are proud to offer 24/7 support for VPS (Virtual Private Server) hosting. Our dedicated support team is available round-the-clock to assist you with any issues, questions, or concerns you may have regarding your VPS server.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Backup and Disaster Recovery', icon: Database },
                  { title: 'Network and Hardware Support', icon: Server },
                  { title: 'Server Monitoring', icon: Activity }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                    <item.icon className="w-8 h-8 text-[#07a447] mb-4" />
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default AboutClient;
