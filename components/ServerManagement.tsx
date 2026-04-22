'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const ServerManagement = () => {
  const services = [
    { name: 'CPane', label: 'cPanel', image: '/assets/icons8-cpanel-96.png' },
    { name: 'Plesk Support', label: 'Plesk Support', image: '/assets/icons8-plesk-96.png' },
    { name: 'Direct Admin Support', label: 'Direct Admin Support', image: '/assets/Direct Admin new.png' },
    { name: 'Linode Server', label: 'Linode Server', image: '/assets/icons8-linode-96.png' },
    { name: 'Virtualizor Support', label: 'Virtualizor Support', image: '/assets/vr.jpg' },
    { name: 'Microsoft Hyper-V Support', label: 'Microsoft Hyper-V Support', image: '/assets/microsoft.png' },
    { name: 'Amazon AWS Support', label: 'Amazon AWS Support', image: '/assets/icons8-aws-96.png' },
    { name: 'Microsoft Azure', label: 'Microsoft Azure', image: '/assets/azure.png' },
    { name: 'Digital Ocean', label: 'Digital Ocean', image: '/assets/icons8-digital-ocean-96.png' },
    { name: 'Rackspace', label: 'Rackspace', image: '/assets/rackspace-logo.png' },
  ];

  return (
    <section className="py-24 bg-[#f8f9fc] overflow-hidden">
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Expert Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10">
              <Image 
                src="/assets/rightcontent.avif" 
                alt="Server Management Expert" 
                width={600} 
                height={700}
                className="w-full h-auto"
              />
              
              {/* Trustpilot Badge (Mock) */}
              <div className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden xl:block">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold">Trustpilot</span>
                  <div className="flex space-x-0.5">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-3 h-3 bg-green-500"></div>)}
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 mt-1">NewtonCloud is rated 4.9/5</p>
              </div>

              {/* Google Badge (Mock) */}
              <div className="absolute bottom-40 -right-5 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden xl:block">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold text-blue-600">Google</span>
                  <div className="flex space-x-0.5">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-3 h-3 text-orange-400">★</div>)}
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 mt-1">NewtonCloud is rated 4.9/5</p>
              </div>
            </div>
            
            {/* Background Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Right Column: Content & Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="mb-12">
              <h2 className="text-4xl lg:text-5xl font-black text-[#0a1b3d] leading-tight mb-6">
                Extensive Server Management Services by Industry Experts
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                Our comprehensive server management solutions provide secure, scalable, and efficient server administration that ensures optimized performance and robust security. This absolute positive approach guarantees smooth business operations and long-term operational success.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-center group"
                >
                  <div className="relative w-12 h-12 mb-4 group-hover:scale-110 transition-transform">
                    <Image 
                      src={service.image} 
                      alt={service.name} 
                      fill 
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-[13px] font-bold text-gray-800 leading-tight">
                    {service.name}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServerManagement;
