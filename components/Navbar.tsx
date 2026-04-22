'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Globe, Server, Cloud, Shield, Mail, Phone, Ticket, MessageSquare, BookOpen, Newspaper, Check, LayoutGrid, Building2, HelpCircle, Facebook, Twitter, Instagram, Linkedin, Cpu, Briefcase, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Sublink {
  name: string;
  href: string;
  icon: any;
}

interface MenuItem {
  name: string;
  id: string;
  href?: string;
  dropdown?: Sublink[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: MenuItem[] = [
    {
      name: 'Domain',
      id: 'domain',
      dropdown: [
        { name: 'Domain Register', href: '/domains/register', icon: Globe },
        { name: 'Transfer Domain', href: '/domains/transfer', icon: Globe },
      ]
    },
    {
      name: 'Hosting',
      id: 'hosting',
      dropdown: [
        { name: 'Web Hosting', href: '/hosting/shared', icon: Server },
        { name: 'Wordpress Hosting', href: '/hosting/wordpress', icon: Globe },
        { name: 'Reseller Hosting', href: '/hosting/reseller', icon: Server },
      ]
    },
    {
      name: 'VPS',
      id: 'vps',
      dropdown: [
        { name: 'VPS Hosting', href: '/hosting/vps', icon: Cpu },
      ]
    },
    {
      name: 'Public Cloud',
      id: 'cloud',
      dropdown: [
        { name: 'AWS', href: '/cloud/aws', icon: Cloud },
        { name: 'Azure', href: '/cloud/azure', icon: Cloud },
        { name: 'Google Cloud', href: '/cloud/google', icon: Cloud },
      ]
    },
    {
      name: 'Security',
      id: 'security',
      dropdown: [
        { name: 'SSL Certificate', href: '/security/ssl', icon: Shield },
      ]
    },
    {
      name: 'Mail',
      id: 'mail',
      dropdown: [
        { name: 'Microsoft 365', href: '/email/microsoft-365', icon: Mail },
        { name: 'G-Suite', href: '/email/g-suite', icon: Mail },
        { name: 'ZOHO', href: '/email/zoho', icon: Mail },
      ]
    },
    {
      name: 'Contact',
      id: 'contact',
      href: '/contact'
    },
    {
      name: 'About us',
      id: 'about',
      dropdown: [
        { name: 'About us', href: '/about', icon: Building2 },
        { name: 'Terms and condition', href: '/terms', icon: FileText },
        { name: 'Career', href: '/career', icon: Briefcase },
      ]
    },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300 font-sans">
      {/* Top Bar */}
      <div className="bg-[#07a447] text-white py-2 text-[10px] sm:text-sm">
        <div className="w-[90%] mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-3 sm:space-x-6">
            <div className="hidden sm:flex items-center space-x-2">
              <Phone className="w-3 h-3 sm:w-4 h-4 text-white/80" />
              <span className="font-semibold">+91 98406 04073</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3 sm:w-4 h-4 text-white/80" />
              <span className="font-semibold truncate max-w-[150px] sm:max-w-none">support@newtoncloudserve.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link href="#" className="hover:scale-110 transition-transform"><Facebook className="w-3 h-3 sm:w-4 h-4" /></Link>
            <Link href="#" className="hover:scale-110 transition-transform"><Twitter className="w-3 h-3 sm:w-4 h-4" /></Link>
            <Link href="#" className="hover:scale-110 transition-transform"><Instagram className="w-3 h-3 sm:w-4 h-4" /></Link>
            <Link href="#" className="hover:scale-110 transition-transform"><Linkedin className="w-3 h-3 sm:w-4 h-4" /></Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white shadow-xl py-1' : 'bg-white py-3'}`}>
        <div className="w-[90%] mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="http://newtoncloudserve.com/image/Logo.png" 
                alt="Newton Cloud Logo" 
                width={180} 
                height={50} 
                className="h-12 w-auto"
                unoptimized
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2" ref={navRef}>
              {menuItems.map((item) => (
                <div key={item.id} className="relative group px-1">
                  {item.dropdown ? (
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                      onMouseEnter={() => setActiveDropdown(item.id)}
                      className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-[15px] font-bold transition-all ${activeDropdown === item.id ? 'bg-gray-50 text-[#07a447]' : 'text-gray-800 hover:bg-gray-50'}`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link 
                      href={item.href || '#'} 
                      className="px-3 py-2 rounded-lg text-[15px] font-bold text-gray-800 hover:bg-gray-50 hover:text-[#07a447] transition-all"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        onMouseEnter={() => setActiveDropdown(item.id)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-3 z-50"
                      >
                        {item.dropdown.map((sublink) => (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center space-x-3 px-5 py-3 hover:bg-green-50 group transition-all"
                          >
                            <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-white transition-colors shadow-sm">
                              <sublink.icon className="w-4 h-4 text-gray-600 group-hover:text-[#07a447]" />
                            </div>
                            <span className="text-[14px] font-bold text-gray-700 group-hover:text-[#07a447]">
                              {sublink.name}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* Login/CTA Button */}
              <div className="ml-4 pl-4 border-l border-gray-100">
                <Link 
                  href="/login" 
                  className="bg-[#f29400] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#d98500] transition-all shadow-md shadow-orange-100 flex items-center space-x-2 group"
                >
                  <LayoutGrid className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                  <span>Login</span>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-2 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t border-gray-50 overflow-hidden shadow-inner"
            >
              <div className="w-[90%] mx-auto py-6 flex flex-col space-y-2 max-h-[80vh] overflow-y-auto no-scrollbar">
                {menuItems.map((item) => (
                  <div key={item.id} className="flex flex-col">
                    {item.dropdown ? (
                      <div className="flex flex-col">
                        <button 
                          onClick={() => setMobileActiveDropdown(mobileActiveDropdown === item.id ? null : item.id)}
                          className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-xl mb-1 w-full"
                        >
                          <span className="font-black text-gray-900">{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveDropdown === item.id ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {mobileActiveDropdown === item.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-6 flex flex-col space-y-1 mb-2">
                                {item.dropdown.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2.5 text-[14px] font-bold text-gray-600 hover:text-[#07a447] flex items-center space-x-3"
                                  >
                                    <sub.icon className="w-4 h-4" />
                                    <span>{sub.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href || '#'}
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-3 font-black text-gray-900 bg-gray-50 rounded-xl mb-1 hover:text-[#07a447]"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
