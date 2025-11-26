import React from 'react';
import { Mail, Github, Twitter, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-white/5 relative overflow-hidden">
      {/* Big Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[15rem] font-bold text-white/[0.02] pointer-events-none select-none font-sans whitespace-nowrap">
        ACGLINE<span className="font-mono">.ORG</span>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">准备好开启新篇章了吗？</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-10">
          无论是项目合作、技术交流，还是只是想聊聊最新的番剧，
          我随时欢迎你的来信。
        </p>

        <div className="flex justify-center gap-6 mb-12">
          {[
            { icon: <Github size={24} />, href: "https://github.com", label: "Github" },
            { icon: <Twitter size={24} />, href: "https://twitter.com", label: "Twitter" },
            { icon: <Mail size={24} />, href: "mailto:hello@acgline.org", label: "Email" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="p-4 rounded-full bg-slate-800 text-slate-300 hover:bg-violet-600 hover:text-white transition-all transform hover:scale-110 shadow-lg border border-slate-700 hover:border-violet-500"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="max-w-md mx-auto relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-xl blur opacity-20"></div>
          <div className="relative bg-slate-900 rounded-xl p-1 flex items-center border border-white/10">
             <input 
                type="email" 
                placeholder="输入你的邮箱订阅更新..." 
                className="bg-transparent flex-1 px-4 py-3 text-white placeholder-slate-500 outline-none"
             />
             <button className="bg-white text-slate-900 px-6 py-2.5 rounded-lg font-bold hover:bg-slate-200 transition-colors flex items-center gap-2">
                订阅 <Send size={16} />
             </button>
          </div>
        </div>

        <div className="text-slate-600 text-sm flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-500"></span>
            <p className="font-mono">
              © {new Date().getFullYear()} <span className="text-slate-400 font-bold">acgline.org</span>
            </p>
          </div>
          <p className="opacity-70">Designed with <span className="text-violet-500">♥</span> & Code.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;