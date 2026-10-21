import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const Textarea = forwardRef(({ label, error, id, className, rows = 5, ...props }, ref) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={id}
        rows={rows}
        className={cn(
          'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm',
          'text-slate-800 placeholder-slate-400',
          'focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
          'dark:border-slate-700 dark:bg-surface-muted dark:text-white',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-200',
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
});
Textarea.displayName = 'Textarea';

export default Textarea;