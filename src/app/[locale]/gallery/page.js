import Category from '@/blocks/Gallery/Category';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Gallery' });
  return {
    title: ` ${t('gallery')} | ${t('cak')}`,
    description: ` ${t('gallery')} | ${t('cak')}`,
    alternates: {
      canonical: 'https://www.cakenpaken.com/gallery',
    },
    openGraph: {
      title: ` ${t('gallery')} | ${t('cak')}`,
      description: ` ${t('gallery')} | ${t('cak')}`,
      url: `www.cakenpaken/gallery`,
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
const Gallery = () => {
  const t = useTranslations('Gallery');

  return (
    <Category
      home={t('home')}
      gallery={t('gallery')}
      film={t('film')}
      trail={t('trail')}
      border={t('border')}
    />
  );
};

export default Gallery;
