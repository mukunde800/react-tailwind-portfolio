import Container from '../ui/Container';
import SocialLinks from '../common/SocialLinks';
import { SITE } from '../../utils/constants';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-slate-700 dark:bg-surface-muted/40">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} {SITE.name}. Fait avec ❤️ et React.
          </p>
          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
}