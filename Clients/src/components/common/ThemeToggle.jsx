import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Activer le thème clair' : 'Activer le thème sombre'}
      aria-pressed={isDark}
      title={isDark ? 'Thème clair' : 'Thème sombre'}
      className={cn(
        'relative inline-flex h-9 w-9 items-center justify-center rounded-lg',
        'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
        'dark:text-slate-300 dark:hover:bg-slate-700/60 dark:hover:text-white',
        'transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        'dark:focus-visible:ring-offset-surface-dark',
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'sun' : 'moon'}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="flex"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}