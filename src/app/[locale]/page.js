// import { useTranslations } from 'next-intl';
// import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import Home from '@/blocks/Home/Home';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Home' });
  return {
    title: t('cak'),
    description: t('cak'),
    alternates: {
      canonical: 'https://www.cakenpaken.com',
    },
    openGraph: {
      title: t('cak'),
      description: t('cak'),
      url: `www.cakenpaken.com`,
      siteName: 'CakenPaken',
      images: [
        {
          url: 'https://res.cloudinary.com/dzrjsjo7z/image/upload/v1706289851/rkhnc0xe3c2b7fnzgf6o.jpg',
          width: 192,
          height: 192,
        },
      ],
      locale: locale,
      type: 'website',
    },
  };
}
export default function Homepage() {
  return <Home />;
}
