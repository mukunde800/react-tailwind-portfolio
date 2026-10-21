import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { socials } from '../../data/socials';

const ICONS = { Github, Linkedin, Twitter, Mail };

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socials.map(({ name, href, icon }) => {
        const Icon = ICONS[icon] ?? Mail;
        return (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-primary hover:text-white dark:text-slate-400"
            >
              <Icon size={18} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}