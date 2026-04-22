'use client';

import React, { useState } from 'react';
import { Check, Zap, Server, Shield, Cloud, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: billingCycle === 'monthly' ? '$4.99' : '$3.99',
      desc: 'Perfect for personal blogs and small websites.',
      features: [
        '1 Website',
        '10 GB SSD Storage',
        'Unlimited Bandwidth',
        'Free SSL Certificate',
        '1 Email Account',
        '24/7 Support',
      ],
      color: 'blue',
      popular: false,
    },
    {
      name: 'Professional',
      icon: Server,
      price: billingCycle === 'monthly' ? '$9.99' : '$7.99',
      desc: 'Ideal for growing businesses and portfolios.',
      features: [
        'Unlimited Websites',
        '50 GB NVMe Storage',
        'Unlimited Bandwidth',
        'Free SSL & Domain',
        'Unlimited Emails',
        'Daily Backups',
        'Priority Support',
      ],
      color: 'indigo',
      popular: true,
    },
    {
      name: 'Business',
      icon: Shield,
      price: billingCycle === 'monthly' ? '$19.99' : '$15.99',
      desc: 'Maximum performance for high-traffic sites.',
      features: [
        'Unlimited Websites',
        'Unlimited NVMe Storage',
        'Unlimited Bandwidth',
        'Free SSL & Domain',
        'Unlimited Emails',
        'Advanced Security',
        'Dedicated IP',
        'VIP Support',
      ],
      color: 'purple',
      popular: false,
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
            Choose Your <span className="text-primary-600">Hosting Plan</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Scalable hosting solutions tailored to your needs. Get started today with our risk-free 30-day money-back guarantee.
          </motion.p>

          <div className="mt-10 flex items-center justify-center space-x-4">
            <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-8 bg-primary-600 rounded-full p-1 transition-all duration-300 focus:outline-none"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-bold ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-400'}`}>
              Yearly <span className="text-green-500 ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${plan.popular ? 'border-primary-600 shadow-xl' : 'border-gray-100'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${plan.popular ? 'bg-primary-600 text-white' : 'bg-primary-50 text-primary-600'}`}>
                <plan.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{plan.desc}</p>

              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-gray-500 ml-2 font-medium">/mo</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3 text-gray-700 font-medium">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary-600" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-lg font-bold transition-all flex items-center justify-center space-x-2 group ${plan.popular ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-200' : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200'}`}>
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
