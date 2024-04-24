import styles from './Picture.module.scss';
import { PICTURE_DATA } from './../../../utils/constants';
import PictureImg from './../../../assets/painting.png';
import { useState } from 'react';

export default function Picture() {
  const {
    picture,
    picture__figure,
    picture__container,
    picture__figcaption,
    picture__subtitle,
    picture__span,
    picture__type_top,
    picture__container_type_height,
  } = styles;
  const [isContainerOpen, setIsContainerOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsContainerOpen(true);
  };

  const handleMouseLeave = () => {
    setIsContainerOpen(false);
  };

  return (
    <figure className={picture__figure}>
      <img src={PictureImg} alt='Картина галереи' className={picture} />

      <div
        className={
          isContainerOpen
            ? `${picture__container} ${picture__container_type_height}`
            : picture__container
        }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isContainerOpen ? (
          <>
            <figcaption
              className={`${picture__figcaption} ${picture__type_top}`}
            >
              Название
            </figcaption>
            <p className={picture__subtitle}>
              <span className={picture__span}>{PICTURE_DATA.author}</span>{' '}
              Rembrandt
            </p>
            <p className={picture__subtitle}>
              <span className={picture__span}>{PICTURE_DATA.created}</span> 1642
            </p>
            <p className={picture__subtitle}>
              <span className={picture__span}>{PICTURE_DATA.location}</span> The
              Rijksmuseum
            </p>
          </>
        ) : (
          <figcaption className={picture__figcaption}>Название</figcaption>
        )}
      </div>
    </figure>
  );
}
