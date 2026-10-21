import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Container from '../../components/ui/Container';
import SectionTitle from '../../components/ui/SectionTitle';
import AnimatedSection from '../../components/ui/AnimatedSection';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Textarea from '../../components/ui/Textarea';
import { SITE } from '../../utils/constants';

const schema = z.object({
  name:    z.string().min(2, 'Au moins 2 caractères'),
  email:   z.string().email('Email invalide'),
  message: z.string().min(10, 'Au moins 10 caractères'),
});

const contactInfo = [
  { icon: Mail,   label: 'Email',        value: SITE.email },
  { icon: Phone,  label: 'Téléphone',    value: SITE.phone },
  { icon: MapPin, label: 'Localisation', value: `${SITE.location} (Remote OK)` },
];

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setSent(true);
      reset();
      setTimeout(() => setSent(false), 5000);
    } catch (e) {
      console.error(e);
      alert("Erreur lors de l'envoi, réessayez plus tard.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <AnimatedSection>
          <SectionTitle
            overline="Contact"
            title="Travaillons ensemble"
            subtitle="Un projet, une question ? Je réponds sous 24h."
          />
        </AnimatedSection>

        <div className="grid gap-10 md:grid-cols-5">
          <AnimatedSection delay={0.1} className="md:col-span-2">
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary dark:bg-primary/10">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {label}
                    </div>
                    <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="md:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  id="name"
                  label="Nom"
                  placeholder="Votre nom"
                  error={errors.name?.message}
                  {...register('name')}
                />
                <Input
                  id="email"
                  type="email"
                  label="Email"
                  placeholder="vous@exemple.com"
                  error={errors.email?.message}
                  {...register('email')}
                />
              </div>
              <Textarea
                id="message"
                label="Message"
                placeholder="Parlez-moi de votre projet..."
                error={errors.message?.message}
                {...register('message')}
              />
              <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto">
                {isSubmitting ? 'Envoi…' : <>Envoyer <Send size={16} /></>}
              </Button>
              {sent && (
                <p className="flex items-center gap-2 text-sm font-medium text-emerald-600">
                  <CheckCircle2 size={16} /> Message envoyé avec succès !
                </p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}