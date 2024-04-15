import { listMerch } from './merchlist';
import styles from '@/blocks/Merch/Merchid.module.scss';
import Section from '@/components/Section/Section';
import SectionSecond from '@/components/Section/SectionSecond';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
const MerchId = ({ id }) => {
  const t = useTranslations('Merch');
  const did = id;
  const item = listMerch.find(member => member.id === did);

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
      {
        '@type': 'ListItem',
        position: '3',
        item: {
          '@id': `/merch`,
          name: t(item.name),
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
    {
      link: '/did',
      text: t(item.name),
    },
  ];

  if (!item) {
    return <p>Немає товару</p>;
  }

  return (
    <section className={styles.section}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbsJsonLD) }}
        key="breadcrumbs-jsonld"
      />
      <div className={styles.bred}>
        <BreadCrumbs list={breadCrumbsList} />
      </div>
      <div className={styles.box}>
        <div className={styles.content}>
          <Image
            src={item.img2}
            alt={item.name}
            fill
            className={styles.img}
            placeholder="blur"
          />
        </div>
        <div className={styles.content}>
          <Image
            src={item.img}
            alt={item.name}
            fill
            className={styles.img}
            placeholder="blur"
          />
          <div className={styles.order}>
            <h1 className={styles.name}>{t(item.name)}</h1>
            <p className={styles.price}>{item.price}</p>
            <p className={styles.descrip}>{t(item.des)}</p>

            <a
              target="_blank"
              href="https://t.me/cakenpaken"
              className={styles.btn}
            >
              {t('tel')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchId;
