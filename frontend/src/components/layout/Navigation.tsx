import React, { useState, useEffect } from 'react';
import { Anchor, Menu, X, Compass, UserCheck, Shield } from 'lucide-react';

interface NavigationProps {
  onOpenLogin: () => void;
  onOpenMembership: () => void;
  onOpenMobileApp: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenLogin,
  onOpenMembership,
  onOpenMobileApp,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Membership', href: '#membership' },
    { name: 'Learn to Sail', href: '#courses' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Events', href: '#events' },
    { name: 'Community', href: '#community' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md py-2.5 border-b border-slate-200 shadow-md'
          : 'bg-white/95 backdrop-blur-md py-3.5 border-b border-slate-200/90 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-rmyc-gold rounded-lg p-1"
          aria-label="Royal Madras Yacht Club Home"
        >
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-rmyc-gold-dark via-rmyc-gold to-rmyc-gold-light p-[1.5px] shadow-md group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-rmyc-navy flex items-center justify-center">
              <Anchor className="w-5 h-5 text-rmyc-gold group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-bold tracking-widest text-rmyc-navy group-hover:text-rmyc-gold-dark transition-colors">
              RMYC
            </span>
            <span className="text-[10px] text-slate-600 tracking-[0.18em] uppercase font-bold">
              Royal Madras Yacht Club
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links - Bold Deep Navy for 100% Legibility */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs xl:text-sm font-bold tracking-wider text-rmyc-navy hover:text-rmyc-gold-dark transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-rmyc-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 origin-left"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenMobileApp}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-full transition-all duration-300 shadow-sm animate-pulse hover:animate-none"
          >
            <span>📱 Test Mobile App</span>
          </button>
          <button
            onClick={onOpenLogin}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-rmyc-navy hover:text-rmyc-gold-dark border border-slate-300 hover:border-rmyc-gold rounded-full transition-all duration-300 bg-slate-100 hover:bg-white shadow-sm"
          >
            <UserCheck className="w-3.5 h-3.5 text-rmyc-gold-dark" />
            <span>Member Login</span>
          </button>
          <button
            onClick={onOpenMembership}
            className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold uppercase tracking-wider text-rmyc-navy bg-gradient-to-r from-rmyc-gold-light via-rmyc-gold to-rmyc-gold-dark hover:brightness-105 rounded-full transition-all duration-300 shadow-md shadow-rmyc-gold/20 hover:shadow-lg hover:shadow-rmyc-gold/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Join RMYC</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenLogin}
            className="sm:hidden px-3 py-1.5 text-[11px] font-bold text-rmyc-navy border border-rmyc-gold rounded-full bg-white shadow-sm"
          >
            Login
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full text-slate-800 hover:text-rmyc-gold bg-slate-100 hover:bg-slate-200 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-white/98 backdrop-blur-2xl z-40 flex flex-col justify-between p-6 overflow-y-auto animate-fadeIn shadow-2xl">
          <div className="flex flex-col gap-5 pt-4">
            <div className="text-[10px] tracking-[0.25em] text-rmyc-gold-dark uppercase font-bold border-b border-slate-200 pb-2">
              Navigation Menu
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-slate-900 hover:text-rmyc-gold-dark transition-colors flex items-center justify-between group font-bold"
              >
                <span>{link.name}</span>
                <Compass className="w-5 h-5 opacity-0 group-hover:opacity-100 text-rmyc-gold transition-opacity" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-8 border-t border-slate-200 mt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMembership();
              }}
              className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-rmyc-navy bg-gradient-to-r from-rmyc-gold-light via-rmyc-gold to-rmyc-gold-dark rounded-full shadow-lg"
            >
              Apply for Membership
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-rmyc-navy border border-slate-300 rounded-full bg-slate-50"
            >
              Member Login Portal
            </button>
            <div className="text-center text-xs text-slate-500 pt-2 font-bold">
              Est. 1911 · Chennai · Bay of Bengal
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
