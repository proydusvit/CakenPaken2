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
          name: t('teamt'),
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbsJsonLD) }}
        key="breadcrumbs-jsonld"
      />
      <Section>
        <BreadCrumbs list={breadCrumbsList} />
        <h1 className={styles.title}>{t('team')}</h1>
        <FotoBox list={listTeam} />
        <h2 className={styles.join}>{t('joined')}</h2>
        <FotoBox list={listTeamTwo} />
      </Section>
    </>
  );
};

export default Team;
