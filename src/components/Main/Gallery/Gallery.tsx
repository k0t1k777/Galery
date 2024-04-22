import Picture from '../Picture/Picture';
import './Gallery.css';

export default function Gallery() {
  return (
    // <div className='gallery'>
    //   <Picture />
    //   <Picture />
    //   <Picture />
    //   <Picture />
    //   <Picture />
    //   <Picture />
    // </div>
    <ul className='gallery'>
      <li className='gallery__item'>
        <Picture />
      </li>
      <li className='gallery__item'>
        <Picture />
      </li>
      <li className='gallery__item'>
        <Picture />
      </li>
      <li className='gallery__item'>
        <Picture />
      </li>
      <li className='gallery__item'>
        <Picture />
      </li>
      <li className='gallery__item'>
        <Picture />
      </li>
    </ul>
  );
}
