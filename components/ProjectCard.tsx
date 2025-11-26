import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-violet-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-900/20 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 z-20 bg-slate-950/70 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/10">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-900/50 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex items-center gap-4 mt-auto">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
            >
              <ExternalLink size={16} /> 访问
            </a>
          )}
           <button className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
              <Github size={16} /> 源码
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;