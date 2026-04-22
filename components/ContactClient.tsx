'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Headphones, Globe } from 'lucide-react';
import { motion } from 'motion/react';

const ContactClient = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { label: 'General Support', value: 'support@newtoncloudserve.com', icon: Mail },
    { label: 'Sales Inquiries', value: 'sales@newtoncloudserve.com', icon: Globe },
    { label: 'Phone Support', value: '+91 98406 04073', icon: Phone },
    { label: 'Main Office', value: '123 Cloud St, Silicon Valley, CA', icon: MapPin },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-600/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="w-[90%] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-5xl font-extrabold mb-6"
            >
              Contact <span className="text-primary-600">Us</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 mb-10 leading-relaxed"
            >
              Have questions or need help? Our team is here to support you 24/7.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-8"
            >
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Get in Touch</h2>
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                    <info.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{info.label}</h4>
                    <p className="text-gray-500 font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
              <div className="pt-8 border-t border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Support Channels</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-2xl text-center hover:bg-primary-50 transition-colors cursor-pointer">
                    <MessageSquare className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                    <span className="text-sm font-bold text-gray-900">Live Chat</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl text-center hover:bg-primary-50 transition-colors cursor-pointer">
                    <Headphones className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                    <span className="text-sm font-bold text-gray-900">Tickets</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-gray-50 p-8 lg:p-12 rounded-3xl border border-gray-100 shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white border-2 border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary-500 transition-all text-gray-900 font-medium"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-white border-2 border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary-500 transition-all text-gray-900 font-medium"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white border-2 border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary-500 transition-all text-gray-900 font-medium"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full bg-white border-2 border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary-500 transition-all text-gray-900 font-medium resize-none"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-primary-700 transition-all shadow-xl shadow-primary-200 flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ContactClient;
