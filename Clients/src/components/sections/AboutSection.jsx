import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';

const stats = [
  { value: '4+',   label: "Années d'expérience" },
  { value: '30+',  label: 'Projets livrés' },
  { value: '15+',  label: 'Clients satisfaits' },
  { value: '100%', label: 'Engagement qualité' },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-50 py-20 md:py-28 dark:bg-surface-muted/40">
      <Container>
        <AnimatedSection>
          <SectionTitle
            overline="À propos"
            title="Un développeur passionné par le détail"
            subtitle="Mon parcours, mes valeurs et ce qui me motive au quotidien."
          />
        </AnimatedSection>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <AnimatedSection delay={0.1}>
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <p>
                Depuis <strong>4 ans</strong>, je conçois des applications web pour des startups
                et PME. Spécialiste React &amp; TypeScript, j'aime autant l'architecture que
                le pixel-perfect.
              </p>
              <p>
                Mon objectif : livrer du code <strong>lisible, testé et maintenable</strong>,
                tout en gardant une forte sensibilité UX et accessibilité.
              </p>
              <ul className="grid grid-cols-2 gap-3 pt-2">
                {['React & Next.js', 'TypeScript', 'Tailwind / SCSS', 'Tests (Vitest)'].map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-surface-muted"
                >
                  <div className="text-3xl font-extrabold text-primary">{s.value}</div>
                  <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}