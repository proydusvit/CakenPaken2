import styles from './Team.module.scss';
import { useTranslations } from 'next-intl';
import { listTeam, listTeamTwo } from './listTeam';
import FotoBox from './FotoBox';
import Section from '@/components/Section/Section';

const Team = () => {
  const t = useTranslations('Team');

  return (
    <Section className={styles.section}>
      <h1 className={styles.title}>{t('team')}</h1>
      <FotoBox list={listTeam} />
      <h2 className={styles.join}>{t('joined')}</h2>
      <FotoBox list={listTeamTwo} />
    </Section>
  );
};

export default Team;
