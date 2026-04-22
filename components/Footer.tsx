import React from 'react';
import Link from 'next/link';
import { Cloud, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Hosting',
      links: [
        { name: 'Shared Hosting', href: '/hosting/shared' },
        { name: 'VPS Hosting', href: '/hosting/vps' },
        { name: 'Dedicated Servers', href: '/hosting/dedicated' },
        { name: 'Cloud Hosting', href: '/hosting/cloud' },
        { name: 'Reseller Hosting', href: '/hosting/reseller' },
      ],
    },
    {
      title: 'Domains',
      links: [
        { name: 'Domain Registration', href: '/domains' },
        { name: 'Domain Transfer', href: '/domains/transfer' },
        { name: 'Whois Lookup', href: '/domains/whois' },
        { name: 'New gTLDs', href: '/domains/new-gtlds' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'News & Blog', href: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Knowledge Base', href: '/support/kb' },
        { name: 'Submit a Ticket', href: '/support/ticket' },
        { name: 'System Status', href: '/status' },
        { name: 'Community Forum', href: '/community' },
        { name: 'API Documentation', href: '/api-docs' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <Cloud className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white">
                Newton<span className="text-primary-600">Cloud</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              NewtonCloud provides premium cloud hosting solutions designed for speed, security, and scalability. Empowering businesses worldwide with cutting-edge technology.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">+91 98406 04073</span>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">support@newtoncloudserve.com</span>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <MapPin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">123 Cloud St, Silicon Valley, CA</span>
              </div>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-bold text-lg mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-primary-500 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-500">
            &copy; {currentYear} NewtonCloud. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></Link>
          </div>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
