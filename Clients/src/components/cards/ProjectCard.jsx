import { ExternalLink, Github } from 'lucide-react';
import Badge from '../ui/Badge';

export default function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-surface-muted">
      <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t}><Badge>{t}</Badge></li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300"
            >
              <Github size={16} /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300"
            >
              <ExternalLink size={16} /> Démo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}