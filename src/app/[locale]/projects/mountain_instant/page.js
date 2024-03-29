import Film from '@/blocks/Projects/Film/Film';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Projects' });

  return {
    title: ` ${t('film')} | ${t('cak')}`,
    description: ` ${t('film')} | ${t('cak')}`,
    alternates: {
      canonical: 'https://www.cakenpaken.com/projects/mountain_instant',
    },
    openGraph: {
      title: ` ${t('film')} | ${t('cak')}`,
      description: ` ${t('film')} | ${t('cak')}`,
      url: `www.cakenpaken/projects/mountain_instant`,
      siteName: 'CakenPaken',
      images: [
        {
          url: 'https://res.cloudinary.com/dzrjsjo7z/image/upload/v1700133880/ap3hds38ylmfxvf1vcbs.jpg',
          width: 192,
          height: 192,
        },
      ],
      locale: locale,
      type: 'website',
    },
  };
}
const Mountaininstant = () => {
  const t = useTranslations('Projects');
  return (
    <Film
      projects={t('projects')}
      home={t('home')}
      film={t('film')}
      textF={t('textF')}
      title={t('title')}
    />
  );
};

export default Mountaininstant;
