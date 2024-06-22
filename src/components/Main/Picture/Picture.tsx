import styles from 'src/components/Main/Picture/Picture.module.scss';
import { PICTURE_DATA } from 'src/components/utills/constants';
import { BASE_URL } from 'src/components/utills/constants'
import { useState } from 'react';

interface PictureProps {
  image: string;
  namePicture: string;
  date: string;
  author: string;
  place: string;
}

export default function Picture({
  image,
  namePicture,
  date,
  author,
  place
}: PictureProps) {
  const {
    picture,
    picture__figure,
    picture__container,
    picture__figcaption,
    picture__subtitle,
    picture__span,
    picture__container_type_height
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
      <img
        src={`${BASE_URL}/${image}`}
        alt="Картина галереи"
        className={picture}
      />
      <div
        className={
          isContainerOpen
            ? `${picture__container} ${picture__container_type_height}`
            : picture__container
        }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {isContainerOpen ? (
          <div>
            <figcaption
              className={picture__figcaption}>
              {namePicture}
            </figcaption>
            <p className={picture__subtitle}>
              <span className={picture__span}>{PICTURE_DATA.author}</span>
              {author}
            </p>
            <p className={picture__subtitle}>
              <span className={picture__span}>{PICTURE_DATA.created}</span>
              {date}
            </p>
            <p className={picture__subtitle}>
              <span className={picture__span}>{PICTURE_DATA.location}</span>
              {place}
            </p>
          </div>
        ) : (
          <figcaption className={picture__figcaption}>{namePicture}</figcaption>
        )}
      </div>
    </figure>
  );
}
