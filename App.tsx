import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import { Project } from './types';

// Mock Data for Projects
const projects: Project[] = [
  {
    id: 'p1',
    title: 'Bangumi Index',
    description: '一个简单的番剧索引工具，调用公开 API 展示当季新番信息，主要用于练习 React 组件化开发。',
    tags: ['React', 'REST API', 'Tailwind'],
    imageUrl: 'https://picsum.photos/600/400?random=10',
    link: '#',
    year: '2023'
  },
  {
    id: 'p2',
    title: 'AcgLine Blog Theme',
    description: '为个人博客设计的静态主题，尝试了深色模式适配和一些基础的 CSS 动画效果。',
    tags: ['HTML/CSS', 'Hugo', 'Design'],
    imageUrl: 'https://picsum.photos/600/400?random=20',
    link: '#',
    year: '2022'
  },
  {
    id: 'p3',
    title: 'Simple Music Player',
    description: '基于 Web Audio API 实现的网页音乐播放器，支持基础的歌词滚动和播放列表管理。',
    tags: ['JavaScript', 'DOM', 'Audio API'],
    imageUrl: 'https://picsum.photos/600/400?random=30',
    link: '#',
    year: '2021'
  }
];

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 font-sans selection:bg-violet-500/30">
      <Navbar />
      
      <main>
        <Hero />
        
        <About />

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">个人作品</h2>
                <p className="text-slate-400">一些学习过程中的练习与小工具</p>
              </div>
              <a href="https://github.com" className="text-violet-400 hover:text-white transition-colors mt-4 md:mt-0 font-medium">
                查看 Github 更多仓库 &rarr;
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <Timeline />
      </main>

      <Contact />
    </div>
  );
};

export default App;