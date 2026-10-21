import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import SocialLinks from '../common/SocialLinks';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary/10 dark:text-primary-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Disponible pour missions freelance
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
            Bonjour, je suis <span className="text-primary">Bienvenu MUKUNDE</span>
            <br />
            <span className="text-slate-700 dark:text-slate-300">Développeur Frontend</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
            Je conçois des interfaces web{' '}
            <strong>modernes, performantes et accessibles</strong> avec React,
            TypeScript et Tailwind CSS.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button as="a" href="#projects" size="lg">
              Voir mes projets <ArrowRight size={18} />
            </Button>
            <Button as="a" href="/cv-thomas-durand.pdf" variant="outline" size="lg" download>
              Télécharger mon CV <Download size={18} />
            </Button>
          </div>

          <SocialLinks className="mt-8 justify-center" />
        </motion.div>
      </Container>
    </section>
  );
}