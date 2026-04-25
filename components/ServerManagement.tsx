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
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-black text-[#0a1b3d] leading-tight mb-6">
              Extensive Server Management Services by Industry Experts
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mx-auto max-w-3xl">
              Our comprehensive server management solutions provide secure, scalable, and efficient server administration that ensures optimized performance and robust security. This absolute positive approach guarantees smooth business operations and long-term operational success.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-center flex flex-col items-center justify-center group"
            >
              <div className="relative w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                <Image 
                  src={service.image} 
                  alt={service.name} 
                  fill 
                  className="object-contain"
                />
              </div>
              <h4 className="text-[15px] font-bold text-gray-800 leading-tight">
                {service.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerManagement;
