import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Terminal } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: '首页', href: '#home' },
  { label: '关于', href: '#about' },
  { label: '动态', href: '#timeline' },
  { label: '联系', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/5 py-3 md:py-4'
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
          style={{ zIndex: -1 }}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="container mx-auto px-6 flex justify-between items-center relative z-10">
        {/* New Brand Identity / Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          {/* Logo Icon: Abstract Line/Code symbol */}
          <div className="relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-slate-900 rounded-xl border border-slate-800 shadow-lg group-hover:border-violet-500/50 group-hover:shadow-violet-500/20 transition-all duration-300 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
             <svg className="w-5 h-5 md:w-6 md:h-6 text-slate-200 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M4 17l6-6-6-6" className="text-violet-500" />
               <path d="M12 19h8" className="text-cyan-400" />
             </svg>
          </div>
          
          {/* Text Logo with .ORG emphasis */}
          <div className="flex flex-col justify-center">
            <div className="flex items-baseline gap-1.5 leading-none">
              <span className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-slate-100 transition-colors font-sans">
                AcgLine
              </span>
              {/* Personalized .ORG Badge */}
              <div className="relative group-hover:-translate-y-0.5 transition-transform duration-300">
                 <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded blur-[2px] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                 <span className="relative block px-1.5 py-[2px] text-[10px] md:text-[11px] font-black font-mono text-cyan-100 bg-slate-900 border border-slate-700 rounded shadow-sm group-hover:border-cyan-500/50 group-hover:text-white transition-colors">
                   .ORG
                 </span>
              </div>
            </div>
            <span className="hidden md:block text-[9px] text-slate-500 font-mono tracking-[0.2em] mt-1 group-hover:text-violet-400 transition-colors duration-300">
              DIMENSION LINK
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-violet-500 after:to-cyan-500 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-violet-500/50 rounded-lg transition-all shadow-lg hover:shadow-violet-500/10 flex items-center gap-2 group"
          >
            <Terminal size={14} className="text-violet-400 group-hover:text-white transition-colors" />
            <span>Connect</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-300 hover:text-white p-2 rounded-md hover:bg-white/5 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between p-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 active:bg-violet-500/10 active:text-violet-400 transition-all group"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-medium">{item.label}</span>
                <ChevronRight size={16} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
              </a>
            ))}
            
            <div className="h-px bg-white/5 my-2" />
            
            <a
              href="#contact"
              className="w-full py-3 mt-2 rounded-xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
              onClick={() => setIsOpen(false)}
            >
              <Terminal size={16} fill="currentColor" /> 开始链接
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;