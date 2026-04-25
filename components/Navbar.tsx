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
        { name: 'Dedicated Server', href: '/hosting/dedicated', icon: Server },
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
    <header className="fixed w-full z-50 transition-all duration-300">
      {/* Top Bar - More subtle and integrated */}
      <div className={`transition-all duration-300 ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto py-2 bg-gray-900 text-white/90'}`}>
        <div className="w-[90%] mx-auto flex justify-end items-center px-4">
          <div className="flex items-center space-x-5">
            <Link href="#" className="hover:text-[#07a447] transition-colors"><Facebook className="w-3.5 h-3.5" /></Link>
            <Link href="#" className="hover:text-[#07a447] transition-colors"><Twitter className="w-3.5 h-3.5" /></Link>
            <Link href="#" className="hover:text-[#07a447] transition-colors"><Instagram className="w-3.5 h-3.5" /></Link>
            <Link href="#" className="hover:text-[#07a447] transition-colors"><Linkedin className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </div>

      {/* Main Nav - Glassmorphic & Floating */}
      <div className={`w-full transition-all duration-500 ${scrolled ? 'p-2 pt-4' : 'p-0'}`}>
        <nav className={`w-[100%] mx-auto transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20' : 'bg-white border-b border-gray-100'}`}>
          <div className="px-6">
            <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-16' : 'h-24'}`}>
              {/* Logo */}
              <Link href="/" className="flex-shrink-0 group">
                <div className="relative overflow-hidden">
                  <Image 
                    src="http://newtoncloudserve.com/image/Logo.png" 
                    alt="Newton Cloud Logo" 
                    width={220} 
                    height={65} 
                    className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </div>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-1" ref={navRef}>
                {menuItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown ? (
                      <button 
                        className={`flex items-center space-x-1 px-3 py-3 rounded-xl text-[13px] font-semibold transition-all duration-300 ${activeDropdown === item.id ? 'text-[#07a447] bg-green-50/50' : 'text-gray-700 hover:text-[#07a447] hover:bg-gray-50'}`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${activeDropdown === item.id ? 'rotate-180 text-[#07a447]' : 'text-gray-400'}`} />
                      </button>
                    ) : (
                      <Link 
                        href={item.href || '#'} 
                        className="px-3 py-3 rounded-xl text-[13px] font-semibold text-gray-700 hover:text-[#07a447] hover:bg-gray-50 transition-all duration-300 block"
                      >
                        {item.name}
                      </Link>
                    )}

                    {/* Premium Dropdown Menu */}
                    <AnimatePresence>
                      {item.dropdown && activeDropdown === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.95 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 z-50"
                        >
                          <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden p-2">
                            <div className="grid gap-1">
                              {item.dropdown.map((sublink) => (
                                <Link
                                  key={sublink.name}
                                  href={sublink.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center space-x-4 p-3 rounded-xl hover:bg-green-50 group transition-all duration-200"
                                >
                                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-white transition-colors shadow-sm text-gray-500 group-hover:text-[#07a447]">
                                    <sublink.icon className="w-5 h-5" />
                                  </div>
                                  <div className="flex flex-col text-left">
                                    <span className="text-[14px] font-bold text-gray-800 group-hover:text-[#07a447] whitespace-nowrap">
                                      {sublink.name}
                                    </span>
                                    <span className="text-[11px] text-gray-400 font-medium group-hover:text-[#07a447]/60">Explore solutions</span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                {/* Help Line & Login Button */}
                <div className="ml-4 pl-4 border-l border-gray-200 flex items-center space-x-4">
                  <div className="hidden lg:flex flex-col items-end">
                    <div className="flex items-center space-x-1.5 text-[#07a447]">
                      <Phone className="w-3.5 h-3.5 fill-current" />
                      <span className="text-[13px] font-black tracking-tight whitespace-nowrap">+91 8939993510 / +91 44 4550 2323</span>
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none mt-1">(24X7 helpline)</span>
                  </div>
                  <Link 
                    href="/login" 
                    className="bg-[#07a447] text-white px-7 py-2.5 rounded-xl font-bold text-sm hover:bg-[#068f3e] transition-all duration-300 shadow-lg shadow-green-200 flex items-center space-x-2 active:scale-95"
                  >
                    <LayoutGrid className="w-4 h-4" />
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
                
                {/* Mobile Contact Info */}
                <div className="mt-6 p-6 bg-green-50 rounded-2xl border border-green-100 flex flex-col items-center text-center">
                  <div className="flex items-center space-x-2 text-[#07a447] mb-1">
                    <Phone className="w-4 h-4 fill-current" />
                    <span className="text-[16px] font-black">+91 8939993510</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#07a447] mb-2">
                    <Phone className="w-4 h-4 fill-current" />
                    <span className="text-[16px] font-black">+91 44 4550 2323</span>
                  </div>
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">(24X7 helpline)</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  </header>
);
};

export default Navbar;
