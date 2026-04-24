'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const PowerfulServices = () => {
  const services = [
    {
      title: 'Microsoft 365',
      desc: 'Microsoft 365 is a cloud-based suite offering productivity tools like Word, Excel, Teams, and Outlook, enabling seamless collaboration, communication, and data security for businesses and individuals across devices.',
      image: '/assets/microsoft.png',
      cta: 'See plans'
    },
    {
      title: 'Google Workspace',
      desc: 'Google Workspace is a cloud-based productivity suite featuring Gmail, Docs, Drive, Meet, and Calendar. It streamlines collaboration, communication, and organization for teams, offering secure, real-time access across devices.',
      image: '/assets/google.png',
      cta: 'See plans'
    }
  ];

  return (
    <section className="py-20 bg-[#050b2b] text-white overflow-hidden">
      <div className="w-[90%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Discover Our Powerful <br />
            <span className="text-white">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#101942] p-8 lg:p-10 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                <div className="flex-shrink-0 w-20 h-20 relative group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-3 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#07a447] transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-sm lg:text-base leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center md:justify-start md:pl-[112px]">
                <button className="bg-[#f29400] text-white px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-wider hover:bg-[#d98500] transition-all shadow-xl shadow-orange-950/20 active:scale-95">
                  {service.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerfulServices;
