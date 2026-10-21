import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';
import ProjectCard from '../cards/ProjectCard';
import { projects } from '../../data/projects';

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-slate-50 py-20 md:py-28 dark:bg-surface-muted/40">
      <Container>
        <AnimatedSection>
          <SectionTitle
            overline="Projets"
            title="Une sélection de mes réalisations"
            subtitle="Chaque projet est une occasion d'apprendre et de livrer mieux."
          />
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <AnimatedSection key={p.slug} delay={i * 0.05}>
              <ProjectCard project={p} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}