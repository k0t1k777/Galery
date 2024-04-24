import Filter from './Filter/Filter';
import Gallery from './Gallery/Gallery';
import styles from './Main.module.scss';

interface MainProps {
  pictures: Pictures[];
  authors: Authors[];
  locations: Locations[];
}

export interface Pictures {
  pictures: Pictures[];
  id: string;
  imageUrl: string;
  name: string;
  authorId: string;
  created: string;
  locationId: string;
}

export interface Authors {
  authors: Authors[];
  id: string;
  name: string;
}

export interface Locations {
  locations: Locations[];
  id: string;
  location: string;
}

export default function Main({ pictures, authors, locations }: MainProps) {
  const { main } = styles;
  return (
    <div className={main}>
      <Filter />
      <Gallery pictures={pictures} authors={authors} locations={locations}/>
    </div>
  );
}
