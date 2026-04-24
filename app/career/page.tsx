'use client';

import React from 'react';
import CTA from '@/components/CTA';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight, Zap, Users, Globe } from 'lucide-react';

const CareerPage = () => {
  const jobs = [
    { title: 'Senior Cloud Architect', type: 'Full-Time', location: 'Remote / Bangalore', salary: '$120k - $160k' },
    { title: 'Full Stack Developer (Next.js)', type: 'Full-Time', location: 'Remote', salary: '$80k - $120k' },
    { title: 'Technical Support Engineer', type: '24/7 Shift', location: 'Remote / Chennai', salary: '$40k - $60k' },
    { title: 'Email Infrastructure Specialist', type: 'Full-Time', location: 'Bangalore', salary: '$90k - $130k' },
  ];

  const benefits = [
    { title: 'Remote Work', desc: 'Work from anywhere in the world with flexible hours.', icon: Globe },
    { title: 'Modern Stack', desc: 'Work with the latest technologies: Next.js, AWS, Azure, and more.', icon: Zap },
    { title: 'Great Culture', desc: 'Join a team of driven, innovative, and friendly cloud enthusiasts.', icon: Users },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#0a1128] text-white relative overflow-hidden text-center">
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#07a447]/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#07a447]/10 rounded-full blur-[120px]"></div>
        </div>

        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1128]/50 to-[#0a1128] -z-10"></div>

        <div className="w-[90%] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#07a447]/10 border border-[#07a447]/20 backdrop-blur-md"
            >
              <span className="text-sm font-bold text-[#07a447] tracking-wider uppercase">Join Our Global Team</span>
            </motion.div>

            <h1 className="text-4xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tight">Join the <span className="text-[#07a447] relative">
              Future
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#07a447]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> of Cloud</h1>
            <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-12 font-medium">
              Help us build the next generation of cloud infrastructure. We are always looking for passionate people to join our global team.
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-center space-x-2 bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-sm">
                  <b.icon className="w-5 h-5 text-[#07a447]" />
                  <span className="font-bold text-sm tracking-tight">{b.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-24 bg-white">
        <div className="w-[90%] mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Open Positions</h2>
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gray-50 hover:bg-primary-600 p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row md:items-center justify-between transition-all cursor-pointer shadow-sm hover:shadow-xl"
                >
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-500 group-hover:text-white/80 transition-colors">
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-sm font-medium">{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0">
                    <div className="bg-white text-primary-600 p-4 rounded-2xl group-hover:bg-primary-500 group-hover:text-white transition-all shadow-sm">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default CareerPage;
