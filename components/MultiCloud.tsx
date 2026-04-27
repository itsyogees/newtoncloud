'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const MultiCloud = () => {
  const providers = [
    {
      name: 'Microsoft Azure',
      desc: 'Our crew of experts is ready to tackle the issues of deploying scaled apps and instances on the Azure cloud platform.',
      image: '/assets/azure.png',
      color: 'blue'
    },
    {
      name: 'AWS Support',
      desc: 'Our experts will take care of your daily operations, providing business-level management and service for the AWS instances.',
      image: '/assets/AwsSmall.png',
      color: 'orange'
    },
    {
      name: 'Google Cloud',
      desc: 'Google Cloud offers cutting-edge infrastructure and data analytics, delivering scalable, high-performance solutions for modern enterprises with integrated AI and machine learning capabilities.',
      image: '/assets/cloud-google.png',
      color: 'blue'
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Multi-Cloud Provider Support</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">We partner with world-class cloud infrastructure providers to deliver maximum reliability and performance.</p>
        </div>

        {/* Bottom Section: Provider Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
          {providers.map((provider, index) => (
            <motion.div
              key={provider.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-12 text-center bg-white hover:bg-gray-50 transition-all duration-500 flex flex-col items-center group ${index !== providers.length - 1 ? 'border-r border-gray-100' : ''}`}
            >
              <div className="h-24 flex items-center justify-center mb-8 w-full px-4">
                <div className="relative w-full h-16 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={provider.image}
                    alt={provider.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">{provider.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-10 flex-grow px-4">
                {provider.desc}
              </p>
              <button className="bg-[#f29400] text-white px-10 py-3.5 rounded-lg font-black text-sm uppercase tracking-wider hover:bg-[#d98500] transition-all shadow-lg shadow-orange-100/50">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultiCloud;
