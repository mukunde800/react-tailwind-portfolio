import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';
import ServiceCard from '../cards/ServiceCard';
import { services } from '../../data/services';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28">
      <Container>
        <AnimatedSection>
          <SectionTitle
            overline="Services"
            title="Ce que je peux faire pour vous"
            subtitle="Un accompagnement de la conception au déploiement."
          />
        </AnimatedSection>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <ServiceCard service={s} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}