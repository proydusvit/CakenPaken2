import styles from '../Header.module.scss';
import { Link } from '@/navigation';
import { usePathname } from '@/navigation';

const Navigation = ({
  isClicked,
  projects,
  shop,
  events,
  about,
  crew,
  gallery,
}) => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link
            rel="canonical"
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
          <Link
            rel="canonical"
            href="/merch"
            className={`${styles.link} ${
              pathname === '/merch' ? styles.active : ''
            }`}
            onClick={isClicked}
          >
            {shop}
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            rel="canonical"
            href="/events"
            className={`${styles.link} ${
              pathname === '/events' ? styles.active : ''
            }`}
            onClick={isClicked}
          >
            {events}
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            rel="canonical"
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
            rel="canonical"
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
            rel="canonical"
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
