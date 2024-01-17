import styles from '../Header.module.scss';
import Link from 'next/link';

const Navigation = ({
  isClicked,
  pathname,
  projects,
  shop,
  events,
  about,
  crew,
  gallery,
}) => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link
            href="/projects"
            className={`${styles.link} ${
              pathname === '/projects' ? styles.active : ''
            }`}
            onClick={isClicked}
          >
            {projects}
          </Link>
        </li>
        <li className={styles.item}>
          <span className={styles.linkDisabled}> {shop}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.linkDisabled}> {events}</span>
        </li>
        <li className={styles.item}>
          <Link
            href="/about"
            className={`${styles.link} ${
              pathname === '/about' ? styles.active : ''
            }`}
            onClick={isClicked}
          >
            {about}
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/team"
            className={`${styles.link} ${
              pathname === '/team' ? styles.active : ''
            }`}
            onClick={isClicked}
          >
            {crew}
          </Link>
        </li>

        <li className={styles.item}>
          <Link
            href="/gallery"
            className={`${styles.link} ${
              pathname === '/gallery' ? styles.active : ''
            }`}
            onClick={isClicked}
          >
            {gallery}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
