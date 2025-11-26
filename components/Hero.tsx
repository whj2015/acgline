import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-violet-300 text-sm mb-8 animate-fade-in-up">
          <Sparkles size={14} />
          <span>欢迎来到 ACG 维度</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          连接 <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">现实</span> 与
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400 relative">
            幻想
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-violet-500 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span> 的界限
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          我是 <b>AcgLine</b>，一名 Web 开发爱好者。
          <br />
          在这里记录我的学习历程，分享我对代码与二次元的热爱。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3.5 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-200 transition-colors flex items-center gap-2"
          >
            探索作品 <ArrowRight size={18} />
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 bg-white/5 text-white font-medium rounded-full border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            关于我
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-transparent via-slate-500 to-transparent opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;