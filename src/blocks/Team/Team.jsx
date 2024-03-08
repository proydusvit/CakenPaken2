'use client';
import styles from './Team.module.scss';

import { motion } from 'framer-motion';
import { listTeam, listTeamTwo } from './listTeam';
import FotoBox from './FotoBox';
import Section from '@/components/Section/Section';
import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
const Team = ({
  teamt,
  home,
  joined,
  Bombar,
  Arsen,
  Kolisnyk,
  Savchuk,
  Yavych,
  Meloy,
  Natali,
  Stas,
  Sopot,
  Chycha,
}) => {
  const breadCrumbsJsonLD = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: '1',
        item: {
          '@id': `/`,
          name: home,
        },
      },
      {
        '@type': 'ListItem',
        position: '2',
        item: {
          '@id': `/team`,
          name: teamt,
        },
      },
    ],
  };

  const breadCrumbsList = [
    {
      link: '/',
      text: home,
    },
    {
      link: '/team',
      text: teamt,
    },
  ];
  const websiteJsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'WebSite',
    name: teamt,
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
        >
          <h1 className={styles.title}>{teamt}</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
        >
          <FotoBox
            list={listTeam}
            Bombar={Bombar}
            Arsen={Arsen}
            Kolisnyk={Kolisnyk}
            Savchuk={Savchuk}
            Yavych={Yavych}
            Meloy={Meloy}
            Natali={Natali}
            Stas={Stas}
            Sopot={Sopot}
            Chycha={Chycha}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
        >
          <h2 className={styles.join}>{joined}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
        >
          {/* <FotoBox list={listTeamTwo} /> */}
        </motion.div>
      </Section>
    </>
  );
};

export default Team;
