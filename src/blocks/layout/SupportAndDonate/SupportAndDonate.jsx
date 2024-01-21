'use client';
import styles from './SupportAndDonate.module.scss';
import { Link } from '@/navigation';
import { useState, useEffect } from 'react';
import Switcher from './Switcher';
import { useLocale } from 'next-intl';
import { usePathname } from '@/navigation';

const Support = ({ donate, support }) => {
  const pathname = usePathname();
  const locale = useLocale();
  const [currentLanguage, setCurrentLanguage] = useState(locale);

  return (
    <div className={styles.box}>
      <div className={styles.support}>
        <Link
          href="/support"
          // style={{ color: secondColor, border: `1px solid ${border}` }}
          className={styles.support__ukraine}
        >
          {support}
        </Link>
        <Link
          href="/donate"
          // style={{ backgroundColor: backgroundColor, color: color }}
          className={styles.support__donate}
        >
          {donate}
        </Link>
        <Switcher
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
        />
      </div>
    </div>
  );
};

export default Support;
