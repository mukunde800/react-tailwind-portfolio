import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import SEO from '../components/common/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404 — Page introuvable" />
      <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <span className="text-7xl font-extrabold text-primary">404</span>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
          Page introuvable
        </h1>
        <p className="mt-3 max-w-md text-slate-600 dark:text-slate-400">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Button as={Link} to="/" className="mt-8">
          Retour à l'accueil
        </Button>
      </Container>
    </>
  );
}