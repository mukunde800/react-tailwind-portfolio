import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import ThemeToggle from '../common/ThemeToggle';
import MobileMenu from './MobileMenu';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { NAV_LINKS } from '../../utils/constants';
import { cn } from '../../utils/cn';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(NAV_LINKS.map((l) => l.id));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md dark:border-slate-700/60 dark:bg-surface-dark/80">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            <span className="text-primary">&lt;</span>MB<span className="text-primary">/&gt;</span>
          </Link>

          {/* Navigation desktop */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={cn(
                    'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    activeId === id
                      ? 'text-primary'
                      : 'text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary-400'
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button as="a" href="#contact" size="sm" className="hidden md:inline-flex">
              Me contacter
            </Button>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className={cn(
                'rounded-lg p-2 md:hidden',
                'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                'dark:text-slate-300 dark:hover:bg-slate-700/60 dark:hover:text-white',
                'transition-colors duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500'
              )}
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        <MobileMenu open={open} onClose={() => setOpen(false)} />
      </Container>
    </header>
  );
}