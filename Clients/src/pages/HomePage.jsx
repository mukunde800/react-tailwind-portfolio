import SEO from '../components/common/SEO';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ServicesSection from '../components/sections/ServicesSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ContactSection from '../components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <SEO />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}