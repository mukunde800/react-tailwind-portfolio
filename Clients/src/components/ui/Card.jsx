import { cn } from '../../utils/cn';

export default function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200 bg-white p-6',
        'transition-all duration-300 hover:shadow-lg',
        'dark:border-slate-700 dark:bg-surface-muted',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}