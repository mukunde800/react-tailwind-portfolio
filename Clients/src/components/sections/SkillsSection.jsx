import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';
import SkillCard from '../cards/SkillCard';
import { skillCategories } from '../../data/skills';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <Container>
        <AnimatedSection>
          <SectionTitle
            overline="Compétences"
            title="Ma stack technique"
            subtitle="Les technologies et outils que j'utilise au quotidien."
          />
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-surface-muted">
                <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
                  {cat.title}
                </h3>
                <ul className="space-y-4">
                  {cat.skills.map((s) => <SkillCard key={s.name} skill={s} />)}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}