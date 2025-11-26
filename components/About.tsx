import React from 'react';
import { Code, Coffee, Gamepad2, Headphones } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-violet-500 rounded-full"></span>
              关于 AcgLine
            </h2>
            <p className="text-slate-400 leading-7 mb-6 text-lg">
              你好！我是 AcgLine，一个普通的 Web 开发爱好者。
              <br/><br/>
              这里的 <b>"Acg"</b> 代表着我灵感的源泉——动画、漫画与游戏；
              而 <b>"Line"</b> 则是连接这些幻想世界与现实技术的通道。
              <br/><br/>
              我正在学习 React 和现代 Web 技术栈，努力构建更好看的界面。
              不写代码的时候，我通常沉浸在开放世界游戏中，或者在合成器音乐中寻找新的节奏。
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: <Code size={20} />, label: "Web Developer", color: "text-blue-400" },
                { icon: <Gamepad2 size={20} />, label: "Hardcore Gamer", color: "text-purple-400" },
                { icon: <Coffee size={20} />, label: "Coffee Addict", color: "text-amber-400" },
                { icon: <Headphones size={20} />, label: "Audiophile", color: "text-pink-400" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                  <span className={item.color}>{item.icon}</span>
                  <span className="font-medium text-slate-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual/Image Side */}
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-cyan-600 rounded-2xl rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-slate-800 rounded-2xl -rotate-3 border border-slate-700"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 aspect-[4/3] bg-slate-900 flex items-center justify-center">
               {/* Placeholder for Profile or Abstract Art */}
               <img 
                 src="https://picsum.photos/800/600?grayscale" 
                 alt="Workspace" 
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 hover:scale-105"
               />
               <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 to-transparent">
                  <p className="text-white font-mono text-sm">System.init('AcgLine_Core');</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;