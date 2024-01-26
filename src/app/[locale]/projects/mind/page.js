import Mindproj from '@/blocks/Projects/Mind/Mind';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Projects' });
  return {
    title: ` ${t('mindS')} | ${t('cak')}`,
    description: ` ${t('mindS')} | ${t('cak')}`,
    openGraph: {
      title: ` ${t('mindS')} | ${t('cak')}`,
      description: ` ${t('mindS')} | ${t('cak')}`,
      url: `www.cakenpaken/projects/mind`,
      siteName: 'CakenPaken',

      locale: locale,
      type: 'website',
    },
  };
}
const Mind = () => {
  return <Mindproj />;
};

export default Mind;
