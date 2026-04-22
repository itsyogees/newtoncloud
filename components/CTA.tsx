'use client';

import React from 'react';
import { ArrowRight, Cloud, Server, Shield } from 'lucide-react';
import { motion } from 'motion/react';

const CTA = () => {
  return (
    <section className="py-24 bg-primary-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="w-[90%] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg p-12 rounded-3xl border border-white/20 shadow-2xl"
        >
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6">
            Ready to <span className="text-primary-200">Scale Your Business?</span>
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of businesses that trust NewtonCloud for their hosting needs. Get started today and experience the difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-primary-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-primary-50 transition-all shadow-xl flex items-center space-x-2 group">
              <span>Get Started Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all flex items-center space-x-2">
              <span>Contact Sales</span>
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/10">
            <div className="flex items-center justify-center space-x-3 text-white">
              <Cloud className="w-6 h-6 text-primary-200" />
              <span className="font-bold">Cloud Infrastructure</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <Server className="w-6 h-6 text-primary-200" />
              <span className="font-bold">Dedicated Resources</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <Shield className="w-6 h-6 text-primary-200" />
              <span className="font-bold">Iron-Clad Security</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
