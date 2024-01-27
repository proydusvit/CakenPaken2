import Link from 'next/link';
import Image from 'next/image';

import styles from './Sponsor.module.scss';
import Idlo from '@/assets/imgHome/sponsor/Logo_IDLO.png';
import Gorgany from '@/assets/imgHome/sponsor/Logo_Gorgany.png';
import Objerky from '@/assets/imgHome/sponsor/logo_Objerky.png';
import Snow from '@/assets/imgHome/sponsor/Snow.png';

import { useTranslations } from 'next-intl';

import SliderComponent from '@/components/slider/SliderComponent';
import { listItems } from './SponsorList';

const SponsorAndHelp = () => {
  const t = useTranslations('Home');

  return (
    <>
      <div className={styles.sponsor}>
        <h3 className={styles.spon}>{t('sponsors')}</h3>

        <SliderComponent list={listItems} />

        <ul className={styles.list}>
          <li>
            <Link href="https://iidlo.com/" aria-label="Idlo">
              <Image
                className={styles.idlo}
                src={Idlo}
                width={233}
                height={76}
                alt="Idlo"
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.gorgany.com/" aria-label="Gorgany">
              <Image
                className={styles.gorgany}
                src={Gorgany}
                width={285}
                height={81}
                alt="Gorgany"
              />
            </Link>
          </li>
          <li>
            <Link href="https://objerky.com/en" aria-label="Objerky">
              <Image
                className={styles.objerky}
                src={Objerky}
                width={218}
                height={77}
                alt="Objerky"
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.snowstuff.com.ua/" aria-label="Snow">
              <Image
                className={styles.snow}
                src={Snow}
                width={254}
                height={65}
                alt="Snow"
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SponsorAndHelp;
