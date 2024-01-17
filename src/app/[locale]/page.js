// import { useTranslations } from 'next-intl';
// import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import Home from '@/blocks/Home/Home';
// const locales = ['en', 'uk'];
// const { Link } = createSharedPathnamesNavigation({ locales });
// export async function generateMetadata({params: {locale}}) {
//   const t = await getTranslations({locale, namespace: 'Home'});

//   return {
//     title: t('title')
//   };
// }
export default function Homepage() {
  //   const t = useTranslations('Home');
  return <Home />;
}
