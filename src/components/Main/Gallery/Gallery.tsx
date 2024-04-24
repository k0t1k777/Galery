import Picture from '../Picture/Picture';
import styles from './Gallery.module.scss';
import { Pictures, Authors, Locations } from './../../Main/Main';

interface GalleryProps {
  pictures: Pictures[];
  authors: Authors[];
  locations: Locations[];
}

export default function Gallery({
  pictures,
  authors,
  locations,
}: GalleryProps) {
  const { gallery } = styles;

  return (
    <div className={gallery}>
      {pictures.map((item) => {
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
