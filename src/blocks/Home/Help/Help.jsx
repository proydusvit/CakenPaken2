import styles from './Help.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/assets/imgDonate/book.png';
import { useTranslations } from 'next-intl';

const Help = () => {
  const t = useTranslations('Home');

  return (
    <div className={styles.donate}>
      {/* <p>{t('donateU')}</p>
      <div>
        <Link
          target="_blank"
          rel="canonical"
          href="https://olympiccircle.org.ua/pro-nas/rekvizyty.html"
          className={styles.donate__fond}
        >
          <Image
            className={styles.img}
            src={Logo}
            width={70}
            height={70}
            alt="help Ukraine"
          />
        </Link>
      </div> */}
      <Link target="_blank" href="https://mycity.one/projects/caken-">
        {t('kraud')}
      </Link>

      <div>
        <Link
          target="_blank"
          href="https://mycity.one/projects/caken-"
          className={styles.donate__fond}
        >
          <Image
            className={styles.img}
            src={Logo}
            width={75}
            height={100}
            alt="Book"
          />
        </Link>
      </div>
    </div>
  );
};

export default Help;
