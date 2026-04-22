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
      name: 'Akamai',
      desc: 'Akamai provides advanced cloud services, enhancing website performance, cybersecurity, and content delivery for seamless, secure, and fast digital experiences globally.',
      image: '/assets/akamai.png',
      color: 'blue'
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="w-[90%] mx-auto">
        {/* Top Section: Text & Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-green-50 text-[#07a447] px-4 py-1.5 rounded-lg text-sm font-bold mb-6 border border-green-100">
              <span className="w-1.5 h-1.5 rounded-full bg-[#07a447]"></span>
              <span>Multi-Cloud Hosting Simplified</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
              CloudMinister - Your Trusted <span className="text-gray-800">Multi–Cloud Hosting Partner</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              Empower your business with the best cloud hosting solutions from Microsoft Azure, Akamai, AWS, and Google Cloud—all under one roof. At CloudMinister, we provide seamless, scalable, and secure cloud hosting services tailored to your needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-gray-100">
              <Image
                src="/assets/vps_hosting_offer.avif"
                alt="Multi-Cloud Hosting Services"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-8 h-8 text-[#07a447] fill-[#07a447]" />
                </div>
              </div>
            </div>
            {/* Decorative elements behind video */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-50 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-50 rounded-full -z-10"></div>
          </motion.div>
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
