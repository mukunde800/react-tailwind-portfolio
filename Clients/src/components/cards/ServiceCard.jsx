import { Code2, Layout, Rocket } from 'lucide-react';

const ICONS = { Code2, Layout, Rocket };

export default function ServiceCard({ service }) {
  const Icon = ICONS[service.icon] ?? Code2;
  return (
    <article className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg dark:border-slate-700 dark:bg-surface-muted">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white dark:bg-primary/10">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{service.title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{service.description}</p>
      <ul className="mt-4 space-y-2">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <span className="h-1 w-1 rounded-full bg-primary" /> {f}
          </li>
        ))}
      </ul>
    </article>
  );
}