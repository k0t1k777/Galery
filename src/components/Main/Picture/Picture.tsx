import './Picture.css';
import PictureImg from './../../../assets/painting.png';

export default function Picture() {
  return (
    <section className='picture'>
      <img src={PictureImg} alt='Картина галереи' />
      <h3 className='picture__text'>Название</h3>
    </section>
  );
}
