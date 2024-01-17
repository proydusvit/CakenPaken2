import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './Home.module.scss';
import Sponsor from './Sponsor/Sponsor';
import Help from './Help/Help';
import Soon from '@/assets/imgHome/svg/soon';
import Skoro from '@/assets/imgHome/svg/skoro';

import { useLocale } from 'next-intl';

const Home = () => {
  const t = useTranslations('Home');
  const locale = useLocale();
  const isEnglish = locale === 'en';

  return (
    <section>
      <div className={styles.box}>
        <Link
          loading="lazy"
          href="/projects"
          className={`${styles.content} ${styles.content_img__gallery}`}
        >
          {t('projects')}
        </Link>
        <div
          className={`${styles.content} ${styles.content_img}`}
          loading="lazy"
        >
          <div>
            <p> {t('merch')}</p>

            <div className={styles.soon}>
              {isEnglish ? <Soon /> : <Skoro />}
            </div>
          </div>
        </div>

        <Link className={styles.projects} href="/gallery" loading="lazy">
          {t('gallery')}
        </Link>
        <Help />
        <Link
          loading="lazy"
          href="/team"
          className={`${styles.content} ${styles.content_img__crew} `}
        >
          {t('crew')}
        </Link>
        <Link
          loading="lazy"
          href="/about"
          className={`${styles.content} ${styles.content_img__about}`}
        >
          {t('about')}
        </Link>

        <Sponsor />
      </div>
    </section>
  );
};

export default Home;
