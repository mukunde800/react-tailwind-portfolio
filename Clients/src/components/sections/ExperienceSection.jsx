import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';
import TimelineItem from '../cards/TimelineItem';
import { experience } from '../../data/experience';
import { education } from '../../data/education';

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-slate-50 py-20 md:py-28 dark:bg-surface-muted/40">
      <Container>
        <AnimatedSection>
          <SectionTitle
            overline="Parcours"
            title="Expériences & formation"
            subtitle="Mon chemin jusqu'ici."
          />
        </AnimatedSection>

        <div className="grid gap-12 md:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <h3 className="mb-6 text-lg font-bold text-slate-900 dark:text-white">
              💼 Expérience
            </h3>
            <ul className="space-y-8">
              {experience.map((e, i) => (
                <TimelineItem key={e.title} {...e} isLast={i === experience.length - 1} />
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h3 className="mb-6 text-lg font-bold text-slate-900 dark:text-white">
              🎓 Formation
            </h3>
            <ul className="space-y-8">
              {education.map((e, i) => (
                <TimelineItem key={e.title} {...e} isLast={i === education.length - 1} />
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}