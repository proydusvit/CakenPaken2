import styles from './ButtonHeader.module.scss';
// import { useState, useEffect } from 'react';
// import { useMediaQuery } from '@react-hook/media-query';
// import { usePathname } from '@/navigation';

const ButtonHeader = ({ handleClick, isClicked }) => {
  // const pathname = usePathname();
  // const isMobile = useMediaQuery('(max-width: 767px)');
  // const [backgroundColor, setBackgroundColor] = useState('black');

  // useEffect(() => {
  //   const isWhiteBackgroundRoute = [
  //     '/projects/mountain_instant',
  //     '/projects/trail',
  //     '/gallery/mountain_instant',
  //     '/gallery/trail',
  //     '/about',
  //     '/',
  //   ].includes(pathname);

  //   const newBackgroundColor =
  //     isWhiteBackgroundRoute && isMobile ? 'white' : 'black';

  //   setBackgroundColor(newBackgroundColor);
  // }, [pathname, isMobile]);
  return (
    <div className={styles.nav}>
      <button
        className={`${styles.button} ${isClicked ? styles.clicked : ''}`}
        onClick={handleClick}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
    </div>
  );
};

export default ButtonHeader;
