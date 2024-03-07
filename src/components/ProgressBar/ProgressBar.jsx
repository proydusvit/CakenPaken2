'use client';
import styles from './ProgressBar.module.scss';
import { motion, useScroll } from 'framer-motion';

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={styles.progressBar}
      style={{ scaleX: scrollYProgress }}
    ></motion.div>
  );
};

export default ProgressBar;
