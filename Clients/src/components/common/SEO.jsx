import { Helmet } from 'react-helmet-async';
import { SITE } from '../../utils/constants';

export default function SEO({
  title = `${SITE.name} — ${SITE.role}`,
  description = 'Portfolio de Thomas Durand, développeur frontend React & Tailwind CSS.',
  image = '/images/avatar.webp',
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}