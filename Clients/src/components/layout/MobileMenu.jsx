import { AnimatePresence, motion } from 'framer-motion';
import { NAV_LINKS } from '../../utils/constants';

export default function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden md:hidden"
        >
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={onClose}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-surface-muted"
              >
                {label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}