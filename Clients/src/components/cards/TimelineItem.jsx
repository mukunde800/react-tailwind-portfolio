export default function TimelineItem({ date, title, subtitle, description, isLast }) {
  return (
    <li className="relative pl-8">
      <span className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-primary dark:border-surface-dark" />
      {!isLast && (
        <span className="absolute left-0 top-4 h-full w-px -translate-x-1/2 bg-slate-200 dark:bg-slate-700" />
      )}
      <span className="text-xs font-semibold uppercase tracking-wider text-primary">{date}</span>
      <h3 className="mt-1 text-base font-bold text-slate-900 dark:text-white">{title}</h3>
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{subtitle}</p>
      {description && (
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{description}</p>
      )}
    </li>
  );
}