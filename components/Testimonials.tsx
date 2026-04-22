'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechFlow',
      content: 'NewtonCloud has been a game-changer for our business. Our website speed has increased by 40%, and the support team is always there when we need them.',
      avatar: 'https://picsum.photos/seed/sarah/100/100',
    },
    {
      name: 'Michael Chen',
      role: 'Full Stack Developer',
      content: 'As a developer, I appreciate the flexibility and power of NewtonCloud VPS. The performance is consistent, and the control panel is intuitive.',
      avatar: 'https://picsum.photos/seed/michael/100/100',
    },
    {
      name: 'Emily Davis',
      role: 'E-commerce Store Owner',
      content: 'Switching to NewtonCloud was the best decision for my online store. The free SSL and daily backups give me peace of mind, and my customers love the fast load times.',
      avatar: 'https://picsum.photos/seed/emily/100/100',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-extrabold text-gray-900 mb-4"
          >
            What Our <span className="text-primary-600">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Join thousands of happy customers who trust NewtonCloud for their hosting needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-3xl relative border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary-100" />
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 text-lg italic mb-8 relative z-10 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center space-x-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
