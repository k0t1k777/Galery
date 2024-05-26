import Picture from '../Picture/Picture';
import styles from './Gallery.module.scss';
import { useSelector } from 'react-redux';
import { SliceProps } from '../../../store/features/slice/slice';

export default function Gallery() {
  const { gallery } = styles;

  const authors = useSelector((state: SliceProps) => state.authors);
  const locations = useSelector((state: SliceProps) => state.locations);
  const showPictures = useSelector((state: SliceProps) => state.showPictures);
  
  return (
    <div className={gallery}>
      {showPictures.map((item) => {
        const author = authors.find((author) => author.id === item.authorId);
        const place = locations.find(
          (location) => location.id === item.locationId
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
