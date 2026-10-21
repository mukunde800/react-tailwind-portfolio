import { cn } from '../../utils/cn';

export default function Badge({ className, children }) {
  return (
    <span
      className={cn(
        'inline-block rounded-full bg-primary-50 px-2.5 py-0.5',
        'text-xs font-medium text-primary-700',
        'dark:bg-primary/10 dark:text-primary-300',
        className
      )}
    >
      {children}
    </span>
  );
}