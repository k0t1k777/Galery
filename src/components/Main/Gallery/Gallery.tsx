import Picture from '../Picture/Picture';
import styles from './Gallery.module.scss';
import { useSelector } from 'react-redux';
import { SliceProps } from '../../../store/features/slice/slice';
import { useQuery } from 'react-query';
import { fetchAuthors, fetchLocations } from '../../../services/apiPainting';
import { Authors, Locations } from '../../../types/types';

export default function Gallery() {
  const { gallery } = styles;

  const showPictures = useSelector((state: SliceProps) => state.showPictures);
  
  const dataAuthors = useQuery('authors', fetchAuthors, { initialData: [] });
  const dataLocations = useQuery('locations', fetchLocations, {initialData: [] })

  return (
    <div className={gallery}>
      {showPictures.map((item) => {
        const author = dataAuthors.data?.find((author: Authors) => author.id === item.authorId);
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
      })}
    </div>
  );
}
