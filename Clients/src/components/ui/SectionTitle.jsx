import { cn } from '../../utils/cn';

export default function SectionTitle({ overline, title, subtitle, align = 'center' }) {
  return (
    <div className={cn('mb-12 max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      {overline && (
        <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:bg-primary/10 dark:text-primary-300">
          {overline}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-slate-600 dark:text-slate-400">{subtitle}</p>
      )}
    </div>
  );
}