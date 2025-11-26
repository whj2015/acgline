import React from 'react';
import { Brain, Bot, Gamepad2, Rocket } from 'lucide-react';

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
              你好！我是 AcgLine。
              <br/><br/>
              我并不是计算机专业的学生，也不是职业程序员。
              但我坚信，技术不仅仅属于工程师，它属于每一个保持好奇心的人。
              <br/><br/>
              <b>"Acg"</b> 代表我的初心，<b>"Line"</b> 是我连接兴趣与技术的纽带。
              目前，我将全部的精力投入到了 <b>人工智能 (AI)</b> 的探索中。从大语言模型（LLM）的原理学习，到 AI 绘画的实践，我在不断拓宽认知的边界。
              <br/><br/>
              虽然现在还没有拿得出手的项目，但我相信，每一次尝试都是通向未来的基石。
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: <Brain size={20} />, label: "AI Enthusiast", color: "text-blue-400" },
                { icon: <Rocket size={20} />, label: "Non-CS Major", color: "text-purple-400" },
                { icon: <Bot size={20} />, label: "Prompt Engineering", color: "text-amber-400" },
                { icon: <Gamepad2 size={20} />, label: "Gamer", color: "text-pink-400" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-violet-500/30 transition-colors">
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
               {/* Abstract AI Representation */}
               <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full blur-[40px] opacity-60 animate-pulse"></div>
                  <div className="relative -mt-16 text-6xl">🤖</div>
                  <p className="mt-6 text-slate-400 font-mono text-sm typing-effect">
                    Learning...
                  </p>
               </div>
               
               <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 to-transparent">
                  <p className="text-white font-mono text-sm">Status: Exploring_New_Worlds...</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;