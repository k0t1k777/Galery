import styles from './Picture.module.scss'

import PictureImg from './../../../assets/painting.png';

export default function Picture() {
  const {
    picture,
    picture__figure ,
    picture__figcaption,
  } = styles
  return (
    <figure className={picture__figure}>
      <img src={PictureImg} alt='Картина галереи' className={picture} />
      <figcaption className={picture__figcaption}>Название</figcaption>
    </figure>
  );
}
