import Picture from '../Picture/Picture';
import styles from './Gallery.module.scss';
import * as ApiQuery from '../../../services/api';
import { Authors, Locations, Pictures } from '../../../types/types';
import { useSelector } from 'react-redux';
import { Gallery_DATA } from '../../utills/constants';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

export default function Gallery() {
  const { gallery, gallery__container } = styles;
  const isDarkTheme = useSelector((state: any) => state.counter.isDarkTheme);
  const pictures = useSelector((state: any) => state.counter.pictures);
  console.log('pictures: ', pictures);

  const dataAuthors = ApiQuery.useGetAuthorsQuery('');
  const dataLocations = ApiQuery.useGetLocationsQuery('');

  return (
    <div className={gallery}>
      {pictures.length !== 0 ? (
        pictures.map((item: Pictures) => {
          const author = dataAuthors.data.find(
            (author: Authors) => author.id === item.authorId
          );
          const place = dataLocations.data.find(
            (location: Locations) => location.id === item.locationId
          );
          return (
            <Picture
              key={item.id}
              image={item.imageUrl}
              namePicture={item.name}
              author={author ? author.name : 'Unknown Author'}
              date={item.created}
              place={place ? place.location : 'Unknown Location'}
            />
          );
        })
      ) : (
        <div className={gallery__container}>
          <p
            className={cx('gallery__nothing', {
              'gallery__nothing--dark': isDarkTheme === 'dark'
            })}>
            {Gallery_DATA.nothing}
          </p>
        </div>
      )}
    </div>
  );
}
