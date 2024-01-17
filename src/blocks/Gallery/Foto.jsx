'use client';
import { initLightboxJS, SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';
import Image from 'next/image';
import styles from './Foto.module.scss';

const Foto = ({ image }) => {
  const sortedImages = image.slice().sort((a, b) => a.id - b.id);

  return (
    <>
      <SlideshowLightbox
        lightboxIdentifier="uniqueLightboxId"
        framework="next"
        images={sortedImages.map(item => ({
          src: item.img,
          alt: 'Film',
        }))}
      >
        <ul className={styles.list}>
          {sortedImages.map(item => (
            <li
              style={{
                position: 'relative',
                backgroundColor: 'white',
              }}
              className={styles.item}
              key={item.id}
            >
              <Image
                alt="Film"
                className={styles.foto}
                data-lightboxjs="uniqueLightboxId"
                quality={80}
                fill
                src={item.img}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 70vw"
                style={{
                  backgroundPosition: '50% 50%',
                }}
              />
            </li>
          ))}
        </ul>
      </SlideshowLightbox>
    </>
  );
};

export default Foto;
