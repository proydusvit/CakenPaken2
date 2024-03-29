import styles from './Team.module.scss';
import { useTranslations } from 'next-intl';
import { listTeam, listTeamTwo } from './listTeam';
import FotoBox from './FotoBox';
import Section from '@/components/Section/Section';
import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';

const Team = () => {
  const t = useTranslations('Team');
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
          '@id': `/team`,
          name: t('team'),
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
      link: '/team',
      text: t('team'),
    },
  ];
  const websiteJsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'WebSite',
    name: t('team'),
    description: 'Ми команда ЦакенПакена',
    url: 'https://www.cakenpaken.com/team',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        key="website-jsonld"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbsJsonLD) }}
        key="breadcrumbs-jsonld"
      />
      <Section>
        <BreadCrumbs list={breadCrumbsList} />
        <div>
          <h1 className={styles.title}> {t('team')}</h1>
        </div>

        <div>
          <FotoBox list={listTeam} />
        </div>
        <div>
          <h2 className={styles.join}>{t('joined')}</h2>
        </div>

        <div>
          <FotoBox list={listTeamTwo} />
        </div>
      </Section>
    </>
  );
};

export default Team;
