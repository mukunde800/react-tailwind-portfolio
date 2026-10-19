import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Container from '@/components/ui/Container';

const socials = [
  { icon: Github,   href: 'https://github.com/ton-user',   label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/ton-user', label: 'LinkedIn' },
  { icon: Twitter,  href: 'https://twitter.com/ton-user',  label: 'Twitter' },
  { icon: Mail,     href: 'mailto:contact@thomasdurand.dev', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-slate-700 dark:bg-surface-muted/40">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Thomas Durand. Fait avec ❤️ et React.
          </p>
          <ul className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                   className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-primary hover:text-white dark:text-slate-400">
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}