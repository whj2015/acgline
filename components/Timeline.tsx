import React from 'react';
import { Calendar } from 'lucide-react';
import { Experience } from '../types';

const experiences: Experience[] = [
  {
    id: '1',
    role: '前端开发者',
    company: '自由职业 / 个人项目',
    period: '2023 - 至今',
    description: '专注于 Web 前端技术栈的学习与实践，维护个人博客与开源小工具，探索 React 生态系统。',
  },
  {
    id: '2',
    role: '计算机专业学生',
    company: '大学期间',
    period: '2019 - 2023',
    description: '在校期间系统学习了计算机基础，并利用课余时间自学前端开发，参与了一些校园社团网站的维护。',
  },
  {
    id: '3',
    role: 'ACG 爱好者',
    company: '兴趣使然',
    period: '2018 - 2019',
    description: '出于对动漫的热爱，开始尝试修改博客主题，这是我接触代码的起点。',
  },
];

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">时间轨迹</h2>
          <p className="text-slate-400">记录学习与成长的脚印</p>
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
                  <div className={`bg-slate-900/40 p-6 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all hover:bg-slate-900/60 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`flex items-center gap-2 text-violet-400 text-sm font-mono mb-2 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-slate-400 font-medium mb-3">{exp.company}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
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