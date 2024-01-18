import Link from 'next/link';
import style from './BreadCrumbs.module.scss';

export const BreadCrumbs = ({ list }) => {
  return (
    <nav className={style.nav}>
      {list.map(({ link, text }, id) => {
        const isLast = id === list.length - 1;

        return (
          <span key={id}>
            {isLast ? (
              <span>{text}</span>
            ) : (
              <Link rel="canonical" className={style.link} href={link}>
                {text}
              </Link>
            )}
            {id < list.length - 1 && <span className={style.span}>/</span>}
          </span>
        );
      })}
    </nav>
  );
};
