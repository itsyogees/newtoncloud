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
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gray-900 text-white relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-600/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="w-[90%] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6">Join the <span className="text-primary-500">Future</span> of Cloud</h1>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto mb-10">
              Help us build the next generation of cloud infrastructure. We are always looking for passionate people to join our global team.
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-center space-x-2 bg-white/5 px-6 py-3 rounded-full border border-white/10">
                  <b.icon className="w-5 h-5 text-primary-500" />
                  <span className="font-bold">{b.title}</span>
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
