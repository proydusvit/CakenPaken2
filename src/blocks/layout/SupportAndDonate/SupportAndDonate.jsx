'use client';
import styles from './SupportAndDonate.module.scss';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Switcher from './Switcher';
import { useLocale } from 'next-intl';
import { usePathname } from '@/navigation';

const Support = ({ donate, support }) => {
  const pathname = usePathname();
  const locale = useLocale();
  const [currentLanguage, setCurrentLanguage] = useState(locale);
  const [backgroundColor, setBackgroundColor] = useState('black');
  const [color, setColor] = useState('white');
  const [secondColor, setSecondColor] = useState('black');
  const [border, setBorder] = useState('black');

  useEffect(() => {
    const whiteBackgroundRoutes = [
      '/projects/mountain_instant',
      '/projects/trail',
      '/gallery/mountain_instant',
      '/gallery/trail',
      '/about',
      '/',
    ];

    if (whiteBackgroundRoutes.includes(pathname)) {
      setBackgroundColor('white');
      setColor('black');
      setSecondColor('white');
      setBorder('white');
    } else {
      setBackgroundColor('black');
      setColor('white');
      setSecondColor('black');
      setBorder('black');
    }
  }, [pathname]);

  return (
    <div className={styles.box}>
      <div className={styles.support}>
        <Link
          href="/support"
          style={{ color: secondColor, border: `1px solid ${border}` }}
          className={styles.support__ukraine}
        >
          {support}
        </Link>
        <Link
          href="/donate"
          style={{ backgroundColor: backgroundColor, color: color }}
          className={styles.support__donate}
        >
          {donate}
        </Link>
        <Switcher
          currentLanguage={currentLanguage}
          secondColor={secondColor}
          setCurrentLanguage={setCurrentLanguage}
        />
      </div>
    </div>
  );
};

export default Support;
