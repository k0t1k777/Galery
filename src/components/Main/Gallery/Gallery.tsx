import Picture from '../Picture/Picture';
import styles from './Gallery.module.scss';
import { useQuery } from 'react-query';
import { fetchAuthors, fetchLocations } from '../../../services/apiPainting';
import { Authors, Locations, Pictures } from '../../../types/types';
import { useSelector } from 'react-redux';
import { SliceProps } from '../../../store/features/slice/slice';
import { Gallery_DATA } from '../../utills/constants';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

export default function Gallery() {
  const { gallery } = styles;
  const isDarkTheme = useSelector((state: SliceProps) => state.isDarkTheme);
  const pictures = useSelector((state: SliceProps) => state.pictures);
  const dataAuthors = useQuery('authors', fetchAuthors, { initialData: [] });
  const dataLocations = useQuery('locations', fetchLocations, {
    initialData: []
  });

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
        <p
          className={cx('gallery__nothing', {
            'gallery__nothing--dark': isDarkTheme === 'dark'
          })}>
          {Gallery_DATA.nothing}
        </p>
      )}
    </div>
  );
}
