import React from 'react';
import { Calendar, BookOpen, Lightbulb, Search } from 'lucide-react';
import { Experience } from '../types';

// Using Experience type for general timeline events
const experiences: Experience[] = [
  {
    id: '1',
    role: 'AI 探索者',
    company: 'Current Focus',
    period: '2023 - 至今',
    description: '被生成式 AI 的爆发深深吸引，开始系统了解 LLM、RAG 以及 AI 绘画技术。虽然不是科班出身，但正在努力通过开源社区学习相关知识。',
  },
  {
    id: '2',
    role: '技术尝鲜期',
    company: 'Self Learning',
    period: '2021 - 2023',
    description: '出于好奇，尝试自学 Python 和 Web 基础。虽然写出的代码很稚嫩，且没有完成完整的项目，但这段经历让我学会了如何与机器对话。',
  },
  {
    id: '3',
    role: '兴趣萌芽',
    company: 'Origin',
    period: 'Before 2021',
    description: '作为一名普通的 ACG 爱好者，对计算机世界充满向往。喜欢折腾各种软件和系统，这是我探索技术的起点。',
  },
];

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">探索足迹</h2>
          <p className="text-slate-400">非科班的学习与折腾记录</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-violet-500/50 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`flex flex-col md:flex-row gap-8 relative ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-[5px] top-6 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] z-10"></div>

                {/* Content Box */}
                <div className="md:w-1/2 pl-8 md:pl-0 md:px-12">
                  <div className={`bg-slate-900/40 p-6 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all hover:bg-slate-900/60 group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`flex items-center gap-2 text-violet-400 text-sm font-mono mb-2 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className={`flex items-center gap-2 mb-1 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                         <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                         {index === 0 ? <Search size={18} className="text-cyan-400"/> : 
                          index === 1 ? <BookOpen size={18} className="text-violet-400"/> : 
                          <Lightbulb size={18} className="text-amber-400"/>}
                    </div>
                    <h4 className="text-slate-500 font-medium mb-3 text-sm tracking-wider uppercase">{exp.company}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                      {exp.description}
                    </p>
                  </div>
                </div>
                
                {/* Empty Space for Grid alignment */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;