import './Picture.css';
import PictureImg from './../../../assets/painting.png';

export default function Picture() {
  return (
    <figure>
      <img src={PictureImg} alt='Картина галереи' className='picture'/>
      <figcaption className='picture__text'>Название</figcaption>
    </figure>
  );
}
