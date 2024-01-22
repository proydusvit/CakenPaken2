// import { useTranslations } from 'next-intl';
// import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import Home from '@/blocks/Home/Home';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Home' });

  return {
    title: t('cak'),
  };
}
export default function Homepage() {
  return <Home />;
}
