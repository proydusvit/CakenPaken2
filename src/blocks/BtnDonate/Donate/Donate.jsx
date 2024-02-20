import style from './Donate.module.scss';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { listItems } from './List.js';
import Section from '@/components/Section/Section';
import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
const DonateCaken = () => {
  const t = useTranslations('Support');

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
          '@id': `/donate`,
          name: t('supportcaken'),
        },
      },
    ],
  };
  const breadCrumbsList = [
    {
      link: `/`,
      text: t('home'),
    },
    {
      link: `/donate`,
      text: t('supportcaken'),
    },
  ];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbsJsonLD) }}
        key="breadcrumbs-jsonld"
      />
      <Section>
        <BreadCrumbs list={breadCrumbsList} />
        <h1 className={style.title}>{t('supportcaken')}</h1>
        {/* <div className={style.donate}>
        <h2 className={style.donate_title}>{t('donation')}</h2>
        <p className={style.donate_text}>{t('textdonat')}</p>
      </div> */}

        <ul className={style.fund}>
          {listItems.map(item => (
            <li key={item.id} className={style.fund_item}>
              <div className={style.fund_box}>
                <Image
                  className={style.fund_img}
                  src={item.logo}
                  width={item.width}
                  height={item.height}
                  alt={t(item.title)}
                />
              </div>
              <div className={style.found}>
                <h2 className={style.found_title}>{t(item.title)}</h2>
                <ul className={style.found_list}>
                  <li className={style.found_text}>{t('textPatreon')}</li>
                  <li className={style.found_text}>{t('textPatreon1')}</li>
                </ul>
                <Link
                  target="_blank"
                  rel="canonical"
                  className={style.found_link}
                  href={item.link}
                >
                  {t('suppotteam')}
                </Link>
              </div>
              <div className={style.qr}>
                <Image
                  className={style.fund_qr}
                  src={item.qr}
                  width={300}
                  height={300}
                  alt={t(item.title)}
                />
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
};

export default DonateCaken;
