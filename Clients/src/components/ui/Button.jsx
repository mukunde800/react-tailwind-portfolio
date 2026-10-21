import { cn } from '../../utils/cn';

const variants = {
  primary:   'bg-primary text-blue-500 hover:bg-primary-600 shadow-md shadow-primary/20',
  secondary: 'bg-red-600 text-white hover:bg-red-700 dark:bg-red-700 dark:text-white dark:hover:bg-red-800',
  outline:   'border-2 border-primary text-primary hover:bg-primary hover:text-green-50 dark:border-primary/20 dark:text-primary/20 dark:hover:bg-primary/10 dark:hover:text-primary',
  ghost:     'text-green-700 hover:bg-green-100 dark:text-green-200 dark:hover:bg-surface-muted',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold',
        'transition-all duration-200 active:scale-95',
        'disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}