import Section from '@/components/Section/Section';
import styles from '@/blocks/Merch/Merch.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { listMerch } from './merchlist';
import { useTranslations } from 'next-intl';
import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
const Merh = () => {
  const t = useTranslations('Merch');
  const breadCrumbsJsonLD = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: '1',
        item: {
          '@id': `/`,
          name: t('home'),
        },
      },
      {
        '@type': 'ListItem',
        position: '2',
        item: {
          '@id': `/merch`,
          name: t('merch'),
        },
      },
    ],
  };

  const breadCrumbsList = [
    {
      link: '/',
      text: t('home'),
    },
    {
      link: '/merch',
      text: t('merch'),
    },
  ];
  return (
    <Section>
      <BreadCrumbs list={breadCrumbsList} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbsJsonLD) }}
        key="breadcrumbs-jsonld"
      />
      <h1 className={styles.name}>{t('merch')}</h1>
      <ul className={styles.list}>
        {listMerch.map(item => (
          <li key={item.id} className={styles.teamMember}>
            <Link href={`merch/${item.id}`}>
              <Image
                src={item.img}
                alt={item.name}
                className={styles.img}
                width={403}
                height={443}
              />
            </Link>
            <p className={styles.memberName}>{t(item.name)}</p>
            <p className={styles.memberPrice}>{item.price}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Merh;
