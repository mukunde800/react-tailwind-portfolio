import { useParams, Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import SEO from '../components/common/SEO';
import { projects } from '../data/projects';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Container className="py-24 text-center">
        <p>Projet introuvable.</p>
        <Button as={Link} to="/" className="mt-6">Retour</Button>
      </Container>
    );
  }

  return (
    <>
      <SEO title={`${project.title} — Portfolio`} description={project.description} />
      <Container className="py-16">
        <Link to="/" className="text-sm font-medium text-primary">
          ← Retour aux projets
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h1>
        <img
          src={project.image}
          alt={project.title}
          className="mt-8 w-full rounded-2xl"
        />
        <p className="mt-6 text-slate-600 dark:text-slate-400">{project.description}</p>
      </Container>
    </>
  );
}